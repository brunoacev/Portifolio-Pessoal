import styled from "styled-components";

export const Container = styled.aside`
  background-color: ${(props) => props.theme.bgColor};
  width: 35%;
  display: flex;
  border-radius: ${(props) => props.theme.containerBorderRadius};
  align-items: center;
  flex-direction: column;
  text-align: center;
  position: relative;
  padding: 3rem 0;

  @media (min-width: 801px) {
    height: 80%;
  }
`;

export const Photo = styled.img`
  max-width: 70%;
  border-radius: ${(props) => props.theme.containerBorderRadius};
  position: absolute;
  top: -3rem;
  height: 250px;
  width: 150px;
  margin-top: 10px;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColorSecondary};
  border-radius: ${(props) => props.theme.cardBorderRadius};
  padding: 0.5rem 0.8rem;
  margin-top: 13rem;
`;

export const ButtonCV = styled.a`
  padding: 1rem 1.2rem;
  color: ${(props) => props.theme.textColor};
  background: ${(props) => props.theme.gradient};
  text-decoration: none;
  border-radius: 3rem;
  cursor: pointer;
`;
