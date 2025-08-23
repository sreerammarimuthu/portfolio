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
    company: "Harvard Medical School & Massachusetts General Hospital",
    date: "June 2025 - Present",
    duration: "4 months",
    location: "Boston, Massachusetts, United States",
    icon: FaSearch,
    description: [
      "In this summer internship, I led a Latent Class Analysis (LCA) linking Adverse Childhood Experience profiles to alcohol- and drug-use risk in underserved populations; designed, fitted, and validated the modeling process, utilized a mixed-methods approach.",
      "Built an end-to-end research pipeline (Python+R) - survey data pre-processing, medical coding, LCA modeling, cartesian associations, and a multi-variate regression analysis adjusting for predictors to find ORs, while reducing the analysis time by more than half.",
      "Co-authored two clinical research papers focused on Psychology, specifically 'Latent Class Profiling' & 'Two part semicontinuous modeling' over the summer (both under review).",
      "Interpreted the ML modeling results & associations with Dr. Jenny Zhen-Duan and the MGH Disparities Research Unit, to effectively inform community-health interventions.",
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
      "Collaborated once again with Dr. Andrew Trapp this time on the SWAP project, leveraging AI to improve resource-sharing among nonprofits.",
      "Built and integrated AI to the existing SWAP hub (a resource-sharing platform for NPOs), to improve scalability by identifying potential unseen matches based on previous offers and NPO specific information.",
      "Implemented the latest OSS model with browsing capabilities, to suggest real-time additional needs based on primary needs listed, and improve user experience among NPOs for a smooth barter system.",
    ],
  },
  {
    title: "Research Analyst",
    company: "City of Worcester",
    date: "September 2024 - May 2025",
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
    date: "August 2024 - May 2025",
    duration: "10 months",
    location: "Worcester, Massachusetts, United States",
    icon: FaGraduationCap,
    description: [
      "Engaged in a Directed Research project with Prof. Roee Shraga, exploring Human-in-the-Loop frameworks for improving data integration & discovery tasks.",
      "Investigating the interplay between large language models (LLMs), machine learning (ML), and human metacognition to address bias, trust, and usability in AI-assisted decision-making.",
      "Designing and executing cognitive experiments that simulate real-world data acquisition, quantifying human reasoning under uncertainty using principles from psychology and AI.",
      "Exploring behavioral patterns in Human-AI collaboration over tabular data, with emphasis on error correction, judgment calibration, and interpretability.",
      "First authored a paper advancing the field of Human-AI collaboration in the context of tabular data search and preparation.",
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
      "Managed data analysis & research tasks for special projects to identify service gaps in graduate support services, informing evidence-based improvements in student retention and integration strategies.",
      "Streamlined front-desk operations and administrative workflows, enhancing onboarding efficiency and partnered with Graduate Admissions and Student Success teams, translating insights into actionable improvements for a more inclusive and positive graduate student experience.",
      "Led interactive events, initiatives and sessions, fostering community-building and easing cultural transitions for new graduate cohorts.",
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
      'Led a clinical ML project on "Frailty Detection & Management" with Discern as part of WPI\'s GQP; Awarded Best Team Award for research excellence and outcomes.',
      "Integrated diverse clinical, socioeconomic, and claims data to identify key frailty markers (e.g., comorbidity scores, ADL limitations), and improved model interpretability.",
      "Designed & modeled 10 Experimental variations - 3 focused on Predictive modeling (Frailty Detection -> Kim CFI Score forecasting) and 7 dedicated to Phenotype Modeling - spanning over whole patient populations, gender-specific subgroups, and top-feature subsets to ensure comprehensive, data-driven insights.",
      "Built predictive models to forecast Kim CFI frailty scores, achieving RMSE: 0.0052 and R²: 0.9956 using AutoML and Lasso-based feature selection.",
      "Performed extensive Phenotype modeling on 53 frailty-related indicators (e.g., Alzheimer’s/Dementia, Rheumatoid Arthritis, and General Health) achieving AUCs up to 0.98 and validating performance across feature importance analyses, and multiple patient strata.",
      "Ensured model stability and scalability via cross-validation, residual analyses, and unified vs. segmented approaches, while logging all model results in MLflow on Databricks for full reproducibility and transparency, emphasizing scalable, proactive healthcare interventions, cost reductions, & improved patient outcomes.",
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
      "Partnered with Prof. Andrew Trapp and Intrare (a social impact startup in Mexico City) on a Directed Research project improving fairness and performance in AI-based job-matching systems.",
      "Boosted algorithm performance by implementing asynchronous data pipelines, batching API calls, and refining semantic similarity scoring to handle candidate-job data more efficiently.",
      "Designed & executed 6 AI bias experiments systematically over demographic signals (e.g., age, gender, nationality), analyzing disparities using model residuals.",
      "Delivered actionable recommendation adopted by the organization to improve fairness, semantic reliability and data quality in real-world deployments for more effective job matching.",
    ],
  },
  {
    title: "Research Intern",
    company: "Act",
    date: "May 2024 - July 2024",
    duration: "3 months",
    location: "Dallas, Texas, United States",
    icon: FaSearch,
    description: [
      "Managed geo-spatial & crime data analysis across four major Texas cities, leveraging Google Maps and data mining techniques, including insights from US Census data to inform legal strategy and feasibility reports.",
      "Identified patterns in high-risk, low-income neighborhoods through clustering and demographic-crime correlation studies to support targeted interventions.",
      "Developed interactive maps, visual dashboards, streamlined data discovery and preprocessing workflows to improve stakeholder communication and decision-making.",
      "KIP Fellow Summer 2025",
    ],
  },
  {
    title: "Research Assistant",
    company: "Worcester Polytechnic Institute",
    date: "March 2024 - June 2024",
    duration: "4 months",
    location: "Worcester, Massachusetts, United States",
    icon: FaGraduationCap,
    description: [
      "Led a graduate research team, working closely with the Dean of Business School and Legendary Legacies to analyze the economic and social impacts of incarceration at local and national levels.",
      "Utilized advanced analytics to correlate socioeconomic indicators with crime and incarceration patterns, generating insights to guide policy, pre-trial diversion, and reentry investment strategies.",
      "Extension (by myself): Independently built and integrated a live, interactive dashboard on the organization’s website, streamlining access to key incarceration metrics and enhancing strategic planning.",
      "Designed and developed an interactive reentry simulation featuring real-world scenarios, now under consideration for use in prison rehabilitation programs to help returning citizens build readiness and ease their transition.",
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
      "Spearheaded QA initiatives across cross-functional teams, reducing post-deployment issues by 15% and overall project blockers by 20% through agile Scrum practices.",
      "Performed API, automation, and headless testing on high-volume datasets, ensuring end-to-end data integrity and system reliability.",
      "Partnered with product owners, designers and business analysts to identify gaps, refine requirements, and enhance product quality through data-driven insights.",
      "Delivered detailed documentation and defect analysis, accelerating resolution timelines and enhancing release efficiency.",
      "Optimized QA workflows for stability and real-time performance, contributing to seamless platform operations.",
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
      "Maintained zero defects across 8+ releases through rigorous manual, API, and headless testing to ensure top-tier product quality.",
      "Automated critical workflows (e.g., contact creation) cutting the execution time from 2-3 minutes to instant, boosting operational efficiency and user experience.",
      "Delivered quality assurance across Agile and Waterfall methodologies, adapting testing frameworks to evolving needs.",
      "Sole Subject Matter Expert for secure, customer-facing data channels (FIRE), ensuring compliance and data integrity. Ensured it remained defect-free environment across 10 releases.",
      "Identified and implemented innovative QA strategies, including headless testing and proactive risk assessments, to stay ahead of product-related challenges.",
      "Completed pre-onboarding training with 100% coding accuracy in Python, SQL, XML, and test frameworks (Selenium, TestNG, UFT), accelerating readiness for full-time responsibilities.",
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
