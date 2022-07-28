import {  getPagesSlugs } from '../lib/wp/api'

export default function DynamicPage() {
    return (
      <div>
        <p>dynamic page</p>
      </div>
    );
  }
  export async function getStaticProps(context) {
    return {
      props: { message: "dynamic page part 2" }, // will be passed to the page component as props
    };
  }
  export async function getStaticPaths() {

    const allPages = await getPagesSlugs()
    console.log(allPages);
    console.log("55555");
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
    return { paths, fallback: false };
  }