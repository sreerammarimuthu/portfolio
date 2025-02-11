"use client"

import { useState } from "react"
import {
  FaCar,
  FaChartLine,
  FaComments,
  FaDatabase,
  FaImage,
  FaNewspaper,
  FaProjectDiagram,
  FaShieldAlt,
  FaUsers,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa"

function getIconForTitle(title) {
  switch (title) {
    case "Predictive Modeling for COVID-19 Research Insights":
      return <FaChartLine className="text-4xl text-violet-400" />
    case "Image Generation Using GAN":
      return <FaImage className="text-4xl text-violet-400" />
    case "Sentiment Analysis of Amazon Reviews via Text Classification":
      return <FaComments className="text-4xl text-violet-400" />
    case "Meta-Learning & Few-Shot Learning for Taxi Driver Classification":
      return <FaCar className="text-4xl text-violet-400" />
    case "Fake News Detection via Text Classification":
      return <FaNewspaper className="text-4xl text-violet-400" />
    case "Big Data Analytics: Insights via SparkSQL & MLlib in Retail Operations":
      return <FaDatabase className="text-4xl text-violet-400" />
    case "COVID-19 Social Distancing Analysis with Spark RDDs":
      return <FaUsers className="text-4xl text-violet-400" />
    case "Hadoop MapReduce Analytics on Social Media":
      return <FaProjectDiagram className="text-4xl text-violet-400" />
    case "Evaluating the Efficacy of the PhiUSIIL Phishing Dataset":
      return <FaShieldAlt className="text-4xl text-violet-400" />
    default:
      return <FaChartLine className="text-4xl text-violet-400" />
  }
}

const projects = [
  {
    titleLine1: "Predictive Modeling",
    titleLine2: "COVID-19 Research Insights",
    date: "Apr 2024 - May 2024",
    description: [
      "Implemented advanced Topic Modeling techniques (LDA, NMF, BERT) to analyze and categorize themes from over 100,000 academic articles.",
      "Achieved strong performance metrics: LDA Perplexity (-8.0172), NMF Reconstruction Error (4.4526e-09), BERT Coherence (0.5167), and Silhouette (0.1659) scores.",
      "Developed a comprehensive pre-processing pipeline balancing nuanced thematic insights of BERT with the computational efficiency of LDA and NMF.",
      "Identified dominant research themes (AI, Sustainability, Healthcare Advancements) to inform literature review automation, trend analysis, and personalized content recommendations.",
      "Featured on my portfolio website with detailed walkthroughs, showcasing the project's methodology and impact.",
    ],
    skills: [
      "Machine Learning",
      "Natural Language Processing (NLP)",
      "Deep Learning",
      "BERT (Language Model)",
      "Artificial Intelligence (AI)",
    ],
  },
  {
    titleLine1: "Image Generation",
    titleLine2: "using GAN",
    date: "Mar 2024",
    description: [
      "Developed a custom GAN architecture in PyTorch with carefully tuned Generator and Discriminator classes.",
      "Executed 16 experiments varying network depth, activation functions, optimizers, and loss functions to enhance realism in generated handwritten digit images.",
      "Fine-tuned the model on MNIST, experimenting with hyperparameters (learning rate, batch size) to improve convergence.",
      "Monitored generator and discriminator loss curves to ensure stable training and minimized mode collapse.",
      "Highlighted on my portfolio site as a demonstration of advanced deep learning and generative modeling techniques.",
    ],
    skills: ["PyTorch", "Deep Learning", "GAN", "Data Visualization"],
  },
  {
    titleLine1: "Sentiment Analysis",
    titleLine2: "Amazon Food Reviews",
    date: "Mar 2024",
    description: [
      "Pre-processed the Amazon Fine Food Reviews dataset, creating TF, TF-IDF, Bag-of-Words, and word2vec representations for sentiment classification.",
      "Implemented a pre-trained BERT pipeline ('sentiment-analysis') for fast inference without fine-tuning.",
      "Fine-tuned BERT and applied LoRA (Low-Rank Adaptation) to optimize performance.",
      "Showcased on my portfolio website, including experiment logs and model performance comparisons.",
    ],
    skills: [
      "Feature Engineering",
      "Machine Learning",
      "Natural Language Processing (NLP)",
      "Sentiment Analysis",
      "BERT (Language Model)",
      "Customer Analytics",
    ],
  },
  {
    titleLine1: "Meta & Few-Shot Learning",
    titleLine2: "for NYC Taxi Driver Classification",
    date: "Apr 2024",
    description: [
      "Engineered a Siamese LSTM-based approach leveraging few-shot learning to classify taxi drivers with just 5-day trajectory data for 400 drivers.",
      "Boosted test accuracy to 82.38% from a 50% baseline using ReLU activations, dropout regularization, and hyperparameter tuning.",
      "Extracted temporal and spatial features (time of day, route patterns, occupancy status) for improved interpretability.",
      "Highlighted on my portfolio site to illustrate innovative approaches in transportation analytics.",
    ],
    skills: ["Feature Engineering", "Machine Learning", "Deep Learning", "Big Data Analytics"],
  },
  {
    titleLine1: "Fake News Detection",
    titleLine2: "via Text Classification",
    date: "Feb 2024",
    description: [
      "Deployed classic ML algorithms (Logistic Regression, Random Forest, MultinomialNB, XGBoost) on TF, TF-IDF, and Bag-of-Words features for fake news detection.",
      "Pre-processed text (stop word removal, lemmatization) and engineered parts-of-speech tagging for richer feature representation.",
      "Evaluated models using precision, recall, and accuracy, and explored GPT's potential to further improve detection.",
      "Documented on my portfolio site, highlighting the comparative study of traditional ML and language model capabilities.",
    ],
    skills: [
      "Feature Engineering",
      "Exploratory Data Analysis",
      "Machine Learning",
      "Natural Language Processing (NLP)",
      "Experimental Analysis",
      "GPT-3",
    ],
  },
  {
    titleLine1: "Big Data Analytics",
    titleLine2: "CRM Insights via SparkSQL & MLlib in Retail Operations",
    date: "Dec 2023",
    description: [
      "Utilized SparkSQL for complex data filtering and transformations on large-scale retail transactions.",
      "Leveraged MLlib to train and evaluate predictive models, forecasting purchase prices based on customer attributes.",
      "Provided strategic insights on customer segmentation and spending patterns to guide business decisions.",
      "Featured in my portfolio site, demonstrating the power of big data solutions and retail analytics.",
    ],
    skills: ["Data Engineering", "PySpark", "Machine Learning", "Apache Spark", "Customer Analytics"],
  },
  {
    titleLine1: "Social Distancing Analysis",
    titleLine2: "COVID-19 with Spark RDDs",
    date: "Dec 2023",
    description: [
      "Executed a Spark RDD-based project analyzing social distancing at an outdoor concert using multiple datasets.",
      "Generated large-scale data incorporating assumptions on infection status for realistic modeling.",
      "Conducted advanced data manipulation to draw insights on social distancing behaviors and adherence.",
      "Demonstrated on my portfolio website as a case study in epidemiological data analysis.",
    ],
    skills: ["Data Engineering", "Big Data", "PySpark", "Apache Spark"],
  },
  {
    titleLine1: "Hadoop MapReduce Analytics",
    titleLine2: "on Social Media",
    date: "Sep 2023",
    description: [
      "Developed and processed multiple big datasets to model a social media platform's user base.",
      "Leveraged Hadoop MapReduce to identify user demographics, popular pages, and community interaction patterns.",
      "Ensured pipeline scalability and efficiency for large-scale data processing.",
      "Showcased on my portfolio site, highlighting essential big data engineering skills.",
    ],
    skills: ["Data Engineering", "Java", "Big Data", "Hadoop", "MapReduce"],
  },
  {
    titleLine1: "Evaluating the Efficacy",
    titleLine2: "PhiUSIIL Phishing Dataset",
    date: "Apr 2024",
    description: [
      "Analyzed the 54-feature PhiUSIIL dataset for phishing URL detection, achieving 97.93% test accuracy via a deep neural network (DNN).",
      "Experimented with DNN, LSTM, CNN-LSTM, and RNN models, with DNN and LSTM ranking as the top performers.",
      "Applied mutual information-based feature selection, reducing features to 20 with minimal performance impact (96.48% accuracy).",
      "Detailed on my portfolio website, emphasizing innovative approaches to cybersecurity data challenges.",
    ],
    skills: ["Feature Engineering", "Machine Learning", "Deep Learning"],
  },
]

export default function ResearchProjects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const toggleExpand = (index) => {
    setExpandedProject(expandedProject === index ? null : index)
  }

  return (
    <section id="research-projects" className="py-20 bg-black relative section-container">
      <div className="constellation-bg"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-white mb-16">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isExpanded = expandedProject === index
            return (
              <div
                key={index}
                className="bg-[#1f0733] rounded-lg p-6 shadow-lg 
                           transition-transform transform hover:scale-105 
                           hover:shadow-2xl hover:shadow-violet-700 
                           duration-300 flex flex-col"
              >
                <div className="flex flex-col items-center mb-4">
                  <div className="mb-3">{getIconForTitle(project.title || project.titleLine1)}</div>
                  {project.titleLine1 && project.titleLine2 ? (
                    <h3 className="text-xl font-semibold text-white text-center">
                      {project.titleLine1}
                      <br />
                      {project.titleLine2}
                    </h3>
                  ) : (
                    <h3 className="text-xl font-semibold text-white text-center">{project.title}</h3>
                  )}
                  <p className="text-sm text-violet-200 text-center">{project.date}</p>
                </div>
                <button
                  onClick={() => toggleExpand(index)}
                  className="flex items-center justify-center text-violet-300 
                             hover:text-violet-200 focus:outline-none mt-auto 
                             py-2"
                >
                  {isExpanded ? (
                    <>
                      <FaChevronUp className="mr-2" />
                      Hide Details
                    </>
                  ) : (
                    <>
                      <FaChevronDown className="mr-2" />
                      Show Details
                    </>
                  )}
                </button>
                {isExpanded && (
                  <div className="mt-4">
                    <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                      {project.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-violet-500">
                      <h4 className="text-white font-medium mb-2">Skills:</h4>
                      <ul className="flex flex-wrap gap-2">
                        {project.skills.map((skill, i) => (
                          <li key={i} className="text-sm bg-violet-600 text-white px-2 py-1 rounded-md">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

