import { useContext } from "react";
import { assets } from "../../assets/assets";
import "../../index.css";
import { card } from "../../utils";
import { Context } from "../../context/Context";
const Main = () => {
  const {
    input,
    setInput,
    loading,
    data,
    setRecentPrompt,
    showresult,
    setPrePrompts,
    prePrompts,
    recentPrompt,
    setShowResult,
    resultdata,
    setResultData,
  } = useContext(Context);
  return (
    <div className=" main flex-1 max-h-[100vh] pb-[15vh] relative">
      <div className=" nav  p-[20px] items-center flex justify-between text-[#585858]  font-outfit ">
        <p className=" text-[22px] max-md:ml-20  ml-[0%]">Gamini </p>
        <img
          className=" rounded-full"
          src={assets.user_icon}
          alt="icon"
          width={50}
          height={50}
        />
      </div>
      <div className=" max-w-[900px] m-auto">
        {!showresult ? (
          <>
            <div className="greet mt-[50px] mb-[50px] ml-0 mr-0  text-[56px] text-[#c4c7c5] font-[500] p-20px">
              <p className="">
                <span className=" max-md:text-[22px] max-md:ml-20 bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
                  HELLO,DEV.
                </span>
              </p>
              <p className="max-md:text-[22px] max-md:ml-4 ">
                How Can I Help You Tody?{" "}
              </p>
            </div>
            <div className=" flex    flex-row  gap-[15px]  p-20px]">
              {card.map((item, index) => (
                <>
                  <div
                    key={index}
                    className="  hover:bg-[#dfe4ea] hover:border-red-600 duration-1000  h-[240px] w-[250px] p-[15px] bg-[#f0f4f9]  rounded-[10px] relative cursor-pointer"
                  >
                    <p className="  text-[#585858] text-[17px]"> {item.p} </p>
                    <img
                      className=" p-[5px] absolute bottom-[10px] right-[10px] rounded-[20px]  bg-white"
                      src={assets.message_icon}
                      alt=""
                      width={25}
                      height={22}
                    />
                  </div>
                </>
              ))}
            </div>
          </>
        ) : (
          <div className="result pt-0 pb-0 pl-[5%] pr-[5%] max-h-[70vh] overflow-y-scroll scrollbar-hidden">
            <div className="result-tilte mt-[40px] mb-[40px]  ml-0 mr-0 flex items-center gap-[20px]">
              <img
                className=" rounded-[50%]"
                src={assets.user_icon}
                width={30}
                height={30}
              />
              <p>{recentPrompt} </p>
            </div>
            <div className=" resul-tdata flex items-center gap-[20px]">
              <img
                className=" mb-[8%]"
                src={assets.gemini_icon}
                width={30}
                height={30}
              />
              {loading ? (
                <div className="loading flex flex-col w-full gap-[10px]">
                  <hr style={{background:linear-gradient(to right,#9ed7ff,#ffffff,#9ed7ff)}} className=" h-[20px] rounded-[4px] border-none bg-[#f6f7f8] " />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p
                  className="  text-amber-500"
                  dangerouslySetInnerHTML={{ __html: resultdata }}
                ></p>
              )}
            </div>
          </div>
        )}

        <div className=" bottom absolute bottom-0 w-full max-w-[900px] pl-[20px] pr-[20px] pt-0 pb-0  ">
          <div className=" flex items-center  justify-between gap-[10px] rounded-[50px]  bg-[#f0f4f9] p-4 mb-[-3%]   ">
            {" "}
            <input
              onChange={e => setInput(e.target.value)}
              value={input}
              className="   outline-none  flex items-center justify-between gap-[20px] bg-[#f0f4f9] "
              type=" text"
              placeholder="Enter a Propmt Here"
            />
            <div className=" flex items-center gap-[20px]">
              <img src={assets.gallery_icon} alt="" width={20} height={40} />
              <img src={assets.mic_icon} alt="" width={20} height={40} />
              <img
                className=" cursor-pointer"
                onClick={() => data()}
                src={assets.send_icon}
                alt=""
                width={20}
                height={40}
              />
            </div>
          </div>
          <p className=" text-[13px] mt-[26px] mr-[15px] ml-[15px] mb-[15px]    text-center font[300]">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
