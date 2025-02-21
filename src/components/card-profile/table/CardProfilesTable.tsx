import { CardProfileType } from "../../../entities";
import deleteIcon from "../../../assets/icons/delete-icon.png";
import editIcon from "../../../assets/icons/edit-icon.png";

export interface TableProps {
  tableHead: {
    name: string;
    classname?: string;
  }[];
  tableBody: CardProfileType[];
}

export default function CardProfilesTable({
  tableHead,
  tableBody,
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
              className="border-y border-x border-[#EAECF0] transition delay-100 text-center h-[42px] hover:cursor-pointer text-[10px] text-[#475467] hover:bg-gray-50"
              key={idx}
            >
              <td className="table-cell border border-[#EAECF0]" style={{ fontWeight: "normal" }}>
                {card.cardName}
              </td>
              <td className="table-cell border border-[#EAECF0]" style={{ fontWeight: "normal" }}>
                {card.currency}
              </td>
              <td
                className="hidden md:table-cell border border-[#EAECF0]"
                style={{ fontWeight: "normal" }}
              >
                {card.expiration}
              </td>
              <td
                className="hidden md:table-cell border border-[#EAECF0]"
                style={{ fontWeight: "normal" }}
              >
                {card.binPrefix}
              </td>
              <td
                className="hidden md:table-cell border border-[#EAECF0]"
                style={{ fontWeight: "normal" }}
              >
                {card.dateCreated}
              </td>
              <td className="table-cell font-semibold border border-[#EAECF0]" style={{ }}>
                <div className="flex flex-row gap-x-5 items-center justify-center w-full">
                    <img src={deleteIcon} alt="icon" className="w-[15px] h-[16.67px]" />
                    <img src={editIcon} alt="icon" className="w-[16.11px] h-[16.11px]" />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
