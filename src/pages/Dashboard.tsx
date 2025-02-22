import calenderICon from "../assets/icons/calender.png";
import { GoChevronRight } from "react-icons/go";
import resize from "../assets/icons/resize-arrow.png";
import {
  analyticalDatas,
  quickAccess,
  recentCardRequests,
} from "../utils";
import { Analytics } from "../components/dashboard/analytics";
import MonthlyIssuance from "../components/dashboard/graphs/monthlyIssuance";
import RecentCardRequests from "../components/dashboard/tables/recentCardRequests";
import WeekIncome from "../components/dashboard/graphs/weekIncome";
import StatusDistribution from "../components/dashboard/graphs/statusDistribution";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState<string>();

  function getUser (){
    const userName = sessionStorage.getItem("user")
    if(userName) setUser(JSON.parse(userName));
  }

  function getCurrentDate(): string {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-GB", options).replace(",", "");
  }
  

  const tableHead = [
    {
      name: "branch",
      classname: "",
    },
    {
      name: "card type",
      classname: "",
    },
    {
      name: "quantity",
      classname: "hidden md:table-cell",
    },
    {
      name: "status",
      classname: "hidden md:table-cell",
    },
    {
      name: "action",
      classname: "",
    },
  ];

  useEffect(()=>{
    getUser();
  }, [user])

  return (
    <div className="w-full">
      {/* dashboard overview section */}
      <section className="flex flex-col gap-y-5">
        {/* intro texts and time */}
        <div className="flex flex-col gap-y-3 lg:flex-row lg:justify-between">
          <div>
            <h1 className="font-bold text-lg">
              {`Hi ${user ? user : "User"}, what would you like to do today?`}
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
            <p>{getCurrentDate()}</p>
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
                <div
                  key={idx}
                  className="text-sm bg-[#F1F7FF] rounded-[10px] py-2.5 px-5 flex flex-row gap-x-2 items-center cursor-pointer w-full hover:animate-pulse"
                >
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
        <div className="flex flex-row items-center gap-x-2 pb-3">
          <h1 className="font-semibold text-lg">Analytics</h1>
          <hr className="border-none h-[0.5px] bg-[#D0D5DD] w-full" />
        </div>
        <div className="flex flex-col gap-3 items-center md:grid md:grid-cols-2 md:place-items-center xl:flex xl:flex-row">
          {analyticalDatas.map((data, idx) => {
            return (
              <Analytics
                key={idx}
                title={data.title}
                percentage={data.percentage}
                value={data.value}
                icon={data.icon}
                isStats={data.isStats}
                period={data.period}
              />
            );
          })}
        </div>
      </section>

      {/* monthly issuance & recent card requests */}
      <section className="mt-3 flex flex-col gap-3 w-full lg:flex-row">
        <div className="bg-white rounded-[10px] border border-[#E2E2E2] p-3 flex flex-col gap-y-2 lg:w-1/2">
          <h1 className="text-base capitalize font-medium text-[#121212] lg:text-lg">
            monthly issuance
          </h1>
          {/* monthly graph */}
          <MonthlyIssuance />
          <hr className="w-full h-[0.5px] border-none bg-[#E2E2E2]" />
          <div className="text-[#808080] text-xs flex flex-row gap-2 items-center justify-center">
            <div className="flex flex-row gap-x-1 items-center">
              <span className="bg-[#014DAF] rounded-full h-[8px] w-[8px]"></span>
              <p>Personalized</p>
            </div>
            <div className="flex flex-row gap-x-1 items-center">
              <span className="bg-[#CCE2FF] rounded-full h-[8px] w-[8px]"></span>
              <p>Instant</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[10px] border border-[#E2E2E2] p-3 flex flex-col gap-y-2 lg:w-1/2">
          <div className="flex flex-row justify-between">
            <h1 className="text-base capitalize font-medium text-[#121212] lg:text-lg">
              recent card requests
            </h1>
            <img
              src={resize}
              alt="icon"
              className="w-[14.7px] h-[14.7px] cursor-pointer"
            />
          </div>
          {/* Recent Card Requests Table */}
          <div>
            <RecentCardRequests
              tableHead={tableHead}
              tableBody={recentCardRequests}
            />
          </div>
        </div>
      </section>

      {/* income and card status distribution graphs */}
      <section className="my-3 flex flex-col gap-3 w-full lg:flex-row">
        <div className="bg-white rounded-[10px] border border-[#E2E2E2] p-3 flex flex-col gap-y-2 h-fit lg:w-2/3">
          <h1 className="text-base capitalize font-medium text-[#121212] lg:text-lg">
            this week's income
          </h1>
          <div className="w-full">
            <WeekIncome />
          </div>
        </div>
        <div className="bg-white rounded-[10px] border border-[#E2E2E2] p-3 flex flex-col gap-y-2 relative h-fit object-cover lg:w-1/2">
          <h1 className="text-base capitalize font-medium text-[#121212] lg:text-lg">
            card status distribution
          </h1>
          <div className="w-full flex justify-center items-center h-[276px]">
            <StatusDistribution />
          </div>
          <div className="text-[#808080] text-xs flex flex-row gap-x-4 items-center justify-center capitalize">
            <div className="flex flex-row gap-x-1 items-center">
              <span className="bg-[#00984C] rounded-full h-[8px] w-[8px]"></span>
              <p>active</p>
            </div>
            <div className="flex flex-row gap-x-1 items-center">
              <span className="bg-[#FFBA24] rounded-full h-[8px] w-[8px]"></span>
              <p>expired</p>
            </div>
            <div className="flex flex-row gap-x-1 items-center">
              <span className="bg-[#014DAF] rounded-full h-[8px] w-[8px]"></span>
              <p>inactive</p>
            </div>
            <div className="flex flex-row gap-x-1 items-center">
              <span className="bg-[#8020E7] rounded-full h-[8px] w-[8px]"></span>
              <p>blocked</p>
            </div>
            <div className="flex flex-row gap-x-1 items-center">
              <span className="bg-[#FF4457] rounded-full h-[8px] w-[8px]"></span>
              <p>lost</p>
            </div>
          </div>
          {/* information */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 flex flex-col justify-center items-center">
            <p className="capitalize text-xs text-[#808080]">total cards</p>
            <h1 className="text-[#121212] font-semibold text-2xl">2,450</h1>
          </div>
        </div>
      </section>
    </div>
  );
}
