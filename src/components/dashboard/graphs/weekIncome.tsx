import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
} from "recharts";

export default function WeekIncome() {
  const data = [
    {
      name: "Mon",
      income: 55
    },
    {
      name: "Tue",
      income: 38
    },
    {
      name: "Wed",
      income: 40
    },
    {
      name: "Thu",
      income: 38
    },
    {
      name: "Fri",
      income: 60
    },
    {
      name: "Sat",
      income: 22
    },
    {
      name: "Sun",
      income: 80
    },
  ];

  return (
    <ResponsiveContainer  width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid vertical={false} strokeDasharray="0" stroke="#F2F4F7" />
        <XAxis dataKey="name" tick={{ fontSize: 12 }} padding={{ left: 0, right: 0 }} />
        <YAxis tick={{ fontSize: 12 }} />
        <Tooltip />
        <Line type="monotone" dataKey="income" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
