import { cards } from "./blackjack/data";
import { motion } from "framer-motion";
const Card = ({ index, isUpcard = false, animate = false }) => {
  const cardInfo = cards[index];
  return animate ? (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
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
    </motion.div>
  ) : (
    <motion.div>
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
    </motion.div>
  );
};

export default Card;
