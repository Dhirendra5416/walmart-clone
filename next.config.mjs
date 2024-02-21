

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
           {
            protocol:'https',
            hostname:'links.papareact.com',
            // port:'',
            // pathname:'/account123/**'
            },
            {
                protocol:'https',
                hostname:'i.imgur.com',
            },
            {
                protocol:'https',
                hostname:'i5.walmartimages.com',
            }
        ]
    }
};

export default nextConfig;
