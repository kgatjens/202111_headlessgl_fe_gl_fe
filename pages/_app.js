import '../styles/sass/global.scss'
//import "../styles/globals.scss";
import Head from 'next/head'

//import 'tailwindcss/tailwind.css'
import HeadTracking from '../components/tracking/head-tracking'
import {ThemeProvider} from 'next-themes'
import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../prismicio'

function MyApp({ Component, pageProps }) {

  return <>
  {/* <ThemeProvider attribute="class">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
    </Head>
    <HeadTracking />

    
    <Component {...pageProps} />
    
  </ThemeProvider> */}
  <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>

  
  </>
}

export default MyApp
