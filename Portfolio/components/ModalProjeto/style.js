import styled from "styled-components";
import { Icon } from "@iconify/react";

export const MyModal = styled.div`
  background: ${({ theme }) => theme.background || "#fff"};
  color: ${({ theme }) => theme.text || "#000"};
  padding: 20px;
  border-radius: 8px;
  max-width: 100%;
  box-sizing: border-box;

  .modal-title-custom {
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.text};
    margin-bottom: 20px;
  }

  .modal-body {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .left {
    display: flex;
    width: 55%;
    justify-content: center;

    .project-image {
      width: 100%;
      max-width: 550px;
      height: auto;
      max-height: 400px;
      border-radius: 8px;
      object-fit: cover;
      box-shadow: 0 0 15px rgba(0,0,0,0.2);
    }
  }

  .right {
    display: flex;
    width: 45%;
    flex-direction: column;

    h4 {
      display: flex;
      justify-content: flex-start;
      color: ${({ theme }) => theme.text};
      margin-bottom: 10px;
    }

    p {
      font-size: 16px;
      color: ${({ theme }) => theme.text};
      line-height: 1.4;
    }

    .descricao p {
      text-align: justify;
    }

    .links {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: auto;
      transition: transform 0.3s ease;
      cursor: pointer;
      color: ${({ theme }) => theme.linkHover || "#102A43"};

      &:hover {
        transform: translateY(-10px);
        color: ${({ theme }) => theme.primary || "#0b3d91"};
      }
    }
  }

  @media (max-width: 768px) {
    .modal-body {
      flex-direction: column;
    }
    .left, .right {
      width: 100%;
    }
    .right {
      margin-top: 20px;
    }
  }
`;

export const MyIcon = styled(Icon)`
  border-radius: 10px;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.4));
  color: ${({ theme }) => theme.iconColor || "#000"};
`;
