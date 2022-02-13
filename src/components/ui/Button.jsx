import React from 'react';
import PropTypes from 'prop-types';
import RightArrow from '../icons/RightArrow';
import Loading from './Loading';

const Button = ({ children, className, Icon, loading, ...rest }) => {
  return (
    <button
      {...rest}
      className={`justify-center shadow-xl px-4 py-2 rounded-lg text-default flex space-x-1.5 ${className}`}
    >
      <span>{children}</span>
      <span>{loading ? <Loading /> : <Icon />}</span>
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
  Icon: RightArrow,
  loading: false,
};

Button.displayName = 'Button';

export default Button;
