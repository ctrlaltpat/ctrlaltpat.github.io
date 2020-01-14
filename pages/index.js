import React from "react";
import Social from "../components/Social";

const Home = () => (
  <div className="flex items-center flex-col justify-center h-screen cap-bg">
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
