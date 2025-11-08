/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.supercell.com', 'supercell.com'],
    unoptimized: true
  },
  output: 'export'
}

module.exports = nextConfig
