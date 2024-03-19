import { assets } from "../../assets/assets";
import "../../index.css";
import { card } from "../../utils";
const Main = () => {
  return (
    <div className=" main flex-1 max-h-[100vh] pb-[15vh] relative">
      <div className=" nav  p-[20px] items-center flex justify-between text-[#585858]  font-outfit ">
        <p className=" text-[22px]   ml-[0%]">Gamini </p>
        <img
          className=" rounded-full"
          src={assets.user_icon}
          alt="icon"
          width={50}
          height={50}
        />
      </div>
      <div className=" max-w-[900px] m-auto">
        <div className="greet mt-[50px] mb-[50px] ml-0 mr-0  text-[56px] text-[#c4c7c5] font-[500] p-20px">
          <p className="max-md:text-[20px] ">
            <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
              HELLO,DEV.
            </span>
          </p>
          <p className="max-md:text-[20px]">How Can I Help You Tody? </p>
        </div>
        <div className=" flex   flex-row  gap-[15px]  p-[10px]">
          {card.map(item => (
            <>
              <div
                key={item}
                className=" h-[240px] w-[250px] p-[15px] bg-[#f0f4f9]  rounded-[10px] relative cursor-pointer"
              >
                <p> {item.p} </p>
                <img src={item.img} alt="img" width={22} height={22} />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
