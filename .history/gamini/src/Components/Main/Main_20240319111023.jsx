import { assets } from "../../assets/assets";
import "../../index.css";
const Main = () => {
  return (
    <div className=" main flex-1 max-h-[100vh] pb-[15vh] relative">
      <div className=" nav  p-[20px] items-center flex justify-between text-[#585858] text-[22px] font-outfit ">
        <p className=" text-[20px]">Gamini </p>
        <img
          className=" rounded-full"
          src={assets.user_icon}
          alt="icon"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default Main;
