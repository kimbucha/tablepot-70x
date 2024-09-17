export type Question = {
    id: number;
    category: string;
    question: string;
};

const questions: Question[] = [
    { id: 1, category: "sparking romance", question: "what has been the most romantic gesture you've ever experienced?" },
    { id: 2, category: "sparking romance", question: "what romantic moment from friends do you wish we could recreate?" },
    { id: 3, category: "sparking romance", question: "if i could serenade you like louis tomlinson, which of his songs would you want me to sing to you?" },
    // Add more questions up to 70
    { id: 70, category: "deeper connection", question: "how do you think friends has influenced the way you view relationships, and does that affect how you see ours?" }
];

export default questions;
