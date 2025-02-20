import lapologo from "../../assets/images/logo.png";
import dashInactive from "../../assets/icons/dash-inactive.png";
import dashActive from "../../assets/icons/active-dashboard.png";
import { Link } from "react-router-dom";
import { navigationLinks } from "../../utils/navlinks";
import { useLocation } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

export interface AsideProps {
    setNav: React.Dispatch<React.SetStateAction<boolean>>;
    nav: boolean;
  }

export default function Sidebar({setNav, nav}: AsideProps) {

    const { pathname } = useLocation();
    // console.log(location.pathname);

  return (
    <aside className={`border-r-2 border-[#DEDEDF] w-1/2 bg-white fixed top-0 h-screen transition-all ease-in-out delay-100 overflow-scroll activity sm:min-w-[230px] sm:max-w-[230px] sm:left-0 ${nav ? "left-0" : "-left-100"}`}>
      <div className="w-full py-5 px-2 flex flex-col gap-y-8">
        <div className="flex flex-row justify-between sm:justify-start">
            <img src={lapologo} alt="logo" className="w-[138px] h-auto" />
            <button onClick={()=>setNav(false)} className="h-[23px] w-[23px] bg-red-500 text-white flex justify-center items-center rounded-full text-xs cursor-pointer sm:hidden"><AiOutlineClose /></button>
        </div>
        <div>
          {/* dashboard */}
          <Link
            to={"/dashboard"}
            className={`flex flex-row items-center gap-x-3 w-full hover:cursor-pointer p-3 rounded-md ${pathname === "/dashboard" ? "border border-[#E2E2E2] bg-[#F6F6F6] text-[#014DAF]" : "border-none bg-transparent"}`}
          >
            <img
              src={pathname !== '/dashboard' ? dashInactive : dashActive}
              alt="icon"
              className="w-[13.33px] h-[13.33px]"
            />
            <p className={`text-xs capitalize ${pathname === '/dashboard' ? "text-[#014DAF]" : "text-[#808080]"}`}>dashboard</p>
          </Link>
          <h3 className="uppercase mt-5 text-[8.5px] text-[#7E8B9C] ml-5">
            main menu
          </h3>
          {/* other nav links */}
          <ul className="py-3 flex flex-col gap-y-2">
            {navigationLinks.map((link, idx) => {
              return (
                <Link
                key={idx}
                  to={link.to}
                  className={`flex flex-row items-center gap-x-3 w-full hover:cursor-pointer p-3 rounded-md ${pathname === link.to ? "border border-[#E2E2E2] bg-[#F6F6F6]" : "border-none bg-transparent"}`}
                >
                  <img
                    src={pathname !== link.to ? link.icon : link.iconActive}
                    alt="icon"
                    className="w-[13.33px] h-[13.33px]"
                  />
                  <p className={`text-xs capitalize ${pathname === link.to ? "text-[#014DAF]" : "text-[#808080]"}`}>{link.title}</p>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
}
