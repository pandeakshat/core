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
        title="Akshat Pande"
        subtitle="Data Scientist | Cloud & AI Engineer"
        icon={<User />}
      >

      </BentoCard>

      <BentoCard
        className="lg:col-span-12 lg:row-span-1"
        title="Profile Summary"
        subtitle="Overview"
      >
        <p className="text-sm leading-relaxed text-foreground/80">
            Data Scientist with 3+ years’ experience in analytics and AI product development.  
            Skilled in <strong>Python, SQL</strong>, and <strong>cloud platforms (AWS, GCP, Azure)</strong> for building data pipelines, machine learning models, and LLM applications.  
            Experienced in automation, dashboarding, and deploying AI workflows that improve efficiency and decision-making.
        </p>
      </BentoCard>

      <BentoCard
        className="lg:col-span-6 lg:row-span-2"
        title="Core Skills"
        subtitle="Tech Stack"
        icon={<Cpu />}
      >
        <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
          <span>Python</span>
          <span>SQL</span>
          <span>TensorFlow</span>
          <span>PyTorch</span>
          <span>LangChain</span>
          <span>Hugging Face</span>
          <span>AWS / GCP / Azure</span>
          <span>Streamlit</span>
        </div>
        <p className="text-xs text-foreground/60 mt-4">
          Focused on end-to-end analytics, LLMs, and AI pipeline engineering.
        </p>
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
      <BentoCard
        href="/projects/featured"
        className="lg:col-span-6 lg:row-span-2 bg-gradient-to-br from-primary/10 to-accent/5"
        title="Featured Project"
        subtitle="Customer Intelligence Hub"
        icon={<Sparkles />}
      >
        <img
          src="/featured-customer.png"
          alt="Featured Project Preview"
          className="rounded-lg w-full h-36 object-cover mb-3"
        />
        <p className="text-sm leading-relaxed">
          A unified analytics framework designed to transform raw customer data into measurable business intelligence. It integrates data engineering, analytics, and visualization through modular components that deliver end-to-end insight into customer behavior, value, and engagement.
        </p>
      </BentoCard>

      <BentoCard
        href="/blog/featured"
        className="lg:col-span-6 lg:row-span-2 bg-gradient-to-br from-accent/10 to-card/80"
        title="Featured Article"
        subtitle="The Art of Debugging"
        icon={<NotebookPen />}
      >
        <img
          src="/featured-debugging.png"
          alt="Featured Article Preview"
          className="rounded-lg w-full h-28 object-cover mb-3"
        />
        <p className="text-sm leading-relaxed">
          Debugging isn’t just about fixing code — it’s about understanding yourself.
This essay explores how the process of identifying, analyzing, and correcting errors mirrors personal growth. Through the psychology, mindset, and art of debugging, it reveals how every failure — in code or life — can teach patience, clarity, and mastery.
        </p>
      </BentoCard>

      <BentoCard
        className="lg:col-span-6 lg:row-span-1"
        title="Now Working On"
        subtitle="Current Focus"
        icon={<Briefcase />}
      >
        <p className="text-sm leading-relaxed">
          Developing <strong>Data Intelligence</strong> — a dataset augmentation and audit tool for data scientists.
          Also exploring cloud LLM deployment pipelines for enterprise workflows.
        </p>
      </BentoCard>



    <BentoCard
        className="lg:col-span-6 lg:row-span-1 bg-gradient-to-r from-primary/10 to-accent/10 flex items-center justify-center text-center"
        title=" "
        subtitle="Quote of the Day"
        >
        <p className="text-base italic text-foreground/80 leading-relaxed">
            “Every model starts as a question — and ends as a story.”
        </p>
    </BentoCard>

      <BentoCard
        className="lg:col-span-6 lg:row-span-1"
        title="Time"
        subtitle="Live Moment"
        icon={<Clock />}
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <TimeDisplay />
            <p className="text-xs text-foreground/60 mt-2">
              A reminder that progress happens one iteration at a time.
            </p>
          </div>
        </div>
      </BentoCard>

          <BentoCard
    href="/knowledge"
    className="lg:col-span-6 lg:row-span-1"
    title="Knowledge Hub"
    subtitle="Learn · Explore · Share"
    icon={<BookOpen />}
    >
    </BentoCard>
      {/* Row 4 */}
      <BentoCard
        href="mailto:mail@pandeakshat.com"
        className="lg:col-span-6"
        title="Mail"
        subtitle="Get in touch directly"
        icon={<Mail />}
      >
      </BentoCard>

      <BentoCard
        href="/hire"
        className="lg:col-span-6 lg:row-span-0.5"
        title="Hire"
        subtitle="Freelance & Consulting"
        icon={<Briefcase />}
      >
      </BentoCard>

      <BentoCard
        href="/connect"
        className="lg:col-span-6"
        title="Connect"
        subtitle="Professional Network"
        icon={<Link />}
      >
      </BentoCard>




    </BentoGrid>
  )
}
