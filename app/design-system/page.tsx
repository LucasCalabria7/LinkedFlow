'use client';

import React, { useState } from 'react';
import { PlusIcon, CheckIcon, InfoIcon, AlertTriangleIcon, XCircleIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { designSystem } from '@/lib/design-system';

export default function DesignSystemPage() {
  const [alertVisible, setAlertVisible] = useState(true);

  return (
    <div className="container mx-auto py-12 px-4 max-w-6xl">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-urbanist font-bold text-slate-800 mb-4">LinkedFlow Design System</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          A modern, clean, and professional visual identity for the LinkedFlow SaaS platform inspired by RedactAI and premium SaaS products.
        </p>
      </div>

      {/* Color Palette */}
      <section className="mb-16">
        <h2 className="text-2xl font-urbanist font-semibold text-slate-800 mb-6">Color Palette</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Primary Colors */}
          <Card>
            <CardHeader>
              <CardTitle>Primary LinkedIn Colors</CardTitle>
              <CardDescription>The core brand colors based on LinkedIn's palette</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-5 gap-2">
                <div className="flex flex-col">
                  <div className="h-12 rounded-md bg-linkedin-50"></div>
                  <span className="text-xs mt-1 text-slate-600">50</span>
                </div>
                <div className="flex flex-col">
                  <div className="h-12 rounded-md bg-linkedin-100"></div>
                  <span className="text-xs mt-1 text-slate-600">100</span>
                </div>
                <div className="flex flex-col">
                  <div className="h-12 rounded-md bg-linkedin-300"></div>
                  <span className="text-xs mt-1 text-slate-600">300</span>
                </div>
                <div className="flex flex-col">
                  <div className="h-12 rounded-md bg-linkedin"></div>
                  <span className="text-xs mt-1 text-slate-600">500</span>
                </div>
                <div className="flex flex-col">
                  <div className="h-12 rounded-md bg-linkedin-700"></div>
                  <span className="text-xs mt-1 text-slate-600">700</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Slate Colors */}
          <Card>
            <CardHeader>
              <CardTitle>Slate Colors</CardTitle>
              <CardDescription>Neutral colors for text, backgrounds, and UI elements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-5 gap-2">
                <div className="flex flex-col">
                  <div className="h-12 rounded-md bg-slate-50 border border-slate-200"></div>
                  <span className="text-xs mt-1 text-slate-600">50</span>
                </div>
                <div className="flex flex-col">
                  <div className="h-12 rounded-md bg-slate-200"></div>
                  <span className="text-xs mt-1 text-slate-600">200</span>
                </div>
                <div className="flex flex-col">
                  <div className="h-12 rounded-md bg-slate-400"></div>
                  <span className="text-xs mt-1 text-slate-600">400</span>
                </div>
                <div className="flex flex-col">
                  <div className="h-12 rounded-md bg-slate-600"></div>
                  <span className="text-xs mt-1 text-slate-600">600</span>
                </div>
                <div className="flex flex-col">
                  <div className="h-12 rounded-md bg-slate-800"></div>
                  <span className="text-xs mt-1 text-slate-600">800</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feedback Colors */}
          <Card>
            <CardHeader>
              <CardTitle>Feedback Colors</CardTitle>
              <CardDescription>Colors for success, warning, and error states</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col">
                  <div className="h-12 rounded-md bg-success"></div>
                  <span className="text-xs mt-1 text-slate-600">Success</span>
                </div>
                <div className="flex flex-col">
                  <div className="h-12 rounded-md bg-warning"></div>
                  <span className="text-xs mt-1 text-slate-600">Warning</span>
                </div>
                <div className="flex flex-col">
                  <div className="h-12 rounded-md bg-error"></div>
                  <span className="text-xs mt-1 text-slate-600">Error</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Typography */}
      <section className="mb-16">
        <h2 className="text-2xl font-urbanist font-semibold text-slate-800 mb-6">Typography</h2>
        
        <Card>
          <CardHeader>
            <CardTitle>Font Families</CardTitle>
            <CardDescription>Inter for base text and Urbanist for headings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <h3 className="text-sm font-medium text-slate-500 mb-3">Headings (Urbanist)</h3>
              <div className="space-y-4">
                <div className="font-urbanist text-4xl font-bold">Heading 1 (text-4xl)</div>
                <div className="font-urbanist text-3xl font-bold">Heading 2 (text-3xl)</div>
                <div className="font-urbanist text-2xl font-semibold">Heading 3 (text-2xl)</div>
                <div className="font-urbanist text-xl font-semibold">Heading 4 (text-xl)</div>
                <div className="font-urbanist text-lg font-medium">Heading 5 (text-lg)</div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-slate-500 mb-3">Body Text (Inter)</h3>
              <div className="space-y-4">
                <p className="text-base">
                  Base text (text-base): The LinkedFlow platform helps professionals create engaging LinkedIn content with AI assistance.
                </p>
                <p className="text-sm">
                  Small text (text-sm): Perfect for secondary information, captions, and UI elements.
                </p>
                <p className="text-xs">
                  Extra small (text-xs): Used for badges, tags, and metadata.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Components */}
      <section className="mb-16">
        <h2 className="text-2xl font-urbanist font-semibold text-slate-800 mb-6">Components</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Buttons */}
          <Card>
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
              <CardDescription>Button variants and states</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-slate-500">Variants</h3>
                <div className="flex flex-wrap gap-3">
                  <PrimaryButton>Default</PrimaryButton>
                  <PrimaryButton variant="outline">Outline</PrimaryButton>
                  <PrimaryButton variant="secondary">Secondary</PrimaryButton>
                  <PrimaryButton variant="ghost">Ghost</PrimaryButton>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-slate-500">Sizes</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <PrimaryButton size="sm">Small</PrimaryButton>
                  <PrimaryButton>Default</PrimaryButton>
                  <PrimaryButton size="lg">Large</PrimaryButton>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-slate-500">States</h3>
                <div className="flex flex-wrap gap-3">
                  <PrimaryButton isLoading>Loading</PrimaryButton>
                  <PrimaryButton disabled>Disabled</PrimaryButton>
                  <PrimaryButton icon={<PlusIcon size={16} />}>With Icon</PrimaryButton>
                  <PrimaryButton icon={<CheckIcon size={16} />} iconPosition="right">Icon Right</PrimaryButton>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Inputs */}
          <Card>
            <CardHeader>
              <CardTitle>Inputs</CardTitle>
              <CardDescription>Form input variants and states</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-slate-500">Variants</h3>
                <div className="space-y-4">
                  <Input label="Default Input" placeholder="Enter your name" />
                  <Input label="Filled Input" variant="filled" placeholder="Enter your email" />
                  <Input label="Outline Input" variant="outline" placeholder="Enter your website" />
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-slate-500">States</h3>
                <div className="space-y-4">
                  <Input label="With Helper Text" placeholder="Username" helperText="Choose a unique username" />
                  <Input label="With Error" placeholder="Password" error="Password must be at least 8 characters" />
                  <Input label="Disabled Input" placeholder="Not editable" disabled />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cards */}
          <Card>
            <CardHeader>
              <CardTitle>Cards</CardTitle>
              <CardDescription>Card variants and usage examples</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Card variant="default" className="h-32 flex items-center justify-center">
                  <p className="text-sm font-medium">Default Card</p>
                </Card>
                <Card variant="outline" className="h-32 flex items-center justify-center">
                  <p className="text-sm font-medium">Outline Card</p>
                </Card>
                <Card variant="elevated" className="h-32 flex items-center justify-center">
                  <p className="text-sm font-medium">Elevated Card</p>
                </Card>
                <Card variant="glass" className="h-32 flex items-center justify-center">
                  <p className="text-sm font-medium">Glass Card</p>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Badges */}
          <Card>
            <CardHeader>
              <CardTitle>Badges</CardTitle>
              <CardDescription>Badge variants and styles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-slate-500">Variants</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="error">Error</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="linkedin">LinkedIn</Badge>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-slate-500">With Dot</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge withDot>Active</Badge>
                  <Badge variant="success" withDot>Online</Badge>
                  <Badge variant="warning" withDot>Away</Badge>
                  <Badge variant="error" withDot>Offline</Badge>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-slate-500">With Icon</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge icon={<CheckIcon size={12} />}>Verified</Badge>
                  <Badge variant="warning" icon={<AlertTriangleIcon size={12} />}>Warning</Badge>
                  <Badge removable onRemove={() => console.log('Remove clicked')}>Removable</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Alerts */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Alerts</CardTitle>
              <CardDescription>Alert variants and styles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Alert variant="default" withIcon>
                  <AlertTitle>Default Alert</AlertTitle>
                  <AlertDescription>This is a default alert with an icon.</AlertDescription>
                </Alert>
                
                <Alert variant="info" withIcon>
                  <AlertTitle>Information</AlertTitle>
                  <AlertDescription>This is an informational alert with an icon.</AlertDescription>
                </Alert>
                
                <Alert variant="success" withIcon>
                  <AlertTitle>Success</AlertTitle>
                  <AlertDescription>Your changes have been saved successfully.</AlertDescription>
                </Alert>
                
                <Alert variant="warning" withIcon>
                  <AlertTitle>Warning</AlertTitle>
                  <AlertDescription>Please review your information before proceeding.</AlertDescription>
                </Alert>
                
                <Alert variant="error" withIcon>
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>There was a problem with your request.</AlertDescription>
                </Alert>
                
                {alertVisible && (
                  <Alert 
                    variant="info" 
                    withIcon 
                    dismissible 
                    onDismiss={() => setAlertVisible(false)}
                  >
                    <AlertTitle>Dismissible Alert</AlertTitle>
                    <AlertDescription>This alert can be dismissed by clicking the X button.</AlertDescription>
                  </Alert>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
