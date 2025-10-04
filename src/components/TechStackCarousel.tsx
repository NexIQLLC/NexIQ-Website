'use client';

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiGraphql, SiPostgresql, SiAmazon, SiTensorflow, SiOpenai, SiZapier, SiPostman, SiDocker, SiKubernetes, SiN8N, SiFastapi, SiMongodb, SiRedis, SiJest, SiCypress, SiGit, SiGithub } from 'react-icons/si';
import { FaRobot, FaCloud, FaDatabase, FaServer, FaMobileAlt, FaCodeBranch, FaMicrosoft } from 'react-icons/fa';
import LogoLoop from './LogoLoop';

const TechStackCarousel = () => {
  const techLogos = [
    // Frontend
    { 
      node: <SiReact className="text-blue-500" size={40} />, 
      title: "React", 
      href: "https://react.dev" 
    },
    { 
      node: <SiNextdotjs className="text-black dark:text-white" size={40} />, 
      title: "Next.js", 
      href: "https://nextjs.org" 
    },
    { 
      node: <SiTypescript className="text-blue-600" size={40} />, 
      title: "TypeScript", 
      href: "https://www.typescriptlang.org" 
    },
    { 
      node: <SiTailwindcss className="text-cyan-500" size={40} />, 
      title: "Tailwind CSS", 
      href: "https://tailwindcss.com" 
    },
    
    // Backend
    { 
      node: <SiNodedotjs className="text-green-600" size={40} />, 
      title: "Node.js", 
      href: "https://nodejs.org" 
    },
    { 
      node: <SiPython className="text-blue-800" size={40} />, 
      title: "Python", 
      href: "https://www.python.org" 
    },
    { 
      node: <SiFastapi className="text-green-700" size={40} />, 
      title: "FastAPI", 
      href: "https://fastapi.tiangolo.com/" 
    },
    
    // Databases
    { 
      node: <SiPostgresql className="text-blue-700" size={40} />, 
      title: "PostgreSQL", 
      href: "https://www.postgresql.org" 
    },
    { 
      node: <SiMongodb className="text-green-500" size={40} />, 
      title: "MongoDB", 
      href: "https://www.mongodb.com/" 
    },
    { 
      node: <SiRedis className="text-red-600" size={40} />, 
      title: "Redis", 
      href: "https://redis.io/" 
    },
    
    // Cloud & DevOps
    { 
      node: <SiAmazon className="text-yellow-500" size={40} />, 
      title: "AWS", 
      href: "https://aws.amazon.com" 
    },
    { 
      node: <FaMicrosoft className="text-blue-600" size={40} />, 
      title: "Microsoft Azure", 
      href: "https://azure.microsoft.com/" 
    },
    { 
      node: <SiDocker className="text-blue-400" size={40} />, 
      title: "Docker", 
      href: "https://www.docker.com/" 
    },
    { 
      node: <SiKubernetes className="text-blue-500" size={40} />, 
      title: "Kubernetes", 
      href: "https://kubernetes.io/" 
    },
    
    // AI/ML
    { 
      node: <SiTensorflow className="text-orange-500" size={40} />, 
      title: "TensorFlow", 
      href: "https://www.tensorflow.org" 
    },
    { 
      node: <SiOpenai className="text-green-600" size={40} />, 
      title: "OpenAI", 
      href: "https://openai.com" 
    },
    
    // Automation & Integration
    { 
      node: <SiZapier className="text-yellow-500" size={40} />, 
      title: "Zapier", 
      href: "https://zapier.com" 
    },
    { 
      node: <SiN8N className="#00c853" size={40} />, 
      title: "n8n", 
      href: "https://n8n.io/" 
    },
    { 
      node: <SiPostman className="#FF6C37" size={40} />, 
      title: "Postman", 
      href: "https://www.postman.com/" 
    },
    
    // Testing
    { 
      node: <SiJest className="#c21325" size={40} />, 
      title: "Jest", 
      href: "https://jestjs.io/" 
    },
    { 
      node: <SiCypress className="#17202C" size={40} />, 
      title: "Cypress", 
      href: "https://www.cypress.io/" 
    },
    
    // Version Control
    { 
      node: <SiGit className="#F05032" size={40} />, 
      title: "Git", 
      href: "https://git-scm.com/" 
    },
    { 
      node: <SiGithub className="text-gray-800 dark:text-white" size={40} />, 
      title: "GitHub", 
      href: "https://github.com/" 
    },
    
    // General Icons
    { 
      node: <FaRobot className="text-purple-500" size={36} />, 
      title: "AI/ML", 
      href: "#" 
    },
    { 
      node: <FaCloud className="text-blue-400" size={36} />, 
      title: "Cloud", 
      href: "#" 
    },
    { 
      node: <FaDatabase className="text-amber-500" size={36} />, 
      title: "Database", 
      href: "#" 
    },
    { 
      node: <FaServer className="text-green-500" size={36} />, 
      title: "Server", 
      href: "#" 
    },
    { 
      node: <FaMobileAlt className="text-blue-500" size={36} />, 
      title: "Mobile", 
      href: "#" 
    },
    { 
      node: <FaCodeBranch className="text-purple-400" size={36} />, 
      title: "CI/CD", 
      href: "#" 
    },
  ];

  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        
        
        <div className="relative">
          <LogoLoop
            logos={techLogos}
            speed={60}
            direction="left"
            logoHeight={60}
            gap={48}
            pauseOnHover={true}
            fadeOut={true}
            scaleOnHover={true}
            ariaLabel="Technology stack carousel"
            className="py-8"
          />
        </div>
      </div>
    </section>
  );
};

export default TechStackCarousel;
