var cloudinary = require('cloudinary').v2;
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '30mb',
    },
  },
}
export default async function handler(req,res){
    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
        secure: true
      });
  try{
      const link=req.body.link;
      if(!link) return;
    cloudinary.uploader.upload(link,
     
      {}
    ,
    function (err, image) {
      if (err) { 
        return res.status(500).send(err);
        }
      console.log("* " + image.url);
    //   console.log(image.eager[0].url);
      return res.status(200).send(image.public_id);
    }); 
}
  catch(err)
  {
  console.log(err);
  return res.status(500).send(err);
  }
}