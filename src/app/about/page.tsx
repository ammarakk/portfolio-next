import React from "react";


export default function About (){
    return(

    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-800 to-cyan-500 text-white font-sans">
      <title>Ammar Portfolio (About)</title>

      {/* Navigation bar */}
      <header className="flex-1 flex flex-col items-center justify-center px-8 py-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">About Me</h2>

      
      </header>

      {/* Main content */}
{/* Main content */}

<main className="flex-1 flex flex-col items-center justify-center text-center p-5">
  {/* About Section */}
  <section className="max-w-3xl space-y-4">
  
    
    <p className="text-lg md:text-xl leading-relaxed">
      Welcome! Im a dedicated and detail-oriented web developer with a strong background in both front-end and back-end technologies. 
      My passion lies in crafting seamless digital experiences that merge functionality with intuitive design. 
      From small projects to larger web applications, I bring a meticulous and user-centered approach to every challenge.
    </p>
    
    <p className="text-lg md:text-xl leading-relaxed">
      With several years of experience in web development, I have built a diverse skill set that includes advanced proficiency in:
    </p>
    
    <ul className="text-lg md:text-xl leading-relaxed list-disc list-inside">
      <li><strong>Front-end Technologies</strong>: JavaScript, TypeScript, React, and Next.js, specializing in creating dynamic, responsive user interfaces that engage and inspire.</li>
      <li><strong>Back-end Development</strong>: Experienced with server-side logic, RESTful APIs, and integrating front-end with back-end services.</li>
      <li><strong>Styling and Design</strong>: Tailwind CSS and responsive design principles, ensuring consistency, elegance, and usability across devices.</li>
    </ul>
    
    <p className="text-lg md:text-xl leading-relaxed">
      My journey as a developer has been driven by a commitment to continuous learning and growth. I actively stay updated with emerging trends in technology and am always looking for opportunities to refine my skills and expand my knowledge. 
      I take pride in writing clean, scalable code and enjoy collaborating with teams to bring complex ideas to life.
    </p>
    
    <p className="text-lg md:text-xl leading-relaxed">
      Outside of work, I immerse myself in exploring the latest advancements in tech and often engage in creative side projects that keep my problem-solving skills sharp. 
      Im enthusiastic about connecting with others in the industry and am open to collaborating on projects that push boundaries and make a meaningful impact.
    </p>
    
    <p className="text-lg md:text-xl leading-relaxed font-semibold">
      Lets connect and see how we can create something remarkable together!
    </p>
  </section>
</main>

      {/* Footer */}

    
    </div>
    
    
    
    
    );
};
