
const Button = ({ name, url }) => {
  const handleButtonClick = () => {
    window.open(url);
  };

  return (
    <button className="button" onClick={handleButtonClick}>
      {name}
    </button>
  );
};

export default Button;
