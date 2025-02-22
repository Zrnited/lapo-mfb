import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import SideNavigation from "./sidenavigation";
import { hideScrollBar } from "../../utils";

export default function Layout() {
  const navigate = useNavigate();
  const [nav, setNav] = useState<boolean>(false);

  function handleLogout (){
    sessionStorage.removeItem("user");
    navigate('/');
  }

  useEffect(()=>{
    hideScrollBar(nav);
  }, [nav])

  return (
    <main className="w-full flex justify-center">
      <div className="container max-w-[1440px]">
        <Header setNav={setNav} />
        <section className="flex flex-row gap-x-2">
          {/* aside */}
          <Sidebar handleLogout={handleLogout} nav={nav} setNav={setNav} />
          <SideNavigation handleLogout={handleLogout} />
          <div className="w-full pt-16 flex-grow flex pr-5 pb-5 pl-5 sm:pl-60">
            <Outlet /> {/* Renders the current page */}
          </div>
        </section>
      </div>
      {/* header */}
    </main>
  );
}
