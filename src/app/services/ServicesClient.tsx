'use client';

import { motion, Variants } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";
import { services, industries } from "@/data/services";
import { 
  ChevronRight, 
  ArrowRight, 
  Zap, 
  Code, 
  Database, 
  Cpu, 
  GitBranch, 
  Terminal, 
  MessageSquare, 
  Server, 
  Check, 
  Code2, 
  Cloud, 
  Smartphone, 
  BarChart3, 
  BrainCircuit, 
  Globe, 
  Sparkles,
  UserCog,
  Cpu as ApiIcon,
  Workflow,
  Code2 as WebDevIcon
} from "lucide-react";
import { ParticlesField } from "@/components/ParticlesField";
import TechStackCarousel from "@/components/TechStackCarousel";
import { DecryptedText } from "@/components/ui/decrypted-text";

// Dynamically import Cubes with SSR disabled
const Cubes = dynamic(() => import('@/components/ui/cubes/cubes'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-muted/20" />
});

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ServicesClient() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-0 min-h-screen flex items-center overflow-hidden">
        <ParticlesField />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="h-full flex flex-col lg:flex-row items-center justify-between gap-8 py-12 lg:py-0">
            {/* Left side - Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Zap className="h-3.5 w-3.5" />
                <span>Innovative Technology Solutions</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                <DecryptedText delay={800} duration={80}>Transform Your Business with Our </DecryptedText>
                <span className="text-primary">
                  <DecryptedText delay={1000} duration={40}>Tech Solutions</DecryptedText>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-left">
                We craft custom digital solutions that drive growth, efficiency, and innovation for forward-thinking businesses.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="gap-2 group"
                  onClick={() => {
                    const contactSection = document.getElementById('contact-section');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>

            {/* Right side - Cubes animation */}
            <div className="relative w-full lg:w-[40%] h-[300px] lg:h-[450px] flex items-center justify-center">
              <div className="relative w-full h-full">
                <Cubes 
                  gridSize={6}
                  maxAngle={30}
                  radius={2.5}
                  borderStyle="2px dashed #5227FF"
                  faceColor="transparent"
                  rippleColor="hsl(var(--primary))"
                  rippleSpeed={1}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-primary font-medium mb-3 text-sm tracking-wider">OUR EXPERTISE</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              <DecryptedText delay={500} duration={30}>Comprehensive Digital Solutions</DecryptedText>
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Empowering your business with cutting-edge technology solutions tailored to your unique needs
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-5 rounded-lg shadow-sm border border-border/30 hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-2.5 rounded-lg text-primary flex-shrink-0">
                    {service.iconName === 'UserCog' && <UserCog className="h-6 w-6" />}
                    {service.iconName === 'ApiIcon' && <ApiIcon className="h-6 w-6" />}
                    {service.iconName === 'Workflow' && <Workflow className="h-6 w-6" />}
                    {service.iconName === 'WebDevIcon' && <WebDevIcon className="h-6 w-6" />}
                    {service.iconName === 'AiIcon' && <BrainCircuit className="h-6 w-6" />}
                    {service.iconName === 'Cloud' && <Cloud className="h-6 w-6" />}
                    {service.iconName === 'BarChart3' && <BarChart3 className="h-6 w-6" />}
                    {service.iconName === 'Smartphone' && <Smartphone className="h-6 w-6" />}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>
                <ul className="space-y-2.5 mt-4">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start text-sm text-muted-foreground group">
                      <Check className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:text-foreground transition-colors">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              hidden: { opacity: 0, y: 40 }
            }}
            className="text-center mb-6 mt-20"
          >
            <span className="inline-block text-primary font-medium mb-2">Technologies We Use</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Our Technology Stack</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-1">
              We leverage cutting-edge technologies to build robust and scalable solutions
            </p>
          </motion.div>
          <TechStackCarousel />
        </div>
      </section>

      {/* Industries Section */}
      <section className="relative py-0 min-h-screen flex items-center justify-center overflow-hidden bg-background">
        <ParticlesField />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              hidden: { opacity: 0, y: 20 }
            }}
            className="text-center mb-8"
          >
            <span className="inline-block text-primary font-medium mb-3">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Industries We Serve</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tailored technology solutions for your industry&apos;s unique challenges
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-6xl mx-auto"
          >
            {industries.map((industry, index) => {
              const colors = [
                'from-blue-500/10 to-blue-500/5',
                'from-purple-500/10 to-purple-500/5',
                'from-amber-500/10 to-amber-500/5'
              ];
              const color = colors[index % colors.length];
              
              return (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02
                  }}
                  transition={{ duration: 0.3 }}
                  className="group h-full"
                >
                  <div className={`h-full bg-gradient-to-br ${color} rounded-2xl p-0.5`}>
                    <div className="h-full bg-background/80 backdrop-blur-sm p-5 rounded-[15px] border border-muted/10 group-hover:border-primary/20 transition-all duration-300 flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                        {index % 3 === 0 && <Code className="h-5 w-5 text-primary" />}
                        {index % 3 === 1 && <Database className="h-5 w-5 text-primary" />}
                        {index % 3 === 2 && <Cpu className="h-5 w-5 text-primary" />}
                      </div>
                      <h3 className="font-medium text-foreground text-sm sm:text-base">{industry}</h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative pt-8 pb-16 md:pt-12 md:pb-20 min-h-[40vh] flex items-center justify-center overflow-hidden bg-muted/5">
        <ParticlesField />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block text-primary font-medium mb-2">Ready to start?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Let&apos;s Build Something Amazing</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your project needs.
            </p>
            <Button size="lg" className="gap-2 group">
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}