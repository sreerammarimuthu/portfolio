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
    date: "January 2025 - Present",
    duration: "2 months",
    location: "Worcester, Massachusetts, United States",
    icon: FaSearch,
    description: [
      "Continuing in-depth analysis of homeless population data, integrating insights from the Massachusetts Large Cities Health Coalition (MLCHC) to inform resource allocation and policy decisions.",
      "Collaborating closely with the Massachusetts Public Health Association (MPHA) to align research efforts and share best practices across the 14 largest Massachusetts cities.",
      "Presenting findings to stakeholders through clear visualizations and data-driven recommendations, fostering strategic partnerships and advancing community well-being.",
    ],
  },
  {
    title: "Research & Data Intern",
    company: "City of Worcester",
    date: "September 2024 - December 2024",
    duration: "4 months",
    location: "Worcester, Massachusetts, United States",
    icon: FaChartLine,
    description: [
      "Collaborated closely with the Commissioner of Health and Human Services on multiple data-driven research projects, informing evidence-based public health initiatives and policy decisions.",
      "Conducted comprehensive analyses of police incident reports to map crime patterns over the last 5 months, first responder deployments, and associated costs.",
      "Utilized U.S. Census Bureau and CoC PIT Counts data to assess homelessness trends, refining insights into shelter capacity and community needs.",
      "Translated complex findings into clear visualizations and presentations for stakeholders.",
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
      "Worked on the 'Frailty Detection & Management' project with Discern as part of our Graduate Qualifying Project (GQP), earning the Best Team Award for outstanding research and outcomes.",
      "Integrated diverse clinical, socioeconomic, and claims data to identify key frailty indicators (e.g., comorbidity scores, ADL limitations), ensuring practical interpretability and broader applicability.",
      "Executed 10 Experimental variations - 3 focused on Predictive modeling (Frailty Detection -> Kim CFI Score forecasting) and 7 dedicated to Phenotype Modeling - spanning over whole patient populations, gender-specific subgroups, and top-feature subsets to ensure comprehensive, data-driven insights.",
      "Developed Predictive models (using AutoML and Lasso-driven feature selection) to accurately forecast Kim CFI frailty scores, achieving RMSE as low as 0.0052 and R² up to 0.9956.",
      "Performed extensive Phenotype modeling on 53 frailty-related indicators —such as Alzheimer's/Dementia, Rheumatoid Arthritis, and General Health —achieving AUCs up to 0.98 and validating model robustness through calibration curves, feature importance analyses, and multiple patient strata.",
      "Validated model stability and scalability via cross-validation, residual analyses, and unified vs. segmented approaches, while logging all model results (validation & test) in MLflow on Databricks for full reproducibility and transparency, demonstrating the potential for proactive healthcare interventions, cost reductions, & improved patient outcomes.",
    ],
  },
  {
    title: "Research Study Assistant",
    company: "Worcester Polytechnic Institute",
    date: "August 2024 - Present",
    duration: "7 months",
    location: "Worcester, Massachusetts, United States",
    icon: FaGraduationCap,
    description: [
      "Engaged in a Directed Research project exploring Human-in-the-Loop approaches to Data Acquisition with Prof. Roee Shraga.",
      "Investigating metacognitive aspects of human interaction in data discovery to identify and address biases.",
      "Evaluating LLMs' requirements for active human involvement in data quality assurance.",
      "Collaborating on methods to improve data usability through human-AI interaction framework.",
    ],
  },
  {
    title: "Data Analyst | Ambassador | Peer Liaison",
    company: "Worcester Polytechnic Institute",
    date: "September 2024 - Present",
    duration: "6 months",
    location: "Worcester, Massachusetts, United States",
    icon: FaUsers,
    description: [
      "Managing front-desk operations and administrative workflows, enhancing onboarding efficiency and improving overall graduate student support.",
      "Organizing interactive events and sessions, fostering community-building and easing cultural transitions for new graduate cohorts.",
      "Conducting data analysis and research tasks to identify gaps in graduate support services, informing evidence-based improvements in retention and integration strategies.",
      "Collaborating closely with Graduate Admissions and Student Success teams, translating insights into actionable enhancements for a more inclusive and positive graduate experience.",
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
      "Collaborated on this Directed Research project with Prof. Andrew Trapp, partnering with Intrare (a social startup in Mexico City) to enhance the fairness and efficiency of their AI-driven job matching system.",
      "Improved Algorithmic performance by shifting from synchronous to asynchronous data processing, batching API calls, and refining similarity measures to handle candidate-job data more efficiently.",
      "Conducted a comprehensive AI Bias Analysis over 6 different experiments by systematically removing demographic attributes (e.g., age, gender, nationality,..) from candidate profiles, running multiple model iterations, and generating residual plots to pinpoint disparities in fit scores and explanations.",
      "Provided actionable research insights to the company, recommending strategies to mitigate bias and improve semantic accuracy, enabling fairer and more effective job matching.",
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
      "Created and integrated a user-friendly dashboard into the organization's website, providing a dedicated research page that boosted data interpretation speed.",
      "Enhanced responsiveness and strategic planning through immediate access to key performance metrics.",
      "Developed an interactive model simulating real-world reentry scenarios, equipping returning citizens with the practical skills needed for a successful transition.",
    ],
  },
  {
    title: "Koch Internship Program Fellow",
    company: "Stand Together",
    date: "May 2024 - July 2024",
    duration: "3 months",
    location: "Worcester, Massachusetts, United States",
    icon: FaHandsHelping,
    description: [
      "Completed a 10-week professional development program focused on self-actualization, social progress, and leadership growth.",
      "Gained practical insights into building a better future, aligning personal and professional values through structured sessions.",
      "Applied big data analytics and predictive modeling to a Healthcare-based Non-Profit Capstone project.",
      "Successfully graduated from the KIP Class of Summer 2024.",
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
      "Conducted Geo-Spatial & Crime Data Analyses across four major Texas cities using Google Maps and Data Mining techniques.",
      "Identified patterns in low-income, high-crime neighborhoods to guide targeted interventions.",
      "Developed interactive maps and compelling data visualizations for stakeholder communication.",
      "Optimized data discovery and preprocessing pipelines for accurate insights.",
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
      "Led a multidisciplinary graduate team analyzing economic impact and sociological trends of incarceration.",
      "Utilized advanced analytics to correlate socio-economic indicators with crime patterns.",
      "Created data-driven narratives illustrating potential community benefits & cost savings.",
      "Influenced resource allocation and public policy through extensive research.",
    ],
  },
  {
    title: "Quality Engineering Analyst",
    company: "Accenture",
    date: "December 2022 - April 2023",
    duration: "5 months",
    location: "Chennai, Tamil Nadu, India",
    icon: FaBriefcase,
    description: [
      "Led cross-functional testing initiatives, reducing post-deployment issues by 15%.",
      "Executed API, Automation, and Headless testing on large-scale datasets.",
      "Collaborated with stakeholders to enhance product quality through data-driven insights.",
      "Streamlined defect resolution through comprehensive test reporting.",
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
      "Maintained zero defects across 8 consecutive releases through comprehensive testing.",
      "Automated critical processes to achieve instantaneous execution times.",
      "Adapted to various SDLC & STLC frameworks while improving delivery efficiency.",
      "Managed secure data as SME for customer-facing channel (FIRE).",
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
      "Launched and managed a sports-focused event management start-up, hosting events for 500+ participants.",
      "Transitioned seamlessly to virtual events during the pandemic, expanding reach by 20%.",
      "Led fundraising for flood relief efforts, strengthening community ties and brand visibility.",
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
      "Completed industrial training focused on power generation, hydro power, renewable energy systems, and plant operations.",
      "Analyzed project components to optimize efficiency and operational costs.",
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

