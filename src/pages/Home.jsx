import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import DonutChart from "../components/DonutChart";
import ReportCard from "../components/ReportCard";
import allReports from "../data/allReports";
import ReportViewer from "../components/ReportViewer";
import Console from "../components/Console";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ringColorMap = {
  all: "ring-white",
  easy: "ring-green-400",
  medium: "ring-yellow-400",
  hard: "ring-red-400",
  insane: "ring-fuchsia-400",
};

export default function Home() {
  const [filter, setFilter] = useState("all");
  const [selectedReport, setSelectedReport] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [consoleMode, setConsoleMode] = useState(false);
  const reportsPerPage = 6;

  const filteredReports = allReports.filter(
    (report) => filter === "all" || report.difficulty.toLowerCase() === filter
  );

  const indexOfLast = currentPage * reportsPerPage;
  const indexOfFirst = indexOfLast - reportsPerPage;
  const currentReports = filteredReports.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredReports.length / reportsPerPage);

  const goToNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  if (consoleMode) {
    return (
      <Console reports={allReports} onExit={() => setConsoleMode(false)} />
    );
  }

  return (
    <div id="home" className="bg-black min-h-screen text-white pt-28">
      <NavBar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center space-y-2 text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-violet-500 to-indigo-400 drop-shadow-[0_0_6px_rgba(236,72,153,0.4)]">
  Axel Diaz
</h1>

        <p className="text-zinc-400 text-lg md:text-xl">
          Ethical Hacker & Cybersecurity Enthusiast
        </p>
      </section>

      {/* Donut Chart + Reports */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-10 px-6 mt-14 mb-20">
        {/* Donut Chart */}
<div className="w-full lg:w-1/3 flex flex-col items-center">
  <h3 className="text-lg md:text-xl font-semibold text-zinc-300 mb-4 tracking-wide">
  Report Distribution by Difficulty
</h3>

  <DonutChart reports={allReports} filter={filter} />
</div>


        {/* Reports Section */}
        <div className="w-full lg:w-2/3 space-y-6">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            {["All", "Easy", "Intermediate", "Hard", "Insane"].map((level) => {
              const lower = level.toLowerCase();
              const isActive = filter === lower;

              return (
                <button
                  key={level}
                  onClick={() => setFilter(lower)}
                  className={`px-6 py-3 rounded-md bg-zinc-800 text-base font-semibold tracking-wide hover:bg-zinc-700 hover:scale-105 transition duration-200 ${
                    isActive ? `ring-2 ${ringColorMap[lower]}` : ""
                  }`}
                >
                  {level}
                </button>
              );
            })}
          </div>

          {/* Grid + Pagination */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentReports.map((report, index) => (
                <ReportCard
                  key={index}
                  title={report.title}
                  difficulty={report.difficulty}
                  summary={report.summary}
                  source={report.source}
                  onClick={() => setSelectedReport(report)}
                />
              ))}
            </div>

            <div className="flex justify-center items-center gap-6">
              <button
                onClick={goToPrev}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-zinc-800 rounded hover:bg-zinc-700 disabled:opacity-30"
              >
                ← Previous
              </button>
              <span className="text-zinc-400 text-sm">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={goToNext}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-zinc-800 rounded hover:bg-zinc-700 disabled:opacity-30"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Me */}
      <section id="about" className="w-full bg-zinc-900 py-24 px-6 mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-white mb-8">About Me</h2>
          <p className="text-xl text-zinc-300 leading-relaxed tracking-wide">
            I’m Axel, a cybersecurity enthusiast focused on offensive security,
            system breaking, and clean reporting. I love learning through
            hands-on labs, building internal tools, and pushing my skills
            through realistic challenges.
            <br />
            <br />
            This site is my space to share reports, organize techniques, and
            experiment with hacker-inspired UI.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-400 text-center py-6 mt-16 border-t border-zinc-800">
  <div className="flex justify-center space-x-8 mb-4 text-3xl">
    <a
      href="https://github.com/adiaz50"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition"
    >
      <FaGithub />
    </a>
    <a
      href="https://www.linkedin.com/in/axel-diaz-linked/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition"
    >
      <FaLinkedin />
    </a>
    <a
      href="mailto:axeldiaz9801@gmail.com"
      className="hover:text-white transition"
    >
      <FaEnvelope />
    </a>
  </div>

  <p className="text-sm text-zinc-500">
    © {new Date().getFullYear()} Axel Diaz — Built with Vite, React & Tailwind
  </p>
</footer>


      {/* Toggle Button */}
      <button
        onClick={() => setConsoleMode(true)}
        className="fixed bottom-6 right-6 px-5 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full shadow-lg transition z-50"
      >
        Enter Console Mode
      </button>

      {/* Report Viewer */}
      <ReportViewer
        report={selectedReport}
        onClose={() => setSelectedReport(null)}
      />
    </div>
  );
}
