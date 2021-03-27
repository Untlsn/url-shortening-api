import styled from 'styled-components';
import { PagView } from '@style/reusable';

export const Wrapper = styled(PagView)`
  background-color: ${({ theme }) => theme.colors.gray};
  height: 100vh;
`;
