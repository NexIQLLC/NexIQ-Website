'use client';

import { Button } from '@/components/ui/button';
import { ParticlesField } from '@/components/ParticlesField';
import { Users, Award, Globe, Shield, TrendingUp, Target } from 'lucide-react';
import MagnetLines from '@/components/MagnetLines';
import { DecryptedText } from "@/components/ui/decrypted-text";
import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutUs = () => {
  const workProcess = [
    { step: 'Discovery', description: 'Workshops and deep-dives to align on business goals and technical requirements.' },
    { step: 'Design', description: 'Blueprinting solutions that are scalable, secure, and future-ready.' },
    { step: 'Agile Development', description: 'Iterative sprints delivering working solutions every few weeks.' },
    { step: 'Quality Assurance', description: 'Rigorous testing for performance, security, and reliability.' },
    { step: 'Deployment & Support', description: 'Zero-downtime releases, 24/7 monitoring, and SLA-backed maintenance.' }
  ];

  const whyChooseUs = [
    { title: 'Domain Expertise', description: 'Decades of collective experience across finance, healthcare, logistics, and HR tech.', icon: Award },
    { title: 'Security-First', description: 'Threat modeling, OWASP-aligned reviews, and end-to-end encryption.', icon: Shield },
    { title: 'Scalability', description: 'Clean architectures that grow with your business.', icon: TrendingUp },
    { title: 'Transparency', description: 'Clear communication, live sprint demos, and regular status updates.', icon: Users }
  ];

  // Animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7 }
    }
  };

  const slideInRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7 }
    }
  };

  // Reusable component for sections with scroll animation
  const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-auto min-h-[70vh] flex items-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <ParticlesField />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div 
              className="max-w-3xl text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
                <DecryptedText delay={500} duration={30}>About </DecryptedText>
                <span className="text-primary">
                  <DecryptedText delay={700} duration={30}>NexIQ</DecryptedText>
                </span>
              </h1>
              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Empowering businesses through innovative technology solutions and strategic digital transformation.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Button 
                  variant="default" 
                  size="lg"
                  onClick={() => window.location.href = '/services'}
                  className="z-10 dark:text-black px-8 py-6 text-lg"
                >
                  Explore Our Services
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.location.href = '/contact'}
                  className="z-10 px-8 py-6 text-lg"
                >
                  Get in Touch
                </Button>
              </motion.div>
            </motion.div>
            
            {/* MagnetLines - Desktop Only */}
            <motion.div 
              className="hidden lg:block w-[40vmin] xl:w-[45vmin] 2xl:w-[50vmin]"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            >
              <MagnetLines
                rows={9}
                columns={9}
                containerSize="100%"
                lineColor="#3b82f6"
                lineHeight="5vmin"
                baseAngle={0}
                className="dark:[--line-color:rgb(147_197_253)]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 relative overflow-hidden">
        <ParticlesField />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <motion.div 
              className="max-w-4xl mx-auto text-center mb-12"
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Mission & Vision</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Guiding principles that drive our commitment to excellence and innovation
              </p>
            </motion.div>
          </AnimatedSection>
          
          <AnimatedSection>
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              variants={staggerContainer}
            >
              <motion.div 
                className="bg-background p-8 rounded-lg shadow-sm border"
                variants={slideInLeft}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="bg-primary/10 p-3 rounded-full mr-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Target className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver precision-engineered software solutions that bridge systems, accelerate time-to-value, 
                  and enable our clients to adapt rapidly in an ever-evolving digital landscape.
                </p>
              </motion.div>

              <motion.div 
                className="bg-background p-8 rounded-lg shadow-sm border"
                variants={slideInRight}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="bg-primary/10 p-3 rounded-full mr-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Globe className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be the trusted partner for organizations seeking turn-key integration, automation, and custom software 
                  that drives operational excellence and future-proofs their technology investments.
                </p>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-16 relative overflow-hidden">
        <ParticlesField />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <motion.div 
              className="max-w-4xl mx-auto text-center mb-12"
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our proven methodology for delivering exceptional results
              </p>
            </motion.div>
          </AnimatedSection>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>

            <AnimatedSection>
              <motion.div 
                className="space-y-12"
                variants={staggerContainer}
              >
                {workProcess.map(({ step, description }, index) => (
                  <motion.div
                    key={step}
                    className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    variants={fadeInUp}
                  >
                    <motion.div 
                      className="hidden md:flex items-center justify-center w-12 h-12 rounded-full dark:text-black bg-primary text-white font-bold text-lg z-10 mx-auto md:mx-0"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 200 }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                    >
                      {index + 1}
                    </motion.div>

                    <motion.div 
                      className={`bg-background p-6 rounded-lg shadow-sm border mt-4 md:mt-0 md:w-1/2 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
                      whileHover={{ 
                        scale: 1.03, 
                        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                        transition: { duration: 0.3 }
                      }}
                    >
                      <h3 className="text-xl font-semibold text-foreground mb-2">{step}</h3>
                      <p className="text-muted-foreground">{description}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 relative overflow-hidden">
        <ParticlesField />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <motion.div 
              className="max-w-4xl mx-auto text-center mb-12"
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose NexIQ</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                What sets us apart in delivering exceptional technology solutions
              </p>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
            >
              {whyChooseUs.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="bg-background p-6 rounded-lg shadow-sm border text-center"
                    variants={scaleIn}
                    whileHover={{ 
                      y: -10,
                      boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div 
                      className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -10, 10, -10, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      <IconComponent className="w-6 h-6 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground text-sm">{reason.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;