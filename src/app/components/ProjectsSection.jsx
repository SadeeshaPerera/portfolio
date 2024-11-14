"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Blissify",
    description: "Wedding Management System",
    image: "/images/projects/blissify.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/SadeeshaPerera/Blissify--Wedding-Management-System",
    previewUrl: "https://youtu.be/ZZwhkC4C63M",
  },
  {
    id: 2,
    title: "LifeCare",
    description: "Health Insurance Management System",
    image: "/images/projects/lifecare.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/SadeeshaPerera/LifeCare--Health-Insurance-Management-System",
    previewUrl: "https://youtu.be/icUjZI3ujTc",
  },
  {
    id: 3,
    title: "AWS Projects",
    description: "Cloud Computing Projects",
    image: "/images/projects/aws-projects.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SadeeshaPerera/aws-projects",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Tasky",
    description: "Task Management Android App",
    image: "/images/projects/tasky.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/SadeeshaPerera/android-task-app",
    previewUrl: "https://youtu.be/wW00BAkv7PM",
  },
  {
    id: 5,
    title: "YumRide",
    description: "Online Food Ordering System",
    image: "/images/projects/yumride.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/SadeeshaPerera/YumRide--Online-Food-Ordering-System",
    previewUrl: "https://youtu.be/t8QaBHU6ihk",
  },
  {
    id: 6,
    title: "EDoc",
    description: "Smart Healthcare System",
    image: "/images/projects/edoc.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SadeeshaPerera/smart_healthcare_system",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Bus Guide LK",
    description: "Bus Booking App",
    image: "/images/projects/bglk.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/SadeeshaPerera/bus_booking_app",
    previewUrl: "https://youtu.be/DwPL5LmwvXI?si=Rq38S2UF9OuObj8Q",
  },
  {
    id: 8,
    title: "Shopping Mate",
    description: "Shopping Mall Management System",
    image: "/images/projects/shopping-mate.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SadeeshaPerera/shopping_mall_application",
    previewUrl: "https://sadeeshaperera.github.io/shopping_mall_application/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
