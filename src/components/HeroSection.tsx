import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Video, GraduationCap } from 'lucide-react';
import heroImage from '@/assets/hero-education.jpg';

export default function HeroSection() {
  const trustBadges = [
    {
      icon: Video,
      title: 'Live Classes',
      description: 'Interactive learning sessions'
    },
    {
      icon: GraduationCap,
      title: 'Internships',
      description: 'Real-world experience'
    },
    {
      icon: Award,
      title: 'Certificates',
      description: 'Industry recognized'
    },
    {
      icon: Users,
      title: 'Mentors',
      description: 'Expert guidance'
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-surface to-accent/20">
      <div className="container px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-primary font-medium">
                #1 Learning Platform
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Master New Skills{' '}
                <span className="text-primary">Online</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Join thousands of learners advancing their careers with expert-led courses, 
                hands-on projects, and industry certifications.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Create Your Free Account
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                View Courses
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {trustBadges.map((badge, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <badge.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{badge.title}</h3>
                    <p className="text-xs text-muted-foreground">{badge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage}
                alt="Students learning online with modern technology"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-card border rounded-lg p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Students</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card border rounded-lg p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}