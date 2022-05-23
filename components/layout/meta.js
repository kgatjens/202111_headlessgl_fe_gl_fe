import { AUTHOR,SITE_NAME,LOCALE,TYPE } from "../../lib/info";

import Head from 'next/head'

export default function Meta(metaData) {
  //  console.log(">>>>");
  //  console.log(metaData.headerData);

   if (metaData.headerData.metaDesc === '') console.log(metaData.headerData.metaDesc);
  
  const metaTitle      = typeof metaData.headerData !== 'undefined' ||  metaData.headerData.metaTitle !== '' ? metaData.headerData.metaTitle : SITE_NAME;
  const featuredImage  = typeof metaData.headerData !== 'undefined' ||  metaData.headerData.featuredImage !== '' ? metaData.headerData.featuredImage : '';
  const metaDesc       = typeof metaData.headerData !== 'undefined' ||  metaData.headerData.metaDesc !== '' ? metaData.headerData.metaDesc : SITE_NAME;
  const metaKeywords   = typeof metaData.headerData !== 'undefined' ||  metaData.headerData.metaKeywords !=='' ? metaData.headerData.metaKeywords : SITE_NAME;

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
      
      <title>{ metaTitle }</title>
      
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      
      <link rel="icon" href="/favicon.ico" />
      
      <meta property="og:url" content={featuredImage} /> 

      {/* <link rel="canonical" href={metaData.headerData.title}></link> */}
      <meta name="description" content={metaDesc}/>
      <meta name="keywords" content={metaKeywords}/>
      
      <meta property="og:title" content={metaTitle} /> 
      <meta property="og:description" content={metaDesc} /> 
      <meta property="og:image" content={featuredImage} /> 

      <meta name="author" content={AUTHOR} />
      <meta property="og:site_name" content={SITE_NAME} /> 
      <meta property="og:type" content={featuredImage} /> 
      <meta property="og:locale" content={LOCALE} /> 
      <meta name="twitter:card" content="summary"></meta>
      
      </Head>
      </> 
    
  )
}
