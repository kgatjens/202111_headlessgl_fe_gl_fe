import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Script
        src="https://www.google-analytics.com/analytics.js"
        id="analytics"
        nonce="XUENAJFW"
        data-test="analytics"
      />
    </>
  )
}