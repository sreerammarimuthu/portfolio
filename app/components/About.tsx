import Image from "next/image"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function About() {
  return (
    <section id="about" className="py-20 bg-black relative section-container">
      <div className="constellation-bg"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="mb-8"></div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Hi, I'm Sreeram</h1>
            <p className="text-gray-300 mb-6">
              I'm a Data Science graduate student at WPI, currently wrapping up my final semester with a 4.0 GPA and an
              unwavering curiosity for meaningful research. My work centers on leveraging data to drive impact across
              Healthcare Systems, Geo-Spatial Analysis, Clinical Research, Crime Analytics, and Non-Profit initiatives.
            </p>
            <p className="text-gray-300 mb-6">
              My current research focuses on <b>Human in the Loop: Data Acquisition</b>, enhancing AI–human
              collaboration in data preparation and pinpointing potential <b>biases by AI</b> in job-matching(think
              gender, race, and age—yes, it's as fascinating as it sounds). For my Graduate Qualifying Project, I
              partnered with DH to build predictive models that identify phenotypes and assess frailty in older
              populations using healthcare claims data.
            </p>
            <p className="text-gray-300 mb-6">
              When I'm not elbow-deep in data, I'm kicking a soccer ball, watching a movie, or embarking on my next
              hiking adventure.{" "}
              <span className="text-violet-300">
                <b> I'm actively searching for full-time opportunities starting Spring/Summer 2025</b>
              </span>
              , so if you're looking for someone who lives for the next big challenge, let's connect!
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
  )
}