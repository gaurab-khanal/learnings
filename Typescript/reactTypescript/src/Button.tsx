type ButtonProps = React.ComponentProps<"button"> & { variant: string };
// if you wnat to add new attributes to component like button which dont exist by default
// use intersection & and add type of attribute you want to add

const Button = ({ type, ...rest }: ButtonProps) => {
  return (
    <button type={type} {...rest}>
      +
    </button>
  );
};

export default Button;
