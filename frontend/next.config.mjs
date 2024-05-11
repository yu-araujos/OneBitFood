/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost']
  },
  env: {
    apiUrl: 'http://localhost:3000'
  }
};

export default nextConfig;
