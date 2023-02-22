import React from "react";
import { useNavigate } from "react-router-dom";
import resultLog from "../../assets/images/govsolarco-white.webp";

export default function Index() {
  const navigate = useNavigate();

  const callNow = () => {
    alert("Calling now!");
    navigate("/");
  };

  return (
    <>
      <div className="w-full flex justify-center p-5 absolute h-[100px]">
        <img className="w-auto max-h-[50px]" src={resultLog} alt="logo" />
      </div>
      <div className="flex p-6 items-center bg-[#333] h-[100vh] flex-col pt-[100px] pb-[50px] font-NotoSans justify-center">
        <div className="flex flex-col items-center bg-[#222] p-10 rounded-md max-w-[700px]">
          <p className="font-[700] mb-[10px] text-white text-[15px] md:text-[30px] leading-relaxed">
            Status: Qualified With Estimated Savings:{" "}
            <span className="text-[red] text-bold">$64,912</span>
          </p>
          <p className="font-[700] mb-[10px] text-white text-[15px] leading-relaxed">
            Last Step fdsa! Call Now to claim Your incentivize worth{" "}
            <span className="text-[red] text-bold text-[20px]">$64,912!</span>
          </p>
          <button
            onClick={callNow}
            className="flex items-center justify-center px-[50px] py-3 bg-[#078041] hover:bg-[#FB7306] text-[15px] md:text-[20px] h-[50px] w-full rounded-[5px] text-[white] m-1"
          >
            Call Now!
          </button>
        </div>
      </div>
    </>
  );
}
