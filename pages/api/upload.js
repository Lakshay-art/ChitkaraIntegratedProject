// import {readFileSync} from 'fs';
//     import {convert} from 'imagemagick-convert';
//     //import gm from 'gm'
//     import ffmpeg from 'ffmpeg'
//     export default async function(req,res){
//   try{
    
//      console.log("reached")
//     // somewhere in async function
//     // const imgBuffer = await convert({
//     //     srcData: readFileSync("/Users/lakshaygupta/Desktop/Projects/ChitkaraIntegratedProject/pages/icon.png"),
//     //     srcFormat: 'PNG',
//     //     width: 100,
//     //     height: 100,
//     //     resize: 'crop',
//     //     format: 'PNG'
//     // });
//    // console.log(imgBuffer)
//    try {
// 	var process = new ffmpeg('/Users/lakshaygupta/Desktop/Projects/ChitkaraIntegratedProject/pages/icon.mp4');
// 	process.then(function (video) {
// 		console.log('The video is ready to be processed');
//     video.fnExtractSoundToMP3('/Users/lakshaygupta/Desktop/Projects/ChitkaraIntegratedProject/pages/frames', function (error, file) {
// 			if (!error)
// 				console.log('Video file: ' + file);
// 		});

// 	},  function (err) {
// 		console.log('Error: ' + err);
// 	});
// } catch (e) {
// 	console.log(e.code);
// 	console.log(e.msg);
// }
//     return res.status(200).send("imgBuffer");
//       }
      
//   catch(err)
//   {
//       console.log(err)
//    return res.status(500)
//   }
// }