var cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "500mb",
    },
    responseLimit: "500mb",
  },
};
export default async function handler(req, res) {
  try {
    const link = req.body.link;
    //  var eager_options = {
    //   effect: "saturation:90,contrast:90",
    //  overlay: "thug_life", gravity: "faces", width: "1.0", height: "0.5", flags: "region_relative",
    //   };
    cloudinary.uploader.upload(
      link,
      {
        transformation: [
          {
            overlay: "thug_life",
            gravity: "faces",
            width: "1.0",
            height: "0.5",
            flags: "region_relative",
          },
          { effect: "auto_contrast", format:"webp" },
        ],
      },
      (err, image) => {
        if (err) {
          console.log(err);
        }
        console.log("* " + image.url);
        console.log(image);
        return res.status(200).send(image.secure_url); //image.eager[0].url
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).send("error");
  }
}
