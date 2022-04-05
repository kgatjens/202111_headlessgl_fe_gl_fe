import '../styles/globals.css'
//import 'tailwindcss/tailwind.css'
import HeadTracking from '../components/tracking/head-tracking'

function MyApp({ Component, pageProps }) {

  return <>
  <HeadTracking />
  <Component {...pageProps} />
  </>
}

export default MyApp
