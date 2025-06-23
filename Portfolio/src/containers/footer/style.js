import styled from "styled-components";

export const MyFooter = styled.div`
  min-height: 10vh;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
  text-align: center;
  font-size: 16px;

  @media (max-width: 425px) {
    font-size: 14px;
    padding: 10px;
  }

  @media (max-width: 375px), (max-width: 320px) {
    font-size: 12px;
  }
`;
