import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'FloWise AI Learning Assistant',
    description: 'Interactive educational chatbot serving as a knowledge assistant for AI fundamentals, trained on 15+ Q&A pairs covering ML, NLP, LLMs, and ethics.',
    longDescription: 'Interactive educational chatbot serving as a knowledge assistant for AI fundamentals, trained on 15+ Q&A pairs covering ML, NLP, LLMs, and ethics. Built using FloWise for robust logic flows and dialog management.',
    tags: ['FloWise AI', 'No-Code AI', 'Conversational AI', 'Dialog Flow'],
    githubUrl: 'https://github.com/hxppyKhoza',
    demoUrl: 'https://cloud.flowiseai.com/chatbot/e201f342-df6a-42f0-b2ba-70e25b1a68bd',
    imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop',
    icon: '',
    color: '#00d9ff',
    category: 'Chatbot & NLP'
  },
  {
    id: '2',
    title: 'MaizeGuard: Crop Health AI',
    description: 'Computer vision tool that scans maize leaves to detect health issues and provide actionable remedies, helping farmers protect their crops.',
    longDescription: 'MaizeGuard uses advanced computer vision to scan maize leaves, identifying diseases and health issues instantly. It provides actionable remedies, helping small-scale farmers protect their yields through intelligent agricultural AI.',
    tags: ['Computer Vision', 'Image Classification', 'Figma', 'Mobile Design', 'Agricultural AI'],
    githubUrl: 'https://github.com/hxppyKhoza',
    demoUrl: 'https://www.figma.com/make/P3KYxbae3r0CMAxRxLMPGw/MaizeGuard-Mobile-App-Design--Copy---Copy-?fullscreen=1',
    imageUrl: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800&auto=format&fit=crop',
    icon: '',
    color: '#00ff88',
    category: 'Computer Vision'
  },
  {
    id: '3',
    title: 'StoryForge AI Writer',
    description: 'Generative AI tool creating high-quality short stories, poems, and creative content using advanced prompt engineering techniques.',
    longDescription: 'StoryForge is a creative powerhouse that generates high-quality literary content. It uses sophisticated prompt engineering techniques to produce short stories and poetry with consistent tone and narrative flow.',
    tags: ['Generative AI', 'GPT', 'Prompt Engineering', 'Content Generation', 'YouWare'],
    githubUrl: 'https://github.com/hxppyKhoza',
    demoUrl: 'https://youware.app/project/rkxkk8uhfp?enter_from=share&invite_code=PIUFE4DA6E',
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800&auto=format&fit=crop',
    icon: '',
    color: '#b24bf3',
    category: 'Generative AI'
  },
  {
    id: '4',
    title: 'ResumeAI Pro',
    description: 'Intelligent resume generation system creating ATS-optimized, industry-specific resumes with keyword optimization and multiple export formats.',
    longDescription: 'ResumeAI Pro streamlines the job application process by building intelligent, ATS-optimized resumes. It features keyword optimization and multiple export formats to ensure candidates stand out in automated screening systems.',
    tags: ['GPT API', 'ATS Optimization', 'Document Generation', 'YouWare', 'UI/UX Design'],
    githubUrl: 'https://github.com/hxppyKhoza',
    demoUrl: 'https://youware.app/project/qubu1nyjmz?enter_from=share&invite_code=69QYLIIMR2',
    imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop',
    icon: '',
    color: '#00d9ff',
    category: 'AI Applications'
  },
  {
    id: '5',
    title: 'SentiScope Analytics',
    description: 'Interactive NLP dashboard analyzing emotional tone in text data with multi-class sentiment classification, confidence scoring, and batch processing capabilities.',
    longDescription: 'CAPSTONE PROJECT: SentiScope is an advanced NLP analytics dashboard. It offers multi-class sentiment classification, confidence scoring, and batch processing, allowing researchers and businesses to analyze massive text datasets for emotional insights.',
    tags: ['Python', 'Streamlit', 'NLP', 'Hugging Face', 'Data Visualization', 'Sentiment Analysis'],
    githubUrl: 'https://github.com/hxppyKhoza',
    demoUrl: 'https://sentiment-dashboard777.streamlit.app/',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    icon: '',
    color: '#b24bf3',
    category: 'Data Science & NLP'
  },
  {
    id: '6',
    title: 'JCMS: Smart City Solutions',
    description: 'AI-powered civic engagement platform routing infrastructure complaints to relevant departments for prompt resolution, improving urban service delivery.',
    longDescription: 'The Johannesburg Complaint Management System (JCMS) routes urban infrastructure issues to correct departments using AI classification. It leverages geolocation to improve service delivery and civic engagement.',
    tags: ['Next.js', 'AI Classification', 'Geolocation', 'Database', 'API Integration', 'Civic Tech'],
    githubUrl: 'https://github.com/hxppyKhoza',
    demoUrl: 'https://jcms-phi.vercel.app/',
    imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=800&auto=format&fit=crop',
    icon: '',
    color: '#00ff88',
    category: 'AI for Good'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Python', level: 98, category: 'Language' },
  { name: 'Machine Learning', level: 95, category: 'AI/ML' },
  { name: 'Generative AI', level: 96, category: 'AI/ML' },
  { name: 'NLP', level: 92, category: 'AI/ML' },
  { name: 'Computer Vision', level: 90, category: 'AI/ML' },
  { name: 'TensorFlow', level: 85, category: 'AI/ML' },
  { name: 'Prompt Engineering', level: 97, category: 'AI/ML' },
  { name: 'Data Analysis', level: 89, category: 'AI/ML' },
  { name: 'React/Next.js', level: 93, category: 'Frontend' },
  { name: 'API Integration', level: 88, category: 'Backend' },
  { name: 'Streamlit', level: 92, category: 'Tool' },
  { name: 'No-Code AI Tools', level: 88, category: 'Tool' },
  { name: 'Ethical AI', level: 85, category: 'Tool' }
];

export const BOOT_MESSAGES = [
  "SYSTEM_INITIALIZE: OK",
  "LOADING_KERNEL_MODULES... DONE",
  "ESTABLISHING_SECURE_CONNECTION... OK",
  "FETCHING_USER_PROFILE... SUCCESS",
  "INJECTING_NEURAL_RESOURCES... OK",
  "DECRYPTING_PORTFOLIO_DATA... 100%",
  "BYPASSING_FIREWALL... DONE",
  "WELCOME_BACK_HAPPY"
];