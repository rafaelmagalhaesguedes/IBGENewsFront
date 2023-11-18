import {
  ContainerHeader,
  IconSearch,
  InputSearch,
  Logo, LogoHeader, NavbarSearch, TitleHeader, WrapperHeader } from './Styles';
import iconLogo from '../../assets/logo.svg';

function Header() {
  return (
    <ContainerHeader>
      <WrapperHeader>
        <LogoHeader>
          <Logo src={ iconLogo } alt="Logo" />
          <TitleHeader>Trybe News</TitleHeader>
        </LogoHeader>
        <NavbarSearch>
          <InputSearch
            type="text"
            placeholder="Search"
          />
          <IconSearch />
        </NavbarSearch>
      </WrapperHeader>
    </ContainerHeader>
  );
}

export default Header;
