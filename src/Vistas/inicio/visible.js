import { useEffect } from "react";

const useTimelineAnimation = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");

    const handleScroll = () => {
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          item.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};

export default useTimelineAnimation;
