import * as A from "./styles";
import { AboutContentDB } from "../../Data/Informations.Database";

const AboutContent = () => {
  return (
    <A.Section>
      <A.Title>Sobre</A.Title>
      {AboutContentDB.map((data) => (
        <A.Paragraph>{data.Paragraph}</A.Paragraph>
      ))}
    </A.Section>
  );
};

export default AboutContent;
