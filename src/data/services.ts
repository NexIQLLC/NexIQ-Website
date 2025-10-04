import { Code, Cpu, CpuIcon, Database, FileText, GitBranch, Globe, Lock, MessageSquare, Server, Shield, Terminal, Zap, LucideIcon, Cpu as AiIcon, Code2, GitMerge, Zap as AutomationIcon, Globe as WebIcon, Database as DataIcon, Cloud, Smartphone, BarChart3, Users, ShoppingCart, Truck, BookOpen, Home, Shield as SecurityIcon, FileCode, GitPullRequest, CloudCog, BrainCircuit, UserCog, Cpu as ApiIcon, Workflow, Code2 as WebDevIcon } from 'lucide-react';

export interface Service {
  title: string;
  iconName: string;
  description: string;
  benefits: string[];
  audience: string[];
}

export const services: Service[] = [
  {
    title: 'HRIS & CRM Integration',
    iconName: 'UserCog',
    description: 'Bring your people and customers closer together with seamless HRIS and CRM integration. We connect your HR and CRM systems so employee data, payroll, performance, and customer interactions work in harmony.',
    benefits: [
      'Eliminate duplicate data entry',
      'Faster onboarding and offboarding',
      'Real-time insights for better decision-making',
      'Improved collaboration between HR and Sales teams'
    ],
    audience: ['Startups', 'SMEs', 'Enterprises']
  },
  {
    title: 'API Development',
    iconName: 'ApiIcon',
    description: 'Unlock the full potential of your systems with powerful APIs designed just for you. We build secure, scalable, and well-documented APIs that allow your apps, platforms, and third-party services to work together effortlessly.',
    benefits: [
      'Faster data flow between platforms',
      'Easy third-party integrations (payments, chat, analytics)',
      'Future-proof and scalable architecture',
      'Strong security and documentation'
    ],
    audience: ['Startups', 'SMEs', 'Enterprises']
  },
  {
    title: 'Workflow Automation',
    iconName: 'Workflow',
    description: 'Reduce repetitive manual tasks and let your business run on autopilot. Our automation workflows handle approvals, reporting, email notifications, file transfers, and more.',
    benefits: [
      'Save 50–70% of time on repetitive work',
      'Minimize human errors',
      'Boost team productivity',
      'Centralized and trackable workflows'
    ],
    audience: ['SMEs', 'Enterprises']
  },
  {
    title: 'Web Application Development',
    iconName: 'WebDevIcon',
    description: 'Build the future of your business online with our custom web applications. Whether you need an MVP to test your idea or an enterprise solution, we design apps that are fast, scalable, and user-friendly.',
    benefits: [
      'Optimized for speed and security',
      'Responsive across all devices',
      'Modern UI/UX for better user experience',
      'Scalable to support your business growth'
    ],
    audience: ['Startups', 'SMEs', 'Enterprises']
  },
  {
    title: 'AI & Machine Learning',
    iconName: 'AiIcon',
    description: 'Go beyond basic automation with AI-driven solutions that think, learn, and adapt. From predictive analytics to smart chatbots, our AI solutions help businesses make faster, smarter decisions.',
    benefits: [
      'Intelligent chatbots & virtual assistants',
      'Predictive analytics for sales & HR',
      'Smart data processing & reporting',
      'Self-learning workflows that improve over time'
    ],
    audience: ['SMEs', 'Enterprises']
  },
  {
    title: 'Cloud Solutions',
    iconName: 'Cloud',
    description: 'Leverage the power of cloud computing with our scalable and secure cloud solutions. We help businesses migrate, optimize, and manage their infrastructure in the cloud.',
    benefits: [
      'Scalable infrastructure on demand',
      'Reduced IT costs and improved efficiency',
      'Enhanced security and compliance',
      '24/7 monitoring and support'
    ],
    audience: ['Startups', 'SMEs', 'Enterprises']
  },
  {
    title: 'Data Analytics',
    iconName: 'BarChart3',
    description: 'Transform your data into actionable insights with our advanced analytics solutions. Make data-driven decisions that drive business growth and efficiency.',
    benefits: [
      'Custom dashboards and reports',
      'Real-time data visualization',
      'Predictive analytics and forecasting',
      'Data integration from multiple sources'
    ],
    audience: ['SMEs', 'Enterprises']
  },
  {
    title: 'Mobile App Development',
    iconName: 'Smartphone',
    description: 'Reach your customers on the go with our custom mobile applications. We create intuitive, high-performance apps for both iOS and Android platforms.',
    benefits: [
      'Native and cross-platform development',
      'Seamless user experience',
      'Secure data handling',
      'Ongoing support and maintenance'
    ],
    audience: ['Startups', 'SMEs', 'Enterprises']
  }
];

export const industries = [
  'SaaS',
  'Healthcare',
  'Finance',
  'HR Tech',
  'E-commerce',
  'Logistics',
  'Education',
  'Real Estate',
  'Retail',
  'Manufacturing',
  'Telecom',
  'Media & Entertainment'
];
