// [...slug]
// slug bc it could contain a url slug
// ... to allow it to accept variable num of params
// include another set of [] to make the url slug optional
import React from "react";

interface Props {
  params: { slug: string[] };
  // string[] is indicating it will be of type array of strings
  searchParams: { sortOrder: string };
  // accessing query string parameters, must use searchParams
  // ex: http://localhost:3000/products?sortOrder=name
}

const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      ProductPage {slug} {sortOrder}
    </div>
  );
};

export default ProductPage;
