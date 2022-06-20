import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import BlogFilter from '../components/layout/blog-filter'

import MoreBlogs from '../components/pages/more-posts'
import FilteredBlogs from '../components/blogs/filtered-posts'
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

  const loadPerPage = 6;

  const [startFetching, setStartFetching] = useState(false);
  const [indexValue, setIndexValue] = useState(0);
  
  const [loading,setLoading] = useState(true)
  const [dataCount, setDataCount] = useState(loadPerPage);
  const [pageIndex, setPageIndex] = useState(1)  

  //Filters shared state
  const [ categoryId, setCategoryId ] = useState( 0 );
  const [ authorId, setAuthorId ]     = useState( 0 );

  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  
  const filteredFetch = (categoryId>0 || authorId>0) ? true : false;

  const  apiPost = `https://headlessgl22.wpengine.com/wp-json/wp/v2/posts/?status=publish&per_page=${loadPerPage}&offset=${dataCount}&orderby=date&order=desc`;

  const categoryApi = categoryId>0 ? `&categories=${categoryId}` : ""
  const authorApi   = authorId>0 ? `&author=${authorId}` : ""
  const  filteredPost = `https://headlessgl22.wpengine.com/wp-json/wp/v2/posts/?status=publish&per_page=${loadPerPage}&offset=0&orderby=date&order=desc${categoryApi}${authorApi}`;
   
  const {data, error} = useSWR(filteredFetch ? filteredPost : apiPost, fetcher,{
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (error.status === 404) return
        if (retryCount >= 10) return
        setLoading(false)
        setTimeout(() => revalidate({ retryCount }), 1000)
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


//functional URL for filter author & caegories:
//handleBlogFilterFormSubmit
//`https://headlessgl22.wpengine.com/wp-json/wp/v2/posts/?status=publish&per_page=${loadPerPage}&offset=${dataCount}&orderby=date&order=desc&categories=${categoryId}`
//https://headlessgl22.wpengine.com/wp-json/wp/v2/posts/?status=publish&per_page=10&offset=0&orderby=date&order=desc&author=72&categories=15

  console.log("_______:");  
  console.log("category:");
  console.log(categoryId);
  console.log("author:");
  console.log(authorId);
  console.log("API:");
  console.log(filteredPost);
  console.log("filter:");
  console.log(data?.length);
  console.log(filteredFetch);
  const filteredMessage = (filteredFetch && data?.length===0) ? "No results for this filter." : (filteredFetch) ? `Total results: ${data?.length}` : "";
  const filteredLoadButton = (data?.length>=loadPerPage) ? true : false;

  const metaData = {metaTitle,featuredImage,metaKeywords,metaDesc,canonical}
  return (
    <>
      <Layout>
      <Header header={mainNav} metaData={metaData} />
    
      <Container>
        <BlogFilter authors={authors} categories={categories} onSubmit={setCategoryId} onSubmit2={setAuthorId}/>

        <h6>{filteredMessage}</h6>
        {(filteredFetch && data?.length>0) ?
          <FilteredBlogs posts={data} />
          : (morePosts.length > 0) ?
            <MoreBlogs posts={morePosts} />
          : <p>No filtered info</p>
        }

        {(startFetching) ?  
        (dataLoaded && dataLoaded.length > 0) ? (dataLoaded.map((blogs, index) => (
          <LoadMoreBlogs key={index} posts={blogs} />
          ))) :  <p>Loading  </p>
          : <p></p>
        } 

        {(filteredLoadButton) ? 
        <button
          className=' mx-auto flex items-center cursor-pointer	bg-gray-100 hover:bg-gray-600 hover:text-white transition-colors duration-500 border border-gray-500 px-6 py-6'
          onClick={handleClick}
          type="button"
          >
          Load More 
          ({indexValue})    
        </button>
         : <div></div>
        }
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