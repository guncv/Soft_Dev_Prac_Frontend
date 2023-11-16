/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["drive.google.com"],
    },
    experimental: {
        serverAction: true
    }
}

module.exports = nextConfig
