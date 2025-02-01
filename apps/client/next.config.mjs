/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `
      @use "@/styles/breakpoints.scss" as *;
    `,
  },
  productionBrowserSourceMaps: true,
  images: {
    deviceSizes: [768, 1024, 3840],
    imageSizes: [32, 128, 384],
    minimumCacheTTL: 60,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  rewrites: () => {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:4000/:path*',
      },
    ];
  },
};

export default nextConfig;
