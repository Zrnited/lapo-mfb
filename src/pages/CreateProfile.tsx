import { GoChevronDown } from "react-icons/go";
import { motion } from "framer-motion";
import add from "../assets/icons/add-icon.png";
import FeesTable from "../components/card-profile/table/FeesTable";
import { useEffect, useState } from "react";
import { Fee } from "../entities";
import AddFees from "../components/card-profile/modal/AddFees";
import { hideScrollBar } from "../utils";

export default function CreateProfile() {
  const tableHeadings = [
    {
      name: "name",
      classname: "",
    },
    {
      name: "value",
      classname: "",
    },
    {
      name: "frequency",
      classname: "hidden md:table-cell",
    },
    {
      name: "currency",
      classname: "hidden md:table-cell",
    },
    {
      name: "time",
      classname: "hidden md:table-cell",
    },
    {
      name: "account pad",
      classname: "hidden md:table-cell",
    },
    {
      name: "account",
      classname: "hidden md:table-cell",
    },
  ];
  const fees: Fee[] = [
    {
      name: "",
      value: "",
      frequency: "",
      currency: "",
      time: "",
      accountPad: "",
      account: "",
    },
  ];
  const [showFeesModal, setShowFeesModal] = useState<boolean>(false);

  useEffect(() => {
    hideScrollBar(showFeesModal);
  }, [showFeesModal]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1 }}
      className="w-full"
    >
      <h1 className="text-lg capitalize font-semibold">create profile</h1>
      <p className="text-[#475467] text-sm">
        Fill in profile details and add card fee.
      </p>
      <section className="w-full mt-4">
        <form className="flex flex-col gap-y-3 w-full">
          {/* profile details */}
          <div className="flex flex-col gap-3 p-3 bg-white rounded-[10px] border border-[#E2E2E2] md:flex-row md:gap-5 lg:gap-24">
            <div className="flex flex-col gap-y-3 md:w-1/2">
              <div className="flex flex-col gap-y-1.5 text-sm">
                <label
                  htmlFor="cardName"
                  className="capitalize font-medium text-[#344054]"
                >
                  card name*
                </label>
                <input
                  type="text"
                  name="cardName"
                  placeholder="Enter card name"
                  className="h-[44px] rounded-[10px] border border-[#D0D5DD] px-3 text-sm focus:outline-none placeholder:text-[#667085]"
                />
              </div>
              <div className="flex flex-col gap-y-1.5 text-sm relative">
                <label
                  htmlFor="cardScheme"
                  className="capitalize font-medium text-[#344054]"
                >
                  card scheme*
                </label>
                <select
                  className="h-[44px] rounded-[10px] border border-[#D0D5DD] px-3 text-sm appearance-none text-[#667085] cursor-pointer focus:outline-none"
                  name="cardScheme"
                >
                  <option value={"Verve"}>Verve</option>
                  <option value={"MasterCard"}>Mastercard</option>
                  <option value={"RolexPay"}>RolexPay</option>
                </select>
                <i className="absolute right-3 bottom-3.5">
                  <GoChevronDown color="#667085" />
                </i>
              </div>
              <div className="flex flex-col gap-y-1.5">
                <label
                  htmlFor="desc"
                  className="capitalize font-medium text-[#344054] text-sm"
                >
                  description
                </label>
                <input
                  type="text"
                  name="desc"
                  // placeholder="Enter card name"
                  className="h-[44px] rounded-[10px] border border-[#D0D5DD] px-3 text-sm focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-y-1.5 text-sm relative">
                <label
                  htmlFor="branchBlacklist"
                  className="capitalize font-medium text-[#344054]"
                >
                  branch blacklist
                </label>
                <select
                  className="h-[44px] rounded-[10px] border border-[#D0D5DD] px-3 text-sm appearance-none cursor-pointer text-[#667085] focus:outline-none"
                  name="branchBlacklist"
                >
                  <option value={"Head Office"}>Head Office</option>
                  <option value={"Branch Office"}>Branch Office</option>
                  <option value={"Corporate"}>Corporate</option>
                </select>
                <i className="absolute right-3 bottom-3.5">
                  <GoChevronDown color="#667085" />
                </i>
              </div>
            </div>
            <div className="flex flex-col gap-y-3 md:w-1/2">
              <div className="flex flex-col gap-y-1.5 text-sm">
                <label
                  htmlFor="binPrefix"
                  className="capitalize font-medium text-[#344054]"
                >
                  bin prefix*
                </label>
                <input
                  type="text"
                  name="binPrefix"
                  placeholder="0000000000"
                  className="h-[44px] rounded-[10px] border border-[#D0D5DD] px-3 text-sm focus:outline-none placeholder:text-[#667085]"
                />
              </div>
              <div className="flex flex-col gap-y-1.5 text-sm">
                <label
                  htmlFor="expiration"
                  className="capitalize font-medium text-[#344054]"
                >
                  expiration*
                </label>
                <input
                  type="number"
                  name="expiration"
                  placeholder="0"
                  className="h-[44px] rounded-[10px] border border-[#D0D5DD] px-3 text-sm focus:outline-none placeholder:text-[#667085]"
                />
              </div>
              <div className="flex flex-col gap-y-1.5 text-sm relative">
                <label
                  htmlFor="currency"
                  className="capitalize font-medium text-[#344054]"
                >
                  currency*
                </label>
                <select
                  className="h-[44px] rounded-[10px] border border-[#D0D5DD] px-3 text-sm appearance-none text-[#667085] cursor-pointer focus:outline-none"
                  name="currency"
                >
                  <option value={"NGN"}>NGN</option>
                  <option value={"USD"}>USD</option>
                  <option value={"EUR"}>EUR</option>
                </select>
                <i className="absolute right-3 bottom-3.5">
                  <GoChevronDown color="#667085" />
                </i>
              </div>
            </div>
          </div>

          {/* fees */}
          <div className="g-white rounded-[10px] border border-[#E2E2E2] p-3 bg-white">
            <h2 className="font-semibold text-[#121212] mb-4">Fees</h2>
            <div
              onClick={() => setShowFeesModal(true)}
              className="capitalize bg-[#014DAF] text-white h-[36px] w-[101px] text-xs rounded-md flex items-center justify-center gap-x-2 cursor-pointer opacity-80 transition ease-in-out delay-100 hover:opacity-100"
            >
              <img src={add} alt="icon" className="h-[11.67px] w-[11.67px]" />
              <p>add fee</p>
            </div>
          </div>

          {/* fees table */}
          <FeesTable tableBody={fees} tableHead={tableHeadings} />

          <button className="capitalize bg-[#014DAF] text-white h-[36px] w-[293px] rounded-md flex items-center justify-center gap-x-2 cursor-pointer place-self-center my-5 opacity-80 transition ease-in-out delay-100 hover:opacity-100 md:place-self-start">
            create profile
          </button>
        </form>
      </section>

      {/* add fees modal */}
      {showFeesModal && <AddFees setShowFeesModal={setShowFeesModal} />}
    </motion.div>
  );
}
