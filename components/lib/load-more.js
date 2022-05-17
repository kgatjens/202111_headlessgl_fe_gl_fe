
import { getNewPostsFromApi } from '../../lib/wp/api'

export default function LoadMore(){
   // const [posts, setPosts] = useState(props.posts);

    return (
        <button
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