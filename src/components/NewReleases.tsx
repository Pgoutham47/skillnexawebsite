import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star } from 'lucide-react';

const newCourses = [
  {
    id: '7',
    title: 'React Native Mobile Development',
    description: 'Build cross-platform mobile apps with React Native and Expo.',
    price: 99,
    duration: '35 hours',
    students: 2340,
    rating: 4.9,
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400',
    instructor: 'Alex Chen',
    isNew: true
  },
  {
    id: '8',
    title: 'Advanced AI & Machine Learning',
    description: 'Deep learning, neural networks, and AI model deployment.',
    price: 129,
    duration: '60 hours',
    students: 1850,
    rating: 4.8,
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400',
    instructor: 'Dr. Lisa Park',
    isNew: true
  },
  {
    id: '9',
    title: 'Blockchain & Cryptocurrency',
    description: 'Learn blockchain technology, smart contracts, and DeFi.',
    price: 115,
    duration: '45 hours',
    students: 3200,
    rating: 4.7,
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400',
    instructor: 'Robert Kim',
    isNew: true
  },
  {
    id: '10',
    title: 'Cloud Architecture & DevOps',
    description: 'AWS, Azure, Docker, Kubernetes, and microservices.',
    price: 110,
    duration: '40 hours',
    students: 2890,
    rating: 4.8,
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400',
    instructor: 'Maria Rodriguez',
    isNew: true
  }
];

export default function NewReleases() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">New Releases</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fresh content from our expert instructors, just launched this month
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {newCourses.map((course) => (
            <Card key={course.id} className="group hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={course.thumbnail} 
                  alt={course.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                {course.isNew && (
                  <Badge className="absolute top-3 left-3 bg-green-500 text-white">
                    New
                  </Badge>
                )}
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-base line-clamp-2 group-hover:text-primary transition-colors">
                  {course.title}
                </CardTitle>
                <p className="text-xs text-muted-foreground">by {course.instructor}</p>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {course.description}
                </p>
                
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">${course.price}</span>
                  <Link to={`/course/${course.id}`}>
                    <Button size="sm" className="text-xs px-3 py-1">
                      Enroll
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All New Courses
          </Button>
        </div>
      </div>
    </section>
  );
}