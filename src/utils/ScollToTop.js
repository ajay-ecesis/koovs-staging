import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "auto";
  }, [pathname]);

  return null;
}

export default ScrollToTop;
