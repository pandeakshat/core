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
          subtitle="Data Scientist | AI & Cloud Engineer"
          className="col-span-full"
        >
          <p>New Delhi, India · 📧 mail@pandeakshat.com · 📱 +91-9958091895</p>
          <p>
            <a href="https://pandeakshat.com" target="_blank" rel="noopener noreferrer">Portfolio</a> · 
            <a href="https://linkedin.com/in/pandeakshat" target="_blank" rel="noopener noreferrer">LinkedIn</a> · 
            <a href="https://github.com/pandeakshat" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
          <br />
          <p>
            <strong>Profile Summary:</strong> <br />
            Applied Data Scientist and Cloud Engineer with 3+ years of experience specializing in automation, practical ML systems, and scalable pipelines. Proven track record of deploying models for logistics and healthcare, reducing manual workloads and audit errors by up to 80%. Skilled in converting messy operational data into reliable, automated workflows using Python, SQL, and Cloud (AWS/Azure) infrastructure.
          </p>
        </ResumeCard>

        {/* EXPERIENCE */}
        <ResumeCard title="Experience" className="col-span-full">
          <p>
            <strong>EXP-ER (Founder & Freelance Data Consultant)</strong> <br />
            New Delhi, India (Remote) | Jul 2025 - Present
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>
              Deployed 4 end-to-end ML/data projects across Logistics, Healthcare, and Engineering sectors.
            </li>
            <li>
              <strong>Airline Logistics:</strong> Architected a route optimization and hub-allocation model, accelerating strategic decision-making for alternative route selections.
            </li>
            <li>
              <strong>Healthcare AI:</strong> Developed a medical plausibility scoring model for Alzheimer's research, delivering full technical documentation and validation to clinical stakeholders.
            </li>
            <li>
              <strong>Digital Strategy:</strong> Revamped web infrastructure and digital strategy for engineering firms (ADICON & AdyaShakti), modernizing their data presence.
            </li>
          </ul>

          <p>
            <strong>Dualchain (Head of Development, Volunteer)</strong> <br />
            London, UK (Remote) | Aug 2022 - Present
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>
              Built a modular web ecosystem and strategy portal with automated CI/CD pipelines, increasing user adoption by 20%.
            </li>
            <li>
              Optimized DEX aggregator API, reducing calls by 66% (3 to 1) and halving transaction time.
            </li>
            <li>
              Migrated infrastructure to cost-optimised hosting, eliminating server costs while designing a framework to track user contributions.
            </li>
          </ul>

          <p>
            <strong>Sloane Square Hotel (Night Receptionist & Auditor → Data & Operations)</strong> <br />
            London, UK | Nov 2023 - Jun 2025
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>
              Standardized reconciliation for a 100-room property by writing Python/Excel scripts, cutting calculation time by 30+ minutes per night.
            </li>
            <li>
              Reduced financial reporting errors from 7 to &lt;2 per night by automating validity checks.
            </li>
            <li>
              Deployed an internal SOP website to centralize knowledge, reducing documentation lookup time by approx. 50%.
            </li>
          </ul>

          <p>
            <strong>Homes for Students (Senior Customer Service Advisor → Analytics)</strong> <br />
            London, UK | Apr 2022 - Nov 2023
          </p>
          <ul className="list-disc pl-5">
            <li>
              Managed KPI reporting for 200+ housing units via Power BI.
            </li>
            <li>
              Analyzed 50+ monthly complaints to reduce recurring operational issues by approx. 20%.
            </li>
          </ul>
        </ResumeCard>

        {/* SKILLS */}
        <ResumeCard title="Skills" className="col-span-6 md:col-span-6">
          <p>
            <strong>Languages & Frameworks:</strong> <br />
            Python (Pandas, NumPy, Scikit-learn, TensorFlow), SQL, Streamlit, FastAPI
          </p>
          <p className="mt-2">
            <strong>Cloud & DevOps:</strong> <br />
            AWS & Azure, Docker, CI/CD (GitHub Actions), Firebase, MongoDB
          </p>
          <p className="mt-2">
            <strong>Data Engineering:</strong> <br />
            ETL Pipelines, Excel Automation, Data Validation, Schema Design
          </p>
          <p className="mt-2">
            <strong>Machine Learning:</strong> <br />
            Churn Prediction, Forecasting (ARIMA), NLP, Feature Engineering
          </p>
          <p className="mt-2">
            <strong>Visualization & BI:</strong> <br />
            Power BI, Tableau, KPI Design (GMV, Margins, Stock Health)
          </p>
        </ResumeCard>

        {/* PROJECTS */}
        <ResumeCard title="Projects" className="col-span-6 md:col-span-6">
          <ul className="list-disc pl-5">
            <li className="mb-3">
              <strong>Customer Intelligence Hub</strong> — Streamlit, FastAPI, Scikit-learn <br />
              Developed a churn prediction and customer scoring application. Integrated automated data audits which reduced Quality Control (QC) time by approx. 40% while achieving 85% model recall.
            </li>
            <li className="mb-3">
              <strong>Sales & Performance Dashboard</strong> — Python, SQL, Pandas, ARIMA <br />
              Built an end-to-end BI dashboard processing 10K+ rows weekly. Implemented ETL validation pipelines and ARIMA forecasting to predict future sales trends.
            </li>
            <li>
              <strong>Data Audit Toolkit</strong> — Streamlit, Pandas <br />
              Engineered a rapid assessment framework that detects schema errors and outliers in &lt;60 seconds. Currently used to validate data quality across 50+ distinct datasets.
            </li>
          </ul>
        </ResumeCard>

        {/* EDUCATION */}
        <ResumeCard title="Education" className="col-span-6 md:col-span-6">
          <p>
            <strong>M.Sc. Financial Technology with Data Science</strong> <br />
            University of Bristol, UK | (2021-2023) <br />
            <span className="text-sm text-muted-foreground">Thesis: Analysis & Indexing of Blockchain Technologies using Carbon Footprint</span>
          </p>
          <p className="mt-4">
            <strong>B.Tech. Computer Science & Engineering</strong> <br />
            Amity University, India | (2017-2021) <br />
            <span className="text-sm text-muted-foreground">Major Project: Music Genre Classification using AI</span>
          </p>
        </ResumeCard>

        {/* CERTIFICATIONS */}
        <ResumeCard title="Certifications" className="col-span-6 md:col-span-6">
          <ul className="list-disc pl-5">
            <li>Google Data Analytics (2023)</li>
            <li>AWS Cloud Foundations (2022)</li>
            <li>IBM Data Fundamentals (2025)</li>
            <li>Bloomberg BMC + ESG (2025)</li>
            <li>Google AI Essentials (2024)</li>
            <li>NPTEL Social Network (2021)</li>
          </ul>
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