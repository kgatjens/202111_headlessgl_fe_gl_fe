
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function LoadMore({posts}){
   // const [posts, setPosts] = useState(props.posts);
    const perPage = 9;
    //const [posts, setPosts] = useState(posts);


    return (
        <button
            className='className="flex items-center cursor-pointer	bg-gray-100 hover:bg-gray-600 hover:text-white transition-colors duration-500 border border-gray-500 px-4 py-3"'
            onClick={async () => {
                const newPosts = await getNewPostsFromApi();
                setPosts(...posts, ...newPosts);
            }}
            type="button"
            >
            Load More
        </button>
    )
}