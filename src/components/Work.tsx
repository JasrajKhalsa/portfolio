import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Azure Medallion Data Lake Architecture",
    category: "Data Platform",
    tools: "Azure Data Factory, Databricks, PySpark, Airflow",
    image: "/images/Solidx.png",
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
    tools: "Snowflake, DBT, Amazon S3",
    image: "/images/radix.png",
    points: [
      "Designed cloud-native ELT pipeline following Medallion Architecture.",
      "Leveraged incremental processing to transform 20M records.",
      "Developed modular DBT models with integrated testing and documentation.",
      "Implemented SCD Type-2 using DBT snapshots and star schema."
    ]
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        {project.points && (
                          <div className="carousel-points" style={{ marginTop: "1.5rem" }}>
                            <ul style={{ paddingLeft: "1.2rem", margin: 0, fontSize: "clamp(0.9rem, 1vw, 1.1rem)", opacity: 0.8, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                              {project.points.map((point, i) => (
                                <li key={i} style={{listStyleType: "disc"}}>{point}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
