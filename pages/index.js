import Image from 'next/image'


import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'

import Homepage from '../components/pages/homepage'

import { getMenus } from '../lib/wp/api'
import { getHomepage } from '../lib/wp/api'

export default function Home({ data , homepage }) {
  
  const pageTitle = "GL - dEmO";
  const { allHomepage } = homepage || {};

  const { mainNav, mainFooter } = data || {};
  console.log(mainNav.menuItems.nodes);

  //const headerData = {pageTitle, menuItems}

  return (
    <>
      <Layout>
      <Header header={mainNav} />
      <Container>
        <Homepage homepage={allHomepage}>

        </Homepage>
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