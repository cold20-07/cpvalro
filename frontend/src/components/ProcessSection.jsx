import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileSearch, FileCheck, MessageSquare, CheckCircle2 } from 'lucide-react';

export const ProcessSection = () => {
  const steps = [
    {
      icon: FileSearch,
      title: 'Initial Record Review & Summary',
      description: 'Completed before the scheduled appointment, allowing for focused evaluations.',
      timeline: 'Pre-Appointment',
      details: [
        'Comprehensive medical record analysis',
        'Critical health issues highlighted',
        'Concise summary preparation',
        'Ready for your review',
      ],
    },
    {
      icon: FileCheck,
      title: 'DBQ Completion',
      description: 'Completed within 24-36 hours of each examination, ensuring timely submission.',
      timeline: '24-36 Hours Post-Exam',
      details: [
        'Based on examination findings',
        'VA guideline compliance',
        'Thorough documentation',
        'Quality assurance review',
      ],
    },
    {
      icon: MessageSquare,
      title: 'Medical Opinions & Addendum',
      description: 'Provided within 24-36 hours of VA request, guaranteeing swift and accurate responses.',
      timeline: '24-36 Hours Post-Request',
      details: [
        'Evidence-based opinions',
        'Service-connection analysis',
        'Comprehensive VA query responses',
        'Follow-up support',
      ],
    },
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-gradient-to-br from-muted/30 via-background to-secondary-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <Badge className="mb-4 bg-accent-light text-accent border-accent/20">
            Our Process
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How <span className="text-gradient-primary">It Works</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A streamlined approach designed for efficiency and reliability at every stage.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting Line - Desktop Only */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.title}
                  className="relative"
                >
                  <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Left Side (Desktop) */}
                    <div className={`${isEven ? 'lg:text-right' : 'lg:order-2'}`}>
                      <Card className="p-6 lg:p-8 shadow-medium hover:shadow-large transition-all duration-300 bg-card border-border">
                        <Badge className="mb-4 bg-primary-light text-primary border-primary/20">
                          {step.timeline}
                        </Badge>
                        <h3 className="text-xl lg:text-2xl font-bold mb-3">{step.title}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {step.description}
                        </p>
                        <div className="space-y-2">
                          {step.details.map((detail) => (
                            <div
                              key={detail}
                              className={`flex items-center space-x-2 ${
                                isEven ? 'lg:justify-end' : ''
                              }`}
                            >
                              {!isEven && <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />}
                              <span className="text-sm">{detail}</span>
                              {isEven && <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />}
                            </div>
                          ))}
                        </div>
                      </Card>
                    </div>

                    {/* Center Icon (Desktop) */}
                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-primary shadow-elegant items-center justify-center z-10">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>

                    {/* Right Side (Desktop) - Empty for spacing */}
                    <div className={`hidden lg:block ${!isEven ? 'lg:order-2' : ''}`}></div>
                  </div>

                  {/* Mobile Icon */}
                  <div className="lg:hidden flex items-center justify-center mt-8">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary shadow-elegant flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Section - Governance & Risk */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* Governance */}
          <Card className="p-6 lg:p-8 bg-card border-border shadow-soft">
            <h3 className="text-xl font-bold mb-4">Project Governance & Resources</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Timely access to veteran medical records is essential for accurate processing</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Collaboration for clarifications during DBQ completion or opinion drafting</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Clear communication channels for efficient workflow</span>
              </li>
            </ul>
          </Card>

          {/* Risk Mitigation */}
          <Card className="p-6 lg:p-8 bg-card border-border shadow-soft">
            <h3 className="text-xl font-bold mb-4">Risk Management</h3>
            <div className="space-y-4 text-sm">
              <div>
                <div className="font-semibold text-destructive mb-1">Risk: Record Delays</div>
                <div className="text-muted-foreground flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                  <span>Mitigation: Clear timelines and communication protocols established</span>
                </div>
              </div>
              <div>
                <div className="font-semibold text-destructive mb-1">Risk: VA Guideline Changes</div>
                <div className="text-muted-foreground flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                  <span>Mitigation: Continuous monitoring ensures up-to-date compliance</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};