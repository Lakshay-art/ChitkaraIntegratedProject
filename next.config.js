module.exports = {
  api: {
    responseLimit: '8mb',
  },
  images: {
    domains: ["", "localhost", "cdn.pixabay.com", "media.istockphoto.com", "res.cloudinary.com"],
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