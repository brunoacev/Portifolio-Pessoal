import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 30px;

    h2 {
      font-size: 2.1rem;
    }

    h3 {
      font-size: 0.9rem;
    }

    span {
      font-size: 0.2rem;
    }
  }

  @media (min-width: 801px) and (max-width: 1000px) {
    display: grid;
    grid-template-columns: 2fr 2fr;

    div {
      margin: 10px 0;
    }
  }
`;

export const Card = styled.div`
  margin: 15px;
  text-align: center;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.textColor};
  font-size: 2.2rem;
  margin: 1.3rem 0;
`;

export const TechTitle = styled.h3`
  color: ${(props) => props.theme.textColor};
  font-size: 1.3rem;
`;

export const Span = styled.span`
  color: ${(props) => props.theme.textColorSecondary};
  font-size: 1.1rem;
  svg {
    width: 35px;
    height: 35px;
  }
`;
