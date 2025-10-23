import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { accessRequestSchema, AccessRequestFormData } from "@/lib/validations";
import { api } from "@/lib/api";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { trackFormSubmission } from "@/lib/analytics";

const RequestAccess = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AccessRequestFormData>({
    resolver: zodResolver(accessRequestSchema),
  });

  const onSubmit = async (data: AccessRequestFormData) => {
    setIsSubmitting(true);
    try {
      await api.submitAccessRequest(data);
      toast({
        title: "Access request submitted!",
        description: "We typically respond within 1-2 business days.",
      });
      trackFormSubmission('Request Access', true);
      reset();
    } catch (error) {
      toast({
        title: "Error submitting request",
        description: "Please try again later or contact support.",
        variant: "destructive",
      });
      trackFormSubmission('Request Access', false);
    } finally{
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 pt-40">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <h1 className="text-5xl font-bold mb-6">Request Access</h1>
              <p className="text-xl text-muted-foreground">
                Join the waitlist for early access to AI Workers. We'll be in touch soon.
              </p>
            </div>

            <Card className="p-8 bg-secondary border-border">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <Input 
                    {...register("fullName")} 
                    className="bg-background border-border" 
                    placeholder="John Doe" 
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                  )}
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
                  <label className="block text-sm font-medium mb-2">Company Size</label>
                  <select 
                    {...register("companySize")}
                    className="w-full p-2 bg-background border border-border rounded-lg"
                  >
                    <option value="">Select size</option>
                    <option value="1-50">1-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501-1000">501-1000 employees</option>
                    <option value="1000+">1000+ employees</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Primary Use Case</label>
                  <select 
                    {...register("primaryUseCase")}
                    className="w-full p-2 bg-background border border-border rounded-lg"
                  >
                    <option value="">Select use case</option>
                    <option value="IT Operations">IT Operations</option>
                    <option value="HR Management">HR Management</option>
                    <option value="Procurement">Procurement</option>
                    <option value="Legal Operations">Legal Operations</option>
                    <option value="Travel Management">Travel Management</option>
                    <option value="Finance">Finance</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-white text-black hover:bg-white/90 font-medium" 
                  size="lg"
                >
                  {isSubmitting ? "Submitting..." : "Request Access"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We typically respond within 1-2 business days.
                </p>
              </form>
            </Card>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Fast Setup", description: "Get started in minutes" },
                { title: "No Code", description: "Zero technical knowledge required" },
                { title: "24/7 Support", description: "We're here to help" }
              ].map((feature, i) => (
                <div key={i} className="text-center p-6 bg-secondary rounded-xl border border-border">
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RequestAccess;
