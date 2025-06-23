import styled from "styled-components";
import Nav from "react-bootstrap/Nav";
import {Icon} from "@iconify/react";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 100px;
  background-color: ${({ theme }) => theme.background};
  position: fixed;
  width: 100%;
  z-index: 1000;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }

  @media (max-width: 425px), (max-width: 375px), (max-width: 320px) {
    padding: 10px 15px;
  }
`;

export const Logo = styled.div`
  img {
    width: 50px;
    height: 50px;
  }
`;

export const MyNav = styled(Nav)`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  width: 100%;
  position: absolute;
  top: 70px; 
  left: 0;
  padding: 10px 20px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  z-index: 999;

  a {
    padding: 10px 0;
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    font-weight: 500;
  }

  &.open {
    display: flex;
  }
`;

export const NavButton = styled.button`
  padding: 8px 16px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }
`;

export const MyLink = styled(Nav.Link)`
  color: ${({ theme }) => theme.text};
`;

export const MyIcon = styled(Icon)`
  border-radius: 10px;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.4));
  color: ${({ theme }) => theme.text};
`;