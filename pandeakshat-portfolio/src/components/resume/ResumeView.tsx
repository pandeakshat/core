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
          subtitle="Data Scientist | Cloud & AI Engineer"
          className="col-span-full"
        >
          <p>📍 Pune, India · 📧 mail@pandeakshat.com · 📱 +91-9958091895</p>
          <p>🌐 Portfolio · LinkedIn · GitHub</p>
          <br />
          <p>
            <strong>Profile Summary:</strong> <br />
            Data Scientist with 3+ years’ experience in analytics and AI product
            development. Skilled in <strong>Python, SQL</strong>, and{" "}
            <strong>cloud platforms (AWS, GCP, Azure)</strong> for building data
            pipelines, machine learning models, and LLM applications.
            Experienced in automation, dashboarding, and deploying AI workflows
            that improve efficiency and decision-making.
          </p>
        </ResumeCard>


        {/* EXPERIENCE */}
        <ResumeCard title="Experience" className="col-span-full">
          <p>
            <strong>Head of Development — Dualchain (London)</strong> <br /> Aug
            2022 – Present
          </p>
          <ul className="list-disc pl-5">
            <li>
              Built blockchain analytics dashboards improving transaction speed
              by 15% and adoption by 20%.
            </li>
            <li>
              Automated data pipelines across AWS + MongoDB; created dashboards
              using Python + SQL + Tableau.
            </li>
          </ul>
          <p>
            <strong>Night Auditor — Sloane Square Hotel (London)</strong> <br />{" "}
            Nov 2023 – Jun 2025
          </p>
          <ul className="list-disc pl-5">
            <li>
              Automated nightly reconciliations using Python + Excel, reducing
              processing time by 25–37%.
            </li>
          </ul>
          <p>
            <strong>
              Senior Customer Service Advisor — Homes for Students, UK (London)
            </strong>{" "}
            <br /> Apr 2022 – Nov 2023
          </p>
          <ul className="list-disc pl-5">
            <li>
              Managed operations for 100+ residents, improving cross-team
              efficiency by <strong>20%</strong>.
            </li>
            <li>
              Implemented analytics-based KPI tracking for finance and
              logistics.
            </li>
          </ul>
        </ResumeCard>
        
        {/* SKILLS */}
        <ResumeCard title="Skills" className="col-span-6 md:col-span-6">
          <p>
            <strong>Programming & AI:</strong> Python, TensorFlow, PyTorch,
            LangChain, Hugging Face
          </p>
          <p>
            <strong>Cloud & Databases:</strong> AWS, GCP, Azure, MongoDB,
            Firebase
          </p>
          <p>
            <strong>MLOps & Dev:</strong> FastAPI, Docker, GitHub Actions,
            Streamlit, Tableau, Power BI
          </p>
          <p>
            <strong>Data Engineering:</strong> ETL, Data Warehouses, Spark
            (basic)
          </p>
        </ResumeCard>

        {/* PROJECTS */}
        <ResumeCard title="Projects" className="col-span-6 md:col-span-6">
          <ul className="list-disc pl-5">
            <li>Customer Analytics Dashboard (Streamlit + SQL)</li>
            <li>Carbon Chain (Python + Web3 + Streamlit)</li>
            <li>BSE Simulator (FinTech Workshop App)</li>
          </ul>
        </ResumeCard>

        {/* EDUCATION */}
        <ResumeCard title="Education" className="col-span-6 md:col-span-6">
          <p>
            <strong>M.Sc. Financial Technology with Data Science</strong> —
            University of Bristol (2021–2023)
          </p>
          <p>
            Thesis: Analysis & Indexing of Blockchain Technologies using Carbon
            Footprint
          </p>
          <p>
            <strong>B.Tech Computer Science & Engineering</strong> — Amity
            University (2017–2021)
          </p>
          <p>
            Thesis: Analysis & Indexing of Blockchain Technologies using Carbon
            Footprint
          </p>
        </ResumeCard>

        {/* CERTIFICATIONS */}
        <ResumeCard title="Certifications" className="col-span-6 md:col-span-6">
          <ul className="list-disc pl-5">
            <li>Google Data Analytics (2023)</li>
            <li>AWS Cloud Foundations (2022)</li>
            <li>Bloomberg Market Concepts + ESG (2025)</li>
            <li>IBM Data Fundamentals (2025)</li>
            <li>NPTEL Social Network Analysis (2021)</li>
          </ul>
        </ResumeCard>

        {/* INTERESTS */}
        <ResumeCard title="Interests" className="col-span-6 md:col-span-6">
          <p>
            Anime · Gaming · Cooking · Podcasts · Poetry · Travel · Digital
            Trends
          </p>
        </ResumeCard>
      </BentoGrid>

      {/* Floating Buttons */}
      <motion.a
        href="/resume.pdf"
        download
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 left-5 z-50 flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/80 backdrop-blur-sm shadow-soft hover:bg-accent/10 transition"
      >
        <FileDown className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium">Download PDF</span>
      </motion.a>

      <BackHomeButton client:load position="bottom-right" />
    </div>
  )
}
