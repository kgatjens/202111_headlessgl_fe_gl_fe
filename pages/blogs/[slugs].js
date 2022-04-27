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
// import PostHeader from '../../components/post-header'
// import SectionSeparator from '../../components/section-separator'

import {  getPostAndMorePosts, getAllPostsWithSlug, getMenus } from '../../lib/wp/api'

//import { CMS_NAME } from '../../lib/constants'

export default function Blogs({ data, menus }) {
  const router = useRouter()
  //const morePosts = posts?.edges
  const slug  = router.query.slugs;
  console.log("###");
  console.log(slug);
  console.log(data);
  const { mainNav, mainFooter } = menus || {};

  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />
  // }

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
                {/* {post.title} | Next.js Blog Example with  */}
              </title>
              {/* <meta
                property="og:image"
                content={post.featuredImage?.sourceUrl}
              /> */}
            </Head>
            <h1>this is</h1>
            {/* <PostHeader
              title={post.title}
              coverImage={post.featuredImage}
              date={post.date}
              author={post.author}
              categories={post.categories}
            />
            <PostBody content={post.content} />
            
              {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
             */}
          </article>
          </>
         )} 
      
    </Container>

    <Footer footer={mainFooter}/>
  </Layout>
  
  )
}

export async function getStaticProps({ params}) {
  console.log("##22#");
  console.log(params);
  //router.query.slugs
  const data = await getPostAndMorePosts()
  const menus = await getMenus()
  console.log(menus);
  //const data={}
  return {
    props: {
       data,
       menus
      //  post: data.post,
      //  posts: data.posts,
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

