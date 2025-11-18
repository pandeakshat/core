// src/data/hire.js
import { Briefcase, Store, PenTool, Globe } from "lucide-react";

const hire = [
  {
    title: "Upwork",
    subtitle: "Freelance Data Science projects",
    href: "https://www.upwork.com/freelancers/~0103971d3d957d4ab7",
    icon: Briefcase, // ✅ Component, not string
  },
  {
    title: "Fiverr",
    subtitle: "AI, ML & Streamlit apps",
    href: "https://www.fiverr.com/iam_akshatpande",
    icon: Store,
  },
  {
    title: "Contra",
    subtitle: "Project-based collaborations",
    href: "https://contra.com/pandeakshat",
    icon: PenTool,
  },
  {
    title: "Gumroad",
    subtitle: "Digital tools & templates",
    href: "https://iamakshatpande.gumroad.com/",
    icon: Globe,
  },
];

export default hire;