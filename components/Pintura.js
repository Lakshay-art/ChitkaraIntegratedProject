import React, { useState } from "react";
import ReactDOM from "react-dom";
import ByBlobToBase64 from "./ByBlobToBase64"
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
import styles from "../styles/Pintura.module.css"

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginMediaPreview from "filepond-plugin-media-preview";
import 'filepond-plugin-media-preview/dist/filepond-plugin-media-preview.min.css';
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview,FilePondPluginMediaPreview);

function App(props) {
  const [files, setFiles] = useState([]);
  const setFiles2 = React.useCallback((state) => {
    setFiles(state);
  }, [files]);
  return (<>
    <div className={styles.filepond}>
      <FilePond
        files={files}
        allowReorder={true}
        allowMultiple={true}
        onupdatefiles={setFiles2}
        labelIdle={`Drag & Drop your ${props.type=="videotogif"? "Video/Gif ":"Image "} or <span class="filepond--label-action">Browse</span>`}
        imagePreviewHeight="200"
        allowVideoPreview="true"   // default true
        allowAudioPreview="true"
        imageCropAspectRatio='1:1'
        acceptedFileTypes={props.type=="videotogif"?"video/*":"image/*"}
        imageResizeTargetWidth='500'
        imageResizeTargetHeight='500'
         // stylePanelLayout='integrated circle'
       //  styleLoadIndicatorPosition='top'
        // styleButtonRemoveItemPosition='center bottom'
      /> </div>
          <ByBlobToBase64 type={props.type} file={files}/>
          {console.log(files)}
</>
   
  );
}

export default App;