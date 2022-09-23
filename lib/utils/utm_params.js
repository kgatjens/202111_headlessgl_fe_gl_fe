

function getAllowedParams(){
    
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

 export  function generateUrlWithQueryString(urlObject) {

    // console.log("🌳");
    // console.log(Object.keys(urlObject).length);
    // console.log(urlObject);
    // console.log("🌳🌳🌳");

   if(Object.keys(urlObject).length) {

       const filteredParams = filterAllowedParams(urlObject);
    //    console.log("🚚");
    //    console.log(filteredParams);
    //    console.log("🚚🚚");
       if (Object.keys(filteredParams).length) {
           if(urlObject[0] != '/')
           urlObject = `/${urlObject}`;
            // !! here
            //  var urlString = ;
            //         console.log("🚚");
            //    console.log(urlString);
            //    console.log("🚚🚚");
           //return `${urlObject}?${serialize(filteredParams)}`;
           
           return `${serialize(filteredParams)}`;
       }

       return urlObject;
   }

    return urlObject;
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