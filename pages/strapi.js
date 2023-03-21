
import axios from "axios";
import { format } from 'date-fns';
import useSWR from "swr";
import Layout from '../components/layout/layout'

import { useRouter } from "next/router";
import { useState, useEffect } from "react";


// function getWPData(){
//   const address = "https://gorillalogic.com/wp-json/wp/v2/posts?offset=0&per_page=1";
//   const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  
//    return useSWR(address, fetcher,{
//     revalidateIfStale: false,
//     revalidateOnFocus: false,
//     revalidateOnReconnect: false
//   });
// }

// function  setStrapiData(){

// }

function FetchAndRender() {
  // const address = "https://gorillalogic.com/wp-json/wp/v2/posts?offset=0&per_page=3";
  // const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  // const { data, error, mutate } = useSWR( [address,'get'], fetcher,{
  //   revalidateIfStale: false,
  //   revalidateOnFocus: false,
  //   revalidateOnReconnect: false
  // });

        // const response = await fetch('https://gorillalogic.com/wp-json/wp/v2/posts?offset=0&per_page=2');
        // const data = await response.json();
    
  

  return data
}

export default function StrapiImporter(){

//   onClick={async () => {
//     const newPosts = await getNewPostsFromApi();
//     setPosts(...posts, ...newPosts);
// }}

const initialData = []
const [dataLoaded, setData] = useState(initialData);
function handleClick() {

//function handleClick() {
  setData((initialData) => [FetchAndRender()])

}

  
  var m = 0;
  const postAddress = "http://localhost:1337/api/articles"
  
  console.log(dataLoaded)
  // if (Array.isArray(data)) {
  // const a = data.forEach((post) => {
  //     try{

  //         const rest = axios.post(postAddress, 
  //           {
  //             "data": {
  //               title: post.title.rendered,
  //               description: post.title.rendered,
  //               content: post.content.rendered,
  //               CreatedDate: format( new Date(post.date_gmt), 'yyyy-MM-dd'),
  //               slug: post.slug,
  //             }
  //           });
  //           console.log("counter: ");
  //         console.log(m=m+1);
       
       
  //     }catch(err){
  //       console.log(err.error);
  //     }
  //   });
  // }

    return(
      <>

      <Layout >

      <h1>Importer</h1>
      {/* {shouldRender && <FetchAndRender />} */}

      <button
            className='className="flex items-center cursor-pointer	bg-gray-100 hover:bg-gray-600 hover:text-white transition-colors duration-500 border border-gray-500 px-4 py-3"'
            onClick={handleClick}
            type="button"
            >
            Import Now. 
        </button>

      </Layout>
      </>
        
    )
}