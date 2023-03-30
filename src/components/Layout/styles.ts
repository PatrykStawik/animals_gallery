import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 800px;
  margin-top: 55px;

  @media (max-width: 476px) {
    max-width: 100%;
  }
`;
