import React from 'react';
import trackeddImage from './trackedd.jpg';  
import epss from './EPSS.jpg'; 
import career from './career.jpg';   
import amazon from './amazonn.png';   
import netflix from './netflix.png';   
import { FaGithub, FaLinkedin, FaEnvelope, FaTelegramPlane, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="text-[#00f3ff] font-sans leading-relaxed" style={{ backgroundColor: "#0a0e0f" }}>
      <section className="flex flex-col items-center text-center py-16 pt-48 animate-fadeIn">
        <h1 className="text-4xl font-extrabold text-gradient">Miheret Girmachew Andarge</h1>
        <p className="mt-2 text-lg text-gradient">Software Engineer | FullStack Developer | MERN </p>

        <div className="flex gap-4 mt-6 flex-wrap justify-center">
          <button
            className="bg-[#00f3ff] text-black px-6 py-2 rounded-full shadow-lg hover:bg-[#00c4cc] hover:shadow-xl transform hover:scale-105 transition duration-300"
            onClick={() => scrollToSection('featured-projects')}
          >
            View My Work
          </button>
          <a
            href="https://drive.google.com/file/d/1zyL9r0zLtS2wCqN1XLCB9zvGy_IwWBnN/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border border-[#00f3ff] text-[#00f3ff] px-6 py-2 rounded-full shadow-lg hover:bg-[#00f3ff] hover:text-black hover:shadow-xl transform hover:scale-105 transition duration-300">
             Resume
            </button>
          </a>

          <button
            className="border border-[#00f3ff] text-[#00f3ff] px-6 py-2 rounded-full shadow-lg hover:bg-[#00f3ff] hover:text-black hover:shadow-xl transform hover:scale-105 transition duration-300"
            onClick={() => scrollToSection('contact-me')}
          >
            Contact Me
          </button>
        </div>
      </section>

      <section id="featured-projects" className="py-16">
        <h2 className="text-center text-3xl font-bold text-gradient mb-16">Featured Projects</h2>
        <div className="flex flex-wrap justify-center gap-8 mt-8">

        <div className="relative w-80 bg-[#1a1a1a] p-6 shadow-xl rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 group">
      {/* Project Image */}
      <img src={trackeddImage} alt="fraud tracking Image" className="w-full h-48 object-cover rounded-lg" />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        <a
          href="https://github.com/Miheret-Girmachew/TrackED"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00f3ff] text-2xl m-4 p-2 rounded-full bg-[#1a1a1a] hover:bg-[#00c4cc] transition duration-300"
        >
          <FaGithub />
        </a>
     
      </div>

      {/* Project Details */}
      <h3 className="text-2xl font-semibold text-gradient mt-4">TrackED</h3>
      <p className="mt-2 text-sm text-[#00f3ff]">
  TrackED is a secure digital platform designed to verify educational credentials, prevent fraud, and streamline document management for institutions and employers.
</p>

<div className="flex flex-wrap gap-2 mt-4">
  <span className="bg-[#0a0e0f] border border-[#00f3ff] rounded-2xl text-sm px-2 py-1 text-white">Next.js</span>
  <span className="bg-[#0a0e0f] border border-[#00f3ff] rounded-2xl text-sm px-2 py-1 text-white">Tailwind CSS</span>
  <span className="bg-[#0a0e0f] border border-[#00f3ff] rounded-2xl text-sm px-2 py-1 text-white">MongoDB</span>
</div>

    </div>

          <div className="relative w-80 bg-[#1a1a1a] p-6 shadow-xl rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 group">
      {/* Project Image */}
      <img src={epss} alt="Project submission Image"  className="w-full h-48 object-cover rounded-lg" />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        <a
          href="https://github.com/EPSS-MP"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00f3ff] text-2xl m-4 p-2 rounded-full bg-[#1a1a1a] hover:bg-[#00c4cc] transition duration-300"
        >
          <FaGithub />
        </a>
      </div>

      {/* Project Details */}
      <h3 className="text-2xl font-semibold text-gradient mt-4">EPS</h3>
      <p className="mt-2 text-sm text-[#00f3ff]">
  EPS is an efficient platform designed to streamline project submissions, manage batches, and enhance collaboration between students and instructors.
</p>

<div className="flex flex-wrap gap-2 mt-4">
  <span className="bg-[#0a0e0f] border border-[#00f3ff] rounded-2xl text-sm px-2 py-1 text-white">React.js</span>
  <span className="bg-[#0a0e0f] border border-[#00f3ff] rounded-2xl text-sm px-2 py-1 text-white">Node.js</span>
  <span className="bg-[#0a0e0f] border border-[#00f3ff] rounded-2xl text-sm px-2 py-1 text-white">Express.js</span>
  <span className="bg-[#0a0e0f] border border-[#00f3ff] rounded-2xl text-sm px-2 py-1 text-white">MySQL</span>
  <span className="bg-[#0a0e0f] border border-[#00f3ff] rounded-2xl text-sm px-2 py-1 text-white">Sequelize</span>
</div>

    </div>


    <div className="relative w-80 bg-[#1a1a1a] p-6 shadow-xl rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 group">
      {/* Project Image */}
      <img src={career} alt="career Image" className="w-full h-48 object-cover rounded-lg" />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        <a
          href="https://github.com/Miheret-Girmachew/CareerHub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00f3ff] text-2xl m-4 p-2 rounded-full bg-[#1a1a1a] hover:bg-[#00c4cc] transition duration-300"
        >
          <FaGithub />
        </a>
      </div>

      {/* Project Details */}
      <h3 className="text-2xl font-semibold text-gradient mt-4">CareerHub</h3>
      <p className="mt-2 text-sm text-[#00f3ff]">
  CareerHub is a dynamic platform connecting job seekers and employers, streamlining the hiring process with user-friendly job listings, applications, and career resources.
</p>

      <div className="flex flex-wrap gap-2 mt-4">
        <span className="bg-[#0a0e0f] border border-[#00f3ff] rounded-2xl text-sm px-2 py-1 text-white">Next.js</span>
        <span className="bg-[#0a0e0f] border border-[#00f3ff] rounded-2xl text-sm px-2 py-1 text-white">Tailwind CSS</span>
      </div>
    </div>


    <div className="relative w-80 bg-[#1a1a1a] p-6 shadow-xl rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 group">
      {/* Project Image */}
      <img src={amazon} alt="amazon Image" className="w-full h-48  object-cover rounded-lg" />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        <a
          href="https://github.com/Miheret-Girmachew/amazon-react-frontend-clone"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00f3ff] text-2xl m-4 p-2 rounded-full bg-[#1a1a1a] hover:bg-[#00c4cc] transition duration-300"
        >
          <FaGithub />
        </a>


        <a
          href="https://taupe-sable-fc179a.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00f3ff] text-2xl m-4 p-2 rounded-full bg-[#1a1a1a] hover:bg-[#00c4cc] transition duration-300"
        >
          <FaExternalLinkAlt />
        </a>
      
      </div>

      {/* Project Details */}
      <h3 className="text-2xl font-semibold text-gradient mt-4">Amazon-Clone</h3>
      <p className="mt-2 text-sm text-[#00f3ff]">
  This Amazon Clone replicates the core functionality of Amazon’s e-commerce platform, featuring product listings, a shopping cart, and a seamless checkout experience.
</p>

      <div className="flex flex-wrap gap-2 mt-4">
        <span className="bg-[#0a0e0f] border border-[#00f3ff] rounded-2xl text-sm px-2 py-1 text-white">React.js</span>
        <span className="bg-[#0a0e0f] border border-[#00f3ff] rounded-2xl text-sm px-2 py-1 text-white">Bootstrap</span>
        <span className="bg-[#0a0e0f] border border-[#00f3ff] rounded-2xl text-sm px-2 py-1 text-white">Node.js</span>
  <span className="bg-[#0a0e0f] border border-[#00f3ff] rounded-2xl text-sm px-2 py-1 text-white">Express.js</span>
  <span className="bg-[#0a0e0f] border border-[#00f3ff] rounded-2xl text-sm px-2 py-1 text-white">MySQL</span>
      </div>
    </div>

    <div className="relative w-80 bg-[#1a1a1a] p-6 shadow-xl rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 group">
      {/* Project Image */}
      <img src={netflix} alt="netflix Image" className="w-full h-48 object-cover rounded-lg" />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        <a
          href="https://github.com/Miheret-Girmachew/Netflix-Clone-2024"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00f3ff] text-2xl m-4 p-2 rounded-full bg-[#1a1a1a] hover:bg-[#00c4cc] transition duration-300"
        >
          <FaGithub />
        </a>
       
      </div>

      {/* Project Details */}
      <h3 className="text-2xl font-semibold text-gradient mt-4">Netflix-Clone</h3>
      <p className="mt-2 text-sm text-[#00f3ff]">
  This Netflix Clone mimics the core features of Netflix, offering a sleek interface for browsing movies, watching content, and managing user subscriptions.
</p>

<div className="flex flex-wrap gap-2 mt-4">
        <span className="bg-[#0a0e0f] border border-[#00f3ff] rounded-2xl text-sm px-2 py-1 text-white">React.js</span>
        <span className="bg-[#0a0e0f] border border-[#00f3ff] rounded-2xl text-sm px-2 py-1 text-white">Bootstrap</span>
        <span className="bg-[#0a0e0f] border border-[#00f3ff] rounded-2xl text-sm px-2 py-1 text-white">Node.js</span>
  <span className="bg-[#0a0e0f] border border-[#00f3ff] rounded-2xl text-sm px-2 py-1 text-white">Express.js</span>
  <span className="bg-[#0a0e0f] border border-[#00f3ff] rounded-2xl text-sm px-2 py-1 text-white">MySQL</span>
      </div>
    </div>
        </div>
      </section>


      <section id="contact-me" className="text-center py-10">
        <h2 className="text-3xl font-bold text-gradient">Let's Connect</h2>
        <div className="flex justify-center gap-6 mt-8 flex-wrap">
          <a href="https://github.com/Miheret-Girmachew" target="_blank" rel="noopener noreferrer" className="bg-[#1c1f24] p-4 rounded-lg hover:bg-[#282c34] transition duration-300 w-20">
            <FaGithub className="h-8 w-8 text-[#00f3ff]" />
            <p className="mt-2 text-sm">GitHub</p>
          </a>
          <a href="https://www.linkedin.com/in/miheret-girmachew-734848297/" target="_blank" rel="noopener noreferrer" className="bg-[#1c1f24] p-4 rounded-lg hover:bg-[#282c34] transition duration-300 w-20">
            <FaLinkedin className="h-8 w-8 text-[#00f3ff]" />
            <p className="mt-2 text-sm">LinkedIn</p>
          </a>
          <a href="https://t.me/m2127g" target="_blank" rel="noopener noreferrer" className="bg-[#1c1f24] p-4 rounded-lg hover:bg-[#282c34] transition duration-300 w-20">
            <FaTelegramPlane className="h-8 w-8 text-[#00f3ff]" />
            <p className="mt-2 text-sm">Telegram</p>
          </a>
          <a href="mailto:miheretgirmachew@gmail.com" className="bg-[#1c1f24] p-4 rounded-lg hover:bg-[#282c34] transition duration-300 w-20">
            <FaEnvelope className="h-8 w-8 text-[#00f3ff]" />
            <p className="mt-2 text-sm">Email</p>
          </a>
        </div>
        <p className="text-gray-400 mt-6">Looking forward to hearing from you!</p>
        <p className="text-gray-400 mt-6">Available for freelance projects and full-time opportunities.</p>
      </section>

      <footer className="bg-[#121212] py-8">
  <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-gray-400">
    <div className="text-center mb-6">
      <p className="text-lg font-bold text-white">Miheret Girmachew Andarge</p>
      <p className="text-sm mt-2">&copy; 2024 All rights reserved.</p>
    </div>
  </div>
</footer>

    </div>
  );
}

export default App;
