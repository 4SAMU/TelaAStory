import { useState, useEffect } from "react";
import TellAstory from "@/Components";
import Navbar from "@/Components/Navbar";
import Head from "next/head";

export default function Home() {
  const [isServer, setIsServer] = useState(false);

  useEffect(() => {
    setIsServer(true);
  }, []);

  return (
    <>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9052139849973525"
          crossorigin="anonymous"
        ></script>
        <title>TelaAstori</title>
        <meta
          name="description"
          content="Discover captivating stories and immerse yourself in the world of TelaAstori, a blog dedicated to storytelling and imagination."
        />
        <meta
          name="keywords"
          content="storytelling, blog, TelaAstori, imagination, captivating stories"
        />
        <meta property="og:title" content="TelaAstori" />
        <meta
          property="og:description"
          content="Discover captivating stories and immerse yourself in the world of TelaAstori, a blog dedicated to storytelling and imagination."
        />
        <meta property="og:image" content="/HomeImage.png" />
        <meta property="og:url" content="https://telastori.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://telastori.vercel.app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {isServer && (
          <>
            <Navbar />
            <TellAstory />
          </>
        )}
      </main>
    </>
  );
}
