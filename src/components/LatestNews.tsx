import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: '1',
    title: '10 Essential Skills Every Developer Should Master in 2024',
    excerpt: 'Discover the most in-demand programming skills that will boost your career prospects this year.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400',
    author: 'John Smith',
    date: '2024-01-15',
    category: 'Development',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'The Future of Digital Marketing: AI and Automation',
    excerpt: 'How artificial intelligence is revolutionizing digital marketing strategies and what it means for marketers.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
    author: 'Sarah Johnson',
    date: '2024-01-12',
    category: 'Marketing',
    readTime: '7 min read'
  },
  {
    id: '3',
    title: 'Cybersecurity Trends: Protecting Your Digital Assets',
    excerpt: 'Essential cybersecurity practices every business should implement to stay safe in the digital age.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400',
    author: 'Alex Rodriguez',
    date: '2024-01-10',
    category: 'Security',
    readTime: '6 min read'
  }
];

export default function LatestNews() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest News & Updates</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights from the world of technology and education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:-translate-y-4 hover:scale-110 border-border relative overflow-hidden">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-125 transition-transform duration-700 ease-out"
                />
                <Badge className="absolute top-3 right-3 bg-primary text-white group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  {post.category}
                </Badge>
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1 group-hover:text-primary group-hover:scale-110 transition-all duration-500">
                    <Calendar className="h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1 group-hover:text-primary group-hover:scale-110 transition-all duration-500">
                    <User className="h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
                    {post.author}
                  </div>
                </div>
                <h3 className="text-lg font-bold line-clamp-2 group-hover:text-primary group-hover:scale-105 transition-all duration-500">
                  {post.title}
                </h3>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3 group-hover:text-foreground transition-colors duration-500">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-500">{post.readTime}</span>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="ghost" size="sm" className="group/btn hover:scale-110 hover:shadow-lg transition-all duration-300">
                      Read More 
                      <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/blog">
            <Button variant="outline" size="lg" className="hover:scale-110 hover:shadow-lg transition-all duration-300">
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}