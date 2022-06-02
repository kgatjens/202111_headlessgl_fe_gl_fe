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

const loadedMoreData = {};

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

  const loadPerPage = 3;

  const [startFetching, setStartFetching] = useState(false);
  const [indexValue, setIndexValue] = useState(0);
  
  //888
  const [loading,setLoading] = useState(true)
  const [dataCount, setDataCount] = useState(3);
  const [pageIndex, setPageIndex] = useState(1)  

 const fetcher = async (url) => await axios.get(url).then((res) => res.data);

  
  const  apiPost = `https://headlessgl22.wpengine.com/wp-json/wp/v2/posts/?status=publish&per_page=${loadPerPage}&offset=${indexValue}&orderby=date&order=desc`
   const {data, error} = useSWR(apiPost, fetcher,{
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (error.status === 404) return
        if (retryCount >= 10) return
        setLoading(false)
        setTimeout(() => revalidate({ retryCount }), 5000)
    }
})

  // console.log("ˆˆˆ*WWW*ˆˆˆˆ");
  // console.log(apiPost);
  // console.log(data);
  // console.log("ˆˆˆ*WWW2*ˆˆˆˆ");
  const initialData = []
  const [dataLoaded, setData] = useState(initialData);

  const handleClick = () => {
    setStartFetching(true);
    setIndexValue(indexValue+loadPerPage);

    console.log("count " + dataCount +  " pageIndex " + pageIndex)
    setDataCount(dataCount + 3)
    setPageIndex(pageIndex + 1)

    setData((initialData) => [...initialData,data])
    
  };

  
  const metaData = {metaTitle,featuredImage,metaKeywords,metaDesc,canonical}
  return (
    <>
      <Layout>
      <Header header={mainNav} metaData={metaData} />
    
      <Container>
      
        {morePosts.length > 0 && 
        <MoreBlogs posts={morePosts} />}
          {console.log("ˆˆˆ*WWW*ˆˆˆˆ")}


{/* {console.log(dataLoaded)}
{console.log("ˆˆˆ*WWW2*ˆˆˆˆ")} */}
<ul>
          {(startFetching) ?  
          
            (dataLoaded && dataLoaded.length > 0) ? (dataLoaded.map((post,index) => (
              
              post.map((blogInfo,i) => (
                //console.log(blogInfo.title.rendered)
                  <li key={blogInfo.id}><p>{blogInfo.title.rendered}</p></li>
              ))

              ))) : (<p>Loading  </p>)
              : <p>No data found ...</p> 
            
            } 
</ul>
      </Container>
      {/* {startFetching && <MoreLoader value={indexValue} perPage={loadPerPage} />} */}
    
      <button
        className='className="flex items-center cursor-pointer	bg-gray-100 hover:bg-gray-600 hover:text-white transition-colors duration-500 border border-gray-500 px-4 py-3"'
        onClick={handleClick}
        type="button"
        >
        Load More 
        ({indexValue})    
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