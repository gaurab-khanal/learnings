type ButtonProps<T> = {
  value: T;
  valueList: T[];
};

const Button = <T,>({ value, valueList }: ButtonProps<T>) => {
  console.log(value, valueList);
  return <div>Button</div>;
};

export default Button;
