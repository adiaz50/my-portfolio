export default function ReportCard({ title, difficulty, summary, source, onClick }) {
  const difficultyLower = difficulty.toLowerCase();

  const ringColorMap = {
    easy: 'hover:ring-green-400',
    medium: 'hover:ring-yellow-400',
    hard: 'hover:ring-red-400',
    insane: 'hover:ring-fuchsia-400',
  };

  const colorClass = ringColorMap[difficultyLower] || 'hover:ring-white';

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer bg-zinc-800 p-5 rounded-lg shadow hover:ring-2 ${colorClass} transition duration-300`}
    >
      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
      <div className="flex items-center gap-4 text-sm text-white/90 font-medium mb-2">
        <span className={`uppercase ${{
          easy: 'text-green-400',
          medium: 'text-yellow-400',
          hard: 'text-red-400',
          insane: 'text-fuchsia-400'
        }[difficultyLower]}`}>
          {difficulty.toUpperCase()}
        </span>
        <span className="border-l border-zinc-700 pl-4">{source}</span>
      </div>
      <p className="text-zinc-300 text-sm">{summary}</p>
    </div>
  );
}
