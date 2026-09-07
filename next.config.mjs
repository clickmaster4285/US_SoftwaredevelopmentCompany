const nextConfig = {
  allowedDevOrigins: [
    "192.168.88.62",
    "192.168.88.39",   // 👈 Add your network IP here
    "localhost",
    "127.0.0.1",
    // Add more as needed
    "192.168.88.*",    // 👈 Or allow all on this subnet
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;