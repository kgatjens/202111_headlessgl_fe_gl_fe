
import axios from "axios";
import { format } from 'date-fns';
import Layout from '../components/layout/layout'

import { useState, useEffect } from "react";

import { getFirstBlogs, blogAuthors, blogCategories } from '../lib/wp/api'


export default function StrapiImporter({firstBlogs}){

const blogs = firstBlogs.edges

//console.log(blogs);

function handleClick() {
         if (Array.isArray(blogs)) {
  const a = blogs.forEach((post) => {
      try{
        console.log(post.node)
       
          const rest = axios.post(postAddress, 
            {
              "data": {
                title: post.node.title,
                description: post.node.excerpt,
                content: post.node.excerpt,
                CreatedDate: format( new Date(post.node.date), 'yyyy-MM-dd'),
                slug: post.node.slug,
              }
            });
            post.node.title
       
       
      }catch(err){
        console.log(err.error);
      }
    });
  }
}

  
  var m = 0;
  const postAddress = "http://localhost:1337/api/articles"
  
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

      <h1>Importer 3</h1>
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


export async function getStaticProps() {
    const firstBlogs = await getFirstBlogs()


   return {
     props: { firstBlogs },
   }
 }