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
              I'm a Data Science graduate from WPI with a 4.0 GPA and an unwavering curiosity for meaningful research. My experience has primarily involved utilizing data to drive impactful research across Behavioral Analytics, Healthcare Systems, Clinical Research, Geo-Spatial Analysis, Crime Analytics, and Non-Profit initiatives.
            </p>
            <p className="text-gray-300 mb-6 text-justify">
              I bring 2+ years of full-time experience as an Analyst at Accenture, along with extensive research exposure at ACT & WPI. My current research dives deep into <b>Human-in-the-Loop: Data Integration</b>, enhancing Human–AI convergence and determining hidden <b>biases in AI job-matching algorithms</b> (gender, race, age, status – Interesting, right?). Most recently, I first-authored a paper on cognitive reasoning between humans, ML, and LLMs, accepted at ACM SIGMOD HILDA 2025.
            </p>
            <p className="text-gray-300 mb-6 text-justify">
              For my Graduate Qualifying Project, I partnered with Discern Health to build predictive models identifying phenotypes and assessing frailty in older populations using healthcare claims data.
            </p>
            <p className="text-gray-300 mb-6 text-justify">
              When I'm not elbow-deep in data, I’m either kicking a soccer ball, watching a movie/anime, or off on a hiking trail.{" "}
              <span className="text-violet-300 font-bold">
                I’m actively looking for full-time roles starting Summer 2025
              </span>
              , so if you’re after someone who thrives on solving the next biggest challenge, let’s connect!
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
