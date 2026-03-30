export default {
  siteMeta: {
    name: "Matha Charan P",
    titleSuffix: " — Full Stack Developer",
    tagline: "Building pragmatic, reliable web apps with calm, minimal UX.",
    hero: {
      oneLiner: "I design and ship clear, maintainable systems across the stack.",
      subtext: "Currently exploring reliable UI patterns, performance-first React, and disciplined problem solving.",
      ctaPrimary: "View Projects",
      ctaSecondary: "Download Resume",
    },
    email: "mathacharan001@gmail.com",
    resumePath: "/Matha_Charan_resume.pdf",
  },
  nav: [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'work', label: 'Work' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ],
  socials: {
    github: "https://github.com/mathacharan30",
    linkedin: "https://linkedin.com/in/matha-charan-p-1444b3258",
    leetcode: "https://leetcode.com/Matha_charan",
    instagram: "https://www.instagram.com/mathacharan?igsh=enU2aW12Z3czbmp5",
    twitter: "https://x.com/MathaCharan",
  },
  skills: {
    coreCS: [
      "Data Structures & Algorithms", 
      "Object-Oriented Programming", 
      "Java", 
      "C (Intermediate)"
    ],
    frontend: [
      "React & Redux", 
      "JavaScript (ES6+)", 
      "HTML5 & CSS3", 
      "Tailwind CSS"
    ],
    backend: [
      "Node.js & Express.js", 
      "Python (NumPy, Pandas, Matplotlib)",
      "MongoDB & SQL", 
      "Supabase (Vector Database)"
    ],
    aiTools: [
      "Retrieval-Augmented Generation (RAG)", 
      "Vector Embeddings", 
      "Gemini API", 
      "Git & Version Control", 
      "AWS (EC2, S3, IAM)"
    ],
  },
  experience: [
    {
      title: "Software Development Engineer Intern",
      company: "Aurigo Software Technologies",
      date: "Jun 2025 - Nov 2025",
      bullets: [
        "Enhanced Aurigo Masterworks using C#, ASP.NET, JavaScript, XML, and SQL.",
        "Diagnosed and resolved performance issues, increasing system reliability.",
      ],
    },
    {
      title: "Freelance & Personal Projects",
      company: "Self-Directed",
      date: "Feb 2025 - Present",
      bullets: [
        "Built and iterated on full‑stack projects with React, Node.js, and Supabase.",
        "Practiced data structures and algorithms; contributed to open-source fixes.",
      ],
    },
    {
      title: "Software Development Engineer Intern",
      company: "Novus Webspace Technologies",
      date: "Oct 2024 - Nov 2024",
      bullets: [
        "Optimized MERN-based platform APIs, reducing average response time by 30%.",
        "Implemented new features and resolved 15+ bugs, improving system stability by 40%.",
      ],
    }
  ],
  projects: [
    {
      title: "Campus Connect",
      desc: "Full-stack platform for resource sharing, alumni insights and Q&A.",
      tech: ["React", "Node", "Express", "MongoDB"],
      github: "https://github.com/mathacharan30/campus-connect",
      live: "https://campus-connect-drab-two.vercel.app/",
    },
    {
      title: "Supply Chain RAG System",
      desc: "RAG system using Supabase vector DB and Gemini API.",
      tech: ["React", "Node", "Supabase"],
      github: "https://github.com/mathacharan30/Major_Project",
      live: "https://supply-chain-chatbot-frontend-1.onrender.com/",
    },
    {
      title: "Assured Services Mysore – Business Website",
      desc: "Designed and developed a responsive business website for Assured Services Mysore as a freelance project, showcasing services, contact details, and brand presence.",
      tech: ["React", "Tailwind CSS", "JavaScript", "Hosting"],
      github: "https://github.com/mathacharan30/AssuredServices",
      live: "https://www.assuredservicesmys.com/",
    },
    {
      title: "SKMK College of Education – Official College Website",
      desc: "Designed and developed the official website for SKMK College of Education, featuring information about courses, admissions, faculty, campus activities, notices, and contact details with a responsive and user-friendly interface.",
      tech: ["React", "Tailwind CSS", "JavaScript", "Hosting"],
      github: "https://github.com/mathacharan30/SMKK-College",
      live: "https://www.kaginele.edu.in/",
    }
  ],
  labels: {
    skillsTitle: 'Skills',
    skills: {
      coreCS: 'Core CS',
      frontend: 'Frontend',
      backend: 'Backend & Data',
      aiTools: 'AI & Tools',
    },
    stats: {
      heading: 'GitHub & LeetCode',
      repos: 'Public Repos',
      stars: 'Stars',
      solved: 'Solved',
      viewGitHub: 'GitHub Profile',
      viewLeetCode: 'LeetCode Profile',
    },
    work: 'Experience',
    projects: { title: 'Projects', github: 'GitHub', live: 'Live' },
    contact: {
      heading: 'Contact',
      sendEmail: 'Send Email',
      resume: 'Download Resume',
    }
  }
};
