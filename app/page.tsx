"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import questions, { Question } from '../data/questions';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/system';

// Function to shuffle the questions array
const shuffleArray = (array: Question[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const emoticons = [
  "(๑>◡<๑)", "(っ◔◡◔)っ", "(´・ω・)っ", "⊂(´･◡･⊂ )∘˚˳°", "(｡◕‿‿◕｡)", "⊙﹏⊙", "(◕ᴗ◕♡)", "(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧ ∘˚˳° ⊂(´･◡･⊂)",
  "(҂◡_◡) ᕤ", "(⨪ˬ⨪)", "(~‾▿‾)~", "•ᴗ•", "(づ￣ ³￣)づ ⊂(´･◡･⊂ )∘˚˳°", "≖‿≖", "മ◡മ", "(ง^ᗜ^)ง", "(ღ˘⌣˘ღ)", "(◉⩊◉)",
  "(◕ω◕)♡", "ƪ(‾ε‾\")ʃ", "( ˘⌣˘ )", "(ၜᔕၜ)", "(☉ ϖ ☉)", "ヾ(-_- )ゞ", "ヽ(°◇° )ノ", "( ^◡^)", "(ၜᗝ ၜ)", "(－‸ლ)", "ᕕ( ◕‿‿◕)ᕗ",
  "ˎ₍•ʚ•₎ˏ", "(╥_╥)", "˶˙ᵕ˙˶", "OₙO"
];

const theme = createTheme({
  palette: {
    primary: {
      main: '#59C5ED',
    },
  },
});

const SimpleButton = styled(Button)({
  background: '#59C5ED',
  borderRadius: '8px',
  color: '#fff',
  fontWeight: 'bold',
  textTransform: 'none',
  padding: '10px 20px',
  position: 'fixed',
  bottom: '16px',
  right: '16px',
  '&:hover': {
    background: '#47B3E0',
  },
  '&:active': {
    background: '#3A9ACD',
  },
});

export default function Home() {
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [emoticon, setEmoticon] = useState("");

  useEffect(() => {
    setShuffledQuestions(shuffleArray([...questions]));
    setEmoticon(emoticons[Math.floor(Math.random() * emoticons.length)]);
  }, []);

  const nextQuestion = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentQuestionIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex >= shuffledQuestions.length) {
        setShuffledQuestions(shuffleArray([...questions]));
        return 0;
      }
      setEmoticon(emoticons[Math.floor(Math.random() * emoticons.length)]);
      return nextIndex;
    });
  };

  const resetDeck = () => {
    setShuffledQuestions(shuffleArray([...questions]));
    setCurrentQuestionIndex(0);
    setEmoticon(emoticons[Math.floor(Math.random() * emoticons.length)]);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction === 0 ? 0 : direction > 0 ? 50 : -50,
      y: direction === 0 ? 0 : direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction === 0 ? 0 : direction < 0 ? 50 : -50,
      y: direction === 0 ? 0 : direction < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-sky-500 p-4">
        <div className="relative w-full max-w-md mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentQuestionIndex}
              className="absolute w-full"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              onDragEnd={(event, info) => {
                if (info.offset.x < -100) {
                  nextQuestion(1);
                } else if (info.offset.x > 100) {
                  nextQuestion(-1);
                } else if (info.offset.y < -100) {
                  nextQuestion(2);
                } else if (info.offset.y > 100) {
                  nextQuestion(-2);
                }
              }}
              onClick={() => nextQuestion(0)}
              whileTap={{ scale: 0.98, y: 5 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex flex-col items-center justify-center cursor-pointer">
                <h1 className="text-2xl font-bold mb-2">Table Pot: 70x</h1>
                <p className="text-center mb-4">{shuffledQuestions[currentQuestionIndex]?.question}</p>
                <div className="flex justify-between w-full">
                  <p className="text-sm text-sky-500">{currentQuestionIndex + 1}/{shuffledQuestions.length}</p>
                  <p className="text-sm text-sky-500">{emoticon}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <SimpleButton
          variant="contained"
          color="primary"
          onClick={resetDeck}
        >
          Reset
        </SimpleButton>
      </div>
    </ThemeProvider>
  );
}