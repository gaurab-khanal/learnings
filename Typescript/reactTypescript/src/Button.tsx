import { useRef } from "react";

const Button = () => {
  const ref = useRef<HTMLButtonElement>(null);

  return <button ref={ref}>+</button>;
};

export default Button;
