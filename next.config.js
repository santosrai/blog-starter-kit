/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV = 'production'
const nextConfig = {
    output: 'export',
   
    basepath : isProd ? '/blog-starter-kit/' : '',
    // Optional: Change the output directory `out` -> `dist`
    distDir: 'dist',

    images: {
        unoptimized:true
    }
  }
   
  module.exports = nextConfig