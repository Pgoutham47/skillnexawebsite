import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Clock, Users, Star, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  subCourses?: { level: 'Beginner' | 'Intermediate' | 'Advanced'; link: string }[];
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
  instructor,
  subCourses
}: CourseCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <Card className="group hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 border-border relative">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <Badge className="absolute top-4 left-4 bg-primary shadow shadow-primary/40">
            {category}
          </Badge>
          <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded text-sm">
            <Star className="w-3 h-3 fill-current" />
            <span>{rating}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="[perspective:1000px]">
          <div
            className={`relative h-full min-h-[160px] transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
          >
            {/* Front */}
            <div className="absolute inset-0 [backface-visibility:hidden]">
              <div className="space-y-3">
                <h3 className="font-semibold text-lg leading-tight">
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
            </div>

            {/* Back - Subcourses */}
            <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="h-full flex flex-col justify-center">
                {subCourses && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {subCourses.map((sub) => (
                      <Link key={sub.level} to={sub.link} className="group/sub">
                        <div className="rounded-md px-3 py-2 text-center font-medium bg-gradient-to-r from-primary/90 to-primary text-white shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 transition-all">
                          {sub.level}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="px-6 pb-6 pt-0">
        <div className="flex items-center justify-between w-full gap-3">
          <div className="text-2xl font-bold text-primary">
            ₹{price.toLocaleString('en-IN')}
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <Button
              size="sm"
              variant="outline"
              className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10"
              onClick={() => subCourses && setIsFlipped((v) => !v)}
            >
              {isFlipped ? 'Back' : 'Read More'}
            </Button>
            <Button size="sm" className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/90 text-white shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 hover:brightness-110">
              Enroll Now
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}