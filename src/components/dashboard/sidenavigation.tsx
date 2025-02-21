import lapologo from "../../assets/images/logo.png";
import dashInactive from "../../assets/icons/dash-inactive.png";
import dashActive from "../../assets/icons/active-dashboard.png";
import { Link } from "react-router-dom";
import { navigationLinks } from "../../utils/dashboardDatas";
import { useLocation } from "react-router-dom";

export default function SideNavigation() {
  const { pathname } = useLocation();

  return (
    <aside
      className={`hidden border-r-2 border-[#DEDEDF] w-1/2 bg-white fixed top-0 h-screen z-20 container transition-all ease-in-out delay-100 overflow-scroll activity sm:flex sm:min-w-[230px] sm:max-w-[230px]`}
    >
      <div className="w-full py-5 px-2 flex flex-col gap-y-8">
        <img src={lapologo} alt="logo" className="w-[138px] h-auto" />
        <div>
          {/* dashboard */}
          <Link
            to={"/dashboard"}
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
                  className={`flex flex-row items-center gap-x-3 w-full hover:cursor-pointer p-3 rounded-md ${
                    pathname === link.to
                      ? "border border-[#E2E2E2] bg-[#F6F6F6]"
                      : "border-none bg-transparent"
                  }`}
                >
                  <img
                    src={pathname !== link.to ? link.icon : link.iconActive}
                    alt="icon"
                    className="w-[13.33px] h-[13.33px]"
                  />
                  <p
                    className={`text-xs capitalize ${
                      pathname === link.to ? "text-[#014DAF]" : "text-[#808080]"
                    }`}
                  >
                    {link.title}
                  </p>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
}
