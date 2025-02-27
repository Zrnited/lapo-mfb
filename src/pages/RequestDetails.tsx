/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { CardRequest, ProgressStages } from "../entities";
import { motion } from "framer-motion";
import Actions from "../components/card-requests/ui/Actions";
import download from "../assets/icons/download.png";
import markProgress from "../assets/icons/mark-inprogress.png";
import markReady from "../assets/icons/mark-ready.png";
import dispatch from "../assets/icons/dispatch.png";
import acknowledged from "../assets/icons/acknowledged.png";
import Notify from "../components/card-requests/modals/Notify";

export default function RequestDetails() {
  //checks if card exists
  const [displayPage] = useState(() => {
    return sessionStorage.getItem("cardRequest") ? true : false;
  });

  const [progressStages, setProgressStages] = useState<ProgressStages>({
    download: false,
    markProgress: true,
    markReady: true,
    sendDispatch: true,
    acknowledged: true,
    markCompleted: false,
  });

  //
  const [downloadNotify, setdownloadNotify] = useState<boolean>(false);
  const [dispatchNotify, setDispatchNotify] = useState<boolean>(false);

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1 }}
      className="w-full"
    >
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
              {(!progressStages.markReady || !progressStages.sendDispatch) && (
                <div className="bg-[#ECFDF3] border border-[#ABEFC6] text-[#067647] rounded-full py-0.5 px-4 w-fit">
                  Ready
                </div>
              )}
              {!progressStages.markProgress && (
                <div className="bg-[#FFFAEB] border border-[#FEDF89] text-[#B54708] rounded-full py-0.5 px-4 w-fit">
                  In Progress
                </div>
              )}
              {!progressStages.download && (
                <div className="bg-[#F9FAFB] border border-[#EAECF0] text-[#344054] rounded-full py-0.5 px-4 w-fit">
                  Pending
                </div>
              )}
              {(!progressStages.acknowledged ||
                progressStages.markCompleted) && (
                <p className="bg-[#EFF8FF] border border-[#B2DDFF] text-[#175CD3] rounded-full py-0.5 px-4 w-fit">
                  Acknowledged
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="pt-5 pb-3">
          <h2 className="capitalize text-[#344054] text-sm font-semibold">
            actions
          </h2>
        </div>
        {/* update progress */}
        <div className="grid grid-cols-1 gap-3 w-fit sm:grid-cols-2 lg:grid-cols-3 xl:flex xl:flex-row xl:gap-3">
          <Actions
            text="Download for Production"
            icon={download}
            wrapperClassname="bg-[#344054]"
            imgClassname="h-[16.67px] w-[14.17px]"
            disabled={progressStages.download}
            initiateFn={() => setdownloadNotify(true)}
          />

          <Actions
            text="Mark as In Progress"
            icon={markProgress}
            wrapperClassname="bg-[#B54708]"
            imgClassname="h-[16.67px] w-[16.67px]"
            disabled={progressStages.markProgress}
            initiateFn={() => {
              setProgressStages((prevSt) => {
                return {
                  ...prevSt,
                  markProgress: true,
                  markReady: false,
                };
              });
            }}
          />

          <Actions
            text="Mark as Ready"
            icon={markReady}
            wrapperClassname="bg-[#067647]"
            imgClassname="h-[16.43px] w-[15.83px]"
            disabled={progressStages.markReady}
            initiateFn={() => {
              setProgressStages((prevSt) => {
                return {
                  ...prevSt,
                  markReady: true,
                  sendDispatch: false,
                };
              });
            }}
          />

          <Actions
            text="Send to Dispatch"
            icon={dispatch}
            wrapperClassname="bg-[#8020E7]"
            imgClassname="h-[15.17px] w-[15px]"
            disabled={progressStages.sendDispatch}
            initiateFn={() => setDispatchNotify(true)}
          />

          <Actions
            text="Mark as Acknowledged"
            icon={acknowledged}
            wrapperClassname="bg-[#014DAF]"
            imgClassname="h-[16.67px] w-[16.67px]"
            disabled={
              progressStages.acknowledged || progressStages.markCompleted
            }
            initiateFn={() => {
              setProgressStages((prevSt) => {
                return {
                  ...prevSt,
                  markCompleted: true,
                };
              });
            }}
          />
        </div>
      </section>
      {/* notification modal */}
      {downloadNotify && (
        <Notify
          text="Production file has been downloaded."
          onContinue={() => {
            setProgressStages((prevSt) => {
              return {
                ...prevSt,
                download: true,
                markProgress: false,
              };
            });
            setdownloadNotify(false);
          }}
        />
      )}
      {dispatchNotify && (
        <Notify
          text="Card batch successfully sent to dispatch."
          onContinue={() => {
            setProgressStages((prevSt) => {
              return {
                ...prevSt,
                sendDispatch: true,
                acknowledged: false,
              };
            });
            setDispatchNotify(false);
          }}
        />
      )}
    </motion.div>
  );
}
