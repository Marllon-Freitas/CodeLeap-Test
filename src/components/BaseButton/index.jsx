import { ButtonWrapper } from "./styled";
import PropTypes from "prop-types";

export const Button = ({ children, actiontype, isDisabled, onClick }) => {
  return (
    <ButtonWrapper onClick={onClick} actiontype={actiontype} disabled={isDisabled}>
      {children}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  actiontype: PropTypes.oneOf(["primary", "cancel", "confirm", "default"]),
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};
