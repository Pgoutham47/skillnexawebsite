import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { 
  Clock, 
  Users, 
  Star, 
  Play, 
  CheckCircle, 
  Award,
  Shield,
  RefreshCw
} from 'lucide-react';

const sampleCourse = {
  id: '1',
  title: 'Complete Web Development Bootcamp',
  description: 'Master modern web development with HTML5, CSS3, JavaScript ES6+, React, Node.js, and MongoDB. Build real-world projects and get job-ready skills.',
  price: 89,
  originalPrice: 149,
  duration: '40 hours',
  students: 15420,
  rating: 4.8,
  reviews: 2340,
  category: 'Web Development',
  thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
  instructor: {
    name: 'John Smith',
    title: 'Senior Full Stack Developer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    students: 25000,
    courses: 12,
    rating: 4.9
  },
  syllabus: [
    {
      title: 'HTML & CSS Fundamentals',
      lessons: 8,
      duration: '6 hours',
      topics: ['HTML5 Structure', 'CSS3 Styling', 'Responsive Design', 'Flexbox & Grid']
    },
    {
      title: 'JavaScript Essentials',
      lessons: 12,
      duration: '10 hours',
      topics: ['ES6+ Syntax', 'DOM Manipulation', 'Async Programming', 'APIs & Fetch']
    },
    {
      title: 'React Development',
      lessons: 10,
      duration: '15 hours',
      topics: ['Components & JSX', 'State & Props', 'Hooks', 'Context API']
    },
    {
      title: 'Backend with Node.js',
      lessons: 8,
      duration: '9 hours',
      topics: ['Express.js', 'MongoDB', 'Authentication', 'RESTful APIs']
    }
  ],
  testimonials: [
    {
      name: 'Sarah Johnson',
      role: 'Software Developer',
      content: 'This course transformed my career. The practical approach and real projects made all the difference.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100'
    },
    {
      name: 'Mike Chen',
      role: 'Frontend Engineer',
      content: 'Best investment I made for my career. Now working at a top tech company thanks to this course.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'
    }
  ]
};

const faqs = [
  {
    question: 'Do I need prior programming experience?',
    answer: 'No prior experience needed! This course starts from the basics and gradually builds up to advanced concepts.'
  },
  {
    question: 'How long do I have access to the course?',
    answer: 'You get lifetime access to the course content, including all future updates and new lessons.'
  },
  {
    question: 'Is there a certificate upon completion?',
    answer: 'Yes, you will receive a verified certificate of completion that you can add to your LinkedIn profile.'
  },
  {
    question: 'What if I\'m not satisfied with the course?',
    answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied, get a full refund within 30 days.'
  }
];

export default function CourseDetail() {
  const { id } = useParams();
  const [selectedTab, setSelectedTab] = useState('overview');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Header */}
            <div className="space-y-4">
              <Badge className="text-sm">{sampleCourse.category}</Badge>
              
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                {sampleCourse.title}
              </h1>
              
              <p className="text-lg text-muted-foreground">
                {sampleCourse.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current text-yellow-500" />
                  <span className="font-medium">{sampleCourse.rating}</span>
                  <span className="text-muted-foreground">({sampleCourse.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span>{sampleCourse.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span>{sampleCourse.duration}</span>
                </div>
              </div>
            </div>

            {/* Course Video Preview */}
            <div className="relative rounded-lg overflow-hidden bg-muted">
              <img 
                src={sampleCourse.thumbnail}
                alt="Course preview"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <Button size="lg" className="rounded-full p-6">
                  <Play className="w-8 h-8 ml-1" />
                </Button>
              </div>
            </div>

            {/* Course Syllabus */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Course Syllabus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {sampleCourse.syllabus.map((section, index) => (
                    <AccordionItem key={index} value={`section-${index}`}>
                      <AccordionTrigger className="text-left">
                        <div className="flex justify-between items-center w-full pr-4">
                          <span className="font-medium">{section.title}</span>
                          <div className="text-sm text-muted-foreground">
                            {section.lessons} lessons • {section.duration}
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 ml-4">
                          {section.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-center gap-2 text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Instructor Info */}
            <Card>
              <CardHeader>
                <CardTitle>About the Instructor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-4">
                  <img 
                    src={sampleCourse.instructor.image}
                    alt={sampleCourse.instructor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{sampleCourse.instructor.name}</h3>
                    <p className="text-muted-foreground">{sampleCourse.instructor.title}</p>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-current text-yellow-500" />
                        <span>{sampleCourse.instructor.rating} rating</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span>{sampleCourse.instructor.students.toLocaleString()} students</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Play className="w-4 h-4 text-muted-foreground" />
                        <span>{sampleCourse.instructor.courses} courses</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Student Testimonials */}
            <Card>
              <CardHeader>
                <CardTitle>Student Reviews</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {sampleCourse.testimonials.map((testimonial, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <span className="text-sm text-muted-foreground">{testimonial.role}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current text-yellow-500" />
                        ))}
                      </div>
                      <p className="text-muted-foreground">{testimonial.content}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardContent className="p-6 space-y-6">
                {/* Pricing */}
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-primary">${sampleCourse.price}</span>
                    <span className="text-lg text-muted-foreground line-through">${sampleCourse.originalPrice}</span>
                  </div>
                  <Badge variant="destructive" className="text-sm">
                    40% OFF - Limited Time
                  </Badge>
                </div>

                {/* Enroll Button */}
                <Button size="lg" className="w-full text-lg">
                  Enroll Now
                </Button>

                {/* Features */}
                <div className="space-y-3 pt-4 border-t">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-sm">Lifetime access</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-sm">Certificate of completion</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="text-sm">30-day money-back guarantee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <RefreshCw className="w-5 h-5 text-primary" />
                    <span className="text-sm">Free course updates</span>
                  </div>
                </div>

                {/* Support Info */}
                <div className="pt-4 border-t text-center text-sm text-muted-foreground">
                  <p>Need help? Contact our support team</p>
                  <Button variant="link" size="sm" className="text-primary p-0 h-auto">
                    support@eduplatform.com
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}