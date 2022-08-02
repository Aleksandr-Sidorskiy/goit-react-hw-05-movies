import PropTypes from 'prop-types';
import { ContainerWrapper } from './Container.styled';

function Container({ children, isPadding }) {
  return <ContainerWrapper isPadding={isPadding}>{children}</ContainerWrapper>;
}

Container.prototype = {
  children: PropTypes.element.isRequired,
  isPadding: PropTypes.bool.isRequired,
};

export default Container;
