module.exports = {
  reactStrictMode: true,
   // Will be available on both server and client
   publicRuntimeConfig: {
      NEXT_PUBLIC_GTML: process.env.NEXT_PUBLIC_GTM,
   }
}
