import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Code2,
  Layers,
  Wrench,
  Brain,
  Users,
  MessageCircle,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    icon: Code2,
    title: 'Programming Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL', 'C', 'C++'],
    color: '#38bdf8',
  },
  {
    icon: Layers,
    title: 'Frameworks & Libraries',
    skills: [
      'TensorFlow',
      'PyTorch',
      'Keras',
      'Scikit-learn',
      'LangChain',
      'React',
      'Django',
      'Flask',
      'FastAPI',
      'Tailwind CSS',
      'VLLM',
    ],
    color: '#818cf8',
  },
  {
    icon: Wrench,
    title: 'Tools & Platforms',
    skills: [
      'Git',
      'GitHub',
      'Docker',
      'VS Code',
      'Postman',
      'Jupyter Notebook',
      'n8n',
      'SQLite',
      'PostgreSQL',
      'REST APIs',
      'ChatGPT',
      'Gemini',
    ],
    color: '#34d399',
  },
  {
    icon: Brain,
    title: 'AI/ML Skills',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Model Deployment',
      'API Integration',
      'RAG',
      'Fine-tuning LLMs',
    ],
    color: '#f472b6',
  },
  {
    icon: Users,
    title: 'Soft Skills',
    skills: ['Problem Solving', 'Debugging', 'Team Collaboration', 'Agile Workflow'],
    color: '#fbbf24',
  },
  {
    icon: MessageCircle,
    title: 'Languages',
    skills: ['English', 'Hindi (Native)'],
    color: '#a78bfa',
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Categories animation
      const categories = categoriesRef.current?.querySelectorAll('.skill-category');
      if (categories) {
        categories.forEach((category, index) => {
          gsap.fromTo(
            category,
            { opacity: 0, y: 50, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              delay: index * 0.1,
              ease: 'back.out(1.4)',
              scrollTrigger: {
                trigger: category,
                start: 'top 90%',
              },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] text-foreground">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and skills I've mastered throughout my journey
          </p>
          <div className="mt-4 w-20 h-1 bg-primary rounded-full mx-auto" />
        </div>

        {/* Skills Grid */}
        <div
          ref={categoriesRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="skill-category group relative p-6 glass rounded-2xl hover:scale-[1.02] transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  <category.icon style={{ color: category.color }} size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag px-3 py-1.5 text-sm rounded-full bg-muted text-muted-foreground cursor-default"
                    style={{
                      '--hover-color': category.color,
                    } as React.CSSProperties}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Hover glow effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${category.color}10, transparent 70%)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Skill Level Indicators */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Machine Learning', level: 90 },
            { label: 'Deep Learning', level: 85 },
            { label: 'Python', level: 95 },
            { label: 'Web Development', level: 80 },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-muted"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <path
                    className="text-primary"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray={`${item.level}, 100`}
                    style={{
                      transition: 'stroke-dasharray 1s ease-out',
                    }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-foreground">{item.level}%</span>
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
