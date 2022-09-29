import styled from "styled-components";

export const Container = styled.main`
  width: 70%;
  background-color: ${(props) => props.theme.bgColor};
  border-radius: ${(props) => props.theme.containerBorderRadius};
  padding: 3rem;
  margin-bottom: 5rem;

  @media (max-width: 800px) {
    width: 85%;
  }
`;
