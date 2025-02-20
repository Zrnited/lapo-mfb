import { Link, Outlet } from "react-router-dom";
import Header from "./header";

export default function Layout() {
  return (
    <main>
      {/* header */}
      <Header />
      <section>
        {/* aside */}
        <div className="p-16">
          <Outlet /> {/* Renders the current page */}
        </div>
      </section>
    </main>
  );
}
