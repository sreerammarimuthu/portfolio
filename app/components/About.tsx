import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-20 bg-black relative section-container">
      <div className="constellation-bg"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="mb-8"></div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Hi, I'm Sreeram
            </h1>
            <p className="text-gray-300 mb-6 text-justify">
              I'm a Data Scientist/AI Researcher, graduated from WPI (4.0 GPA), I thrive at the intersection of curiosity and impact. My work spans Behavioral Analytics, Healthcare Systems, Clinical Research, Geo-Spatial Analysis, Crime Analytics, and Non-Profit initiatives, where I utilized data to drive meaningful research.
            </p>
            <p className="text-gray-300 mb-6 text-justify">
              I bring 2+ years of professional experience at Accenture as an Analyst, along with extensive research exposure at ACT & WPI. My research work so far dived deep into Human-in-the-Loop DA, hidden biases in AI job-matching systems(gender, race, age, status) and leveraging AI for upscaling resource sharing among NPOs. 
            </p>
            <p className="text-gray-300 mb-6 text-justify">
              Recently, I first-authored a paper on Cognitive reasoning across humans, ML, and LLMs, published at ACM SIGMOD HILDA 2025. I also co-authored couple of interesting Clinical Research papers over the summer at Harvard-MGH. 
            </p>
            <p className="text-gray-300 mb-6 text-justify">
              For my GQP, I partnered with Discern Health in Fall '24, and built predictive ML models to determine phenotypes and assessing frailty in older populations using healthcare claims, ICD-10 codes, sociodemographic & HCC data.            
            </p>
            <p className="text-gray-300 mb-6 text-justify">
              Beyond data/AI, you'll find me on the soccer field, immersed in a movie or anime, or hiking trails. I’m excited to bring my unique set of analytical skills, research mindset, and drive for real-world impact {" "}
              <span className="text-violet-300 font-bold">
                 to full-time positions starting Fall '25, 
              </span>
               so if you’re after someone who thrives on solving complex challenges, let’s connect!
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
