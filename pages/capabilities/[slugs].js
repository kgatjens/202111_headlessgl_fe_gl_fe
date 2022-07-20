import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'

import Container from '../../components/layout/container'
import Layout from '../../components/layout/layout'
import Header from '../../components/layout/header'
import Footer from '../../components/layout/footer'

import SectionSeparator from '../../components/layout/section-separator'

//import PostBody from '../../components/post-body'
import BlogHeader from '../../components/blogs/blog-header'
import BlogBody from '../../components/blogs/blog-body'

import {  getCapabilities, getAllCapabilitiesWithSlug, getMenus } from '../../lib/wp/api'

export default function Capabilities({ capability, menus }) {
  const router = useRouter()
  
  const slug  = router.query.slugs;
  
  console.log("Capabilities info");
  console.log(slug);
  console.log(capability);
  
  const { mainNav, mainFooter } = menus || {};

  //Metas
  const metaTitle     = capability?.seo.title;
  const featuredImage = capability?.featuredImage?.node.sourceUrl;
  const metaKeywords  = capability?.seo.metaKeywords;
  const metaDesc      = capability?.seo.metaDesc;
  const canonical     = capability?.seo.canonical;

  //const headerData = {pageTitle, menuItems}
  const metaData = {metaTitle,featuredImage,metaKeywords,metaDesc,canonical}

  if (!capability?.slug  ) {//&& !router.isFallback &
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
              {capability.title}
              </title>
              { <meta
                property="og:image"
                content={capability?.featuredImage?.sourceUrl}
              /> }
            </Head>
            
            <BlogHeader
              title={capability.title}
              coverImage={capability?.featuredImage}
              date={capability.date}
              
              
            />
            <BlogBody content={capability.content} />
     
          </article>
          </>
         )} 
            <SectionSeparator />
            
    </Container>

    <Footer footer={mainFooter}/>
  </Layout>
  
  )
}

export async function getStaticProps({ params }) {
  
  const data = await getCapabilities(params.slugs)
  const menus = await getMenus()
  console.log("XXXXX")
  console.log(params.slugs)
  console.log(data)
  console.log("XXXXX@@@")
  return {
    props: {
      capabilities: data,
       menus
    },
  } 
}

export async function getStaticPaths() {
  const allCaps = await getAllCapabilitiesWithSlug()
  console.log("$$$")
  console.log(allCaps)
  return {
    paths: allCaps.edges.map(({ node }) => `/capabilities/${node.slug}`) || [],
    fallback: true,
  }
  return { paths: [], fallback: 'blocking' };

}

