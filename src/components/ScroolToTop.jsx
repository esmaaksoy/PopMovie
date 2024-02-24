import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This process ensures that when users navigate to different pages within the application, the page automatically scrolls to the top when transitioning to a new page. When the project is deployed from Netlify, this operation does not occur automatically, hence it is included in the project.

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
