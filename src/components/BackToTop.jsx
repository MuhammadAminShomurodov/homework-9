import "./BackToTop.css";

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className="back-to-top" onClick={scrollToTop}>
      &uarr;
    </button>
  );
};

export default BackToTop;
