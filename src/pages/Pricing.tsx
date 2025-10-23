import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Switch } from '../components/ui/switch';
import { Label } from '../components/ui/label';
import SEO from '../components/SEO';

const pricingTiers = [
  {
    name: 'Starter',
    description: 'Perfect for small teams getting started',
    monthlyPrice: 299,
    annualPrice: 2990,
    features: [
      '3 AI Workers',
      'Up to 500 tasks/month',
      'Basic workflow automation',
      'Email support',
      'Slack integration',
      'Basic analytics',
      '1 department coverage',
    ],
    notIncluded: [
      'Custom workflows',
      'Priority support',
      'Advanced integrations',
      'Dedicated success manager',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    description: 'For growing teams scaling operations',
    monthlyPrice: 799,
    annualPrice: 7990,
    features: [
      '10 AI Workers',
      'Up to 2,500 tasks/month',
      'Advanced workflow automation',
      'Priority email & chat support',
      'All integrations',
      'Advanced analytics & reporting',
      'Up to 3 departments',
      'Custom workflow builder',
      'API access',
      'SSO authentication',
    ],
    notIncluded: [
      'Dedicated success manager',
      'Custom AI Worker training',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large organizations at scale',
    monthlyPrice: null,
    annualPrice: null,
    features: [
      'Unlimited AI Workers',
      'Unlimited tasks',
      'Enterprise-grade automation',
      '24/7 dedicated support',
      'All integrations + custom',
      'Real-time analytics & BI',
      'Unlimited departments',
      'Custom AI Worker training',
      'Dedicated success manager',
      'SLA guarantees',
      'On-premise deployment option',
      'White-label capabilities',
      'Advanced security & compliance',
    ],
    notIncluded: [],
    cta: 'Contact Sales',
    popular: false,
  },
];

const allFeatures = [
  {
    category: 'AI Workers',
    features: [
      { name: 'Pre-trained AI Workers', starter: true, pro: true, enterprise: true },
      { name: 'Custom AI Worker creation', starter: false, pro: true, enterprise: true },
      { name: 'AI Worker analytics', starter: true, pro: true, enterprise: true },
      { name: 'Advanced AI training', starter: false, pro: false, enterprise: true },
    ],
  },
  {
    category: 'Automation',
    features: [
      { name: 'Basic workflow automation', starter: true, pro: true, enterprise: true },
      { name: 'Advanced workflow builder', starter: false, pro: true, enterprise: true },
      { name: 'Custom integrations', starter: false, pro: true, enterprise: true },
      { name: 'Enterprise orchestration', starter: false, pro: false, enterprise: true },
    ],
  },
  {
    category: 'Support',
    features: [
      { name: 'Email support', starter: true, pro: true, enterprise: true },
      { name: 'Priority support', starter: false, pro: true, enterprise: true },
      { name: 'Dedicated success manager', starter: false, pro: false, enterprise: true },
      { name: '24/7 phone support', starter: false, pro: false, enterprise: true },
    ],
  },
  {
    category: 'Security & Compliance',
    features: [
      { name: 'SOC 2 Type II', starter: true, pro: true, enterprise: true },
      { name: 'SSO/SAML', starter: false, pro: true, enterprise: true },
      { name: 'Advanced audit logs', starter: false, pro: true, enterprise: true },
      { name: 'On-premise deployment', starter: false, pro: false, enterprise: true },
    ],
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Pricing"
        description="Simple, transparent pricing for AI Workers. Choose from Starter ($299/mo), Professional ($999/mo), or Enterprise plans. 14-day free trial included."
        keywords="AI worker pricing, enterprise AI cost, automation pricing, AI agents cost"
        canonicalUrl="/pricing"
      />
      <Navigation />

      <div className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">
              Pricing
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Choose the plan that fits your team. All plans include a 14-day free trial.
            </p>

            <div className="flex items-center justify-center gap-4">
              <Label htmlFor="billing-toggle" className={`text-lg ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>
                Monthly
              </Label>
              <Switch
                id="billing-toggle"
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
              />
              <Label htmlFor="billing-toggle" className={`text-lg ${isAnnual ? 'text-white' : 'text-gray-500'}`}>
                Annual
                <Badge className="ml-2 bg-green-500/20 text-green-400 border-green-500/30">
                  Save 17%
                </Badge>
              </Label>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                className={`relative border-2 ${
                  tier.popular
                    ? 'border-white bg-white text-black'
                    : 'border-gray-800 bg-gray-900/50 backdrop-blur'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-black text-white">Most Popular</Badge>
                  </div>
                )}

                <CardHeader>
                  <CardTitle className={tier.popular ? 'text-black' : 'text-white'}>
                    {tier.name}
                  </CardTitle>
                  <CardDescription className={tier.popular ? 'text-gray-700' : 'text-gray-400'}>
                    {tier.description}
                  </CardDescription>
                  <div className="pt-4">
                    {tier.monthlyPrice ? (
                      <div className="flex items-baseline">
                        <span className={`text-5xl font-bold ${tier.popular ? 'text-black' : 'text-white'}`}>
                          ${isAnnual ? Math.floor(tier.annualPrice / 12) : tier.monthlyPrice}
                        </span>
                        <span className={tier.popular ? 'text-gray-600' : 'text-gray-400'}>
                          /month
                        </span>
                      </div>
                    ) : (
                      <div className={`text-4xl font-bold ${tier.popular ? 'text-black' : 'text-white'}`}>
                        Custom
                      </div>
                    )}
                    {tier.monthlyPrice && isAnnual && (
                      <p className={`text-sm mt-1 ${tier.popular ? 'text-gray-600' : 'text-gray-500'}`}>
                        Billed ${tier.annualPrice} annually
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <Link to={tier.monthlyPrice ? '/request-access' : '/book-demo'}>
                    <Button
                      className={`w-full ${
                        tier.popular
                          ? 'bg-black text-white hover:bg-gray-800'
                          : 'bg-white text-black hover:bg-gray-200'
                      }`}
                    >
                      {tier.cta}
                    </Button>
                  </Link>

                  <div className="space-y-3">
                    <p className={`text-sm font-semibold ${tier.popular ? 'text-black' : 'text-white'}`}>
                      Includes:
                    </p>
                    <ul className="space-y-2">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <svg
                            className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.popular ? 'text-green-600' : 'text-green-400'}`}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className={tier.popular ? 'text-gray-700' : 'text-gray-300'}>
                            {feature}
                          </span>
                        </li>
                      ))}
                      {tier.notIncluded.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 opacity-50">
                          <svg
                            className="w-5 h-5 flex-shrink-0 mt-0.5 text-gray-500"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                          <span className={tier.popular ? 'text-gray-500' : 'text-gray-600'}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Compare all features</h2>
              <p className="text-gray-400 text-lg">
                See what's included in each plan
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left p-6 text-white font-semibold">Features</th>
                      <th className="text-center p-6 text-white font-semibold">Starter</th>
                      <th className="text-center p-6 text-white font-semibold bg-white/5">Professional</th>
                      <th className="text-center p-6 text-white font-semibold">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allFeatures.map((category, idx) => (
                      <>
                        <tr key={category.category} className="border-b border-gray-800">
                          <td colSpan={4} className="p-4 bg-gray-800/50">
                            <span className="text-sm font-semibold text-white uppercase tracking-wide">
                              {category.category}
                            </span>
                          </td>
                        </tr>
                        {category.features.map((feature) => (
                          <tr key={feature.name} className="border-b border-gray-800">
                            <td className="p-4 text-gray-300">{feature.name}</td>
                            <td className="p-4 text-center">
                              {feature.starter ? (
                                <svg className="w-5 h-5 text-green-400 mx-auto" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                  <path d="M5 13l4 4L19 7"></path>
                                </svg>
                              ) : (
                                <span className="text-gray-600">—</span>
                              )}
                            </td>
                            <td className="p-4 text-center bg-white/5">
                              {feature.pro ? (
                                <svg className="w-5 h-5 text-green-400 mx-auto" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                  <path d="M5 13l4 4L19 7"></path>
                                </svg>
                              ) : (
                                <span className="text-gray-600">—</span>
                              )}
                            </td>
                            <td className="p-4 text-center">
                              {feature.enterprise ? (
                                <svg className="w-5 h-5 text-green-400 mx-auto" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                  <path d="M5 13l4 4L19 7"></path>
                                </svg>
                              ) : (
                                <span className="text-gray-600">—</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-white/5 to-white/10 border border-white/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
            <p className="text-gray-400 text-lg mb-8">
              Our team is here to help you find the right plan for your organization.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/book-demo">
                <Button className="bg-white text-black hover:bg-gray-200">
                  Schedule a Demo
                </Button>
              </Link>
              <Link to="/request-access">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

