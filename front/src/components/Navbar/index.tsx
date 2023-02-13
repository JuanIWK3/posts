import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.scss";

import LogoImg from "@/assets/Posts-logos.jpeg";

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <Image src={LogoImg} alt="" width={40} height={40} />
        <Link href={"/posts"}>Posts</Link>
      </div>
    </div>
  );
};
