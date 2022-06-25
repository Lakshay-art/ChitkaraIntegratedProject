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
    var eager_options = [
      [
        {
          overlay: "thug_life",
          gravity: "face",
          width: "1.0",
          height: "0.5",
          flags: ["region_relative", "no_overflow"],
        },
        { gravity: "face", height: 150, width: 150, crop: "thumb" },
      ],
      [
        {
          overlay: "birthdayhat",
          gravity: "face",
          width: "1.0",
          height: "1.0",
          flags: ["region_relative", "no_overflow"],
          y: "-50",
        },
        { gravity: "face", height: 150, width: 150, crop: "thumb" },
      ],
      [
        {
          overlay: "squidmask1",
          gravity: "face",
          width: "1.0",
          height: "1.0",
          flags: ["region_relative", "no_overflow"],
        },
        { gravity: "face", height: 120, width: 120, crop: "thumb" },
      ],
      [
        {
          overlay: "squidmask2",
          gravity: "face",
          width: "1.0",
          height: "1.0",
          flags: ["region_relative", "no_overflow"],
        },
        { gravity: "face", height: 120, width: 120, crop: "thumb" },
      ],
      [
        {
          overlay: "squidmask3",
          gravity: "face",
          width: "1.0",
          height: "0.5",
          flags: ["region_relative", "no_overflow"],
        },
        { gravity: "face", height: 120, width: 120, crop: "thumb" },
      ],
      [
        {
          overlay: "thug_life",
          gravity: "face",
          width: "1.0",
          height: "0.5",
          flags: ["region_relative", "no_overflow"],
        },
        { gravity: "face", height: 150, width: 150, crop: "thumb" },
      ],
      [
        {
          overlay: "thug_life",
          gravity: "face",
          width: "1.0",
          height: "0.5",
          flags: ["region_relative", "no_overflow"],
        },
        { gravity: "face", height: 150, width: 150, crop: "thumb" },
      ],
      [
        {
          overlay: "thug_life",
          gravity: "face",
          width: "1.0",
          height: "0.5",
          flags: ["region_relative", "no_overflow"],
        },
        { gravity: "face", height: 150, width: 150, crop: "thumb" },
      ],
    ];
    const link = req.body.link;
    if (!link) return;
    cloudinary.uploader.upload(
      link,

      { width: "1200",format:"webp", eager: eager_options },
      function (err, image) {
        if (err) {
          return res.status(500).send(err);
        }
        console.log("* " + image);
        //   console.log(image.eager[0].url);
        return res.status(200).send(image);
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
}
