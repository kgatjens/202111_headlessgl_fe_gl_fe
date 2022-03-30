const GOOGLE_ANALYTICS = process.env.GOOGLE_ANALYTICS

import Script from 'next/script'

export default function GoogleAnalytics() {
  return (
    <div>
      {/* <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', '${GOOGLE_ANALYTICS}', 'auto');
          ga('send', 'pageview');
        `}

      </Script>
      <Script
        src="https://www.google-analytics.com/analytics.js"
        strategy="afterInteractive"
      /> */}
          
    </div>
  )
}