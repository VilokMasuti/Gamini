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
          <p> Recent</p>
          <div>
            <img src={assets.message_icon} alt="resct" width={20} height={21} />
            <p> What is react... </p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <img src={assets.question_icon} alt="q" />
          <p>Help</p>
        </div>
      </div>
    </main>
  );
};

export default SideBar;
