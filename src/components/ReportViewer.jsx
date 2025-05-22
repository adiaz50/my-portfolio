// src/components/ReportViewer.jsx
import ReactMarkdown from 'react-markdown';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default function ReportViewer({ report, onClose }) {
  if (!report) return null;

  const handleDownload = () => {
    const filename = report.filename || `${report.title.replace(/\s+/g, '_')}.pdf`;
    const link = document.createElement('a');
    link.href = `/docs/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        className="max-w-4xl w-full bg-zinc-900 text-white rounded-lg p-6 shadow-lg overflow-y-auto max-h-[90vh] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handleDownload}
            className="text-sm bg-pink-600 hover:bg-pink-700 text-white px-3 py-1 rounded transition"
          >
            Export Report
          </button>

          <button
            onClick={onClose}
            className="text-sm text-zinc-400 hover:text-pink-500 transition"
          >
            ✖ Close
          </button>
        </div>

        <h2 className="text-3xl font-bold mb-1">{report.title}</h2>
        <div className="flex items-center gap-4 text-sm text-white/90 font-medium mb-4">
          <span>{report.difficulty.toUpperCase()}</span>
          <span className="border-l border-zinc-700 pl-4">{report.source}</span>
        </div>

        <div className="prose prose-invert max-w-none text-zinc-300">
          <ReactMarkdown
  components={{
    img: ({ src, alt }) => (
      <Zoom>
        <img
          src={src}
          alt={alt}
          className="rounded-md border border-zinc-700 cursor-zoom-in max-w-full mx-auto"
        />
      </Zoom>
    )
  }}
>
  {report.full}
</ReactMarkdown>

        </div>
      </div>
    </div>
  );
}
