import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function useHashRouteToggle(hash) {
  const navigate = useNavigate();
  const location = useLocation();

  const [isActive, setIsActive] = useState(false);

  const toggleActive = (bool) => {
    if (bool !== isActive) {
      // needed if there are multiple modals with close-on-esc-keyup in the same page
      if (bool) {
        navigate(location.pathname + "#" + hash);
      } else {
        navigate(-1);
      }
      setIsActive(bool);
    }
  };

  useEffect(() => {
    const handleOnHashChange = () => {
      setIsActive(false);
    };

    window.addEventListener("hashchange", handleOnHashChange);

    return () => window.removeEventListener("hashchange", handleOnHashChange);
  });

  return [isActive, toggleActive];
}
