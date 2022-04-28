import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'


import Container from '../../components/layout/container'
import Layout from '../../components/layout/layout'
import Header from '../../components/layout/header'
import Footer from '../../components/layout/footer'

//import Tags from '../../components/tags'
//import PostTitle from '../../components/post-title'


//import PostBody from '../../components/post-body'
// import MoreStories from '../../components/more-stories'
import BlogHeader from '../../components/blogs/blog-header'
// import SectionSeparator from '../../components/section-separator'

import {  getPostAndMorePosts, getAllPostsWithSlug, getMenus } from '../../lib/wp/api'

//import { CMS_NAME } from '../../lib/constants'

export default function Blogs({ post, posts, menus }) {
  const router = useRouter()
  const morePosts = posts?.edges
  const slug  = router.query.slugs;
  
  console.log("Blogs info");
  console.log(slug);
  console.log(post);
  console.log(posts);
  const { mainNav, mainFooter } = menus || {};

  if (!post?.slug  ) {//&& !router.isFallback &
    return <ErrorPage statusCode={404} />
  }

  return (
    
    <Layout>
      <Header header={mainNav} />
      <Container>
        {router.isFallback ? (
          <p>Loading…</p>
        ) : (
          <>
            <article>
            <Head>
              <title>
              {post.title}
              </title>
              { <meta
                property="og:image"
                content={post.featuredImage?.sourceUrl}
              /> }
            </Head>
            
            <BlogHeader
              title={post.title}
              coverImage={post.featuredImage}
              date={post.date}
              author={post.author}
              categories={post.categories}
            />
            {/* <PostBody content={post.content} />
            
              {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
             } */}
          </article>
          </>
         )} 
      
    </Container>

    <Footer footer={mainFooter}/>
  </Layout>
  
  )
}

export async function getStaticProps({ params }) {
  
  const data = await getPostAndMorePosts(params.slugs)
  const menus = await getMenus()
  
  return {
    props: {
      post: data.post,
      posts: data.posts,
       menus
    },
  } 
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/blogs/${node.slug}`) || [],
    fallback: true,
  }
  return { paths: [], fallback: 'blocking' };

}

