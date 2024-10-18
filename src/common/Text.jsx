import PropTypes from 'prop-types';

const Text = ({ className, children }) => {
  return <span className={className}>{children}</span>;
};

export default Text;

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
