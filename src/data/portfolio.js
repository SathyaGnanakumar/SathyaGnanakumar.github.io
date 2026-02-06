export const portfolioData = {
  nav: [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Work Experience' },
    { id: 'footer', label: 'Contact' }
  ],
  hero: {
    heading: "Hello there, I'm Sathya!",
    subheading: 'CS Major @ University of Maryland',
    cta: 'About Me',
    image: '/images/hero.jpg',
    imageAlt: "Sathya's Profile Picture"
  },
  about: {
    title: 'About Me',
    image: '/images/about.jpg',
    imageAlt: 'Sathya Gnanakumar',
    paragraphs: [
      "Hello! I'm Sathya Gnanakumar, a Computer Science student at the University of Maryland, pursuing a combined BS/MS degree. I'm deeply interested in machine learning, artificial intelligence, and their applications in domains like finance, sports, and social good.",
      "With over three years of internship experience and leading CS teaching assistant roles, I've developed strong technical skills in Java, Python, React, Flask, and deep learning frameworks like PyTorch and TensorFlow. I've contributed to projects implementing cutting-edge deep learning architectures, developed full stack applications, and created APIs to speed up product deployments.",
      "I'm passionate about solving real-world problems through AI, mentoring aspiring developers, and building scalable systems. I'm constantly seeking out new challenges—whether that's pushing the boundaries of applied ML or contributing to open-source tech for nonprofits."
    ],
    skills: [
      'Python',
      'Java',
      'React',
      'Flask',
      'PyTorch',
      'TensorFlow',
      'Machine Learning',
      'NLP',
      'AWS',
      'LLMs',
      'Multimodal Models',
      'SQL'
    ]
  },
  projects: {
    title: 'Projects',
    cards: [
      {
        id: 'route-vlm',
        title: 'RouteVLM: Cost-Aware Routing for Multimodal LLMs',
        summary: 'Introduced a two-stage cost-aware routing system for queries requiring multimodal LLMs.',
        image: '/images/RouteVLM.png',
        imageAlt: 'RouteVLM',
        tags: ['Python', 'LLM Routing', 'VLMs', 'Task Classification', 'Cost Aware Inference']
      },
      {
        id: 'citation-retrieval',
        title: 'Citation Retrieval System',
        summary: 'Designed a multi-agent citation retrieval pipeline that autonomously retrieves scholarly references for accurate citation.',
        image: '/images/citation.png',
        imageAlt: 'Citation Retrieval',
        tags: ['Python', 'Multi-Agent System', 'Hybrid Retrieval', 'DSPy', 'LLMs']
      },
      {
        id: 'capitalone-hackathon',
        title: 'ePhishient',
        summary: 'Engineered a full-stack web application offering dynamic phishing email tracking capabilities for corporate security.',
        image: '/images/HackathonImage2.png',
        imageAlt: 'Capital One Hackathon',
        tags: ['React', 'Flask', 'PostgreSQL', 'Twilio', 'Prompt Engineering', 'LLMs']
      },
      {
        id: 'collision-avoidance',
        title: 'Collision Avoidance Challenge',
        summary: 'Implemented deep learning models to predict satellite collision risk using Conjuction Data Messages (CDMs).',
        image: '/images/Collision472Project.png',
        imageAlt: 'Collision Avoidance Challenge',
        tags: ['Python', 'Feature Selection', 'Deep Learning', 'Transformers', 'Research']
      },
      {
        id: 'aerial-object-detection',
        title: 'Aerial Object Detection',
        summary: 'Developed a contextualized computer vision model to accurately classify aerial objects.',
        image: '/images/balloon.png',
        imageAlt: 'Aerial Object Detection',
        tags: ['Python', 'PyTorch', 'YOLOv5', 'Object Detection', 'Computer Vision']
      },
      {
        id: 'tennis-statistics',
        title: 'What Statistics Matter in Tennis?',
        summary: 'Conducted a comprehensive analysis of tennis match counting statistics to identify the most significant determinants of match victory.',
        image: '/images/tennisDS.png',
        imageAlt: 'Analyzing Key Tennis Statistics',
        tags: ['Python', 'Pandas', 'Seaborn', 'Matplotlib', 'Machine Learning', 'Data Science']
      },
      {
        id: 'umd-next',
        title: 'UMD Next',
        summary: 'A UI/UX design project focused on improving student campus navigation at the University of Maryland through a redesign of the NextBus app.',
        image: '/images/UMDNext.png',
        imageAlt: 'UMD Next Project',
        tags: ['Figma', 'UI/UX Design', 'Prototyping', 'User Research', 'Wireframing']
      }
    ],
    modalData: {
      'route-vlm': {
        title: 'RouteVLM: Cost-Aware Routing for Multimodal LLMs',
        image: '/images/RouteVLM.png',
        description: '',
        tags: [
          'Python',
          'LLM Routing',
          'Vision-Language Models (VLMs)',
          'Cost-Aware Inference',
          'DistilBERT',
          'Llama-3',
          'Qwen-VL',
          'Task Classification',
          'MMCode',
          'MathVista',
          'MTVQA',
          'TextVQA'
        ],
        highlights: [
          'Designed a two-stage cost-aware routing system that dynamically assigns multimodal queries to either specialized small models or a large generalist VLM based on query difficulty and task type.',
          'Implemented Stage 1 escalation using a win-prediction model (Llama-3-8B) to estimate when a strong generalist model is required, reserving expensive inference for complex reasoning queries.',
          'Built a fast text-only task classifier using a fine-tuned DistilBERT model, achieving 99.5% accuracy and Macro F1 for routing queries to task-specific expert models.',
          'Evaluated multimodal, in-context learning, and fine-tuned classification approaches, demonstrating that lightweight supervised routing outperforms VLM-based classifiers in both latency and accuracy.',
          'Validated the system on multimodal benchmarks (MMCode, MathVista, MTVQA, TextVQA), maintaining performance comparable to a large VLM while offloading ~30% of queries to cheaper expert models.'
        ],
        link: 'https://github.com/SathyaGnanakumar/routevlm',
        linkText: 'View Project'
      },
      'citation-retrieval': {
        title: 'Citation Retrieval System',
        image: '/images/citation.png',
        description: '',
        tags: [
          'Python',
          'Multi-Agent Systems',
          'Hybrid Retrieval',
          'Dense Embeddings',
          'LLM Reranking',
          'DSPy Prompt Optimization',
          'LangGraph',
          'Retrieval-Augmented Generation (RAG)',
          'Recall@K',
          'MRR'
        ],
        highlights: [
          'Designed a multi-agent citation retrieval pipeline that autonomously retrieves, aggregates, reranks, and selects scholarly references from manuscript excerpts using a closed-world formulation.',
          'Implemented hybrid retrieval with parallel sparse (BM25) and dense (E5-Large, SPECTER-2) retrievers, fused via Reciprocal Rank Fusion (RRF) to combine lexical and semantic relevance.',
          'Integrated LLM-based reranking and a DSPy-powered citation selector that enforces constrained candidate choice, reducing hallucinated or fabricated citations.',
          'Built a self-improving retrieval loop with DSPy prompt optimization (BootstrapFewShot, MIPROv2), enabling continual improvement without retraining base models.',
          'Evaluated on the ScholarCopilot benchmark, achieving Recall@10 of 19.7%, Recall@20 of 29.5%, and the highest MRR (11.4%) among compared baselines, outperforming individual retrievers at broader recall windows.'
        ],
        link: 'https://github.com/SathyaGnanakumar/CitationRetrieval',
        linkText: 'View Project'
      },
      'capitalone-hackathon': {
        title: 'Capital One Hackathon',
        image: '/images/Hackathon.png',
        description: '',
        tags: [
          'React',
          'Flask',
          'PostgreSQL',
          'Twilio',
          'LLMs',
          'Phishing',
          'Cybersecurity',
          'Hackathon',
          'Prompt Engineering',
          'Database Design',
          'Product Management',
          'User Feedback'
        ],
        highlights: [
          'Generated a phishing email campaign system to test employee awareness and response to phishing attacks',
          'Developed a React frontend that includes phishing campaign generation and monitoring of campaign effectiveness for administrators',
          'Stored employee data in PostgreSQL and used Flask to handle backend operations and API requests to the frontend',
          'Implemented email sending functionality using Twilio to send employees test phishing emails',
          'Presented the solution to Capital One executives, receiving positive feedback on innovation.'
        ],
        link: 'https://drive.google.com/file/d/1miBCH_-RHupKA0Wec0jjXNktUh7wTsGs/view?usp=sharing',
        linkText: 'View Presentation'
      },
      'collision-avoidance': {
        title: 'Collision Avoidance Challenge',
        image: '/images/Collision472Project.png',
        description: 'This project involved designing and implementing a real-time collision avoidance system for autonomous vehicles. We focused on sensor data fusion from LiDAR and camera inputs, employing advanced algorithms to predict potential collisions and generate optimal evasive maneuvers. The system was simulated in a virtual environment, demonstrating its effectiveness in complex traffic scenarios.',
        tags: [
          'Python',
          'Feature Selection',
          'Deep Learning',
          'Data Cleaning',
          'Transformers',
          'Random Forest',
          'Long Short-Term Memory (LSTM)',
          'Fully Connected Neural Network (FCNN)',
          'Satellite Collision'
        ],
        highlights: [
          'Created and implemented both Long Short-Term Memory (LSTM) and Fully-Connected (FC) models, along with a Time-Series Transformer, for satellite collision risk prediction.',
          'Performed feature selection using LightGBM and RandomForest Regressors to identify the most important factors contributing to collision risk.',
          'Discovered that the Fully-Connected (FC) model demonstrated superior performance compared to LSTM models in predicting satellite collision risk, effectively capturing complex data patterns.',
          'Surpassed competition baselines as our model ranked 8th on the Collision Avoidance Challenge leaderboard.',
          'Delivered a research paper detailing the methodology, results, and analysis of the project.'
        ],
        link: 'https://github.com/lakewood999/cmsc472-project/tree/main',
        linkText: 'View Project'
      },
      'aerial-object-detection': {
        title: 'Aerial Object Detection',
        image: '/images/AOD.png',
        description: 'In this project, I built an aerial object detection system capable of identifying various objects (e.g., vehicles, buildings, people) from drone imagery. The solution leverages deep learning models, specifically Convolutional Neural Networks (CNNs), to analyze high-resolution images. This has applications in urban planning, disaster response, and environmental monitoring.',
        tags: [
          'Python',
          'PyTorch',
          'Computer Vision',
          'Object Detection',
          'YOLOv5',
          'Transfer Learning',
          'Inferencing',
          'Northrop Grumman',
          'Aerial Imagery'
        ],
        highlights: [
          'Placed 1st in the Northrop Grumman Hack Week Challenge, presenting to UMD students, professors, and Northrop Grumman engineers.',
          'Developed a YOLOv5-based object detection model to reduce misclassifications in aerial imagery, with a specific focus on balloons.',
          'Implemented transfer learning techniques with contextual data augmentation to improve model accuracy.',
          'Utilized PyTorch for model training and inferencing and performed extensive testing using images and live videos.'
        ],
        link: 'https://github.com/SathyaGnanakumar/aerial-object-detection',
        linkText: 'View Project'
      },
      'tennis-statistics': {
        title: 'What Statistics Matter in Tennis?',
        image: '/images/tennisDS.png',
        description: 'This data analysis project involved extracting, cleaning, and analyzing extensive tennis match data to identify key performance indicators and player strategies. I used statistical methods and data visualization tools to uncover insights into serve efficiency, return game dominance, and match outcomes. The findings can be used for player performance evaluation and strategic game planning.',
        tags: [
          'Python',
          'Pandas',
          'NumPy',
          'Matplotlib',
          'Seaborn',
          'Exploratory Data Analysis',
          'Random Forest',
          'Ridge Regression',
          'Data Cleaning',
          'Hypothesis Testing',
          'Data Science',
          'Multiclass Classification'
        ],
        highlights: [
          'Consolidated ATP tennis match data from Kaggle and performed data cleaning to remove irrelevant and missing data columns.',
          'Analyzed various counting statistics such as aces, double faults, and break points to determine their impact on match outcomes.',
          'Employed ANOVA F-Test for feature selection and addressed multicollinearity using Variance Inflation Factor (VIF) analysis',
          'Observed that match winners generally served more aces and had more secure service games, consistent with expectations.'
        ],
        link: 'https://320project.github.io',
        linkText: 'View Project'
      },
      'umd-next': {
        title: 'UMD Next',
        image: '/images/UMDNext.png',
        description: "A comprehensive UI/UX design project aimed at revolutionizing the University of Maryland's NextBus app. This project focused on creating a more intuitive, accessible, and modern experience for students, faculty, and staff across all university digital platforms.",
        tags: [
          'Figma',
          'UI/UX Design',
          'Prototyping',
          'User Research',
          'Wireframing',
          'Design Systems',
          'Amazon'
        ],
        highlights: [
          'Placed 2nd out of 28 competing teams in the AmazonNext Design Challenge at the University of Maryland.',
          'Presented a complete redesign of the NextBus app to UMD students, staff, professors, and Amazon employees.',
          'Created innovative campus transportation solutions to improve user experience and accessibility, with a specific focus on those with disabilities.',
          'Designed a PowerPoint presentation showcasing Figma mockups and the design process.'
        ],
        link: 'https://drive.google.com/file/d/1BvVj2DrFUZYJuaVjcYjg-lEPYl6SEgeO/view',
        linkText: 'View Presentation'
      }
    }
  },
  experience: {
    title: 'Work Experience',
    items: [
      {
        date: 'Jun 2025 - Aug 2025',
        role: 'Software Engineer Intern',
        logo: 'https://img.logo.dev/capitalone.com?token=pk_I53NKKBqSnOQxFnDTePJCQ',
        logoAlt: 'Capital One Logo',
        bullets: [
          [
            { text: 'Designed an Excel to ' },
            { text: 'AVRO schema', highlight: true },
            { text: 'converter using ' },
            { text: 'React', highlight: true },
            { text: ', reducing dataset creation time by ' },
            { text: '5 seconds', highlight: true }
          ],
          [
            { text: 'Constructed a ' },
            { text: 'data pipeline', highlight: true },
            { text: ' to increase schema size limit, enabling batch processing of ' },
            { text: '1000+ element schemas', highlight: true }
          ],
          [
            { text: 'Utilized ' },
            { text: 'GraphQL', highlight: true },
            { text: ', ' },
            { text: 'Amazon S3', highlight: true },
            { text: ' and ' },
            { text: 'DynamoDB', highlight: true },
            { text: ' to efficiently distribute and save schemas uploaded to the UI' }
          ]
        ]
      },
      {
        date: 'May 2024 - Aug 2024',
        role: 'Software Engineer Intern',
        logo: 'https://img.logo.dev/linkedin.com?token=pk_I53NKKBqSnOQxFnDTePJCQ',
        logoAlt: 'LinkedIn Logo',
        bullets: [
          [
            { text: 'Created a ' },
            { text: 'bulk', highlight: true },
            { text: ' analyses ' },
            { text: 'API', highlight: true },
            { text: ' endpoint on the EKG team, decreasing analysis creation latency by ' },
            { text: '98 percent', highlight: true }
          ],
          [
            { text: 'Designed ' },
            { text: 'Python', highlight: true },
            { text: ' code to validate ' },
            { text: 'Marshmallow', highlight: true },
            { text: ' schemas and performed extensive testing using ' },
            { text: 'JSON', highlight: true },
            { text: ' metadata' }
          ],
          [
            { text: 'Reduced overhead by a factor of the ' },
            { text: 'analysis batch size', highlight: true },
            { text: ', accelerating high volume workflows and ' },
            { text: 'deployments', highlight: true }
          ]
        ]
      },
      {
        date: 'Jun 2023 - Aug 2023',
        role: 'Software Engineer Intern',
        logo: 'https://img.logo.dev/fidelity.com?token=pk_I53NKKBqSnOQxFnDTePJCQ',
        logoAlt: 'Fidelity Logo',
        bullets: [
          [
            { text: 'Worked as a SWE Intern on the ' },
            { text: 'Platform Engineering Team', highlight: true }
          ],
          [
            { text: 'Helped incorporate ' },
            { text: 'Nexthink', highlight: true },
            { text: ', an employee experience management software, into the Fidelity device environment' }
          ],
          [
            { text: 'Created a ' },
            { text: 'Google Chrome cache clear', highlight: true },
            { text: ' and ' },
            { text: 'Windows Restart script', highlight: true },
            { text: ' that runs every week' }
          ],
          [
            { text: 'Designed a ' },
            { text: 'dashboard', highlight: true },
            { text: ' that monitors Windows 11 pilot devices' }
          ]
        ]
      },
      {
        date: 'May 2022 - Dec 2023',
        role: 'Undergraduate Teaching Assistant',
        logo: 'https://img.logo.dev/umd.edu?token=pk_I53NKKBqSnOQxFnDTePJCQ',
        logoAlt: 'University of Maryland Logo',
        bullets: [
          [
            { text: 'Held ' },
            { text: 'biweekly', highlight: true },
            { text: ' discussion sessions for Object Oriented Programming I and II to ' },
            { text: '30', highlight: true },
            { text: ' students each semester' }
          ],
          [
            { text: 'Provided ' },
            { text: '50+', highlight: true },
            { text: ' office hours answering questions about class material and associated project implementation' }
          ],
          [
            { text: 'Introduced students to programming basics, ' },
            { text: 'data structures', highlight: true },
            { text: ', and implementing efficient code in ' },
            { text: 'Java', highlight: true },
            { text: ' using Eclipse' }
          ]
        ]
      }
    ]
  },
  footer: {
    name: 'Sathya',
    title: 'CS Major • ML Enthusiast • Curious Learner',
    copyright: '© 2025 Sathya. All rights reserved.',
    social: [
      {
        label: 'LinkedIn Profile',
        href: 'https://www.linkedin.com/in/sathya-gnana/',
        icon: 'linkedin'
      },
      {
        label: 'GitHub Profile',
        href: 'https://github.com/SathyaGnanakumar',
        icon: 'github'
      }
    ]
  }
};
