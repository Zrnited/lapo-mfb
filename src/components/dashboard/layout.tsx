import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import SideNavigation from "./sidenavigation";
import { hideScrollBar } from "../../utils";

export default function Layout() {
  const [nav, setNav] = useState<boolean>(false);

  useEffect(()=>{
    hideScrollBar(nav);
  }, [nav])

  return (
    <main className="w-full flex justify-center">
      <div className="container max-w-[1440px]">
        <Header setNav={setNav} />
        <section className="flex flex-row gap-x-2">
          {/* aside */}
          <Sidebar nav={nav} setNav={setNav} />
          <SideNavigation />
          <div className="w-full pt-16 flex-grow flex pr-5 pb-5 pl-5 sm:pl-60">
            <Outlet /> {/* Renders the current page */}
          </div>
        </section>
      </div>
      {/* header */}
    </main>
  );
}
