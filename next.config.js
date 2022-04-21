module.exports = {
  reactStrictMode: true,
   // Will be available on both server and client
   images: {
      domains: ['headlessgl22.wpengine.com','secure.gravatar.com'],
   },
   publicRuntimeConfig: {
      NEXT_PUBLIC_GTML: process.env.NEXT_PUBLIC_GTM,
   }
}
