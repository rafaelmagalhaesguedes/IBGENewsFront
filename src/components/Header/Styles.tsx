import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const ContainerHeader = styled.header`
  display: flex;
  width: 100%;
  height: auto;
  background-color: #333;
  border: none;
  align-items: center;
  justify-content: space-around;
  fixed: top;
  position: fixed;
  top: 0;

  @media (max-width: 768px) {
    position: relative;
    flex-direction: row;
    justify-content: center;
  }

`;

export const WrapperHeader = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: row;
    gap: 1rem;
    justify-content: space-between;
  }
`;

export const LogoHeader = styled.div`
  display: flex;
  align-items: center;
  border: none;

  @media (max-width: 768px) {
    width: 20%;
  }
`;

export const Logo = styled.img`
  width: 100px;
  height: 100%;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 80px;
    height: 100%;
  }
`;

export const TitleHeader = styled.h1`
  font-size: 1.2rem;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
`;

export const NavbarSearch = styled.div`
  display: flex;

  @media (max-width: 250px) {
    display: none;
  }

  @media (max-width: 390px) {
    width: 60%;
  }
`;

export const InputSearch = styled.input`
  height: 35px;
  width: 340px;
  padding: 0 10px;
  border: none;
  border-bottom-left-radius: 5px;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    transition: width 0.5s ease-in-out;
  }

  @media (min-width: 769px) and (max-width: 1366px) {
    width: 400px;
    transition: width 0.5s ease-in-out;
  }

  @media (min-width: 1367px) {
    width: 500px;
    transition: width 0.5s ease-in-out;
  }
`;

export const IconSearch = styled(FaSearch)`
    width: 35px;
    height: 35px;
    color: #fff;
    background-color: #e22e2f;
    cursor: pointer;
    padding: 8px;
`;
