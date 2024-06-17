import { Send } from "lucide-react";
import Link from "next/link";

export const Journey = () => {
  return (
    <div className="mt-24 w-screen" id="journey">
      <h1 className="text-center font-bold text-4xl fjalla">JOURNEY</h1>
      <p className="my-6 nunito w-11/12 md:w-4/5 lg:w-2/3 m-auto">
        I am a Frontend Developer with a passion for creating web and mobile
        applications using React and React Native technologies. My journey in
        development began in London in 2017, where I started as a freelancer,
        crafting my first commercial websites.
      </p>
      <p className="my-6 nunito w-11/12 md:w-4/5 lg:w-2/3 m-auto">
        The next step in my career was joining a London-based company. Here, I
        had the opportunity to use the React library in a real-world
        environment, creating interfaces and collaborating with a talented team.
        This experience was instrumental in honing my skills and understanding
        the practical applications of React.
      </p>
      <p className="my-6 nunito w-11/12 md:w-4/5 lg:w-2/3 m-auto">
        The highlight of my career so far has been my time at a software house,
        where I could focus entirely on advancing my hard programming skills as
        a React Developer. This role allowed me to grow technically and solidify
        my expertise in building sophisticated and efficient applications.
      </p>

      <p className="my-6 nunito w-11/12 md:w-4/5 lg:w-2/3 m-auto">
        In addition to my frontend expertise, I have also started developing my
        skills in backend technologies such as Node.js, Express, and MongoDB. My
        goal is to become a complete developer, capable of handling both
        frontend and backend development seamlessly.
      </p>
      <p className="my-6 nunito w-11/12 md:w-4/5 lg:w-2/3 m-auto">
        At work I am known for my positive attitude, goal-oriented personality,
        and strong motivation to continually enhance my skills.
      </p>
      <p className="my-6 nunito w-11/12 md:w-4/5 lg:w-2/3 m-auto">
        I offer my services as a frontend developer for hire to work with
        businesses of all sizes. Feel free to get in touch. I&#39;m available
        during the week to discuss and advise on your project or development
        needs.
      </p>
      <Link
        className="flex w-11/12 md:w-4/5 lg:w-2/3 m-auto"
        href="mailto:tomfraczekdev@gmail.com"
      >
        <Send />
        <span className="ml-3">tomfraczekdev@gmail.com</span>
      </Link>
    </div>
  );
};
