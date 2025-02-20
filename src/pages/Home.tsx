// import TodoCard from "../components/TodoCard";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="h-screen justify-center items-center flex w-full bg-black text-white">
      <div className="max-w-[400px] w-fit p-3 text-center flex flex-col gap-y-4 justify-center items-center">
        <h1>This is Kolawole Mayowa Solution. Click on the button below to begin.</h1>
        <Link to="/dashboard" className="p-3 rounded-md bg-[#014DAF] w-fit hover:animate-pulse">Proceed to dashboard</Link>
      </div>
    </main>
  );
}
