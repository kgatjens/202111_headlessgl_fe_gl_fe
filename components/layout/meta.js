import { AUTHOR,SITE_NAME,LOCALE,TYPE } from "../../lib/info";

import Head from 'next/head'

export default function Meta(metaData) {
  //  console.log(">>>>");
  //  console.log(`${AUTHOR}`);

  return (
    <>
      <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      {/* <link rel="manifest" href="/favicon/site.webmanifest" /> */}
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      
      <title>{metaData.headerData.metaTitle}</title>
      
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      
      <link rel="icon" href="/favicon.ico" />
      
      <meta property="og:url" content={metaData.headerData.featuredImage} /> 

      <link rel="canonical" href={metaData.headerData.title}></link>
      <meta name="description" content={metaData.headerData.metaDesc}/>
      <meta name="keywords" content={metaData.headerData.metaKeywords}/>
      
      <meta property="og:title" content={metaData.headerData.metaTitle} /> 
      <meta property="og:description" content={metaData.headerData.metaDesc} /> 
      <meta property="og:image" content={metaData.headerData.featuredImage} /> 

      <meta name="author" content={AUTHOR} />
      <meta property="og:site_name" content={SITE_NAME} /> 
      <meta property="og:type" content={metaData.headerData.featuredImage} /> 
      <meta property="og:locale" content={LOCALE} /> 
      <meta name="twitter:card" content="summary"></meta>
      
      </Head>
      </> 
    
  )
}
