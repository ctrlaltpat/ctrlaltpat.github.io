import React from "react";
import Head from "next/head";
import Social from "../components/Social";

const Home = () => (
  <div className="flex items-center flex-col justify-center h-screen cap-bg">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>CtrlAltPat</title>
    </Head>
    <div className="relative w-64 h-64">
      <img
        className="avatar"
        src="/ctrlaltpat-thumbs-up.png"
        alt="ctrlaltpat memoji"
      />
    </div>
    <h1 className="mt-4 text-4xl text-blue-700 tracking-widest">
      {"<CtrlAltPat/>"}
    </h1>
    <Social />
  </div>
);

export default Home;
