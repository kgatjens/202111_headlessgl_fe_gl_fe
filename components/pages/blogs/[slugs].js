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

import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import { CMS_NAME } from '../../lib/constants'

export default function Post({ post, posts, preview }) {
  const router = useRouter()
  const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

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
                {post.title} | Next.js Blog Example with {CMS_NAME}
              </title>
              <meta
                property="og:image"
                content={post.featuredImage?.sourceUrl}
              />
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.featuredImage}
              date={post.date}
              author={post.author}
              categories={post.categories}
            />
            <PostBody content={post.content} />
            
              {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
            
          </article>
          </>
        )}
      
      

    </Container>

    <Footer footer={mainFooter}/>
  </Layout>
  
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData)

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/blogs/${node.slug}`) || [],
    fallback: true,
  }
}