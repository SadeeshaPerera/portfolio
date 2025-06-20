"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ExternalLink,
  Github,
  Cloud,
  Server,
  GitBranch,
  Monitor,
  Code,
  Database,
  Globe,
} from "lucide-react";

export default function Projects() {
  const devopsProjects = [
    {
      title: "Enterprise CI/CD Pipeline",
      description:
        "Built a comprehensive GitOps workflow with automated testing, security scanning, and multi-environment deployments for a microservices architecture.",
      role: "DevOps Architect",
      outcome:
        "Accelerated release cycles from monthly to daily, reduced bugs in production by 60%",
      techStack: [
        "Jenkins",
        "GitLab CI",
        "ArgoCD",
        "Docker",
        "SonarQube",
        "Vault",
      ],
      github: "#",
      demo: "#",
      blog: null,
      image: "/placeholder.svg?height=200&width=400",
      icon: <GitBranch className="h-6 w-6" />,
    },
    {
      title: "Observability & Monitoring Stack",
      description:
        "Implemented comprehensive monitoring, logging, and alerting solution with custom dashboards and automated incident response for production systems.",
      role: "Site Reliability Engineer",
      outcome:
        "Reduced MTTR by 50%, improved system visibility, and prevented 95% of potential outages",
      techStack: [
        "Prometheus",
        "Grafana",
        "ELK Stack",
        "Jaeger",
        "AlertManager",
        "PagerDuty",
      ],
      github: "#",
      demo: "#",
      blog: null,
      image: "/placeholder.svg?height=200&width=400",
      icon: <Monitor className="h-6 w-6" />,
    },
  ];

  const fullstackProjects = [
    {
      title: "E-Commerce Platform with Microservices",
      description:
        "Built a scalable e-commerce platform with React frontend, Node.js microservices, and automated deployment pipeline. Integrated payment processing and real-time inventory management.",
      role: "Full-Stack Lead Developer",
      outcome:
        "Handled 10K+ concurrent users, processed $2M+ in transactions, 99.8% uptime",
      techStack: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Redis",
        "Docker",
        "Kubernetes",
        "Stripe API",
      ],
      github: "#",
      demo: "#",
      blog: "#",
      image: "./images/yumride.png?height=200&width=400",
      icon: <Code className="h-6 w-6" />,
    },
    {
      title: "Real-Time Collaboration Platform",
      description:
        "Developed a Slack-like collaboration tool with real-time messaging, file sharing, video calls, and team management. Built with modern web technologies and deployed on AWS.",
      role: "Full-Stack Development & DevOps",
      outcome:
        "Supported 1000+ active users, 99.9% message delivery rate, sub-100ms latency",
      techStack: [
        "Next.js",
        "Socket.io",
        "PostgreSQL",
        "AWS",
        "Docker",
        "WebRTC",
        "Redis",
      ],
      github: "#",
      demo: "#",
      blog: null,
      image: "/images/blissify.png?height=200&width=400",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      title: "Healthcare Management System",
      description:
        "Created a comprehensive healthcare platform with patient records, appointment scheduling, telemedicine features, and HIPAA-compliant infrastructure.",
      role: "Full-Stack Development & Cloud Technolgies",
      outcome:
        "Served 5000+ patients, reduced appointment scheduling time by 60%, HIPAA compliant",
      techStack: [
        "Vue.js",
        "Django",
        "PostgreSQL",
        "AWS",
        "Docker",
        "Terraform",
        "HIPAA",
      ],
      github: "#",
      demo: "#",
      blog: "#",
      image: "images/lifecare.png?height=200&width=400",
      icon: <Database className="h-6 w-6" />,
    },
    {
      title: "Financial Analytics Dashboard",
      description:
        "Built a real-time financial analytics platform with interactive charts, automated reporting, and machine learning-powered insights for investment decisions.",
      role: "Full-Stack Developer & Data Engineer",
      outcome:
        "Processed 1M+ data points daily, improved decision-making speed by 40%",
      techStack: [
        "React",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "Docker",
        "ML Models",
      ],
      github: "#",
      demo: "#",
      blog: null,
      image: "/images/shoppingmate.png?height=200&width=400",
      icon: <Monitor className="h-6 w-6" />,
    },
  ];

  const mobileProjects = [
    {
      title: "Bus Booking App",
      description:
        "Developed a secure mobile banking application with real-time transaction monitoring, account management, and fund transfer features.",
      role: "Mobile Developer",
      outcome:
        "Enabled 100K+ users to manage their finances on-the-go, reduced transaction times by 70%",
      techStack: [
        "React Native",
        "Node.js",
        "MongoDB",
        "AWS Amplify",
        "Jest",
        "Docker",
      ],
      github: "#",
      demo: "#",
      blog: null,
      image: "/images/bglk.png?height=200&width=400",
      icon: <Code className="h-6 w-6" />,
    },
    {
      title: "Task Management App",
      description:
        "Created a cross-platform fitness tracking application with real-time GPS tracking, workout logging, and social sharing features.",
      role: "Mobile Developer",
      outcome:
        "Acquired 50K+ downloads, 4.8+ average rating, featured in 'Top Fitness Apps'",
      techStack: [
        "Flutter",
        "Dart",
        "Firebase",
        "Google Maps API",
        "Stripe API",
      ],
      github: "#",
      demo: "#",
      blog: null,
      image: "/images/tasky.png?height=200&width=400",
      icon: <Monitor className="h-6 w-6" />,
    },
  ];

  const ProjectCard = ({ project, type }: { project: any; type: string }) => (
    <Card className="h-full flex flex-col overflow-hidden border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:scale-105">
      <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-devops-100 to-slate-100 dark:from-devops-900/30 dark:to-slate-800 relative group">
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`${
              type === "devops" ? "text-devops-500" : "text-emerald-500"
            } dark:text-opacity-80`}
          >
            {project.icon}
          </div>
        </div>
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover opacity-20 transition-opacity duration-500 group-hover:opacity-40"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-slate-800 dark:text-white">
          {project.title}
        </CardTitle>
        <div className="space-y-2">
          <p
            className={`text-sm font-medium ${
              type === "devops" ? "text-devops-600" : "text-emerald-600"
            } dark:text-opacity-80`}
          >
            {project.role}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech: string, i: number) => (
              <Badge
                key={i}
                variant="secondary"
                className={`${
                  type === "devops"
                    ? "bg-devops-100 dark:bg-devops-900/50 text-devops-800 dark:text-devops-200"
                    : "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200"
                }`}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <CardDescription className="text-slate-600 dark:text-slate-300 text-base">
          {project.description}
        </CardDescription>
        <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Key Outcomes:
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {project.outcome}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 pt-2">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="border-slate-200 dark:border-slate-700"
        >
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-1" /> Code
          </a>
        </Button>
        {project.demo && (
          <Button
            variant="outline"
            size="sm"
            asChild
            className="border-slate-200 dark:border-slate-700"
          >
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-1" /> Live
            </a>
          </Button>
        )}
        {project.blog && (
          <Button
            variant="outline"
            size="sm"
            asChild
            className="border-slate-200 dark:border-slate-700"
          >
            <a href={project.blog} target="_blank" rel="noopener noreferrer">
              Case Study
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A comprehensive showcase of my work spanning DevOps infrastructure
            automation and full-stack application development, demonstrating
            end-to-end solution delivery.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-devops-500 to-emerald-500 mx-auto mt-4"></div>
        </motion.div>

        <Tabs defaultValue="devops" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="devops" className="flex items-center gap-2">
              <Cloud className="h-4 w-4" />
              DevOps Projects
            </TabsTrigger>
            <TabsTrigger value="fullstack" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              Full-Stack Projects
            </TabsTrigger>
            <TabsTrigger value="mobile" className="flex items-center gap-2">
              <Monitor className="h-4 w-4" />
              Mobile Projects
            </TabsTrigger>
          </TabsList>

          <TabsContent value="devops">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {devopsProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard project={project} type="devops" />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="fullstack">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {fullstackProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard project={project} type="fullstack" />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="mobile">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {mobileProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard project={project} type="mobile" />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
