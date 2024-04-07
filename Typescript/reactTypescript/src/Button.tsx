type ButtonProps = React.ComponentProps<"button"> & { variant: string };
// if you wnat to add new attributes to component like button which dont exist by default
// use intersection & and add type of attribute you want to add

const Button = ({ type }: ButtonProps) => {
  return <button type={type}>+</button>;
};

export default Button;
