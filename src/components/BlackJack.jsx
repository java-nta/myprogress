import Page from "./layout/Page";

import { cards } from "./core/games/blackjack/data";
import { useCallback, useEffect, useState } from "react";
import Card from "./core/games/Card";
import { AnimatePresence, motion } from "framer-motion";

const BlackJack = () => {
  const [deck, setDeck] = useState(cards);
  const [playerHand, setPlayerHand] = useState([]);
  const [aiHand, setAiHand] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);
  const [winner, setWinner] = useState(null);
  const [turn, setTurn] = useState(null);
  const [hide, setHide] = useState(true);

  // Get a card from the deck.
  const drawCard = useCallback(() => {
    const deckCopy = { ...deck };
    const cardValues = Object.keys(deckCopy);
    if (cardValues.length === 0) {
      alert("Deck is empty!");
      return null;
    }
    // Generate the random card
    const randomCard =
      cardValues[Math.floor(Math.random() * cardValues.length)];

    const drawCard = deckCopy[randomCard];

    // Remove the draw card from the deck
    delete deckCopy[randomCard];
    setDeck(deckCopy);

    return drawCard;
  }, [deck]);

  // Generate the card.
  const generateCard = useCallback(
    (to, score) => {
      const card = drawCard();
      if (card) {
        if (to === "player") {
          setPlayerHand((prePlayerHand) => [...prePlayerHand, card]);
          setPlayerScore((prePlayerScore) => {
            if (card.id.startsWith("A") && 11 + score === 21) {
              return prePlayerScore + 11;
            }
            return prePlayerScore + card.value;
          });
        } else {
          setAiHand((preAiHand) => [...preAiHand, card]);
          setAiScore((preAiScore) => {
            if (card.id.startsWith("A") && 11 + score === 21) {
              return preAiScore + 11;
            }
            return preAiScore + card.value;
          });
        }
      }
    },
    [drawCard]
  );

  // Game Options

  const start = () => {
    for (let i = 0; i < 2; i++) {
      generateCard("player");
      generateCard("ai");
    }
    setTurn("player");
    setHide(false);
  };

  const stand = () => {
    setTurn("ai");
  };

  const reset = () => {
    setDeck(cards);
    setAiScore(0);
    setPlayerScore(0);
    setAiHand([]);
    setPlayerHand([]);
    setWinner(null);
    setHide(true);
    setTurn(null);
  };

  // game logic
  useEffect(() => {
    const aiGameplay = (score) => {
      const standThreshold = 17;
      if (score < standThreshold) {
        generateCard("ai", aiScore);
      } else {
        setTurn("end");
      }
    };
    if (playerScore === 21) {
      setWinner("player");
    }
    if (playerScore > 21) {
      setWinner("ai");
    }
    if (turn === "ai") {
      if (aiScore === 21) {
        setWinner("ai");
      }
      if (aiScore > 21) {
        setWinner("player");
      }
      aiGameplay(aiScore);
    }
    if (turn === "end") {
      if (aiScore > playerScore && aiScore <= 21) {
        setWinner("ai");
      } else {
        setWinner("player");
      }
    }
  }, [playerScore, turn, aiScore, generateCard]);

  return (
    <Page title={"BlackJack"}>
      <p>Welcome to the BlackJack game</p>

      <div className="flex flex-col items-center gap-9 my-10 min-h-[340px]">
        <div className="flex gap-1 justify-center ">
          {aiHand.map((card, index) => (
            <Card
              initial={{}}
              key={index}
              isUpcard={
                index === 1 && winner === null && turn === "player"
                  ? true
                  : false
              }
              index={card.id}
            />
          ))}
        </div>
        <div className="flex gap-1 justify-center">
          {playerHand.map((card, index) => (
            <Card key={index} index={card.id} />
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-4">
        {hide && (
          <AnimatePresence>
            <motion.button
              key={"start-btn"}
              type="button"
              className="p-5 bg-green-500 text-white hover:scale-95 smooth-transition"
              onClick={start}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0, scale: 0, transition: { duration: 0.5 } }}
            >
              START
            </motion.button>
          </AnimatePresence>
        )}
        <button
          type="button"
          className="p-5 bg-blue-500 text-white hover:scale-95 smooth-transition"
          onClick={() => generateCard("player", playerScore)}
        >
          HIT
        </button>
        <button
          type="button"
          className="p-5 bg-red-500 text-white hover:scale-95 smooth-transition"
          onClick={stand}
        >
          STAND
        </button>
        <button
          type="button"
          className="p-5 bg-gray-300 text-white hover:scale-95 smooth-transition"
          onClick={reset}
        >
          Reset
        </button>
      </div>
      <p>your score : {playerScore}</p>
      <p>ai score : {aiScore}</p>
      {winner && <div>winner is: {winner}</div>}
    </Page>
  );
};

export default BlackJack;
