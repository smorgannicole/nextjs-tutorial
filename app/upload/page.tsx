"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  // need state var for stroing public id so we can pass to img component
  // if we wanted to handle multiple images, would need an arr of strings instead

  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          height={270}
          width={180}
          alt="Cloud image alt tag"
        />
        // will display image uploaded by user, vals are temp hardset
      )}
      {/* arbitrary height and width */}
      <CldUploadWidget
        uploadPreset="eoua90bw"
        onUpload={(result, widget) => {
          // onUpload: event handler triggered after upload attempt
          // result: result obj returned by Cloudinary- contains info about upload
          // widget: the widget instance that triggered upload
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
          // public id wasn't properly typed so must create interface and properly type it
        }}
      >
        {/* this component expects a fxn as its children */}
        {/* uploadPreset="eoua90bw" tells the <CldUploadWidget> to use settings defined in the "eoua90bw" preset stored in cloudinary account */}
        {/* onUpload is an event that gets triggered every time a file is uploaded */}
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
        {/* next cloudinary passes an obj to this fxn- we destructure and grab the open fxn (there are others, but we only need open rn) */}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
