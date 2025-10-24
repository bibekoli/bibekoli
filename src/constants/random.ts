const randomData = [
  // Funny
  {
    type: "funny",
    content: "There are only 10 types of people in the world: those who understand binary and those who don't.",
    author: "Anonymous"
  },
  {
    type: "funny",
    content: "99 little bugs in the code, 99 little bugs. Take one down, patch it around, 117 little bugs in the code.",
    author: "Anonymous"
  },
  {
    type: "funny",
    content: "A SQL query goes into a bar, walks up to two tables and asks: 'Can I join you?'",
    author: "Anonymous"
  },
  {
    type: "funny",
    content: "Why do programmers prefer dark mode? Because light attracts bugs!",
    author: "Anonymous"
  },
  {
    type: "funny",
    content: "I would tell you a UDP joke, but you might not get it.",
    author: "Anonymous"
  },
  {
    type: "funny",
    content: "Why do Java developers wear glasses? Because they can't C#!",
    author: "Anonymous"
  },
  {
    type: "funny",
    content: "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
    author: "Anonymous"
  },
  {
    type: "funny",
    content: "Debugging is twice as hard as writing the code in the first place.",
    author: "Anonymous"
  },
  {
    type: "funny",
    content: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
    author: "Anonymous"
  },
  {
    type: "funny",
    content: "A programmer is told to 'go to hell', he finds the worst part of that statement is the 'go to'.",
    author: "Anonymous"
  },
  {
    type: "funny",
    content: "Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25!",
    author: "Anonymous"
  },
  {
    type: "funny",
    content: "There's no place like 127.0.0.1",
    author: "Anonymous"
  },
  {
    type: "funny",
    content: "I have a joke about REST API, but I'll POST it later.",
    author: "Anonymous"
  },
  {
    type: "funny",
    content: "Why did the programmer quit his job? He didn't get arrays!",
    author: "Anonymous"
  },
  {
    type: "funny",
    content: "A byte walks into a bar looking miserable. The bartender asks 'What's wrong?' The byte replies 'Parity error.'",
    author: "Anonymous"
  },
  {
    type: "funny",
    content: "Why don't programmers like nature? It has too many bugs.",
    author: "Anonymous"
  },
  {
    type: "funny",
    content: "Why did the developer go broke? Because he used up all his cache!",
    author: "Anonymous"
  },
  {
    type: "funny",
    content: "What's the object-oriented way to become wealthy? Inheritance.",
    author: "Anonymous"
  },
  {
    type: "funny",
    content: "A programmer's wife asks: 'Would you go to the store and pick up a loaf of bread? And if they have eggs, get a dozen.' The programmer returns home with 12 loaves of bread.",
    author: "Anonymous"
  },
  {
    type: "funny",
    content: "Why did the programmer use the wrong function? Because he had trouble with his arguments!",
    author: "Anonymous"
  },
  {
    type: "funny",
    content: "What do you call 8 hobbits? A hobbyte.",
    author: "Anonymous"
  },
  {
    type: "funny",
    content: "Why was the computer cold? It left its Windows open.",
    author: "Anonymous"
  },
  {
    type: "funny",
    content: "Why do programmers hate nature? It has too many bugs and not enough documentation.",
    author: "Anonymous"
  },
  {
    type: "funny",
    content: "Programming is like sex: one mistake and you have to support it for the rest of your life.",
    author: "Anonymous"
  },
  {
    type: "funny",
    content: "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs.",
    author: "Anonymous"
  },

  // Informative
  {
    type: "informative",
    content: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House"
  },
  {
    type: "informative",
    content: "First, solve the problem. Then, write the code.",
    author: "John Johnson"
  },
  {
    type: "informative",
    content: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler"
  },
  {
    type: "informative",
    content: "The function of good software is to make the complex appear to be simple.",
    author: "Grady Booch"
  },
  {
    type: "informative",
    content: "Make it work, make it right, make it fast.",
    author: "Kent Beck"
  },
  {
    type: "informative",
    content: "The only way to learn a new programming language is by writing programs in it.",
    author: "Dennis Ritchie"
  },
  {
    type: "informative",
    content: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson"
  },
  {
    type: "informative",
    content: "Good code is its own best documentation.",
    author: "Steve McConnell"
  },
  {
    type: "informative",
    content: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci"
  },
  {
    type: "informative",
    content: "The best error message is the one that never shows up.",
    author: "Thomas Fuchs"
  },
  {
    type: "informative",
    content: "Code never lies, comments sometimes do.",
    author: "Ron Jeffries"
  },
  {
    type: "informative",
    content: "Documentation is a love letter that you write to your future self.",
    author: "Damian Conway"
  },
  {
    type: "informative",
    content: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
    author: "Bill Gates"
  },
  {
    type: "informative",
    content: "Software is a great combination between artistry and engineering.",
    author: "Bill Gates"
  },
  {
    type: "informative",
    content: "Programming isn't about what you know; it's about what you can figure out.",
    author: "Chris Pine"
  },
  {
    type: "informative",
    content: "Before software can be reusable it first has to be usable.",
    author: "Ralph Johnson"
  },
  {
    type: "informative",
    content: "It's not a bug – it's an undocumented feature.",
    author: "Anonymous"
  },
  {
    type: "informative",
    content: "Experience is the name everyone gives to their mistakes.",
    author: "Oscar Wilde"
  },
  {
    type: "informative",
    content: "Knowledge is power.",
    author: "Francis Bacon"
  },
  {
    type: "informative",
    content: "The best way to get a project done faster is to start sooner.",
    author: "Jim Highsmith"
  },
  {
    type: "informative",
    content: "In order to be irreplaceable, one must always be different.",
    author: "Coco Chanel"
  },
  {
    type: "informative",
    content: "The most important property of a program is whether it accomplishes the intention of its user.",
    author: "C.A.R. Hoare"
  },
  {
    type: "informative",
    content: "The best programs are written so that computing machines can perform them quickly and so that human beings can understand them clearly.",
    author: "Donald Knuth"
  },
  {
    type: "informative",
    content: "The computer was born to solve problems that did not exist before.",
    author: "Bill Gates"
  },
  {
    type: "informative",
    content: "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.",
    author: "Antoine de Saint-Exupery"
  },

  // Love
  {
    type: "romantic",
    content: "I love you more than JavaScript loves callbacks.",
    author: "Anonymous"
  },
  {
    type: "romantic",
    content: "You're the CSS to my HTML - you make everything beautiful.",
    author: "Anonymous"
  },
  {
    type: "romantic",
    content: "Our love is like a recursive function - it calls itself infinitely.",
    author: "Anonymous"
  },
  {
    type: "romantic",
    content: "You're my favorite feature, not a bug.",
    author: "Anonymous"
  },
  {
    type: "romantic",
    content: "I'd choose you over any framework, library, or language.",
    author: "Anonymous"
  },
  {
    type: "romantic",
    content: "You're the exception I'd never want to catch.",
    author: "Anonymous"
  },
  {
    type: "romantic",
    content: "My love for you is like a while(true) loop - endless.",
    author: "Anonymous"
  },
  {
    type: "romantic",
    content: "You're the semicolon to my statement - essential and perfect.",
    author: "Anonymous"
  },
  {
    type: "romantic",
    content: "I'd refactor my entire life just to be with you.",
    author: "Anonymous"
  },
  {
    type: "romantic",
    content: "You're my main() function - where everything begins.",
    author: "Anonymous"
  },
  {
    type: "romantic",
    content: "Our relationship has no memory leaks - it's perfectly optimized.",
    author: "Anonymous"
  },
  {
    type: "romantic",
    content: "You're the commit I'd never want to revert.",
    author: "Anonymous"
  },
  {
    type: "romantic",
    content: "I love you in O(1) time - constant and immediate.",
    author: "Anonymous"
  },
  {
    type: "romantic",
    content: "You're my favorite variable - always changing but always mine.",
    author: "Anonymous"
  },
  {
    type: "romantic",
    content: "Our love compiles without errors every single time.",
    author: "Anonymous"
  },
  {
    type: "romantic",
    content: "You're the API to my heart - perfectly documented and easy to use.",
    author: "Anonymous"
  },
  {
    type: "romantic",
    content: "I'd merge with you any day, no conflicts guaranteed.",
    author: "Anonymous"
  },
  {
    type: "romantic",
    content: "You're my production environment - where everything matters most.",
    author: "Anonymous"
  },
  {
    type: "romantic",
    content: "Our love is open source - transparent and collaborative.",
    author: "Anonymous"
  },
  {
    type: "romantic",
    content: "You're the algorithm that solves all my problems.",
    author: "Anonymous"
  },
  {
    type: "romantic",
    content: "I love you more than a developer loves clean code.",
    author: "Anonymous"
  },
  {
    type: "romantic",
    content: "You're my favorite dependency - I can't function without you.",
    author: "Anonymous"
  },
  {
    type: "romantic",
    content: "Our love is like good documentation - clear, helpful, and beautiful.",
    author: "Anonymous"
  },
  {
    type: "romantic",
    content: "You're the pull request I'd approve instantly.",
    author: "Anonymous"
  },
  {
    type: "romantic",
    content: "I'd choose you over any stack overflow answer.",
    author: "Anonymous"
  },

  // Facts
  {
    type: "facts",
    content: "The first computer bug was an actual bug - a moth found in a Harvard computer in 1947.",
    author: "Historical Records"
  },
  {
    type: "facts",
    content: "The term 'debugging' was coined by Admiral Grace Hopper.",
    author: "Historical Records"
  },
  {
    type: "facts",
    content: "JavaScript was created in just 10 days by Brendan Eich in 1995.",
    author: "Tech Archives"
  },
  {
    type: "facts",
    content: "The first programming language was Fortran, developed in 1957.",
    author: "Historical Records"
  },
  {
    type: "facts",
    content: "Python was named after Monty Python's Flying Circus, not the snake.",
    author: "Programming Trivia"
  },
  {
    type: "facts",
    content: "The '@' symbol was used in email addresses for the first time in 1971.",
    author: "Tech Archives"
  },
  {
    type: "facts",
    content: "The first computer virus was created in 1983 and was called 'Elk Cloner'.",
    author: "Historical Records"
  },
  {
    type: "facts",
    content: "HTML stands for HyperText Markup Language.",
    author: "Tech Archives"
  },
  {
    type: "facts",
    content: "The first website ever created is still online: info.cern.ch",
    author: "Historical Records"
  },
  {
    type: "facts",
    content: "Linux was created by Linus Torvalds when he was just 21 years old.",
    author: "Tech Archives"
  },
  {
    type: "facts",
    content: "The term 'cookie' in web development comes from 'magic cookie' in Unix.",
    author: "Programming Trivia"
  },
  {
    type: "facts",
    content: "Git was created by Linus Torvalds in just 2 weeks.",
    author: "Tech Archives"
  },
  {
    type: "facts",
    content: "The first computer programmer was Ada Lovelace in 1843.",
    author: "Historical Records"
  },
  {
    type: "facts",
    content: "C++ was originally called 'C with Classes'.",
    author: "Programming Trivia"
  },
  {
    type: "facts",
    content: "The first computer mouse was made of wood in 1964.",
    author: "Tech Archives"
  },
  {
    type: "facts",
    content: "Java was originally called Oak.",
    author: "Programming Trivia"
  },
  {
    type: "facts",
    content: "The term 'spam' for unwanted email comes from a Monty Python sketch.",
    author: "Tech Archives"
  },
  {
    type: "facts",
    content: "The first domain name ever registered was symbolics.com in 1985.",
    author: "Historical Records"
  },
  {
    type: "facts",
    content: "WiFi doesn't stand for anything - it's just a made-up name.",
    author: "Tech Archives"
  },
  {
    type: "facts",
    content: "The first computer was the size of a room and weighed 30 tons.",
    author: "Historical Records"
  },
  {
    type: "facts",
    content: "Google's name comes from 'googol' - a number with 100 zeros.",
    author: "Tech Archives"
  },
  {
    type: "facts",
    content: "The first iPhone had the same processing power as a 1985 Cray supercomputer.",
    author: "Tech Archives"
  },
  {
    type: "facts",
    content: "Stack Overflow gets over 50 million visitors every month.",
    author: "Tech Archives"
  },
  {
    type: "facts",
    content: "The average programmer types about 8,000 keystrokes per day.",
    author: "Tech Archives"
  },
  {
    type: "facts",
    content: "There are over 700 programming languages in existence.",
    author: "Tech Archives"
  },

  // Other
  {
    type: "other",
    content: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb"
  },
  {
    type: "other",
    content: "Code is poetry written in logic.",
    author: "Anonymous"
  },
  {
    type: "other",
    content: "Every expert was once a beginner.",
    author: "Anonymous"
  },
  {
    type: "other",
    content: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins"
  },
  {
    type: "other",
    content: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs"
  },
  {
    type: "other",
    content: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    type: "other",
    content: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    type: "other",
    content: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    type: "other",
    content: "Life is what happens to you while you're busy making other plans.",
    author: "John Lennon"
  },
  {
    type: "other",
    content: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    type: "other",
    content: "Two things are infinite: the universe and human stupidity.",
    author: "Albert Einstein"
  },
  {
    type: "other",
    content: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky"
  },
  {
    type: "other",
    content: "Whether you think you can or you think you can't, you're right.",
    author: "Henry Ford"
  },
  {
    type: "other",
    content: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    type: "other",
    content: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    type: "other",
    content: "Don't let yesterday take up too much of today.",
    author: "Will Rogers"
  },
  {
    type: "other",
    content: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt"
  },
  {
    type: "other",
    content: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle"
  },
  {
    type: "other",
    content: "Whoever is happy will make others happy too.",
    author: "Anne Frank"
  },
  {
    type: "other",
    content: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson"
  },
  {
    type: "other",
    content: "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou"
  },
  {
    type: "other",
    content: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr."
  },
  {
    type: "other",
    content: "The purpose of our lives is to be happy.",
    author: "Dalai Lama"
  },
  {
    type: "other",
    content: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius"
  },
  {
    type: "other",
    content: "The only thing necessary for the triumph of evil is for good men to do nothing.",
    author: "Edmund Burke"
  }
];

export default randomData;