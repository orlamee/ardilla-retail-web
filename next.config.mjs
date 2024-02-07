/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};


export default nextConfig;

// If using ES6 modules, you can use the following syntax instead of module.exports
// export default nextConfig;
