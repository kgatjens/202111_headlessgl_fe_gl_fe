
import axios from "axios";
import { format } from 'date-fns';
import Layout from '../components/layout/layout'
import SkeletonCard from '../components/layout/skeletonCard'

import { useState, useEffect } from "react";
import { getFirstBlogs, blogAuthors, blogCategories } from '../lib/wp/api'

export default function StrapiImporter({firstBlogs}){

const blogs = firstBlogs.edges
const postAddress = "http://localhost:1337/api/articles"
const [loading2, setLoading2] = useState(false);
const [loading1, setLoading1] = useState(false);

function handleClick() {
    setTimeout(() => {
        setLoading2(true);
    }, 0);
    if (Array.isArray(blogs)) {


        const a = blogs.forEach((post) => {
            //console.log(post)
            const tagsPerBlog = post.node.tags.nodes;
            const blogTags=[];
            const tags = tagsPerBlog.forEach((tag) => {
                blogTags.push(tag.tagId);
            });

            const categoriesPerBlog = post.node.categories.nodes;
            const blogCategs=[];
            const categories = categoriesPerBlog.forEach((cat) => {
                blogCategs.push(cat.categoryId);
            });

            const pattern = /custom_gl_class series-/;
            const result = "";
            if(post.node.content.search(pattern)!=-1){
                const startIndex = post.node.content.search(pattern) + pattern.source.length;
                const endIndex = post.node.content.indexOf('">', startIndex);
                result = post.node.content.substring(startIndex,endIndex);
                result = result.replace(" expandable", "");
                
            }
            //need to get the result id to it's blog series equivalent
            console.log("Cats:",blogCategs);
            console.log("Tags:",blogTags);
            console.log("Series:",result);  
            
            try{
                // axios.post(postAddress, 
                //     {
                //     "data": {
                //         title: post.node.title,
                //         description: post.node.excerpt,
                //         content: post.node.excerpt,
                //         CreatedDate: format( new Date(post.node.date), 'yyyy-MM-dd'),
                //         slug: post.node.slug,
                //         tags: blogTags,
                //         categories: blogCategs,
                //         id: post.node.id,
                //         blog_series: result,
                //     }
                // });
                
            }catch(err){
                console.log(err.error);
            }
            });

    }
        setTimeout(() => {
            setLoading2(false);
        }, 1000);
        setLoading1(true);
    }

    return(
      <>

      <Layout >
      <div className="flex w-full flex-1 flex-col items-center  px-20 py-2.5">


      <h1>Importer WP-Strapi</h1>

      <button
            className='className="flex items-center cursor-pointer	bg-gray-100 hover:bg-gray-600 hover:text-white transition-colors duration-500 border border-gray-500 px-4 py-3"'
            onClick={handleClick}
            type="button"
            >
            Import Now. 
        </button>

        {loading2 ? (
            <SkeletonCard />
          ) : (<p></p>) }

        {loading1 && !loading2 ? (
            <>
            {
            blogs ? (<span>{
            (blogs.map((item) => (
                <p key={item.node.title}>- {item.node.title}  ✅</p>
                )))
            }
            </span>) : (<span>!!</span>)
            }
            </>
            ) : (<p></p>) 
        }

              
    </div>
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