



const DataSet = [
    {
      index: 1,
      question: "Which of the following is not a primitive data type in Java?",
      answer: "String",
      options: ["int", "double", "boolean", "String"],
      explanation: "String is not a primitive data type in Java; it is a reference type."
    },
    {
      index: 2,
      question: "What is the size of the 'int' data type in Java?",
      answer: "4 bytes",
      options: ["2 bytes", "4 bytes", "8 bytes", "Depends on the platform"],
      explanation: "The 'int' data type in Java typically occupies 4 bytes of memory."
    },
    {
      index: 3,
      question: "Which data type is used to represent single-precision floating-point numbers in Java?",
      answer: "float",
      options: ["double", "float", "decimal", "real"],
      explanation: "The 'float' data type is used to represent single-precision floating-point numbers in Java."
    },
    {
      index: 4,
      question: "What is the default value of an 'int' variable in Java?",
      answer: "0",
      options: ["null", "0", "1", "Undefined"],
      explanation: "The default value of an 'int' variable in Java is 0."
    },
    {
      index: 5,
      question: "Which data type is used to represent a single character in Java?",
      answer: "char",
      options: ["int", "char", "boolean", "byte"],
      explanation: "The 'char' data type is used to represent a single character in Java."
    },
    {
      index: 6,
      question: "What is the size of the 'long' data type in Java?",
      answer: "8 bytes",
      options: ["2 bytes", "4 bytes", "8 bytes", "Depends on the platform"],
      explanation: "The 'long' data type in Java typically occupies 8 bytes of memory."
    },
    {
      index: 7,
      question: "Which data type is used to represent true or false values in Java?",
      answer: "boolean",
      options: ["int", "double", "char", "boolean"],
      explanation: "The 'boolean' data type is used to represent true or false values in Java."
    },
    {
      index: 8,
      question: "What is the size of the 'double' data type in Java?",
      answer: "8 bytes",
      options: ["4 bytes", "8 bytes", "16 bytes", "Depends on the platform"],
      explanation: "The 'double' data type in Java typically occupies 8 bytes of memory."
    },
    {
      index: 9,
      question: "Which data type is used to represent a small integer value in Java?",
      answer: "byte",
      options: ["short", "byte", "int", "long"],
      explanation: "The 'byte' data type is used to represent a small integer value in Java."
    },
    {
      index: 10,
      question: "What is the default value of a 'boolean' variable in Java?",
      answer: "false",
      options: ["true", "false", "0", "1"],
      explanation: "The default value of a 'boolean' variable in Java is 'false'."
    },
    {
      index: 11,
      question: "What is the default value of a 'double' variable in Java?",
      answer: "0.0",
      options: ["0.0", "0", "1.0", "null"],
      explanation: "The default value of a 'double' variable in Java is 0.0."  },
    {
      index: 12,
      question: "What is the range of the 'byte' data type in Java?",
      answer: "-128 to 127",
      options: ["0 to 255", "-128 to 127", "-32768 to 32767", "Depends on the platform"],
      explanation: "The 'byte' data type in Java has a range of -128 to 127."
    },
    {
      index: 13,
      question: "Which data type is used to store 64-bit integers in Java?",
      answer: "long",
      options: ["int", "short", "byte", "long"],
      explanation: "The 'long' data type in Java is used to store 64-bit integers."
    },
    {
      index: 14,
      question: "What is the default value of a 'double' variable in Java?",
      answer: "0.0",
      options: ["0.0", "0", "1.0", "null"],
      explanation: "The default value of a 'double' variable in Java is 0.0."
    },
    {
      index: 15,
      question: "Which data type is used to represent small integer values in Java?",
      answer: "short",
      options: ["short", "byte", "int", "long"],
      explanation: "The 'short' data type is used to represent small integer values in Java."
    },
    {
      index: 16,
      question: "What is the size of the 'char' data type in Java?",
      answer: "2 bytes",
      options: ["1 byte", "2 bytes", "4 bytes", "Depends on the platform"],
      explanation: "The 'char' data type in Java typically occupies 2 bytes of memory."
    },
    {
      index: 17,
      question: "Which data type is used to represent very large or precise decimal numbers in Java?",
      answer: "BigDecimal",
      options: ["double", "float", "decimal", "BigDecimal"],
      explanation: "The 'BigDecimal' data type is used to represent very large or precise decimal numbers in Java."
    },
    {
      index: 18,
      question: "What is the default value of a 'char' variable in Java?",
      answer: "\u0000",
      options: ["\uFFFF", "\u0000", "null", "0"],
      explanation: "The default value of a 'char' variable in Java is '\u0000' (null character)."
    },
    {
      index: 19,
      question: "Which data type is used to represent decimal numbers with double-precision in Java?",
      answer: "double",
      options: ["float", "double", "decimal", "real"],
      explanation: "The 'double' data type in Java is used to represent decimal numbers with double-precision."
    },
    {
      index: 20,
      question: "What is the range of the 'short' data type in Java?",
      answer: "-32,768 to 32,767",
      options: ["0 to 65,535", "-32,768 to 32,767", "-2,147,483,648 to 2,147,483,647", "Depends on the platform"],
      explanation: "The 'short' data type in Java has a range of -32,768 to 32,767."
    },
    {
      index: 21,
      question: "Which data type is used to represent single characters in Java?",
      answer: "char",
      options: ["int", "char", "boolean", "byte"],
      explanation: "The 'char' data type in Java is used to represent single characters."
    },
    {
      index: 22,
      question: "What is the default value of a 'long' variable in Java?",
      answer: "0L",
      options: ["0L", "0", "1L", "null"],
      explanation: "The default value of a 'long' variable in Java is 0L (long literal)."
    },
    {
      index: 23,
      question: "Which data type is used to represent true or false values in Java?",
      answer: "boolean",
      options: ["int", "double", "char", "boolean"],
      explanation: "The 'boolean' data type in Java is used to represent true or false values."
    },
    {
      index: 24,
      question: "What is the range of the 'int' data type in Java?",
      answer: "-2,147,483,648 to 2,147,483,647",
      options: ["0 to 4,294,967,295", "-2,147,483,648 to 2,147,483,647", "-32,768 to 32,767", "Depends on the platform"],
      explanation: "The 'int' data type in Java has a range of -2,147,483,648 to 2,147,483,647."
    },
    {
      index: 25,
      question: "What is the default value of a 'byte' variable in Java?",
      answer: "0",
      options: ["null", "0", "1", "Undefined"],
      explanation: "The default value of a 'byte' variable in Java is 0."  },
    {
      index: 26,
       question: "Which data type is used to represent a single-digit decimal number in Java?",
      answer: "byte",
      options: ["short", "byte", "int", "double"],
      explanation: "The 'byte' data type in Java can be used to represent single-digit decimal numbers."  },
    {
      index: 27,
      question: "Which data type is used to represent true or false values in Java?",
      answer: "boolean",
      options: ["int", "double", "char", "boolean"],
      explanation: "The 'boolean' data type in Java is used to represent true or false values."
    },
    {
      index: 28,
      question: "What is the size of the 'float' data type in Java?",
      answer: "4 bytes",
      options: ["2 bytes", "4 bytes", "8 bytes", "Depends on the platform"],
      explanation: "The 'float' data type in Java typically occupies 4 bytes of memory."
    },
    {
      index: 29,
      question: "Which data type is used to represent small integer values in Java?",
      answer: "byte",
      options: ["short", "byte", "int", "long"],
      explanation: "The 'byte' data type is used to represent small integer values in Java."
    },
    {
      index: 30,
      question: "What is the default value of a 'float' variable in Java?",
      answer: "0.0f",
      options: ["0.0f", "0", "1.0f", "null"],
      explanation: "The default value of a 'float' variable in Java is 0.0f (float literal)."
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
  