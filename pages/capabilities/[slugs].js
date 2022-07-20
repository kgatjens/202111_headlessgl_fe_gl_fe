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

export default function Capabilities({ capabilities, menus }) {
  const router = useRouter()
  
  const slug  = router.query.slugs;
  
  console.log("Capabilities info");
  console.log(slug);
  console.log(capabilities);
  
  const { mainNav, mainFooter } = menus || {};

  //Metas
  const metaTitle     = capabilities?.seo.title;
  const featuredImage = capabilities?.featuredImage?.node.sourceUrl;
  const metaKeywords  = capabilities?.seo.metaKeywords;
  const metaDesc      = capabilities?.seo.metaDesc;
  const canonical     = capabilities?.seo.canonical;

  //const headerData = {pageTitle, menuItems}
  const metaData = {metaTitle,featuredImage,metaKeywords,metaDesc,canonical}

  if (!capabilities?.slug  ) {//&& !router.isFallback &
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
              {capabilities.title}
              </title>
              { <meta
                property="og:image"
                content={capabilities?.featuredImage?.sourceUrl}
              /> }
            </Head>
                <h1>{capabilities.title}</h1>
            <BlogBody content={capabilities.content} />
     
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
      capabilities: data.capabilities,
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

