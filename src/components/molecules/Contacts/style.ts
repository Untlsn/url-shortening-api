import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10em;
  gap: 1em;
`;
export const SingleContact = styled.a<{ imgSrc: string }>`
  display: block;
  background: url("${({ imgSrc }) => imgSrc}") no-repeat center;
  background-size: cover;
  height: 1.5em;
  width:  1.5em;
`;
