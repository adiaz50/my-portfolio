import FlippingName from "./FlippingName";

export default function NavBar() {
  return (
    <nav className="w-full bg-zinc-900 text-white shadow-md fixed top-0 z-50 font-sans">
      <div className="w-full px-6 py-3 flex justify-between items-center">
        <div className="shrink-0 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-400 drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">
          <FlippingName />
        </div>
        <div className="space-x-6 text-lg font-medium pr-4 md:pr-10">
  <a
    href="#home"
    className="hover:text-pink-400 hover:drop-shadow-[0_0_5px_rgba(255,0,255,0.6)] transition"
  >
    Home
  </a>
  <a
    href="#reports"
    className="hover:text-blue-400 hover:drop-shadow-[0_0_5px_rgba(0,191,255,0.6)] transition"
  >
    Reports
  </a>
  <a
    href="#about"
    className="hover:text-green-400 hover:drop-shadow-[0_0_5px_rgba(0,255,128,0.6)] transition"
  >
    About
  </a>
</div>

      </div>
    </nav>
  );
}
