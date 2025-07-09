import React, { useState } from "react";

const Resume = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <div
     id="resume"
      className={`flex flex-col items-center justify-center w-full px-4 py-16 transition-all duration-500 ${
        showResume
          ? "min-h-screen bg-black"
          : "min-h-[40vh] bg-black"
      }`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
        My Resume
      </h2>
      <button
        onClick={() => setShowResume((prev) => !prev)}
        className="mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all"
      >
        {showResume ? "Hide Resume" : "Show Resume"}
      </button>
      {showResume && (
        <div className="w-full max-w-3xl bg-white rounded-xl shadow-2xl p-4 md:p-8">
          <iframe
            src="Sharankumar_SoftwareEngineer.pdf"
            title="Resume"
            className="w-full h-[70vh] rounded-lg border-2 border-purple-200"
          />
          <div className="flex justify-end mt-4">
            <a
              href="Sharankumar_SoftwareEngineer.pdf"
              download
              className="px-4 py-2 rounded-full bg-purple-500 text-white font-medium hover:bg-purple-600 transition"
            >
              Download PDF
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resume;
