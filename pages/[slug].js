import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import Template1 from '../components/pages/templates/template1'
import Template2 from '../components/pages/templates/template2'

import {  getPagesSlugs, getPageContent, getMenus } from '../lib/wp/api'

export default function Page({ page, menus}) {
    

    const { mainNav, mainFooter } = menus || {};

    const metaTitle     = page.seo.title
    const featuredImage = page.featuredImage?.node.sourceUrl
    const metaKeywords  = page.seo.metaKeywords
    const metaDesc      = page.seo.metaDesc
    const canonical     = page.seo.canonical

    const template = page.pagesFields.templateType
    console.log(template);

    // switch (template) {
    //   case 'template 1':
    //     <Template1/>
    //     break;
    //   case 'template 1':
    //     <Template2/>
    //     break;
    //   default:
    //     <Template1/>
    // }
  
    //const headerData = {pageTitle, menuItems}
    const metaData = {metaTitle,featuredImage,metaKeywords,metaDesc,canonical}

    return (
      
      <>
      <Layout>
      
      <Header header={mainNav} metaData={metaData}  />
    
      <Container>
        <h1>{page.title} - {template}</h1>
        
        {
          {
            'template 1': <Template1 /> ,
            'template 2': <Template2 />
          }[template]
        }


           
           

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