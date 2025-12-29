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
    title: "Data Scientist",
    company: "Mass General Brigham Research",
    date: "November 2025 - Present",
    duration: "3 months",
    location: "Boston, Massachusetts, United States",
    icon: FaSearch,
    description: [
      "📍The Mongan Institute, Health Policy Research Center , PIs - Dr. Stephen Bartels (the Director), Dr. Giselle Perez",
      "Contributing to a PCORI-funded research study evaluating interventions to improve resiliency and reduce burnout among behavioral health residential staff.",
    ],
  },
    {
    title: "Assistant Research Scientist",
    company: "Worcester Polytechnic Institute",
    date: "October 2025 - Present",
    duration: "4 months",
    location: "Worcester, Massachusetts, United States",
    icon: FaSearch,
    description: [
      "📍Yielding Optimal Solutions for Scientific Data Intelligence (YOSSI) lab , PI - Dr. Roee Shraga",
      "Leading follow-up research on human-in-the-loop data integration, extending prior work HILDA '25 paper for optimal accuracy. Evaluating the performance of 8 different open source LLMs over 10 experiments and benchmarking the results on table union utilizing human cognition. ",
      "Co-authoring a journal paper, detailing advanced methods to integrate human cognitive insights & LLM capabilities in schema matching (results submitted to VLDB 2025).",
    ],
  },
      {
    title: "AI Research Engineer",
    company: "VizyPlan",
    date: "September 2025 - December 2025",
    duration: "5 months",
    location: "Worcester, Massachusetts, United States",
    icon: FaLaptopCode,
    description: [
      "Conducting AI research to reduce LLM hallucinations & evaluate model variants for image generation.",
      "Lead product analytics to measure user behavior and outcomes, and support product engineering across backend database architecture for payments and compliance & the React UI.",
    ],
  },
  {
    title: "Data Scientist",
    company: "Harvard Medical School & MGH",
    date: "June 2025 - September 2025",
    duration: "4 months",
    location: "Boston, Massachusetts, United States",
    icon: FaSearch,
    description: [
      "📍Disparities Research Unit , PI - Dr. Jenny Zhen-Duan",
      "Led statistical analysis, studying how adverse childhood experiences affect a person's mental well-being, using Latent Class Profiling and two-part semicontinuous modeling, cutting analysis time by 50%.",
      "Built an end-to-end pipeline (Python + R) for survey preprocessing, transcript coding, modeling, and regression analysis of predictors and odds ratios.",
      "Co-authored 2 psychological research papers translating ML findings into community health interventions.",
    ],
  },
  {
    title: "AI & Analytics Engineer",
    company: "Worcester Polytechnic Institute",
    date: "June 2025 - August 2025",
    duration: "3 months",
    location: "Worcester, Massachusetts, United States",
    icon: FaLaptopCode,
    description: [
      "📍SWAP Initiative , PI - Dr. Andrew Trapp",
      "Collaborated with PI and researchers (2 PhDs & a Postdoc) to advance AI-driven resource optimization in nonprofit ecosystems.",
      "Developed and integrated AI into the SWAP hub nonprofit resource-sharing platform to improve scalability and predictive matching of unseen matches based on previous & NPO-specific information.",
      "Implemented latest GPT OSS model with browsing capabilities to recommend real-time secondary needs, enhancing NPO user experience.",
    ],
  },
  {
    title: "Research Analyst",
    company: "The City of Worcester",
    date: "September 2024 - May 2025",
    duration: "9 months",
    location: "Worcester, Massachusetts, United States",
    icon: FaSearch,
    description: [
      "📍Department of Health & Human Services , Commissioner - Dr. Matilde Castiel",
      "Led data-driven public health research with the Commissioner, informing citywide policy & strategic planning; collaborated with MPHA/MLCHC across 14 MA cities to identify housing/healthcare gaps from social, behavioral, and health determinants.",
      "Analyzed PIT Count, Census, and shelter data to map homelessness patterns, quantify demographic disparities, and assess service access/utilization.",
      " Examined police incident reports to reveal temporal/geographic crime trends, optimizing first-responder deployment and associated costs.",
    ],
  },
  {
    title: "Research Assistant",
    company: "WPI, Department of Data Science",
    date: "August 2024 - May 2025",
    duration: "10 months",
    location: "Worcester, Massachusetts, United States",
    icon: FaGraduationCap,
    description: [
      "📍Yielding Optimal Solutions for Scientific Data Intelligence (YOSSI) lab , PI - Dr. Roee Shraga",
      "First authored on an NSF-funded research paper advancing Human-AI collaboration in table unionability; led Human-in-the-Loop methods for data integration & discovery.",
      "Designed and executed cognitive experiments simulating real-world data acquisition, quantifying human reasoning using cognitive psychology & AI.",
      "Investigated the interplay LLM, ML, and human metacognition to improve bias, trust, and interpretability (error correction, judgment calibration) in AI-assisted decision making.",
    ],
  },
  {
    title: "Data Analyst | Ambassador",
    company: "WPI Graduate & Professional Studies",
    date: "September 2024 - May 2025",
    duration: "9 months",
    location: "Worcester, Massachusetts, United States",
    icon: FaUsers,
    description: [
      "Conducted data analysis and research on special projects to identify service gaps and improve graduate student retention strategies. Led community-building initiatives to support cultural and academic transitions for new cohorts.",
      "Streamlined onboarding, front-desk operations, and administrative workflows in collaboration with Grad Admissions and Student Success teams for a more inclusive experience.",
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
      '📍WPI\'s GQP , Awarded Best Team Award for research excellence & outcomes.',
      "Led a clinical ML project on Frailty Detection & Management, integrating clinical, socioeconomic, claims data, with ICD-10 and HCC codes to identify key frailty markers.",
      "Designed and executed 10 experiments (predictive + phenotype modeling) across unified vs. segmented approaches, and multiple patient strata to improve interpretability and robustness.",
      "Built predictive models achieving Kim CFI RMSE 0.0052, R² 0.9956, and frailty binary/multi classifiers with AUCs up to 0.98, while logging all model outputs in MLflow on Databricks for full reproducibility, transparency, supporting scalable proactive care at lower costs, and to improve patient outcomes.",
    ],
  },
  {
    title: "Research Assistant",
    company: "WPI, The Business School",
    date: "August 2024 - December 2024",
    duration: "5 months",
    location: "Worcester, Massachusetts, United States",
    icon: FaLaptopCode,
    description: [
      "📍Intrare (a Social Impact Startup) , PI - Dr. Andrew Trapp",
      "Improved fairness and performance in AI-based job-matching systems for a social-impact startup. Boosted efficiency with asynchronous data pipelines, batched API calls, & refined semantic similarity scoring.",
      "Designed & executed 6 AI bias experiments (age, gender, nationality), evaluating disparities via residual and subgroup analyses, with recommendations adopted in deployment.",
    ],
  },
  {
    title: "Research Intern",
    company: "Advocates for Community Transformation (ACT)",
    date: "May 2024 - July 2024",
    duration: "3 months",
    location: "Dallas, Texas, United States",
    icon: FaSearch,
    description: [
      "📍KIP Fellow - Summer 2025",
      "Executed geo-spatial crime analysis across four Texas cities utilizing Census, Google Maps, and crime data mining to inform legal strategy and support feasibility reports by building interactive maps & dashboards.",
      "Identified narcotic crime patterns in high-risk, low-income neighborhoods through clustering and demographic-crime correlation studies supporting targeted interventions.",
    ],
  },
  {
    title: "Research Assistant",
    company: "WPI, The Business School",
    date: "March 2024 - June 2024",
    duration: "4 months",
    location: "Worcester, Massachusetts, United States",
    icon: FaGraduationCap,
    description: [
      "📍Legendary Legacies (NPO) , PIs - Dean Rev. Dr. Debora Jackson & Ron Wadell Jr. (Founder)",
      "Led a graduate team analyzing the economic and social impacts of incarceration, identifying socioeconomic indicators linked to crime and generating insights into policy, diversion, and reentry strategies.",
      "Extension (by myself): Independently built a live interactive dashboard integrating incarceration metrics on the organization’s website to support strategic planning.",
      "Designed & built a reentry simulation utilizing twine, with real-world scenarios, now used in rehabilitation programs in prisons to help returning citizens’ transitions.",
    ],
  },
  {
    title: "Application Development Analyst",
    company: "Accenture",
    date: "December 2022 - July 2023",
    duration: "8 months",
    location: "Chennai, Tamil Nadu, India",
    icon: FaBriefcase,
    description: [
      "📍Fast-track promoted from Associate, based on professional performance & proficiency shown in TechLeap Data Analytics program.",
      "Led cross-functional QA efforts, cutting post-deployment defects by 15% and blockers by 20%, and optimized QA workflows for stability and real-time performance.",
      "Performed API, automation, and headless testing on high-volume datasets, ensuring data integrity and system reliability.",
      "Collaborated with product owners, designers, and business teams to refine requirements, deliver clear documentation and defect analyses to speed resolutions, and enhance release efficiency.",
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
      "Maintained zero defects across 8+ releases through rigorous manual, API, and headless testing to ensure product quality.",
      "Automated critical workflows cutting processing time from minutes to instant, improving operational efficiency and user experience.",
      "Served as SME for secure customer-facing FIRE data channels (10 defect-free releases), ensuring compliance and data integrity, introduced advanced QA methods to stay ahead of product-related challenges.",
      "Delivered QA across Agile and Waterfall models, adapting workflows to evolving needs, and completed pre-onboarding training with full accuracy in Python, SQL, XML, and test frameworks (Selenium, TestNG, UFT).",
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
      "Completed hands-on training in power generation, hydro & renewable energy systems, and plant operations, analyzing electromechanical systems and energy workflows to identify efficiency improvements and reduce operational costs.",
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
          {/* 1) Mobile left rail */}
          <div
            className="absolute left-4 top-0 bottom-0 w-0.5 bg-violet-400 md:hidden pointer-events-none"
            aria-hidden="true"
          />
          {/* 1) Desktop center rail */}
          <div
            className="absolute hidden md:block left-1/2 -translate-x-1/2 h-full w-0.5 bg-violet-400"
            aria-hidden="true"
          />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`mb-8 relative flex flex-col md:flex-row md:justify-between md:items-start ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* 3) Timeline dot positioned for mobile & desktop */}
              <div
                className="absolute left-4 md:left-1/2 top-6 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-4 h-4 bg-violet-400 rounded-full border-4 border-[#2d0b44]"
                aria-hidden="true"
              />

              {/* 4) Content column full-width on mobile with left gutter; desktop keeps 5/12 */}
              <div
                className={`w-full md:w-5/12 pl-10 md:pl-0 ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                } transition-all duration-300 hover:-translate-y-1 will-change-transform min-w-0`}
              >
                <div
                  role="button"
                  tabIndex={0}
                  aria-expanded={expandedCard === index}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setExpandedCard(expandedCard === index ? null : index)
                    }
                  }}
                  className="bg-[#2d0b44] rounded-lg p-6 shadow-lg hover:shadow-xl hover:shadow-violet-700 transition-all duration-300 cursor-pointer"
                  onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-start gap-3 min-w-0">
                      <exp.icon className="text-violet-400 mt-1 shrink-0" size={20} />
                      <div className="min-w-0">
                        <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug">
                          {exp.title}
                        </h3>
                        <p className="text-violet-300 text-sm sm:text-base truncate">{exp.company}</p>
                        <p className="text-gray-400 text-xs sm:text-sm">{exp.date}</p>
                        <p className="text-gray-400 text-xs sm:text-sm">{exp.location}</p>
                      </div>
                    </div>
                    <button
                      className="text-violet-400 hover:text-violet-300 transition-colors shrink-0"
                      aria-label={expandedCard === index ? "Collapse" : "Expand"}
                    >
                      {expandedCard === index ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
                    </button>
                  </div>

                  {/* 6) Readable text & wrapping on mobile */}
                  {expandedCard === index && (
                    <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4 text-sm sm:text-base">
                      {exp.description.map((item, i) => (
                        <li key={i} className="break-words">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* 5) Spacer only on desktop to preserve alternating layout */}
              <div className="hidden md:block md:w-5/12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
