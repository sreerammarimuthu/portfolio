"use client"

import { useState } from "react"
import {
  FaBriefcase,
  FaChevronDown,
  FaChevronUp,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaChartLine,
  FaHandsHelping,
  FaSearch,
  FaUsers,
  FaCalendarAlt,
} from "react-icons/fa"

const experiences = [
  {
    title: "Research Analyst",
    company: "City of Worcester",
    date: "September 2024 - Present",
    duration: "9 months",
    location: "Worcester, Massachusetts, United States",
    icon: FaSearch,
    description: [
      "Led data-driven public health research with the Commissioner of Health & Human Services, influencing city-wide policy and strategic planning in Worcester.",
      "Conducted analysis of police incident report data to identify temporal and geographic crime trends, informing strategic first responder deployment and associated costs to optimize emergency resource allocation.",
      "Performed exploratory research on homelessness patterns using PIT Count and Census data, assessing shelter availability access, demographic disparities, and service utilization.",
      "Analyzed social, behavioral, and health determinants across 14 major Massachusetts cities in collaboration with MPHA and MLCHC to identify systemic gaps in housing and healthcare.",
      "Developed reports and delivered presentations to support policy decisions on homelessness services, zoning, and community health planning.",
    ],
  },
  {
    title: "Research Study Assistant",
    company: "Worcester Polytechnic Institute",
    date: "August 2024 - Present",
    duration: "11 months",
    location: "Worcester, Massachusetts, United States",
    icon: FaGraduationCap,
    description: [
      " ",
      " ",
      " ",
      " ",
      " ",
    ],
  },
  {
    title: "Data Analyst | Ambassador | Peer Liaison",
    company: "WPI Graduate & Professional Studies",
    date: "September 2024 - May 2025",
    duration: "9 months",
    location: "Worcester, Massachusetts, United States",
    icon: FaUsers,
    description: [
      " ",
      " ",
      " ",
      " ",
      " ",
    ],
  },
    {
    title: "Machine Learning Engineer",
    company: "Discern Health",
    date: "August 2024 - December 2024",
    duration: "5 months",
    location: "Worcester, Massachusetts, United States",
    icon: FaLaptopCode,
    description: [
      " ",
      " ",
      " ",
      " ",
      " ",
    ],
  },
  {
    title: "Research Assistant II",
    company: "Worcester Polytechnic Institute",
    date: "August 2024 - December 2024",
    duration: "5 months",
    location: "Worcester, Massachusetts, United States",
    icon: FaLaptopCode,
    description: [
      " ",
      " ",
      " ",
      " ",
      " ",
    ],
  },
  {
    title: "Graduate Data Analyst",
    company: "Legendary Legacies Inc",
    date: "July 2024 - August 2024",
    duration: "2 months",
    location: "Worcester, Massachusetts, United States",
    icon: FaChartLine,
    description: [
      " ",
      " ",
      " ",
      " ",
      " ",
    ],
  },
  {
    title: "Research Intern",
    company: "Act",
    date: "May 2024 - July 2024",
    duration: "3 months",
    location: "Worcester, Massachusetts, United States",
    icon: FaSearch,
    description: [
      " ",
      " ",
      " ",
      " ",
      " ",
    ],
  },
  {
    title: "Research Assistant",
    company: "Worcester Polytechnic Institute",
    date: "March 2024 - May 2024",
    duration: "3 months",
    location: "Worcester, Massachusetts, United States",
    icon: FaGraduationCap,
    description: [
      " ",
      " ",
      " ",
      " ",
      " ",
    ],
  },
  {
    title: "Application Development Analyst",
    company: "Accenture",
    date: "December 2022 - April 2023",
    duration: "5 months",
    location: "Chennai, Tamil Nadu, India",
    icon: FaBriefcase,
    description: [
      " ",
      " ",
      " ",
      " ",
      " ",
    ],
  },
  {
    title: "Application Development Associate",
    company: "Accenture",
    date: "August 2021 - November 2022",
    duration: "1 year 4 months",
    location: "Chennai, Tamil Nadu, India",
    icon: FaLaptopCode,
    description: [
      " ",
      " ",
      " ",
      " ",
      " ",
    ],
  },
  {
    title: "Co-Founder",
    company: "Countdown Events",
    date: "August 2018 - July 2020",
    duration: "2 years",
    location: "Chennai, Tamil Nadu, India",
    icon: FaCalendarAlt,
    description: [
      "Co-founded and scaled a sports-focused event management start-up, organizing large-scale events with 500+ participants.",
      "Pivoted to virtual operations during COVID-19, increasing participant reach by 20%. Directed fundraising initiatives for flood relief, enhancing community engagement and impact.",
    ],
  },
  {
    title: "Inplant Trainee",
    company: "GRAPHITE INDIA LTD.",
    date: "December 2019 - December 2019",
    duration: "1 month",
    location: "Hunsur, Karnataka, India",
    icon: FaChalkboardTeacher,
    description: [
      "Completed hands-on training in power generation, hydro and renewable energy systems, and plant operations.",
      "Analyzed mechanical systems and energy workflows to identify efficiency improvements and reduce operational costs.", 
    ],
  },
]

export default function Experiences() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  return (
    <section id="experiences" className="py-20 bg-black relative section-container">
      <div className="constellation-bg"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Work Experience</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-violet-400"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`mb-8 flex justify-between items-start relative ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-violet-400 rounded-full border-4 border-[#2d0b44]"></div>

              {/* Content */}
              <div
                className={`w-5/12 ${
                  index % 2 === 0 ? "pr-8" : "pl-8"
                } transition-all duration-300 hover:-translate-y-1`}
              >
                <div
                  className="bg-[#2d0b44] rounded-lg p-6 shadow-lg hover:shadow-xl hover:shadow-violet-700 transition-all duration-300 cursor-pointer"
                  onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <exp.icon className="text-violet-400 mr-3" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                        <p className="text-violet-300">{exp.company}</p>
                        <p className="text-gray-400 text-sm">{exp.date}</p>
                        <p className="text-gray-400 text-sm">{exp.location}</p>
                      </div>
                    </div>
                    <button className="text-violet-400 hover:text-violet-300 transition-colors ml-4">
                      {expandedCard === index ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
                    </button>
                  </div>

                  {/* Expandable description */}
                  {expandedCard === index && (
                    <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Empty space for timeline alignment */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

