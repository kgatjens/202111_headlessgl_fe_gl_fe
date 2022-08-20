import Document, { Html, Head, Main, NextScript } from 'next/document'

import TopTracking from '../components/tracking/top-body-tracking'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html>
        <Head>
          {/* Google Font setup */}
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Oxygen:wght@400;500"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Oxygen:wght@400;500"
            media="print"
            onLoad="this.media='all'"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Oxygen:wght@400;500"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Gulzar"
            rel="stylesheet"
          />
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Oxygen:wght@400;500"
            />
          </noscript>


     

        </Head>

        <body className="dark:bg-black">
          <TopTracking />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}