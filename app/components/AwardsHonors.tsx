"use client"

import { FaTrophy, FaHandsHelping } from "react-icons/fa"

const awards = [
  {
    title: "Best GQP Team - Gold Winner",
    organization: "Worcester Polytechnic Institute",
    date: "Dec 2024",
  },
  {
    title: "KIP Fellowship",
    organization: "Stand Together",
    date: "May 2024",
  },
  {
    title: "Gold Medalist",
    organization: "Easwari Engineering College",
    date: "Dec 2023",
  },
  {
    title: "Fast-Tracked to Promotion",
    organization: "Accenture",
    date: "Nov 2022",
  },
  {
    title: "TCS National Qualifier Test Topper",
    organization: "Tata Consultancy Services",
    date: "Dec 2020",
  },
  {
    title: "Runners Up - Project Day 2020",
    organization: "Easwari Engineering College",
    date: "Jan 2020",
  },
  {
    title: "Dean's List [2018-19]",
    organization: "Easwari Engineering College",
    date: "Aug 2019",
  },
  {
    title: "Dean's List [2017-18]",
    organization: "Easwari Engineering College",
    date: "Aug 2018",
  },
]

const volunteering = [
  {
    role: "Alumni Mentor",
    organization: "Worcester Polytechnic Institute",
    date: "Aug 2025 - Present",
  },
  {
    role: "Graduate Peer Mentor",
    organization: "Worcester Polytechnic Institute",
    date: "Jan 2025 - May 2025",
  },
  {
    role: "Officer",
    organization: "YOUTH RED CROSS EEC",
    date: "Aug 2017 - Jul 2020",
  },
  {
    role: "Class Representative",
    organization: "Easwari Engineering College(SRM Group)",
    date: "Aug 2017 - Aug 2019",
  },
  {
    role: "School Social Services Leader",
    organization: "SNMSSS",
    date: "Apr 2015 - Mar 2016",
  },
  {
    role: "Member",
    organization: "Rotaract",
    date: "Jun 2012 - Mar 2017",
  },
]

export default function AwardsHonors() {
  return (
    <section id="awards-honors" className="py-20 bg-black relative section-container">
      <div className="constellation-bg"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Achievements</h2>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6 flex items-center justify-center">
            <FaTrophy className="text-violet-400 mr-3" size={24} />
            Awards & Honors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-[#2d0b44] rounded-lg p-4 shadow-md hover:shadow-xl hover:shadow-violet-700 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                <h4 className="text-lg font-semibold text-white mb-2">{award.title}</h4>
                <p className="text-violet-300">{award.organization}</p>
                <p className="text-gray-400 text-sm">{award.date}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-6 flex items-center justify-center">
            <FaHandsHelping className="text-violet-400 mr-3" size={24} />
            Volunteering
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteering.map((volunteer, index) => (
              <div
                key={index}
                className="bg-[#2d0b44] rounded-lg p-4 shadow-md hover:shadow-xl hover:shadow-violet-700 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                <h4 className="text-lg font-semibold text-white mb-2">{volunteer.role}</h4>
                <p className="text-violet-300">{volunteer.organization}</p>
                <p className="text-gray-400 text-sm">{volunteer.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

