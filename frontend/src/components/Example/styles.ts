import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
  text-align: center;
  padding: 0 20px;

  h1 {
    font-size: 56px;
    color: ${(props) => props.theme.colors.primary};
  }

  p {
    font-size: 24px;
  }
`;
