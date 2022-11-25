import { useState } from "react";

//ReactIcons
import { FaArrowCircleUp } from "react-icons/fa";

//StyledComponents
import { ScrollToTopButton } from "./ScrollToTop.styled";

import PropTypes from 'prop-types'

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <ScrollToTopButton>
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </ScrollToTopButton>
  );
};

//Prop Types

ScrollButton.propTypes = {
  toggleVisible: PropTypes.func,
  scrollToTop: PropTypes.func
};

export default ScrollButton;
