type Question = {
    id: number;
    category: string;
    question: string;
  };
  
  const questions: Question[] = [
    { id: 1, category: "Sparking Romance", question: "What has been the most romantic gesture you've ever experienced?" },
    { id: 2, category: "Sparking Romance", question: "What romantic moment from Friends do you wish we could recreate?" },
    { id: 3, category: "Sparking Romance", question: "If I could serenade you like Louis Tomlinson, which of his songs would you want me to sing to you?" },
    { id: 4, category: "Sparking Romance", question: "What does a perfect date night look like to you?" },
    { id: 5, category: "Sparking Romance", question: "What small, everyday thing do I do that makes you feel loved?" },
    { id: 6, category: "Sparking Romance", question: "What’s the most romantic thing you’ve seen on Friends?" },
    { id: 7, category: "Sparking Romance", question: "If we had a 'pivot' moment like Ross and the couch, how would we handle it as a couple?" },
    { id: 8, category: "Sparking Romance", question: "How do you think our love story would be written if it were a Friends episode?" },
    { id: 9, category: "Sparking Romance", question: "If we could travel anywhere in the world for a romantic getaway, where would we go?" },
    { id: 10, category: "Sparking Romance", question: "What is a simple but meaningful way I can show you love daily?" },
  
    { id: 11, category: "Exploring Attraction", question: "Do you think it's our similarities or our differences that make our relationship strong?" },
    { id: 12, category: "Exploring Attraction", question: "What’s the one quality in me that you’re most attracted to?" },
    { id: 13, category: "Exploring Attraction", question: "Which Friends character dynamic reminds you of us, and why?" },
    { id: 14, category: "Exploring Attraction", question: "If we were on a break like Ross and Rachel, how do you think we’d handle it?" },
    { id: 15, category: "Exploring Attraction", question: "What’s the most endearing quirk you’ve noticed about me?" },
    { id: 16, category: "Exploring Attraction", question: "In what ways do you think we complement each other?" },
    { id: 17, category: "Exploring Attraction", question: "How do you think we've changed since we first met?" },
    { id: 18, category: "Exploring Attraction", question: "If our relationship were a Louis Tomlinson song, which one would it be?" },
    { id: 19, category: "Exploring Attraction", question: "Do you believe in love at first sight, or was our connection something that grew over time?" },
    { id: 20, category: "Exploring Attraction", question: "If you could compare our relationship to a moment in Friends, what moment would it be?" },
  
    { id: 21, category: "Dreams and Desires", question: "If we were given $100,000, what’s the first thing you’d want us to do with it?" },
    { id: 22, category: "Dreams and Desires", question: "What’s one place you’ve always dreamed of visiting together?" },
    { id: 23, category: "Dreams and Desires", question: "If we could live in any fictional world, where would you choose, and why?" },
    { id: 24, category: "Dreams and Desires", question: "Imagine a dream vacation where we only eat potato-based dishes. What meals are we having?" },
    { id: 25, category: "Dreams and Desires", question: "If Louis Tomlinson invited us to one of his concerts with VIP backstage passes, how would you react?" },
    { id: 26, category: "Dreams and Desires", question: "What do you think our life would look like 10 years from now?" },
    { id: 27, category: "Dreams and Desires", question: "If we could design our dream home together, what’s the one feature you’d insist on?" },
    { id: 28, category: "Dreams and Desires", question: "What’s one personal goal you’d love for us to achieve as a couple?" },
    { id: 29, category: "Dreams and Desires", question: "If we could adopt any pet, what would it be? Bonus: Would we name it after a Friends character, Louis Tomlinson, or Cinnamoroll?" },
    { id: 30, category: "Dreams and Desires", question: "What’s one tradition you’d love for us to start together?" },
  
    { id: 31, category: "Perfect for Couples", question: "What’s one way we’ve grown stronger as a couple over time?" },
    { id: 32, category: "Perfect for Couples", question: "If you could go back to any moment in our relationship, what moment would you choose?" },
    { id: 33, category: "Perfect for Couples", question: "How would you describe our relationship in three words?" },
    { id: 34, category: "Perfect for Couples", question: "What’s one thing I could do that would surprise and delight you?" },
    { id: 35, category: "Perfect for Couples", question: "Do you think we’d make good roommates like Joey and Chandler?" },
    { id: 36, category: "Perfect for Couples", question: "If we could spend a whole day doing whatever you wanted, how would it go?" },
    { id: 37, category: "Perfect for Couples", question: "What’s a small change we could make in our daily routine to feel more connected?" },
    { id: 38, category: "Perfect for Couples", question: "Do you think our relationship would survive a week in Monica’s competitive apartment?" },
    { id: 39, category: "Perfect for Couples", question: "If you could give me one piece of relationship advice, what would it be?" },
    { id: 40, category: "Perfect for Couples", question: "What’s your favorite thing about us as a couple?" },
  
    { id: 41, category: "Date Nights and More", question: "What’s your idea of a perfect stay-at-home date night?" },
    { id: 42, category: "Date Nights and More", question: "If we could cook a themed dinner based on Friends, what would the theme be?" },
    { id: 43, category: "Date Nights and More", question: "What’s one way we could turn a regular evening into something special?" },
    { id: 44, category: "Date Nights and More", question: "If you had to plan our next date night, what would it involve?" },
    { id: 45, category: "Date Nights and More", question: "How would you feel if we had a Cinnamoroll-themed date night with matching outfits and treats?" },
    { id: 46, category: "Date Nights and More", question: "If we could spend the day as one of the Friends couples, which would it be, and what would we do?" },
    { id: 47, category: "Date Nights and More", question: "What’s a movie or show we should re-watch together to make new memories?" },
    { id: 48, category: "Date Nights and More", question: "If I could recreate any Friends episode just for us, which one would you choose?" },
    { id: 49, category: "Date Nights and More", question: "What’s one thing we haven’t done together yet that you’ve always wanted to try?" },
    { id: 50, category: "Date Nights and More", question: "What’s your favorite way to end a date night?" },
  
    { id: 51, category: "Fun and Silly Questions", question: "Would you rather be locked in a room with Ross or Joey for 24 hours? Why?" },
    { id: 52, category: "Fun and Silly Questions", question: "If you could only eat potatoes in one form for the rest of your life, what would it be?" },
    { id: 53, category: "Fun and Silly Questions", question: "What’s your ultimate Friends trivia question to stump me with?" },
    { id: 54, category: "Fun and Silly Questions", question: "If we could binge-watch only one season of Friends, which would it be and why?" },
    { id: 55, category: "Fun and Silly Questions", question: "Would you rather have Louis Tomlinson sing you a lullaby every night or Ross teach you about dinosaurs for a week?" },
    { id: 56, category: "Fun and Silly Questions", question: "If you could bring one Friends character to life for a double date with us, who would it be?" },
    { id: 57, category: "Fun and Silly Questions", question: "Would you rather have Cinnamoroll decorate our house or Monica from Friends?" },
    { id: 58, category: "Fun and Silly Questions", question: "What’s the most Joey-like thing you think I do?" },
    { id: 59, category: "Fun and Silly Questions", question: "If Louis Tomlinson were to dedicate a song to us, which one do you think he’d pick?" },
    { id: 60, category: "Fun and Silly Questions", question: "What’s the one episode of Friends you could watch on repeat and never get tired of?" },
  
    { id: 61, category: "Deeper Connection", question: "What’s the biggest lesson you’ve learned from Friends about relationships?" },
    { id: 62, category: "Deeper Connection", question: "What’s something you’d love for me to understand about your favorite characters in Friends?" },
    { id: 63, category: "Deeper Connection", question: "If our relationship had a theme song, what would it be?" },
    { id: 64, category: "Deeper Connection", question: "What’s one thing that you think has strengthened our connection the most?" },
    { id: 65, category: "Deeper Connection", question: "In what ways do you feel most appreciated in our relationship?" },
    { id: 66, category: "Deeper Connection", question: "What’s something I could do to make you feel more valued?" },
    { id: 67, category: "Deeper Connection", question: "If you could spend a day in Louis Tomlinson’s shoes, what would you do?" },
    { id: 68, category: "Deeper Connection", question: "If you could share one of your childhood memories with me to deepen our bond, what would it be?" },
    { id: 69, category: "Deeper Connection", question: "What’s something small but meaningful that you’d love for us to do together more often?" },
    { id: 70, category: "Deeper Connection", question: "How do you think Friends has influenced the way you view relationships, and does that affect how you see ours?" }
  ];
  
  export default questions;
  