import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const testimonials = [
  {
    id: 1,
    quote: "gen.work transformed our IT operations. We've automated 70% of routine service requests, freeing our team to focus on strategic initiatives.",
    author: "Sarah Chen",
    role: "VP of IT Operations",
    company: "TechCorp",
    image: "/testimonials/sarah.jpg",
  },
  {
    id: 2,
    quote: "The AI Workers handle procurement approvals seamlessly. What used to take days now happens in hours. Our procurement team loves it.",
    author: "Michael Rodriguez",
    role: "Head of Procurement",
    company: "Global Manufacturing Inc",
    image: "/testimonials/michael.jpg",
  },
  {
    id: 3,
    quote: "Compliance was our biggest challenge. gen.work's policy-aware agents ensure every action meets our regulatory requirements automatically.",
    author: "Jennifer Walsh",
    role: "Chief Compliance Officer",
    company: "FinServe Solutions",
    image: "/testimonials/jennifer.jpg",
  },
  {
    id: 4,
    quote: "From employee onboarding to benefits administration, gen.work handles it all. Our HR team can finally focus on culture and talent development.",
    author: "David Kim",
    role: "CHRO",
    company: "Enterprise Dynamics",
    image: "/testimonials/david.jpg",
  },
  {
    id: 5,
    quote: "The ROI was immediate. Within 3 months, we reduced operational costs by 45% while improving response times across all departments.",
    author: "Amanda Foster",
    role: "COO",
    company: "ScaleUp Ventures",
    image: "/testimonials/amanda.jpg",
  },
];

export const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <Card className="p-8 md:p-12 bg-secondary border-border relative overflow-hidden">
        {/* Quote Icon */}
        <div className="absolute top-6 left-6 text-accent/20">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
            <path d="M12 34h8V22H8v8c0 2.21 1.79 4 4 4zm6-10v6h-4c-1.1 0-2-.9-2-2v-4h6zm12-2c2.21 0 4-1.79 4-4v-8h-8v8h8v4c0 2.21-1.79 4-4 4v4c4.42 0 8-3.58 8-8v-8h-8v8z"/>
          </svg>
        </div>

        {/* Testimonial Content */}
        <div className="relative z-10">
          <p className="text-xl md:text-2xl mb-8 leading-relaxed text-foreground">
            "{currentTestimonial.quote}"
          </p>

          <div className="flex items-center gap-4">
            {/* Avatar Circle with Initials */}
            <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
              <span className="text-lg font-bold text-accent">
                {currentTestimonial.author.split(' ').map(n => n[0]).join('')}
              </span>
            </div>

            <div>
              <div className="font-semibold text-lg">{currentTestimonial.author}</div>
              <div className="text-sm text-muted-foreground">
                {currentTestimonial.role}, {currentTestimonial.company}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-2 mt-8 justify-center md:justify-end">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="bg-background hover:bg-accent/10 border-border"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="bg-background hover:bg-accent/10 border-border"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </Card>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'w-8 bg-accent'
                : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSlider;

