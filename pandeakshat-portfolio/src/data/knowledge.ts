export const knowledgeSections = [
  {
    id: "ai-data",
    title: "AI & Data Science",
    subtitle: "Learning resources, tools, and papers",
    resources: [
      { name: "Fast.ai Course", link: "https://course.fast.ai/", type: "Course", tags: ["AI", "ML", "Course"] },
      { name: "DeepLearning.AI Specialization", link: "https://www.deeplearning.ai/", type: "Course", tags: ["ML", "Neural Networks"] },
      { name: "Hugging Face Hub", link: "https://huggingface.co/", type: "Tool", tags: ["AI", "NLP"] },
      { name: "Papers with Code", link: "https://paperswithcode.com/", type: "Papers", tags: ["Research", "ML"] },
    ],
  },
  {
    id: "development",
    title: "Development Tools",
    subtitle: "Frameworks, libraries, and productivity",
    resources: [
      { name: "Astro Docs", link: "https://astro.build/", type: "Framework", tags: ["Web", "Frontend"] },
      { name: "Shadcn UI", link: "https://ui.shadcn.com/", type: "UI", tags: ["Design", "Frontend"] },
      { name: "Framer Motion", link: "https://www.framer.com/motion/", type: "Animation", tags: ["Frontend", "UI"] },
    ],
  },
  {
    id: "learning-tracker",
    title: "Learning Tracker",
    subtitle: "Ongoing studies and skill development",
    resources: [
      { name: "Reinforcement Learning (Coursera)", type: "Course", progress: "45%", tags: ["AI", "RL"] },
      { name: "LangChain Agents", type: "Experiment", progress: "70%", tags: ["LLM", "LangChain", "AI"] },
      { name: "Docker & FastAPI Deployment", type: "Workshop", progress: "30%", tags: ["DevOps", "Backend"] },
    ],
  },
]
