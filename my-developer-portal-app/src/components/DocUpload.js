import React from "react";

// // import 'react-dropzone-uploader/dist/styles.css'
// import Dropzone from "react-dropzone-uploader";

// const DocUpload = () => {
//   // specify upload params and url for your files
//   const getUploadParams = ({ meta }) => {
//     return { url: "https://localhost:3000/upload" };
//   };

//   // called every time a file's `status` changes
//   const handleChangeStatus = ({ meta, file }, status) => {
//     console.log(status, meta, file);
//   };

//   // receives array of files that are done uploading when submit button is clicked
//   const handleSubmit = (files, allFiles) => {
//     console.log(files.map((f) => f.meta));

//     allFiles.forEach((f) => f.remove());
//   };

//   return (
//     <Dropzone
//       getUploadParams={getUploadParams}
//       onChangeStatus={handleChangeStatus}
//       onSubmit={handleSubmit}
//       accept="image/*,audio/*,video/*,application/*"
//     />
//   );
// };

// export default DocUpload;
