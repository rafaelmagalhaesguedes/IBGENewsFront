import styled from 'styled-components';

export const SocialIcon = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;

  a {
    color: #000;
    transition: 0.3s;

    &:hover {
      color: #a9a9a9;
    }
  }

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;
