import React from "react";
import { Document, Page } from "react-pdf";
import Image from "next/image"; // Optional if you still want to use Image

export default function Home() {
  return (
    <section className="w-full h-screen">
    <iframe
      src="https://drive.google.com/drive/folders/1FkLBV463-NJD5vonGBhjaB9DBHo2qXjC"
      width="100%"
      height="100%" // Using viewport height for full vertical space
      frameBorder="0" // Remove border (corrected spelling)
    ></iframe>
  </section>
  );
}
