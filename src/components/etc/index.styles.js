import styled from '@emotion/styled';
import { Container, media } from '../../styles/theme';

export const MainContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  height: 100vh;

  .title {
    font-size: 10rem;
    margin-top: 5rem;
    ${media.mobile} {
      font-size: 4rem;
    }
  }

  .list {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
`;
