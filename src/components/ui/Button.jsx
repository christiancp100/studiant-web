import React from 'react';
import PropTypes from 'prop-types'
import RightArrow from '../icons/RightArrow';


const Button = ({ children, className, variant, Icon, ...rest }) => {

  return <button {...rest}
    className={`bg-${variant} shadow-xl px-4 py-2 rounded-lg text-default flex ${className}`}>
    <span>{children}</span>
    <span><Icon /></span>
  </button>;
};


Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"])
}

Button.defaultProps = {
  variant: "primary",
  Icon: RightArrow
}

export default Button;
