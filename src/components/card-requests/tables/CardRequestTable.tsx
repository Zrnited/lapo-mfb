import { CardRequest } from "../../../entities";

export interface TableProps {
  tableHead: {
    name: string;
    classname?: string;
  }[];
  tableBody: CardRequest[];
  setCardReqItem: React.Dispatch<React.SetStateAction<CardRequest | undefined>>;
}

export default function CardRequestsTable({
  tableHead,
  tableBody,
  setCardReqItem,
}: TableProps) {
  return (
    <table className="w-full border-collapse border-spacing-x-2 border-spacing-y-2 text-left font-semibold text-sm">
      <thead className="bg-[#F9FAFB] border border-[#EAECF0]">
        <tr>
          {tableHead?.map((item, index) => {
            return (
              <th
                className={`${item?.classname} text-xs text-[#475467] text-center capitalize h-[34px] font-semibold border border-[#EAECF0]`}
                key={index}
                // style={{ fontWeight: "normal" }}
              >
                {item.name}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="py-2 capitalize bg-white">
        {tableBody.map((card, idx) => {
          return (
            <tr
              className="border-y border-x border-[#EAECF0] transition delay-100 text-center h-[42px] text-[10px] text-[#475467]"
              // onClick={() => setCardReqItem(card)}
              key={idx}
            >
              <td
                className="table-cell border border-[#EAECF0]"
                style={{ fontWeight: "normal" }}
              >
                {card.branch}
              </td>
              <td
                className="hidden md:table-cell border border-[#EAECF0]"
                style={{ fontWeight: "normal" }}
              >
                {card.initiatotr}
              </td>
              <td
                className="hidden md:table-cell border border-[#EAECF0]"
                style={{ fontWeight: "normal" }}
              >
                {card.quantity}
              </td>
              <td
                className="hidden md:table-cell border border-[#EAECF0]"
                style={{ fontWeight: "normal" }}
              >
                {card.batch}
              </td>
              <td
                className="hidden md:table-cell border border-[#EAECF0]"
                style={{ fontWeight: "normal" }}
              >
                {card.dateRequested}
              </td>
              {card.status === "ready" && (
                <td className="hidden md:table-cell border border-[#EAECF0] text-[#067647]">
                  <div className="bg-[#ECFDF3] border border-[#ABEFC6] rounded-full w-[44px] h-[22px] place-self-center flex justify-center items-center">
                    {card.status}
                  </div>
                </td>
              )}
              {card.status === "in progress" && (
                <td className="hidden md:table-cell border border-[#EAECF0] text-[#B54708]">
                  <div className="bg-[#FFFAEB] border border-[#FEDF89] rounded-full w-[67px] h-[22px] place-self-center flex justify-center items-center">
                    {card.status}
                  </div>
                </td>
              )}
              {card.status === "pending" && (
                <td className="hidden md:table-cell border border-[#EAECF0] text-[#344054]">
                  <div className="bg-[#F9FAFB] border border-[#EAECF0] rounded-full w-[54px] h-[22px] place-self-center flex justify-center items-center">
                    {card.status}
                  </div>
                </td>
              )}
              {card.status === "acknowledged" && (
                <td className="hidden md:table-cell border border-[#EAECF0] text-[#175CD3]">
                  <div className="bg-[#EFF8FF] border border-[#B2DDFF] rounded-full w-[84px] h-[22px] place-self-center flex justify-center items-center">
                    {card.status}
                  </div>
                </td>
              )}
              <td onClick={() => setCardReqItem(card)} className="table-cell font-semibold text-[#014DAF] hover:underline hover:cursor-pointer border border-[#EAECF0]">
                view
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
