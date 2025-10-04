'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Zap, Code, Database, Cpu, GitBranch, Users, Award, Globe, TrendingUp, Target, Shield } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import TechStackCarousel from "@/components/TechStackCarousel";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ParticlesField } from "@/components/ParticlesField";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      
      {/* Hero Image with Overlay */}
      <motion.div 
        className="relative w-full h-[60vh] overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }
        }}
        viewport={{ once: true, margin: "-100px 0px" }}
      >
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          whileInView={{ 
            scale: 1,
            transition: { 
              duration: 1.2, 
              ease: [0.16, 1, 0.3, 1]
            }
          }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="MacBook with code on screen"
            className="w-full h-full object-cover filter blur-sm"
            loading="lazy"
          />
          <motion.div 
            className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              transition: { 
                duration: 0.8,
                delay: 0.3
              }
            }}
            viewport={{ once: true }}
          />
        </motion.div>
        <motion.div 
          className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              staggerChildren: 0.1,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }
          }}
          viewport={{ once: true, margin: "-100px 0px" }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
              }
            }}
            viewport={{ once: true }}
          >
            Transforming ideas into <span className="text-primary">Digital Reality</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.6,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1]
              }
            }}
            viewport={{ once: true }}
          >
            We deliver custom software solutions that drive growth and efficiency for businesses of all sizes.
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.6,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1]
              }
            }}
            viewport={{ once: true }}
          >
            
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Tech Stack Carousel */}
      <motion.section 
        className="relative py-12 md:py-16 overflow-hidden bg-background"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }
        }}
        viewport={{ once: true, margin: "-100px 0px" }}
      >
        <ParticlesField />
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        </div>
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }
          }}
          viewport={{ once: true, margin: "-100px 0px" }}
        >
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                delay: 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
              }
            }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 0.3,
                  duration: 0.6
                }
              }}
              viewport={{ once: true }}
            >
              Our Technology Stack
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 0.4,
                  duration: 0.6
                }
              }}
              viewport={{ once: true }}
            >
              We work with the latest technologies to build robust and scalable solutions
            </motion.p>
          </motion.div>
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.6,
              ease: [0.2, 0.8, 0.2, 1]
            }
          }}
          viewport={{ once: true }}
        >
          <TechStackCarousel />
        </motion.div>
      </motion.div>
    </motion.section>

      {/* Key Services */}
      <motion.section 
        className="relative pt-4 pb-12 overflow-hidden bg-gradient-to-b from-background to-muted/20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }
        }}
        viewport={{ once: true, margin: "-50px 0px" }}
      >
        <ParticlesField />
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-muted/10" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Core Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive solutions tailored to your business needs
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Code className="h-8 w-8 text-primary" />,
                title: "Custom Development",
                description: "Tailored software solutions designed specifically for your business requirements."
              },
              {
                icon: <Database className="h-8 w-8 text-primary" />,
                title: "System Integration",
                description: "Seamlessly connect your existing systems and applications."
              },
              {
                icon: <Cpu className="h-8 w-8 text-primary" />,
                title: "AI & Automation",
                description: "Leverage artificial intelligence to automate and optimize your workflows."
              },
              {
                icon: <GitBranch className="h-8 w-8 text-primary" />,
                title: "DevOps & Cloud",
                description: "Streamline your development and deployment processes with our cloud expertise."
              },
              {
                icon: <Zap className="h-8 w-8 text-primary" />,
                title: "Performance Optimization",
                description: "Enhance your application's speed, scalability, and user experience."
              },
              {
                icon: <Check className="h-8 w-8 text-primary" />,
                title: "Quality Assurance",
                description: "Comprehensive testing to ensure your application meets the highest standards."
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services">
              <Button variant="outline" className="px-8 py-6 text-base">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

     {/* Mission & Vision Compact */}
<motion.section 
  className="relative py-8 md:py-10 overflow-hidden bg-gradient-to-b from-muted/20 to-background"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }}
  viewport={{ once: true, margin: "-50px 0px" }}
>
  <ParticlesField />
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-muted/10 to-background/90" />
  </div>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div 
      className="max-w-6xl mx-auto text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Mission & Values</h2>
      <p className="text-lg text-muted-foreground">What drives us to deliver exceptional solutions</p>
    </motion.div>
      
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-card p-6 rounded-lg shadow-sm border">
        <div className="flex items-center mb-4">
          <div className="bg-primary/10 p-2 rounded-lg mr-4">
            <Target className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
        </div>
        <p className="text-muted-foreground">
          To deliver precision-engineered software solutions that bridge systems and accelerate time-to-value.
        </p>
      </div>

      <div className="bg-card p-6 rounded-lg shadow-sm border">
        <div className="flex items-center mb-4">
          <div className="bg-primary/10 p-2 rounded-lg mr-4">
            <Globe className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">Our Vision</h3>
        </div>
        <p className="text-muted-foreground">
          To be the trusted partner for organizations seeking turn-key integration and automation solutions.
        </p>
      </div>

      <div className="bg-card p-6 rounded-lg shadow-sm border">
        <div className="flex items-center mb-4">
          <div className="bg-primary/10 p-2 rounded-lg mr-4">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">Our Values</h3>
        </div>
        <p className="text-muted-foreground">
          Innovation, Integrity, and Excellence drive everything we do for our clients.
        </p>
      </div>
    </div>
  </div>
</motion.section>


      {/* CTA Section */}
      <section className="relative py-12 md:py-16 text-black">
        <div className="absolute inset-0 ">
          <div className="absolute inset-0 w-full h-full object-cover filter blur-sm bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how we can help you achieve your business goals with our technology expertise.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto ">
                <Button className="w-full bg-white text-black-600 hover:bg-gray-100 px-8 py-6 text-lg font-medium">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
