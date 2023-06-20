import styled from "styled-components";

export const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--size-sm);
  font-weight: 700;
  line-height: 18.75px;
  width: 7.5rem;
  height: 2rem;
  align-self: flex-end;
  transition: all 0.2s ease-in-out;
  background: ${(props) => {
    switch (props.actiontype) {
      case "primary":
        return "var(--primary)";
      case "cancel":
        return "var(--red-cancel)";
      case "confirm":
        return "var(--green-confirm)";
      default:
        return "transparent";
    }
  }};
  &:hover {
    background: ${(props) => {
      switch (props.actiontype) {
        case "primary":
          return "var(--primary-hover)";
        case "cancel":
          return "var(--red-cancel-hover)";
        case "confirm":
          return "var(--green-confirm-hover)";
        default:
          return "transparent";
      }
    }};
  }
  &:disabled {
    background: ${(props) => {
      switch (props.actiontype) {
        case "primary":
          return "var(--primary-disabled)";
        default:
          return "var(--light-gray)";
      }
    }};
    cursor: not-allowed;
  }
  color: ${(props) => {
    switch (props.actiontype) {
      case "primary":
        return "var(--text-white)";
      case "cancel":
        return "var(--text-white)";
      case "confirm":
        return "var(--text-white)";
      default:
        return "var(--text-black)";
    }
  }};
  border-radius: var(--input-border-radius);
  border: ${(props) => {
    switch (props.actiontype) {
      case "primary":
        return "none";
      case "cancel":
        return "none";
      case "confirm":
        return "none";
      default:
        return "1px solid var(--light-gray)";
    }
  }};
`;
