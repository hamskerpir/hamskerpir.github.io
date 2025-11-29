// new/src/data/portfolio.ts
// Re-export CONFIG directly as a default export for easier import in Vue components.

export type Skill = {
    name: string;
    icon?: string;
    description?: string;
};

type SkillCategory = {
    name: string;
    items: Skill[];
    icon?: string;
};

export type Experience = {
    company: string;
    role: string;
    duration: string;
    summary: string;
    achievements: string[];
};

type BlogPost = {
    title: string;
    date: string;
    url: string;
};

export type Config = {
    name: string;
    title: string;
    headline: string;
    socials: { url: string; icon: string }[];
    contact: { email: string };
    skills: Record<string, SkillCategory>;
    experience: Experience[];
    blogPosts: BlogPost[];
};

const skills = {
    languages: {
        name: 'Languages',
        icon: 'fas fa-code',
        items: [
            {
                name: 'Python',
                icon: 'devicon-python-plain',
                description: 'portfolio/python.md'
            },
            {
                name: 'Go (Golang)',
                icon: 'devicon-go-original-wordmark',
                description: 'portfolio/go.md'
            },
            {name: 'TypeScript', icon: 'devicon-typescript-plain', description: 'portfolio/typescript.md'},
            {name: 'Swift', icon: 'devicon-swift-plain', description: 'portfolio/swift.md'},
            {name: 'Ruby', icon: 'devicon-ruby-plain', description: 'portfolio/ruby.md'},
        ]
    },

    backendEcosystem: {
        name: 'Backend & Python Tooling',
        icon: 'fas fa-cogs',
        items: [
            {
                name: 'FastAPI / Flask',
                description: 'portfolio/fastapi.md',
                icon: 'devicon-fastapi-plain',
            },
            {
                name: 'Uvicorn / Gunicorn',
                description: 'portfolio/uvicorn.md',
                icon: 'devicon-uwsgi-plain',
            },
            {
                name: 'Modern Python Tooling',
                description: 'portfolio/pytool.md',
                icon: 'devicon-pypi-plain',
            },
            {
                name: 'Airflow',
                icon: 'devicon-apacheairflow-plain'
            },
            {name: 'WASM', description: 'Experimentation with WebAssembly runtimes.'}
        ]
    },
    cloudNative: {
        name: 'Cloud Native & Infrastructure',
        icon: 'fas fa-cloud-upload-alt',
        items: [
            {
                name: 'Kubernetes (CKAD)',
                icon: 'devicon-kubernetes-plain',
            },
            {
                name: 'Infrastructure as Code',
                icon: 'devicon-terraform-plain',
            },
            {
                name: 'GitOps & Scaling',
                icon: 'devicon-githubactions-plain'
            },
            {
                name: 'Service Mesh',
                icon: 'devicon-traefikmesh-original',
            },
            {
                name: 'Docker Internals',
                icon: 'devicon-docker-plain',
            }
        ]
    },

    dataStreaming: {
        name: 'Data & Event Architecture',
        icon: 'fas fa-database',
        items: [
            {
                name: 'SQL & NewSQL',
                icon: 'devicon-postgresql-plain',
            },
            {
                name: 'NoSQL / KVS',
                icon: 'devicon-redis-plain',
            },
            {
                name: 'Event Driven Architecture',
                icon: 'devicon-apachekafka-original',
            },
            {
                name: 'Graph',
                icon: 'devicon-graphql-plain',
            },
        ]
    },

    observabilitySecurity: {
        name: 'Observability & Security',
        icon: 'fas fa-shield-alt',
        items: [
            {
                name: 'Grafana Stack',
                icon: 'devicon-grafana-plain',

            },
            {
                name: 'OpenTelemetry & Sentry',
                icon: 'devicon-opentelemetry-plain',
            },
            {
                name: 'Secrets Management',
                icon: 'devicon-vault-original',

            },
            {
                name: 'Authorization',
                icon: 'devicon-oauth-plain',
            }
        ]
    },

    frontend: {
        name: 'Frontend & UI',
        icon: 'fas fa-layer-group',
        items: [
            {name: 'Vue.js / React', icon: 'devicon-vuejs-plain',},
            {name: 'Modern CSS', icon: 'devicon-tailwindcss-plain',},
            {name: 'Build Tools', icon: 'devicon-vitejs-plain',}
        ]
    },

    dataScience: {
        name: 'Data Science & ML',
        icon: 'fas fa-brain',
        items: [
            {
                name: 'Data Processing',
                icon: 'devicon-pandas-plain',

            },
            {
                name: 'Deep Learning',
                icon: 'devicon-pytorch-original',

            },
            {
                name: 'Analytics',

                icon: 'devicon-clickhouse-plain'
            }
        ]
    },

    devExperience: {
        name: 'Dev Environment',
        icon: 'fas fa-terminal',
        items: [
            {
                name: 'Editors',

                icon: 'devicon-neovim-line',
            },
            {
                name: 'CLI Tools',

                icon: 'devicon-bash-plain',
            }
        ]
    }
};

export const CONFIG: Config = {
    name: 'Mark Barzali',
    title: 'Senior Back-end Engineer',
    headline: 'Building scalable and user-centric web applications that drive business growth and innovation.',
    socials: [
        {url: 'https://github.com/hamskerpir', icon: 'devicon-github-plain'},
        {url: 'https://www.linkedin.com/in/mark-barzali/', icon: 'devicon-linkedin-plain'},
        {url: 'https://instagram.com/custos.epica', icon: 'devicon-facebook-plain'},
    ],
    contact: {
        email: 're.markofdark@gmail.com'
    },
    skills: skills,
    experience: [
        {
            company: 'Heureka Group',
            role: 'Senior Software Engineer',
            duration: '2025 - Present',
            summary:
                'One of the core developers in bidding/statistics team, and responsible for developing API Gateway for entire ecosystem of company',
            achievements: [
                'Led the migration of a monolith to a microservices with parallel acquisition of another tool.',
                'Integrated distributed tracing among different teams.',
            ]
        },
        {
            company: 'Enverus Co.',
            role: 'Lead Software Engineer',
            duration: '2025',
            summary:
                'Lead developer of core project of department - simulator of US electric grid with analytical pipelines',
            achievements: [
                'Got permission for developers to build APIs with FastApi Framework, which made development easier and faster',
                'Made a framework for scraping real-time data from dozens of different webs, that increased development time. ' +
                'new scrapers pull requests had 20 lines of code instead 200. And framework handled parsing 3x faster'
            ]
        },
        {
            company: 'Seznam.cz',
            role: 'Software Engineer',
            duration: '2021 - 2025',
            summary:
                'Started my career in python and go development, and I\'m very thankful to this opportunity',
            achievements: [
                'Redesigned a architecture of our ingress proxies that are constantly under high load, new design increased our ' +
                'average rate of serving cached media content to end-users from 80% to 93% (with peak 97.8%), that also decreased ' +
                'load on our backend services which decreased required pod count by 30-50%',

                'Redesigned a stateful application to the stateless, which removed extra dependencies, read-write operations, which ' +
                'speed up starting time by 50% time and serving time by 10%',

                'Was responsible for refactoring encoding workflow to Event-Driven Architecture, which decreased bootstrap time ' +
                'from minutes to seconds and made applications more stable and reliable.',

                'Migrated most applications from older python versions to a newer ones (3.11), which speedup our applications by 20-30% ' +
                'with minimal efforts',

                'Upgraded CI/CD with new build tools and cache layers with dedicated build runners, which decreased our average build ' +
                'time about 50%-80% depending on application complexity',
            ]
        },
        {
            company: 'HiQDev',
            role: 'Junior PHP Software Engineer & QA Automation',
            duration: '2020 - 2021',
            summary:
                'My entrypoint',
            achievements: [
                'Covered all documented use cases by automation tests (several tests per 1 use case)',
            ]
        },
    ],
    blogPosts: [
        {
            title: 'How werf Streamlined the Transition to Kubernetes and Accelerated Our CI/CD.',
            date: 'August 25, 2025',
            url: 'https://dev.to/laplacedaemon/how-werf-streamlined-the-transition-to-kubernetes-and-accelerated-our-cicd-4f19'
        },
        {
            title: 'Building agents with Google Agent SDK',
            date: 'July 15, 2025',
            url: '#'
        },
        {
            title: 'Rolling out application with ArgoRollouts and traffic mirroring targeting 0-downtime.',
            date: 'October 12, 2024',
            url: '#'
        },
    ]
}
