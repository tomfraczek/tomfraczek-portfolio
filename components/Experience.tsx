"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";

import contentful from "@/public/icons/contentful.svg";
import modules from "@/public/icons/css-modules.svg";
import less from "@/public/icons/less.svg";
import css from "@/public/icons/css.svg";
import express from "@/public/icons/express.svg";
import figma from "@/public/icons/figma.svg";
import firebase from "@/public/icons/firebase.svg";
import git from "@/public/icons/git.svg";
import github from "@/public/icons/github.svg";
import graphql from "@/public/icons/graphql.svg";
import html from "@/public/icons/html.svg";
import javascript from "@/public/icons/javascript.svg";
import jest from "@/public/icons/jest.svg";
import jira from "@/public/icons/jira.svg";
import mongodb from "@/public/icons/mongodb.svg";
import nextjs from "@/public/icons/nextjs.svg";
import node from "@/public/icons/node.svg";
import octopus from "@/public/icons/octopus.png";
import react from "@/public/icons/react.svg";
import redux from "@/public/icons/redux.svg";
import sass from "@/public/icons/sass.svg";
import storyblok from "@/public/icons/storyblok.svg";
import styled from "@/public/icons/styled.svg";
import sketch from "@/public/icons/sketch.svg";
import typescript from "@/public/icons/typescript.svg";
import vitest from "@/public/icons/vitest.svg";
import bitbucket from "@/public/icons/bitbucket.svg";

import cambridge from "@/public/icons/cambridge.svg";
import apptension from "@/public/icons/apptension.png";

import Image from "next/image";
const techStack = [
  { title: "Bitbucket", icon: bitbucket, category: "tools" },
  { title: "Contentful", icon: contentful, category: "backend" },
  { title: "Express", icon: express, category: "backend" },
  { title: "Firebase", icon: firebase, category: "backend" },
  { title: "MongoDB", icon: mongodb, category: "backend" },
  { title: "Node.js", icon: node, category: "backend" },
  { title: "CSS", icon: css, category: "frontend" },
  { title: "Figma", icon: figma, category: "ui" },
  { title: "Sketch", icon: sketch, category: "ui" },
  { title: "Git", icon: git, category: "tools" },
  { title: "GitHub", icon: github, category: "tools" },
  { title: "GraphQL", icon: graphql, category: "frontend" },
  { title: "HTML", icon: html, category: "frontend" },
  { title: "JavaScript", icon: javascript, category: "frontend" },
  { title: "Jest", icon: jest, category: "testing" },
  { title: "Vitest", icon: vitest, category: "testing" },
  { title: "Jira", icon: jira, category: "tools" },
  { title: "Next.js", icon: nextjs, category: "frontend" },
  { title: "React Testing Library", icon: octopus, category: "testing" },
  { title: "Storyblok", icon: storyblok, category: "backend" },
  { title: "React", icon: react, category: "frontend" },
  { title: "Redux", icon: redux, category: "frontend" },
  { title: "Sass", icon: sass, category: "frontend" },
  { title: "styled-components", icon: styled, category: "frontend" },
  { title: "CSS Modules", icon: modules, category: "frontend" },
  { title: "Less", icon: less, category: "frontend" },
  { title: "TypeScript", icon: typescript, category: "tools" },
];
const experience = [
  {
    jobTitle: "React Developer",
    company: "Apptension",
    logo: apptension,
    period: "03.2022 - 04.2024",
    location: "Poznań, Poland",
    description: [
      "Specialized in frontend development for web and mobile applications, ensuring high-quality and responsive user interfaces using React, React Native and Next.js.",
      "Utilized various styling techniques, including CSS-in-JS, CSS Modules to create maintainable and scalable styles.",
      "Implemented frontend testing with Vitest, React Testing Library and Jest to ensure robustness and reliability of applications.",
      "Managed project workflows using Jira, including sprint planning and maintaining Kanban boards.",
      "Contributed to project cost estimations and maintained code repositories on Bitbucket.",
      "Translated Figma designs into fully responsive websites and applications.",
      "Used headless CMS platforms like Storyblok and Contentful for backend management.",
      "Engaged in client communication, gathering requirements, providing progress updates, and incorporating feedback throughout the development process.",
    ],
  },
  {
    jobTitle: "Frontend Developer",
    company: "Cambridge Audio",
    logo: cambridge,
    period: "03.2018 - 03.2022",
    location: "London, UK",
    description: [
      "Built interfaces for audio equipment using React and Redux, ensuring seamless user interaction.",
      "Spearheaded the development of new features and maintained existing functionalities across multiple websites using Drupal 8.",
      "Leveraged HTML, CSS, JavaScript, and the Twig templating engine to create visually appealing and interactive user interfaces, adhering to best practices and standards.",
      "Collaborated closely with the marketing team to understand requirements and develop necessary tools and features to enhance website functionality and user experience.",
      "Translated Sketch designs into fully responsive websites, ensuring consistency and fidelity across different devices and screen sizes.",
      "Optimized websites for maximum speed and scalability, employing techniques such as image optimization, code minification, and caching strategies.",
      "Developed reusable code components to streamline development processes and facilitate future enhancements and iterations.",
    ],
  },
  {
    jobTitle: "Web Developer",
    company: "Freelance",
    period: "01.2017 - present",
    location: "London, UK",
    description: [
      "Designed and developed websites from concept to completion, leveraging Next.js and a blend of creative design skills and technical expertise to deliver tailored solutions for client requirements.",
      "Collaborated effectively with backend developers to ensure seamless integration of frontend designs with backend functionalities.",
      "Maintained a strong focus on usability, accessibility, and user experience, implementing industry best practices to enhance website performance and user engagement.",
      "Utilized expertise in frontend technologies such as HTML, CSS, JavaScript, and responsive design frameworks to craft visually appealing and functional websites that consistently meet client expectations.",
    ],
  },
];

const categories = ["frontend", "backend", "ui", "testing", "tools"];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const Experience = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="SKILLS" {...a11yProps(0)} />
          <Tab label="EXPERIENCE" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div>
          {categories.map((category) => (
            <div
              key={category}
              className="flex flex-wrap gap-10 justify-start border-l-2 ml-36 pl-8 relative pb-16"
            >
              <span className="text-white absolute right-full top-0 bg-gray-500 p-[10px] pl-[15px] pr-[15px]">
                {category.toUpperCase()}
              </span>
              {techStack
                .filter((item) => item.category === category)
                .sort((a, b) => a.title.localeCompare(b.title))
                .map((item, i) => (
                  <div className="relative group flex-none" key={i}>
                    <Image
                      src={item.icon}
                      height={50}
                      alt={`${item.title} icon`}
                      className="cursor-pointer transform transition-transform duration-300 hover:scale-125"
                    />
                    <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap">
                      {item.title}
                    </span>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div>
          {experience.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 mb-8 relative justify-start border-l-2 ml-36"
            >
              <div className="flex-none absolute right-full top-0 w-max">
                {item.logo && (
                  <Image
                    src={item.logo}
                    width={150}
                    height={50}
                    alt={`${item.company} logo`}
                    className="p-3"
                  />
                )}
              </div>
              <div className="flex flex-col pl-8">
                <h3 className="text-xl font-bold">{item.jobTitle}</h3>
                <p className="text-sm text-gray-600">{item.company}</p>
                <p className="text-sm text-gray-600">{item.location}</p>
                <p className="text-sm text-gray-600">{item.period}</p>
                <ul className="list-disc pl-5 mt-2">
                  {item.description.map((desc, i) => (
                    <li key={i} className="text-sm text-gray-800">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </CustomTabPanel>
    </Box>
  );
};
