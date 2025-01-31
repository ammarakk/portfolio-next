import React from "react";

export default function Skills () {
    return(
    
<div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-800 to-cyan-500 text-white font-sans">
      <title>Ammar Portfolio (Skills)</title>

      {/* Navigation bar */}
      <header className="flex justify-between items-center p-6 md:px-12">
        <h1 className="text-xl md:text-2xl font-bold">SKILLS</h1>
    
      </header>

    {/* Main content */}
    
    {/* Skills Page */}
<main className="flex-1 flex flex-col items-center justify-center text-center p-8">
  {/* Skills Section */}
  <section className="max-w-4xl space-y-8">
    

    {/* Front-end Skills */}
    <div className="bg-indigo-700 bg-opacity-80 p-6 rounded-lg shadow-md text-left">
      <h3 className="text-2xl font-semibold text-yellow-300 mb-4">Front-end Development</h3>
      <p className="text-lg leading-relaxed text-white">
        Skilled in creating dynamic, responsive, and user-friendly interfaces using:
      </p>
      <ul className="list-disc list-inside text-lg text-white ml-4 space-y-2 mt-2">
        <li><strong>JavaScript & TypeScript</strong>: Crafting robust, scalable code with a focus on modern ES6+ practices.</li>
        <li><strong>React</strong>: Building reusable components and managing complex state efficiently to optimize user experience.</li>
        <li><strong>Next.js</strong>: Leveraging server-side rendering and static site generation for high-performance web applications.</li>
        <li><strong>HTML & CSS</strong>: Structuring semantic HTML and applying CSS techniques to bring visual designs to life.</li>
      </ul>
    </div>

    {/* Back-end Skills */}
    <div className="bg-indigo-700 bg-opacity-80 p-6 rounded-lg shadow-md text-left">
      <h3 className="text-2xl font-semibold text-yellow-300 mb-4">Back-end Development</h3>
      <p className="text-lg leading-relaxed text-white">
        Experienced in developing server-side logic and API integrations using:
      </p>
      <ul className="list-disc list-inside text-lg text-white ml-4 space-y-2 mt-2">
        <li><strong>Node.js</strong>: Building scalable applications with efficient server-side JavaScript.</li>
        <li><strong>Express.js</strong>: Creating RESTful APIs to connect the front-end and back-end seamlessly.</li>
        <li><strong>Database Management</strong>: Working with SQL and NoSQL databases like MySQL and MongoDB to store and retrieve data securely and efficiently.</li>
      </ul>
    </div>

    {/* Design & Styling Skills */}
    <div className="bg-indigo-700 bg-opacity-80 p-6 rounded-lg shadow-md text-left">
      <h3 className="text-2xl font-semibold text-yellow-300 mb-4">Design & Styling</h3>
      <p className="text-lg leading-relaxed text-white">
        Passionate about translating creative ideas into beautiful, responsive designs:
      </p>
      <ul className="list-disc list-inside text-lg text-white ml-4 space-y-2 mt-2">
        <li><strong>Tailwind CSS</strong>: Building consistent, mobile-first designs with utility-first styling.</li>
        <li><strong>Responsive Design</strong>: Ensuring layouts look great across various devices and screen sizes.</li>
        <li><strong>UI/UX Principles</strong>: Prioritizing intuitive, accessible interfaces that enhance user engagement.</li>
      </ul>
    </div>

    {/* Additional Skills */}
    <div className="bg-indigo-700 bg-opacity-80 p-6 rounded-lg shadow-md text-left">
      <h3 className="text-2xl font-semibold text-yellow-300 mb-4">Additional Skills</h3>
      <p className="text-lg leading-relaxed text-white">
        Complementing my technical expertise with a range of additional skills:
      </p>
      <ul className="list-disc list-inside text-lg text-white ml-4 space-y-2 mt-2">
        <li><strong>Version Control</strong>: Proficient in Git for managing code versions and collaborating with teams.</li>
        <li><strong>Project Management</strong>: Familiarity with Agile methodologies, ensuring timely and efficient project delivery.</li>
        <li><strong>Problem Solving</strong>: Analytical and adaptable, I excel at identifying efficient solutions to technical challenges.</li>
      </ul>
    </div>
  </section>
</main>


      {/* Footer */}


    </div>
    
    
    
    
    );
};
