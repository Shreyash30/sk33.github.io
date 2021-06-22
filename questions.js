// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Who invented Java Language?",
    answer: "James Gosling",
    options: [
      "Larry Page",
      "James Gosling",
      "Bill Gates",
      "Dennis Ritchie"
    ]
  },
    {
    numb: 2,
    question: "What is the original name of Java Programming Language?",
    answer: "OAK",
    options: [
      "J++",
      "C++",
      "OAK",
      "TEAK"
    ]
  },
    {
    numb: 3,
    question: "What is the full form of WHO?",
    answer: "World Health Organisation",
    options: [
      "World Health Organisation",
      "World Head Organisation",
      "World Hormone Operation",
      "World Height Order"
    ]
  },
    {
    numb: 4,
    question: "Durand Cup is associated with which sport?",
    answer: "Football",
    options: [
      "Volleyball",
      "Cricket",
      "Hockey",
      "Football"
    ]
  },
    {
    numb: 5,
    question: "The hottest planet in the Solar system?",
    answer: "Venus",
    options: [
      "Venus",
      "Mercury",
      "Mars",
      "Jupiter"
    ]
  },
  

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];
function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
shuffle(questions);
console.log(questions);