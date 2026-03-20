import "./styles/Work.css";
import WorkImage from "./WorkImage";

const projects = [
  {
    title: "Azure Medallion Data Lake Architecture",
    category: "Data Platform",
    tools: "Azure Data Factory, Databricks, PySpark, Azure Synapse Analytics Airflow",
    image: "/images/Azure_project.png",
    points: [
      "Migrated 1M+ records from On-Prem VM to Azure using Azure Data Factory with Self-Hosted IR.",
      "Integrated APIs using Python and Airflow operators to automate ingestion.",
      "Built Medallion Architecture in ADLS Gen2 using Databricks (PySpark), improving data quality.",
      "Developed metadata-driven pipelines, accelerating dataset onboarding by 50%.",
      "Integrated Synapse with Key Vault, RBAC, and Logic Apps for security."
    ]
  },
  {
    title: "Modern ELT Pipeline",
    category: "Data Engineering",
    tools: "Snowflake, DBT, Amazon S3, Glue, Airflow",
    image: "/images/snow_project.png",
    points: [
      "Designed cloud-native ELT pipeline following Medallion Architecture.",
      "Leveraged incremental processing to transform 20M records.",
      "Developed modular DBT models with integrated testing and documentation.",
      "Implemented SCD Type-2 using DBT snapshots and star schema."
    ]
  },
  {
    title: "Modern Data Engineering Pipeline – Airbnb Analytics Platform | GitHub",
    category: "Data Engineering",
    tools: "AWS S3, Snowflake, DBT, Metadata-driven Approach, Airflow",
    image: "/images/Airbnb.png",
    points: [
      "Architected a scalable ELT pipeline ingesting 50K+ Airbnb records from AWS S3 into Snowflake, enabling structured analytics workflows and reducing manual data preparation by 60%.",
      "Implemented a DBT-based transformation layer with 20+ modular models, reusable macros, and automated tests, improving pipeline maintainability and increasing data reliability by 30%.",
      "Designed analytics-ready Star Schema data models with Fact and Dimension tables and implemented SCD Type-2 for historical tracking, improving analytical query performance by 40%."
    ]
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-item" key={index}>
              <div className="project-content">
                <div className="project-info">
                  <div className="project-number">
                    <h3>0{index + 1}</h3>
                  </div>
                  <div className="project-details">
                    <h4>{project.title}</h4>
                    <p className="project-category">
                      {project.category}
                    </p>
                    <div className="project-tools">
                      <span className="tools-label">Tools & Features</span>
                      <p>{project.tools}</p>
                    </div>
                    {project.points && (
                      <div className="project-points" style={{ marginTop: "1.5rem" }}>
                        <ul style={{ paddingLeft: "1.2rem", margin: 0, fontSize: "clamp(0.9rem, 1vw, 1.1rem)", opacity: 0.8, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                          {project.points.map((point, i) => (
                            <li key={i} style={{ listStyleType: "disc" }}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <div className="project-image-wrapper">
                  <WorkImage image={project.image} alt={project.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
