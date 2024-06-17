"use client";
import React from "react";
import { CldUploadWidget } from "next-cloudinary";

const UploadPage = () => {
  return (
    <CldUploadWidget uploadPreset="eoua90bw">
      {/* this component expects a fxn as its children */}
      {/* uploadPreset="eoua90bw" tells the <CldUploadWidget> to use settings defined in the "eoua90bw" preset stored in cloudinary account */}
      {({ open }) => (
        <button className="btn btn-primary" onClick={() => open()}>
          Upload
        </button>
      )}
      {/* next cloudinary passes an obj to this fxn- we destructure and grab the open fxn (there are others, but we only need open rn) */}
    </CldUploadWidget>
  );
};

export default UploadPage;
