/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { CardRequest } from "../entities";

export default function RequestDetails() {
  //checks if card exists
  const [displayPage] = useState(() => {
    return sessionStorage.getItem("cardRequest") ? true : false;
  });

  const [cardObject, setCardObject] = useState<CardRequest>();

  //gets and stores object in a state
  async function getObjectItem() {
    const requestItem = sessionStorage.getItem("cardRequest");
    if (requestItem) {
      setCardObject(JSON.parse(requestItem));
    }
  }

  useEffect(() => {
    getObjectItem();
    console.log(cardObject);
  }, []);

  if (!displayPage) return <h1>Card details not found.</h1>;

  return (
    <div className="w-full">
      <section>
        <h1 className="text-lg capitalize font-semibold">request details</h1>
        <p className="text-[#475467] text-sm">
          Perform predetermined actions on card requests here.
        </p>
      </section>
      <section className="bg-white p-3 border border-[#E2E2E2] rounded-[10px] mt-4">
        <h1 className="text-lg capitalize font-semibold mb-5">
          card request details
        </h1>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-12 lg:items-start">
          <div className="flex flex-col gap-y-3 lg:w-1/2 lg:max-w-[448px]">
            <div className="capitalize flex flex-col gap-y-1">
              <label className="text-[#344054] text-sm">branch name</label>
              <div className="text-[#101828] bg-[#1018280D] px-3 h-[44px] border border-[#D0D5DD] rounded-[10px] flex items-center justify-start">
                corporate
              </div>
            </div>
            <div className="capitalize flex flex-col gap-y-1">
              <label className="text-[#344054] text-sm">card type</label>
              <div className="text-[#101828] bg-[#1018280D] px-3 h-[44px] border border-[#D0D5DD] rounded-[10px] flex items-center justify-start">
                classic debt
              </div>
            </div>
            <div className="capitalize flex flex-col gap-y-1">
              <label className="text-[#344054] text-sm">quantity</label>
              <div className="text-[#101828] bg-[#1018280D] px-3 h-[44px] border border-[#D0D5DD] rounded-[10px] flex items-center justify-start">
                10
              </div>
            </div>
            <div className="capitalize flex flex-col gap-y-1">
              <label className="text-[#344054] text-sm">date requested</label>
              <p className="text-[#101828]">11/4/2024 10:27:43</p>
            </div>
          </div>

          <div className="flex flex-col gap-y-3 lg:w-1/2 lg:max-w-[448px]">
            <div className="capitalize flex flex-col gap-y-1">
              <label className="text-[#344054] text-sm">initiator</label>
              <div className="text-[#101828] bg-[#1018280D] px-3 h-[44px] border border-[#D0D5DD] rounded-[10px] flex items-center justify-start">
                rootUser
              </div>
            </div>
            <div className="capitalize flex flex-col gap-y-1">
              <label className="text-[#344054] text-sm">card changes</label>
              <div className="text-[#101828] bg-[#1018280D] px-3 h-[44px] border border-[#D0D5DD] rounded-[10px] flex items-center justify-start">
                ₦1,500
              </div>
            </div>
            <div className="capitalize flex flex-col gap-y-1">
              <label className="text-[#344054] text-sm">batch</label>
              <div className="text-[#101828] bg-[#1018280D] px-3 h-[44px] border border-[#D0D5DD] rounded-[10px] flex items-center justify-start">
                847264905
              </div>
            </div>
            <div className="capitalize flex flex-col gap-y-1">
              <label className="text-[#344054] text-sm">status</label>
              <p className="text-[#344054] bg-[#EAECF0] px-3 py-1 rounded-full w-fit">pending</p>
            </div>
          </div>
        </div>
        <div className="py-5">
          <h2 className="capitalize text-[#344054] text-sm font-semibold">actions</h2>
        </div>
      </section>
    </div>
  );
}
