import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileSearch, FileCheck, FileText, CheckCircle2 } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      icon: FileSearch,
      title: 'Pre-screening & Record Review',
      description: 'Concise medical summaries highlighting critical health issues, delivered before the examination.',
      features: [
        'Comprehensive record analysis',
        'Critical health issue identification',
        'Pre-appointment summaries',
        'Time-saving insights',
      ],
      benefit: 'Allows examiners to quickly assess critical health issues before appointments, saving time and ensuring important details are not overlooked.',
      color: 'primary',
    },
    {
      icon: FileCheck,
      title: 'DBQ Completion',
      description: 'Fully filled-out DBQs based on examiner findings, adhering to all VA guidelines.',
      features: [
        'VA-compliant documentation',
        'Based on examination findings',
        '24-36 hour turnaround',
        'Thorough and accurate',
      ],
      benefit: 'Streamlines the documentation process for examiners, ensuring timely submission and full compliance with VA standards.',
      color: 'secondary',
    },
    {
      icon: FileText,
      title: 'Medical Opinions & Addenda',
      description: 'Thorough, well-supported opinions connecting service-related conditions to current health issues.',
      features: [
        'Evidence-based opinions',
        'Service-connection analysis',
        'VA query responses',
        'Comprehensive follow-ups',
      ],
      benefit: 'Ensures accurate and prompt responses to VA requests with well-documented medical rationale.',
      color: 'accent',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <Badge className="mb-4 bg-primary-light text-primary border-primary/20">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Simplifying the <span className="text-gradient-primary">Process</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive support designed to reduce your workload and improve efficiency
            while maintaining the highest standards of quality.
          </p>
        </div>

        {/* Services Cards */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="overflow-hidden border-border hover:shadow-large transition-all duration-300"
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left Side - Service Info */}
                  <div className="p-8 lg:p-10">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-${service.color}-light flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-7 h-7 text-${service.color}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Benefit */}
                    <div className={`rounded-lg bg-${service.color}-light/50 p-4 border border-${service.color}/20`}>
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                        Key Benefit
                      </div>
                      <p className="text-sm text-foreground leading-relaxed">{service.benefit}</p>
                    </div>
                  </div>

                  {/* Right Side - Visual/Stats */}
                  <div className="bg-gradient-to-br from-muted/50 to-background p-8 lg:p-10 flex items-center justify-center">
                    <div className="text-center space-y-6">
                      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-card shadow-medium">
                        <Icon className={`w-12 h-12 text-${service.color}`} />
                      </div>
                      <div>
                        <div className="text-4xl font-bold text-primary mb-2">
                          {index === 0 ? 'Pre-Exam' : index === 1 ? '24-36h' : 'Expert'}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {index === 0
                            ? 'Delivered before appointment'
                            : index === 1
                            ? 'Completion turnaround'
                            : 'Medical opinion quality'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};