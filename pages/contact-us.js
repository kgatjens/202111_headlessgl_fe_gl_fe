import Image from 'next/image'
import Router from 'next/router';

import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'

import ContactUsForm from '../components/forms/hubspot/contact-us'


import { getMenus } from '../lib/wp/api'


export default function ContactUs({ menus }) {
  
  const pageTitle = "GL - Contact Us";
  const { mainNav, mainFooter } = menus || {};

  const metaTitle     = "Contact Us"
  const featuredImage = ""
  const metaKeywords  = "contact"
  const metaDesc      = "Contact us page Description"
  const canonical     = ""

  //const headerData = {pageTitle, menuItems}
  const metaData = {metaTitle,featuredImage,metaKeywords,metaDesc,canonical}
  
  return (
    <>
      <Layout>
      
      <Header header={mainNav} metaData={metaData}  />
    
      <Container>
        <h1 class="mb-8 text-3xl md:text-3xl font-bold tracking-tighter leading-tight">Contact Us</h1>
        <ContactUsForm />

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