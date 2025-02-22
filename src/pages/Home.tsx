/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState<string>();
  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  function handleSubmit (){
    if(user) {
      sessionStorage.setItem('user', JSON.stringify(user));
    }
    setIsRegistered(true);
  }

  useEffect(()=>{
    if(isRegistered) navigate('/dashboard');
  }, [isRegistered])

  return (
    <main className="h-screen justify-center items-center flex w-full bg-black text-white">
      <div className="max-w-[400px] w-fit p-3 text-center flex flex-col gap-y-4 justify-center items-center">
        <h1>This is Kolawole Mayowa Solution. Enter your name then click on the button below to login.</h1>
        <form className="flex flex-col gap-y-3 w-full items-center" onSubmit={handleSubmit}>
          <input className="bg-white h-[44px] rounded-md px-5 focus:outline-none w-[75%] placeholder:text-[#808080] text-black text-sm" type="text" placeholder="Enter your name" onChange={(e)=>setUser(e.target.value)} />
          <button disabled={!user} className="bg-[#014DAF] rounded-md text-white cursor-pointer px-3 py-2 text-sm w-fit hover:animate-pulse disabled:bg-[#808080]">Proceed to dashboard</button>
        </form>
      </div>
    </main>
  );
}
