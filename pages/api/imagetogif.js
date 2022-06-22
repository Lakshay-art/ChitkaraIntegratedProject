var cloudinary = require('cloudinary').v2;

export default async function(req,res){
    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
        secure: true
      });

      const xaxis=req.body.x;
      const index=req.body.index;
      const angle=req.body.angle;
      var eager_options = {
      // width": 500, "height": 500, "crop": "fit", "effect": "saturation:-70"

       overlay: "thug_life", gravity: "faces", width: "1.0", height: "0.5", flags: ["region_relative","no_overflow"],x:`${xaxis}`,y:"0",angle:`${angle}`
        // {aspect_ratio: "1.0", crop: "pad"}
      };
  try{
      const link=req.body.link;
      if(!link) return;
    cloudinary.uploader.upload(link,
     
      {  public_id: "image",width:"300",crop:"fit", eager: eager_options }
    ,
    function (err, image) {
      if (err) { 
        return res.status(500).send(err);
        }
      console.log("* " + image.url);
      console.log(index+" "+image.eager[0].url);
      return res.status(200).send(image.eager[0].url);
    }); 
}
  catch(err)
  {
  console.log(err);
  return res.status(500).send(err);
  }
}