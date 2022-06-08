import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import BlogFilter from '../components/layout/blog-filter'

import MoreBlogs from '../components/pages/more-posts'
import LoadMoreBlogs from '../components/blogs/load-more'

import useSWR from "swr";
import { useState } from 'react';
import axios from "axios";

import { getFirstBlogs, getMenus, blogAuthors, blogCategories } from '../lib/wp/api'

const loadedMoreData = {};

export default function Blogs({ menus , firstBlogs, authors, categories }) {
  
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

  const loadPerPage = 3;

  const [startFetching, setStartFetching] = useState(false);
  const [indexValue, setIndexValue] = useState(0);
  
  const [loading,setLoading] = useState(true)
  const [dataCount, setDataCount] = useState(6);
  const [pageIndex, setPageIndex] = useState(1)  

  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  
  const  apiPost = `https://headlessgl22.wpengine.com/wp-json/wp/v2/posts/?status=publish&per_page=${loadPerPage}&offset=${dataCount}&orderby=date&order=desc`
   const {data, error} = useSWR(apiPost, fetcher,{
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (error.status === 404) return
        if (retryCount >= 10) return
        setLoading(false)
        setTimeout(() => revalidate({ retryCount }), 5000)
    }
})

  const initialData = []
  const [dataLoaded, setData] = useState(initialData);

  const handleClick = () => {
    setStartFetching(true);
    setIndexValue(indexValue+loadPerPage);
    //console.log("count " + dataCount +  " pageIndex " + pageIndex)
    setDataCount(dataCount + 3)
    setPageIndex(pageIndex + 1)

    setData((initialData) => [...initialData,data])
    
  };

  console.log("categories:");
  console.log(categories);
  
  const metaData = {metaTitle,featuredImage,metaKeywords,metaDesc,canonical}
  return (
    <>
      <Layout>
      <Header header={mainNav} metaData={metaData} />
    
      <Container>
        <BlogFilter authors={authors} categories={categories}/>


      
        {morePosts.length > 0 && 
        <MoreBlogs posts={morePosts} />}
          
        {(startFetching) ?  
        (dataLoaded && dataLoaded.length > 0) ? (dataLoaded.map((blogs, index) => (
          
          <LoadMoreBlogs key={index} posts={blogs} />
          
          ))) :  <p>Loading  </p>
          : <p></p>
        } 

        <button
          className=' mx-auto flex items-center cursor-pointer	bg-gray-100 hover:bg-gray-600 hover:text-white transition-colors duration-500 border border-gray-500 px-6 py-6'
          onClick={handleClick}
          type="button"
          >
          Load More 
          ({indexValue})    
        </button>
      </Container>
    
      <Footer footer={mainFooter}/>
    </Layout>
    </>
  )
}

export async function getStaticProps() {
    
  const firstBlogs = await getFirstBlogs()
  const menus = await getMenus()
  const authors = await blogAuthors()
  const categories = await blogCategories()
  
  return {
    props: { menus , firstBlogs, authors, categories },
  }
}