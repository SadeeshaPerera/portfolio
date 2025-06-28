"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Download,
  MapPin,
  Mail,
  Phone,
  Globe,
  Calendar,
  Cloud,
  Code,
  Languages,
} from "lucide-react";

export default function Resume() {
  const experience = [
    {
      title: "DevOps Engineer",
      company: "Intern at Zincat Technology",
      location: "On-Site, Colombo",
      period: "2024 - Present",
      type: "hybrid",
      description: [
        "Contributed to achieve ISO 27001:2022 compliance",
        "Coordinated with cost optimization, resource budget planning",
        "Implemented CI/CD pipelines for both frontend and backend applications using CircleCI",
        "Autoscaled applications using Load Balancers and Auto Scaling Groups",
        "Managed cloud infrastructure on AWS, Azure and DigitalOcean platforms",
        "Developed monitoring solutions and automated incident response systems",
        "Reduced deployment time by 75% and improved application performance by 40%",
        "Collaborated with full stack and QA teams to optimize application deployment strategies",
        "Assist with recovery drills and incident response planning",
        "Migrated legacy applications to scalable and cost efficient environments",
      ],
    },
    {
      title: "Software Developer",
      company: "Undergraduate at SLIIT",
      location: "Malabe, Sri Lanka",
      period: "2022 - Present",
      type: "fullstack",
      description: [
        "Developed 15+ software applications using Javascript, PHP, and Java etc.",
        "Designed and implemented SQL databases with optimized queries",
        "Created responsive UIs and integrated third-party APIs",
        "Set up Docker containerization and basic CI/CD practices",
        "Participated in Agile development processes and code reviews",
        "Contributed to open-source projects and community initiatives",
        "Mentored junior developers on best practices in software development and DevOps",
      ],
    },
    
  ];

  const education = [
    {
      degree:
        "Bachelor degree in Information Technology specializing in Software Engineering",
      institution: "Sri Lanka Institute of Information Technology",
      period: "2022 - Present",
      details:
        "Focused on Software Engineering, System Architecture, and Database Design etc.",
    },
    {
      degree: "G.C.E Advanced Level",
      institution: "De Mazenod College",
      period: "2019 - 2021",
      details: "Focused on Mathematics, Physics, Chemistry and ICT",
    },
    {
      degree: "G.C.E Ordinary Level",
      institution: "De Mazenod College",
      period: "2008 - 2018",
      details:
        "Completed with 9A passes including Mathematics, Science, and English",
    },
  ];

  // const certifications = [
  //   "AWS Cost Management Certification",
  //   "Azure Monitoring ",
  //   "React Developer Certification",
  // ];

  const technicalSkills = {
    "Frontend Development": [
      "React",
      "Next.js",
      "Redux",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
    ],
    "Backend Development": [
      "Node.js",
      "Python",
      "Java",
      "Laravel",
      "Express.js",
      "ASP.NET",
    ],
    Databases: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "MySQL",
      "DynamoDB",
      "SQLite",
    ],
    "Cloud Platforms": [
      "AWS",
      "Azure",
      "Google Cloud",
      "DigitalOcean",
      "Vercel",
      "Netlify",
    ],
    "DevOps & Infrastructure": [
      "Docker",
      "Kubernetes",
      "Terraform",
      "Ansible",
      "Jenkins",
      "GitLab CI",
    ],
    "Monitoring & Observability": [
      "Prometheus",
      "Grafana",
      "ELK Stack",
      "Datadog",
      "Sentry",
    ],
  };

  const getExperienceIcon = (type: string) => {
    switch (type) {
      case "hybrid":
        return (
          <div className="flex">
            <Cloud className="h-4 w-4 text-devops-500" />
            <Code className="h-4 w-4 text-emerald-500 -ml-0" />
          </div>
        );
      case "devops":
        return <Cloud className="h-4 w-4 text-devops-500" />;
      case "fullstack":
        return <Code className="h-4 w-4 text-emerald-500" />;
      default:
        return null;
    }
  };

  const getExperienceBorder = (type: string) => {
    switch (type) {
      case "hybrid":
        return "border-l-4 border-l-gradient-to-b from-devops-500 to-emerald-500";
      case "devops":
        return "border-l-4 border-l-devops-500";
      case "fullstack":
        return "border-l-4 border-l-emerald-500";
      default:
        return "border-l-4 border-l-slate-500";
    }
  };

  return (
    <section id="resume" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Resume
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-6">
            Comprehensive overview of my professional journey as a DevOps
            Engineer combining full-stack development expertise with
            infrastructure automation.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-devops-500 to-emerald-500 mx-auto mb-6"></div>
          <Button className="bg-gradient-to-r from-devops-600 to-emerald-600 hover:from-devops-700 hover:to-emerald-700">
            <Download className="h-4 w-4 mr-2" />
            Download PDF Resume
          </Button>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="border-slate-200 dark:border-slate-700">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-emerald-500" />
                  <span className="text-sm">sadeeshabperera@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Languages className="h-4 w-4 text-emerald-500" />
                  <span className="text-sm">English & Sinhala</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-emerald-500" />
                  <span className="text-sm">Kandana, Sri Lanka</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-emerald-500" />
                  <span className="text-sm">Available Remotely</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center">
                <div className="flex mr-2">
                  <Cloud className="h-6 w-6 text-devops-500" />
                  <Code className="h-6 w-6 text-emerald-500 -ml-0" />
                </div>
                Professional Experience
              </h3>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <Card key={index} className={getExperienceBorder(job.type)}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl text-slate-800 dark:text-white flex items-center gap-2">
                            {getExperienceIcon(job.type)}
                            {job.title}
                          </CardTitle>
                          <p className="text-slate-600 dark:text-slate-400 font-medium">
                            {job.company}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mt-1">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {job.period}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {job.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-slate-600 dark:text-slate-300 flex items-start"
                          >
                            <span
                              className={`mr-2 ${
                                job.type === "hybrid"
                                  ? "text-gradient-to-r from-devops-500 to-emerald-500"
                                  : job.type === "devops"
                                  ? "text-devops-500"
                                  : "text-emerald-500"
                              }`}
                            >
                              •
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                Education
              </h3>
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="border-l-4 border-l-slate-500 mb-6"
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-800 dark:text-white">
                      {edu.degree}
                    </CardTitle>
                    <p className="text-slate-600 dark:text-slate-400 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {edu.period}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300">
                      {edu.details}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Volunteering Experience */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                Volunteering Experience
              </h3>
              <div className="space-y-7">
                {[
                  {
                    organization: "Mozilla Campus Club of SLIIT",
                    location: "Malabe, Western Province, Sri Lanka",
                    roles: [
                      {
                        title: "President",
                        duration: "May 2025 – Present",
                        description:
                          "Led the club's initiatives, organized events, and managed overall operations.",
                      },
                      {
                        title: "Subcommittee Member",
                        duration: "Apr 2024 – Apr 2025",
                        description:
                          "Assisted in planning and executing club events.",
                      },
                      {
                        title: "Member",
                        duration: "March 2023 – March 2024",
                        description:
                          "Participated in club meetings and contributed to discussions on open-source projects.",
                      },
                    ],
                  },
                  {
                    organization: "SLIIT FOSS Community",
                    location: "Malabe, Western Province, Sri Lanka",
                    roles: [
                      {
                        title: "Assistant Treasurer",
                        duration: "May 2025 – Present",
                        description:
                          "Managed financial records and budgets for community activities.",
                      },
                      {
                        title: "Designer",
                        duration: "May 2024 – May 2025",
                        description:
                          "Created visual content and promotional materials for events.",
                      },
                      {
                        title: "Member",
                        duration: "May 2023 – May 2024",
                        description:
                          "Contributed to community discussions and supported initiatives.",
                      },
                    ],
                  },
                  {
                    organization: "SLIIT SESC",
                    location: "Malabe, Western Province, Sri Lanka",
                    roles: [
                      {
                        title: "DevOps Lead",
                        duration: "May 2025 – Present",
                        description:
                          "Led the setup and automation of cloud infrastructure to support CSR projects, ensuring scalability and deployment efficiency.",
                      },
                      {
                        title: "Subcommittee Member",
                        duration: "Oct 2024 – May 2025",
                        description:
                          "Supported organizational tasks and helped coordinate events.",
                      },
                      {
                        title: "Member",
                        duration: "Aug 2024 – Oct 2024",
                        description:
                          "Engaged in community activities and contributed to technical discussions.",
                      },
                    ],
                  },
                ].map((entry, index) => (
                  <Card
                    key={index}
                    className="border-l-4 border-l-emerald-500 bg-slate-50 dark:bg-slate-800"
                  >
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl text-slate-800 dark:text-white">
                        {entry.organization}
                      </CardTitle>
                      <p className="text-slate-600 dark:text-slate-400 font-medium">
                        {entry.location}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {entry.roles.map((role, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-emerald-500 mr-2">•</span>
                            <div>
                              <p className="text-slate-800 dark:text-white font-medium">
                                {role.title}
                              </p>
                              <p className="text-slate-600 dark:text-slate-400 text-sm">
                                {role.duration}
                              </p>
                              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                                {role.description}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            {/* <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                Certifications
              </h3>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {certifications.map((cert, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-emerald-500 mr-2">✓</span>
                        <span className="text-slate-600 dark:text-slate-300">
                          {cert}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div> */}
          </div>
        </div>

        {/* Technical Skills Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-8 mt-8 text-center">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(technicalSkills).map(([category, skills]) => (
              <Card key={category}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-slate-800 dark:text-white flex items-center gap-2">
                    {category.includes("Frontend") ||
                    category.includes("Backend") ? (
                      <Code className="h-5 w-5 text-emerald-500" />
                    ) : (
                      <Cloud className="h-5 w-5 text-devops-500" />
                    )}
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className={
                          category.includes("Frontend") ||
                          category.includes("Backend") ||
                          category.includes("Databases")
                            ? "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200"
                            : "bg-devops-100 dark:bg-devops-900/50 text-devops-800 dark:text-devops-200"
                        }
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

//comment
