import React, { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Upload, DollarSign, Users, TrendingUp, CheckCircle } from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    title: 'Earn Money',
    description: 'Share your expertise and earn competitive revenue from course sales'
  },
  {
    icon: Users,
    title: 'Teach Globally',
    description: 'Reach students worldwide and build your personal brand'
  },
  {
    icon: TrendingUp,
    title: 'Grow Your Impact',
    description: 'Create lasting impact by sharing knowledge and skills'
  }
];

const steps = [
  {
    number: 1,
    title: 'Apply to Teach',
    description: 'Submit your application with expertise and background details'
  },
  {
    number: 2,
    title: 'Create Your Course',
    description: 'Design engaging content with our course creation tools'
  },
  {
    number: 3,
    title: 'Launch & Earn',
    description: 'Publish your course and start earning from student enrollments'
  }
];

export default function Instructor() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    expertise: '',
    experience: '',
    motivation: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="container px-4 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="text-primary font-medium mb-4">
              Become an Instructor
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Share Your Knowledge,{' '}
              <span className="text-primary">Impact Lives</span>
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Join thousands of instructors who are transforming careers through 
              online education. Turn your expertise into a thriving teaching business.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Application Form */}
        <section className="bg-surface py-16">
          <div className="container px-4">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">
                    Instructor Application
                  </CardTitle>
                  <p className="text-center text-muted-foreground">
                    Tell us about yourself and your expertise
                  </p>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="expertise">Area of Expertise *</Label>
                      <Input
                        id="expertise"
                        value={formData.expertise}
                        onChange={(e) => handleInputChange('expertise', e.target.value)}
                        placeholder="e.g., Web Development, Data Science, Digital Marketing"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">Professional Experience *</Label>
                      <Textarea
                        id="experience"
                        value={formData.experience}
                        onChange={(e) => handleInputChange('experience', e.target.value)}
                        placeholder="Tell us about your professional background and expertise..."
                        rows={4}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="motivation">Why do you want to teach? *</Label>
                      <Textarea
                        id="motivation"
                        value={formData.motivation}
                        onChange={(e) => handleInputChange('motivation', e.target.value)}
                        placeholder="Share your motivation for teaching and what you hope to achieve..."
                        rows={3}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="resume">Resume/CV</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                        <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">
                          Click to upload your resume (PDF, DOC, DOCX)
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Max file size: 10MB
                        </p>
                      </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Submit Application
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our terms and conditions
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="container px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground">
              Simple steps to start your teaching journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Teaching?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join our community of expert instructors and start making an impact today
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Get Started Now
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}