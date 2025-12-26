document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Handle click events
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Handle scroll events to auto-highlight current section
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id], #home, #about, #projects, #resume, #footer');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Adjust the offset for better highlighting (e.g., 200px)
            if (window.pageYOffset >= (sectionTop - 200)) { 
                current = section.getAttribute('id');
            }
        });
        
        // Special handling for footer - if we're near the bottom of the page
        const footer = document.getElementById('footer');
        if (footer) {
            const footerTop = footer.offsetTop;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            
            // If we're close to the bottom or have scrolled to footer
            if (window.pageYOffset >= (footerTop - windowHeight + 100) || // When footer comes into view
                window.pageYOffset + windowHeight >= documentHeight - 50) { // When scrolled near bottom
                current = 'footer';
            }
        }
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// Mobile menu toggle (add this to your script.js or keep it in index.html)
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Modal functionality (Add this to your script.js)
const projectData = {
    'route-vlm': {
        title: 'RouteVLM: Cost-Aware Routing for Multimodal LLMs',
        image: 'images/RouteVLM.png',
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
        image: 'images/citation.png',
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
            'MRR',
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
        image: 'images/Hackathon.png',
        tags: ['React', 'Flask', 'PostgreSQL', 'Twilio', 'LLMs', 'Phishing', 'Cybersecurity', 'Hackathon', 'Prompt Engineering', 'Database Design', 'Product Management', 'User Feedback'],
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
        image: 'images/Collision472Project.png',
        tags: ['Python', 'Feature Selection', 'Deep Learning', 'Data Cleaning', 'Transformers', 'Random Forest', 'Long Short-Term Memory (LSTM)', 'Fully Connected Neural Network (FCNN)', 'Satellite Collision'],
        highlights: [
            'Created and implemented both Long Short-Term Memory (LSTM) and Fully-Connected (FC) models, along with a Time-Series Transformer, for satellite collision risk prediction.',
            'Performed feature selection using LightGBM and RandomForest Regressors to identify the most important factors contributing to collision risk.',
            'Discovered that the Fully-Connected (FC) model demonstrated superior performance compared to LSTM models in predicting satellite collision risk, effectively capturing complex data patterns.',
            'Surpassed competition baselines as our model ranked 8th on the Collision Avoidance Challenge leaderboard.',
            'Delivered a research paper detailing the methodology, results, and analysis of the project.',
        ],
        link: 'https://github.com/lakewood999/cmsc472-project/tree/main',
        linkText: 'View Project',
    },
    'aerial-object-detection': {
        title: 'Aerial Object Detection',
        image: 'images/AOD.png',
        tags: ['Python', 'PyTorch', 'Computer Vision', 'Object Detection', 'YOLOv5', 'Transfer Learning', 'Inferencing', 'Northrop Grumman', 'Aerial Imagery'],
        highlights: [
            'Placed 1st in the Northrop Grumman Hack Week Challenge, presenting to UMD students, professors, and Northrop Grumman engineers.', 
            'Developed a YOLOv5-based object detection model to reduce misclassifications in aerial imagery, with a specific focus on balloons.',
            'Implemented transfer learning techniques with contextual data augmentation to improve model accuracy.',
            'Utilized PyTorch for model training and inferencing and performed extensive testing using images and live videos.',
        ],
        link: 'https://github.com/SathyaGnanakumar/aerial-object-detection', // Replace with actual link
        linkText: 'View Project'
    },
    'tennis-statistics': {
        title: 'What Statistics Matter in Tennis?',
        image: 'images/tennisDS.png',
        tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Exploratory Data Analysis', 'Random Forest', 'Ridge Regression', 'Data Cleaning', 'Hypothesis Testing', 'Data Science', 'Multiclass Classification'],
        highlights: [
            'Consolidated ATP tennis match data from Kaggle and performed data cleaning to remove irrelevant and missing data columns.',
            'Analyzed various counting statistics such as aces, double faults, and break points to determine their impact on match outcomes.',
            'Employed ANOVA F-Test for feature selection and addressed multicollinearity using Variance Inflation Factor (VIF) analysis',
            'Observed that match winners generally served more aces and had more secure service games, consistent with expectations.',
        ],
        link: 'https://320project.github.io', // Replace with actual link
        linkText: 'View Project'
    },
    'umd-next': {
        title: 'UMD Next',
        image: 'images/UMDNext.png', // Updated image path
        tags: ['Figma', 'UI/UX Design', 'Prototyping', 'User Research', 'Wireframing', 'Design Systems', 'Amazon'],
        highlights: [
            'Placed 2nd out of 28 competing teams in the AmazonNext Design Challenge at the University of Maryland.',
            'Presented a complete redesign of the NextBus app to UMD students, staff, professors, and Amazon employees.',
            'Created innovative campus transportation solutions to improve user experience and accessibility, with a specific focus on those with disabilities.',
            'Designed a PowerPoint presentation showcasing Figma mockups and the design process.',
        ],
        link: 'https://drive.google.com/file/d/1BvVj2DrFUZYJuaVjcYjg-lEPYl6SEgeO/view', // Updated Google Drive link
        linkText: 'View Presentation'
    }
};

const modal = document.getElementById('projectModal');
const modalProjectTitle = document.getElementById('modalProjectTitle');
const modalProjectImage = document.getElementById('modalProjectImage');
const modalProjectFullDescription = document.getElementById('modalProjectFullDescription');
const modalProjectTags = document.getElementById('modalProjectTags');
const modalProjectHighlights = document.getElementById('modalProjectHighlights');
const modalProjectLink = document.getElementById('modalProjectLink');

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        const projectId = this.dataset.project;
        const project = projectData[projectId];

        if (project) {
            modalProjectTitle.textContent = project.title;
            modalProjectImage.src = project.image;
            modalProjectImage.alt = project.title;
            modalProjectFullDescription.textContent = project.description;

            modalProjectTags.innerHTML = ''; // Clear previous tags
            project.tags.forEach(tag => {
                const span = document.createElement('span');
                span.classList.add('modal-tag');
                span.textContent = tag;
                modalProjectTags.appendChild(span);
            });

            modalProjectHighlights.innerHTML = ''; // Clear previous highlights
            if (project.highlights && project.highlights.length > 0) {
                const h3 = document.createElement('h3');
                h3.textContent = 'Key Achievements';
                modalProjectHighlights.appendChild(h3);
                const ul = document.createElement('ul');
                project.highlights.forEach(highlight => {
                    const li = document.createElement('li');
                    li.textContent = highlight;
                    ul.appendChild(li);
                });
                modalProjectHighlights.appendChild(ul);
            }

            modalProjectLink.href = project.link;
            modalProjectLink.textContent = project.linkText || 'View Project'; // Default text if not specified

            modal.style.display = 'flex'; // Use flex to center the modal
            document.body.classList.add('modal-open'); // To prevent scrolling
        }
    });
});

function closeModal() {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open'); // Allow scrolling
}

// Close the modal if the user clicks on the overlay (outside of the modal content)
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}
