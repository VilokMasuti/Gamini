import { assets } from "../../assets/assets";

const SideBar = () => {
  return (
    <main className="sidebar">
      <div className="top">
        <img
          className=""
          width={20}
          height={21}
          src={assets.menu_icon}
          alt="menu"
        ></img>
        <div className="new-chat">
          <img src={assets.plus_icon} width={20} height={21} alt="alt" />
          <p>New Chat</p>
        </div>
        <div className="recent">
          <p> Recentt</p>
        </div>
      </div>
      <div className="bottom"></div>
    </main>
  );
};

export default SideBar;
