import { techStack } from "@/lib/variables";
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

export const StackBanner = () => {
  return (
    <div className="overflow-hidden relative bg-gray-200 py-5 w-screen">
      <div className="p-5 flex gap-10 justify-center flex-wrap animate-scroll">
        {techStack
          .sort(() => Math.random() - 0.5) // Random sort order
          .map((item, i) => (
            <div className="relative group flex-none" key={i}>
              <Image
                priority={true}
                src={item.icon}
                height={50}
                alt={`${item.title} icon`}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
