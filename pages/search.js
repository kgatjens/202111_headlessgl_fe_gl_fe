import Image from 'next/image'


import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import Header from '../components/layout/header'
import { getMainMenu } from '../lib/wp/api'

export default function Home({ menuItems: { menuItems } }) {
  
  const pageTitle = "GL - Search";
  const headerData = {pageTitle, menuItems}

  return (
    <>
      <Layout>
      <Header header={headerData} />
      <Container>
        
        <p>
          Get started by editing{' '}
          <code >pages/index.js</code>
        </p>

   

      </Container>
    </Layout>
    </>
  )
}



export async function getStaticProps() {

  const menuItems = await getMainMenu()
  return {
    props: { menuItems },
  }
}