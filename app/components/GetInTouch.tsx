import { FaLinkedin, FaEnvelope } from "react-icons/fa"
import Link from "next/link"

export default function GetInTouch() {
  return (
    <section id="get-in-touch" className="py-20 bg-[#0d0221]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-8">Get in Touch</h2>
        <p className="text-xl text-center text-violet-300 mb-12">
          Reach out I promise I won’t just pivot the conversation on you. Recruiters, let’s keep it interesting.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            href="https://www.linkedin.com/in/sreeram-marimuthu"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2d0b44] rounded-lg p-6 shadow-lg hover:shadow-xl hover:shadow-violet-700 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-center"
          >
            <FaLinkedin className="text-5xl text-violet-400 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">LinkedIn</h3>
            <p className="text-violet-300 text-center">Let's connect and talk data!</p>
          </Link>
          <Link
            href="mailto:sreerammarimuthu@gmail.com"
            className="bg-[#2d0b44] rounded-lg p-6 shadow-lg hover:shadow-xl hover:shadow-violet-700 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-center"
          >
            <FaEnvelope className="text-5xl text-violet-400 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">Email</h3>
            <p className="text-violet-300 text-center">Please feel free to reach out.</p>
          </Link>
        </div>
      </div>
    </section>
  )
}

