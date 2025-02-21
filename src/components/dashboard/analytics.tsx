import arrow from "../../assets/icons/arrow.png";
import attention from "../../assets/icons/attention.png";

interface AnalyticsProps {
    key?: number;
    title: string;
    value: string;
    percentage: string;
    icon: string;
    isStats: boolean;
    period: string;
}

export function Analytics( {title, value, percentage, icon, isStats, period, key}: AnalyticsProps) {
  return (
    <div key={key} className="border border-[#E2E2E2] p-3 flex flex-col gap-y-2 rounded-[10px] bg-white w-full transition ease-in-out delay-100 md:w-full xl:w-[286px]">
      <img src={icon} alt="icon" className="w-[13.33px] h-[10px]" />
      <p className="capitalize text-[#00000069] font-medium">
        {title}
      </p>
      <div className="mt-2 flex flex-row justify-between items-center">
        <h1 className="text-2xl font-semibold text-[#121212]">{value}</h1>
        <div className="flex flex-row items-center gap-x-2">
          {isStats && (<div className="text-xs bg-[#EFFAF6] rounded-md p-2 flex flex-row gap-x-2 items-center">
            <img src={arrow} alt="icon" className="w-[6px] h-[6px]" />
            <p className="text-[#29A174] font-medium">{percentage}</p>
          </div>)}
          {isStats && (<p className="text-xs text-[#00000069]">{period}</p>)}
          {!isStats && (<div className="flex flex-row gap-x-1 items-center">
            <img src={attention} alt="icon" className="w-[10px] h-[10px]" />
            <p className="text-xs capitalize text-[#E78020]">requires attention</p>
          </div>)}
        </div>
      </div>
    </div>
  );
}
