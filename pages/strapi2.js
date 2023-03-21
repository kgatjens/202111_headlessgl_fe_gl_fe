
import axios from "axios";
import { format } from 'date-fns';
import useSWR from "swr";
import Layout from '../components/layout/layout'

import { useRouter } from "next/router";
import { useState, useEffect } from "react";


// function getWPData(){
  const address = "https://gorillalogic.com/wp-json/wp/v2/posts?offset=0&per_page=2";
//   const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  
//    return useSWR(address, fetcher,{
//     revalidateIfStale: false,
//     revalidateOnFocus: false,
//     revalidateOnReconnect: false
//   });
// }



export default function StrapiImporter(){

    const fetcher = async (url) => await axios.get(url).then((res) => res.data);

    const {data, error} = useSWR( address, fetcher,{
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
     initialData = []
    setData((initialData) => [data])
  };


console.log("data",data)
console.log("initialData",initialData)
console.log("dataLoaded",dataLoaded)
  
  var m = 0;
  const postAddress = "http://localhost:1337/api/articles"
   
  if (Array.isArray(dataLoaded)) {
  const a = dataLoaded.forEach((post) => {
    
    post.forEach((blog) => {
        console.log(blog)

    });
    
    //   try{

    //       const rest = axios.post(postAddress, 
    //         {
    //           "data": {
    //             title: post.title.rendered,
    //             description: post.title.rendered,
    //             content: post.content.rendered,
    //             CreatedDate: format( new Date(post.date_gmt), 'yyyy-MM-dd'),
    //             slug: post.slug,
    //           }
    //         });
    //         console.log("counter: ");
    //       console.log(m=m+1);
       
       
    //   }catch(err){
    //     console.log(err.error);
    //   }
    });
  }
  
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

      <h1>Importer 2</h1>
      {/* {shouldRender && <FetchAndRender />} */}

      <button
            className='className="flex items-center cursor-pointer	bg-gray-100 hover:bg-gray-600 hover:text-white transition-colors duration-500 border border-gray-500 px-4 py-3"'
            onClick={handleClick}
            type="button"
            >
            Import Now. 
        </button>
       
            <ul>
                {/* {
                (dataLoaded.map((blogs) => (
                    ((blogs || []).forEach((blog) => (
                        <li  className="px-5 py-2 hover:text-gray2"  key={blog.id} posts={blogs}>
                            
                            {`Added: ${blog.title.rendered}`}
                            </li>
                            
                    )))}
                ))) 
                }  */}
              </ul>
      </Layout>
      </>
        
    )
}