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
  Smartphone
} from "lucide-react";

export default function Projects() {
  const devopsProjects = [
    {
      title: "Enterprise CI/CD Pipeline using CircleCI",
      description:
        "Built a robust CI/CD pipeline using CircleCI for an enterprise-grade application. Integrated build, and deployment stages with branch-based workflows and environment-specific configurations.",
      role: "DevOps Engineering",
      outcome:
        "Reduced deployment time by 70%, increased release reliability, and ensured consistent testing across multiple environments through pipeline automation.",
      techStack: [
        "CircleCI",
        "Docker",
        "GitHub",
        "AWS EC2",
        "AWS S3",
        "YAML",
      ],
      github: "https://github.com/SadeeshaPerera/ci-cd-configs",
      //demo: "#",
      //blog: "#",
      image: "/images/pipeline.png?height=200&width=400",
      icon: <GitBranch className="h-6 w-6" />,
    },

    {
      title: "AWS Cloud Projects Portfolio",
      description:
        "Completed a series of hands-on AWS projects covering cloud hosting, DevOps pipelines, IAM management, serverless integration, analytics, and networking.",
      role: "Cloud Engineering",
      outcome:
        "Demonstrated proficiency across 15+ AWS services, built end-to-end cloud solutions, and showcased readiness for real-world cloud infrastructure and automation challenges.",
      techStack: [
        "Amazon S3",
        "Lambda",
        "QuickSight",
        "CodeArtifact",
        "CodeBuild",
        "CodePipeline",
        "VPC",
      ],
      //github: "#",
      //demo: "#",
      blog: "https://github.com/SadeeshaPerera/aws-projects",
      image: "/images/aws_all.jpg?height=200&width=400",
      icon: <Cloud className="h-6 w-6" />,
    },

    {
      title: "Bash Scripting & Automation",
      description:
        "Automated server provisioning, log rotation, scheduled tasks, and backup routines using Bash scripts with cron/systemd and infrastructure tools.",
      role: "DevOps & Systems Automation",
      outcome:
        "Automated 90% of routine tasks, reduced manual errors by 70%, and cut server setup time to under 5 minutes.",
      techStack: [
        "Bash",
        "Cron",
        "Ansible",
        "GitHub Actions",
        "AWS CLI",
        "logrotate",
      ],
      github: "https://github.com/SadeeshaPerera/bash-automation-scripts",
      //demo: "#",
      //blog: null,
      image: "/images/automation.jpg?height=200&width=400",
      //icon: <Terminal className="h-6 w-6" />
    },
    {
      title: "CloudWatchr - Cloud Monitoring Dashboard",
      description:
        "Developed a comprehensive monitoring dashboard for cloud resources, providing real-time insights into system performance, resource utilization, and alerting.",
      role: "DevOps & Systems Automation",
      outcome:
        "Enabled proactive resource management and incident response through centralized monitoring, reducing downtime by 50% and improving system reliability.",
      techStack: [
        "Grafana",
        "Prometheus",
        "Docker",
        "Kubernetes",
        "Alertmanager",
       
      ],
      github: "https://github.com/SadeeshaPerera/CloudWatchr",
      //demo: "#",
      //blog: null,
      image: "/images/monitoring.png?height=200&width=400",
      //icon: <Terminal className="h-6 w-6" />
    },
  ];

  const fullstackProjects = [
    {
      title: "MealRush - Online Food Ordering & Delivering System",
      description:
        "A complete platform enabling users to browse menus, place orders, manage restaurants and track deliveries in real time.",
      role: "Full-Stack Development & DevOps",
      outcome:
        "Developed and deployed end-to-end app using cloud native technologies. Completed as a university project, enhancing teamwork, problem-solving, and deployment experience in a real-world scenario.",
      techStack: [
        "Docker",
        "Kubernetes",
        "YAML",
        "CI/CD",
        "GitOps",
        "MERN",
        "Microservices",
      ],
      github: "https://github.com/meal-rush/",
      //demo: "#",
      blog: null,
      image: "/images/mealrush.png?height=200&width=400",
      icon: <Monitor className="h-6 w-6" />,
    },
    {
      title: "Blissify - Wedding Management System",
      description:
        "A full-featured application designed to streamline wedding planning by managing guest lists, vendors, budgets, schedules, and event details from a single platform.",
      role: "Full-Stack Development & DevOps",
      outcome:
        "Enhanced proficiency in building scalable and user-centric systems through database design, backend logic, and responsive frontend interfaces.",
      techStack: [
        "React",
        "Node.js",
        "Express",
        "AWS",
        "MongoDB",
        "Tailwind CSS",
        "Microservices",
      ],
      github:
        "https://github.com/SadeeshaPerera/Blissify--Wedding-Management-System",
      demo: "https://youtu.be/ZZwhkC4C63M",
      blog: null,
      image: "/images/blissify.png?height=200&width=400",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      title: "Health Insurance Management System",
      description:
        "Created a comprehensive healthcare platform with patient records, telemedicine features, and HIPAA-compliant infrastructure.",
      role: "Full-Stack Development & Software Testing",
      outcome:
        "Improved healthcare service delivery by 30% through streamlined patient management and secure data handling.",
      techStack: [
        "JavaScript",
        "PHP",
        "phpMyAdmin",
        "SQL",
        "Bootstrap",
        "HTML",
        "CSS",
      ],
      github: "https://github.com/SadeeshaPerera/LifeCare--Health-Insurance-Management-System",
      demo: "https://youtu.be/icUjZI3ujTc",
      image: "images/lifecare.png?height=200&width=400",
      icon: <Database className="h-6 w-6" />,
    },
    {
      title: "Shopping Mall Management Application",
      description:
        "A cross-platform mobile application for managing shopping mall operations, including tenant management, sales tracking, and incident management.",
      role: "Full-Stack Development & Project Management",
      outcome:
        "Delivered a user-friendly application that improved tenant management efficiency by 40% and enhanced customer experience through real-time updates and notifications.",
      techStack: ["Dart", "Flutter", "Firebase", "REST APIs", "Figma"],
      github: "https://github.com/SadeeshaPerera/shopping_mall_application",
      demo: "https://sadeeshaperera.github.io/shopping_mall_application/",
      blog: null,
      image: "/images/shoppingmate.png?height=200&width=400",
      icon: <Monitor className="h-6 w-6" />,
    },
    {
      title: "YumRide - Online Food Ordering System using MVC Architecture",
      description:
        "A web-based system developed following the MVC (Model-View-Controller) architectural pattern to streamline online food ordering, including menu browsing, cart management, and order processing.",
      role: "Full-Stack Development",
      outcome:
        "Strengthened understanding of software architecture principles and MVC design pattern. Gained hands-on experience in separating concerns, modular code organization, and implementing core backend logic in a structured and scalable way.",
      techStack: ["Java", "MySQL", "JSP", "JDBC", "CSS", "Servlet", "Eclipse"],
      github: "https://github.com/SadeeshaPerera/YumRide--Online-Food-Ordering-System",
      demo: "https://youtu.be/t8QaBHU6ihk",
      image: "./images/yumride.png?height=200&width=400",
      icon: <Code className="h-6 w-6" />,
    },
  ];

  const mobileProjects = [
    {
      title: "BGLK - Bus Booking App",
      description:
        "A cross-platform mobile application that enables users to search bus routes, check schedules, reserve seats, and receive booking confirmations via QR codes.",
      role: "Cross Platform Development",
      outcome:
        "Successfully implemented a real-world transport solution as part of a university group project, improving skills in UI/UX design and collaborative development.",
      techStack: [
        "Flutter",
        "Firebase",
        "Google Maps API",
        "Figma",
        "Dart",
        "UI/UX Design",
        "REST APIs",
      ],
      github: "https://github.com/SadeeshaPerera/bus_booking_app",
      demo: "https://youtu.be/DwPL5LmwvXI?si=Rq38S2UF9OuObj8Q",
      blog: null,
      image: "/images/bglk.png?height=200&width=400",
      icon: <Code className="h-6 w-6" />,
    },
    {
      title: "Task Management App",
      description:
        "A native Android application for efficient task organization, reminders, and daily productivity tracking.",
      role: "Native Mobile Development",
      outcome:
        "Delivered a fully functional app with offline support, local storage, and clean code architecture.",
      techStack: [
        "Kotlin",
        "room-persistence-library",
        "kotlinx.coroutines",
        "Dagger2",
        "Retrofit",
      ],
      github: "https://github.com/SadeeshaPerera/android-task-app",
      demo: "https://youtu.be/wW00BAkv7PM?si=1wkgkOZksN-z2sA7",
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
            {/* {project.icon} */}
          </div>
        </div>
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-40"
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
              <ExternalLink className="h-4 w-4 mr-1" /> Demo
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
              Documentation
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
              DevOps
            </TabsTrigger>
            <TabsTrigger value="fullstack" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              Full-Stack
            </TabsTrigger>
            <TabsTrigger value="mobile" className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              Mobile
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
