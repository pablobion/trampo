/** @type {import('next').NextConfig} */
// next.config.js

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['pt-BR','en-US'],
    defaultLocale: 'pt-BR',

  },
  //basePath: process.env.NODE_ENV === 'production' ? '/lawyerlamp' : '',

  // async redirects() {
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: '/404',
  //       permanent: false,
  //     },
  //   ];
  // },

}

module.exports = nextConfig
