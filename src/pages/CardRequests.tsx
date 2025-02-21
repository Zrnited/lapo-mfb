/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import search from "../assets/icons/search-icon.png";
import CardRequestsTable from "../components/card-requests/tables/CardRequestTable";
import { cardRequests } from "../utils";
import { CardRequest } from "../entities";

export default function CardRequests() {

  const tableHeadings = [
    {
      name: "branch",
      classname: "",
    },
    {
      name: "initiator",
      classname: "hidden md:table-cell",
    },
    {
      name: "quantity",
      classname: "hidden md:table-cell",
    },
    {
      name: "batch",
      classname: "hidden md:table-cell",
    },
    {
      name: "date requested",
      classname: "hidden md:table-cell",
    },
    {
      name: "status",
      classname: "hidden md:table-cell",
    },
    {
      name: "action",
      classname: "",
    }
  ];

  const [cardReqItem, setCardReqItem] = useState<CardRequest>();

  async function setCardItemToStorage (){
    sessionStorage.setItem('cardRequest', JSON.stringify(cardReqItem));
    window.location.href="/dashboard/card-request/request-details";
  }

  useEffect(()=>{
    if(cardReqItem) setCardItemToStorage();
  }, [cardReqItem])

  return (
    <div className="w-full">
      <section className="flex flex-col gap-y-2">
        <h1 className="text-lg capitalize font-semibold">card request</h1>
        <p className="text-[#475467] text-sm">
          View and attend to card requests here.
        </p>
        <hr className="w-full border-none h-[0.5px] bg-[#98A2B3]" />
        <div className="flex flex-col gap-3 md:flex-row md:justify-between">
          <div className="relative">
            <input
              className="h-[40px] border border-[#D0D5DD] w-full rounded-lg bg-white pl-10 pr-3 text-sm focus:outline-none"
              placeholder="Search by brand"
              name="search"
            />
            <img
              src={search}
              alt="search"
              className="w-[15px] h-[15px] absolute left-4 top-3"
            />
          </div>
        </div>
        <hr className="w-full border-none h-[0.5px] bg-[#98A2B3]" />
      </section>
      <section className="mt-3">
        <CardRequestsTable setCardReqItem={setCardReqItem} tableHead={tableHeadings} tableBody={cardRequests} />
      </section>
    </div>
  );
}
