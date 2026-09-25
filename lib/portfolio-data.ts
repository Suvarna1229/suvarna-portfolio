export const personal = {
  name: 'Suvarna Kukkala',
  role: 'Aspiring Software Engineer',
  tagline: 'Computer Science & Engineering Student',
  intro:
    'Passionate about Java, Python, DSA, Web Development, AI & Machine Learning.',
  email: 'suvarnak1229@gmail.com',
  socials: {
    linkedin: 'https://www.linkedin.com/in/suvarna-kukkala-7a5655328/',
    github: 'https://github.com/Suvarna1229',
    leetcode: 'https://leetcode.com/u/238r1a05f9/',
  },
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
]

export const aboutParagraphs = [
  'I\u2019m a Computer Science & Engineering student with an interest in software development, problem solving, artificial intelligence, machine learning and cloud technologies.',
  'I am continuously improving my programming and development skills while exploring modern technologies including Generative AI, Large Language Models, RAG and Multi-Agent Systems.',
]

export const education = [
  {
    degree: 'B.Tech',
    field: 'Computer Science & Engineering',
    institution: 'CMR Engineering College',
    period: '2023 \u2013 2027',
  },
  {
    degree: 'Intermediate',
    field: null,
    institution: 'Sri Chaitanya Junior College',
    period: '2021 \u2013 2023',
  },
  {
    degree: 'School',
    field: null,
    institution: 'Swathi High School',
    period: '2021',
  },
]

export const certifications = [
  {
    title: 'Google Cloud Certified Generative AI Leader',
    issuer: 'Google Cloud',
  },
  { title: 'Associate Cloud Engineering Virtual Internship', issuer: 'L4G' },
  {
    title: 'AI Careers for Women',
    issuer: 'Microsoft, SAP & Edunet Foundation',
  },
  { title: 'Agentforce Specialist', issuer: 'Salesforce' },
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

export const projects = [
  {
    title:
      'Detecting Electrocardiogram Arrhythmia Empowered with Weighted Federated Learning',
    description:
      'A machine learning project for ECG arrhythmia detection that combines CNN-based feature extraction with BiGRU temporal analysis, trained using Weighted Federated Learning to support distributed, privacy-preserving model training.',
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
      'ECG signal preprocessing and arrhythmia classification',
      'CNN for feature extraction, BiGRU for temporal analysis',
      'Weighted Federated Learning for distributed training',
      'Flask-based web interface',
    ],
  },
  {
    title: 'Multi-Agent AI Healthcare Operations and Hospital Management System',
    description:
      'A prototype AI-based healthcare and hospital management system that uses specialized agents for patient management, appointments, doctors, resources and hospital document-based assistance.',
    tech: [
      'Python',
      'Machine Learning',
      'Generative AI',
      'RAG',
      'LLMs / NLP',
      'Multi-Agent Systems',
    ],
    features: [
      'Specialized agents for patients, appointments, doctors and resources',
      'Orchestrator that routes requests to the right agent',
      'RAG-based assistant over hospital documents',
    ],
  },
]
