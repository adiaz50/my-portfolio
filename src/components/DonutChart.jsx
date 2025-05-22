import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DonutChart({ reports, filter }) {
  // Count everything
  const difficultyCounts = {
    easy: 0,
    medium: 0,
    hard: 0,
    insane: 0,
  };

  reports.forEach((r) => {
    const level = r.difficulty.toLowerCase();
    if (difficultyCounts[level] !== undefined) {
      difficultyCounts[level]++;
    }
  });

  // Filter chart data based on active filter
  const filteredCounts =
    filter === "all"
      ? difficultyCounts
      : {
          easy: filter === "easy" ? difficultyCounts.easy : 0,
          medium: filter === "medium" ? difficultyCounts.medium : 0,
          hard: filter === "hard" ? difficultyCounts.hard : 0,
          insane: filter === "insane" ? difficultyCounts.insane : 0,
        };

  // Build matching labels and values
  const activeLabels = [];
  const activeData = [];
  const activeColors = [];
  const labelMap = {
    easy: "Easy",
    medium: "Medium",
    hard: "Hard",
    insane: "Insane",
  };
  const donutColorMap = {
    easy: "#22c55e",
    medium: "#eab308",
    hard: "#ef4444",
    insane: "#d946ef",
  };

  const colorMap = {
  easy: 'text-green-400',
  medium: 'text-yellow-400',
  hard: 'text-red-400',
  insane: 'text-fuchsia-400',
  all: 'text-pink-500',
};

  Object.entries(filteredCounts).forEach(([key, value]) => {
    if (value > 0) {
      activeLabels.push(`${labelMap[key]} (${value})`);
      activeData.push(value);
      activeColors.push(donutColorMap[key]);
    }
  });

  const data = {
    labels: activeLabels,
    datasets: [
      {
        label: "Reports",
        data: activeData,
        backgroundColor: activeColors,
        borderColor: "#0f0f0f",
        borderWidth: 2,
      },
    ],
  };

  const total = activeData.reduce((a, b) => a + b, 0);

  const options = {
    cutout: "82%",
    plugins: {
      legend: {
        labels: {
          color: "#d1d5db",
          font: { family: "monospace", size: 16 },
          padding: 25,
        },
        position: "bottom",
      },
    },
  };

  return (
    <div className="flex justify-center items-center mt-14 mb-20">
      <div className="w-[360px] md:w-[480px] relative">
        <Doughnut data={data} options={options} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[48%] text-center">
          <p className="text-2xl text-zinc-400 tracking-wide">Total Reports</p>
          <p className={`text-6xl font-extrabold ${colorMap[filter]} leading-tight drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]`}>
  {total}
</p>
        </div>
      </div>
    </div>
  );
}
