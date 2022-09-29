import { ThemeProvider } from "styled-components";
import Theme from "./Theme";
import GlobalStyled from "./Global";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import MainContent from "./Components/Main";
import styled from "styled-components";

const ContainerMain = styled.div`
  display: flex;
  gap: 50px;
  padding: 0 20px;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    aside {
      width: 85%;
    }
  }

 
`;

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <ContainerMain>
        <Sidebar />
        <MainContent />
      </ContainerMain>
      <GlobalStyled />
    </ThemeProvider>
  );
}

export default App;
