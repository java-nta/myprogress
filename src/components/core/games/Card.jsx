import { cards } from "./blackjack/data";

const Card = ({ index, isUpcard = false }) => {
  const cardInfo = cards[index];
  return (
    <div>
      {isUpcard ? (
        <img
          src={process.env.PUBLIC_URL + "/games/cards/1B.svg"}
          alt={cardInfo.value + ""}
          className="h-[150px]"
        />
      ) : (
        <img
          src={process.env.PUBLIC_URL + "/games/cards/" + cardInfo.svg}
          alt={cardInfo.value + ""}
          className="h-[150px]"
        />
      )}
    </div>
  );
};

export default Card;
