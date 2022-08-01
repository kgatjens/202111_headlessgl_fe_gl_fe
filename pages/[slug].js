import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'

import {  getPagesSlugs, getPageContent, getMenus } from '../lib/wp/api'

export default function Page({ page, menus}) {
    console.log(page);

    const { mainNav, mainFooter } = menus || {};

    const metaTitle     = ""
    const featuredImage = ""
    const metaKeywords  = ""
    const metaDesc      = ""
    const canonical     = ""
  
    //const headerData = {pageTitle, menuItems}
    const metaData = {metaTitle,featuredImage,metaKeywords,metaDesc,canonical}

    return (
      
      <>
      <Layout>
      
      <Header header={mainNav} metaData={metaData}  />
    
      <Container>
        <h1>{page.title}</h1>
        

      </Container>

      <Footer footer={mainFooter}/>
    </Layout>
    </>
    );
  }
//   export async function getStaticProps(context) {
//     return {
//       props: { message: "dynamic page part 2" }, // will be passed to the page component as props
//     };
//   }

  export async function getStaticProps({ params }) {
    
    const data = await getPageContent(params.slug)
    const menus = await getMenus()
    
    return {
      props: {
        page: data,
        menus
      },
    } 
  }



  export async function getStaticPaths() {

    const allPages = await getPagesSlugs()
    allPages.edges.map(({ node }) => {console.log(node);})

    return {
        
        paths: allPages.edges.map(({ node }) => `/${node.slug}`) || [],
        fallback: false,
           
      }
    // const pages = ["a", "b"];
    // const paths = pages.map((post) => ({
    //   params: { slug: post },
    // }));

    // { fallback: false } means other routes should 404.
    //return { paths, fallback: false };
    return { paths: [], fallback: 'blocking' };
  }