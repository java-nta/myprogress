export const generateCardData = () => {
  const suits = ["H", "D", "C", "S"];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "T",
    "J",
    "Q",
    "K",
    "A",
  ];
  function getCardValue(value) {
    switch (value) {
      case "T":
        return 10;
      case "J":
        return 10;
      case "Q":
        return 10;
      case "K":
        return 10;
      case "A":
        return 11;
      default:
        return parseInt(value);
    }
  }
  const cardsData = {};

  suits.forEach((suit) => {
    values.forEach((value) => {
      const cardname = `${value}${suit}`;
      cardsData[cardname] = {
        id: cardname,
        value: getCardValue(value),
        svg: cardname + ".svg",
      };
    });
  });

  return cardsData;
};

export const cards = generateCardData();
