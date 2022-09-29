import * as T from "./styles";
import { TechDB } from "../../Data/Informations.Database";

const TechContent = () => {
  return (
    <>
      <T.Title>Tecnologias</T.Title>
      <T.Section>
        {TechDB.map((data) => (
          <T.Card id={data.id} key={data.id}>
            <T.Span>{data.icon}</T.Span>
            <T.TechTitle>{data.name}</T.TechTitle>
          </T.Card>
        ))}
      </T.Section>
    </>
  );
};

export default TechContent;
