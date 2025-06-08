import assets from "../assets";
import { useProfile } from "../context/profilecontext";


export default function Home() {
  // No overlay here!
  const {darkMode} = useProfile();
  return (
    <section
      id="home"
      className={`min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-6 px-6 md:px-16 pt-24 pb-12 relative`}
    >
      {/* Text Content */}
      <div className="flex-1 flex flex-col items-center md:items-start justify-center max-w-xl text-center md:text-left z-10 gap-2">
        <span className="text-purple-400 font-semibold mb-2 text-lg tracking-wide animate-pulse">
          Hi, I'm Sharankumar
        </span>
        <h1 className={`${darkMode ? "text-white" : "text-black"} text-4xl md:text-6xl font-bold`}>
          Sharan <span className="text-purple-400">—</span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent">
            Web Developer
          </span>
        </h1>
        <p className="text-gray-300 mb-8 text-lg md:text-xl max-w-lg">
          I craft modern, responsive, and engaging web experiences.<br />
          Passionate about <span className="text-purple-400 font-semibold">Web Development</span>, <span className="text-purple-400 font-semibold">Cloud</span> and building products that delight users.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-purple-500 text-white font-semibold shadow-md hover:bg-purple-600 transition text-center"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-purple-400 text-purple-400 font-semibold hover:bg-purple-950 transition text-center"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="flex-1 flex items-center justify-center relative w-full max-w-md mb-8 md:mb-0 z-10">
        {/* Glow effect */}
        <div className="absolute -inset-4 blur-2xl rounded-full bg-gradient-to-tr from-purple-400/30 to-transparent pointer-events-none animate-pulse"></div>
        {/* Profile image */}
        <img
          src= {assets.profile}
          alt="Sharan"
          className="relative z-10 w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-purple-400 shadow-xl"
        />
      </div>
    </section>
  );
}