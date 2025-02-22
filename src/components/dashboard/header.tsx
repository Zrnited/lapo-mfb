import notification from "../../assets/icons/not-icon.png";
import { Link, useLocation } from "react-router-dom";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import user from "../../assets/icons/user-icon.png";
import search from "../../assets/icons/search.png";
import _dicon from "../../assets/icons/dashboard-icon.png";
import headerRequest from "../../assets/icons/header-request.png";
import headerProfile from "../../assets/icons/header-profile.png";
import { GiHamburgerMenu } from "react-icons/gi";

export interface HeaderProps {
  setNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ setNav }: HeaderProps) {
  const { pathname } = useLocation();

  return (
    <header className="border border-[#DEDEDF] fixed top-0 right-0 left-0 flex justify-center bg-white z-10 xl:bg-transparent">
      <nav className="flex p-3 flex-row justify-between items-center gap-x-4 container max-w-[1440px] w-full bg-white sm:pl-60">
        {pathname === "/dashboard" && (
          <div className="flex flex-row gap-x-3 items-center">
            <span
              onClick={() => setNav(true)}
              className="cursor-pointer sm:hidden"
            >
              <GiHamburgerMenu color="#001735" />
            </span>
            <img
              src={_dicon}
              alt="icon"
              className="w-[13.33px] h-auto hidden sm:flex"
            />
            <p className="capitalize text-[#001735] font-semibold text-xs">dashboard</p>
          </div>
        )}

        {pathname === "/dashboard/card-profile" && (
          <div className="flex flex-row gap-x-3 items-center">
            <span
              onClick={() => setNav(true)}
              className="cursor-pointer sm:hidden"
            >
              <GiHamburgerMenu color="#001735" />
            </span>
            <img
              src={headerProfile}
              alt="icon"
              className="w-[13.33px] h-[13.33px] hidden sm:flex"
            />
            <p className="capitalize text-[#001735] font-semibold text-xs">
              card profile
            </p>
          </div>
        )}

        {pathname === "/dashboard/card-request" && (
          <div className="flex flex-row gap-x-3 items-center">
            <span
              onClick={() => setNav(true)}
              className="cursor-pointer sm:hidden"
            >
              <GiHamburgerMenu color="#001735" />
            </span>
            <img
              src={headerRequest}
              alt="icon"
              className="w-[13.33px] h-[13.33px] hidden sm:flex"
            />
            <p className="capitalize text-[#001735] font-semibold text-xs">
              card request
            </p>
          </div>
        )}

        {pathname === "/dashboard/card-profile/create-profile" && (
          <div className="flex flex-row gap-x-3 items-center">
            <span
              onClick={() => setNav(true)}
              className="cursor-pointer sm:hidden"
            >
              <GiHamburgerMenu color="#001735" />
            </span>
            <div className="flex flex-row gap-x-2 items-center sm:gap-x-6 lg:gap-x-2">
              <Link to={'/dashboard/card-profile'} className="text-xs flex flex-row gap-x-1 items-center px-2 py-1 hover:bg-[#f1f1f1] transition ease-in-out delay-100 rounded-lg sm:gap-x-2 sm:py-2">
                <i>
                  <GoChevronLeft size={20} />
                </i>
                <p className="text-[#475467] font-semibold">Back</p>
                <img
                  src={headerProfile}
                  alt="icon"
                  className="w-[15.33px] h-[13.33px] hidden sm:flex"
                />
              </Link>
              <div className="text-xs flex flex-row gap-x-2 items-center">
                <i className="hidden lg:flex"><GoChevronRight size={15} color="#D0D5DD" /></i>
                <p className="text-[#475467] font-medium hidden lg:flex">Card Profile</p>
                <i><GoChevronRight size={15} color="#D0D5DD" /></i>
                <p className="text-[#001735] font-semibold">Create Profile</p>
              </div>
            </div>
          </div>
        )}

        {pathname === "/dashboard/card-request/request-details" && (
          <div className="flex flex-row gap-x-3 items-center">
            <span
              onClick={() => setNav(true)}
              className="cursor-pointer sm:hidden"
            >
              <GiHamburgerMenu color="#001735" />
            </span>
            <div className="flex flex-row gap-x-2 items-center sm:gap-x-6 lg:gap-x-2">
              <Link to={'/dashboard/card-request'} className="text-xs flex flex-row gap-x-1 items-center px-2 py-1 hover:bg-[#f1f1f1] transition ease-in-out delay-100 rounded-lg sm:gap-x-2 sm:py-2">
                <i>
                  <GoChevronLeft size={20} />
                </i>
                <p className="text-[#475467] font-semibold">Back</p>
                <img
                  src={headerRequest}
                  alt="icon"
                  className="w-[15.33px] h-[13.33px] hidden sm:flex"
                />
              </Link>
              <div className="text-xs flex flex-row gap-x-2 items-center">
                <i className="hidden lg:flex"><GoChevronRight size={15} color="#D0D5DD" /></i>
                <p className="text-[#475467] font-medium hidden lg:flex">Card Request</p>
                <i><GoChevronRight size={15} color="#D0D5DD" /></i>
                <p className="text-[#001735] font-semibold">Request Details</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-row gap-x-3 items-center">
          {/* search */}
          <div className="relative hidden sm:flex">
            {/* <Image /> */}
            <img
              src={search}
              alt="icon"
              className="w-[12px] h-auto absolute left-3.5 top-2.5"
            />
            <input
              className="h-[32px] border border-[#D0D5DD] rounded-full pl-9 pr-5 w-full focus:outline-none placeholder:text-[#344054]"
              placeholder="Search"
            />
          </div>
          <img
            src={notification}
            alt="icon"
            className="w-[14.57px] h-auto cursor-pointer"
          />
          <div className="min-w-[32px] h-[32px] rounded-full border border-gray-100 flex justify-center items-center cursor-pointer">
            <img src={user} alt="icon" className="w-[12.8px] h-auto" />
          </div>
        </div>
      </nav>
    </header>
  );
}
