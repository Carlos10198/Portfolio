import styled from "styled-components";
import Button from 'react-bootstrap/Button';

export const MyContato = styled.div`
  background: ${({ theme }) => theme.backgroundGradientTopToBottom};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  min-height: 100vh;
  gap: 100px;
  color: ${({ theme }) => theme.text};
  padding: 40px 20px;

  .left,
  .right {
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: justify;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    margin-top: 80px;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;

    form {
      margin-top: 40px;
    }
  }

  @media (max-width: 425px) {
    .left,
    .right {
      max-width: 100%;
    }

    form {
      margin-top: 30px;
    }
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
