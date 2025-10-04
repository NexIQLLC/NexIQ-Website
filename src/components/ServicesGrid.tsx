'use client';

import { motion } from 'framer-motion';
import { services } from "@/data/services";
import { GitBranch, Code, Terminal, MessageSquare, Server, Check } from "lucide-react";

type ServicesGridProps = {
  maxItems?: number;
  className?: string;
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function ServicesGrid({ maxItems, className = '' }: ServicesGridProps) {
  const displayedServices = maxItems ? services.slice(0, maxItems) : services;

  return (
    <div className={className}>
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {displayedServices.map((service, index) => (
          <motion.div
            key={service.title}
            variants={fadeInUp}
            className="group bg-card border border-border/30 rounded-xl p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary mr-4">
                {service.iconName === 'GitBranch' && <GitBranch className="h-5 w-5" />}
                {service.iconName === 'Code' && <Code className="h-5 w-5" />}
                {service.iconName === 'Terminal' && <Terminal className="h-5 w-5" />}
                {service.iconName === 'MessageSquare' && <MessageSquare className="h-5 w-5" />}
                {service.iconName === 'Server' && <Server className="h-5 w-5" />}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  {service.description}
                </p>
              </div>
            </div>
            
            <ul className="mt-4 space-y-2">
              {service.benefits.slice(0, 3).map((benefit, i) => (
                <li key={i} className="flex items-start text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
