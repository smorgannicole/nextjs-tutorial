// a dynamic route is one that takes one or more parameters
// dynamic routes allow you to create pages that are not tied to specific paths at build time but are determined by the content you have
// to add parameters to our routes, we wrap directory names with square brackets ([id])
// ex structure vvv
// pages/
// ├── index.tsx
// ├── users/
// │   └── [id].tsx
// the dynamic route for user profiles is the [id].tsx file
import React from "react";

interface Props {
  params: { id: number; photoId: number };
}

const PhotoPage = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      PhotoPage {id} {photoId}
    </div>
  );
};

export default PhotoPage;
