import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import SEO from '../components/SEO';

const TrustCenter = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Trust Center"
        description="Security, compliance, and data privacy at gen.work. GDPR, SOC 2 Type II, ISO 27001, and HIPAA compliant. Enterprise-grade security for your AI Workers."
        keywords="AI security, SOC 2, GDPR compliance, ISO 27001, HIPAA, data privacy, enterprise security"
        canonicalUrl="/trust-center"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Trust Center
            </h1>
            <p className="text-xl text-gray-400">
              Built for the security, compliance, and control that modern enterprises require
            </p>
          </div>
        </div>
      </section>

      {/* Security Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              <Card className="bg-secondary border-border text-center p-8">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">GDPR</h3>
                <p className="text-sm text-muted-foreground">Compliant</p>
              </Card>

              <Card className="bg-secondary border-border text-center p-8">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">SOC 2</h3>
                <p className="text-sm text-muted-foreground">Type II Certified</p>
              </Card>

              <Card className="bg-secondary border-border text-center p-8">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">ISO 27001</h3>
                <p className="text-sm text-muted-foreground">Certified</p>
              </Card>

              <Card className="bg-secondary border-border text-center p-8">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">HIPAA</h3>
                <p className="text-sm text-muted-foreground">Compliant</p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-center">Security & Compliance</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <CardTitle>Data Security</CardTitle>
                  <CardDescription>Enterprise-grade security for your data</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-500/20 text-green-500 border-green-500/30 mt-1">✓</Badge>
                    <div>
                      <h4 className="font-semibold mb-1">End-to-End Encryption</h4>
                      <p className="text-sm text-muted-foreground">All data is encrypted in transit (TLS 1.3) and at rest (AES-256)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-500/20 text-green-500 border-green-500/30 mt-1">✓</Badge>
                    <div>
                      <h4 className="font-semibold mb-1">Data Isolation</h4>
                      <p className="text-sm text-muted-foreground">Customer data is logically separated and never shared between tenants</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-500/20 text-green-500 border-green-500/30 mt-1">✓</Badge>
                    <div>
                      <h4 className="font-semibold mb-1">Regular Security Audits</h4>
                      <p className="text-sm text-muted-foreground">Third-party penetration testing and security assessments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-500/20 text-green-500 border-green-500/30 mt-1">✓</Badge>
                    <div>
                      <h4 className="font-semibold mb-1">Secure Development</h4>
                      <p className="text-sm text-muted-foreground">SDLC includes security reviews, code scanning, and vulnerability management</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Access Control</CardTitle>
                  <CardDescription>Granular control over who can access what</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-500/20 text-green-500 border-green-500/30 mt-1">✓</Badge>
                    <div>
                      <h4 className="font-semibold mb-1">Role-Based Access Control (RBAC)</h4>
                      <p className="text-sm text-muted-foreground">Define custom roles and permissions for your organization</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-500/20 text-green-500 border-green-500/30 mt-1">✓</Badge>
                    <div>
                      <h4 className="font-semibold mb-1">Single Sign-On (SSO)</h4>
                      <p className="text-sm text-muted-foreground">SAML 2.0 and OAuth 2.0 support for enterprise identity providers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-500/20 text-green-500 border-green-500/30 mt-1">✓</Badge>
                    <div>
                      <h4 className="font-semibold mb-1">Multi-Factor Authentication</h4>
                      <p className="text-sm text-muted-foreground">MFA required for all administrative access</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-500/20 text-green-500 border-green-500/30 mt-1">✓</Badge>
                    <div>
                      <h4 className="font-semibold mb-1">Audit Logs</h4>
                      <p className="text-sm text-muted-foreground">Comprehensive logging of all user actions and system events</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Privacy</CardTitle>
                  <CardDescription>Your data, your control</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-500/20 text-green-500 border-green-500/30 mt-1">✓</Badge>
                    <div>
                      <h4 className="font-semibold mb-1">Data Residency</h4>
                      <p className="text-sm text-muted-foreground">Choose where your data is stored (US, EU, or other regions)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-500/20 text-green-500 border-green-500/30 mt-1">✓</Badge>
                    <div>
                      <h4 className="font-semibold mb-1">Right to Delete</h4>
                      <p className="text-sm text-muted-foreground">Complete data deletion upon request within 30 days</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-500/20 text-green-500 border-green-500/30 mt-1">✓</Badge>
                    <div>
                      <h4 className="font-semibold mb-1">Data Portability</h4>
                      <p className="text-sm text-muted-foreground">Export your data at any time in standard formats</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-500/20 text-green-500 border-green-500/30 mt-1">✓</Badge>
                    <div>
                      <h4 className="font-semibold mb-1">Privacy by Design</h4>
                      <p className="text-sm text-muted-foreground">We collect only the minimum data necessary for service delivery</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>AI & Model Security</CardTitle>
                  <CardDescription>Responsible AI with your choice of LLMs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-500/20 text-green-500 border-green-500/30 mt-1">✓</Badge>
                    <div>
                      <h4 className="font-semibold mb-1">Bring Your Own LLM</h4>
                      <p className="text-sm text-muted-foreground">Use your own AI models or choose from our certified partners</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-500/20 text-green-500 border-green-500/30 mt-1">✓</Badge>
                    <div>
                      <h4 className="font-semibold mb-1">No Training on Your Data</h4>
                      <p className="text-sm text-muted-foreground">Your data is never used to train AI models without explicit consent</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-500/20 text-green-500 border-green-500/30 mt-1">✓</Badge>
                    <div>
                      <h4 className="font-semibold mb-1">Explainable AI</h4>
                      <p className="text-sm text-muted-foreground">Full audit trail of AI decisions and reasoning</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-500/20 text-green-500 border-green-500/30 mt-1">✓</Badge>
                    <div>
                      <h4 className="font-semibold mb-1">Human Oversight</h4>
                      <p className="text-sm text-muted-foreground">Critical actions always require human approval</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Infrastructure */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle>Infrastructure & Reliability</CardTitle>
                <CardDescription>Built on enterprise-grade cloud infrastructure</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">99.9% Uptime SLA</h4>
                    <p className="text-sm text-muted-foreground">Industry-leading availability guarantee</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Multi-Region Redundancy</h4>
                    <p className="text-sm text-muted-foreground">Automatic failover across availability zones</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Daily Backups</h4>
                    <p className="text-sm text-muted-foreground">Automated backups with point-in-time recovery</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Documentation */}
            <Card>
              <CardHeader>
                <CardTitle>Documentation & Resources</CardTitle>
                <CardDescription>Access our security documentation and reports</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-secondary rounded-lg hover:bg-muted transition-colors cursor-pointer">
                  <span className="font-medium">SOC 2 Type II Report</span>
                  <Badge>Available on request</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-secondary rounded-lg hover:bg-muted transition-colors cursor-pointer">
                  <span className="font-medium">Penetration Test Results</span>
                  <Badge>Available on request</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-secondary rounded-lg hover:bg-muted transition-colors cursor-pointer">
                  <span className="font-medium">Security Whitepaper</span>
                  <Badge>Download</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-secondary rounded-lg hover:bg-muted transition-colors cursor-pointer">
                  <span className="font-medium">Privacy Policy</span>
                  <Badge>View</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrustCenter;

