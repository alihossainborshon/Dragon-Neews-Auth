import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="mt-5">
      <h2 className="font-semibold mb-3">Find Us On</h2>
      <div>
        <div className="join join-vertical flex *:bg-base-100">
          <button className="btn h-16 justify-start"><FaFacebook className="text-xl" /> Facebook</button>
          <button className="btn h-16 justify-start"><FaTwitter className="text-xl" /> Twitter</button>
          <button className="btn h-16 justify-start"><FaInstagram className="text-xl" /> Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
