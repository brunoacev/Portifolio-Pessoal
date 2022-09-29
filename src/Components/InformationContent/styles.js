import styled from "styled-components";

export const Section = styled.section``;

export const SectionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  height: 150px;
  width: auto;
  a {
    text-decoration: none;
    display: flex;
    gap: 15px;
    color: ${(props) => props.theme.textColor};

    svg {
      width: 25px;
      height: 25px;
      color: ${(props) => props.theme.bodyColor};
    }
  }
`;
