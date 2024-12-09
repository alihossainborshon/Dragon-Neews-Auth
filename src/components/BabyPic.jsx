import React from "react";
import swimming from "../assets/swimming.png";
import classes from "../assets/class.png";
import play from "../assets/playground.png";
import wall from "../assets/bg.png";

const BabyPic = () => {
  return (
    <div>
      <div className="bg-base-200 p-2 mt-5 space-y-4">
        <h2 className="font-semibold m-3">Q - Zone</h2>
        <div className="border-dotted border-2 p-2">
          <img className="w-full" src={swimming} alt="swimming" />
        </div>
        <div className="border-dotted border-2 p-2">
          <img className="w-full" src={classes} alt="classes" />
        </div>
        <div className="border-dotted border-2 p-2">
          <img className="w-full" src={play} alt="play" />
        </div>
      </div>
      <div className="my-5 border-2 p-2 border-[#81069d]">
        <img className="w-full" src={wall} alt="" />
      </div>
    </div>
  );
};

export default BabyPic;
