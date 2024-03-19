import { assets } from "../../assets/assets";

const SideBar = () => {
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
        <div className="new-chat mt-[10px] inline-flex items-center gap-10 bg-[#e6eaf1]   rounded-lg p-2 font-semibold text-gray-400 cursor-pointer">
          <img src={assets.plus_icon} width={20} height={21} alt="alt" />
          <p>New Chat</p>
        </div>
        <div className="recent flex flex-col">
          <p> Recent</p>
          <div>
            <img src={assets.message_icon} alt="resct" width={20} height={21} />
            <p> What is react... </p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <img src={assets.question_icon} width={25} height={25} alt="q" />
          <p>Help</p>
        </div>
        <div>
          <img src={assets.history_icon} width={25} height={25} alt="q" />
          <p>Activity</p>
        </div>
        <div>
          <img src={assets.setting_icon} width={25} height={25} alt="q" />
          <p>settings</p>
        </div>
      </div>
    </main>
  );
};

export default SideBar;
