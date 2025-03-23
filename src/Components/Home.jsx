export default function Home() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-red-700 animate-gradient-move overflow-hidden">
      <div className="text-[#eeeeee] text-center space-y-6 max-w-xl animate-fade-in px-4">
        <h1 className="text-3xl font-bold opacity-90">Welcome to</h1>
        <h2 className="text-5xl font-bold tracking-wide">UpSkill.</h2>
        <p className="leading-loose text-lg text-opacity-90">
          This website has been designed to provide you with free access to
          foundational knowledge and essential skills, helping you build a
          solid understanding before investing in any{" "}
          <span className="font-semibold">courses.</span>
        </p>
        <a
          href="/study"
          className="inline-block bg-white text-red-600 font-semibold px-6 py-3 rounded-lg text-lg hover:bg-opacity-90 transition-all duration-300"
        >
          <button>
          Start Learning
          </button>
        </a>
      </div>
    </div>
  );
}
