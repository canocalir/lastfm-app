//Styled Components
import { HeadingTop } from "./Heading.styled";
import PropTypes from "prop-types";

const Heading = ({ title }) => {
  return <HeadingTop data-testid="mainheading">{title}</HeadingTop>;
};

export default Heading;

//Prop Types

Heading.propTypes = {
  title: PropTypes.string,
};
