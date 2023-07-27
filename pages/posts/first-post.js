import React from "react";
import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <h1>first-post</h1>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
    </>
  );
}
