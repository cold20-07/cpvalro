import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Calendar, FileText, Rocket } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practice: '',
    caseVolume: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';
      
      await axios.post(`${backendUrl}/api/status`, {
        client_name: `${formData.name} - ${formData.email} - ${formData.phone || 'N/A'} - ${formData.practice || 'N/A'} - ${formData.caseVolume || 'N/A'} - ${formData.message || 'N/A'}`
      });

      toast.success('Thank you! We\'ll be in touch within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        practice: '',
        caseVolume: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextSteps = [
    {
      icon: Calendar,
      title: 'Consultation',
      description: 'Schedule an initial consultation to discuss your needs.',
    },
    {
      icon: FileText,
      title: 'Agreement',
      description: 'Formalize the service agreement with clear terms.',
    },
    {
      icon: Rocket,
      title: 'Commencement',
      description: 'Begin receiving support to reduce workload immediately.',
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-primary-light/30 via-background to-secondary-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <Badge className="mb-4 bg-primary-light text-primary border-primary/20">
            Get Started
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="text-gradient-primary">Work Together</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Take the first step toward a more efficient, stress-free practice.
            Schedule your free consultation today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="p-8 shadow-large border-border bg-card">
            <h3 className="text-2xl font-bold mb-6">Schedule Your Free Consultation</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Dr. John Smith"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john.smith@example.com"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="practice" className="block text-sm font-medium mb-2">
                  Practice/Organization
                </label>
                <Input
                  id="practice"
                  name="practice"
                  value={formData.practice}
                  onChange={handleChange}
                  placeholder="Your practice name"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="caseVolume" className="block text-sm font-medium mb-2">
                  Approximate Monthly Case Volume
                </label>
                <Input
                  id="caseVolume"
                  name="caseVolume"
                  value={formData.caseVolume}
                  onChange={handleChange}
                  placeholder="e.g., 20-30 cases/month"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your specific needs or questions..."
                  rows={4}
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-hover shadow-elegant transition-smooth"
              >
                {isSubmitting ? 'Submitting...' : 'Schedule Free Consultation'}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                We respect your privacy and will respond within 24 hours.
              </p>
            </form>
          </Card>

          {/* Next Steps */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Next Steps</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Here's what to expect after you reach out to us:
              </p>
            </div>

            {nextSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card
                  key={step.title}
                  className="p-6 border-border bg-card hover:shadow-medium transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          Step {index + 1}
                        </Badge>
                        <h4 className="font-semibold text-lg">{step.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}

            {/* Contact Info */}
            <Card className="p-6 bg-gradient-to-br from-primary-light to-secondary-light border-primary/20">
              <h4 className="font-semibold text-lg mb-4">Have Questions?</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>24-hour response time guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Free initial consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>No obligation or commitment required</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};