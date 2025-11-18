import { ResumeCard } from "./ResumeCard"
import { BentoGrid } from "@/components/bento/BentoGrid"
import { FileDown } from "lucide-react"
import BackHomeButton from "@/components/common/BackHomeButton"
import { motion } from "framer-motion"

export default function ResumeView() {
  return (
    <div className="relative pb-20">
      <BentoGrid className="mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
        {/* HEADER */}
        <ResumeCard
          title="Akshat Pande"
          subtitle="Data Scientist | Analyst"
          className="col-span-full"
        >
          <p>Noida, UP, India · 📧 mail@pandeakshat.com · 📱 +91-9958091895</p>
          <p>
            <a href="https://pandeakshat.com" target="_blank" rel="noopener noreferrer">Portfolio</a> · 
            <a href="https://linkedin.com/in/pandeakshat" target="_blank" rel="noopener noreferrer">LinkedIn</a> · 
            <a href="https://github.com/pandeakshat" target="_blank" rel="noopener noreferrer">GitHub</a> </p>
          <br />
          <p>
            <strong>Profile Summary:</strong> <br />
            Data analyst and independent consultant transitioning into applied data science, specializing in automation and practical ML systems. Built and deployed models across churn prediction, route optimization, and medical plausibility scoring, cutting manual workloads by hours and reducing audit/validation errors by up to 80%. Focused on converting messy operational data into reliable pipelines, scalable tools, and high-accuracy models.
          </p>
        </ResumeCard>
{/* EXPERIENCE */}
<ResumeCard title="Experience" className="col-span-full">
  <p>
    <strong>Data Science Consultant — Remote</strong> <br />
    Jun 2025 – Present
  </p>
  <ul className="list-disc pl-5">
    <li>
      Delivered 4 ML/data products for logistics, healthcare, and engineering clients in 4 months, covering pipelines, models, and deployment.
    </li>
    <li>
      Built a route-optimization model (scikit-learn) reducing projected delivery times by 12%, saving ~₹2L/month.
    </li>
    <li>
      Developed a medical plausibility scoring model with 85% recall, backed by a full validation framework and technical documentation.
    </li>
    <li>
      Engineered ETL pipelines processing 50K+ rows/week; automated QC audits cut manual review time by 40%.
    </li>
  </ul>

  <p className="mt-4">
    <strong>Process Automation Analyst — Sloane Square Hotel, London (Remote)</strong> <br />
    Nov 2023 – Jun 2025
  </p>
  <ul className="list-disc pl-5">
    <li>
      Automated nightly reconciliation workflows for a 100-room property using Excel macros and validated templates, saving 30 minutes per shift.
    </li>
    <li>
      Reduced audit discrepancies from 5–8 per night to 0–2 (80% improvement) through SOP standardization.
    </li>
    <li>
      Deployed an internal knowledge-base website that halved documentation lookup time for a 3-person night audit team.
    </li>
  </ul>

  <p className="mt-4">
    <strong>Senior Operations Analyst — Homes for Students, UK (Remote)</strong> <br />
    Apr 2022 – Nov 2023
  </p>
  <ul className="list-disc pl-5">
    <li>
      Managed KPI reporting for 200+ housing units via automated weekly Power BI dashboards.
    </li>
    <li>
      Identified complaint patterns using cohort analysis, leading to process adjustments that reduced recurring issues by 20%.
    </li>
  </ul>

  <p className="mt-4">
    <strong>Technical Lead — Dualchain (Equity-based)</strong> <br />
    Aug 2022 – Present
  </p>
  <ul className="list-disc pl-5">
    <li>
      Architected a modular web ecosystem with automated CI/CD pipelines, reducing deployment time from 30 minutes to 5 minutes.
    </li>
    <li>
      Built a DEX aggregator interface that reduced API calls by 66% (3 → 1), halving swap transaction time.
    </li>
    <li>
      Created donation-tracking dashboards for $5K+ contributions while migrating infrastructure to free-tier cloud hosting.
    </li>
  </ul>
</ResumeCard>


{/* SKILLS */}
<ResumeCard title="Skills" className="col-span-6 md:col-span-6">
  <p>
    <strong>Programming:</strong> Python (Pandas, Scikit-learn, Streamlit, FastAPI), SQL (CTEs, window functions), Git/GitHub Actions
  </p>
  <p>
    <strong>ML Engineering:</strong> Feature engineering, model validation, ETL pipelines, Docker containerization
  </p>
  <p>
    <strong>Business Intelligence:</strong> Power BI (DAX), Tableau, Excel automation, ARIMA forecasting
  </p>
  <p>
    <strong>Cloud:</strong> AWS S3, Azure Functions, Firebase, CI/CD pipelines
  </p>
  <p>
    <strong>Tools:</strong> LangChain, Hugging Face Transformers, API integration
  </p>
</ResumeCard>


{/* PROJECTS */}
<ResumeCard title="Projects" className="col-span-6 md:col-span-6">
  <ul className="list-disc pl-5">
    <li>
      <strong>Customer Intelligence Hub</strong> — Streamlit · FastAPI · Scikit-learn <br />
      Churn prediction using XGBoost with engineered features. 85% recall, 78% precision. Automated validation reduced QC time by 40%. 
    </li>
    <li>
      <strong>Sales Forecasting Platform</strong> — Python · SQL · ARIMA <br />
      BI pipeline processing 10K+ weekly transactions with ETL validation and demand forecasting. Achieved MAPE &lt; 15%.
    </li>
    <li>
      <strong>Data Audit Toolkit</strong> — Streamlit · Pandas <br />
      Automated schema validation and outlier detection; processes 50+ datasets in under 60 seconds.
    </li>
  </ul>
</ResumeCard>


{/* EDUCATION */}
<ResumeCard title="Education" className="col-span-6 md:col-span-6">
  <p>
    <strong>M.Sc. Financial Technology with Data Science</strong> — University of Bristol (2021–2023)
  </p>
  <p className="mt-2">
    <strong>B.Tech Computer Science & Engineering</strong> — Amity University (2017–2021)
  </p>
</ResumeCard>


{/* CERTIFICATIONS */}
<ResumeCard title="Certifications" className="col-span-6 md:col-span-6">
  <ul className="list-disc pl-5">
    <li>Google Data Analytics</li>
    <li>AWS Cloud Foundations</li>
    <li>IBM Data Fundamentals</li>
    <li>AI Essentials</li>
  </ul>
</ResumeCard>


{/* INTERESTS */}
<ResumeCard title="Interests" className="col-span-6 md:col-span-6">
  <p>Anime · Gaming · Cooking · Podcasts · Poetry · Travel · Digital Trends</p>
</ResumeCard>

      </BentoGrid>

      {/* Floating Buttons */}
      <motion.a
        href="/Resume.pdf"
        download
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 left-5 z-50 flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/80 backdrop-blur-sm shadow-soft hover:bg-accent/10 transition"
      >
        <FileDown className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium">Download PDF</span>
      </motion.a>

      <BackHomeButton client:load position="top-left" />
    </div>
  )
}
