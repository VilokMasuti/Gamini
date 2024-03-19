import { assets } from "../../assets/assets";
import "../../index.css";
import { card } from "../../utils";
const Main = () => {
  return (
    <div className=" main flex-1 max-h-[100vh] pb-[15vh] relative">
      <div className=" nav  p-[20px] items-center flex justify-between text-[#585858]  font-outfit ">
        <p className=" text-[22px]">Gamini </p>
        <img
          className=" rounded-full"
          src={assets.user_icon}
          alt="icon"
          width={50}
          height={50}
        />
      </div>
      <div className=" max-w-[900px] m-auto">
        <div className="greet">
          <p>
            <span> HELLO,DEV.</span>{" "}
          </p>
          <p>How Can I Help You Tody? </p>
        </div>

        {card.map(item => (
          <>
            <div key={item} className=" flex">
              <p> {item.p} </p>
              <img src={item.img} alt="img" width={22} height={22} />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Main;
