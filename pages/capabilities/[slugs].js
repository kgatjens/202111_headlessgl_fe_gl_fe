import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'

import Container from '../../components/layout/container'
import Layout from '../../components/layout/layout'
import Header from '../../components/layout/header'
import Footer from '../../components/layout/footer'
import Tags from '../../components/layout/tags'
import SectionSeparator from '../../components/layout/section-separator'

//import PostBody from '../../components/post-body'
import MoreStories from '../../components/blogs/more-stories'
import BlogHeader from '../../components/blogs/blog-header'
import BlogBody from '../../components/blogs/blog-body'

import {  getPostAndMorePosts, getAllPostsWithSlug, getMenus } from '../../lib/wp/api'

export default function Blogs({ post, posts, menus }) {
  const router = useRouter()
  const morePosts = posts?.edges
  const slug  = router.query.slugs;
  
  console.log("Blogs info");
  console.log(slug);
  console.log(post);
  console.log(posts);
  const { mainNav, mainFooter } = menus || {};

  //Metas
  const metaTitle     = post?.seo.title;
  const featuredImage = post?.featuredImage?.node.sourceUrl;
  const metaKeywords  = post?.seo.metaKeywords;
  const metaDesc      = post?.seo.metaDesc;
  const canonical     = post?.seo.canonical;

  //const headerData = {pageTitle, menuItems}
  const metaData = {metaTitle,featuredImage,metaKeywords,metaDesc,canonical}

  if (!post?.slug  ) {//&& !router.isFallback &
    return <ErrorPage statusCode={404} />
  }

  return (
    
    <Layout>
      <Header header={mainNav} metaData={metaData}  />
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
                content={post?.featuredImage?.sourceUrl}
              /> }
            </Head>
            
            <BlogHeader
              title={post.title}
              coverImage={post?.featuredImage}
              date={post.date}
              author={post.author}
              categories={post.categories}
            />
            <BlogBody content={post.content} />
            {post.tags.edges.length > 0 && 
            <Tags tags={post.tags} />}
          </article>
          </>
         )} 
            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </Container>

    <Footer footer={mainFooter}/>
  </Layout>
  
  )
}

export async function getStaticProps({ params }) {
  
  const data = await getCapabilities(params.slugs)
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
  const allPosts = await getAllCapabilitiesWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/capabilities/${node.slug}`) || [],
    fallback: true,
  }
  return { paths: [], fallback: 'blocking' };

}

