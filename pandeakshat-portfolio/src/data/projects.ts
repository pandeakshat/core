const projects = [
  {
    id: "customer-intelligence",
    title: "Customer Intelligence Hub",
    summary:
      "Comprehensive analytics platform integrating churn prediction, sentiment analysis, and segmentation under one unified dashboard.",
    stack: ["Python", "Streamlit", "Scikit-learn", "Plotly"],
    status: "Active",
    demo: "https://customer-intelligence-demo.streamlit.app/",
    repo: "https://github.com/pandeakshat/customer-intelligence",
    readme: `<h3>Overview</h3><p>The Customer Intelligence Hub unifies multiple customer-focused ML analyses—churn, segmentation, sentiment, and geospatial insights—into a single modular dashboard. Built for enterprise-ready analytics with an extensible design.</p>`,
  },
  {
    id: "bse-simulator",
    title: "BSE Simulator",
    summary:
      "Interactive simulation replicating Bristol Stock Exchange market dynamics for educational and research use.",
    stack: ["Python", "Streamlit"],
    status: "Completed",
    demo: "https://bse-simulator-demo.streamlit.app/",
    repo: "https://github.com/pandeakshat/bse-simulator",
    readme: `<h3>Simulation Logic</h3><p>Reproduces agent-based trading behavior based on the Bristol Stock Exchange model by Dave Cliff. Implements a configurable market for exploring trading algorithms and market equilibrium behavior.</p>`,
  },
  {
    id: "sales-dashboard",
    title: "Sales Dashboard",
    summary:
      "Business intelligence dashboard that visualizes regional and category-level sales, profit, and performance metrics.",
    stack: ["Python", "Streamlit", "Pandas", "Plotly"],
    status: "Active",
    demo: "https://sales-dashboard-demo.streamlit.app/",
    repo: "https://github.com/pandeakshat/sales-dashboard",
    readme: `<h3>Dashboard Features</h3><p>Includes real-time filtering by region, category, and timeframe. Automatically computes KPIs and highlights underperforming segments to support business decision-making.</p>`,
  },
  {
    id: "projectflow",
    title: "ProjectFlow",
    summary:
      "Lightweight internal management and progress tracking app for all PandeAkshat projects.",
    stack: ["Next.js", "Supabase", "TailwindCSS"],
    status: "Active",
    demo: "https://projectflow.pandeakshat.com/",
    repo: "https://github.com/pandeakshat/projectflow",
    readme: `<h3>Purpose</h3><p>Acts as the operational layer for PandeAkshat — tracking milestones, tasks, and version updates across all projects. Built with Next.js and Supabase for minimal setup and live data sync.</p>`,
  },
  {
    id: "data-intelligence",
    title: "Data Audit & Intelligence Tool",
    summary:
      "Streamlit-based application for dataset validation, readiness scoring, and automated feature intelligence.",
    stack: ["Python", "Streamlit", "Pandas", "NumPy"],
    status: "In Development",
    demo: "https://data-intelligence-demo.streamlit.app/",
    repo: "https://github.com/pandeakshat/data-intelligence",
    readme: `<h3>Functionality</h3><p>Performs data validation, conformity checks, and machine-learning readiness scoring. Provides detailed audit summaries and recommendations for dataset improvement.</p>`,
  },
]
export default projects
