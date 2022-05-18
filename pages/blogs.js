import Image from 'next/image'
import Router from 'next/router';

import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import MoreBlogs from '../components/pages/more-posts'

import useSWR from "swr";
import axios from "axios";

import { getFirstBlogs, getMenus } from '../lib/wp/api'

export default function Blogs({ menus , firstBlogs }) {
  
  const pageTitle = "GL - Blogs";
  const { mainNav, mainFooter } = menus || {};
  const blogs = firstBlogs.edges
  const morePosts = blogs.slice(1)

  const metaTitle     = 'Blog Landing - Gorilla Logic';
  const featuredImage = '';
  const metaKeywords  = '';
  const metaDesc      = '';
  const canonical     = '';

  const address = `https://gorillalogic.com/wp-json/wp/v2/search/?per_page=20&subtype=page&subtype=post&search=agile`;
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);

  const handleClick = (event) => {
      
    event.preventDefault();
    
   
    
    
  };

  //const headerData = {pageTitle, menuItems}
  const metaData = {metaTitle,featuredImage,metaKeywords,metaDesc,canonical}
  return (
    <>
      <Layout>
      <Header header={mainNav} metaData={metaData} />
    
      <Container>
      <button
            className='className="flex items-center cursor-pointer	bg-gray-100 hover:bg-gray-600 hover:text-white transition-colors duration-500 border border-gray-500 px-4 py-3"'
            onClick={handleClick}
            type="button"
            >
            Load More
        </button>
        
        {morePosts.length > 0 && 
        <MoreBlogs posts={morePosts} />}

      </Container>

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