import { BiGitRepoForked } from "react-icons/bi";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import { ImBook } from "react-icons/im";

import sklearnGenetic from "../images/sklearn_genetic_opt.png";
import graphEmbeddings from "../images/graph_embeddings.png";
import kafkaMl from "../images/kafkaml.png";
import scikitPipes from "../images/scikit_pipes.png";
import portfolio from "../images/portfolio.png";
import erpImg from "../images/ss64.jpg";

import React from "react";

const projectConfig = [
  {
    id: "project-5",
    title: "ERP-Webapp",
    links: [
      {
        name: "repo",
        url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt",
        icon: <AiFillGithub />,
      },
      {
        name: "fork",
        url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt/fork",
        icon: <BiGitRepoForked />,
      },
      {
        name: "subscription",
        url:
          "https://github.com/rodrigo-arenas/Sklearn-genetic-opt/subscription",
        icon: <AiFillEye />,
      },
      {
        name: "docs",
        url: "https://sklearn-genetic-opt.readthedocs.io/en/stable/",
        icon: <ImBook />,
      },
    ],
    image: erpImg,
    description:
      "An ERP web-based system providing 3 modules management, production and warehouse structure and guidelines to the clients.",
    target: "_blank",
  },
  {
    id: "project-4",
    title: "Bongalo Dashboard",
    links: [
      {
        name: "repo",
        url: "https://github.com/rodrigo-arenas/Graph-Embeddings",
        icon: <AiFillGithub />,
      },
      {
        name: "fork",
        url: "https://github.com/rodrigo-arenas/Graph-Embeddings/fork",
        icon: <BiGitRepoForked />,
      },
      {
        name: "subscription",
        url: "https://github.com/rodrigo-arenas/Graph-Embeddings/subscription",
        icon: <AiFillEye />,
      },
      {
        name: "docs",
        url: "https://graph-embeddings.readthedocs.io/",
        icon: <ImBook />,
      },
    ],
    image: graphEmbeddings,
    description:
      " Bongalo is a digital marketplace for African travel and accommodation. At this place you can book short-stay rooms in apartments or entire apartments, create your own blogs etc.",
    target: "_blank",
  },
  {
    id: "project-3",
    title: "IBIT Student Repository",
    links: [
      {
        name: "repo",
        url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection",
        icon: <AiFillGithub />,
      },
      {
        name: "fork",
        url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection/fork",
        icon: <BiGitRepoForked />,
      },
      {
        name: "subscription",
        url:
          "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection/subscription",
        icon: <AiFillEye />,
      },
    ],
    image: kafkaMl,
    description:
      "IBIT student Repository is an online resume builder for the university students.",
    target: "_blank",
  },
  {
    id: "project-2",
    title: "Pyworkforce",
    links: [
      {
        name: "repo",
        url: "https://github.com/rodrigo-arenas/pyworkforce",
        icon: <AiFillGithub />,
      },
      {
        name: "fork",
        url: "https://github.com/rodrigo-arenas/pyworkforce/fork",
        icon: <BiGitRepoForked />,
      },
      {
        name: "subscription",
        url: "https://github.com/rodrigo-arenas/pyworkforce/subscription",
        icon: <AiFillEye />,
      },
      {
        name: "docs",
        url: "https://pyworkforce.readthedocs.io/en/stable/",
        icon: <ImBook />,
      },
    ],
    image: "https://miro.medium.com/max/1400/1*UDnhOFK35IbAPx15wkMgVg.jpeg",
    description:
      "Standard tools for workforce management, queuing, scheduling, rostering and optimization problems.",
    target: "_blank",
  },
  {
    id: "project-1",
    title: "Portfolio Web",
    links: [
      {
        name: "repo",
        url: "https://github.com/rodrigo-arenas/portfolio",
        icon: <AiFillGithub />,
      },
      {
        name: "fork",
        url: "https://github.com/rodrigo-arenas/portfolio/fork",
        icon: <BiGitRepoForked />,
      },
      {
        name: "subscription",
        url: "https://github.com/rodrigo-arenas/portfolio/subscription",
        icon: <AiFillEye />,
      },
    ],
    image: portfolio,
    description:
      "Source code of my current portfolio web page as data scientist.",
    target: "_blank",
  },
  {
    id: "project-0",
    title: "Scikit-Pipes",
    links: [
      {
        name: "repo",
        url: "https://github.com/rodrigo-arenas/scikit-pipes",
        icon: <AiFillGithub />,
      },
      {
        name: "fork",
        url: "https://github.com/rodrigo-arenas/scikit-pipes/fork",
        icon: <BiGitRepoForked />,
      },
      {
        name: "subscription",
        url: "https://github.com/rodrigo-arenas/scikit-pipes/subscription",
        icon: <AiFillEye />,
      },
    ],
    image: scikitPipes,
    description: "Scikit-Learn practical pre-defined Pipelines Hub.",
    target: "_blank",
  },
];

export default projectConfig;
