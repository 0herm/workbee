import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    env: {
        version: process.env.npm_package_version,
    },
}

export default nextConfig
