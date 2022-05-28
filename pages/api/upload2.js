
var cloudinary = require('cloudinary').v2;

export default async function(req,res){
    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
        secure: true
      });
    
  try{
      const link=req.body.link;
    cloudinary.uploader.upload(link,
    { 
      //eager transformation 
    },
    function (err, image) {
      if (err) { console.log(err); }
      console.log("* " + image.url);
     return res.staus(200).send(image.url);
    });
   
}
  catch(err)
  {
  console.log(err);
  return res.staus(500);
  }
}