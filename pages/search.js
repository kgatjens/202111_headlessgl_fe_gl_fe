import Image from 'next/image'
import { useEffect, useState } from 'react';
import Router from 'next/router';

//Ken for search
import useSWR from "swr";
import axios from "axios";


import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import Header from '../components/layout/header'
import NavSearch from '../components/search/search-form-page';
import Footer from '../components/layout/footer'


import { getMenus } from '../lib/wp/api'

import { PER_PAGE_FIRST } from '../lib/utils/pagination';

export default function Search({ menus }) {
  
  const pageTitle = "GL - Search";
  const { mainNav, mainFooter } = menus || {};
  
  const searchQueryString = process.browser ? ( Router?.query?.s ?? '' ) : '';//query string

  //const address = `https://headlessgl22.wpengine.com/wp-json/wp/v2/search/?per_page=20&subtype=page&subtype=post&search=`+searchQueryString;
  const address = `http://localhost:1337/api/fuzzy-search/search?query=back-end`+searchQueryString;
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);

  if (error) <p>Loading failed...</p>;
  if (!data) <h1>Loading...</h1>;

  const metaTitle     = "Search Page"
  const featuredImage = ""
  const metaKeywords  = "Search Key"
  const metaDesc      = "Search Desc"
  const canonical     = ""

  const metaData = {metaTitle,featuredImage,metaKeywords,metaDesc,canonical}


  console.log(data);
  return (
    <>
      <Layout>
      
      <Header header={mainNav} metaData={metaData}  />
      
      
      <Container>
      <NavSearch/>

      <div className="container mb-2 flex mx-auto w-full items-center justify-center">

      <ul role="list" className="flex flex-col p-4">
        {data &&
          data.articles.map((id,item) => (
            <>
            {console.log(item)}
            <li key={id} className="ml-4 font-normal">
                <p>{id.title}</p>
              </li>
          
            </>
          ))}
           {data &&
          data.capabilities.map((id,item) => (
            <>
            {console.log(item)}
            <li key={id} className="ml-4 font-normal">
                <p>{id.HeaderMainTitle}</p>
              </li>
          
            </>
          ))}
      </ul>
      </div>

      </Container>
      <Footer footer={mainFooter}/>
    </Layout>
    </>
  )
}



export async function getStaticProps() {
  
  const menus = await getMenus()
  return {
    props: { menus },
  }


//   return {
//     props: {
//       preview: context.preview || false,
//       post,
//       morePosts,
//     },
//   }
//-----

// return {
//     props: {
//       preview,
//       post: data?.post ?? null,
//       morePosts: data?.morePosts ?? null,
//     },
//   }
}