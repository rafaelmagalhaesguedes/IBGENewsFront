import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const ContainerHeader = styled.header`
  display: flex;
  width: 100%;
  background-color: #333;
  align-items: center;
  justify-content: space-around;
  fixed: top;
  position: fixed;
  top: 0;
`;

export const WrapperHeader = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

export const LogoHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Logo = styled.img`
  width: 40px;
  height: 100%;
`;

export const TitleHeader = styled.h1`
  font-size: 1.2rem;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
`;

export const NavbarSearch = styled.div`
  display: flex;
`;

export const InputSearch = styled.input`
  height: 30px;
  width: 340px;
  padding: 0 10px;
  border: none;
  border-bottom-left-radius: 5px;

  &:focus {
    outline: none;
  }
`;

export const IconSearch = styled(FaSearch)`
    width: 30px;
    height: 30px;
    color: #fff;
    background-color: green;
    cursor: pointer;
    padding: 7px;
`;
