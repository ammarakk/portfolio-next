import React from "react";


export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-800 to-cyan-500 text-white font-sans">
      <title>Ammar Portfolio (Projects)</title>

      {/* Navigation Bar */}
      <header>
        <h1 className="text-2xl md:text-3xl font-bold tracking-wider"></h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">
          {/*Project Card */}
          <div className="bg-indigo-700 bg-opacity-80 rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105 duration-300">
            <h3 className="text-xl font-semibold mb-2">Project Title 1</h3>
            <p className="text-yellow-300 mb-4">
              A short description of this project. This project does amazing things and solves real-world problems.
            </p>
            <a
              href="#"
              className="inline-block bg-white text-indigo-800 font-semibold py-2 px-4 rounded-lg hover:bg-indigo-100 transition duration-300"
            >
              View Details
            </a>
          </div>

          <div className="bg-indigo-700 bg-opacity-80 rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105 duration-300">
            <h3 className="text-xl font-semibold mb-2">Project Title 2</h3>
            <p className="text-yellow-300 mb-4">
              Another interesting project description. This project showcases some cool technologies and innovations.
            </p>
            <a
              href="#"
              className="inline-block bg-white text-indigo-800 font-semibold py-2 px-4 rounded-lg hover:bg-indigo-100 transition duration-300"
            >
              View Details
            </a>
          </div>

          {/* Add more project cards as needed */}
          <div className="bg-indigo-700 bg-opacity-80 rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105 duration-300">
            <h3 className="text-xl font-semibold mb-2">Project Title 3</h3>
            <p className="text-yellow-300 mb-4">
              Another interesting project description. This project showcases some cool technologies and innovations.
            </p>
            <a
              href="#"
              className="inline-block bg-white text-indigo-800 font-semibold py-2 px-4 rounded-lg hover:bg-indigo-100 transition duration-300"
            >
              View Details
            </a>
          </div>
        </div>
      </main>

    
    
    </div>
  );
}
