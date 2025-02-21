import notification from "../../assets/icons/not-icon.png";
import user from "../../assets/icons/user-icon.png";
import search from "../../assets/icons/search.png";
import _dicon from "../../assets/icons/dashboard-icon.png";
import { GiHamburgerMenu } from "react-icons/gi";

export interface HeaderProps {
  setNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({setNav}: HeaderProps) {
  return (
    <header className="border border-[#DEDEDF] fixed top-0 right-0 left-0 flex justify-center bg-white z-10 xl:bg-transparent">
      <nav className="flex p-3 flex-row justify-between items-center gap-x-4 container max-w-[1440px] w-full bg-white sm:pl-60">
        <div className="flex flex-row gap-x-3 items-center">
          <span onClick={()=>setNav(true)} className="cursor-pointer sm:hidden">
            <GiHamburgerMenu color="#001735" />
          </span>
          <img
            src={_dicon}
            alt="icon"
            className="w-[13.33px] h-auto hidden sm:flex"
          />
          <p className="capitalize text-[#001735] font-semibold">dashboard</p>
        </div>
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
