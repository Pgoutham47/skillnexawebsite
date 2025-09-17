import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
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
  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What to Expect from SkillNexa</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're committed to providing you with the best learning experience possible. 
            Here's what makes us different from other online learning platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-primary/5 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Learning Journey?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Join over 50,000 students who have already transformed their careers with SkillNexa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
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