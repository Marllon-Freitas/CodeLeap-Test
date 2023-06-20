import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 31.25rem;
  max-width: 100%;
  height: 12.813rem;
  max-height: 100%;

  background: var(--background);
  border: 1px solid var(--grey);
  border-radius: var(--border-radius);
  padding: 1.5rem;

  & form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    input {
      width: 100%;
      height: 2rem;
      margin-bottom: 1rem;
      padding: 0.5rem;
      border: 1px solid var(--mid-gray);
      border-radius: var(--input-border-radius);
    }
  }
`;
