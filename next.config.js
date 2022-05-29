module.exports = {
  images: {
    domains: ["","localhost","cdn.pixabay.com","media.istockphoto.com","res.cloudinary.com"],
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
  //Cross-Origin-Opener-Policy: same-origin Cross-Origin-Embedder-Policy: require-corp