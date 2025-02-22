import lapologo from "../../assets/images/logo.png";
import dashInactive from "../../assets/icons/dash-inactive.png";
import dashActive from "../../assets/icons/active-dashboard.png";
import logoutIcon from "../../assets/icons/logout-icon.png";
import cardInfraLogo from "../../assets/icons/card-infra-logo.png";
import { Link } from "react-router-dom";
import { navigationLinks } from "../../utils";
import { useLocation } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

export interface AsideProps {
  setNav: React.Dispatch<React.SetStateAction<boolean>>;
  nav: boolean;
  handleLogout(): void
}

export default function Sidebar({ setNav, nav, handleLogout }: AsideProps) {
  const { pathname } = useLocation();

  return (
    <aside
      className={`border-r-2 border-[#DEDEDF] w-1/2 bg-white fixed top-0 h-screen z-20 container transition-all ease-in-out delay-100 overflow-scroll activity sm:hidden ${
        nav ? "left-0" : "-left-100"
      }`}
    >
      <div className="w-full py-5 px-2 flex flex-col gap-y-8">
        <div className="flex flex-row justify-between w-full">
          <img src={lapologo} alt="logo" className="w-[135px] h-auto" />
          <button
            onClick={() => setNav(false)}
            className="h-[23px] text-[#667085] text-xl flex justify-center items-center rounded-full cursor-pointer"
          >
            <AiOutlineClose />
          </button>
        </div>
        <div>
          {/* dashboard */}
          <Link
            to={"/dashboard"}
            onClick={() => setNav(false)}
            className={`flex flex-row items-center gap-x-3 w-full hover:cursor-pointer p-3 rounded-md ${
              pathname === "/dashboard"
                ? "border border-[#E2E2E2] bg-[#F6F6F6] text-[#014DAF]"
                : "border-none bg-transparent"
            }`}
          >
            <img
              src={pathname !== "/dashboard" ? dashInactive : dashActive}
              alt="icon"
              className="w-[13.33px] h-[13.33px]"
            />
            <p
              className={`text-xs capitalize ${
                pathname === "/dashboard" ? "text-[#014DAF]" : "text-[#808080]"
              }`}
            >
              dashboard
            </p>
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
                  onClick={()=>setNav(false)}
                  className={`flex flex-row items-center gap-x-3 w-full hover:cursor-pointer p-3 rounded-md ${
                    pathname === link.to || pathname === link.innerRoute
                      ? "border border-[#E2E2E2] bg-[#F6F6F6]"
                      : "border-none bg-transparent"
                  }`}
                >
                  <img
                    src={pathname === link.to || pathname === link.innerRoute ? link.iconActive : link.icon}
                    alt="icon"
                    className="w-[13.33px] h-[13.33px]"
                  />
                  <p
                    className={`text-xs capitalize ${
                      pathname === link.to || pathname === link.innerRoute ? "text-[#014DAF]" : "text-[#808080]"
                    }`}
                  >
                    {link.title}
                  </p>
                </Link>
              );
            })}
          </ul>
        </div>
        <div onClick={handleLogout} className="flex flex-row gap-x-5 items-center p-3 hover:bg-gray-100 transition ease-in-out delay-100 rounded-[10px] cursor-pointer mt-5">
          <img src={logoutIcon} alt="icon" className="w-[10.67px] h-[12px]" />
          <p className="text-[#121212] text-xs capitalize">logout</p>
        </div>
        <div className="p-3 flex flex-col gap-y-2 mb-8">
          <p className="uppercase text-[8.5px] text-[#808080]">powered by</p>
            <img src={cardInfraLogo} alt="icon" className="w-[93.33px] h-[41.42px]" />
        </div>
      </div>
    </aside>
  );
}
