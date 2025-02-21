// export default function StatusDistribution() {
//   return ();
// }

import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

// Register required components
Chart.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["active", "expired", "inactive", "blocked", "lost"],
  datasets: [
    {
      data: [80, 10, 2, 3, 5], // Values for each slice
      backgroundColor: ["#01A4AF", "#FFBA24", "#FF4457", "#8020E7", "#014DAF"],
      borderColor: "#fff", // Outline color
      borderWidth: 2, // Outline thickness
      borderRadius: 10,
      height: 360
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  rotation: 90,
  cutout: "87%", // Creates the donut hole effect
  plugins: {
    legend: {
      display: false, // Hide legend
    },
    tooltip: {
      enabled: true, // Enable tooltips
    },
  },
};

export default function StatusDistribution() {
  return <Doughnut data={data} options={options} />;
}
