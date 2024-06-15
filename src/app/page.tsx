import React from "react";
import Image from "next/image"; // Optional if you still want to use Image

export default function Home() {
  return (
    <section className="relative w-full h-screen">
      <iframe
        src="https://drive.google.com/file/d/1Vdbg2Kayyw9bFuH1DXFeEyN7zWyemitO/preview"
        width="100%"
        height="100%"
        frameBorder="0"
      ></iframe>
      <a
        href="https://drive.google.com/uc?export=download&id=1Vdbg2Kayyw9bFuH1DXFeEyN7zWyemitO"
        className="absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Download PDF
      </a>
    </section>
  );
}
