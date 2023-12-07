import React, { useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ProgressChart() {
  const data = {
    datasets: [
      {
        data: [1, 2, 2, 17],
        backgroundColor: ["#08714E", "#13A859", "#4DDB73", "#F3F4F8"],
      },
    ],
  };

  const options = {
    cutout: "77%",
    responsive: true,
    maintainAspectRatio: false,
    borderWidth: 0,
    legend: {
      display: true,
      position: "bottom",
    },
    plugins: {
      title: {
        display: true,
        text: "Do-chart",
      },
      tooltip: false,
    },
  };
  return <Doughnut data={data} options={options} />;
}
