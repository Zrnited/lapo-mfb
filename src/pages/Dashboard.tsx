import calenderICon from "../assets/icons/calender.png";
import analytics1 from "../assets/icons/analytics-1.png";
import arrow from "../assets/icons/arrow.png";
import { GoChevronRight } from "react-icons/go";
import { quickAccess } from "../utils/navlinks";

export default function Dashboard() {
  return (
    <div className="w-full">
      <section className="flex flex-col gap-y-5">
        {/* intro texts and time */}
        <div className="flex flex-col gap-y-3 lg:flex-row lg:justify-between">
          <div>
            <h1 className="font-bold text-lg">
              Hi Nazeer, what would you like to do today?
            </h1>
            <p className="text-xs">
              Last login: 26/11/2024 <span>14:39:58</span>
            </p>
          </div>
          <div className="border border-[#D0D5DD] p-2 rounded-md flex flex-row items-center gap-x-2 w-[150px] text-[11px]">
            <div className="flex flex-row items-center gap-x-2">
              <img
                src={calenderICon}
                alt="icon"
                className="w-[10.5px] h-[11.67px]"
              />
              <p className="font-semibold">Today</p>
            </div>
            <hr className="h-[15px] border-none w-[0.5px] bg-[#D0D5DD]" />
            <p>11 Nov 2024</p>
          </div>
        </div>
        {/* quick access */}
        <div className="bg-white border border-[#D0D5DD] p-3 rounded-[10px] flex flex-col gap-y-2">
          <h2 className="capitalize text-base font-medium">
            your quick access
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row lg:justify-between xl:gap-3">
            {quickAccess.map((item, idx) => {
              return (
                <div key={idx} className="text-sm bg-[#F1F7FF] rounded-[10px] py-2.5 px-5 flex flex-row gap-x-2 items-center cursor-pointer w-full hover:animate-pulse">
                  <img
                    src={item.icon}
                    alt="icon"
                    className="w-[28px] h-[28px]"
                  />
                  <p className="capitalize font-medium ml-2">{item.title}</p>
                  <i>
                    <GoChevronRight />
                  </i>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Analytics section */}
      <section className="mt-3">
        <div className="flex flex-row items-center gap-x-2">
          <h1 className="font-semibold text-lg">Analytics</h1>
          <hr className="border-none h-[0.5px] bg-[#D0D5DD] w-full" />
        </div>
        <div className="flex flex-col gap-3 items-center">
            <div className="border border-[#E2E2E2] p-3 flex flex-col gap-y-2 rounded-[10px] bg-white w-full sm:w-[286px]">
              <img src={analytics1} alt="icon" className="w-[13.33px] h-[10px]" />
              <p className="capitalize text-[#00000069] font-medium">total active cards</p>
              <div className="mt-2 flex flex-row justify-between items-center">
                <h1 className="text-2xl font-semibold">26,478</h1>
                <div className="flex flex-row items-center gap-x-2">
                  <div className="text-xs bg-[#EFFAF6] rounded-md p-2 flex flex-row gap-x-2 items-center">
                    <img src={arrow} alt="icon" className="w-[6px] h-[6px]" />
                    <p className="text-[#29A174] font-medium">+9%</p>
                  </div>
                  <p className="text-xs text-[#00000069]">this month</p>
                </div>
              </div>
            </div>
        </div>  
      </section>
    </div>
  );
}
