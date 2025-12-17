import { Project, Skill, TimelineItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "FloWise AI Learning Assistant",
    shortName: "FloWise Chatbot",
    description: "Interactive educational chatbot for AI fundamentals.",
    fullDescription: "Interactive educational chatbot serving as a knowledge assistant for AI fundamentals, trained on 15+ Q&A pairs covering ML, NLP, LLMs, and ethics.",
    techStack: ["FloWise AI", "No-Code AI", "Conversational AI", "Dialog Flow"],
    demoUrl: "https://cloud.flowiseai.com/chatbot/e201f342-df6a-42f0-b2ba-70e25b1a68bd",
    icon: "MessageCircle",
    category: "Chatbot & NLP",
    nodeSize: "medium",
    color: "#00d9ff",
    x: 20,
    y: 30
  },
  {
    id: 2,
    name: "MaizeGuard: Crop Health AI",
    shortName: "MaizeGuard",
    description: "Computer vision tool for detecting maize crop health issues.",
    fullDescription: "Computer vision tool that scans maize leaves to detect health issues and provide actionable remedies, helping farmers protect their crops.",
    techStack: ["Computer Vision", "Image Classification", "Figma", "Mobile Design", "Agricultural AI"],
    demoUrl: "https://www.figma.com/make/P3KYxbae3r0CMAxRxLMPGw/MaizeGuard-Mobile-App-Design--Copy---Copy-?fullscreen=1",
    icon: "Sprout",
    category: "Computer Vision",
    nodeSize: "large",
    color: "#00ff88",
    x: 80,
    y: 30
  },
  {
    id: 3,
    name: "StoryForge AI Writer",
    shortName: "StoryForge",
    description: "Generative AI tool for creating high-quality creative content.",
    fullDescription: "Generative AI tool creating high-quality short stories, poems, and creative content using advanced prompt engineering techniques.",
    techStack: ["Generative AI", "GPT", "Prompt Engineering", "Content Generation", "YouWare"],
    demoUrl: "https://youware.app/project/rkxkk8uhfp?enter_from=share&invite_code=PIUFE4DA6E",
    icon: "PenTool",
    category: "Generative AI",
    nodeSize: "medium",
    color: "#b24bf3",
    x: 20,
    y: 70
  },
  {
    id: 4,
    name: "ResumeAI Pro",
    shortName: "ResumeAI",
    description: "Intelligent resume generation system with ATS optimization.",
    fullDescription: "Intelligent resume generation system creating ATS-optimized, industry-specific resumes with keyword optimization and multiple export formats.",
    techStack: ["GPT API", "ATS Optimization", "Document Generation", "YouWare", "UI/UX Design"],
    demoUrl: "https://youware.app/project/qubu1nyjmz?enter_from=share&invite_code=69QYLIIMR2",
    icon: "FileText",
    category: "AI Applications",
    nodeSize: "medium",
    color: "#00d9ff",
    x: 80,
    y: 70
  },
  {
    id: 5,
    name: "SentiScope Analytics",
    shortName: "SentiScope",
    description: "Interactive NLP dashboard analyzing emotional tone in text data.",
    fullDescription: "Interactive NLP dashboard analyzing emotional tone in text data with multi-class sentiment classification, confidence scoring, and batch processing capabilities. This capstone project demonstrates end-to-end data science capabilities.",
    techStack: ["Python", "Streamlit", "NLP", "Hugging Face", "Data Visualization", "Sentiment Analysis"],
    demoUrl: "https://sentiment-dashboard777.streamlit.app/",
    icon: "BarChart",
    category: "Data Science & NLP",
    nodeSize: "extra-large",
    color: "#b24bf3",
    x: 50,
    y: 50
  },
  {
    id: 6,
    name: "JCMS: Smart City Solutions",
    shortName: "JCMS",
    description: "AI-powered civic engagement platform for infrastructure complaints.",
    fullDescription: "AI-powered civic engagement platform routing infrastructure complaints to relevant departments for prompt resolution, improving urban service delivery.",
    techStack: ["Next.js", "AI Classification", "Geolocation", "Database", "API Integration", "Civic Tech"],
    demoUrl: "https://jcms-phi.vercel.app/",
    icon: "Building",
    category: "AI for Good",
    nodeSize: "large",
    color: "#00ff88",
    x: 50,
    y: 15
  }
];

export const SKILLS: Skill[] = [
  { name: "Python", category: "AI/ML", proficiency: 95, isPrimary: true },
  { name: "Machine Learning", category: "AI/ML", proficiency: 90, isPrimary: true },
  { name: "Generative AI", category: "Generative AI", proficiency: 92, isPrimary: true },
  { name: "NLP", category: "AI/ML", proficiency: 88, isPrimary: true },
  { name: "Prompt Engineering", category: "Generative AI", proficiency: 94, isPrimary: true },
  { name: "Data Analysis", category: "AI/ML", proficiency: 85, isPrimary: true },
  { name: "TensorFlow", category: "AI/ML", proficiency: 80, isPrimary: false },
  { name: "Streamlit", category: "Development", proficiency: 85, isPrimary: false },
  { name: "React/Next.js", category: "Development", proficiency: 75, isPrimary: false },
  { name: "Computer Vision", category: "Specialized", proficiency: 78, isPrimary: false },
  { name: "API Integration", category: "Development", proficiency: 82, isPrimary: false },
  { name: "Ethical AI", category: "Specialized", proficiency: 85, isPrimary: false },
];

export const TIMELINE: TimelineItem[] = [
  { week: 1, title: "AI Concepts Chatbot", description: "Built FloWise Learning Assistant", projectId: 1 },
  { week: 2, title: "MaizeGuard Vision AI", description: "Developed crop health detection mobile designs", projectId: 2 },
  { week: 3, title: "Literary Generator", description: "Created StoryForge with advanced prompt engineering", projectId: 3 },
  { week: 4, title: "Resume Builder", description: "Engineered ResumeAI Pro for automated CV creation", projectId: 4 },
  { week: 5, title: "Capstone: Sentiment Dashboard", description: "Delivered SentiScope Analytics", projectId: 5 },
  { week: 6, title: "JCMS Civic Tech", description: "Finalized Smart City Solutions platform", projectId: 6 },
  { week: 8, title: "Bootcamp Graduate", description: "Ready for Opportunities", projectId: undefined },
];
