// import Link from "next/link";
// import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
import seattlePark from "@/public/images/seattle-natural-park.jpg";

export default async function Home() {
  const session = await getServerSession(authOptions);
  // getServerSession fxn from next auth retrieves current user session on server side

  return (
    <main className="relative h-screen">
      {/* <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCard /> */}
      {/* <Image
        src={seattlePark}
        alt="a sea of small yellow flowers amidst vibrant green foliage"
      /> */}
      {/* this component is built on top of the standard img element in html, but... */}
      {/* under the hood, it auto-compresses and resizes the image based on device size */}
      <Image
        src="https://bit.ly/react-cover"
        alt="react logo over pink and teal diagonal gradient"
        fill
        className="object-cover"
      />
      {/* for this to work, this domain needs to be registered in config file */}
      {/* with remote imgs, dimensions should always be provided bc next.js doesn't know their size */}
      {/* fill makes img take entire screen (may stretch img) */}
    </main>
  );
}
