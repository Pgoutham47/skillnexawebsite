import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';

const categories = ['All', 'Web', 'DevOps', 'ML', 'Cybersec'];

const sampleCourses = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    description: 'Learn HTML, CSS, JavaScript, React, Node.js, and MongoDB. Build real projects and get job-ready.',
    price: 89,
    duration: '40 hours',
    students: 15420,
    rating: 4.8,
    category: 'Web',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400',
    instructor: 'John Smith'
  },
  {
    id: '2', 
    title: 'Docker & Kubernetes Mastery',
    description: 'Master containerization and orchestration with Docker and Kubernetes for modern DevOps.',
    price: 75,
    duration: '25 hours',
    students: 8930,
    rating: 4.7,
    category: 'DevOps',
    thumbnail: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400',
    instructor: 'Sarah Johnson'
  },
  {
    id: '3',
    title: 'Machine Learning with Python',
    description: 'Learn ML algorithms, data preprocessing, and model building with Python and scikit-learn.',
    price: 95,
    duration: '50 hours',
    students: 12350,
    rating: 4.9,
    category: 'ML',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400',
    instructor: 'Dr. Michael Chen'
  },
  {
    id: '4',
    title: 'Ethical Hacking & Penetration Testing',
    description: 'Learn cybersecurity fundamentals, penetration testing, and ethical hacking techniques.',
    price: 110,
    duration: '35 hours',
    students: 6720,
    rating: 4.6,
    category: 'Cybersec',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400',
    instructor: 'Alex Rodriguez'
  },
  {
    id: '5',
    title: 'React Advanced Patterns',
    description: 'Deep dive into React hooks, context, performance optimization, and advanced patterns.',
    price: 65,
    duration: '20 hours',
    students: 9840,
    rating: 4.8,
    category: 'Web',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400',
    instructor: 'Emily Davis'
  },
  {
    id: '6',
    title: 'CI/CD Pipeline Automation',
    description: 'Build robust CI/CD pipelines with Jenkins, GitHub Actions, and automated testing.',
    price: 80,
    duration: '30 hours',
    students: 7250,
    rating: 4.7,
    category: 'DevOps',
    thumbnail: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=400',
    instructor: 'David Wilson'
  }
];

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = sampleCourses.filter(course => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-8">
        {/* Filters */}
        <div className="mb-8 space-y-6">
          {/* Search */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="min-w-[80px]"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredCourses.length} courses
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold mb-2">No courses found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}