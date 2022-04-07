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
  
  return (
    <>
      <Layout>
      <Header header={mainNav} />
    
      <Container>
        <h1>Contact Us</h1>
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