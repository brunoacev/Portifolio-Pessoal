import * as P from "./styles";
import { ProjectsContentDB } from "../../Data/Informations.Database";

const ProjectsContent = () => {
  return (
    <P.Section>
      <P.Title>Projetos</P.Title>
      {ProjectsContentDB.map((data) => (
        <P.Card>
          <P.Paragraph>{data.paragraph}</P.Paragraph>
          <P.Span>
            {data.span}
            <P.LinkProject href={data.link} target="_blank">
              {data.ref}
            </P.LinkProject>
            <P.Span> - </P.Span>
            <P.LinkProject href={data.linkView} target="_blank">
              ViewPage
            </P.LinkProject>
          </P.Span>
        </P.Card>
      ))}
    </P.Section>
  );
};

export default ProjectsContent;
