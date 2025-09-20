/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/products/add",
        destination: "/dashboard/products/add",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
