import { RequestCardRequests } from "../../../entities";

export interface TableProps {
  tableHead: {
    name: string;
    classname?: string;
  }[];
  tableBody: RequestCardRequests[];
}

export default function RecentCardRequests({
  tableHead,
  tableBody,
}: TableProps) {
  return (
    <table className="w-full border-collapse border-spacing-x-2 border-spacing-y-2 text-left font-semibold text-sm">
      <thead className="bg-[#F1F7FF] border border-[#E2E2E2]">
        <tr>
          {tableHead?.map((item, index) => {
            return (
              <th
                className={`${item?.classname} text-xs text-[#00000070] text-center capitalize font-medium h-[34px]`}
                // className="text-sm text-[#718EBF] border-b-[#E4E4E4] border-b font-medium h-[45px]"
                key={index}
                style={{ fontWeight: "normal" }}
              >
                {item.name}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="py-2 capitalize">
        {tableBody.map((req, idx) => {
          return (
            <tr
              className="border-b-[#EAECF0] border-b transition delay-100 text-center h-[42px] hover:cursor-pointer text-[10px] lg:h-[55px]"
              key={idx}
            >
              <td className="table-cell" style={{ fontWeight: "normal" }}>
                {req.branch}
              </td>
              <td className="table-cell" style={{ fontWeight: "normal" }}>
                {req.cardType}
              </td>
              <td
                className="hidden md:table-cell"
                style={{ fontWeight: "normal" }}
              >
                {req.quantity}
              </td>
              <td
                className="hidden md:table-cell"
                style={{ fontWeight: "normal" }}
              >
                {req.status}
              </td>
              <td className="table-cell text-[#014DAF] font-semibold" style={{ }}>
                View
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
