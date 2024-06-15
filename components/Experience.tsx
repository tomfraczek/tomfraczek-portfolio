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
  { title: "Github", icon: github, category: "tools" },
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
        Item Two
      </CustomTabPanel>
    </Box>
  );
};
