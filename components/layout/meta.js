import Head from 'next/head'

export default function Meta(metaData) {
  // console.log(">>>>");
  // console.log(metaData.headerData);


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
      
      <title>{metaData.headerData.title}</title>
      
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      
      <link rel="icon" href="/favicon.ico" />
      
      <meta property="og:url" content={metaData.headerData.featuredImage} /> 

      {/* <link rel="canonical" href={headerData.metaData.title}></link>
      <meta name="description" content={headerData.metaData.title}/>
      <meta property="og:title" content={headerData.metaData.featuredImage} /> 
      <meta property="og:description" content={headerData.metaData.featuredImage} /> 
      <meta property="og:image" content={headerData.metaData.featuredImage} /> 
      <meta property="og:site_name" content={headerData.metaData.featuredImage} /> 
      <meta property="og:type" content={headerData.metaData.featuredImage} /> 
      <meta property="og:locale" content={headerData.metaData.featuredImage} /> 
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="twitter:card" content="summary"></meta> */}
      
      </Head>
      </> 
    
  )
}
