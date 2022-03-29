import Image from 'next/image'
import Router from 'next/router';

import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import Header from '../components/layout/header'
import NavSearch from '../components/search/search-nav';
import Footer from '../components/layout/footer'


import { getMenus } from '../lib/wp/api'


export default function ContactUs({ menus }) {
  
  const pageTitle = "GL - Contact Us";
  const { mainNav, mainFooter } = menus || {};
  


  return (
    <>
      <Layout>
      <Header header={mainNav} />
      
      
      <Container>
      
        <h1>Contact Us</h1>
      <div className="container mb-2 flex mx-auto w-full items-center justify-center">

      
      </div>

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