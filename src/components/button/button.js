import PropTypes from 'prop-types';

import css from './button.module.css';

const Button = ({ children, onClick }) => {
  return (
    <div className={ css.box } onClick={ onClick }>
      { children }
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onClick: PropTypes.func,
};

export default Button;
