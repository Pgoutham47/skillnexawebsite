import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Clock, Users, Star } from 'lucide-react';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  students: number;
  rating: number;
  category: string;
  thumbnail: string;
  instructor: string;
}

export default function CourseCard({
  title,
  description,
  price,
  duration,
  students,
  rating,
  category,
  thumbnail,
  instructor
}: CourseCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Badge className="absolute top-4 left-4 bg-primary">
            {category}
          </Badge>
          <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded text-sm">
            <Star className="w-3 h-3 fill-current" />
            <span>{rating}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="space-y-3">
          <h3 className="font-semibold text-lg leading-tight hover:text-primary transition-colors cursor-pointer">
            {title}
          </h3>
          
          <p className="text-muted-foreground text-sm line-clamp-2">
            {description}
          </p>
          
          <div className="text-sm text-muted-foreground">
            By {instructor}
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{students.toLocaleString()} students</span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="px-6 pb-6 pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="text-2xl font-bold text-primary">
            ₹{price.toLocaleString('en-IN')}
          </div>
          <Button size="sm" className="w-full sm:w-auto">
            Enroll Now
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}