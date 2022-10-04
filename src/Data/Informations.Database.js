import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { DiReact, DiJavascript1, DiSass } from "react-icons/di";
import {
  SiTypescript,
  SiPostgresql,
  SiStyledcomponents,
  SiNextdotjs,
} from "react-icons/si";
import { GrNode } from "react-icons/gr";
import { BiGitBranch } from "react-icons/bi";

const AboutContentDB = [
  {
    Paragraph:
      "Estou em transição de carreira para área de tecnologia, tenho bastante experiência com atendimento ao público e gestão de equipes ao longo de 6 anos. Começei minha jornada Fron-End no começo do ano de 2022, me dedico aos estudos para aprimorar habilidades técnicas e sociais que fazem diferença no mercado atual para me tornar referência naquilo que exercito.",
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
  // Modelo para adicionar novos projetos!
  // {
  //   paragraph: " ",
  //   ref: "GitHub",
  //   span: "Encontre o repositorio, ",
  //   link: "",
  // },
  {
    paragraph:
      "Portifolio - Projeto construido com referência ao contéudo produzido por, Prof. Matheus Battisti, README.md para mais informações.",
    ref: "GitHub",
    span: "Encontre o repositorio, ",
    link: "https://github.com/brunoacev/Portifolio-Pessoal",
  },
  {
    paragraph:
      "CRUD de Usuários - projeto realizado para fins didáticos, README.md para mais informações.",
    ref: "GitHub",
    span: "Encontre o repositorio, ",
    link: "https://github.com/brunoacev/CRUD-NodeJS",
  },
  {
    paragraph:
      "OnDev - Projeto em estágio inicial, focado para criação de conteúdo relacionados a tecnologias na plataforma Youtube.",
    ref: "YouTube",
    span: "URL: ",
    link: "https://www.youtube.com/channel/UCNaa5CzVvgZ22Kg9Ze-qrJg",
  },
  {
    ref: "GitHub",
    span: "Veja todos os repositórios acessando no link, ",
    link: "https://github.com/brunoacev?tab=repositories",
  },
];

const SocialNetworkDB = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/bruno-azevedo-02736bb2/",
    icon: <FaLinkedin />,
  },
  { name: "GitHub", link: "https://github.com/brunoacev", icon: <FaGithub /> },
];

const TechDB = [
  { id: "react", name: "React JS", icon: <DiReact /> },
  { id: "javascript", name: "Javascript", icon: <DiJavascript1 /> },
  { id: "next", name: "Next Js", icon: <SiNextdotjs /> },
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
