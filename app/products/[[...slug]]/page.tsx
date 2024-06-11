// [...slug]
// slug bc it could contain a url slug
// ... to allow it to accept variable num of params
// include another set of [] to make the url slug optional
import React from "react";

interface Props {
  params: { slug: string[] };
  // string[] is indicating it will be of type array of strings
}

const ProductPage = ({ params: { slug } }: Props) => {
  return <div>ProductPage {slug}</div>;
};

export default ProductPage;
