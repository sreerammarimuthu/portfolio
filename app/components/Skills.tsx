export default function Skills() {
  const skills = [
    { category: "Programming Languages", items: ["Python", "SQL", "Java"] },
    {
      category: "Machine Learning",
      items: [
        "MLflow",
        "Databricks",
        "H2O AutoML",
        "Supervised & Unsupervised Learning",
        "Natural Language Processing (NLP)",
        "Deep Learning (Neural Networks)",
      ],
    },
    { category: "Big Data", items: ["Hadoop (MapReduce)", "Apache Spark (PySpark, Spark SQL)", "Apache Pig", "ETL"] },
    { category: "Large Language Models", items: ["BERT", "Llama 2", "OpenAI (GPT-3.5, GPT-4)", "Co-Pilot"] },
    { category: "Cloud Platforms", items: ["AWS", "Azure", "Google Cloud"] },
    {
      category: "Project Management",
      items: [
        "Azure DevOps",
        "Jira",
        "Git",
        "Scrum framework",
        "Agile & Waterfall methodologies",
        "Defect Management",
        "API & Headless Testing",
        "Problem Solving",
        "Digital Marketing",
      ],
    },
    { category: "Data Visualization", items: ["Tableau", "Power BI", "Plotly"] },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillCategory, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{skillCategory.category}</h3>
              <div className="flex flex-wrap">
                {skillCategory.items.map((skill, i) => (
                  <span key={i} className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full m-1">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

