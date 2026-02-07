/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'shiftup.qodeinteractive.com',
            },
        ],
    },
}

module.exports = nextConfig
