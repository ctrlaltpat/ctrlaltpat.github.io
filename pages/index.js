import React from "react";

const Home = () => (
  <div className="flex items-center flex-col justify-center h-screen">
    <div className="relative w-64 h-64">
      <img
        className="absolute h-full w-full object-cover rounded-full shadow-md"
        src="/ctrlaltpat1.png"
        alt="ctrlaltpat memoji"
      />
    </div>
    <h1 className="text-blue-900 mt-4">CtlAltPat</h1>
    <p>I'll be back to this later...</p>
  </div>
);

export default Home;
