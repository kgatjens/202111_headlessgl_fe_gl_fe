import Head from 'next/head'
import Image from 'next/image'


import Container from '../components/container'
import Layout from '../components/layout'


export default function Home() {
  return (
    <>
      <Layout>

      <Head>
        <title>GL Demo</title>
        <meta name="description" content="Gl Demo meta" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
      <main className>
        <h1 className>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className>
          Get started by editing{' '}
          <code className>pages/index.js</code>
        </p>

        <div className>
          

        </div>
      </main>

      <footer className>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
      </Container>
    </Layout>
    </>
  )
}
