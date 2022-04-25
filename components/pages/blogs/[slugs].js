import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'


import Container from '../../layout/container'
import Layout from '../../layout/layout'
import Header from '../../layout/header'
import Footer from '../../layout/footer'

import Tags from '../../components/tags'
import PostTitle from '../../components/post-title'



import PostBody from '../../components/post-body'
import MoreStories from '../../components/more-stories'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'

import {  getPostAndMorePosts, getAllPostsWithSlug } from '../../lib/api'
import { CMS_NAME } from '../../lib/constants'

export default function Post({ post, posts }) {
  const router = useRouter()
  //const morePosts = posts?.edges
  const {slug}  = router.query;
  console.log(slug);

  console.log(post);

  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />
  // }

  return (
    
    <Layout>
      <Header header={mainNav} />
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
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

export async function getStaticProps({ params }) {
  console.log(params);
  const data = {};//await getPostAndMorePosts(params.slug)
console.log(data);
  return {
    props: {
      // preview,
       post: data.post,
       posts: data.posts,
    },
  }
}

export async function getStaticPaths() {
  // const allPosts = await getAllPostsWithSlug()

  // return {
  //   paths: allPosts.edges.map(({ node }) => `/blogs/${node.slug}`) || [],
  //   fallback: true,
  // }
  return { paths: [], fallback: 'blocking' };

}

