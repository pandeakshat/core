import { BentoGrid } from "@/components/bento/BentoGrid"
import { BentoCard } from "@/components/bento/BentoCard"
import { Briefcase, Code, NotebookPen, Cpu, Send, User, Clock, Sparkles, Mail, Link } from "lucide-react"
import { BookOpen, Quote } from "lucide-react"

import TimeDisplay from "@/components/TimeDisplay"

export default function HomeBento() {
  return (
    <BentoGrid>
      {/* Row 1 */}
      
      <BentoCard
        className="lg:col-span-6 lg:row-span-0.5"
        title=" "
        subtitle=" "
      >
        <img
          src="/pandeakshat-2.jpg"
          alt="Featured Project Preview"
          className="rounded-lg w-full h-36 object-cover mb-3"
        />
        <h1 className="text-2xl font-bold text-center">Akshat Pande</h1>
        <h2 className="text-center">DATA SCIENTIST | AI & CLOUD ENGINEER</h2>
      </BentoCard>

      <BentoCard
        className="lg:col-span-12 lg:row-span-1"
      >
        <div
          className="flex flex-col items-center justify-center text-center">
            <h1 className="text-center text-4xl leading-relaxed text-foreground/80">Professional Summary</h1>
        <p className="text-md leading-relaxed text-foreground/80">
        Applied Data Scientist and Cloud Engineer with 3+ years of experience specializing in
        automation, practical ML systems, and scalable pipelines. Proven track record of
        deploying models for logistics and healthcare, reducing manual workloads and audit
        errors by up to 80%. Skilled in converting messy operational data into reliable,
        automated workflows using Python, SQL, and Cloud (AWS/Azure) infrastructure
        </p>
          
          </div>
          <br />

      </BentoCard>

<BentoCard
        className="lg:col-span-6 lg:row-span-2"
        title="Technical Arsenal"
        subtitle="Core Competencies"
        icon={<Cpu className="w-5 h-5" />}
      >
        <div className="flex flex-col gap-4 mt-2">
          
          {/* Languages & Frameworks */}
          <div className="space-y-1">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Languages & Frameworks
            </p>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="px-2 py-1 bg-secondary/30 rounded border border-border/50">Python (Pandas, NumPy)</span>
              <span className="px-2 py-1 bg-secondary/30 rounded border border-border/50">SQL</span>
              <span className="px-2 py-1 bg-secondary/30 rounded border border-border/50">Streamlit</span>
              <span className="px-2 py-1 bg-secondary/30 rounded border border-border/50">FastAPI</span>
            </div>
          </div>

          {/* Cloud & Engineering */}
          <div className="space-y-1">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Cloud & Engineering
            </p>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="px-2 py-1 bg-secondary/30 rounded border border-border/50">AWS & Azure</span>
              <span className="px-2 py-1 bg-secondary/30 rounded border border-border/50">Docker</span>
              <span className="px-2 py-1 bg-secondary/30 rounded border border-border/50">CI/CD</span>
              <span className="px-2 py-1 bg-secondary/30 rounded border border-border/50">ETL</span>
            </div>
          </div>

          {/* ML & Analytics */}
          <div className="space-y-1">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              ML & Analytics
            </p>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="px-2 py-1 bg-secondary/30 rounded border border-border/50">Scikit-learn</span>
              <span className="px-2 py-1 bg-secondary/30 rounded border border-border/50">TensorFlow</span>
              <span className="px-2 py-1 bg-secondary/30 rounded border border-border/50">Power BI</span>
              <span className="px-2 py-1 bg-secondary/30 rounded border border-border/50">Excel</span>
            </div>
          </div>

        </div>
      </BentoCard>

      {/* Row 2 */}
      <BentoCard
        href="/projects"
        className="lg:col-span-6"
        title="Projects"
        subtitle="Explore My Work"
        icon={<Code />}
      >
      </BentoCard>

      <BentoCard
        href="/blog"
        className="lg:col-span-6"
        title="Blog"
        subtitle="Read My Writings"
        icon={<NotebookPen />}
      >
      </BentoCard>

      <BentoCard
        href="/resume"
        className="lg:col-span-6"
        title="Resume"
        subtitle="Experience & Roles"
        icon={<Briefcase />}
      >
      </BentoCard>


      {/* Row 3 */}
      {/* <BentoCard
        href="/projects/featured"
        className="lg:col-span-6 lg:row-span-2 bg-gradient-to-br from-primary/10 to-accent/5"
        title="Featured Project"
        icon={<Sparkles />}
      >
        <img
          src="/featured-customer.png"
          alt="Featured Project Preview"
          className="rounded-lg w-full h-36 object-cover mb-3"
        />
        <p className="text-xl text-center leading-relaxed">
Customer Intelligence Hub        </p>
      </BentoCard>

      <BentoCard
        href="/blog/featured"
        className="lg:col-span-6 lg:row-span-2 bg-gradient-to-br from-primary/10 to-accent/5"
        title="Featured Article"
        icon={<NotebookPen />}
      >
        <img
          src="/featured-debugging.png"
          alt="Featured Article Preview"
          className="rounded-lg w-full h-28 object-cover mb-3"
        />
        <p className="text-xl text-center leading-relaxed">
          The Art of Debugging 
        </p>
      </BentoCard> */}

      {/* <BentoCard
        className="lg:col-span-6 lg:row-span-1"
        title="Now Working On"
        subtitle="Current Focus"
        icon={<Briefcase />}
      >
        <p className="text-sm leading-relaxed">
          Developing <strong>Data Intelligence</strong> — a dataset augmentation and audit tool for data scientists.
          Also exploring cloud LLM deployment pipelines for enterprise workflows.
        </p>
      </BentoCard> */}


{/* 
    <BentoCard
        className="lg:col-span-6 lg:row-span-1 bg-gradient-to-r from-primary/10 to-accent/10 flex items-center justify-center text-center"
        title="Quote "
        >
        <p className="text-base italic text-foreground/80 leading-relaxed">
            “Every model starts as a question — and ends as a story.”
        </p>
    </BentoCard> */}

      <BentoCard
        className="lg:col-span-6 lg:row-span-1"
      >
        <div className="flex items-center justify-center h-full">
                   <TimeDisplay />

        </div>

      </BentoCard>

      {/* <BentoCard
    href="/knowledge"
    className="lg:col-span-6 lg:row-span-1"
    title="Knowledge Hub"
    subtitle="Learn · Explore · Share"
    icon={<BookOpen />}
    >
    </BentoCard> */}
      {/* Row 4 */}

{/* --- MAIL (Networking) --- */}
      <BentoCard
        href="mailto:mail@pandeakshat.com"
        className="lg:col-span-6 flex flex-col justify-center"
        title="Get in Touch"
        subtitle="Networking"
        icon={<Mail className="w-5 h-5" />}
      >
        <p className="text-sm text-muted-foreground mt-2">
          Open for networking, collaborations, and strategic partnerships.
        </p>
      </BentoCard>

      {/* --- HIRE (Consulting) --- */}
      <BentoCard
        href="/hire"
        className="lg:col-span-6 lg:row-span-0.5 flex flex-col justify-center"
        title="Work Together"
        subtitle="Services"
        icon={<Send className="w-5 h-5" />}
      >
        <p className="text-sm text-muted-foreground mt-2">
          Available for consultancy, contractual work, and specialized projects.
        </p>
      </BentoCard>

      {/* --- CONNECT (Socials) --- */}
      <BentoCard
        href="/connect"
        className="lg:col-span-6 flex flex-col justify-center"
        title="Socials"
        subtitle="Online Presence"
        icon={<User className="w-5 h-5" />}
      >
        <p className="text-sm text-muted-foreground mt-2">
          Connect via LinkedIn, Twitter, GitHub, and YouTube.
        </p>
      </BentoCard>


    </BentoGrid>
  )
}
