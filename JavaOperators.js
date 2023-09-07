



const DataSet = [
    {
      index: 1,
      question: "What is the result of the expression 5 + 3?",
      answer: "8",
      options: ["5", "3", "8", "15"],
      explanation: "The + operator is used for addition in Java. So, 5 + 3 equals 8."
    },
    {
      index: 2,
      question: "Which operator is used to perform division in Java?",
      answer: "/",
      options: ["/", "*", "+", "-"],
      explanation: "The / operator is used for division in Java."
    },
    {
      index: 3,
      question: "What is the result of the expression 10 % 3?",
      answer: "1",
      options: ["0", "3", "1", "10"],
      explanation: "The % operator is used for finding the remainder. So, 10 % 3 equals 1."
    },
    {
      index: 4,
      question: "Which operator is used to increment a variable by 1 in Java?",
      answer: "++",
      options: ["+", "-", "*", "++"],
      explanation: "The ++ operator is used for incrementing a variable by 1."
    },
    {
      index: 5,
      question: "What does the == operator do in Java?",
      answer: "Compares values for equality",
      options: ["Assigns a value", "Compares values for equality", "Performs addition", "Performs subtraction"],
      explanation: "The == operator is used to compare values for equality in Java."
    },
    {
      index: 6,
      question: "Which operator is used for logical AND in Java?",
      answer: "&&",
      options: ["&", "&&", "||", "!="],
      explanation: "The && operator is used for logical AND in Java."
    },
    {
      index: 7,
      question: "What is the result of the expression 7 - 4?",
      answer: "3",
      options: ["7", "4", "3", "11"],
      explanation: "The - operator is used for subtraction in Java. So, 7 - 4 equals 3."
    },
    {
      index: 8,
      question: "Which operator is used for bitwise OR in Java?",
      answer: "|",
      options: ["&", "&&", "|", "^"],
      explanation: "The | operator is used for bitwise OR in Java."
    },
    {
      index: 9,
      question: "What does the != operator do in Java?",
      answer: "Compares values for inequality",
      options: ["Assigns a value", "Compares values for equality", "Performs addition", "Compares values for inequality"],
      explanation: "The != operator is used to compare values for inequality in Java."
    },
    {
      index: 10,
      question: "Which operator is used for bitwise XOR in Java?",
      answer: "^",
      options: ["&", "&&", "|", "^"],
      explanation: "The ^ operator is used for bitwise XOR in Java."
    },
    {
      index: 11,
      question: "What is the result of the expression 2 * 6?",
      answer: "12",
      options: ["2", "6", "12", "36"],
      explanation: "The * operator is used for multiplication in Java. So, 2 * 6 equals 12."
    },
    {
      index: 12,
      question: "Which operator is used for logical OR in Java?",
      answer: "||",
      options: ["|", "||", "&", "!"],
      explanation: "The || operator is used for logical OR in Java."
    },
    {
      index: 13,
      question: "What does the < operator do in Java?",
      answer: "Checks if left operand is less than the right operand",
      options: ["Assigns a value", "Checks if left operand is less than the right operand", "Performs addition", "Performs subtraction"],
      explanation: "The < operator is used to check if the left operand is less than the right operand in Java."
    },
    {
      index: 14,
      question: "Which operator is used for bitwise NOT in Java?",
      answer: "~",
      options: ["&", "&&", "|", "~"],
      explanation: "The ~ operator is used for bitwise NOT in Java."
    },
    {
      index: 15,
      question: "What is the result of the expression 15 / 4?",
      answer: "3",
      options: ["3", "4", "3.75", "3.25"],
      explanation: "The / operator is used for division in Java, and it can not produce decimal results. So, 15 / 4 equals 3."
    },
    {
      index: 16,
      question: "Which operator is used to perform string concatenation in Java?",
      answer: "+",
      options: ["&", "*", "+", "-"],
      explanation: "The + operator is used for string concatenation in Java."
    },
    {
      index: 17,
      question: "What does the <= operator do in Java?",
      answer: "Checks if left operand is less than or equal to the right operand",
      options: ["Assigns a value", "Checks if left operand is less than or equal to the right operand", "Performs addition", "Performs subtraction"],
      explanation: "The <= operator is used to check if the left operand is less than or equal to the right operand in Java."
    },
    {
      index: 18,
      question: "Which operator is used for left shift in Java?",
      answer: "<<",
      options: [">>", "<<", ">>>", "&&"],
      explanation: "The << operator is used for left shift in Java."
    },
    {
      index: 19,
      question: "What is the result of the expression 20 % 7?",
      answer: "6",
      options: ["3", "7", "6", "1"],
      explanation: "The % operator is used for finding the remainder. So, 20 % 7 equals 6."
    },
    {
      index: 20,
      question: "Which operator is used for right shift in Java?",
      answer: ">>",
      options: [">>", "<<", ">>>", "&&"],
      explanation: "The >> operator is used for right shift in Java."
    },
    {
      index: 21,
      question: "What does the >= operator do in Java?",
      answer: "Checks if left operand is greater than or equal to the right operand",
      options: ["Assigns a value", "Checks if left operand is greater than or equal to the right operand", "Performs addition", "Performs subtraction"],
      explanation: "The >= operator is used to check if the left operand is greater than or equal to the right operand in Java."
    },
    {
      index: 22,
      question: "Which operator is used for unsigned right shift in Java?",
      answer: ">>>",
      options: [">>", "<<", ">>>", "&&"],
      explanation: "The >>> operator is used for unsigned right shift in Java."
    },
    {
      index: 23,
      question: "What is the result of the expression 4 * 2 + 3?",
      answer: "11",
      options: ["9", "14", "11", "8"],
      explanation: "Java follows the order of operations. So, 4 * 2 is evaluated first, resulting in 8, and then 3 is added, resulting in 11."
    },
    {
      index: 24,
      question: "Which operator is used for conditional (ternary) expressions in Java?",
      answer: "? :",
      options: ["if", "? :", "switch", "for"],
      explanation: "The ? : operator is used for conditional (ternary) expressions in Java."
    },
    {
      index: 25,
      question: "What does the instanceof operator do in Java?",
      answer: "Checks if an object is an instance of a particular class",
      options: ["Assigns a value", "Compares two values for equality", "Performs addition", "Checks if an object is an instance of a particular class"],
      explanation: "The instanceof operator is used to check if an object is an instance of a particular class in Java."
    },
    {
      index: 26,
      question: "Which operator is used for type casting in Java?",
      answer: "(type)",
      options: ["cast", "(type)", "convert", "type()"],
      explanation: "Type casting in Java is done by enclosing the desired type in parentheses, like (int) or (double)."
    },
    {
      index: 27,
      question: "What is the result of the expression true && false?",
      answer: "false",
      options: ["true", "false", "error", "null"],
      explanation: "The && operator performs logical AND. true && false evaluates to false."
    },
    {
      index: 28,
      question: "Which operator is used to perform bitwise AND in Java?",
      answer: "&",
      options: ["&", "&&", "|", "!"],
      explanation: "The & operator is used for bitwise AND in Java."
    },
    {
      index: 29,
      question: "What does the || operator do in Java?",
      answer: "Performs logical OR",
      options: ["Performs bitwise OR", "Performs logical AND", "Performs logical OR", "Performs logical NOT"],
      explanation: "The || operator is used for performing logical OR in Java."
    },
    {
      index: 30,
      question: "Which operator is used for conditional (ternary) expressions in Java?",
      answer: "? :",
      options: [": ?", "? :", "if else", "switch case"],
      explanation: "The ? : operator is used for conditional (ternary) expressions in Java."
    },
  ];
  
  

  


//logic

const question = document.getElementById('question');
const option0 = document.getElementById('0');
const option1 = document.getElementById('1');
const option2 = document.getElementById('2');
const option3 = document.getElementById('3');
const listItems = document.querySelectorAll('.list-group-item');
const checkboxes = document.querySelectorAll('.checkboxes');
const answerDescription = document.querySelector('.answer-description');
const n = DataSet.length;
const min = 0;
const max = n;

let i = 0; // Initialize i here
let score = 0;
let usedQuestionIndices = []; // Initialize usedQuestionIndices here

function getRandomQuestionIndex() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * n);
  } while (usedQuestionIndices.includes(randomIndex));
  usedQuestionIndices.push(randomIndex);
  return randomIndex;
}


function loadQuestion(arr) {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
      checkbox.removeEventListener('click', handleCheckboxClick); // Remove old event listeners
    });

    checkboxes.forEach((checkbox) => {
        checkbox.nextSibling.textContent = '';
      });
  
    answerDescription.innerHTML = "";
  
    if (i >= 5) {
      // Handle end of the quiz or reset as needed
      question.textContent = "Quiz Complete";
      option0.textContent = "";
      option1.textContent = "";
      option2.textContent = "";
      option3.textContent = "";
      answerDescription.innerHTML = `You Scored: ${score} / 5`;
      usedQuestionIndices = [];
      i = 0;
      return;
    }
  
    const randomWholeNumber = getRandomQuestionIndex();
    const randomQuestion = DataSet[randomWholeNumber].question;
    question.textContent = randomQuestion;
  
    option0.textContent = DataSet[randomWholeNumber].options[0];
    option1.textContent = DataSet[randomWholeNumber].options[1];
    option2.textContent = DataSet[randomWholeNumber].options[2];
    option3.textContent = DataSet[randomWholeNumber].options[3];
  
    checkboxes.forEach((checkbox, index) => {
      checkbox.disabled = false;
      checkbox.classList.remove('btn-success', 'btn-danger');
      if (index === 0) {
        checkbox.classList.add('btn-primary');
      }
    });
  
    checkboxes.forEach((checkbox, index) => {
      checkbox.addEventListener('click', handleCheckboxClick); // Add new event listeners
    });
  }
  
  function handleCheckboxClick(event) {
    i += 1;
    console.log(i);
    checkboxes.forEach((cb) => {
      cb.disabled = true;
    });
  
    const selectedCheckbox = event.target;

    if(selectedCheckbox.id === 'checkbox1') index = 1
    else if(selectedCheckbox.id === 'checkbox0') index = 0
    else if(selectedCheckbox.id === 'checkbox2') index = 2
    else index = 3
    // const index = parseInt(selectedCheckbox.id);
  
    const randomWholeNumber = usedQuestionIndices[usedQuestionIndices.length - 1];
    const correctAnswerIndex = DataSet[randomWholeNumber].options.indexOf(DataSet[randomWholeNumber].answer);
  
    if (index === correctAnswerIndex) {
        selectedCheckbox.nextSibling.textContent = 'Correct';
      score += 1;
    } else {
        selectedCheckbox.nextSibling.textContent = 'Wrong';
    }
  
    answerDescription.innerHTML = DataSet[randomWholeNumber].explanation;
  
    // setTimeout(() => {
    //   loadQuestion();
    // }, 2000);
  }

  const reset = document.querySelector('.reset');
  const next = document.querySelector('.next');

  reset.addEventListener('click', ()=>{
    i = 0;
    score = 0;
    usedQuestionIndices = []
    loadQuestion()
  })

  next.addEventListener('click',() => loadQuestion())
  
  
  loadQuestion();
  