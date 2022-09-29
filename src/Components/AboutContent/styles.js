import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    h2 {
      font-size: 2.1rem;
    }

    p {
      font-size: 0.8rem;
      line-height: 1.2rem;
    }
  }
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.textColor};
  font-size: 2.2rem;
  margin-bottom: 1.3rem;
  gap: 1rem;
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.textColorSecondary};
  margin-bottom: 1rem;
  line-height: 1.4rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
`;
