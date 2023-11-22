import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
  height: auto;
  margin: 2rem 0;

  a {
    text-decoration: none;
  }

  h2, p {
    padding: 10px 0;
    text-align: justify;
  }

  h2 {
    font-size: 1.1rem;
    color: #333;
    font-weight: 600;
  }

  p {
    color: #333;
    font-size: 0.9rem;
    letter-spacing: 1px;
    line-height: 1.4rem;
    font-weight: normal;
    margin-bottom: 1rem;

    &:hover {
      color: red;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    transition: 0.3s;
    align-items: center;

    h2 {
      font-size: 1rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    flex-direction: column;
    transition: 0.3s;
    width: 100%;
  }
`;

export const CardItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-bottom: 4rem;
  border-radius: 5px;
  background-color: #fff;
  padding: 1rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  transition: 0.3s;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    flex-direction: column;
    transition: 0.3s;
    width: 100%;
    height: auto;
  }

  @media (min-width: 1025px) and (max-width: 1224px) {
    flex-direction: column;
    transition: 0.3s;
    width: 45%;
    gap: 1rem;
    height: auto;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;

  @media (min-width: 769px) and (max-width: 1024px) {
    flex-direction: column;
    transition: 0.3s;
    width: 100%;
  }

  @media (min-width: 1920px) {
    width: 100%;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
`;

export const CardTitle = styled.div``;

export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const DateAndLink = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  gap: 1rem;
  width: 100%;
  align-items: center;
  padding-bottom: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-flow: row wrap;
    transition: 0.3s;
    width: 100%;
    height: auto;
    jutify-content: center;
    margin-top: 0;
  }
`;

export const LoadMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const ButtonLoadMore = styled.button`
  width: 30%;
  height: 2.5rem;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    background-color: #000;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const NotFoundNews = styled.div`
  h2 { 
    display: flex;
    width: 100%;
    height: 70vh;
    font-size: 1.2rem;
    text-align: center;
    color: #2A2A2A;
  }
`;
