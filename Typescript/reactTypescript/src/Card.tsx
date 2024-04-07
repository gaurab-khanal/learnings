type cardProps = {
  backgroundColor: string;
  size: string;
  fnc: () => string;
};

const Card = ({ backgroundColor, size, fnc }: cardProps) => {
  return (
    <div>
      Card
      {backgroundColor}
      {size}
    </div>
  );
};

export default Card;
