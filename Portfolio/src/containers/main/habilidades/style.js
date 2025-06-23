import styled from "styled-components";
import { Icon } from "@iconify/react";

export const MyHabilidades = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.backgroundGradientTopToBottom};
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.text};
  padding: 20px;

  .top {
    margin-top: 70px;
    text-align: center;

    h1 {
      font-size: 60px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }
  }

  .bottom {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 80px;
  }

  .Links {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    max-width: 700px;
    padding: 0 10px;

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

  @media (max-width: 768px) {
    .top h1 {
      font-size: 40px;
    }

    .bottom {
      margin-top: 60px;
    }

    .Links {
      width: 100%;
      max-width: 100%;
      padding: 0 10px;
    }
  }

  @media (max-width: 425px) {
    .top h1 {
      font-size: 30px;
    }

    .bottom {
      margin-top: 40px;
    }
  }

  @media (max-width: 375px), (max-width: 320px) {
    .top h1 {
      font-size: 24px;
    }

    .bottom {
      margin-top: 30px;
    }
  }
`;

export const MyIcon = styled(Icon)`
  border-radius: 10px;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.4));
`;
