import '../styles/sass/global.scss'
//import "../styles/globals.scss";
import Head from 'next/head'

//import 'tailwindcss/tailwind.css'
import HeadTracking from '../components/tracking/head-tracking'
import {ThemeProvider} from 'next-themes'

function MyApp({ Component, pageProps }) {

  return <>
  <ThemeProvider attribute="class">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
    </Head>
    <HeadTracking />

    
    <Component {...pageProps} />
  </ThemeProvider>

  
  </>
}

export default MyApp
