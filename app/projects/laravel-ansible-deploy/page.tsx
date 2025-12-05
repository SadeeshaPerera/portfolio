"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Monitor, ArrowLeft, Github, Server } from "lucide-react";

export default function LaravelAnsibleDocs() {
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
                Laravel Auto Provision Project
              </h1>
              <p className="text-slate-600 dark:text-slate-300 mt-1">
                Automated deployment of a Laravel application using Ansible roles and inventories.
              </p>
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://github.com/SadeeshaPerera/laravel-ansible-deploy"
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
                    Infrastructure Provisioning
                  </strong>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
                    Automatically setup servers with OS packages, PHP, Nginx, and databases.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-devops-500 mt-1 text-xl">•</span>
                <div>
                  <strong className="text-slate-700 dark:text-slate-200 text-lg">
                    Idempotent Deployments
                  </strong>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
                    Run playbooks repeatedly, they always achieve the same state safely.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-devops-500 mt-1 text-xl">•</span>
                <div>
                  <strong className="text-slate-700 dark:text-slate-200 text-lg">
                    Service Orchestration
                  </strong>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
                    Automate web server reloads, app restarts, cache warming, and migrations.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-devops-500 mt-1 text-xl">•</span>
                <div>
                  <strong className="text-slate-700 dark:text-slate-200 text-lg">
                    Multi-Environment Support
                  </strong>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
                    Manage local, staging, and production from a single playbook with inventories.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-devops-500 mt-1 text-xl">•</span>
                <div>
                  <strong className="text-slate-700 dark:text-slate-200 text-lg">
                    Security Hardening
                  </strong>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
                    Enforce SSH keys, SSL certificates, and file permissions.
                  </p>
                </div>
              </li>
            </ul>
          </Card>

          {/* Why Ansible for Laravel */}
          <Card className="p-6 bg-gradient-to-br from-devops-50 to-slate-50 dark:from-devops-900/20 dark:to-slate-800">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              Why Ansible for Laravel?
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              Ansible enables infrastructure-as-code deployments using simple YAML playbooks. It's agentless, 
              idempotent, and scales from single servers to entire data centers. For Laravel, Ansible automates 
              repetitive tasks like provisioning, dependency management, and service orchestration, ensuring 
              consistent, repeatable releases across all environments.
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
