const Button = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e);
  };

  return <button onClick={handleClick}>+</button>;
};

export default Button;
