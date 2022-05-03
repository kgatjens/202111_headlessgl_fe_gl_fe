const siteUrl = "http://localhost:3000/"
module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions:{
        policies:[
            { userAgent:"*", disallow: "/secret"},
            { userAgent:"*", allow: "/"},
        ],
    },
    exclude: ["/secret"],
};
