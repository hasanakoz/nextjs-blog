import React from "react";
import Link from "next/link";
import Head from "next/head";
import { MyImage } from "../myImage";

export default function FirstPost() {
  return (
    <>
      <MyImage />
      <Head>
        <h1>First Post</h1>
      </Head>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
    </>
  );
}
