type CardProps = {
  style: React.CSSProperties;
};

const Card = ({ style }: CardProps) => {
  return (
    <div>
      Card
      {style.height}
    </div>
  );
};

export default Card;
