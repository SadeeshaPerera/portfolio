"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Cloud,
  Server,
  GitBranch,
  Shield,
  Monitor,
  Zap,
  Settings,
  Code,
  Database,
  Globe,
} from "lucide-react";

export default function About() {
  const devopsSkills = [
    {
      name: "AWS/Azure",
      icon: <Cloud className="h-6 w-6" />,
      color: "bg-orange-100 dark:bg-orange-900/30",
    },
    {
      name: "Kubernetes",
      icon: <Server className="h-6 w-6" />,
      color: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      name: "Docker",
      icon: <Server className="h-6 w-6" />,
      color: "bg-cyan-100 dark:bg-cyan-900/30",
    },
    {
      name: "Terraform",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-purple-100 dark:bg-purple-900/30",
    },
    {
      name: "Jenkins/GitLab",
      icon: <GitBranch className="h-6 w-6" />,
      color: "bg-green-100 dark:bg-green-900/30",
    },
    {
      name: "Monitoring",
      icon: <Monitor className="h-6 w-6" />,
      color: "bg-yellow-100 dark:bg-yellow-900/30",
    },
    {
      name: "Security",
      icon: <Shield className="h-6 w-6" />,
      color: "bg-red-100 dark:bg-red-900/30",
    },
    {
      name: "Ansible",
      icon: <Settings className="h-6 w-6" />,
      color: "bg-indigo-100 dark:bg-indigo-900/30",
    },
  ];

  const fullstackSkills = [
    {
      name: "React/Next.js",
      icon: <Code className="h-6 w-6" />,
      color: "bg-emerald-100 dark:bg-emerald-900/30",
    },
    {
      name: "Node.js",
      icon: <Server className="h-6 w-6" />,
      color: "bg-green-100 dark:bg-green-900/30",
    },
    {
      name: "Python/Django",
      icon: <Code className="h-6 w-6" />,
      color: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      name: "PostgreSQL",
      icon: <Database className="h-6 w-6" />,
      color: "bg-indigo-100 dark:bg-indigo-900/30",
    },
    {
      name: "TypeScript",
      icon: <Code className="h-6 w-6" />,
      color: "bg-cyan-100 dark:bg-cyan-900/30",
    },
    {
      name: "GraphQL",
      icon: <Globe className="h-6 w-6" />,
      color: "bg-pink-100 dark:bg-pink-900/30",
    },
    {
      name: "MongoDB",
      icon: <Database className="h-6 w-6" />,
      color: "bg-green-100 dark:bg-green-900/30",
    },
    {
      name: "Vue.js",
      icon: <Code className="h-6 w-6" />,
      color: "bg-emerald-100 dark:bg-emerald-900/30",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-devops-500 to-emerald-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-devops-500/20 via-emerald-500/20 to-slate-600/20 rounded-lg overflow-hidden relative">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <img
                  src="/images/sadeesha.png"
                  alt="Sadeesha Perera - Full-Stack DevOps Engineer"
                  className="w-full h-full object-contain p-4"
                />
              </motion.div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6">
                <h3 className="text-white text-xl font-bold">
                  Sadeesha Perera
                </h3>
                <p className="text-emerald-200">Full-Stack DevOps Engineer</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-700 dark:text-slate-300">
              I'm Sadeesha Perera, a DevOps Enthusiast with 3+ years of
              experience bridging the gap between development and operations. I
              build complete solutions from scratch to infrastructure.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              My unique combination of full-stack development skills and DevOps
              expertise allows me to create applications that are not only
              feature-rich and user-friendly but also scalable, secure, and
              maintainable.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              I specialize in modern web technologies, cloud architecture,
              Infrastructure as Code, and building robust CI/CD pipelines that
              enable teams to deliver value faster and more reliably.
            </p>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* DevOps Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center">
              <Cloud className="h-6 w-6 text-devops-500 mr-2" />
              DevOps & Infrastructure
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {devopsSkills.map((skill, index) => (
                <Card
                  key={index}
                  className={`border-none ${skill.color} hover:scale-105 transition-transform`}
                >
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <div className="mb-2 text-slate-700 dark:text-slate-200">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-slate-800 dark:text-slate-200 text-sm">
                      {skill.name}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Full-Stack Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center">
              <Code className="h-6 w-6 text-emerald-500 mr-2" />
              Full-Stack Development
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {fullstackSkills.map((skill, index) => (
                <Card
                  key={index}
                  className={`border-none ${skill.color} hover:scale-105 transition-transform`}
                >
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <div className="mb-2 text-slate-700 dark:text-slate-200">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-slate-800 dark:text-slate-200 text-sm">
                      {skill.name}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
