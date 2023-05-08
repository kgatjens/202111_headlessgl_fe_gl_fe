import Image from 'next/image'

import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'

import Clocks from '../components/widgets/clocks'

import Homepage from '../components/pages/homepage'

import { getMainMenu } from '../lib/strapi/api'
   
// import { getHomepage } from '../lib/wp/api'
// import { getHomepageCarousel } from '../lib/wp/api'

export default function Home({ data,homepage  }) {
  
  const { allHomepage } = homepage || {};
  const  mainNav  = data || {};
  console.log(">>>")
  console.log(mainNav.data);

  //Metas
  // const metaTitle     = allHomepage.edges[0]?.node.seo.title;
  // const featuredImage = allHomepage.edges[0]?.node.homepageFields.headerImage.mediaItemUrl;
  // const metaKeywords  = allHomepage.edges[0]?.node.seo.metaKeywords;
  // const metaDesc      = allHomepage.edges[0]?.node.seo.metaDesc;
  // const canonical     = allHomepage.edges[0]?.node.seo.canonical;

  //const headerData = {pageTitle, menuItems}
  //const metaData = {metaTitle,featuredImage,metaKeywords,metaDesc,canonical}
  const metaData = {}  
  return (
    <>
      <Layout >
        
      <Header header={mainNav}
              metaData={metaData} />
      <Container>
        <h1 id="welcome">Welcome to my Next.js app</h1>

      {/* <Clocks/> */}
      {allHomepage && (

        <Homepage 
          //homepage={allHomepage}
          title={allHomepage.edges[0]?.node.homepageFields.homepageTitle}
          descriptionText={allHomepage.edges[0]?.node.homepageFields.initialDescriptionText}
          headerImageURL={allHomepage.edges[0]?.node.homepageFields.headerImage.mediaItemUrl}
          headerImageAltText={allHomepage.edges[0]?.node.homepageFields.headerImage.altText}
          sectionBackgrounURL={allHomepage.edges[0]?.node.homepageFields.sectionBackgroundImage.mediaItemUrl}
          sectionBackgrounAltText={allHomepage.edges[0]?.node.homepageFields.sectionBackgroundImage.altText}
          sectionColor={allHomepage.edges[0]?.node.homepageFields.sectionColor}
          carouselComponent = {carousel}

        />

      )}

      
      </Container>
      
      {/* <Footer footer={mainFooter}/> */}
    </Layout>
    </>
  )
}



export async function getStaticProps() {
   const homepage = {}
   
   const data = await getMainMenu()
   //const data = {}
   //const carouselHomepage = await getHomepageCarousel()
   //const carouselHomepage = {}

  return {
    props: { data,homepage },
  }
}