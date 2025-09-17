import React, { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Upload, DollarSign, Users, TrendingUp, CheckCircle, Award, Shield, RefreshCw, Star } from 'lucide-react';

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

                    <Button type="submit" size="lg" className="w-full text-sm sm:text-base">
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

        {/* How to Become an Instructor */}
        <section className="container px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How to Become an Instructor</h2>
            <p className="text-muted-foreground">
              Follow our comprehensive guide to start your teaching journey
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-2xl font-bold">Meet Our Requirements</h3>
                </div>
                <div className="space-y-3 pl-15">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Professional Experience</h4>
                      <p className="text-muted-foreground text-sm">Minimum 3+ years of hands-on experience in your field</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Industry Recognition</h4>
                      <p className="text-muted-foreground text-sm">Portfolio, certifications, or professional achievements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Teaching Passion</h4>
                      <p className="text-muted-foreground text-sm">Genuine desire to help others learn and grow</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Communication Skills</h4>
                      <p className="text-muted-foreground text-sm">Ability to explain complex concepts clearly</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600"
                  alt="Professional requirements"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Instructor Benefits */}
        <section className="bg-surface py-16">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Instructor Benefits</h2>
              <p className="text-muted-foreground">
                Join our community and enjoy these exclusive benefits
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <DollarSign className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Competitive Revenue Share</h3>
                  <p className="text-muted-foreground">Earn up to 70% revenue share from your course sales</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Global Student Reach</h3>
                  <p className="text-muted-foreground">Access to our worldwide community of 50,000+ students</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Marketing Support</h3>
                  <p className="text-muted-foreground">Dedicated marketing team to promote your courses</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Professional Development</h3>
                  <p className="text-muted-foreground">Free access to instructor training and development programs</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Payment Protection</h3>
                  <p className="text-muted-foreground">Secure and timely payments with fraud protection</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <RefreshCw className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Ongoing Support</h3>
                  <p className="text-muted-foreground">Dedicated instructor success manager for guidance</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Teaching?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join our community of expert instructors and start making an impact today
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto text-sm sm:text-base">
              Get Started Now
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}