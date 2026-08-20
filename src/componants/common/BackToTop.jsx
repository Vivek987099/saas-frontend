import { useEffect, useState } from "react";

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    show && (
      <button
        onClick={scrollToTop}
        className="
          fixed
          bottom-6
          right-6
          z-50
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-indigo-600
          text-2xl
          font-bold
          text-white
          shadow-lg
          transition
          duration-300
          hover:bg-indigo-700
          hover:scale-110
          active:scale-95
        "
      >
        ↑
      </button>
    )
  );
}

export default BackToTop;
