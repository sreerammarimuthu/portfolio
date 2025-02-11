"use client"

import Image from "next/image"

const educationData = [
  {
    school: "Worcester Polytechnic Institute",
    degree: "Master of Science - MS, Data Science",
    date: "Aug 2023 - May 2025",
    gpa: "4.0/4.0",
    logo: "/portfolio/WPI_logo.png",
  },
  {
    school: "Anna University",
    degree: "Bachelor of Engineering - BE, Electrical and Electronics Engineering",
    date: "Aug 2017 - Jul 2021",
    gpa: "3.88/4.0 - Gold Medalist",
    logo: "/portfolio/Anna_University_Logo.svg.png",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-black relative section-container">
      <div className="constellation-bg"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-extrabold text-center text-white mb-16">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-[#1f0733] rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-700 duration-300 flex flex-col"
            >
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 flex items-center justify-center">
                  <img
                    src={edu.logo}
                    alt={`${edu.school} logo`}
                    className="object-contain w-full h-full"
                  />
                </div>
                <br />
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                  <p className="text-violet-400 mt-2">{edu.degree}</p>
                  <p className="text-gray-400">{edu.date}</p>
                  <p className="text-green-400 font-semibold mt-2">GPA: {edu.gpa}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

