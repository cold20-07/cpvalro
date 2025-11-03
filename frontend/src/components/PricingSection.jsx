import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DollarSign, TrendingDown, Users, ArrowRight } from 'lucide-react';

export const PricingSection = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    {
      icon: DollarSign,
      title: 'Flexible Pricing',
      description: 'Tailored to your workload and case volume',
    },
    {
      icon: TrendingDown,
      title: 'Cost-Effective',
      description: 'Reduce overhead while improving efficiency',
    },
    {
      icon: Users,
      title: 'Scalable Solutions',
      description: 'Grows with your practice needs',
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <Badge className="mb-4 bg-primary-light text-primary border-primary/20">
            Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Flexible <span className="text-gradient-primary">Pricing</span> for Your Practice
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our pricing is designed to be flexible and cost-effective, based on your specific
            workload and the number of cases you handle.
          </p>
        </div>

        {/* Main Pricing Card */}
        <Card className="max-w-4xl mx-auto p-8 lg:p-12 shadow-large border-border bg-card mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Custom Pricing Plan</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every practice is unique, and so are your needs. We believe in transparent,
                fair pricing that reflects the value we provide to your specific situation.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <div className="font-semibold">Based on Workload</div>
                    <div className="text-sm text-muted-foreground">Pricing scales with case volume</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <div className="font-semibold">No Hidden Fees</div>
                    <div className="text-sm text-muted-foreground">Transparent and predictable costs</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <div className="font-semibold">Flexible Terms</div>
                    <div className="text-sm text-muted-foreground">Contract options that work for you</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - CTA */}
            <div className="bg-gradient-to-br from-primary-light to-secondary-light rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-primary mb-2">Custom</div>
              <div className="text-muted-foreground mb-6">Tailored to your needs</div>
              <Button
                size="lg"
                onClick={() => scrollToSection('#contact')}
                className="w-full bg-primary hover:bg-primary-hover shadow-elegant transition-smooth group"
              >
                Let's Discuss Your Needs
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                Free initial consultation • No obligation
              </p>
            </div>
          </div>
        </Card>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={benefit.title}
                className="p-6 text-center hover:shadow-medium transition-all duration-300 border-border bg-card"
              >
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-lg font-medium text-foreground mb-2">
            Ready to design a cost-effective solution?
          </p>
          <p className="text-muted-foreground">
            Schedule a consultation to discuss your specific needs and get a custom quote
            tailored to your practice.
          </p>
        </div>
      </div>
    </section>
  );
};