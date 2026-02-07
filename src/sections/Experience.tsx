import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: 'AI/ML Engineer',
    company: 'Unlock Technologies Pvt. Ltd.',
    location: 'Mumbai, India',
    period: 'July 2025 - Present',
    type: 'Full-time',
    description: [
      'Developed PAN, Aadhar card OCR, Face match, Name Match, and liveness detection for eKYC in Digikhata',
      'Built AI Agent Studio for creating Multi AI agents with MCP, A2A server and Custom Knowledgebase integration',
      'Automated bulk URL remover on Google Cloud Console',
      'Fine-tuned LLMs for custom use cases including AI agent orchestration and RAG',
      'Deployed applications on AWS Cloud and Local servers for privacy and security in Fintech',
    ],
  },
  {
    title: 'AI Engineer Intern',
    company: 'Raddical Innovation Group',
    location: 'Remote, Finland',
    period: 'Sep 2024 - Mar 2025',
    type: 'Internship',
    description: [
      'Developed and fine-tuned deep learning models for NLP tasks such as text classification, improving accuracy by 20%',
      'Integrated transformer-based models (BERT, RoBERTa) into production pipelines using Python and Hugging Face',
      'Delivered internal training on NLP workflows, annotation tools, and model evaluation techniques',
      'Collaborated in an agile environment with cross-functional teams to deploy AI-driven features',
    ],
  },
  {
    title: 'Deep Learning NLP Intern',
    company: 'Skill Oceans',
    location: 'Alwar, Rajasthan',
    period: 'Jun 2024 - Aug 2024',
    type: 'Internship',
    description: [
      'Gained hands-on experience in building and training neural networks using TensorFlow and PyTorch',
      'Built text preprocessing pipelines including tokenization, stemming, and embeddings for NLP models',
      'Completed a capstone project on sentiment analysis using LSTM and achieved 82% validation accuracy',
      'Explored key NLP libraries (NLTK, spaCy) and implemented classification and NER tasks',
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

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

      // Timeline line animation
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1.5,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              scrub: 1,
            },
          }
        );
      }

      // Experience cards animation
      const cards = timelineRef.current?.querySelectorAll('.experience-card');
      if (cards) {
        cards.forEach((card, index) => {
          const isLeft = index % 2 === 0;
          gsap.fromTo(
            card,
            { opacity: 0, x: isLeft ? -100 : 100 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
              },
            }
          );
        });
      }

      // Timeline nodes animation
      const nodes = timelineRef.current?.querySelectorAll('.timeline-node');
      if (nodes) {
        nodes.forEach((node, index) => {
          gsap.fromTo(
            node,
            { scale: 0 },
            {
              scale: 1,
              duration: 0.4,
              delay: index * 0.2,
              ease: 'back.out(2)',
              scrollTrigger: {
                trigger: node,
                start: 'top 85%',
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
      id="experience"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] text-foreground">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My career path and the valuable experiences I've gained along the way
          </p>
          <div className="mt-4 w-20 h-1 bg-primary rounded-full mx-auto" />
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Center Line - Desktop */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 timeline-line origin-top"
            style={{ transform: 'translateX(-50%)' }}
          />

          {/* Mobile Line */}
          <div className="lg:hidden absolute left-4 top-0 bottom-0 w-0.5 timeline-line" />

          {/* Experience Cards */}
          <div className="space-y-12 lg:space-y-0">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${
                  index !== 0 ? 'lg:mt-12' : ''
                }`}
              >
                {/* Timeline Node */}
                <div
                  className={`timeline-node absolute left-4 lg:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 ${
                    index === 0 ? 'top-0' : 'top-0 lg:top-8'
                  }`}
                  style={{ transform: 'translateX(-50%)' }}
                />

                {/* Card */}
                <div
                  className={`experience-card ml-12 lg:ml-0 ${
                    index % 2 === 0
                      ? 'lg:pr-12 lg:text-right'
                      : 'lg:col-start-2 lg:pl-12'
                  }`}
                >
                  <div className="group relative p-6 glass rounded-2xl hover:scale-[1.02] transition-all duration-300">
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative">
                      {/* Header */}
                      <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Briefcase className="text-primary" size={24} />
                        </div>
                        <div className={index % 2 === 0 ? 'lg:text-right' : ''}>
                          <h3 className="text-xl font-semibold text-foreground">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                      </div>

                      {/* Meta Info */}
                      <div className={`flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                        <span className="px-2 py-0.5 bg-primary/10 rounded-full text-primary text-xs">
                          {exp.type}
                        </span>
                      </div>

                      {/* Description */}
                      <ul className={`space-y-2 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground leading-relaxed"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
