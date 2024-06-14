// components/StackBanner.js

import aws from "@/public/icons/aws.svg";
import contentful from "@/public/icons/contentful.svg";
import css from "@/public/icons/css.svg";
import figma from "@/public/icons/figma.svg";
import firebase from "@/public/icons/firebase.svg";
import git from "@/public/icons/git.svg";
import github from "@/public/icons/github.svg";
import graphql from "@/public/icons/graphql.svg";
import html from "@/public/icons/html.svg";
import javascript from "@/public/icons/javascript.svg";
import jest from "@/public/icons/jest.svg";
import jira from "@/public/icons/jira.svg";
import nextjs from "@/public/icons/nextjs.svg";
import octopus from "@/public/icons/octopus.png";
import react from "@/public/icons/react.svg";
import redux from "@/public/icons/redux.svg";
import sass from "@/public/icons/sass.svg";
import storyblok from "@/public/icons/storyblok.svg";
import styled from "@/public/icons/styled.svg";
import typescript from "@/public/icons/typescript.svg";
import Image from "next/image";

const techStack = [
  aws,
  contentful,
  css,
  figma,
  firebase,
  git,
  github,
  graphql,
  html,
  javascript,
  jest,
  jira,
  nextjs,
  octopus,
  react,
  redux,
  sass,
  storyblok,
  styled,
  typescript,
];

export const StackBanner = () => {
  return (
    <div className="overflow-hidden relative bg-gray-200 py-5 w-screen">
      <div className="flex animate-scroll">
        {[...techStack, ...techStack].map((item, i) => (
          <div className="flex-none mx-3" key={i}>
            <Image src={item} width={50} alt="tech icon" />
          </div>
        ))}
      </div>
    </div>
  );
};
