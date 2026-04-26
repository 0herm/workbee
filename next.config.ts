import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'standalone',
    env: {
        version: process.env.npm_package_version,
    },
}

export default nextConfig
