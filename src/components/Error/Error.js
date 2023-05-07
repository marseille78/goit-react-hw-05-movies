import PropTypes from 'prop-types';

const Error = ({ children }) => {
  return (
    <h2>{ children }</h2>
  );
};

Error.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Error;
