import Image from 'next/image'

import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'

import Clocks from '../components/widgets/clocks'

import Homepage from '../components/pages/homepage'

import { getMenus,getHomepage,getHomepageCarousel } from '../lib/wp/api'
// import { getHomepage } from '../lib/wp/api'
// import { getHomepageCarousel } from '../lib/wp/api'

export default function Home({ data, homepage, carouselHomepage  }) {
  
  const { allHomepage } = homepage || {};
  const { carousel }  = carouselHomepage || {};
  const { mainNav, mainFooter } = data || {};

  //Metas
  const metaTitle     = allHomepage.edges[0]?.node.seo.title;
  const featuredImage = allHomepage.edges[0]?.node.homepageFields.headerImage.mediaItemUrl;
  const metaKeywords  = allHomepage.edges[0]?.node.seo.metaKeywords;
  const metaDesc      = allHomepage.edges[0]?.node.seo.metaDesc;
  const canonical     = allHomepage.edges[0]?.node.seo.canonical;

  //const headerData = {pageTitle, menuItems}
  const metaData = {metaTitle,featuredImage,metaKeywords,metaDesc,canonical}
    
  return (
    <>
      <Layout >
        
      <Header header={mainNav}
              metaData={metaData} />
      <Container>

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
      
      <Footer footer={mainFooter}/>
    </Layout>
    </>
  )
}



export async function getStaticProps() {
   //const homepage = await getHomepage()
   const data = await getMenus()
   const carouselHomepage = await getHomepageCarousel()

  return {
    props: { data,homepage,carouselHomepage },
  }
}