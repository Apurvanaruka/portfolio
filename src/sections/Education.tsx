import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Award, Trophy, Medal, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Artificial Intelligence and Data Science',
    institution: 'Modern Institute of Technology and Research Center, Alwar',
    period: '2021 - 2025',
    grade: 'CGPA: 8.6 / 10',
    icon: GraduationCap,
  },
  {
    degree: 'Senior Secondary (Class XII)',
    field: 'PCM (Physics, Chemistry, Mathematics)',
    institution: 'Gyandeep Ser. Sec. School, Alwar (RBSE)',
    period: '2020 - 2021',
    grade: 'Percentage: 95.20%',
    icon: GraduationCap,
  },
];

const achievements = [
  {
    title: 'Smart India Hackathon 2024',
    description: 'Finalist - Presented an AI-based solution to the Ministry of Education; ranked in the top 3% nationally.',
    icon: Trophy,
    color: '#fbbf24',
  },
  {
    title: 'IDE Bootcamp Phase II',
    description: 'First Place - Awarded 1st prize in a national innovation challenge; led a team project on LLM integration.',
    icon: Medal,
    color: '#f472b6',
  },
  {
    title: 'Smart India Hackathon 2023',
    description: 'Finalist - Selected as a finalist for an AI-driven project; ranked in the top 5% nationwide.',
    icon: Award,
    color: '#38bdf8',
  },
  {
    title: 'Internal Project Showcase',
    description: 'Recognized at MITRC annual showcase for innovative use of satellite data in Cosmos AI project.',
    icon: Star,
    color: '#34d399',
  },
];

export default function Education() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);

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

      // Education cards animation
      const eduCards = educationRef.current?.querySelectorAll('.education-card');
      if (eduCards) {
        eduCards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { opacity: 0, x: -50 },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              delay: index * 0.2,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
              },
            }
          );
        });
      }

      // Achievement cards animation
      const achCards = achievementsRef.current?.querySelectorAll('.achievement-card');
      if (achCards) {
        achCards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 30, rotateX: 15 },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 0.6,
              delay: index * 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
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
      id="education"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] text-foreground">
            Education & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and notable accomplishments along the way
          </p>
          <div className="mt-4 w-20 h-1 bg-primary rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <GraduationCap className="text-primary" size={28} />
              Education
            </h3>
            <div ref={educationRef} className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="education-card group relative p-6 glass rounded-2xl hover:scale-[1.02] transition-all duration-300"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <edu.icon className="text-primary" size={28} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground">
                        {edu.degree}
                      </h4>
                      <p className="text-primary font-medium">{edu.field}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-4 mt-3 text-sm">
                        <span className="text-muted-foreground">{edu.period}</span>
                        <span className="px-3 py-1 bg-primary/10 rounded-full text-primary font-medium">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <Trophy className="text-primary" size={28} />
              Achievements
            </h3>
            <div ref={achievementsRef} className="grid gap-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.title}
                  className="achievement-card group relative p-5 glass rounded-xl hover:scale-[1.02] transition-all duration-300"
                >
                  {/* Glow effect */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at 0% 50%, ${achievement.color}15, transparent 70%)`,
                    }}
                  />

                  <div className="relative flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${achievement.color}20` }}
                    >
                      <achievement.icon
                        size={24}
                        style={{ color: achievement.color }}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-foreground">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
