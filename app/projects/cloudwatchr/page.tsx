"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Monitor, Code, ArrowLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function CloudWatchrDocs() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <Link href="/#projects">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <Monitor className="h-8 w-8 text-devops-500" />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
                CloudWatchr
              </h1>
              <p className="text-slate-600 dark:text-slate-300 mt-1">
                A full-stack monitoring and alerting system for modern DevOps workflows
              </p>
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://github.com/SadeeshaPerera/CloudWatchr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-2" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Key Features */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              Key Features
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-devops-500 mt-1 text-xl">•</span>
                <div>
                  <strong className="text-slate-700 dark:text-slate-200 text-lg">
                    Infrastructure Monitoring:
                  </strong>
                  <p className="text-slate-600 dark:text-slate-300 mt-1">
                    CPU, memory, disk, and network usage via Node Exporter. Get real-time insights into your infrastructure health.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-devops-500 mt-1 text-xl">•</span>
                <div>
                  <strong className="text-slate-700 dark:text-slate-200 text-lg">
                    Application Monitoring:
                  </strong>
                  <p className="text-slate-600 dark:text-slate-300 mt-1">
                    Custom metrics exposed via Prometheus endpoints. Monitor your application's performance and behavior.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-devops-500 mt-1 text-xl">•</span>
                <div>
                  <strong className="text-slate-700 dark:text-slate-200 text-lg">
                    Dashboarding:
                  </strong>
                  <p className="text-slate-600 dark:text-slate-300 mt-1">
                    Grafana dashboards visualizing metrics and system health. Beautiful, customizable dashboards for your entire stack.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-devops-500 mt-1 text-xl">•</span>
                <div>
                  <strong className="text-slate-700 dark:text-slate-200 text-lg">
                    Alerting System:
                  </strong>
                  <p className="text-slate-600 dark:text-slate-300 mt-1">
                    Alertmanager integration for sending Slack/email alerts on thresholds. Stay informed about critical issues.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-devops-500 mt-1 text-xl">•</span>
                <div>
                  <strong className="text-slate-700 dark:text-slate-200 text-lg">
                    Centralized Log Monitoring:
                  </strong>
                  <p className="text-slate-600 dark:text-slate-300 mt-1">
                    Loki + Promtail stack for collecting, aggregating, and querying logs from all services. Single pane of glass for all your logs.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-devops-500 mt-1 text-xl">•</span>
                <div>
                  <strong className="text-slate-700 dark:text-slate-200 text-lg">
                    Dockerized Stack:
                  </strong>
                  <p className="text-slate-600 dark:text-slate-300 mt-1">
                    Each service containerized and orchestrated with Docker Compose or Kubernetes. Deploy anywhere with ease.
                  </p>
                </div>
              </li>
            </ul>
          </Card>

          {/* Tech Stack */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
              <Code className="h-6 w-6 text-devops-500" />
              Tech Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <span className="text-devops-500 text-lg">→</span>
                <div>
                  <strong className="text-slate-700 dark:text-slate-200">Prometheus</strong>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">Metric collection and time-series database</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <span className="text-devops-500 text-lg">→</span>
                <div>
                  <strong className="text-slate-700 dark:text-slate-200">Grafana</strong>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">Beautiful dashboards and visualization</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <span className="text-devops-500 text-lg">→</span>
                <div>
                  <strong className="text-slate-700 dark:text-slate-200">Alertmanager</strong>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">Alerts routing and notification management</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <span className="text-devops-500 text-lg">→</span>
                <div>
                  <strong className="text-slate-700 dark:text-slate-200">Node Exporter</strong>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">System and hardware metrics collection</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <span className="text-devops-500 text-lg">→</span>
                <div>
                  <strong className="text-slate-700 dark:text-slate-200">Loki</strong>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">Centralized log aggregation system</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <span className="text-devops-500 text-lg">→</span>
                <div>
                  <strong className="text-slate-700 dark:text-slate-200">Promtail</strong>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">Log shipping and collection agent</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <span className="text-devops-500 text-lg">→</span>
                <div>
                  <strong className="text-slate-700 dark:text-slate-200">Docker / Docker Compose</strong>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">Container orchestration platform</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <span className="text-devops-500 text-lg">→</span>
                <div>
                  <strong className="text-slate-700 dark:text-slate-200">Nginx / Traefik</strong>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">Optional Ingress/Reverse Proxy</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <span className="text-devops-500 text-lg">→</span>
                <div>
                  <strong className="text-slate-700 dark:text-slate-200">Slack / Gmail API</strong>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">Alert notification delivery</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Architecture Overview */}
          <Card className="p-6 bg-gradient-to-br from-devops-50 to-slate-50 dark:from-devops-900/20 dark:to-slate-800">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              Why CloudWatchr?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              CloudWatchr provides a complete, production-ready monitoring solution that combines the power of industry-standard tools 
              into a cohesive, easy-to-deploy stack. Whether you're monitoring a small application or a large-scale distributed system, 
              CloudWatchr gives you the visibility you need to maintain reliability and performance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg">
                <div className="text-3xl font-bold text-devops-500">50%</div>
                <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">Reduced Downtime</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg">
                <div className="text-3xl font-bold text-devops-500">Real-time</div>
                <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">Metric Collection</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg">
                <div className="text-3xl font-bold text-devops-500">100%</div>
                <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">Dockerized</div>
              </div>
            </div>
          </Card>

          {/* Call to Action */}
          <Card className="p-6 text-center bg-gradient-to-r from-devops-500 to-devops-600 text-white">
            <h3 className="text-2xl font-bold mb-3">Ready to Get Started?</h3>
            <p className="mb-4 opacity-90">
              Check out the full documentation and source code on GitHub
            </p>
            <Button variant="secondary" size="lg" asChild>
              <a
                href="https://github.com/SadeeshaPerera/CloudWatchr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5 mr-2" />
                View Repository
              </a>
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
