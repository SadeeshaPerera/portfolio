"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Cloud,
  Server,
  GitBranch,
  Shield,
  Monitor,
  Settings,
  Database,
  Code,
  Globe,
  Smartphone,
  Palette,
} from "lucide-react";

export default function Services() {
  const devopsServices = [
    {
      title: "Cloud Infrastructure Design",
      description:
        "Design and implement scalable, secure, and cost-effective cloud architectures on AWS, Azure, and Google Cloud platforms.",
      icon: <Cloud className="h-10 w-10 text-devops-500" />,
    },
    {
      title: "CI/CD Pipeline Implementation",
      description:
        "Build automated deployment pipelines with Jenkins, GitLab CI, GitHub Actions, and ArgoCD for faster, reliable releases.",
      icon: <GitBranch className="h-10 w-10 text-devops-500" />,
    },
    {
      title: "Infrastructure as Code",
      description:
        "Automate infrastructure provisioning and management using Terraform, CloudFormation, and Ansible for consistent deployments.",
      icon: <Server className="h-10 w-10 text-devops-500" />,
    },
    {
      title: "Container Orchestration",
      description:
        "Deploy and manage containerized applications with Docker and Kubernetes, including service mesh and auto-scaling configurations.",
      icon: <Settings className="h-10 w-10 text-devops-500" />,
    },
    {
      title: "Monitoring & Observability",
      description:
        "Implement comprehensive monitoring, logging, and alerting solutions with Prometheus, Grafana, and ELK stack.",
      icon: <Monitor className="h-10 w-10 text-devops-500" />,
    },
    {
      title: "Security & Compliance",
      description:
        "Integrate security best practices, vulnerability scanning, and compliance automation into your DevOps workflows.",
      icon: <Shield className="h-10 w-10 text-devops-500" />,
    },
  ];

  const fullstackServices = [
    {
      title: "Web Application Development",
      description:
        "Build modern, responsive web applications using React, Next.js, Vue.js, and other cutting-edge frontend technologies.",
      icon: <Code className="h-10 w-10 text-emerald-500" />,
    },
    {
      title: "API Development & Integration",
      description:
        "Create robust REST and GraphQL APIs with Node.js, Python, and Django, including third-party service integrations.",
      icon: <Server className="h-10 w-10 text-emerald-500" />,
    },
    {
      title: "Database Design & Optimization",
      description:
        "Design efficient database schemas and optimize queries for PostgreSQL, MongoDB, and other database systems.",
      icon: <Database className="h-10 w-10 text-emerald-500" />,
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Develop complete e-commerce platforms with payment processing, inventory management, and order fulfillment systems.",
      icon: <Globe className="h-10 w-10 text-emerald-500" />,
    },
    {
      title: "Mobile-First Development",
      description:
        "Create responsive, mobile-optimized applications with progressive web app capabilities and cross-platform compatibility.",
      icon: <Smartphone className="h-10 w-10 text-emerald-500" />,
    },
    {
      title: "UI/UX Implementation",
      description:
        "Transform designs into pixel-perfect, interactive user interfaces with modern CSS frameworks and animation libraries.",
      icon: <Palette className="h-10 w-10 text-emerald-500" />,
    },
  ];

  const mobileServices = [
    {
      title: "iOS Application Development",
      description:
        "Build high-performance, native iOS applications using Swift and Objective-C, following Apple’s design guidelines.",
      icon: <Smartphone className="h-10 w-10 text-blue-500" />,
    },
    {
      title: "Android Application Development",
      description:
        "Create robust, native Android applications using Kotlin and Java, adhering to Google’s material design principles.",
      icon: <Smartphone className="h-10 w-10 text-green-500" />,
    },
    {
      title: "Cross-Platform Mobile Development",
      description:
        "Develop mobile applications for both iOS and Android using React Native, Flutter, or Xamarin for faster time-to-market.",
      icon: <Smartphone className="h-10 w-10 text-purple-500" />,
    },
    {
      title: "Mobile UI/UX Design",
      description:
        "Design intuitive and engaging user interfaces for mobile applications, ensuring a seamless user experience across all devices.",
      icon: <Palette className="h-10 w-10 text-pink-500" />,
    },
    {
      title: "App Store Optimization",
      description:
        "Optimize your mobile applications for better visibility and ranking on App Store and Google Play Store.",
      icon: <Globe className="h-10 w-10 text-red-500" />,
    },
    {
      title: "Mobile App Maintenance & Support",
      description:
        "Provide ongoing maintenance and support for mobile applications, including updates, bug fixes, and performance optimization.",
      icon: <Shield className="h-10 w-10 text-orange-500" />,
    },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const ServiceCard = ({ service, delay }: { service: any; delay: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="h-full border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:scale-105">
        <CardHeader className="text-center">
          <div className="mx-auto rounded-full p-3 bg-slate-100 dark:bg-slate-800 w-fit mb-4">
            {service.icon}
          </div>
          <CardTitle className="text-lg text-slate-800 dark:text-white">
            {service.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-slate-600 dark:text-slate-300 text-center">
            {service.description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <section id="services" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Services Offered
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Comprehensive full-stack development and DevOps solutions to
            accelerate your development lifecycle and deliver exceptional user
            experiences.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-devops-500 to-emerald-500 mx-auto mt-4"></div>
        </motion.div>

        <Tabs defaultValue="devops" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="devops" className="flex items-center gap-2">
              <Cloud className="h-4 w-4" />
              DevOps Services
            </TabsTrigger>
            <TabsTrigger value="fullstack" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              Full-Stack Services
            </TabsTrigger>
            <TabsTrigger value="mobile" className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              Mobile Development
            </TabsTrigger>
          </TabsList>

          <TabsContent value="devops">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {devopsServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  service={service}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="fullstack">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fullstackServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  service={service}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mobile">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mobileServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  service={service}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-gradient-to-r from-devops-600 to-emerald-600 hover:from-devops-700 hover:to-emerald-700 text-white"
          >
            Let's Build Something Amazing Together
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
