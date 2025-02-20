import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./header";
import Sidebar from "./sidebar";

export default function Layout() {
  const [nav, setNav] = useState<boolean>(false);

  return (
    <main className="w-full flex justify-center">
      <div className="container max-w-[1440px]">
        <Header setNav={setNav} />
        <section className="flex flex-row gap-x-2">
          {/* aside */}
          <Sidebar nav={nav} setNav={setNav} />
          <div className="p-16 bg-[#F8FBFF] w-full mt-16 sm:h-[90vh] sm:overflow-scroll activity">
            <Outlet /> {/* Renders the current page */}
          </div>
        </section>
      </div>
      {/* header */}
    </main>
  );
}
