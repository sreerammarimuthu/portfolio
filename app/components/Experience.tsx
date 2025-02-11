import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { FaBriefcase } from "react-icons/fa"

export default function Experience() {
  const experiences = [
    {
      title: "Research Analyst",
      company: "City of Worcester",
      date: "January 2025 - Present",
      description: [
        "Continuing in-depth analysis of homeless population data, integrating insights from the Massachusetts Large Cities Health Coalition (MLCHC) to inform resource allocation and policy decisions.",
        "Collaborating closely with the Massachusetts Public Health Association (MPHA) to align research efforts and share best practices across the 14 largest Massachusetts cities.",
        "Presenting findings to stakeholders through clear visualizations and data-driven recommendations, fostering strategic partnerships and advancing community well-being.",
      ],
    },
    {
      title: "Data Analyst | Ambassador | Peer Liaison",
      company: "Worcester Polytechnic Institute",
      date: "September 2024 - Present",
      description: [
        "Managing front-desk operations and administrative workflows, enhancing onboarding efficiency and improving overall graduate student support.",
        "Organizing interactive events and sessions, fostering community-building and easing cultural transitions for new graduate cohorts.",
        "Conducting data analysis and research tasks to identify gaps in graduate support services, informing evidence-based improvements in retention and integration strategies.",
        "Collaborating closely with Graduate Admissions and Student Success teams, translating insights into actionable enhancements for a more inclusive and positive graduate experience.",
      ],
    },
    {
      title: "Machine Learning Engineer",
      company: "Discern Health",
      date: "August 2024 - December 2024",
      description: [
        "Worked on the 'Frailty Detection & Management' project with Discern as part of our Graduate Qualifying Project (GQP), earning the Best Team Award for outstanding research and outcomes.",
        "Integrated diverse clinical, socioeconomic, and claims data to identify key frailty indicators (e.g., comorbidity scores, ADL limitations), ensuring practical interpretability and broader applicability.",
        "Executed 10 Experimental variations - 3 focused on Predictive modeling (Frailty Detection -> Kim CFI Score forecasting) and 7 dedicated to Phenotype Modeling - spanning over whole patient populations, gender-specific subgroups, and top-feature subsets to ensure comprehensive, data-driven insights.",
        "Developed Predictive models (using AutoML and Lasso-driven feature selection) to accurately forecast Kim CFI frailty scores, achieving RMSE as low as 0.0052 and R² up to 0.9956.",
      ],
    },
    {
      title: "Quality Engineering Analyst",
      company: "Accenture",
      date: "December 2022 - April 2023",
      description: [
        "Led cross-functional testing initiatives, achieving a 15% reduction in post-deployment issues and a 20% decrease in project-related challenges via proactive Scrum management.",
        "Executed API, Automation, and Headless testing on large-scale datasets, ensuring data integrity and functionality alignment with business requirements.",
        "Collaborated with product owners, designers and business analysts to identify gaps, refine requirements, and enhance product quality through data-driven insights.",
        "Produced comprehensive test reports, streamlining defect resolution and accelerating decision-making for product improvements.",
        "Optimized testing workflows to bolster performance, reinforcing product stability and ensuring seamless real-time operations.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(255, 255, 255)", color: "#333" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
              date={exp.date}
              iconStyle={{ background: "rgb(124, 58, 237)", color: "#fff" }}
              icon={<FaBriefcase />}
            >
              <h3 className="vertical-timeline-element-title font-bold">{exp.title}</h3>
              <h4 className="vertical-timeline-element-subtitle text-violet-600">{exp.company}</h4>
              <ul className="mt-2 list-disc list-inside">
                {exp.description.map((item, i) => (
                  <li key={i} className="mb-1">
                    {item}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  )
}

