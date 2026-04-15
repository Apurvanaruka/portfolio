import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Code2, Layers, Wrench, Brain, Database, Monitor, Cloud, Users,
} from 'lucide-react';
import SpotlightCard from '../components/SpotlightCard';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    icon: Code2,
    title: 'Programming Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'C', 'C++', 'HTML5', 'CSS3'],
    color: '#a855f7',
    spotlight: 'rgba(168, 85, 247, 0.10)',
  },
  {
    icon: Brain,
    title: 'AI / ML & Deep Learning',
    skills: [
      'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision',
      'Generative AI', 'LLMs', 'LoRA / QLoRA', 'RAG',
      'AI Agents', 'Agentic Workflows', 'Prompt Engineering',
    ],
    color: '#c084fc',
    spotlight: 'rgba(192, 132, 252, 0.10)',
  },
  {
    icon: Layers,
    title: 'Frameworks & Libraries',
    skills: [
      'PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn',
      'Hugging Face', 'Diffusers', 'vLLM', 'LangChain',
      'LangGraph', 'LlamaIndex', 'Django', 'Flask', 'FastAPI', 'React',
    ],
    color: '#ec4899',
    spotlight: 'rgba(236, 72, 153, 0.10)',
  },
  {
    icon: Database,
    title: 'Vector Databases',
    skills: ['Pinecone', 'Weaviate', 'FAISS', 'Qdrant', 'ChromaDB'],
    color: '#f472b6',
    spotlight: 'rgba(244, 114, 182, 0.10)',
  },
  {
    icon: Monitor,
    title: 'MLOps & Monitoring',
    skills: ['MLflow', 'Weights & Biases', 'Langfuse', 'Grafana', 'Sentry', 'CI/CD Pipelines'],
    color: '#34d399',
    spotlight: 'rgba(52, 211, 153, 0.09)',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    skills: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'REST APIs', 'n8n'],
    color: '#60a5fa',
    spotlight: 'rgba(96, 165, 250, 0.09)',
  },
  {
    icon: Wrench,
    title: 'Databases & Tools',
    skills: ['PostgreSQL', 'SQLite', 'Git', 'GitHub', 'Postman', 'Jupyter Notebook', 'VS Code'],
    color: '#fbbf24',
    spotlight: 'rgba(251, 191, 36, 0.08)',
  },
  {
    icon: Users,
    title: 'Soft Skills',
    skills: ['Problem Solving', 'Debugging', 'Team Collaboration', 'Agile / Scrum'],
    color: '#a78bfa',
    spotlight: 'rgba(167, 139, 250, 0.10)',
  },
];

export default function Skills() {
  const sectionRef      = useRef<HTMLDivElement>(null);
  const headingRef      = useRef<HTMLDivElement>(null);
  const categoriesRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );

      const categories = categoriesRef.current?.querySelectorAll('.skill-category');
      if (categories) {
        categories.forEach((category, index) => {
          gsap.fromTo(
            category,
            { opacity: 0, y: 50, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 0.55, delay: index * 0.07,
              ease: 'back.out(1.4)',
              scrollTrigger: { trigger: category, start: 'top 92%' } }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/4 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] text-foreground">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technologies I use to build production AI systems
          </p>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-primary to-pink-500 rounded-full mx-auto" />
        </div>

        {/* Skills Grid — 4 cols on xl */}
        <div ref={categoriesRef} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skillCategories.map((category) => (
            <SpotlightCard
              key={category.title}
              spotlightColor={category.spotlight}
              className="skill-category group relative p-5 glass rounded-2xl hover:scale-[1.025] transition-all duration-300"
            >
              {/* Category Header */}
              <div className="relative z-10 flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0"
                  style={{ backgroundColor: `${category.color}18` }}
                >
                  <category.icon style={{ color: category.color }} size={20} />
                </div>
                <h3 className="text-sm font-semibold text-foreground leading-snug">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="relative z-10 flex flex-wrap gap-1.5">
                {category.skills.map((skill, i) => (
                  <span
                    key={skill}
                    className="skill-tag tag-animate px-2.5 py-1 text-xs rounded-full bg-muted/60 text-muted-foreground border border-border/40 cursor-default"
                    style={{ animationDelay: `${i * 0.04}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Proficiency Circles */}
        <div className="mt-16 glow-line" />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Machine Learning', level: 90 },
            { label: 'LLM Fine-Tuning', level: 85 },
            { label: 'Python & APIs',   level: 95 },
            { label: 'MLOps / Cloud',   level: 80 },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-muted"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none" stroke="currentColor" strokeWidth="2.5"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="url(#grad)"
                    strokeWidth="2.5"
                    strokeDasharray={`${item.level}, 100`}
                    style={{ transition: 'stroke-dasharray 1.2s ease-out' }}
                  />
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-foreground">{item.level}%</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
