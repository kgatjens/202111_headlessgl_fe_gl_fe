import {  getPagesSlugs, getPageContent, getMenus } from '../lib/wp/api'

export default function Page({ page, menus}) {
    console.log(page);
    return (
      <div>
        <h1>{page.title} </h1>
      </div>
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