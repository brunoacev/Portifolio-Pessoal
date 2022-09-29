import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { DiReact, DiJavascript1, DiSass } from "react-icons/di";
import { SiTypescript, SiPostgresql, SiStyledcomponents } from "react-icons/si";
import { GrNode } from "react-icons/gr";
import { BiGitBranch } from "react-icons/bi";

const AboutContentDB = [
  {
    Paragraph:
      "Estou em transição de carreira para área de tecnologia, tenho bastante experiência com atendimento ao público e gestão de equipes ao longo de 6 anos. Começei minha jornada Fron-End em meados 2022 e me dedico aos estudos para aprimorar habilidades técnicas e sociais que fazem a diferença no mercado atual e me tornar referência naquilo que exército.",
  },
  {
    Paragraph:
      "Vejo na área uma nova oportunidade para trilhar melhores formas de trazer soluções efetivas no ambiente corporativo.",
  },
];

const InformationContentDB = [
  { title: "Telefone", content: "(85) 98543-6862", icon: <AiFillPhone /> },
  { title: "E-mail", content: "brunoacev@gmail.com", icon: <AiOutlineMail /> },
  {
    title: "Localização",
    content: "Fortaleza, CE",
    icon: <AiFillEnvironment />,
  },
];

const ProjectsContentDB = [
  {
    paragraph:
      "MF Advocacia - Projeto sobre analises de jurimetrias desenvolvido para fins didaticos e pratica de HTML, CSS e JavaScript.",
    ref: "GitHub",
    span: "Encontre o repositorio, ",
    link: "https://github.com/brunoacev/Projeto-MF-Advocacia",
    linkView: "https://brunoacev.github.io/Projeto-MF-Advocacia/",
  },
  {
    paragraph:
      "OnDev - Projeto em desenvolvimento focado para criação de conteúdo relacionados a tecnologias na plataforma Youtube.",
    linkView: "https://www.youtube.com/channel/UCNaa5CzVvgZ22Kg9Ze-qrJg",
  },
];

const SocialNetworkDB = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/bruno-azevedo-02736bb2/",
    icon: <FaLinkedin />,
  },
  { name: "GitHub", link: "https://github.com/brunoacev", icon: <FaGithub /> },
  {
    name: "Instagram",
    link: "https://www.instagram.com/b.acev/",
    icon: <FaInstagram />,
  },
];

const TechDB = [
  { id: "react", name: "React JS", icon: <DiReact /> },
  { id: "javascript", name: "Javascript", icon: <DiJavascript1 /> },
  { id: "sass", name: "Sass", icon: <DiSass /> },
  { id: "typescript", name: "Typescript", icon: <SiTypescript /> },
  { id: "postgres", name: "PostgreSQL", icon: <SiPostgresql /> },
  {
    id: "styled-components",
    name: "Style Components",
    icon: <SiStyledcomponents />,
  },
  { id: "node", name: "Node JS", icon: <GrNode /> },
  { id: "git", name: "Git", icon: <BiGitBranch /> },
];

export {
  AboutContentDB,
  InformationContentDB,
  ProjectsContentDB,
  SocialNetworkDB,
  TechDB,
};
