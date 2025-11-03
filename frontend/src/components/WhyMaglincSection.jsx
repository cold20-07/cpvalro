import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Award, Target } from 'lucide-react';

export const WhyMaglincSection = () => {
  const reasons = [
    {
      icon: Zap,
      title: 'Efficiency',
      feature: 'We streamline record reviews, DBQ completion, and medical opinions within 36 hours.',
      benefit: 'Ensuring examiners meet VA deadlines stress-free.',
      stats: ['36h Turnaround', '100% On-Time', 'Zero Delays'],
    },
    {
      icon: Award,
      title: 'Quality',
      feature: 'Our detailed, VA-compliant evaluations.',
      benefit: 'Ensure fair assessments, reducing examiner fatigue and errors.',
      stats: ['VA Compliant', 'Detail-Oriented', 'Error-Free'],
    },
    {
      icon: Target,
      title: 'Expertise',
      feature: 'With over 5 years specializing in veteran claims.',
      benefit: 'MAGLINC offers unparalleled expertise in veteran health evaluations and disability claims.',
      stats: ['5+ Years', 'Specialized', 'Veteran-Focused'],
    },
  ];

  return (
    <section id="why-maglinc" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <Badge className="mb-4 bg-secondary-light text-secondary border-secondary/20">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Why <span className="text-gradient-primary">MAGLINC</span>?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Experience the difference that dedication, expertise, and genuine care can make
            in your practice.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card
                key={reason.title}
                className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border bg-card group"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-primary shadow-medium flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3">{reason.title}</h3>

                {/* Feature */}
                <div className="mb-4">
                  <div className="text-sm font-semibold text-primary uppercase tracking-wide mb-1">
                    Feature
                  </div>
                  <p className="text-foreground leading-relaxed">{reason.feature}</p>
                </div>

                {/* Benefit */}
                <div className="mb-6">
                  <div className="text-sm font-semibold text-secondary uppercase tracking-wide mb-1">
                    Benefit
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{reason.benefit}</p>
                </div>

                {/* Stats */}
                <div className="pt-6 border-t border-border">
                  <div className="flex flex-wrap gap-2">
                    {reason.stats.map((stat) => (
                      <Badge
                        key={stat}
                        variant="outline"
                        className="border-primary/30 text-primary"
                      >
                        {stat}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-16">
          <Card className="p-8 lg:p-12 bg-gradient-to-br from-primary-light via-secondary-light to-accent-light border-primary/20 shadow-large">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Dedicated to Serving Those Who Serve
              </h3>
              <p className="text-lg text-foreground/90 leading-relaxed">
                MAGLINC understands the critical role C&P examiners play in supporting our nation's
                veterans. Our mission is to empower you with the tools and support needed to provide
                exceptional care while maintaining your well-being.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};