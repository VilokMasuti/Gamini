import { assets } from "../../assets/assets";

const SideBar = () => {
  return (
    <main className="sidebar">
      <div className="top">
        <img src={assets.menu_icon} alt=""></img>
      </div>
      <div className="bottom"></div>
    </main>
  );
};

export default SideBar;
