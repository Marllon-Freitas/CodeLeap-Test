import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(119, 119, 119, 0.8);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  max-width: 47rem;
  width: 90%;
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
    & > .modal-actions {
      align-self: flex-end;
      display: flex;
      gap: 1rem;
    }
  }
`;
