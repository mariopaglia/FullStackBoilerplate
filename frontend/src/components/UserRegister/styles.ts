import styled from 'styled-components';

export const UserRegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 16px;

    width: 100%;
    max-width: 252px;

    label {
      font-weight: bold;
      margin-bottom: 8px;
    }

    input {
      width: 100%;
      margin-bottom: 10px;
      height: 32px;
      padding: 8px;
      border-radius: 4px;
    }

    button {
      margin-top: 10px;
      padding: 12px;
      border-radius: 4px;
      background-color: #2ecc71;
      color: white;
      font-size: 20px;
      font-weight: bold;
    }
  }
`;
