import Image from 'next/image'
import Router from 'next/router';

import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import MoreBlogs from '../components/pages/more-posts'

import useSWR from "swr";
import { useEffect, useState } from 'react';
import axios from "axios";

import { getFirstBlogs, getMenus } from '../lib/wp/api'


const fetcher = (...args) => fetch(...args).then((res) => res.json());

const loadedMoreData = {};

const MoreLoader = ({ value, perPage }) => {
  const url = `https://headlessgl22.wpengine.com/wp-json/wp/v2/posts/?status=publish&per_page=${perPage}&offset=${value}&orderby=date&order=desc`
  const { data, error } = useSWR(
    url,
    fetcher
  );
  
  // console.log("ˆˆˆ1ˆˆˆˆ");
  // console.log(value);
  // console.log(perPage);
  // console.log(data);
  // console.log(error);
  // console.log("ˆˆˆˆ2ˆˆˆ");

  loadedMoreData = data || {};
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  if (!data[0]) return <div>not found</div>;
  return "";
};

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

  const [startFetching, setStartFetching] = useState(false);
  const [indexValue, setIndexValue] = useState(0);
  const [loadedData, setloadedData] = useState();

  const handleClick = () => {
    setStartFetching(true);
    setIndexValue(indexValue+loadPerPage);
    setloadedData(loadedMoreData);

    // console.log('increment like count');
    // console.log(indexValue+" = "+loadPerPage);
  };

  console.log("ˆˆˆ1ˆˆˆˆ");
  //console.log(loadedMoreData);
  
  const metaData = {metaTitle,featuredImage,metaKeywords,metaDesc,canonical}
  return (
    <>
      <Layout>
      <Header header={mainNav} metaData={metaData} />
    
      <Container>
      
        {morePosts.length > 0 && 
        <MoreBlogs posts={morePosts} />}
{console.log({loadedData})}
        {/* {loadedMoreData.length > 0 && 
        <MoreBlogs posts={loadedPost} />} */}
            

      </Container>
      <button
            className='className="flex items-center cursor-pointer	bg-gray-100 hover:bg-gray-600 hover:text-white transition-colors duration-500 border border-gray-500 px-4 py-3"'
            onClick={handleClick}
            type="button"
            >
            Load More 
            ({indexValue})
            {startFetching && <MoreLoader value={indexValue} perPage={loadPerPage} />}

        </button>

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