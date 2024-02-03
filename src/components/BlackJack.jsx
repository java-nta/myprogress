import Page from "./layout/Page";
import { FaQuestion } from "react-icons/fa";

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
  const [ruleModal, setRuleModal] = useState(false);

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
  const calculateAceValue = (hand, currentScore) => {
    const hasAce = hand.some((card) => card.id.startsWith("A"));
    const aceValue = hasAce ? 10 : 1; // The value to add if there's an Ace

    if (hasAce && currentScore + aceValue === 21) {
      return currentScore + aceValue;
    } else if (hasAce && currentScore + 11 <= 21) {
      return currentScore + 11; // Use Ace as 11 without busting
    }
    return currentScore + aceValue;
  };
  const generateCard = useCallback(
    (to) => {
      const card = drawCard();
      if (card) {
        if (to === "player") {
          setPlayerHand((prePlayerHand) => [...prePlayerHand, card]);
          setPlayerScore((prePlayerScore) => {
            if (card.id.startsWith("A")) {
              return calculateAceValue(playerHand, prePlayerScore);
            }
            return prePlayerScore + card.value;
          });
        } else {
          setAiHand((preAiHand) => [...preAiHand, card]);
          setAiScore((preAiScore) => {
            if (card.id.startsWith("A") && 11 + preAiScore >= 21) {
              return calculateAceValue(aiHand, preAiScore);
            }
            return preAiScore + card.value;
          });
        }
      }
    },
    [aiHand, drawCard, playerHand]
  );

  // Game Options

  const start = () => {
    reset();
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
        {!turn && (
          <div className="flex justify-center gap-4 items-center relative">
            <button
              onClick={() => setRuleModal((preRuleModal) => !preRuleModal)}
              type="button"
              className="p-2 text-4xl bg-gray-100 rounded-md text-gray-300 hover:text-gray-600 smooth-transition hover:scale-105 dark:bg-dark-component"
            >
              <FaQuestion />
            </button>
            <AnimatePresence>
              {ruleModal && (
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  exit={{ y: -10, opacity: 0 }}
                  className="p-2 bg-gray-100 text-gray-500 border rounded-md absolute w-[500px] top-20 dark:bg-dark-component dark:border-dark-backgroundL"
                >
                  <p>
                    Aim for a hand value close to 21 without going over. Cards
                    2-10 are face value, face cards are 10, and Aces are 1 or
                    11. Get a "Blackjack" with an Ace and a 10-point card.
                    Choose to "Hit" for more cards or "Stand" to keep your hand.
                    Don't exceed 21; that's a "Bust." After your turn, the
                    dealer reveals their cards and follows set rules. The
                    closest to 21 wins. Good luck!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
        <div className="flex gap-1 justify-center ">
          {aiHand.map((card, index) => (
            <Card
              key={index}
              isUpcard={
                index === 1 && winner === null && turn === "player"
                  ? true
                  : false
              }
              animate={index === aiHand.length - 1 && true}
              index={card.id}
            />
          ))}
        </div>
        <div className="flex gap-1 justify-center">
          {playerHand.map((card, index) => (
            <Card
              key={index}
              index={card.id}
              animate={index === playerHand.length - 1 && true}
            />
          ))}
        </div>
      </div>
      {/* Game Options Menu */}
      <div className="flex justify-center gap-4 mb-10">
        {hide || winner !== null ? (
          <AnimatePresence>
            <motion.button
              key={"start-btn"}
              type="button"
              className="p-2 rounded-md bg-gray-100 text-lg font-bold text-gray-300 hover:text-green-600 hover:bg-green-200 smooth-transition"
              onClick={start}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              START
            </motion.button>
          </AnimatePresence>
        ) : (
          <>
            <button
              type="button"
              className="p-2 rounded-md bg-gray-100 text-lg font-bold text-gray-300 hover:text-blue-600 hover:bg-blue-200 smooth-transition"
              onClick={() => generateCard("player", playerScore)}
            >
              HIT
            </button>
            <button
              type="button"
              className="p-2 rounded-md bg-gray-100 text-lg font-bold text-gray-300 hover:text-red-600 hover:bg-red-200 smooth-transition"
              onClick={stand}
            >
              STAND
            </button>
            <button
              type="button"
              className="p-2 rounded-md bg-gray-100 text-lg font-bold text-gray-300 hover:text-dark-background  smooth-transition"
              onClick={reset}
            >
              Reset
            </button>
          </>
        )}
      </div>
      <AnimatePresence>
        {winner === "player" && (
          <div className="bg-green-500 text-white rounded-md text-center p-2">
            YOU WON
          </div>
        )}
        {winner === "ai" && (
          <div className="bg-red-500 text-white rounded-md text-center p-2">
            YOU LOST
          </div>
        )}
      </AnimatePresence>
    </Page>
  );
};

export default BlackJack;
