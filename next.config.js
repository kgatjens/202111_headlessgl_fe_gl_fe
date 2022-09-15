module.exports = {
  reactStrictMode: true,
   // Will be available on both server and client
   images: {
      domains: ['headlessgl22.wpengine.com','secure.gravatar.com'],
   },
   publicRuntimeConfig: {
      NEXT_PUBLIC_GTML: process.env.NEXT_PUBLIC_GTM,
   },
   i18n: {
      locales: ['en'],
      defaultLocale: 'en',
    },
    generateUrlWithQueryString,
    getAllowedParams,
    prepareParamsAsQueryString,
    filterAllowedParams

}


/* Function to persist URL params ( utms )*/ 
function getAllowedParams() {
   const allowedParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'mid', 'gclid', 'source'];

   return allowedParams;
}

function prepareParamsAsQueryString() {
   const params = getAllowedParams();
   let paramsLikeQueryString = [];

   for (let index = 0; index < params.length; index++) {
       const param = params[index];

       paramsLikeQueryString.push(`${param}=:${param}?`);
   }

   return paramsLikeQueryString.join('&');
}

function generateUrlWithQueryString(url, params) {
   if(Object.keys(params).length) {
       const filteredParams = filterAllowedParams(params);

       if (Object.keys(filteredParams).length) {
           if(url[0] != '/')
               url = `/${url}`;

           return `${url}?${serialize(filteredParams)}`;
       }

       return url;
   }

   return url;
}

function filterAllowedParams(params) {
   if(Object.keys(params).length) {
       const filteredParams = Object.keys(params)
           .filter(key => getAllowedParams().includes(key.toLowerCase()))
           .reduce((obj, key) => {
               obj[key] = params[key];
               return obj;
           }, {});

       return filteredParams;
   }

   return params;
}

// INTERNAL
function serialize(obj) {
   var str = [];
   for (var p in obj) {
       if (obj.hasOwnProperty(p)) {
           str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
       }
   }

   return str.join("&");
}