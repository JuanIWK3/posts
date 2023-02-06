import Image from "next/image";
import Link from "next/link";
import React from "react";

import LogoImg from "@/assets/Posts-logos.jpeg";

export const Navbar = () => {
  return (
    <div className="flex items-center gap-4 p-6 text-2xl">
      <Image src={LogoImg} alt="" width={40} height={40} />
      <Link href={"/posts"}>Posts</Link>
    </div>
  );
};
