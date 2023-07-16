/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'raw.githubusercontent.com',
      'archives.bulbagarden.net',
      'cdn.pixabay.com',
      'upload.wikimedia.org',
    ],
  },
}

module.exports = nextConfig
