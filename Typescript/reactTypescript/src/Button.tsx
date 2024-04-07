const Button = ({
  setCount,
}: {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return <button onClick={() => setCount((prv) => prv + 1)}>+</button>;
};

export default Button;
