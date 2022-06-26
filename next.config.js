module.exports = {
  images: {
    domains: ["", "localhost", "cdn.pixabay.com", "media.istockphoto.com", "res.cloudinary.com","chitkara-ip.vercel.app"],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/upload',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/upload',

        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp',
          },
        ],
      },

    ]
  },
}