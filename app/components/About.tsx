import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-20 bg-black relative section-container">
      <div className="constellation-bg"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-10 items-center">
          <div className="order-2 md:order-1">
            <div className="mb-8"></div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Hi, I'm Sreeram
            </h1>
            <p className="text-gray-300 mb-6 text-justify">
              I’m a Data Scientist & AI Researcher with a Master’s from WPI, I thrive at the intersection of curiosity & meaningful impact.    
            </p>
            <p className="text-gray-300 mb-6 text-justify">
              My research dives into Human in the Loop systems, LLM Evaluation & Hallucination mitigation, Behavioral analysis, Cognitive Psychology, and AI bias & fairness. Lately, I’ve been researching how AI connects across disciplines.     
            </p>
            <p className="text-gray-300 mb-6 text-justify">
              NF put it best: "What's my definition of success? Creating something no one else can."      
            </p>     
            <p className="text-gray-300 mb-6 text-justify">
              My goal? Leave the world a better place than I found it & let my work do the same. It’s the thread running through everything I’ve done so far, and I plan to keep chasing it, with more research & maybe a PhD along the way.    
            </p>     
            <p className="text-gray-300 mb-6 text-justify">
              I’ve spent 4+ years working across tech, research, and impact, from my time at Accenture as an analyst to numerous research positions at WPI, Harvard Medical School, non-profits, the City, a few startups and the healthcare sector, utilizing data & AI to drive real change.     
            </p> 
            <p className="text-gray-300 mb-6 text-justify">
              I’m always happy to talk about what I’m working on or swap ideas. Beyond data/AI, you'll find me on the soccer field, immersed in a movie/anime, or on hiking trails.          
            </p> 
            <p className="text-gray-300 mb-6 text-justify">
              If you’re after someone who thrives on solving the complex challenges in the data/AI space, let’s connect!     
            </p> 
            <div className="flex space-x-4">
              <a
                href="https://github.com/sreerammarimuthu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-violet-400 transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/sreeram-marimuthu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-violet-400 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:sreerammarimuthu@gmail.com"
                className="text-white hover:text-violet-400 transition-colors"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center item-center">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-lg overflow-hidden">
              <img
                src="/portfolio/Sreeram.jpg"
                alt="Sreeram Marimuthu"
                className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
