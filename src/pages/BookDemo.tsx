import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { demoRequestSchema, DemoRequestFormData } from "@/lib/validations";
import { api } from "@/lib/api";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";
import { trackFormSubmission } from "@/lib/analytics";

const BookDemo = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DemoRequestFormData>({
    resolver: zodResolver(demoRequestSchema),
  });

  const onSubmit = async (data: DemoRequestFormData) => {
    setIsSubmitting(true);
    try {
      await api.submitDemoRequest(data);
      toast({
        title: "Demo request submitted!",
        description: "We'll be in touch within 1-2 business days to schedule your demo.",
      });
      trackFormSubmission('Book Demo', true);
      reset();
    } catch (error) {
      toast({
        title: "Error submitting request",
        description: "Please try again later or contact support.",
        variant: "destructive",
      });
      trackFormSubmission('Book Demo', false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Book a Demo"
        description="See AI Workers in action. Schedule a personalized demo with our team to discover how autonomous AI can transform your operations."
        keywords="AI workers demo, book demo, AI automation demo, enterprise AI demonstration"
        canonicalUrl="/book-demo"
      />
      <Navigation />
      
      <section className="py-20 pt-40">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <h1 className="text-5xl font-bold mb-6">Book a Demo</h1>
              <p className="text-xl text-muted-foreground">
                See AI Workers in action. Schedule a personalized demo with our team.
              </p>
            </div>

            <Card className="p-8 bg-secondary border-border">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name *</label>
                    <Input 
                      {...register("firstName")} 
                      className="bg-background border-border" 
                      placeholder="John" 
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name *</label>
                    <Input 
                      {...register("lastName")} 
                      className="bg-background border-border" 
                      placeholder="Doe" 
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Work Email *</label>
                  <Input 
                    {...register("email")} 
                    type="email" 
                    className="bg-background border-border" 
                    placeholder="john@company.com" 
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Company *</label>
                  <Input 
                    {...register("company")} 
                    className="bg-background border-border" 
                    placeholder="Your Company" 
                  />
                  {errors.company && (
                    <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Job Title</label>
                  <Input 
                    {...register("jobTitle")} 
                    className="bg-background border-border" 
                    placeholder="Head of IT" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Department of Interest</label>
                  <select 
                    {...register("department")} 
                    className="w-full p-2 bg-background border border-border rounded-lg"
                  >
                    <option value="">Select a department</option>
                    <option value="IT Operations">IT Operations</option>
                    <option value="HR">HR</option>
                    <option value="Procurement">Procurement</option>
                    <option value="Legal">Legal</option>
                    <option value="Travel">Travel</option>
                    <option value="Finance">Finance</option>
                    <option value="Multiple Departments">Multiple Departments</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tell us about your needs</label>
                  <Textarea 
                    {...register("needs")} 
                    className="bg-background border-border min-h-[120px]" 
                    placeholder="What challenges are you looking to solve with AI Workers?"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-white text-black hover:bg-white/90 font-medium" 
                  size="lg"
                >
                  {isSubmitting ? "Submitting..." : "Schedule Demo"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookDemo;
