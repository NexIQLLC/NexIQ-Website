'use client';

import { motion, Variants } from 'framer-motion';
import ContactForm from "./ContactForm";
import { ParticlesField } from "@/components/ParticlesField";
import { Phone, Mail } from "lucide-react";
import { DecryptedText } from "@/components/ui/decrypted-text";

// Animation variants
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export default function ContactPage() {

  return (
    <div className="min-h-screen flex flex-col">
      <ParticlesField />
      <motion.section 
        className="relative py-6 lg:py-16 min-h-screen flex items-start justify-start overflow-hidden"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.div 
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          
        </motion.div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left Content */}
          <motion.div 
            className="flex-1 max-w-2xl"
            variants={container}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold mb-6 text-foreground"
              variants={item}
            >
              <DecryptedText delay={500} duration={30}>Get in Touch</DecryptedText>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground font-medium mb-8 leading-relaxed"
              variants={item}
            >
              Have a project in mind? <span className="text-primary font-semibold">Let&apos;s bring your vision to life.</span><br /><br />
              Whether you need <span className="font-medium">API integration</span>, process <span className="font-medium">automation</span>, or custom development for <span className="font-medium">websites</span>, <span className="font-medium">web apps</span>, and <span className="font-medium">mobile applications</span> — our expert team is ready to make your ideas work seamlessly.
            </motion.p>
            
            {/* Contact Details */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 sm:gap-12 text-lg"
              variants={container}
            >
              <motion.div 
                className="flex items-center gap-3 group"
                variants={item}
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <a
                  href="tel:+12152627084"
                  className="text-foreground font-medium hover:text-primary transition-colors duration-200"
                >
                  +1(215)262-7084
                </a>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3 group"
                variants={item}
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <a
                  href="mailto:nexiqllc.info@gmail.com"
                  className="text-foreground font-medium hover:text-primary transition-colors duration-200"
                >
                  nexiqllc.info@gmail.com
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Contact Form */}
          <motion.div 
            className="flex-1 max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div 
              className="bg-card rounded-xl shadow-lg overflow-hidden border border-border/30 relative z-10"
              whileHover={{
                y: -5,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.3 }
              }}
            >
              <div className="p-8 md:p-10">
                <motion.div 
                  className="text-center mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h2 className="text-3xl font-bold text-foreground mb-3">
                    Send us a Message
                  </h2>
                  <p className="text-muted-foreground">
                    We&apos;ll get back to you as soon as possible
                  </p>
                </motion.div>
                <ContactForm />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}