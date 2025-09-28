import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-20 bg-black relative section-container">
      <div className="constellation-bg"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="mb-8"></div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Hi, I'm Sreeram
            </h1>
            <p className="text-gray-300 mb-6 text-justify">
              I'm a Data Scientist/AI Researcher, graduated with a Master's from WPI (4.0 GPA), I thrive at the intersection of curiosity and meaningful impact. My work extends across Human-in-the-Loop, Behavioral Analysis, Cognitive Psychology, Healthcare Systems, Geo-Spatial Crime Analytics, and Non-Profit initiatives, where I utilized data, AI & research to make a difference.
            </p>
            <p className="text-gray-300 mb-6 text-justify">
              I bring 3+ years of professional experience from Accenture as an Analyst, along with extensive research experience at ACT, City of Worcester, WPI and currently Harvard-MGH. My current research dives deep into Human-in-the-Loop Data Integration enhancing Human-AI convergence, along with studying hidden biases in AI job-matching systems (gender, race, age, status) and leveraging AI for upscaling resource sharing among NPOs. 
            </p>
            <p className="text-gray-300 mb-6 text-justify">
              Recently, I first-authored a paper on Cognitive reasoning across humans, ML, and LLMs, published at ACM SIGMOD HILDA '25. In my current position, I study how different adverse childhood experiences affect a person's mental well-being, through 'Latent Class Profiling' & 'Two-part semicontinuous modeling', co-authoring 3 psychological research papers, working as a Data Scientist Intern at Harvard-MGH. 
            </p>     
            <p className="text-gray-300 mb-6 text-justify">
              For my GQP, I partnered with Discern Health in Fall '24, and applied ML to design 10 experiments for frailty detection (Kim CFI forecasting, phenotype modeling on 53 indicators), achieving RMSE 0.0052, R² 0.9956, and AUCs up to 0.98 across patient strata, utilizing diverse clinical, sociodemographic factors, claims data, ICD-10 codes, & HCC data.
            </p>     
            <p className="text-gray-300 mb-6 text-justify">
              Beyond data/AI, you'll find me on the soccer field, immersed in a movie or anime, or hiking trails.{" "}
              <span className="text-violet-300 font-bold">
                 Actively seeking full-time positions,{" "}
              </span>
               I bring an unique set of analytical skills, research mindset, and drive for real-world impact, so if you’re after someone who thrives on solving complex challenges, let’s connect!
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
          <div className="order-1 md:order-2 flex justify-center">
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
