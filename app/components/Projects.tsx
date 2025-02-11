import { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

export default function Projects() {
  const projects = [
    {
      title: "Frailty Detection & Management",
      description:
        "Developed predictive models for frailty detection using healthcare big data, achieving high accuracy in forecasting Kim CFI frailty scores.",
      details: [
        "Integrated diverse clinical, socioeconomic, and claims data to identify key frailty indicators.",
        "Executed 10 Experimental variations focused on Predictive modeling and Phenotype Modeling.",
        "Developed Predictive models achieving RMSE as low as 0.0052 and R² up to 0.9956.",
        "Performed extensive Phenotype modeling on 53 frailty-related indicators, achieving AUCs up to 0.98.",
      ],
    },
    {
      title: "COVID-19 Research Insights",
      description:
        "Implemented advanced Topic Modeling techniques to analyze over 100,000 academic articles, identifying dominant research themes in COVID-19 literature.",
      details: [
        "Utilized LDA, NMF, and BERT for topic modeling.",
        "Achieved notable metrics, including LDA Perplexity (-8.0172) and BERT Coherence (0.5167).",
        "Built a comprehensive pre-processing pipeline balancing thematic insights and computational efficiency.",
        "Identified dominant research themes to inform literature review automation and trend analysis.",
      ],
    },
    {
      title: "Yelp Data Challenge",
      description:
        "Developed predictive models using Yelp reviews and tips to uncover patterns and correlations with business attributes, achieving 92.6% accuracy.",
      details: [
        "Trained Naive Bayes, Random Forest, XGBoost, and a fine-tuned RoBERTa model.",
        "Conducted extensive Exploratory Data Analysis (EDA) on star rating distributions and geospatial patterns.",
        "Examined the link between business longevity and customer satisfaction.",
      ],
    },
    {
      title: "Taxi Driver Classification",
      description:
        "Designed a Siamese LSTM-based architecture for few-shot learning to classify taxi drivers from limited trajectory data, achieving 82.38% test accuracy.",
      details: [
        "Leveraged Few-Shot Learning to classify taxi drivers from limited 5-day trajectory data for 400 drivers.",
        "Improved from a 50% baseline through ReLU activations and dropout regularization.",
        "Extracted critical temporal and spatial features to enhance model interpretability.",
        "Demonstrated the potential of few-shot learning in transportation analytics and urban mobility optimization.",
      ],
    },
  ]

  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-2">{project.description}</p>
              {expandedProject === index ? (
                <>
                  <ul className="list-disc list-inside mb-2">
                    {project.details.map((detail, i) => (
                      <li key={i} className="mb-1">
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setExpandedProject(null)}
                    className="text-violet-600 hover:text-violet-800 flex items-center"
                  >
                    Show Less <FaChevronUp className="ml-1" />
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setExpandedProject(index)}
                  className="text-violet-600 hover:text-violet-800 flex items-center"
                >
                  Show More <FaChevronDown className="ml-1" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

