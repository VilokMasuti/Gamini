import { useState } from "react";
import { assets } from "../../assets/assets";

const SideBar = () => {
  const [extended, setExtended] = useState(false);
  return (
    <main className="sidebar min-h-[100vh]  flex-col justify-between bg-[#f0f4f9] inline-flex p-[25px] ">
      <div className="top">
        <img
          className=" block ml-[10px] cursor-pointer"
          width={20}
          height={21}
          src={assets.menu_icon}
          alt="menu"
        ></img>
        <div className="new-chat mt-[30px] inline-flex items-center gap-10 bg-[#e6eaf1]   rounded-full p-3 font-semibold text-gray-400 cursor-pointer">
          <img src={assets.plus_icon} width={20} height={21} alt="alt" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent flex flex-col">
            <p className="mt-[30px] mb-[20px]">Recent</p>
            <div className=" flex text-start gap-[10px] p-[10px] pr-[40px] rounded-md  text-[#282828] cursor-pointer hover:bg-[#e2e6eb] duration-1000">
              <img
                className=" rounded-full"
                src={assets.message_icon}
                alt="resct"
                width={40}
                height={21}
              />
              <p> What is react... </p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom  flex flex-col gap-3">
        <div className=" flex gap-3 rounded-md  text-[#282828] cursor-pointer hover:bg-[#e2e6eb] duration-1000  p-[10px] pr-[40px] ">
          <img src={assets.question_icon} width={25} height={25} alt="q" />
          <p>Help</p>
        </div>
        <div className=" flex gap-3 rounded-md  text-[#282828] cursor-pointer hover:bg-[#e2e6eb] duration-1000  p-[10px] pr-[40px] ">
          <img src={assets.history_icon} width={25} height={25} alt="q" />
          <p>Activity</p>
        </div>
        <div className=" flex gap-3 rounded-md  text-[#282828] cursor-pointer hover:bg-[#e2e6eb] duration-1000  p-[10px] pr-[40px] ">
          <img src={assets.setting_icon} width={25} height={25} alt="q" />
          <p>settings</p>
        </div>
      </div>
    </main>
  );
};

export default SideBar;
