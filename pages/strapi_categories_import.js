
import axios from "axios";
import { format } from 'date-fns';
import Layout from '../components/layout/layout'
import SkeletonCard from '../components/layout/skeletonCard'

import { useState, useEffect } from "react";
import { blogCategories  } from '../lib/wp/api'

export default function StrapiImporter({categories}){

const categs = categories.edges
//console.log(categs)
const postAddress = "http://localhost:1337/api/categories"
const [loading2, setLoading2] = useState(false);
const [loading1, setLoading1] = useState(false);


function handleClick() {
    setTimeout(() => {
        setLoading2(true);
    }, 0);
    if (Array.isArray(categs)) {
        const a = categs.forEach((cat) => {

            try{
                console.log(cat)
                //  axios.post(postAddress, 
                //     {
                //     "data": 
                //         {
                //             category_id: cat.node.categoryId,
                //             id: cat.node.categoryId,
                //             name: cat.node.name,
                //             slug: cat.node.slug,
                //             description: cat.node.description,
                //         }
                    
                //     });
                
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


      <h1>Importer WP-Strapi ( Categories )</h1>

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
{/* 
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
        } */}

              
    </div>
      </Layout>
      </>
        
    )
}


export async function getStaticProps() {
    const categories = await blogCategories()
    return {
        props: { categories },
    }
 }