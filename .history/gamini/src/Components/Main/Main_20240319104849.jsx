import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className=" main flex-1 max-h-[100vh] pb-[15vh] relative">
      <div className=" nav  p-[20px] items-center flex justify-between text-[#585858] text-[22px]">
        <p className="">Gamini </p>
        <img
          className=" rounded-full"
          src={assets.user_icon}
          alt="icon"
          width={35}
          height={35}
        />
      </div>
    </div>
  );
};

export default Main;
