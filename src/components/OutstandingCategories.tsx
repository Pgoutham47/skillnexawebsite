import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Code, TrendingUp, Shield, Cpu } from 'lucide-react';

const categories = [
  {
    title: 'Development',
    icon: Code,
    description: 'Master coding skills from web development to mobile apps',
    courses: 120,
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    title: 'Digital Marketing',
    icon: TrendingUp,
    description: 'Learn SEO, social media, and growth marketing strategies',
    courses: 85,
    gradient: 'from-green-500 to-teal-600'
  },
  {
    title: 'Hacking',
    icon: Shield,
    description: 'Ethical hacking and cybersecurity fundamentals',
    courses: 45,
    gradient: 'from-red-500 to-pink-600'
  },
  {
    title: 'Technology',
    icon: Cpu,
    description: 'Cloud computing, AI, and emerging tech trends',
    courses: 95,
    gradient: 'from-orange-500 to-yellow-600'
  }
];

export default function OutstandingCategories() {
  return (
    <section className="py-16 bg-gradient-to-b from-background via-accent/10 to-background relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]"
           style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, hsl(var(--primary)) 2px, transparent 2px), radial-gradient(circle at 80% 30%, hsl(var(--primary)) 2px, transparent 2px), radial-gradient(circle at 40% 80%, hsl(var(--primary)) 2px, transparent 2px)', backgroundSize: '24px 24px' }}
      />
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Outstanding Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our most popular learning paths designed by industry experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {categories.map((category, index) => (
            <Link key={category.title} to={`/courses?category=${category.title.toLowerCase()}`}>
              <Card className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer border-border/60 backdrop-blur-sm bg-white/80">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {category.description}
                  </p>
                  
                  <div className="text-xs text-muted-foreground">
                    {category.courses} courses available
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}