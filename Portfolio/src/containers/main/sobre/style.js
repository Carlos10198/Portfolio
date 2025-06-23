import styled from "styled-components";

export const MySobre = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.backgroundGradientBottomToTop};
  padding-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};

  .sobre {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 900px;
    text-align: center;
    gap: 50px;
    padding: 20px;

    h1 {
      font-size: 60px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    p {
      font-size: 30px;
    }
  }

   @media (max-width: 425px), (max-width: 375px), (max-width: 320px) {
    padding: 10px;

    .sobre {
      gap: 30px;

      h1 {
        font-size: 28px;
      }

      p {
        font-size: 16px;
      }
    }
}
`;