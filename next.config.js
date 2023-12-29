/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
          {
              protocol: "http",
              hostname: 'www.dev.kohanco.com',
              port: ''
              // pathname: ''
          }
      ]
    },
    env:{
        BASEURL: 'http://www.dev.kohanco.com'
    }
}

module.exports = nextConfig
