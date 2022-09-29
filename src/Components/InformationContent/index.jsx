import * as I from "./styles";
import {InformationContentDB} from "../../Data/Informations.Database";

const InformationContent = () => {
  return (
    <I.Section>
      <I.SectionCard>
        {InformationContentDB.map((data) => (
          <a href="#" id={data.title} key={data.title}>
            {data.icon} {data.content}
          </a>
        ))}
      </I.SectionCard>
    </I.Section>
  );
};

export default InformationContent;
