import * as S from "./styles";
import { SocialNetworkDB } from "../../Data/Informations.Database";

const SocialNetworks = () => {
  return (
    <S.Section>
      {SocialNetworkDB.map((network) => (
        <a
          href={network.link}
          target="blank"
          id={network.name}
          key={network.name}
        >
          {network.icon}
        </a>
      ))}
    </S.Section>
  );
};

export default SocialNetworks;
