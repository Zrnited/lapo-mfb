import { AiOutlineClose } from "react-icons/ai";
import { CiSquarePlus } from "react-icons/ci";
import { motion } from "framer-motion";

interface AddFeesProps {
  setShowFeesModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddFees({ setShowFeesModal }: AddFeesProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full h-screen fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-40"
    >
      <div className="w-full h-full fixed top-0 bottom-0 left-0 right-0 bg-[#101828b7] backdrop-blur-md"></div>
      <div className="container absolute z-30 top-1/2 transform -translate-y-1/2 rounded-[10px] bg-white w-[90%] py-3 max-w-[496px] h-[600px] overflow-scroll activity">
        <div className="p-3 flex flex-row justify-between">
          <div className="flex flex-row gap-x-2">
            <div className="border border-[#EAECF0] h-[48px] w-[48px] rounded-[10px] flex items-center justify-center text-2xl">
              <CiSquarePlus />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-[#101828]">Add Fee</h1>
              <p className="text-sm text-[#475467]">Fill in fee details.</p>
            </div>
          </div>
          <i className="cursor-pointer" onClick={() => setShowFeesModal(false)}>
            <AiOutlineClose color="#667085" size={18} />
          </i>
        </div>
        <hr className="w-full h-[0.5px] border-none bg-[#EAECF0]" />
        <form className="flex flex-col gap-y-4 py-3">
          {/* fee name field*/}
          <div className="flex flex-col gap-y-1.5 text-sm px-3">
            <label
              htmlFor="feeName"
              className="capitalize font-medium text-[#344054]"
            >
              fee name*
            </label>
            <input
              type="text"
              name="feeName"
              placeholder="Maintenance"
              className="h-[44px] rounded-[10px] border border-[#D0D5DD] px-3 text-sm focus:outline-none placeholder:text-[#667085]"
            />
          </div>
          {/* value field */}
          <div className="flex flex-col gap-y-1.5 text-sm px-3">
            <label
              htmlFor="value"
              className="capitalize font-medium text-[#344054]"
            >
              value
            </label>
            <input
              type="number"
              name="feeName"
              placeholder="0"
              className="h-[44px] rounded-[10px] border border-[#D0D5DD] px-3 text-sm focus:outline-none placeholder:text-[#667085]"
            />
          </div>
          {/* currency field */}
          <div className="flex flex-col gap-y-1.5 text-sm px-3">
            <label
              htmlFor="currency"
              className="capitalize font-medium text-[#344054]"
            >
              currency
            </label>
            <div className="flex flex-row gap-x-5 items-center">
              <div className="flex flex-row gap-x-2 items-center">
                <input
                  disabled={true}
                  checked={true}
                  type="radio"
                  name="NGN"
                  value="NGN"
                  className="w-6 h-6 bg-[#F6F6F6] accent-white rounded-full border border-[#0000008F] checked:border-6 checked:border-[#014DAF] appearance-none disabled:opacity-50"
                />
                <label className="opacity-50">NGN</label>
              </div>
              <div className="flex flex-row gap-x-2 items-center">
                <input
                  disabled={true}
                  checked={false}
                  type="radio"
                  name="NGN"
                  value="NGN"
                  className="w-6 h-6 bg-[#F6F6F6] accent-white rounded-full border border-[#0000008F] checked:border-6 checked:border-[#014DAF] appearance-none disabled:opacity-50"
                />
                <label className="opacity-50">USD</label>
              </div>
            </div>
          </div>
          {/* fee frequency field */}
          <div className="flex flex-col gap-y-1.5 text-sm px-3">
            <label
              htmlFor="feeFrequency"
              className="capitalize font-medium text-[#344054]"
            >
              fee frequency
            </label>
            <div className="flex flex-row gap-x-5 items-center">
              <div className="flex flex-row gap-x-2 items-center">
                <input
                  type="radio"
                  name="one-off"
                  value="One Off"
                  className="w-6 h-6 bg-[#F6F6F6] checked:bg-white rounded-full border border-[#0000008F] checked:border-6 checked:border-[#014DAF] appearance-none"
                />
                <label>One Off</label>
              </div>
              <div className="flex flex-row gap-x-2 items-center">
                <input
                  type="radio"
                  name="month"
                  value="Monthly"
                  className="w-6 h-6 bg-[#F6F6F6] checked:bg-white rounded-full border border-[#0000008F] checked:border-6 checked:border-[#014DAF] appearance-none"
                />
                <label>Monthly</label>
              </div>
            </div>
          </div>
          {/* fee impact field */}
          <div className="flex flex-col gap-y-1.5 text-sm px-3">
            <label
              htmlFor="feeImpact"
              className="capitalize font-medium text-[#344054]"
            >
              fee impact
            </label>
            <div className="flex flex-row gap-x-5 items-center">
              <div className="flex flex-row gap-x-2 items-center">
                <input
                  type="radio"
                  name="issuance"
                  value="issuance"
                  className="w-6 h-6 bg-[#F6F6F6] rounded-full border border-[#0000008F] checked:border-6 checked:border-[#014DAF] checked:bg-white appearance-none"
                />
                <label>Issuance</label>
              </div>
              <div className="flex flex-row gap-x-2 items-center">
                <input
                  type="radio"
                  name="pinReissue"
                  value="pin reissue"
                  className="w-6 h-6 bg-[#F6F6F6]  rounded-full border border-[#0000008F] checked:border-6 checked:border-[#014DAF] appearance-none checked:bg-white"
                />
                <label>Pin Reissue</label>
              </div>
            </div>
          </div>
          {/* account pad field */}
          <div className="flex flex-col gap-y-1.5 text-sm px-3">
            <label
              htmlFor="feeImpact"
              className="capitalize font-medium text-[#344054]"
            >
              account pad
            </label>
            <div className="flex flex-row gap-x-5 items-center">
              <div className="flex flex-row gap-x-2 items-center">
                <input
                  type="radio"
                  name="none"
                  value="none"
                  className="w-6 h-6 bg-[#F6F6F6] rounded-full border border-[#0000008F] checked:border-6 checked:border-[#014DAF] checked:bg-white appearance-none"
                />
                <label>None</label>
              </div>
              <div className="flex flex-row gap-x-2 items-center">
                <input
                  type="radio"
                  name="branchCodePrefix"
                  value="branch code prefix"
                  className="min-w-6 min-h-6 bg-[#F6F6F6] rounded-full border border-[#0000008F] checked:border-6 checked:border-[#014DAF] appearance-none checked:bg-white"
                />
                <label>Branch Code Prefix</label>
              </div>
              <div className="flex flex-row gap-x-2 items-center">
                <input
                  type="radio"
                  name="branchCodeSuffix"
                  value="branch code suffix"
                  className="min-w-6 min-h-6 bg-[#F6F6F6] rounded-full border border-[#0000008F] checked:border-6 checked:border-[#014DAF] appearance-none checked:bg-white"
                />
                <label>Branch Code Suffix</label>
              </div>
            </div>
          </div>
          {/* account field*/}
          <div className="flex flex-col gap-y-1.5 text-sm px-3">
            <label
              htmlFor="account"
              className="capitalize font-medium text-[#344054]"
            >
              account*
            </label>
            <input
              type="text"
              name="account"
              placeholder="Maintenance"
              className="h-[44px] rounded-[10px] border border-[#D0D5DD] px-3 text-sm focus:outline-none"
            />
          </div>
          <hr className="w-full my-1.5 h-[0.5px] border-none bg-[#EAECF0]" />
          <button className="text-white w-[97%] bg-[#014cafc4] capitalize rounded-sm h-[44px] place-self-center cursor-pointer hover:bg-[#014DAF] transition ease-in-out delay-100">
            add fee
          </button>
        </form>
      </div>
    </motion.div>
  );
}
