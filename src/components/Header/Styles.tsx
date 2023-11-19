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
`;

export const WrapperHeader = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const LogoHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border: none;
`;

export const Logo = styled.img`
  width: 100px;
  height: 100%;
  cursor: pointer;
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
    background-color: #CD0404;
    cursor: pointer;
    padding: 7px;
`;
