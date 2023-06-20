import styled from "styled-components";

export const CreatePostWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CreatePostContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 47rem;
  max-width: 100%;
  height: 20.875rem;
  max-height: 100%;
  background-color: var(--background);
  border: 1px solid var(--mid-gray);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  gap: 1.5rem;

  & form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 1.5rem;

    input,
    textarea {
      width: 100%;
      height: 2rem;
      padding: 0.5rem;
      border: 1px solid var(--mid-gray);
      border-radius: var(--input-border-radius);
    }

    textarea {
      height: 4.625rem;
      resize: none;
    }
  }
`;
