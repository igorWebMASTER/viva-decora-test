import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const HamburguerMenu = styled.div`
  display: flex;
  align-items: center;

  & > img:first-child {
    position: relative;
    right: 9rem;

    &:hover {
      cursor: pointer;
    }
  }

  @media all and (min-width: 500px) {
    display: none;
  }

  @media all and (max-width: 500px) {
    display: flex;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media all and (max-width: 500px) {
    & > img {
      display: none;
    }
  }
`;

export const MovieImageContainer = styled.div`
  display: flex;
  height: calc(100vw / 3.5);
  width: calc(100vw / 2.5);
  background: #fff;
  border-radius: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > img {
    height: 100%;
    border-radius: 20px;
    width: 100%;
  }

  @media all and (max-width: 500px) {
    & > img {
    }
  }
`;

export const ContainerLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media all and (max-width: 500px) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: 15px;
  color: #fff;
  text-transform: uppercase;
  max-width: 450px;
  line-height: 56px;
  margin-top: 40px;
  margin-left: 6px;
  margin-right: 6px;
  text-decoration: none;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0px 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
        border-right: 0;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #471a91;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#471a91')};
    }
  }
`;

export const Error = styled.div`
  display: block;
  color: #c53030;
  margin-top: 5px;
`;

export const MovieInfo = styled.div`
  margin-top: 60px;
  max-width: 700px;
  border-radius: 5px;
  min-height: 460px;
  background: #fff;
  transition: transform 0.2s;
  margin-bottom: 60px;

  &:hover {
    transform: scale(1.05);
  }

  a {
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;

    display: flex;
    align-items: center;

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8b8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbdbc6;
    }
  }
`;
