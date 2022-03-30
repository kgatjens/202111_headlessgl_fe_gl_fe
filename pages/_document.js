import Document, { Html, Head, Main, NextScript } from 'next/document'

import TopTracking from '../components/tracking/top-body-tracking'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <TopTracking />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}