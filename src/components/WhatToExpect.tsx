import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/hero-education.jpg';

const features = [
  {
    title: 'Cutting-Edge Skills',
    description: 'Stay ahead with knowledge that matches tomorrow\'s trends, not yesterday\'s syllabus.'
  },
  {
    title: 'Learning by Doing',
    description: 'Real projects, real problems, real solutions—because true learning happens in action.'
  },
  {
    title: 'Career Acceleration',
    description: 'Gain the edge that turns opportunities into achievements.'
  },
  {
    title: 'Guidance That Matters',
    description: 'Mentorship from experts who have walked the path, not just taught the theory.'
  },
  {
    title: 'A Thriving Community',
    description: 'Collaborate, network, and grow with peers who share your ambition.'
  },
  {
    title: 'Future-Ready Mindset',
    description: 'Build confidence, adaptability, and the skills to thrive in a world that never stops changing.'
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
          <div className="text-xl text-muted-foreground max-w-4xl mx-auto space-y-4">
            <p>
              At SkillNexa, learning isn't just about courses—it's about transformation. Here's what awaits you:
            </p>
            <p className="text-lg font-medium text-primary">
              SkillNexa is where knowledge meets action, and learners become leaders.
            </p>
          </div>
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
            <Card key={index} className="feature-card text-center group hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 hover:-translate-y-6 hover:scale-110 border-border/60 opacity-0 translate-y-8">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center shadow group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <span className="text-primary font-bold text-xl group-hover:scale-110 transition-transform duration-500">{feature.title.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary group-hover:scale-105 transition-all duration-500">{feature.title}</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-500">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-primary/5 rounded-lg p-8 max-w-4xl mx-auto border border-primary/10 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Your journey to success starts here—are you in?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Join over 50,000 students who have already transformed their careers with SkillNexa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-primary to-primary/90 text-white px-8 py-3 rounded-lg shadow-md shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 hover:brightness-125 hover:scale-110 transition-all duration-300">
                Start Your Journey Today
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/5 hover:scale-110 hover:shadow-lg transition-all duration-300">
                Begin with SkillNexa
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}