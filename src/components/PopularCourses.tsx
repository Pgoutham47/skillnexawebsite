import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star } from 'lucide-react';

const popularCourses = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    description: 'Learn HTML, CSS, JavaScript, React, Node.js, and MongoDB. Build real projects and get job-ready.',
    price: 18500,
    originalPrice: 25000,
    duration: '40 hours',
    students: 15420,
    rating: 4.8,
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400',
    instructor: 'John Smith',
    badge: 'Best Seller'
  },
  {
    id: '2', 
    title: 'DevOps & AWS Mastery',
    description: 'Master DevOps practices, AWS cloud services, Docker, Kubernetes, and CI/CD pipelines.',
    price: 18500,
    originalPrice: 25000,
    duration: '45 hours',
    students: 8930,
    rating: 4.7,
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400',
    instructor: 'Sarah Johnson',
    badge: 'Popular'
  },
  {
    id: '3',
    title: 'Java Full Stack Development',
    description: 'Complete Java ecosystem: Spring Boot, React, MySQL, REST APIs, and microservices architecture.',
    price: 18500,
    originalPrice: 25000,
    duration: '60 hours',
    students: 12350,
    rating: 4.9,
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400',
    instructor: 'Dr. Michael Chen',
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
            <Card key={course.id} className="group hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={course.thumbnail} 
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                {course.badge && (
                  <Badge className="absolute top-3 left-3 bg-primary text-white">
                    {course.badge}
                  </Badge>
                )}
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                  {course.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">by {course.instructor}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {course.description}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.students.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">₹{course.price.toLocaleString()}</span>
                    <span className="text-sm line-through text-muted-foreground">₹{course.originalPrice.toLocaleString()}</span>
                  </div>
                  <Link to={`/course/${course.id}`}>
                    <Button size="sm">
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
            <Button variant="outline" size="lg">
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}