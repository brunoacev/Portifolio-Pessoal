import * as S from "./styles";
import Avatar from "../../Assets/fotoPerfil.jpeg";
import SocialNetworks from "../SocialNetworks";
import InformationContent from "../InformationContent";

const Sidebar = () => {
  return (
    <S.Container>
      <S.Photo src={Avatar} alt="Foto Perfil" />
      <S.Title>Desenvolvedor Front End</S.Title>
      <SocialNetworks />
      <InformationContent />
      <S.ButtonCV
        href="../../Assets/BrunoAzevedo.pdf"
        download
        title="Download CV"
      >
        Download CV
      </S.ButtonCV>
    </S.Container>
  );
};

export default Sidebar;
