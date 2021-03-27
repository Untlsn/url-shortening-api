import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
  height: 10vh;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};

  justify-content: space-between;
  @media(max-width: 500px) {
    padding: 0 5vw;
  }
  @media(min-width: 500px) {
    font-size: .8em;
    padding: 0 10vw;
  }
`;
export const Logo = styled.img`
  
`;
