"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

export default function Blog() {
  // Placeholder blog posts - these will be replaced with real ones as you create content
  const blogPosts = [
    {
      title: "Building a Multi-Cloud Kubernetes Platform with Terraform",
      description:
        "A comprehensive guide to deploying and managing Kubernetes clusters across AWS and Azure using Infrastructure as Code.",
      date: "Coming Soon",
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
    },
    {
      title: "Implementing GitOps with ArgoCD and Kubernetes",
      description:
        "Learn how to set up a complete GitOps workflow for automated application deployment and configuration management.",
      date: "Coming Soon",
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
    },
    {
      title: "Monitoring Microservices: Prometheus, Grafana, and Jaeger",
      description:
        "Best practices for implementing observability in microservices architectures with modern monitoring tools.",
      date: "Coming Soon",
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
    },
  ]

  return (
    <section id="blog" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            DevOps Blog & Case Studies
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Technical articles and real-world case studies on DevOps practices, cloud architecture, and automation.
          </p>
          <div className="h-1 w-20 bg-emerald-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow duration-300">
                <div className="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <CardTitle className="text-xl text-slate-800 dark:text-white">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-slate-600 dark:text-slate-300 text-base">
                    {post.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                    asChild
                  >
                    <a href={post.link} className="flex items-center gap-1">
                      Read more <ArrowRight className="h-4 w-4 ml-1" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
