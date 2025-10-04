'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2,
  GitBranch,
  Code,
  Zap,
  Globe,
  Cpu,
  Lock,
  Terminal,
  Server,
  MessageSquare,
  FileText
} from "lucide-react";
import { LucideIcon } from 'lucide-react';

interface TechStackItem {
  name: string;
  iconName: string;
  className?: string;
}

interface ServiceCardProps {
  title: string;
  iconName: string;
  description: string;
  benefits: string[];
  audience: string[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'GitBranch': GitBranch,
  'Code': Code,
  'Zap': Zap,
  'Globe': Globe,
  'Cpu': Cpu,
  'Lock': Lock,
  'Terminal': Terminal,
  'Server': Server,
  'MessageSquare': MessageSquare,
  'CpuIcon': Cpu,
  'FileText': FileText
};

export function ServiceCard({ 
  title, 
  iconName, 
  description, 
  benefits,  
  audience 
}: ServiceCardProps) {
  const Icon = iconMap[iconName] || (() => <span>📊</span>);
  
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="md:flex">
        <div className="p-6 md:p-8 flex-shrink-0 bg-primary/5 dark:bg-primary/10 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
            <Icon className="w-8 h-8" />
          </div>
        </div>
        <div className="p-6 md:p-8 flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <h3 className="text-2xl font-bold text-foreground">{title}</h3>
            <div className="flex flex-wrap gap-2">
              {audience.map((audienceItem, i) => (
                <Badge key={i} variant="outline" className="text-xs">
                  {audienceItem}
                </Badge>
              ))}
            </div>
          </div>
          
          <p className="text-muted-foreground mb-6">{description}</p>
          
          <div className="mb-6">
            <h4 className="font-medium mb-3 text-foreground">Key Benefits:</h4>
            <ul className="space-y-2">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
}
