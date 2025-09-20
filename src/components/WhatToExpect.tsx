import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/hero-education.jpg';
import { CheckCircle, Users, Award, Headphones, BookOpen, Trophy } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Expert-Led Courses',
    description: 'Learn from industry professionals with years of real-world experience'
  },
  {
    icon: Users,
    title: 'Live Interactive Sessions',
    description: 'Join live classes and workshops to engage directly with instructors'
  },
  {
    icon: Award,
    title: 'Industry Certificates',
    description: 'Earn recognized certificates to boost your career prospects'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Get help whenever you need it with our dedicated support team'
  },
  {
    icon: Trophy,
    title: 'Hands-on Projects',
    description: 'Build real projects to showcase your skills to potential employers'
  },
  {
    icon: CheckCircle,
    title: 'Job Placement Assistance',
    description: 'Get career guidance and job placement support after course completion'
  }
];

export default function WhatToExpect() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.feature-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-[slideInUp_0.6s_ease_both]');
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-background via-primary/5 to-background">
      <div ref={sectionRef} className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">What to Expect from SkillNexa</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're committed to providing you with the best learning experience possible. 
            Here's what makes us different from other online learning platforms.
          </p>
        </div>

        {/* Detailed visual + features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-10">
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={heroImage} alt="Learning experience" className="w-full h-auto object-cover scale-100 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>
          </div>
          <div className="lg:col-span-2 order-1 lg:order-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card text-center hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-1 border-border/60 opacity-0 translate-y-8">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center shadow">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-primary/5 rounded-lg p-8 max-w-4xl mx-auto border border-primary/10 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Learning Journey?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Join over 50,000 students who have already transformed their careers with SkillNexa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-primary to-primary/90 text-white px-8 py-3 rounded-lg shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 transition-all">
                Start Learning Today
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/5 transition-colors">
                Explore Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}