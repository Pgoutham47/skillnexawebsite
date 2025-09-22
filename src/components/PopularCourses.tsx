import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star } from 'lucide-react';

const popularCourses = [
  {
    id: 'ai-ml-1',
    title: 'AI/ML Course - Level 1: Beginner (Foundations)',
    description: 'Build coding, math, and conceptual foundations. Learn AI/ML basics, Python programming, mathematics for AI, and hands-on projects.',
    price: 18500,
    originalPrice: 25000,
    duration: '8-10 weeks',
    students: 12500,
    rating: 4.9,
    thumbnail: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=400',
    instructor: 'Dr. Sarah Chen',
    badge: 'Best Seller'
  },
  {
    id: 'cyber-1', 
    title: 'Cybersecurity - Level 1: Foundations (Beginner)',
    description: 'Build awareness, digital hygiene, and essential technical literacy. Learn cybersecurity basics, computer & network fundamentals, cryptography, and practical security skills.',
    price: 18500,
    originalPrice: 25000,
    duration: '6-8 weeks',
    students: 11200,
    rating: 4.7,
    thumbnail: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400',
    instructor: 'Alex Rodriguez',
    badge: 'Popular'
  },
  {
    id: 'data-1',
    title: 'Data Science - Level 1: Beginner (Foundations)',
    description: 'Build programming, math, and data handling foundations. Learn data science basics, Python programming, mathematics, SQL, and hands-on projects with student performance analysis.',
    price: 18500,
    originalPrice: 25000,
    duration: '6-8 weeks',
    students: 14200,
    rating: 4.8,
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
    instructor: 'Dr. Aisha Khan',
    badge: 'Hot'
  }
];

export default function PopularCourses() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Popular Courses</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students in our most loved courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {popularCourses.map((course) => (
            <Card key={course.id} className="group hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:-translate-y-6 hover:scale-115 border-border relative overflow-hidden">
              <div className="relative">
                <img 
                  src={course.thumbnail} 
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-t-lg group-hover:scale-130 transition-transform duration-700 ease-out"
                />
                {course.badge && (
                  <Badge className="absolute top-3 left-3 bg-primary text-white group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    {course.badge}
                  </Badge>
                )}
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-lg line-clamp-2 group-hover:text-primary group-hover:scale-105 transition-all duration-500">
                  {course.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-500">by {course.instructor}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-2 group-hover:text-foreground transition-colors duration-500">
                  {course.description}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1 group-hover:scale-110 group-hover:text-primary transition-all duration-500">
                    <Clock className="h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1 group-hover:scale-110 group-hover:text-primary transition-all duration-500">
                    <Users className="h-4 w-4 group-hover:scale-125 transition-transform duration-500" />
                    {course.students.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1 group-hover:scale-110 group-hover:text-primary transition-all duration-500">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 group-hover:rotate-180 transition-transform duration-500" />
                    {course.rating}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary group-hover:scale-125 group-hover:text-secondary transition-all duration-500">₹{course.price.toLocaleString()}</span>
                    <span className="text-sm line-through text-muted-foreground group-hover:text-foreground transition-colors duration-500">₹{course.originalPrice.toLocaleString()}</span>
                  </div>
                  <Link to={`/course/${course.id}`}>
                    <Button 
                      size="sm"
                      className="hover:scale-110 hover:shadow-lg transition-all duration-300"
                    >
                      Enroll Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/courses">
            <Button 
              variant="outline" 
              size="lg"
              className="hover:scale-110 hover:shadow-lg hover:bg-primary hover:text-white transition-all duration-300"
            >
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}