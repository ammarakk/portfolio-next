import React from "react";


export default function Contact (){
    return(
    
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-800 to-cyan-500 text-white font-sans">
        <title>Ammar Portfolio (Contact)</title>
  
        {/* Navigation bar */}
        <header className="flex justify-between items-center p-6 md:px-12">
          <h1 className="text-xl md:text-2xl font-bold">CONTACT</h1>
         
        </header>
    
    {/* Contact Page */}
<main className="flex-1 flex flex-col items-center justify-center p-8">
  <section className="max-w-3xl w-full space-y-8">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Get in Touch</h2>

    {/* Contact Form */}
    <form className="bg-indigo-800 opacity-80 p-8 rounded-lg shadow-lg space-y-6" method="POST">
      {/* Name Input */}
      <div>
        <label htmlFor="name" className="block text-lg font-medium text-white mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          placeholder="Your Name"
        />
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="email" className="block text-lg font-medium text-white mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          placeholder="Your Email"
        />
      </div>

      {/* Subject Input */}
      <div>
        <label htmlFor="subject" className="block text-lg font-medium text-white mb-2">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          placeholder="Subject"
        />
      </div>

      {/* Message Input */}
      <div>
        <label htmlFor="message" className="block text-lg font-medium text-white mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          required
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          placeholder="Your Message"
          
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Send Message
        </button>
      </div>
    </form>
  </section>
</main>





      {/* Footer */}

    
    </div>
    
    
    
    
    );
};
 
