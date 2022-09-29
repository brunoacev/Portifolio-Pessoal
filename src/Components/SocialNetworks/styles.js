import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  a {
    margin: 15px 0;
    svg {
      width: 50px;
      height: 50px;
    }

    svg:hover {
      color: ${(props) => props.theme.hoverTextIcon};
    }
  }
`;
