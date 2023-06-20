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
  width: 100vw;
  height: 100vh;
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 41.25rem;
  width: 90%;
  min-height: 9.125rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--light-gray);
  z-index: 1000;
  background: #fff;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > .modal-actions {
    align-self: flex-end;
    display: flex;
    gap: 1rem;
  }
`;
