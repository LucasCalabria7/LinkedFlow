import Link from 'next/link';
import { ArrowRight, CheckCircle, Building2, Users, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import PublicLayout from '@/layouts/PublicLayout';

export default function Home() {
  const features = [
    {
      icon: Building2,
      title: 'Enterprise Ready',
      description: 'Built for scale with enterprise-grade security and reliability.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamlessly collaborate with your team in real-time.'
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Insights',
      description: 'Get powerful insights with advanced analytics and reporting.'
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'Bank-level security with full compliance certification.'
    }
  ];

  const benefits = [
    'Advanced workflow automation',
    'Real-time collaboration tools',
    'Enterprise-grade security',
    'Comprehensive analytics',
    '24/7 customer support',
    'Custom integrations'
  ];

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Streamline Your
              <span className="text-blue-600"> Business Flow</span>
            </h1>
            <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
              LinkedFlow helps modern teams automate workflows, collaborate efficiently, 
              and scale their operations with powerful enterprise tools.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Why Choose LinkedFlow?
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              Everything you need to optimize your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl text-slate-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Built for Modern Teams
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                LinkedFlow provides everything your team needs to work efficiently, 
                collaborate seamlessly, and achieve better results.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Ready to get started?
                </h3>
                <p className="text-slate-600 mb-6">
                  Join thousands of teams already using LinkedFlow to streamline their operations.
                </p>
                <Link href="/register">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Start Your Free Trial
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}