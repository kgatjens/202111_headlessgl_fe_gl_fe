import Image from 'next/image'
import Router from 'next/router';

import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import MoreBlogs from '../components/pages/more-posts'



import { getFirstBlogs } from '../lib/wp/api'
import { getMenus } from '../lib/wp/api'


export default function Blogs({ menus , firstBlogs }) {
  
  const pageTitle = "GL - Blogs";
  const { mainNav, mainFooter } = menus || {};
  const blogs = firstBlogs.edges
  const morePosts = blogs.slice(1)


//   console.log(blogs);
//   console.log(morePosts);
  return (
    <>
      <Layout>
      <Header header={mainNav} />
    
      <Container>
        <h1>Available Blogs</h1>
        
        {morePosts.length > 0 && <MoreBlogs posts={morePosts} />}

      </Container>

      <Footer footer={mainFooter}/>
    </Layout>
    </>
  )
}



export async function getStaticProps() {
    
  const firstBlogs = await getFirstBlogs()
  const menus = await getMenus()
  return {
    props: { menus , firstBlogs },
  }


}