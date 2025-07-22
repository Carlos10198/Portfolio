import styled from "styled-components";
import { Icon } from "@iconify/react";
import Button from 'react-bootstrap/Button';

export const MyFoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  img {
    width: 450px;
    height: 450px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 5px 0px 18px black;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 1366px) {
    img {
      width: 250px;
      height: 250px;
    }
  }

  @media (max-width: 768px) {
    img {
      width: 200px;
      height: 200px;
    }
  }

  @media (max-width: 425px) {
    img {
      width: 150px;
      height: 150px;
    }
  }

  @media (max-width: 375px) {
    img {
      width: 130px;
      height: 130px;
    }
  }

  @media (max-width: 320px) {
    img {
      width: 120px;
      height: 120px;
    }
  }
`;


export const MyHeader = styled.div`
  .conteudo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100vh;
    background: ${({ theme }) => theme.backgroundGradientTopToBottom};
    color: ${({ theme }) => theme.text};
    overflow-x: hidden;
    padding: 20px;

    .left,
    .right {
      flex: 1;
      min-width: 300px;
      max-width: 100%;
      height: auto;
      display: flex;
    }

    .left {
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      margin-left: 100px;
    }

    .right {
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        width: 100%;       
        display: flex;     
    }

    .Links {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      padding: 0;

      li {
        list-style: none;
        color: ${({ theme }) => theme.text};
        cursor: pointer;
        transition: transform 0.3s ease;

        &:hover {
          color: ${({ theme }) => theme.linkHover};
          transform: translateY(-10px);
        }
      }
    }

    h1 {
      font-size: 60px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    h2 {
      font-size: 40px;
    }

    p {
      font-size: 30px;
    }

    .text {
      padding-bottom: 20px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      .left,
      .right {
        width: 100%;
        align-items: center;
        justify-content: center;
        padding: 10px;
        margin: 0px;

      }
    }

    @media (max-width: 425px) {
      h1 {
        font-size: 32px;
      }
      h2 {
        font-size: 24px;
      }
      p {
        font-size: 18px;
      }
    }

    @media (max-width: 375px), (max-width: 320px) {
      h1 {
        font-size: 28px;
      }
      h2 {
        font-size: 20px;
      }
      p {
        font-size: 16px;
      }
    }
  }
`;

export const MyIcon = styled(Icon)`
  border-radius: 10px;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.4));
  font-size: 40px;

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 425px) {
    font-size: 24px;
  }

  @media (max-width: 375px), (max-width: 320px) {
    font-size: 20px;
  }
`;

export const MyButton = styled(Button)`
  background: ${({ theme }) => theme.text};
  border: none;
  width: 150px;
  border-radius: 10vh;
  transition: transform 0.3s ease;
  color: ${({ theme }) => theme.textContrast};

  span {
    margin-right: 10px;
  }

  &:hover {
    background: ${({ theme }) => theme.primary};
    transform: translateY(-10px);
  }
`;
