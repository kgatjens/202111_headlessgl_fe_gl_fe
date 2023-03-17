
import axios from "axios";
import { format } from 'date-fns';
import useSWR from "swr";
import Layout from '../components/layout/layout'

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function StrapiImporter(){

  const address = "https://gorillalogic.com/wp-json/wp/v2/posts?offset=0&per_page=3";
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);

  if (error) <p>Loading failed...</p>;
  if (!data) <h1>Loading...</h1>;
  console.log(data);
  
  const a = (data || []).forEach(post => {
      try{

          // const postAddress = "http://localhost:1337/api/articles";
          // const rest = axios.post(postAddress, 
          //   {
          //     "data": {
          //       title: post.title.rendered,
          //       description: post.title.rendered,
          //       content: post.content.rendered,
          //       CreatedDate: format( new Date(post.date_gmt), 'yyyy-MM-dd'),
          //       slug: post.slug,
          //     }
          //   });
          // console.log(rest);
       
       
      }catch(err){
        console.log(err.error);
      }
      
    });


    const router = useRouter();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      router.events.on("routeChangeError", (e) => setLoading(false));
      router.events.on("routeChangeStart", (e) => setLoading(false));
      router.events.on("routeChangeComplete", (e) => setLoading(true));
  
      return () => {
        router.events.off("routeChangeError", (e) => setLoading(false));
        router.events.off("routeChangeStart", (e) => setLoading(false));
        router.events.off("routeChangeComplete", (e) => setLoading(true));
      };
    }, [router.events]);
    return(
      <>
            {loading ? "loading..." : "Ready!" }

      <Layout >

      <h1>Importer</h1>

      </Layout>
      </>
        
    )
}