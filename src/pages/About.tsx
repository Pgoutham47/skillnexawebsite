import React from 'react';
import Header from '@/components/Header';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, BookOpen, TrendingUp, Star, Shield, Zap, Globe, Target, Heart } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '50,000+',
    label: 'Students',
    description: 'Active learners worldwide'
  },
  {
    icon: Award,
    value: '200+',
    label: 'Mentors',
    description: 'Industry experts'
  },
  {
    icon: TrendingUp,
    value: '85%',
    label: 'Placements',
    description: 'Job placement rate'
  },
  {
    icon: BookOpen,
    value: '1,000+',
    label: 'Classes Completed',
    description: 'Successful sessions'
  }
];

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300',
    description: 'Former Google engineer with 15+ years in EdTech'
  },
  {
    name: 'Michael Chen',
    role: 'Head of Curriculum',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
    description: 'PhD in Computer Science, ex-Stanford professor'
  },
  {
    name: 'Emily Davis',
    role: 'VP of Engineering',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300',
    description: 'Full-stack developer and technical architect'
  },
  {
    name: 'David Wilson',
    role: 'Head of Student Success',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
    description: 'Career coach with 10+ years experience'
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="container px-4 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="text-primary font-medium mb-4">
              About SKILLneXa
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering Learners{' '}
              <span className="text-primary">Worldwide</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Our mission is to democratize quality education by connecting learners 
              with industry experts through innovative online learning experiences. 
              We believe that everyone deserves access to world-class education, 
              regardless of their location or background.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-surface py-16">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <p className="text-muted-foreground">
                Real numbers that showcase our commitment to education excellence
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="font-semibold mb-1">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="container px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">
                  Transforming Lives Through Education
                </h3>
                <p className="text-muted-foreground">
                  We started SKILLneXa with a simple belief: quality education should be 
                  accessible to everyone. Our platform connects passionate learners with 
                  industry-leading instructors to create transformative learning experiences.
                </p>
                <p className="text-muted-foreground">
                  Through cutting-edge technology, personalized learning paths, and 
                  real-world projects, we're building the future of online education. 
                  Every course is designed to not just teach concepts, but to build 
                  practical skills that advance careers.
                </p>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600"
                  alt="Team collaboration"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Special */}
        <section className="container px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Makes SKILLneXa Special</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Discover the unique features and values that set us apart in the online education landscape
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Industry Expert Instructors</h3>
                <p className="text-muted-foreground">
                  Learn from professionals who are actively working in top tech companies and have real-world experience to share.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Hands-On Learning</h3>
                <p className="text-muted-foreground">
                  Every course includes practical projects, real-world case studies, and interactive coding sessions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Job Placement Support</h3>
                <p className="text-muted-foreground">
                  Get career guidance, resume reviews, interview preparation, and direct connections to hiring partners.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Global Community</h3>
                <p className="text-muted-foreground">
                  Connect with learners from 50+ countries, participate in global hackathons, and build international networks.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Personalized Learning Paths</h3>
                <p className="text-muted-foreground">
                  AI-powered recommendations help you choose the right courses based on your goals and skill level.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Student Success Focus</h3>
                <p className="text-muted-foreground">
                  Our dedicated success team provides 24/7 support, study groups, and mentorship programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-surface py-16">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-muted-foreground">
                The principles that guide everything we do at SKILLneXa
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Excellence in Education</h3>
                    <p className="text-muted-foreground">
                      We maintain the highest standards in curriculum design, instructor selection, and course delivery to ensure exceptional learning experiences.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Accessibility for All</h3>
                    <p className="text-muted-foreground">
                      We believe quality education should be accessible to everyone, regardless of their background, location, or financial situation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Innovation & Growth</h3>
                    <p className="text-muted-foreground">
                      We continuously evolve our platform and curriculum to stay ahead of industry trends and provide cutting-edge learning experiences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Student-Centric Approach</h3>
                    <p className="text-muted-foreground">
                      Every decision we make is centered around student success, from course design to support services and career guidance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Integrity & Trust</h3>
                    <p className="text-muted-foreground">
                      We build trust through transparency, honest communication, and delivering on our promises to students and instructors.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Community Building</h3>
                    <p className="text-muted-foreground">
                      We foster a supportive learning community where students, instructors, and alumni collaborate and grow together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="container px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate educators and technologists working together to revolutionize online learning
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <div className="text-primary font-medium mb-2">{member.role}</div>
                  <p className="text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}