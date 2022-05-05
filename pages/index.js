import Image from 'next/image'


import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'

import Homepage from '../components/pages/homepage'

import { getMenus } from '../lib/wp/api'
import { getHomepage } from '../lib/wp/api'

export default function Home({ data , homepage }) {
  
  const { allHomepage } = homepage || {};
  const { mainNav, mainFooter } = data || {};
  console.log(allHomepage.edges[0]?.node.homepageFields);

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

        />

      )}
      </Container>
      <Footer footer={mainFooter}/>
    </Layout>
    </>
  )
}



export async function getStaticProps() {
   const homepage = await getHomepage()
   const data = await getMenus()
  return {
    props: { data,homepage },
  }
}