import Image from 'next/image'
import { useEffect, useState } from 'react';
import Router from 'next/router';

//Ken for search
import useSWR from "swr";
import axios from "axios";


import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import Header from '../components/layout/header'

import { getMenus } from '../lib/wp/api'

import { PER_PAGE_FIRST } from '../lib/utils/pagination';

export default function Search({ menus }) {
  
  const pageTitle = "GL - Search";
  const { mainNav, mainFooter } = menus || {};
  
  const searchQueryString = process.browser ? ( Router?.query?.s ?? '' ) : '';

  console.log(searchQueryString);

  const address = `https://gorillalogic.com/wp-json/wp/v2/search/?per_page=20&subtype=page&subtype=post&search=`+searchQueryString;
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);

  if (error) <p>Loading failed...</p>;
  if (!data) <h1>Loading...</h1>;

  console.log(data);


  return (
    <>
      <Layout>
      <Header header={mainNav} />
      
      
      <Container>
      <div className="container mb-2 flex mx-auto w-full items-center justify-center">

      <ul className="flex flex-col p-4">
        {data &&
          data.map((item) => (
            <li className="border-gray-400 flex flex-row mb-2" key={item.id} >
              <div className="select-none flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 hover:shadow-2xl border-green">
                <div className="flex-1 pl-1 mr-16">
                    <div className="font-medium">
                      <h3 className="text-darkblue">{`${item.title}`}</h3>
                    </div>
                </div>
                <div className="w-1/4 text-wrap text-center flex text-white text-bold flex-col rounded-md bg-darkorange justify-center items-center mr-10 p-2">
												<a href="">View</a>
											</div>
              </div>
            </li>
          ))}
      </ul>
      </div>

      </Container>
    </Layout>
    </>
  )
}



export async function getStaticProps() {
  
  //const searchQueryString = process.browser ? ( Router?.query?.s ?? '' ) : '';

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