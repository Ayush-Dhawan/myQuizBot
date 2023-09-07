

const DataSet = [
    {
      index: 1,
      question: "What is the purpose of the 'valueOf()' method in wrapper classes?",
      answer: "To create a wrapper object from a primitive value",
      options: [
        "To convert a string to a primitive data type",
        "To perform mathematical operations",
        "To convert a wrapper object to a string",
        "To create a wrapper object from a primitive value"
      ],
      explanation:
        "The 'valueOf()' method in wrapper classes is used to create a wrapper object from a primitive value."
    },
    {
      index: 2,
      question: "What is the scope of a class variable (static field) in Java?",
      answer: "Limited to the class where it is declared",
      options: [
        "Limited to the method where it is declared",
        "Limited to the package where it is declared",
        "Global, accessible from any part of the program",
        "Limited to the class where it is declared"
      ],
      explanation:
        "A class variable (static field) in Java is limited in scope to the class where it is declared. It can be accessed using the class name."
    },
    {
      index: 3,
      question: "What is the scope of an instance variable (non-static field) in Java?",
      answer: "Limited to the object instance where it is declared",
      options: [
        "Limited to the class where it is declared",
        "Limited to the package where it is declared",
        "Global, accessible from any part of the program",
        "Limited to the object instance where it is declared"
      ],
      explanation:
        "An instance variable (non-static field) in Java is limited in scope to the object instance where it is declared. Each object has its own copy of the instance variable."
    },
    {
      index: 4,
      question: "What is the scope of a method parameter in Java?",
      answer: "Limited to the method where it is declared",
      options: [
        "Limited to the class where it is declared",
        "Limited to the package where it is declared",
        "Global, accessible from any part of the program",
        "Limited to the method where it is declared"
      ],
      explanation:
        "A method parameter in Java is limited in scope to the method where it is declared. It is only accessible within that method."
    },
    {
      index: 5,
      question: "What is the scope of a class (non-static) method in Java?",
      answer: "Limited to the class where it is declared",
      options: [
        "Limited to the method where it is declared",
        "Limited to the package where it is declared",
        "Global, accessible from any part of the program",
        "Limited to the class where it is declared"
      ],
      explanation:
        "A class (non-static) method in Java is limited in scope to the class where it is declared. It is invoked using an object of the class."
    },
    {
      index: 6,
      question: "What is the scope of a static method in Java?",
      answer: "Limited to the class where it is declared",
      options: [
        "Limited to the method where it is declared",
        "Limited to the package where it is declared",
        "Global, accessible from any part of the program",
        "Limited to the class where it is declared"
      ],
      explanation:
        "A static method in Java is limited in scope to the class where it is declared. It is invoked using the class name."
    },
    {
      index: 7,
      question: "What is the scope of a package-private (no access modifier) member in Java?",
      answer: "Limited to the package where it is declared",
      options: [
        "Limited to the class where it is declared",
        "Global, accessible from any part of the program",
        "Limited to the method where it is declared",
        "Limited to the package where it is declared"
      ],
      explanation:
        "A package-private member in Java is limited in scope to the package where it is declared. It is not accessible from outside the package."
    },
    {
      index: 8,
      question: "What is the scope of a public member in Java?",
      answer: "Global, accessible from any part of the program",
      options: [
        "Limited to the class where it is declared",
        "Limited to the package where it is declared",
        "Global, accessible from any part of the program",
        "Limited to the block of code where it is declared"
      ],
      explanation:
        "A public member in Java has a global scope and can be accessed from any part of the program."
    },
    {
      index: 9,
      question: "What is the scope of a private member in Java?",
      answer: "Limited to the class where it is declared",
      options: [
        "Limited to the method where it is declared",
        "Limited to the package where it is declared",
        "Global, accessible from any part of the program",
        "Limited to the block of code where it is declared"
      ],
      explanation:
        "A private member in Java is limited in scope to the class where it is declared and cannot be accessed from outside the class."
    },
    {
      index: 10,
      question: "What is the scope of a protected member in Java?",
      answer: "Limited to the class where it is declared and its subclasses",
      options: [
        "Limited to the package where it is declared",
        "Limited to the method where it is declared",
        "Global, accessible from any part of the program",
        "Limited to the block of code where it is declared"
      ],
      explanation:
        "A protected member in Java is limited in scope to the class where it is declared and its subclasses."
    },
    {
      index: 11,
      question: "What is the scope of a package-private (no access modifier) class in Java?",
      answer: "Limited to the package where it is declared",
      options: [
        "Limited to the class where it is declared",
        "Global, accessible from any part of the program",
        "Limited to the method where it is declared",
        "Limited to the block of code where it is declared"
      ],
      explanation:
        "A package-private (no access modifier) class in Java is limited in scope to the package where it is declared. It is not accessible from outside the package."
    },
    {
      index: 12,
      question: "What is the scope of a local inner class in Java?",
      answer: "Limited to the block of code where it is defined",
      options: [
        "Limited to the class where it is declared",
        "Limited to the package where it is declared",
        "Global, accessible from any part of the program",
        "Limited to the method where it is declared"
      ],
      explanation:
        "A local inner class in Java is limited in scope to the block of code where it is defined."
    },
    {
      index: 13,
      question: "What is the scope of a method-local inner class in Java?",
      answer: "Limited to the method where it is defined",
      options: [
        "Limited to the class where it is declared",
        "Limited to the package where it is declared",
        "Global, accessible from any part of the program",
        "Limited to the block of code where it is declared"
      ],
      explanation:
        "A method-local inner class in Java is limited in scope to the method where it is defined."
    },
    {
      index: 14,
      question: "What is the scope of a class declared with the 'protected' access modifier in Java?",
      answer: "Limited to subclasses and classes within the same package",
      options: [
        "Limited to the class where it is declared",
        "Global, accessible from any part of the program",
        "Limited to the method where it is declared",
        "Limited to the block of code where it is declared"
      ],
      explanation:
        "A class declared with the 'protected' access modifier in Java is limited in scope to subclasses and classes within the same package."
    },
    {
      index: 15,
      question: "What is the scope of a class declared with the 'public' access modifier in Java?",
      answer: "Global, accessible from any part of the program",
      options: [
        "Limited to the class where it is declared",
        "Limited to the package where it is declared",
        "Limited to the method where it is declared",
        "Global, accessible from any part of the program"
      ],
      explanation:
        "A class declared with the 'public' access modifier in Java has a global scope and can be accessed from any part of the program."
    },
    {
      index: 16,
      question: "What is the scope of a class declared with the 'private' access modifier in Java?",
      answer: "Limited to the class where it is declared",
      options: [
        "Limited to the method where it is declared",
        "Limited to the package where it is declared",
        "Global, accessible from any part of the program",
        "Limited to the block of code where it is declared"
      ],
      explanation:
        "A class declared with the 'private' access modifier in Java is limited in scope to the class where it is declared and cannot be accessed from outside the class."
    },
    {
      index: 17,
      question: "What is the scope of a public method in Java?",
      answer: "Global, accessible from any part of the program",
      options: [
        "Limited to the class where it is declared",
        "Limited to the package where it is declared",
        "Limited to the method where it is declared",
        "Limited to the block of code where it is declared"
      ],
      explanation:
        "A public method in Java has a global scope and can be accessed from any part of the program."
    },
    {
      index: 18,
      question: "What is the scope of a private method in Java?",
      answer: "Limited to the class where it is declared",
      options: [
        "Limited to the method where it is declared",
        "Limited to the package where it is declared",
        "Global, accessible from any part of the program",
        "Limited to the block of code where it is declared"
      ],
      explanation:
        "A private method in Java is limited in scope to the class where it is declared and cannot be accessed from outside the class."
    },
    {
      index: 19,
      question: "Which of the following is a valid Java identifier?",
      answer: "myVariable",
      options: ["123variable", "my Variable", "my-Variable", "myVariable"],
      explanation:
        "Valid Java identifiers must start with a letter, underscore (_), or dollar sign ($) and can contain letters, digits, underscores, and dollar signs."
    },
    {
      index: 20,
      question: "What is the purpose of wrapper classes in Java?",
      answer: "To convert primitive data types to objects",
      options: ["To define new data types", "To create instances of abstract classes", "To perform mathematical operations", "To convert primitive data types to objects"],
      explanation: "Wrapper classes in Java are used to convert primitive data types into objects and provide utility methods for working with them."
    },
    {
      index: 21,
      question: "Which wrapper class is associated with the primitive data type 'int'?",
      answer: "Integer",
      options: ["IntWrapper", "Integer", "Int", "IntObject"],
      explanation: "The 'Integer' wrapper class is associated with the primitive data type 'int'."
    },
    {
      index: 22,
      question: "Which of the following is a valid Java identifier?",
      answer: "$count123",
      options: ["_count", "@count", "123count", "$count123"],
      explanation:
        "Valid Java identifiers must start with a letter, underscore (_), or dollar sign ($) and can contain letters, digits, underscores, and dollar signs."
    },
    {
      index: 23,
      question: "Which of the following is a valid Java identifier?",
      answer: "totalAmount",
      options: ["123totalAmount", "total Amount", "total-Amount", "totalAmount"],
      explanation: "Valid Java identifiers must start with a letter, underscore (_), or dollar sign ($) and can contain letters, digits, underscores, and dollar signs."
    },
    {
      index: 24,
      question: "Which wrapper class is associated with the primitive data type 'double'?",
      answer: "Double",
      options: ["DoubleWrapper", "Double", "Float", "DoubleObject"],
      explanation: "The 'Double' wrapper class is associated with the primitive data type 'double'."
    },
    {
      index: 25,
      question: "What is unboxing in Java?",
      answer: "Automatic conversion of wrapper objects to their corresponding primitive types",
      options: ["Automatic casting of objects", "Automatic conversion of primitive types to wrapper objects", "Automatic conversion of wrapper objects to their corresponding primitive types", "Automatic garbage collection of objects"],
      explanation: "Unboxing is the automatic conversion of wrapper objects to their corresponding primitive data types."
    },
    {
      index: 26,
      question: "Which of the following is a valid Java identifier?",
      answer: "_value",
      options: ["123_value", "my-Value", "value%", "_value"],
      explanation: "Valid Java identifiers must start with a letter, underscore (_), or dollar sign ($) and can contain letters, digits, underscores, and dollar signs."
    },
    {
      index: 27,
      question: "Which wrapper class is associated with the primitive data type 'char'?",
      answer: "Character",
      options: ["CharWrapper", "Char", "CharacterObject", "CharType"],
      explanation: "The 'Character' wrapper class is associated with the primitive data type 'char'."
    },
    {
      index: 28,
      question: "What is autoboxing in Java?",
      answer: "Automatic conversion of primitive types to their corresponding wrapper objects",
      options: ["Automatic casting of objects", "Automatic conversion of wrapper objects to primitive types", "Automatic conversion of primitive types to their corresponding wrapper objects", "Automatic garbage collection of objects"],
      explanation: "Autoboxing is the automatic conversion of primitive data types to their corresponding wrapper objects."
    },
    {
      index: 29,
      question: "Which of the following is a valid Java identifier?",
      answer: "myValue1",
      options: ["1myValue", "myValue 1", "my_value", "myValue1!"],
      explanation: "Valid Java identifiers must start with a letter, underscore (_), or dollar sign ($) and can contain letters, digits, underscores, and dollar signs."
    },
    {
      index: 30,
      question: "Which wrapper class is associated with the primitive data type 'float'?",
      answer: "Float",
      options: ["FloatWrapper", "Float", "Double", "FloatObject"],
      explanation: "The 'Float' wrapper class is associated with the primitive data type 'float'."
    },
    {
      index: 31,
      question: "Which wrapper class is associated with the primitive data type 'short'?",
      answer: "Short",
      options: ["ShortWrapper", "Short", "Int", "ShortObject"],
      explanation: "The 'Short' wrapper class is associated with the primitive data type 'short'."
    },
    {
      index: 32,
      question: "Which of the following is a valid Java identifier?",
      answer: "first_name",
      options: ["first name", "1stName", "first_name", "firstName!"],
      explanation: "Valid Java identifiers must start with a letter, underscore (_), or dollar sign ($) and can contain letters, digits, underscores, and dollar signs."
    },
    {
      index: 33,
      question: "Which wrapper class is associated with the primitive data type 'byte'?",
      answer: "Byte",
      options: ["ByteWrapper", "Byte", "Short", "ByteObject"],
      explanation: "The 'Byte' wrapper class is associated with the primitive data type 'byte'."
    },
    {
      index: 34,
      question: "What is the purpose of the 'valueOf()' method in wrapper classes?",
      answer: "To create a wrapper object from a primitive value",
      options: [
        "To convert a string to a primitive data type",
        "To perform mathematical operations",
        "To convert a wrapper object to a string",
        "To create a primitive value from a wrapper object"
      ],
      explanation:
        "The 'valueOf()' method in wrapper classes is used to create a wrapper object from a primitive value."
    },
    {
      index: 35,
      question: "Which of the following is a valid Java identifier?",
      answer: "itemCount",
      options: ["item count", "item-Count", "itemCount$", "itemCount%"],
      explanation: "Valid Java identifiers must start with a letter, underscore (_), or dollar sign ($) and can contain letters, digits, underscores, and dollar signs."
    },
    {
      index: 36,
      question: "What is the scope of a local variable in Java?",
      answer: "Limited to the block of code where it is declared",
      options: [
        "Limited to the class where it is declared",
        "Limited to the method where it is declared",
        "Limited to the package where it is declared",
        "Global, accessible from any part of the program"
      ],
      explanation:
        "A local variable in Java is limited in scope to the block of code where it is declared. It is only accessible within that block."
    },
    {
      index: 37,
      question: "Which of the following is a valid Java identifier?",
      answer: "my_Variable",
      options: ["_myVariable", "my Variable", "MyVariable", "my-Variable"],
      explanation: "Valid Java identifiers must start with a letter, underscore (_), or dollar sign ($) and can contain letters, digits, underscores, and dollar signs."
    },
    {
      index: 38,
      question: "What is the purpose of the 'parseXxx()' method in wrapper classes like 'Integer' and 'Double'?",
      answer: "To parse a string and convert it into the corresponding primitive type",
      options: [
        "To format the value as a string",
        "To convert between different primitive data types",
        "To create a wrapper object from a primitive value",
        "To parse a string and convert it into the corresponding primitive type"
      ],
      explanation:
        "The 'parseXxx()' methods in wrapper classes like 'Integer' and 'Double' are used to parse a string and convert it into the corresponding primitive type (e.g., 'parseInt()' in 'Integer' class converts a string to an int)."
    },
    {
      index: 39,
      question: "Which of the following is a valid Java identifier?",
      answer: "studentCount",
      options: ["123StudentCount", "student count", "student-Count", "studentCount!"],
      explanation: "Valid Java identifiers must start with a letter, underscore (_), or dollar sign ($) and can contain letters, digits, underscores, and dollar signs."
    },
    {
      index: 40,
      question: "What is the default access modifier for class members in Java?",
      answer: "package-private (no access modifier)",
      options: [
        "Public",
        "Private",
        "Protected",
        "package-private (no access modifier)"
      ],
      explanation:
        "The default access modifier for class members in Java is package-private (no access modifier). Members with this access modifier are accessible within the same package."
    }
  ];
  
  // You now have the entire array of 40 questions in the DataSet.
  

  


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
  