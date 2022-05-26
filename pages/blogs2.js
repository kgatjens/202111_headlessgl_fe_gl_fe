import Image from 'next/image'
import Router from 'next/router';

import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import MoreBlogs from '../components/pages/more-posts'

import useSWR, { useSWRConfig } from "swr";
import { useEffect, useState } from 'react';
import axios from "axios";

import { getFirstBlogs, getMenus } from '../lib/wp/api'
import { data } from 'autoprefixer';
//GOAL HERE, TRY IT WITH MUTATIONS TO GET DATA ON THE SAME COMPONENT


export default function Blogs({ menus , firstBlogs }) {
  
  const pageTitle = "GL - Blogs";
  const { mainNav, mainFooter } = menus || {};
  const blogs = firstBlogs.edges
  const morePosts = blogs.slice(0)
  const loadedPost = {};

  const metaTitle     = 'Blog Landing - Gorilla Logic';
  const featuredImage = '';
  const metaKeywords  = '';
  const metaDesc      = '';
  const canonical     = '';

  const loadPerPage = 6;

  
  
  const loadMore = async () => {
    const { mutate } = useSWRConfig()

    const { data } = useSWR('https://headlessgl22.wpengine.com/wp-json/wp/v2/posts/?status=publish&per_page=6&offset=6&orderby=date&order=desc',
    (...args) => fetch(...args).then((res) => res.json()))
  }

  console.log(data)
  if (!data) return <p>loading</p>
 

  const metaData = {metaTitle,featuredImage,metaKeywords,metaDesc,canonical}
  return (
    <>
      <Layout>
      <Header header={mainNav} metaData={metaData} />
    
      <Container>
      
        {morePosts.length > 0 && 
        <MoreBlogs posts={morePosts} />}
        
        
        {/* {loadedMoreData.length > 0 && 
        <MoreBlogs posts={loadedPost} />} */}
            

      </Container>
      
        <button 
        className='className="flex items-center cursor-pointer	bg-gray-100 hover:bg-gray-600 hover:text-white transition-colors duration-500 border border-gray-500 px-4 py-3"'
        onClick={() => loadMore()}>Load More</button>

      <Footer footer={mainFooter}/>
    </Layout>
    </>
  )
}

export async function getStaticProps() {
    
  const firstBlogs = await getFirstBlogs()
  const menus = await getMenus()
  return {
    props: { menus , firstBlogs },
  }
}