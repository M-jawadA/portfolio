import React from "react";
import { BsClipboardData } from "react-icons/bs";
import { DiCodeigniter } from "react-icons/di";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaMobileAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineDesignServices } from "react-icons/md";
const homeConfig = {
  greeting: (
    <h1 className="heading">
      Hey!<strong className="main-name"> CodeSuite there</strong>
    </h1>
  ),
  titles: [
    "Web Development",
    "Front-end Development",
    "Back-end Development",
    "Database Model",
    "Wed based ERP ",
  ],
  about: {
    start:
      "I've been working for over six years on data science projects. " +
      "I'm excited by learning new things, contributing to the data science community," +
      " and spreading the word of data!",
    exit:
      "I'm fluent at Python, SQL databases, BI tools, and more, " +
      "with a deep interest in machine learning.",
  },
  workTimeline: [
    {
      id: "work-3",
      title: "Frontend Development",
      company: "CodeSuite",
      description:
        "We have an agile team that uses latest technologies for the responsive and user friendly interface development, all the emerging and modern technologies are included in our tech stack",
      date: "2019-2022",
      icon: <FaReact color="#62DAFA" />,
      tags: [
        "React js",
        "Typescript",
        "Html5",
        "CSS3",
        "Javascript",
        "Tailwind CSS",
        "Material UI",
        "Bootstrap",
        "Redux Toolkit",
        "Next Js",
        "Nuxt Js",
      ],
    },
    {
      id: "work-2",
      title: "Backend Development",
      company: "CodeSuite",
      description:
        "We're having a competent and experienced team for backend development that can create tailored software solutions to all your technical business problems , " +
        "Our core value is effective communication to better understand the requirements and scope identification.",
      date: "2018-2022",
      icon: <CgWebsite color="#F7CC40" />,
      tags: [
        "Python",
        "Rest APIs",
        "Django",
        "docker",
        "Node Js",
        "postgres",
        "AWS",
        "Restful APIs",
        "Cross Browser Compatibility",
        "MySQL",
        "SQL lite",
        "Database design",
        "ERD",
      ],
    },
    {
      id: "work-1",
      title: "UI/UX Design",
      company: "CodeSuite",
      description:
        "Our designers design the user interface for your mobile/web apps or other interactive media platforms.  " +
        "We focus on the scope identification and then build up the storyboards to comply with the scope and requirements ",
      date: "2018-2022",
      icon: <MdOutlineDesignServices color="#73d647" />,
      tags: ["Figma", "Figma to Html", "BubbleIO", "Wireframe", "Adobe Xd"],
    },
    {
      id: "work-0",
      title: "BI Analyst",
      company: "Onelink BPO",
      description:
        "Build interactive dashboards, ETLs and SQL queries to show the company KPIs.",
      date: "2016-2018",
      icon: <BsClipboardData />,
      tags: ["python", "mssql", "pbi", "excel"],
    },
  ],
};

export default homeConfig;
