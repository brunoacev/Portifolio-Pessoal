import AboutContent from "../AboutContent";
import ProjectsContent from "../ProjectsContent";
import TechContent from "../TechContent";
import * as M from "./styles";

const Main = () => {
  return (
    <M.Container>
      <AboutContent />
      <ProjectsContent />
      <TechContent />
    </M.Container>
  );
};

export default Main;
