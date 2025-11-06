import React from 'react';
import { Card } from '@/components/ui/card';
import { FileStack, Clock, Scale, Flame } from 'lucide-react';

export const ChallengesSection = () => {
  const challenges = [
    {
      icon: FileStack,
      title: 'Overwhelming Workload',
      description: 'High volume of cases with extensive medical records often exceeding 1,000 pages per veteran.',
      stat: '1,000+',
      statLabel: 'Pages per Case',
    },
    {
      icon: Clock,
      title: 'Strict Deadlines',
      description: 'Maintaining the critical 48-hour deadline for DBQ submissions while ensuring thoroughness.',
      stat: '48h',
      statLabel: 'Deadline Window',
    },
    {
      icon: Scale,
      title: 'Quality vs. Quantity',
      description: 'Balancing comprehensive evaluations with timely submissions creates constant pressure.',
      stat: '100%',
      statLabel: 'Accuracy Required',
    },
    {
      icon: Flame,
      title: 'Burnout & Fatigue',
      description: 'The combination of volume, complexity, and deadlines leads to examiner exhaustion and errors.',
      stat: '24/7',
      statLabel: 'Pressure',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Challenges Faced by <span className="text-primary">C&P Examiners</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            C&P examiners face increasing pressure from high case volumes, tight deadlines, and extensive medical records.
            We understand these challenges and have designed our services to address them.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <Card
                key={challenge.title}
                className="group p-8 hover:shadow-hover transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] border-border bg-card relative overflow-hidden"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  boxShadow: '0 4px 16px hsl(215 25% 15% / 0.08)'
                }}
              >
                {/* Teal accent border on top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary/60 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                
                <div className="flex flex-col h-full relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-primary-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Icon className="w-8 h-8 text-primary" strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3">{challenge.title}</h3>

                  {/* Description */}
                  <p className="text-base text-muted-foreground leading-[1.8] mb-6 flex-grow">
                    {challenge.description}
                  </p>

                  {/* Stat */}
                  <div className="pt-5 border-t border-border mt-auto">
                    <div className="text-3xl font-bold text-gradient-primary bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                      {challenge.stat}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">{challenge.statLabel}</div>
                  </div>
                </div>
                
                {/* Subtle shadow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-lg font-medium text-foreground mb-2">
            These challenges don't have to define your practice.
          </p>
          <p className="text-muted-foreground">
            Let MAGLINC handle the administrative burden so you can focus on what matters most.
          </p>
        </div>
      </div>
    </section>
  );
};