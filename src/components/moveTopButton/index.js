import arrow from '../../assets/images/icons/arrow.png';

const MoveTopBtn = ({ mainRef }) => {
  const handleArrowClick = () => {
    mainRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button onClick={handleArrowClick}>
      <img src={arrow} className="moveTopBtn" alt="mobeTopBtn" />
    </button>
  );
};

export default MoveTopBtn;
