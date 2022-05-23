import BlogsPreview from './blogs-preview'
import LoadMore from '../lib/load-more'

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getSecondBlogs } from '../../lib/wp/api'



async function pushData() {
  try {
    console.log("Done1");
    //const newPosts = await getSecondBlogs();
    console.log(newPosts);
    console.log("Done");
    setPosts(newPosts);
  } catch (e) {

    console.error("wtf");
    console.log(e);

  }

}


export default function MoreBlogs({ posts }) {
    
  
    // const [blogs, setPosts] = useState(posts);
    // //console.log(blogs);
    // console.log("going in");

    // const fetchData = async () => {
    //   console.log("click");
    //   const req = await getSecondBlogs();
    //   console.log(req.edges);
      
    //   const newData = {}
  
    //  // setData(newData.results);
    // };

   

    // const handleClick = (event) => {
      
    //   event.preventDefault();
      
    //   const address = `https://gorillalogic.com/wp-json/wp/v2/search/?per_page=20&subtype=page&subtype=post&search=agile`;
    //   const fetcher = async (url) => await axios.get(url).then((res) => res.data);
    //   const { data, error } = useSWR(address, fetcher);
      
    //   return null;
    // };

  return (
    <section>
      <h2 className="mb-8 text-3xl md:text-3xl font-bold tracking-tighter leading-tight">
        More Blogs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map(({ node }) => (
          <BlogsPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            date={node.date}
            author={node.author}
            slug={node.slug}
            excerpt={node.excerpt}
    
          />
        ))}
      </div>
      <div>
      {/* <button
            className='className="flex items-center cursor-pointer	bg-gray-100 hover:bg-gray-600 hover:text-white transition-colors duration-500 border border-gray-500 px-4 py-3"'
            onClick={handleClick}
            type="button"
            >
            Load More
        </button> */}
      </div>
    </section>
  )
}