import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>M.S., Information Science</h4>
                <h5>The University of Arizona</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Pursuing Master of Science in Information Science. Achieving a GPA of 3.8/4.0. Expected graduation in December 2025.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Intern</h4>
                <h5>Persistent Systems</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Designed and deployed Azure Data Factory pipelines to migrate on-prem databases to Azure. Built parameterized ingestion frameworks and implemented Delta Lake Gold layer with PySpark caching.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer</h4>
                <h5>Persistent Systems</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Designed ELT pipelines for 35+ years of data from S3 to Snowflake using DBT. Built real-time streaming ingestion with Kafka and Spark Structured Streaming, reducing failure rates by 25%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
