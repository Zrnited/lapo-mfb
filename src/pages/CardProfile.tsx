import { useEffect, useState } from "react";
import search from "../assets/icons/search-icon.png";
import { CardProfileType } from "../entities";
import add from "../assets/icons/add-icon.png";
import CardProfilesTable from "../components/card-profile/table/CardProfilesTable";
import { Link } from "react-router-dom";

export default function CardProfile() {
  const tableHeadings = [
    {
      name: "card name",
      classname: "",
    },
    {
      name: "currency",
      classname: "hidden md:table-cell",
    },
    {
      name: "expiration",
      classname: "hidden md:table-cell",
    },
    {
      name: "bin prefix",
      classname: "hidden md:table-cell",
    },
    {
      name: "date created",
      classname: "",
    },
    {
      name: "action",
      classname: "",
    },
  ];

  const [exisCardProfile, setExisCardProfile] = useState<CardProfileType[]>([
    {
        cardName: "Verve-1",
        currency: "NGN",
        expiration: "40 months",
        binPrefix: "50611234",
        dateCreated: "11/10/2024 23:21:03"
    },
    {
        cardName: "Verve-1",
        currency: "NGN",
        expiration: "40 months",
        binPrefix: "50611234",
        dateCreated: "11/10/2024 23:21:03"
    },
    {
        cardName: "Verve-1",
        currency: "NGN",
        expiration: "40 months",
        binPrefix: "50611234",
        dateCreated: "11/10/2024 23:21:03"
    }
  ]);

  //comment out later
  useEffect(()=>{
    setExisCardProfile(exisCardProfile);
  }, [exisCardProfile])

  return (
    <div className="w-full">
      <section className="flex flex-col gap-y-2">
        <h1 className="text-lg capitalize font-semibold">card profile</h1>
        <p className="text-[#475467] text-sm">
          Create, view and edit card profiles here.
        </p>
        <hr className="w-full border-none h-[0.5px] bg-[#98A2B3]" />
        <div className="flex flex-col gap-3 md:flex-row md:justify-between">
          <div className="relative">
            <input
              className="h-[40px] border border-[#D0D5DD] w-full rounded-lg bg-white pl-10 pr-3 text-sm focus:outline-none"
              placeholder="Search by card name"
              name="search"
            />
            <img
              src={search}
              alt="search"
              className="w-[15px] h-[15px] absolute left-4 top-3"
            />
          </div>
          <Link to={'/dashboard/card-profile/create-profile'} className="capitalize bg-[#014DAF] text-white h-[36px] w-[117px] text-xs rounded-md flex items-center justify-center gap-x-2 cursor-pointer">
            <img src={add} alt="icon" className="h-[11.67px] w-[11.67px]" />
            <p>add profile</p>
          </Link>
        </div>
        <hr className="w-full border-none h-[0.5px] bg-[#98A2B3]" />
      </section>
      {/* card profiles */}
      <section className="mt-5 h-full">
        <CardProfilesTable tableHead={tableHeadings} tableBody={exisCardProfile} />
      </section>
    </div>
  );
}
