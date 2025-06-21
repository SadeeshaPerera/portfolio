"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Cloud, Code } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dhanushka Uditha",
      role: "Senior DevOps Engineer, Zincat Technology",
      content:
        "Sadeesha has consistently demonstrated a high level of professionalism and technical expertise during his time with us. His proactive approach to automating deployments, optimizing CI/CD pipelines, and maintaining infrastructure stability has made a noticeable impact on our operations. Thanks to his contributions, we’ve experienced smoother releases, minimal downtime, and improved overall reliability in our systems all while staying within our resource budget. He’s a valuable asset to any DevOps team.",
      avatar: "DU",
      stars: 5,
      type: "devops",
    },
    {
      name: "Kavindu Angelo",
      role: "Owner, BIK Product",
      content:
        "Working with Sadeesha was one of the best decisions we made for our platform’s long-term success. From the very beginning, he clearly understood our need for a seamless, user-friendly experience and delivered beyond expectations. The system he built runs reliably with minimal downtime and excellent performance. Additionally, his cost-effective infrastructure design significantly reduced our operational expenses. His ability to combine technical efficiency with financial awareness truly sets him apart.",
      avatar: "KA",
      stars: 5,
      type: "devops",
    },
    {
      name: "Janudi Adhikari",
      role: "Undergraduate, SLIIT",
      content:
        "I had the pleasure of working with Sadeesha on four significant successful projects during our time at the university, where he took on the role of project leader. His exceptional leadership, technical expertise, and unwavering commitment were instrumental in guiding our team toward success. He consistently ensured that deadlines were met, challenges were addressed effectively, and everyone stayed aligned with the project goals. Sadeesha’s dedication made a lasting impact on our academic journey.",
      avatar: "JA",
      stars: 5,
      type: "hybrid",
    },
  ];

  const getTestimonialIcon = (type: string) => {
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

  const getTestimonialBorder = (type: string) => {
    switch (type) {
      case "hybrid":
        return "border-t-4 border-t-gradient-to-r from-devops-500 to-emerald-500";
      case "devops":
        return "border-t-4 border-t-devops-500";
      case "fullstack":
        return "border-t-4 border-t-emerald-500";
      default:
        return "border-t-4 border-t-slate-500";
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Testimonials
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            What colleges and clients say about my full-stack development and
            DevOps engineering services.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-devops-500 to-emerald-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`h-full border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 ${getTestimonialBorder(
                  testimonial.type
                )}`}
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex">
                      {Array.from({ length: testimonial.stars }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    {getTestimonialIcon(testimonial.type)}
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-slate-600 dark:text-slate-300 italic">
                    "{testimonial.content}"
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback
                        className={
                          testimonial.type === "hybrid"
                            ? "bg-gradient-to-r from-devops-100 to-emerald-100 text-slate-800"
                            : testimonial.type === "devops"
                            ? "bg-devops-100 text-devops-800"
                            : "bg-emerald-100 text-emerald-800"
                        }
                      >
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-slate-800 dark:text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
