import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    h2 {
      font-size: 2.1rem;
    }

    p, span {
      font-size: 0.8rem;
      line-height: 1.2rem;
    }
  }
`;

export const Card = styled.div`
  margin: 5px 0;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.textColor};
  font-size: 2.2rem;
  margin-bottom: 1.3rem;
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.textColorSecondary};
  margin-top: 5px;
  line-height: 1.4rem;
  font-size: 1.1rem;
`;

export const Span = styled.span`
  color: ${(props) => props.theme.textColorSecondary};
  font-size: 1.1rem;
`;

export const LinkProject = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
  border-bottom: 1px solid ${(props) => props.theme.textColorSecondary};
  cursor: pointer;
`;
