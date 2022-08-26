import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import SkeletonCard from '../components/layout/skeletonCard'

import BlogFilter from '../components/layout/blog-filter'

import MoreBlogs from '../components/pages/more-posts'
import FilteredBlogs from '../components/blogs/filtered-posts'
import LoadMoreBlogs from '../components/blogs/load-more'

import useSWR from "swr";
import { useState, useEffect } from 'react';
import axios from "axios";



import { getFirstBlogs, getMenus, blogAuthors, blogCategories } from '../lib/wp/api'

const loadedMoreData = {};

export default function Blogs({ menus , firstBlogs, authors, categories }) {
  
  const pageTitle = "GL - Blogs";
  const { mainNav, mainFooter } = menus || {};
  const blogs = firstBlogs.edges
  
  const loadedPost = {};

  const metaTitle     = 'Blog Landing - Gorilla Logic';
  const featuredImage = '';
  const metaKeywords  = '';
  const metaDesc      = '';
  const canonical     = '';

  const loadPerPage = 6;

  const [startFetching, setStartFetching] = useState(false);
  const [indexValue, setIndexValue] = useState(0);
  
  const [loading,setLoading]      = useState(true)
  const [dataCount, setDataCount] = useState(loadPerPage);
  const [pageIndex, setPageIndex] = useState(1)  

  //Filters shared state
  const [ categoryId, setCategoryId ]     = useState( 0 );
  const [ authorId, setAuthorId ]         = useState( 0 );
  const [ searchPhrase, setSearchString ] = useState( "" );

  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  
  const filteredFetch = (categoryId>0 || authorId>0 || searchPhrase!="") ? true : false;

  const morePosts = filteredFetch ? [] : blogs.slice(0);

  const  apiPost = `https://headlessgl22.wpengine.com/wp-json/wp/v2/posts/?status=publish&per_page=${loadPerPage}&offset=${dataCount}&orderby=date&order=desc`;

  const categoryApi = categoryId>0 ? `&categories=${categoryId}` : ""
  const authorApi   = authorId>0 ? `&author=${authorId}` : ""
  const searchApi   = searchPhrase!="" ? `&search=${searchPhrase}` : ""
  const filteredPost = `https://headlessgl22.wpengine.com/wp-json/wp/v2/posts/?status=publish&per_page=${loadPerPage}&offset=0&orderby=date&order=desc${categoryApi}${authorApi}${searchApi}`;
   
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
  setDataCount(dataCount + 3)
  setPageIndex(pageIndex + 1)

  setData((initialData) => [...initialData,data])
};

  console.log("_______:");  
  console.log("category:");
  console.log(categoryId);
  console.log("author:");
  console.log(authorId);
  console.log("search:");
  console.log(searchPhrase);
  console.log("API:");
  console.log(filteredPost);
  console.log("filter:");
  console.log(data?.length);
  console.log(filteredFetch);
  const filteredMessage = (filteredFetch && data?.length===0) ? "No results for this filter." : (filteredFetch) ? `Total results: ${data?.length}` : "";
  const filteredLoadButton = (data?.length>=loadPerPage) ? true : false;

  

  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setLoading2(false);
      }, 1000);
    }
  }, [data]);
  const metaData = {metaTitle,featuredImage,metaKeywords,metaDesc,canonical}
  return (
    <>
      <Layout>
      <Header header={mainNav} metaData={metaData} />
    
      <Container>
        <BlogFilter authors={authors} categories={categories} onSubmit={setCategoryId} onSubmit2={setAuthorId} onSubmitSearch={setSearchString}/>

        {loading2 ? (
            <SkeletonCard />
          ) : (
            <>
              <h6 className='animate-pulse'>{filteredMessage}</h6> 
              { (filteredFetch && data?.length>0) ?
                <FilteredBlogs className='animate-pulse' posts={data} />
                : (morePosts.length > 0) ?
                  <MoreBlogs className='animate-pulse' posts={morePosts} />
                : <p>No filtered info</p>
              }

              {(startFetching) ?  
              (dataLoaded && dataLoaded.length > 0) ? (dataLoaded.map((blogs, index) => (
                <LoadMoreBlogs className='animate-pulse' key={index} posts={blogs} />
                ))) :  <p>Loading  </p>
                : <p></p>
              } 
          </>
      )}
        
        


        {(filteredLoadButton) ? 
        <button
          className='rounded mx-auto flex items-center cursor-pointer text-white	bg-gradient-to-t from-orange to-darkorange hover:text-darkblues duration-500  px-6 py-6'
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