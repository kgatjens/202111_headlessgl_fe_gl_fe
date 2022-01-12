import Image from 'next/image'


import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'

import { getMenus } from '../lib/wp/api'

export default function Home({ data }) {
  
  const pageTitle = "GL - dEmO";
  
  const { mainNav, mainFooter } = data || {};
  console.log(mainNav.menuItems.nodes);

  //const headerData = {pageTitle, menuItems}

  return (
    <>
      <Layout>
      <Header header={mainNav} />
      <Container>
        
        <p>
          Get started by editing{' '}
          <code >pages/index.js</code>
        </p>

   

      </Container>
      <Footer footer={mainFooter}/>
    </Layout>
    </>
  )
}



export async function getStaticProps() {

   const data = await getMenus()
  return {
    props: { data },
  }
}