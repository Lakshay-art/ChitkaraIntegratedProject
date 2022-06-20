
var cloudinary = require('cloudinary').v2;
cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
        secure: true
      });
    

export default async function(req,res){
    
  try{
   
      const link=req.body.link; 
      // if(!link)
      // return res.status(200).send("no link")
       var eager_options = {
        // width": 500, "height": 500, "crop": "fit", 
        effect: "saturation:90,contrast:90",
       overlay: "thug_life", gravity: "faces", width: "1.0", height: "0.5", flags: "region_relative",
          // {aspect_ratio: "1.0", crop: "pad"}
        };
    cloudinary.uploader.upload(link,
    { 
    //  eager:eager_options
    transformation: [
      {overlay: "thug_life", gravity: "faces", width: "1.0", height: "0.5", flags: "region_relative"},
      {effect:"auto_contrast"}
      // {aspect_ratio: "1.0", crop: "pad"}
    ]
    },
   (err, image)=>{
      if (err) { console.log(err); }
      console.log("* " + image.url);
      console.log(image)
        return res.status(200).send(image.secure_url);//image.eager[0].url
    });

}
  catch(err)
  {
  console.log(err);
  return res.status(500).send("error");
  }
}