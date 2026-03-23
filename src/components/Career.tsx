import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span>Education</span>
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "40px", width: "100%", maxWidth: "800px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ paddingBottom: "20px", borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px" }}>
              <div>
                <h4 style={{ fontSize: "28px", fontWeight: "500", margin: "0 0 5px 0", letterSpacing: "0.5px" }}>M.S., Information Science</h4>
                <h5 style={{ fontSize: "20px", color: "var(--accentColor)", margin: "0 0 10px 0", fontWeight: "400" }}>The University of Arizona</h5>
              </div>
              <span style={{ fontSize: "18px", fontWeight: "300", opacity: 0.9, marginTop: "5px" }}>Dec 2025</span>
            </div>
            <p style={{ margin: 0, fontSize: "16px", fontWeight: "300", opacity: 0.8 }}>
              GPA: 3.8/4.0
            </p>
          </div>

          <div style={{ paddingBottom: "20px", borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px" }}>
              <div>
                <h4 style={{ fontSize: "28px", fontWeight: "500", margin: "0 0 5px 0", letterSpacing: "0.5px" }}>B.E., Electrical Engineering</h4>
                <h5 style={{ fontSize: "20px", color: "var(--accentColor)", margin: "0 0 10px 0", fontWeight: "400" }}>Shri Ramdeobaba College of Engineering</h5>
              </div>
              <span style={{ fontSize: "18px", fontWeight: "300", opacity: 0.9, marginTop: "5px" }}>May 2022</span>
            </div>
          </div>

          <div style={{ paddingBottom: "20px", borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px" }}>
              <div>
                <h4 style={{ fontSize: "28px", fontWeight: "500", margin: "0 0 5px 0", letterSpacing: "0.5px" }}>Diploma, Electrical Engineering</h4>
                <h5 style={{ fontSize: "20px", color: "var(--accentColor)", margin: "0 0 10px 0", fontWeight: "400" }}>Gramin Polytechnic College</h5>
              </div>
              <span style={{ fontSize: "18px", fontWeight: "300", opacity: 0.9, marginTop: "5px" }}>Apr 2019</span>
            </div>
          </div>
        </div>
      </div>

      <div className="career-container" style={{ marginTop: '100px' }}>
        <h2>
          My <span>Experience</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer</h4>
                <h5>Persistent Systems</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              <strong>Jun 2022 – Dec 2024</strong><br /><br />
              <strong>Tech Stack:</strong> Snowflake, DBT, Airflow, AWS S3, Python, SQL, Spark, Git, CI/CD<br /><br />
              • Designed and maintained scalable ELT pipelines for 35+ years of alumni data using AWS S3 and Snowflake, implementing DBT incremental models and Time Travel for versioning and recovery.<br />
              • Built modular DBT models with star schema design, reducing BI query latency by 35%.<br />
              • Implemented automated data validation using DBT tests and custom SQL checks, reducing discrepancies by 20%.<br />
              • Improved pipeline reliability by 25% through enhanced monitoring, optimized scheduling, and automated error handling.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Intern</h4>
                <h5>Persistent Systems</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              <strong>Dec 2021 – May 2022</strong><br /><br />
              <strong>Tech Stack:</strong> Azure Data Factory, Azure Key Vault, Delta Lake, PySpark, ETL<br /><br />
              • Designed and deployed Azure Data Factory pipelines to migrate on-prem databases to Azure, reducing execution time by 40%.<br />
              • Worked with cross-functional product and business teams to design parameterized, metadata-driven ingestion frameworks supporting scalable ETL processes.<br />
              • Implemented Delta Lake Gold layer and PySpark transformations for analytics-ready datasets.<br />
              • Integrated role-based access control (RBAC) and Azure Key Vault to enforce secure data access and governance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
