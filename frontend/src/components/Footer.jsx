import React from 'react';
import { Separator } from '@/components/ui/separator';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-primary-foreground">MAG</span>
              <span className="text-secondary">LINC</span>
            </div>
            <p className="text-sm text-accent-foreground/80 leading-relaxed">
              Comprehensive support for C&P examiners, simplifying medical evaluations
              for efficient disability assessments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-accent-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#process')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  Our Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#why-maglinc')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  Why MAGLINC
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-accent-foreground">Our Services</h4>
            <ul className="space-y-2 text-sm text-accent-foreground/80">
              <li>Pre-screening & Record Review</li>
              <li>DBQ Completion</li>
              <li>Medical Opinions</li>
              <li>VA Addendum Responses</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-accent-foreground/20" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-accent-foreground/70">
          <p>© {currentYear} MAGLINC. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Serving those who serve our nation's veterans.
          </p>
        </div>
      </div>
    </footer>
  );
};