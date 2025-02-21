import { Fee } from "../../../entities";

export interface TableProps {
  tableHead: {
    name: string;
    classname?: string;
  }[];
  tableBody: Fee[];
}

export default function FeesTable({
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
        {tableBody.map((fee, idx) => {
          return (
            <tr
              className="border-y border-x border-[#EAECF0] transition delay-100 text-center h-[42px] hover:cursor-pointer text-[10px] text-[#475467] hover:bg-gray-50"
              key={idx}
            >
              <td
                className="table-cell border border-[#EAECF0]"
                style={{ fontWeight: "normal" }}
              >
                {fee.name}
              </td>
              <td
                className="table-cell border border-[#EAECF0]"
                style={{ fontWeight: "normal" }}
              >
                {fee.value}
              </td>
              <td
                className="hidden md:table-cell border border-[#EAECF0]"
                style={{ fontWeight: "normal" }}
              >
                {fee.frequency}
              </td>
              <td
                className="hidden md:table-cell border border-[#EAECF0]"
                style={{ fontWeight: "normal" }}
              >
                {fee.currency}
              </td>
              <td
                className="hidden md:table-cell border border-[#EAECF0]"
                style={{ fontWeight: "normal" }}
              >
                {fee.time}
              </td>
              <td
                className="table-cell font-semibold border border-[#EAECF0]"
                style={{}}
              >
                {fee.accountPad}
              </td>
              <td
                className="table-cell font-semibold border border-[#EAECF0]"
                style={{}}
              >
                {fee.account}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
