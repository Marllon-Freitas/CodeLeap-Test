import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;
  max-width: 100%;

  & > header.home-header {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: var(--primary);
    height: 5rem;
    border-bottom: 1px solid var(--light-gray);
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > button {
      background: none;
      border: none;
      cursor: pointer;
      height: 1.406rem;
      margin-right: 1.731rem;
      color: var(--text-white);

      & > img {
        width: 100%;
        height: 100%;
      }
    }

    & h1 {
      color: var(--text-white);
      margin-left: 2.313rem;
    }
  }

  & > main {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    padding: 1.5rem;
    background-color: var(--background);
  }
`;
