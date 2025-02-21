import { useState, useEffect } from "react";
import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Bar,
  ResponsiveContainer,
} from "recharts";

export default function MonthlyIssuance() {
  const data = [
    {
      name: "May",
      instant: 50,
      personalized: 10,
    },
    {
      name: "June",
      instant: 75,
      personalized: 20,
    },
    {
      name: "Jul",
      instant: 25,
      personalized: 11,
    },
    {
      name: "Aug",
      instant: 60,
      personalized: 13,
    },
    {
      name: "Sep",
      instant: 52,
      personalized: 15,
    },
    {
      name: "Oct",
      instant: 80,
      personalized: 17,
    },
    {
      name: "Nov",
      instant: 75,
      personalized: 15,
    },
  ];
  const [barSize, setBarSize] = useState(40); // Default size

  useEffect(() => {
    const updateBarSize = () => {
      if (window.innerWidth < 640) {
        setBarSize(20); // Smaller bars on mobile
      } else {
        setBarSize(40); // Larger bars on desktop
      }
    };

    updateBarSize(); // Set initial size
    window.addEventListener("resize", updateBarSize); // Listen for resize events

    return () => window.removeEventListener("resize", updateBarSize); // Cleanup
  }, []);

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart className="w-full h-auto" data={data} barGap={10} barSize={barSize} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid stroke="#F2F4F7" vertical={false} strokeDasharray="0" />
        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }} />
        <Tooltip cursor={{ fill: "transparent" }} />
        {/* <Legend /> */}
        <Bar
          dataKey="personalized"
          fill="#014DAF"
          stackId={1}
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="instant"
          fill="#CCE2FF"
          className="rounded-t-lg"
          stackId={1}
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
