import GoogleAnalytics from '../tracking/ga'
import Script from 'next/script'

const GOOGLE_ANALYTICS = process.env.GOOGLE_ANALYTICS


export default function HeadTracking() {
    return (
      <div>
        
        {/* <Script id="google-analytics" strategy="afterInteractive" 
        dangerouslySetInnerHTML={{
            __html: 
        `
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', '${GOOGLE_ANALYTICS}', 'auto');
          ga('send', 'pageview');
        `
      }}
      />
      <Script
        src="https://www.google-analytics.com/analytics.js"
        strategy="afterInteractive"
      /> */}
            
      </div>
    )
  }