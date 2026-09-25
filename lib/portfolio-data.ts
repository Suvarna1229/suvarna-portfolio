export const personal = {
  name: 'Suvarna Kukkala',
  role: 'Aspiring Software Engineer',
  tagline: 'Final-Year Computer Science & Engineering Student',
  intro:
    'Passionate about Java, Python, DSA, Web Development, AI and Machine Learning.',
  email: 'suvarnak1229@gmail.com',
  socials: {
    linkedin: 'https://www.linkedin.com/in/suvarna-kukkala-7a5655328/',
    github: 'https://github.com/Suvarna1229',
    leetcode: 'https://leetcode.com/u/238r1a05f9/',
  },
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export const aboutParagraphs = [
  'I am a final-year Computer Science and Engineering student with a strong interest in software engineering, problem solving, Java, Python and Data Structures & Algorithms.',
  'I am continuously improving my programming and development skills while exploring modern technologies including Artificial Intelligence, Machine Learning, Generative AI, Large Language Models, RAG and Multi-Agent Systems.',
  'I have completed virtual internship experiences and worked on academic projects involving AI, machine learning, healthcare systems and cloud technologies.',
  'I am interested in building practical software solutions and continuously learning new technologies.',
]

export const education = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science and Engineering',
    institution: 'CMR Engineering College',
    location: 'Hyderabad',
    status: 'Final-Year Student',
  },
  {
    degree: 'Intermediate',
    field: null,
    institution: 'Sri Chaitanya Junior College',
    location: 'Hyderabad',
    status: null,
  },
  {
    degree: 'School Education',
    field: null,
    institution: 'Swathi High School',
    location: 'Hyderabad',
    status: null,
  },
]

export const skillGroups = [
  { title: 'Programming', items: ['Java', 'Python', 'C'] },
  {
    title: 'Testing',
    items: ['Manual Testing', 'Test Cases', 'SDLC', 'Unit Testing'],
  },
  { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'] },
  { title: 'Backend', items: ['Node.js'] },
  { title: 'Database', items: ['MySQL', 'SQL'] },
  {
    title: 'Tools & Technologies',
    items: [
      'VS Code',
      'GitHub',
      'Google Cloud',
      'Jupyter Notebook',
      'Google Colab',
      'Streamlit',
      'Google Cloud Console',
      'GitHub Desktop',
    ],
  },
]

export const experience = [
  {
    title: 'Virtual Intern – Associate Cloud Engineering',
    company: 'L4G (Learn for Growth)',
    period: 'May 2026 – July 2026',
    points: [
      'Virtual internship focused on Associate Cloud Engineering.',
      'Hands-on exposure to Google Cloud technologies.',
      'Worked with GCP networking, Cloud Run, Load Balancing, Cloud Storage, Compute Engine and IAM.',
      'Gained experience with application deployment and cloud computing.',
      'Earned multiple Google Cloud Skill Badges.',
    ],
  },
  {
    title: 'Web Development Intern',
    company: 'Talent Trek E-Learning',
    period: 'May 2025 – August 2025',
    points: [
      'Three-month web development internship.',
      'Worked with HTML, CSS and JavaScript.',
      'Gained practical exposure to front-end web development.',
      'Worked on real-world project-oriented tasks.',
    ],
  },
]

export const projects = [
  {
    title:
      'Detecting Electrocardiogram Arrhythmia Empowered with Weighted Federated Learning',
    type: 'Academic Project',
    description:
      'An ECG arrhythmia detection system using a hybrid CNN and BiGRU approach with Weighted Federated Learning. The system focuses on distributed model training while preserving data privacy and performs ECG signal preprocessing and classification.',
    tech: [
      'Python',
      'Machine Learning',
      'Deep Learning',
      'CNN',
      'BiGRU',
      'Weighted Federated Learning',
      'Flask',
    ],
    features: [
      'CNN for feature extraction',
      'BiGRU for temporal analysis',
      'Weighted Federated Learning for distributed learning',
      'Flask-based web deployment',
      'ECG signal preprocessing',
      'Arrhythmia classification',
    ],
    accuracy: 'Reported Accuracy: ~95.66%',
    disclaimer:
      'Academic/research prototype — not intended for clinical diagnosis.',
  },
  {
    title: 'Multi-Agent AI Healthcare Operations and Hospital Management System',
    type: 'Academic AI Prototype',
    description:
      'An AI-powered healthcare operations and hospital management prototype combining Machine Learning, Generative AI, Retrieval-Augmented Generation (RAG), and Multi-Agent Systems.',
    tech: [
      'Python',
      'Machine Learning',
      'Generative AI',
      'RAG',
      'Multi-Agent Systems',
      'LLMs',
      'NLP',
    ],
    features: [
      'Patient Agent, Appointment Agent, Doctor Agent, Resource Management Agent and Medical RAG Agent',
      'Multi-Agent Orchestrator routes requests to specialized agents',
      'Machine Learning provides patient risk predictions',
      'RAG retrieves information from hospital documents',
      'Generative AI produces useful responses',
      'Works with patient records, appointments, doctors, billing and inventory',
    ],
    accuracy: null,
    disclaimer:
      'Prototype only — not deployed in a real hospital and does not provide medical diagnosis.',
  },
]

export const certifications = [
  { title: 'Google Cloud Career Launchpad', issuer: 'Google Cloud' },
  { title: 'Agentforce Specialist', issuer: 'Salesforce' },
  { title: 'Cognizant Technoverse Hackathon', issuer: 'Cognizant' },
  { title: 'Web Development', issuer: 'Talent Trek' },
  { title: 'Associate Cloud Engineering', issuer: 'L4G' },
  {
    title: 'AI Careers for Women',
    issuer: 'Microsoft, SAP, Edunet Foundation',
  },
  {
    title: 'Google Cloud Certified Generative AI Leader',
    issuer: 'Google Cloud',
  },
  { title: "HAVANA'26 Hackathon", issuer: 'GITAM University' },
  {
    title: 'Campus Recruitment Training (CRT)',
    issuer: 'ElevateBox',
    focus: 'Full Stack, Web Development, DSA and Problem Solving',
  },
]

export const achievements = {
  hackathons: [
    'Cognizant Technoverse Hackathon',
    "HAVANA'26 Hackathon",
    'Smart India Hackathon (SIH) participation',
  ],
}
