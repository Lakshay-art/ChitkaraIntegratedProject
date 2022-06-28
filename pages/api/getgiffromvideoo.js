var cloudinary = require("cloudinary").v2;
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "500mb",
    },
    responseLimit: "500mb",
  },
};
export default async function handler(req, res) {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true,
  });
  try {
    const link = req.body.link;
    if (!link) return;
    cloudinary.uploader.upload(
      link,

      {
        resource_type: "video",
        transformation: [{ width: 600, crop: "scale",quality:"auto" }],
      },
      function (err, video) {
        if (err) {
          return res.status(500).send(err);
        }
        console.log(video);
        //   console.log(image.eager[0].url);
        uploadGif(video.public_id);
        //return res.status(200).send(image.public_id);
      }
    );

    const uploadGif = (public_id) => {
      cloudinary.uploader.upload(
        `https://res.cloudinary.com/${process.env.CLOUD_NAME}/video/upload/e_loop/dl_200,vs_40/${public_id}.gif`,

        { public_id: public_id },
        function (err, gif) {
          if (err) {
            return res.status(500).send(err);
          }
          console.log(gif);
          return res.status(200).send(gif.public_id);
        }
      );
    };
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
}
