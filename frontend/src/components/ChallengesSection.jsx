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
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Challenges Faced by <span className="text-primary">C&P Examiners</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            C&P examiners face increasing pressure from high case volumes, tight deadlines, and extensive medical records.
            We understand these challenges and have designed our services to address them.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <Card
                key={challenge.title}
                className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-2">{challenge.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                    {challenge.description}
                  </p>

                  {/* Stat */}
                  <div className="pt-4 border-t border-border mt-auto">
                    <div className="text-2xl font-bold text-primary">{challenge.stat}</div>
                    <div className="text-xs text-muted-foreground">{challenge.statLabel}</div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
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