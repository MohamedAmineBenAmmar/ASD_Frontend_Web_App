import React, { useRef, useState } from "react";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";

import { useDispatch } from 'react-redux'
// Import the action
import { fetchAllWords } from '../../../redux/dataManagerSlice'

export const FileSelecter = () => {
  const dispatch = useDispatch()

  const toast = useRef(null);

  const myUploader = (e) => {
    // console.log("upload test");
    // console.log(e.files);
    let formData = new FormData();
    formData.append("file", e.files[0]);

    dispatch(fetchAllWords(formData))
    
  };

  return (
    <div>
      <Toast ref={toast}></Toast>
      <FileUpload name="input_file" customUpload uploadHandler={myUploader} />
    </div>
  );
};
