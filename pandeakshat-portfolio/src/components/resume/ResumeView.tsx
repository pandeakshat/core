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
          <p>🌐 Portfolio · LinkedIn · GitHub</p>
          <br />
          <p>
            <strong>Profile Summary:</strong> <br />
            Results-driven Data Analyst skilled in SQL, Python, and BI tools for
            building automated workflows and dashboards. Experienced in
            delivering actionable insights that improve decision-making and
            efficiency. Achieved 37% faster reporting and 20% higher product
            adoption through data automation and visualization initiatives.
          </p>
        </ResumeCard>

        {/* EXPERIENCE */}
        <ResumeCard title="Experience" className="col-span-full">
          <p>
            <strong>Head of Development — Dualchain (London, UK)</strong> <br />
            Aug 2022 – Present · Remote, Part-time
          </p>
          <ul className="list-disc pl-5">
            <li>
              Managed full lifecycle of decentralized analytics platforms,
              improving user adoption by 20%.
            </li>
            <li>
              Built Python + SQL + Tableau dashboards, increasing stakeholder
              visibility by 10%.
            </li>
            <li>
              Designed blockchain-based marketplaces, improving transaction
              efficiency by 15%.
            </li>
            <li>
              Collaborated with cross-functional teams to implement automation
              and analytics initiatives.
            </li>
          </ul>

          <p>
            <strong>Night Auditor — Sloane Square Hotel (London)</strong> <br />
            Nov 2023 – Jun 2025
          </p>
          <ul className="list-disc pl-5">
            <li>
              Automated nightly reconciliations using Python + Excel, reducing
              processing time by 25–37%.
            </li>
            <li>
              Monitored occupancy, revenue, and reconciliation accuracy KPIs.
            </li>
            <li>
              Streamlined transaction and reporting workflows across departments.
            </li>
          </ul>

          <p>
            <strong>
              Senior Customer Service Advisor — Homes for Students (London, UK)
            </strong>{" "}
            <br />
            Apr 2022 – Nov 2023
          </p>
          <ul className="list-disc pl-5">
            <li>
              Managed operations and data for 100+ residents, improving
              coordination efficiency by 20%.
            </li>
            <li>
              Developed analytics-based KPI dashboards for finance and logistics
              optimization.
            </li>
          </ul>
        </ResumeCard>

        {/* SKILLS */}
        <ResumeCard title="Skills" className="col-span-6 md:col-span-6">
          <p>
            <strong>Analytics & BI:</strong> SQL, Tableau, Power BI, Excel (Pivot,
            VLOOKUP, Macros)
          </p>
          <p>
            <strong>Programming & Data Science:</strong> Python (Pandas, NumPy,
            Scikit-learn, TensorFlow), Streamlit
          </p>
          <p>
            <strong>E-Commerce & KPIs:</strong> GMV, Sell-through, Margins,
            Returns %, Stock Health, Lifecycle Analysis
          </p>
          <p>
            <strong>Cloud & Databases:</strong> AWS, MongoDB, Firebase
          </p>
          <p>
            <strong>Tools & Collaboration:</strong> Git, Docker, Jupyter, VS Code
          </p>
        </ResumeCard>

        {/* PROJECTS */}
        <ResumeCard title="Projects" className="col-span-6 md:col-span-6">
          <ul className="list-disc pl-5">
            <li>
              <strong>Customer Intelligence Hub</strong> — Streamlit · FastAPI ·
              SQL <br />
              Built a customer analytics app for churn prediction and automated
              KPI reporting with integrated data audit modules.
            </li>
            <li>
              <strong>Data Intelligence Hub</strong> — Streamlit · Pandas
              Profiling · PyCaret <br />
              Developed a toolkit for dataset validation, cleaning, and
              transformation into ML-ready formats.
            </li>
            <li>
              <strong>Carbon Chain</strong> — Python · Web3 · Streamlit <br />
              Built a blockchain tool to visualize and verify carbon offset data
              with real-time ESG analytics.
            </li>
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
            Major Project: Music Genre Classification using AI
          </p>
        </ResumeCard>

        {/* CERTIFICATIONS */}
        <ResumeCard title="Certifications" className="col-span-6 md:col-span-6">
          <ul className="list-disc pl-5">
            <li>Google Data Analytics (2023)</li>
            <li>AWS Cloud Foundations (2022)</li>
            <li>AI Essentials (2024)</li>
            <li>Bloomberg BMC + ESG (2025)</li>
            <li>IBM Data Fundamentals (2025)</li>
            <li>NPTEL Social Network Analysis (2021)</li>
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
