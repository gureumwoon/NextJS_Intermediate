/** @type {import('next').NextConfig} */
const nextConfig = {
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
    images: {
        domains: ["shopping-pinf.pstatic.net"],
    },
};

export default nextConfig;
