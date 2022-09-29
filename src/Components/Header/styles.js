import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  padding: 1.5rem;
  gap: 3rem;

  @media (max-width: 800px) {
    h1 {
      font-size: 2rem;
    }
  }

`;

export const Title = styled.h1`
  width: auto;
  font-size: 5rem;
  margin-bottom: 0.8rem;
  background: ${(props) => props.theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
