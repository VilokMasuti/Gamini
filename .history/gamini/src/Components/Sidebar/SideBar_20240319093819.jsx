import { assets } from "../../assets/assets";

const SideBar = () => {
  return (
    <main className="sidebar">
      <div className="top">
        <img className="" width={20} src={assets.menu_icon} alt="menu"></img>
      </div>
      <div className="bottom"></div>
    </main>
  );
};

export default SideBar;
