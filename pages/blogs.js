import Image from 'next/image'
import Router from 'next/router';

import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'



import { getMenus } from '../lib/wp/api'


export default function Blogs({ menus }) {
  
  const pageTitle = "GL - Blogs";
  const { mainNav, mainFooter } = menus || {};
  
  return (
    <>
      <Layout>
      <Header header={mainNav} />
    
      <Container>
        <h1>Available Blogs</h1>
        

      </Container>

      <Footer footer={mainFooter}/>
    </Layout>
    </>
  )
}



export async function getStaticProps() {
  
  const menus = await getMenus()
  return {
    props: { menus },
  }


}