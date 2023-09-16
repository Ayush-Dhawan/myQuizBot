



const DataSet = [
    {
      index: 0,
      question: "What is an exception in Java?",
      answer: "An event that disrupts the normal flow of a program's instructions",
      options: [
        "A condition that indicates a program's successful execution",
        "A statement that handles errors gracefully",
        "An event that disrupts the normal flow of a program's instructions",
        "A type of variable used to store errors"
      ],
      explanation: "An exception in Java is an event that disrupts the normal flow of a program's instructions, typically caused by errors or exceptional situations."
    },
    {
      index: 1,
      question: "What is the purpose of exception handling in Java?",
      answer: "To gracefully handle errors and prevent program crashes",
      options: [
        "To generate errors during program execution",
        "To ignore errors and continue program execution",
        "To gracefully handle errors and prevent program crashes",
        "To report errors to the Java Virtual Machine (JVM)"
      ],
      explanation: "Exception handling in Java is used to gracefully handle errors and exceptional situations, preventing program crashes and improving robustness."
    },
    {
      index: 2,
      question: "Which keyword is used to indicate the beginning of an exception handling block in Java?",
      answer: "try",
      options: ["catch", "finally", "throw", "try"],
      explanation: "The 'try' keyword is used to indicate the beginning of an exception handling block in Java, where code that may throw exceptions is placed."
    },
    {
      index: 3,
      question: "What is the purpose of the 'catch' block in Java exception handling?",
      answer: "To handle and process exceptions that occur in the 'try' block",
      options: [
        "To terminate the program",
        "To indicate the location of the error",
        "To handle and process exceptions that occur in the 'try' block",
        "To specify the type of exception to be thrown"
      ],
      explanation: "The 'catch' block in Java is used to handle and process exceptions that occur in the associated 'try' block, allowing for error-specific handling."
    },
    {
      index: 4,
      question: "What is the purpose of the 'finally' block in Java exception handling?",
      answer: "To specify code that should always be executed, regardless of whether an exception occurs or not",
      options: [
        "To catch and handle exceptions",
        "To specify the type of exception to be thrown",
        "To specify code that should always be executed, regardless of whether an exception occurs or not",
        "To indicate the location of the error"
      ],
      explanation: "The 'finally' block in Java is used to specify code that should always be executed, regardless of whether an exception occurs or not, making it suitable for cleanup tasks."
    },
    {
      index: 5,
      question: "What is an 'unchecked exception' in Java?",
      answer: "An exception that occurs at runtime and does not need to be declared in a method's 'throws' clause",
      options: [
        "An exception that occurs at compile time",
        "An exception that occurs during testing",
        "An exception that occurs at runtime and does not need to be declared in a method's 'throws' clause",
        "An exception that is automatically caught by the 'catch' block"
      ],
      explanation: "An 'unchecked exception' in Java is an exception that occurs at runtime and does not need to be declared in a method's 'throws' clause, making it unnecessary to catch or declare them explicitly."
    },
    {
      index: 6,
      question: "What is the 'throws' clause used for in Java method declarations?",
      answer: "To indicate that a method may throw checked exceptions that need to be handled or declared by the caller",
      options: [
        "To specify the type of exception to be thrown",
        "To indicate that a method may throw unchecked exceptions",
        "To indicate that a method may throw checked exceptions that need to be handled or declared by the caller",
        "To specify the method's return type"
      ],
      explanation: "The 'throws' clause in Java method declarations is used to indicate that a method may throw checked exceptions that need to be handled or declared by the caller of the method."
    },
    {
      index: 7,
      question: "Which keyword is used to explicitly throw an exception in Java?",
      answer: "throw",
      options: ["try", "catch", "finally", "throw"],
      explanation: "The 'throw' keyword is used to explicitly throw an exception in Java, allowing you to raise custom exceptions or handle exceptional situations."
    },
    {
      index: 8,
      question: "What is the purpose of the 'try-catch' block in Java?",
      answer: "To catch and handle exceptions that occur in the 'try' block",
      options: [
        "To indicate the location of the error",
        "To specify code that should always be executed",
        "To catch and handle exceptions that occur in the 'try' block",
        "To specify the type of exception to be thrown"
      ],
      explanation: "The 'try-catch' block in Java is used to catch and handle exceptions that occur in the associated 'try' block, allowing for error-specific handling and graceful recovery."
    },
    {
      index: 9,
      question: "What is the 'NullPointerException' in Java?",
      answer: "An exception thrown when attempting to access or call methods on an object that is null",
      options: [
        "An exception for handling arithmetic errors",
        "An exception for handling network errors",
        "An exception for handling user input errors",
        "An exception thrown when attempting to access or call methods on an object that is null"
      ],
      explanation: "The 'NullPointerException' in Java is an exception thrown when attempting to access or call methods on an object that is null, indicating a null reference."
    },
    {
      index: 10,
      question: "What is the 'FileNotFoundException' in Java?",
      answer: "An exception thrown when a file being accessed does not exist",
      options: [
        "An exception for handling arithmetic errors",
        "An exception for handling network errors",
        "An exception for handling user input errors",
        "An exception thrown when a file being accessed does not exist"
      ],
      explanation: "The 'FileNotFoundException' in Java is an exception thrown when a file being accessed does not exist, typically encountered during file I/O operations."
    },
    {
      index: 11,
      question: "What is the 'IOException' in Java?",
      answer: "A common exception class for handling input and output errors",
      options: [
        "An exception for handling arithmetic errors",
        "An exception for handling network errors",
        "An exception for handling user input errors",
        "A common exception class for handling input and output errors"
      ],
      explanation: "The 'IOException' in Java is a common exception class used for handling input and output errors, making it useful for file handling and network communication."
    },
    {
      index: 12,
      question: "What is the 'try-with-resources' statement in Java used for?",
      answer: "To automatically close resources like files, ensuring proper resource management",
      options: [
        "To handle exceptions during file I/O operations",
        "To create new resources",
        "To automatically close resources like files, ensuring proper resource management",
        "To declare variables within a 'try' block"
      ],
      explanation: "The 'try-with-resources' statement in Java is used to automatically close resources like files, ensuring proper resource management and reducing the risk of resource leaks."
    },
    {
      index: 13,
      question: "What is the purpose of the 'finally' block in 'try-with-resources' in Java?",
      answer: "To close resources regardless of whether an exception occurs or not",
      options: [
        "To catch and handle exceptions",
        "To specify the type of exception to be thrown",
        "To close resources only if no exception occurs",
        "To close resources regardless of whether an exception occurs or not"
      ],
      explanation: "The 'finally' block in 'try-with-resources' in Java is used to close resources regardless of whether an exception occurs or not, ensuring proper cleanup."
    },
    {
      index: 14,
      question: "What is the 'File' class used for in Java?",
      answer: "To represent files and directories and provide file-related operations",
      options: [
        "To perform mathematical calculations",
        "To create network connections",
        "To represent numbers and perform numeric operations",
        "To represent files and directories and provide file-related operations"
      ],
      explanation: "The 'File' class in Java is used to represent files and directories and provides various file-related operations, such as creating, deleting, and manipulating files."
    },
    {
      index: 15,
      question: "What is a 'checked exception' in Java?",
      answer: "An exception that must be declared in a method's 'throws' clause or caught using 'try-catch'",
      options: [
        "An exception that occurs during testing",
        "An exception that must be caught by the 'catch' block",
        "An exception that must be declared in a method's 'throws' clause or caught using 'try-catch'",
        "An exception that is automatically caught by the 'finally' block"
      ],
      explanation: "A 'checked exception' in Java is an exception that must be declared in a method's 'throws' clause or caught using 'try-catch,' ensuring that they are handled explicitly."
    },
    {
      index: 16,
      question: "What is the purpose of the 'throws' keyword in a method declaration?",
      answer: "To indicate that the method may throw one or more checked exceptions",
      options: [
        "To specify the type of exception to be thrown",
        "To indicate that the method may throw unchecked exceptions",
        "To indicate that the method may throw one or more checked exceptions",
        "To specify the method's return type"
      ],
      explanation: "The 'throws' keyword in a method declaration is used to indicate that the method may throw one or more checked exceptions, which need to be handled or declared by the caller of the method."
    },
    {
      index: 17,
      question: "What is the 'FileNotFoundException' in Java used for?",
      answer: "To indicate that a file being accessed does not exist or cannot be found",
      options: [
        "To indicate that a file operation was successful",
        "To indicate that a network connection was established",
        "To indicate that a file being accessed does not exist or cannot be found",
        "To indicate that a file is currently in use"
      ],
      explanation: "The 'FileNotFoundException' in Java is used to indicate that a file being accessed does not exist or cannot be found, typically encountered during file I/O operations."
    },
    {
      index: 18,
      question: "What is the 'IOException' in Java used for?",
      answer: "To handle input and output errors, such as file read/write errors",
      options: [
        "To handle arithmetic errors",
        "To handle network errors",
        "To handle user input errors",
        "To handle input and output errors, such as file read/write errors"
      ],
      explanation: "The 'IOException' in Java is used to handle input and output errors, such as file read/write errors, making it essential for reliable file handling."
    },
    {
      index: 19,
      question: "What is the 'FileNotFoundException' in Java?",
      answer: "An exception thrown when a file being accessed does not exist",
      options: [
        "An exception for handling arithmetic errors",
        "An exception for handling network errors",
        "An exception for handling user input errors",
        "An exception thrown when a file being accessed does not exist"
      ],
      explanation: "The 'FileNotFoundException' in Java is an exception thrown when a file being accessed does not exist, typically encountered during file I/O operations."
    },
    {
      index: 20,
      question: "What is the 'try-with-resources' statement in Java used for?",
      answer: "To automatically close resources like files, ensuring proper resource management",
      options: [
        "To handle exceptions during file I/O operations",
        "To create new resources",
        "To automatically close resources like files, ensuring proper resource management",
        "To declare variables within a 'try' block"
      ],
      explanation: "The 'try-with-resources' statement in Java is used to automatically close resources like files, ensuring proper resource management and reducing the risk of resource leaks."
    },
    {
      index: 21,
      question: "What is the purpose of the 'finally' block in 'try-with-resources' in Java?",
      answer: "To close resources regardless of whether an exception occurs or not",
      options: [
        "To catch and handle exceptions",
        "To specify the type of exception to be thrown",
        "To close resources only if no exception occurs",
        "To close resources regardless of whether an exception occurs or not"
      ],
      explanation: "The 'finally' block in 'try-with-resources' in Java is used to close resources regardless of whether an exception occurs or not, ensuring proper cleanup."
    },
    {
      index: 22,
      question: "What is the 'File' class used for in Java?",
      answer: "To represent files and directories and provide file-related operations",
      options: [
        "To perform mathematical calculations",
        "To create network connections",
        "To represent numbers and perform numeric operations",
        "To represent files and directories and provide file-related operations"
      ],
      explanation: "The 'File' class in Java is used to represent files and directories and provides various file-related operations, such as creating, deleting, and manipulating files."
    },
    {
      index: 23,
      question: "What is a 'checked exception' in Java?",
      answer: "An exception that must be declared in a method's 'throws' clause or caught using 'try-catch'",
      options: [
        "An exception that occurs during testing",
        "An exception that must be caught by the 'catch' block",
        "An exception that must be declared in a method's 'throws' clause or caught using 'try-catch'",
        "An exception that is automatically caught by the 'finally' block"
      ],
      explanation: "A 'checked exception' in Java is an exception that must be declared in a method's 'throws' clause or caught using 'try-catch,' ensuring that they are handled explicitly."
    },
    {
      index: 24,
      question: "What is the purpose of the 'try-catch-finally' block in Java?",
      answer: "To catch and handle exceptions that occur in the 'try' block and specify cleanup code in the 'finally' block.",
      options: [
        "To indicate the location of the error",
        "To specify code that should always be executed",
        "To catch and handle exceptions that occur in the 'try' block",
        "To specify the type of exception to be thrown"
      ],
      explanation: "The 'try-catch-finally' block in Java is used to catch and handle exceptions that occur in the associated 'try' block and to specify code that should always be executed in the 'finally' block, regardless of whether an exception occurs or not."
    },
    {
      index: 25,
      question: "What is the difference between a 'checked exception' and an 'unchecked exception' in Java?",
      answer: "A 'checked exception' must be declared in a method's 'throws' clause or caught using 'try-catch,' while an 'unchecked exception' (runtime exception) does not need to be declared.",
      options: [
        "Checked exceptions occur during testing",
        "Checked exceptions must be caught by the 'catch' block",
        "Checked exceptions must be declared in a method's 'throws' clause or caught using 'try-catch'",
        "Unchecked exceptions are automatically caught by the 'finally' block"
      ],
      explanation: "Checked exceptions in Java are compile-time exceptions that need to be explicitly declared in a method's 'throws' clause or caught using 'try-catch.' Unchecked exceptions (runtime exceptions) do not require explicit declaration."
    },
    {
      index: 26,
      question: "What is the purpose of the 'try-with-resources' statement in Java?",
      answer: "To automatically close resources like files, ensuring proper resource management, and reducing the risk of resource leaks.",
      options: [
        "To handle exceptions during file I/O operations",
        "To create new resources",
        "To automatically close resources like files, ensuring proper resource management",
        "To declare variables within a 'try' block"
      ],
      explanation: "The 'try-with-resources' statement in Java is used to automatically close resources like files, ensuring proper resource management and reducing the risk of resource leaks."
    },
    {
      index: 27,
      question: "What is a 'RuntimeException' in Java?",
      answer: "A subclass of 'Exception' that represents exceptions that can occur at runtime, typically unchecked exceptions.",
      options: [
        "A subclass of 'Exception' that represents arithmetic errors",
        "A subclass of 'Exception' that represents network errors",
        "A subclass of 'Exception' that represents user input errors",
        "A subclass of 'Exception' that represents exceptions that can occur at runtime, typically unchecked exceptions."
      ],
      explanation: "A 'RuntimeException' in Java is a subclass of 'Exception' that represents exceptions that can occur at runtime, typically unchecked exceptions that do not need to be declared."
    },
    {
      index: 28,
      question: "What is the purpose of the 'catch' block in Java exception handling?",
      answer: "To handle and process exceptions that occur in the 'try' block, providing error-specific handling.",
      options: [
        "To terminate the program",
        "To indicate the location of the error",
        "To handle and process exceptions that occur in the 'try' block",
        "To specify the type of exception to be thrown"
      ],
      explanation: "The 'catch' block in Java is used to handle and process exceptions that occur in the associated 'try' block, allowing for error-specific handling and graceful recovery."
    },
    {
      index: 29,
      question: "What is the 'try-catch-finally' block in Java?",
      answer: "A combination of blocks used for exception handling: 'try' for containing code that may throw exceptions, 'catch' for handling exceptions, and 'finally' for specifying cleanup code.",
      options: [
        "A combination of blocks used for network communication",
        "A combination of blocks used for mathematical calculations",
        "A combination of blocks used for handling user input",
        "A combination of blocks used for exception handling: 'try' for containing code that may throw exceptions, 'catch' for handling exceptions, and 'finally' for specifying cleanup code."
      ],
      explanation: "The 'try-catch-finally' block in Java is a combination of blocks used for exception handling. 'try' contains code that may throw exceptions, 'catch' is used for handling exceptions, and 'finally' specifies cleanup code to be executed."
    },
    {
      index: 30,
      question: "What is the purpose of the 'throw' keyword in Java?",
      answer: "To explicitly throw an exception, allowing custom exceptions to be raised or exceptional situations to be handled.",
      options: [
        "To indicate the location of the error",
        "To specify code that should always be executed",
        "To catch and handle exceptions",
        "To explicitly throw an exception, allowing custom exceptions to be raised or exceptional situations to be handled."
      ],
      explanation: "The 'throw' keyword in Java is used to explicitly throw an exception, enabling the raising of custom exceptions or handling exceptional situations in code."
    },
    {
      index: 31,
      question: "What is a 'NullPointerException' in Java?",
      answer: "An exception thrown when attempting to access or call methods on an object that is null, indicating a null reference.",
      options: [
        "An exception for handling arithmetic errors",
        "An exception for handling network errors",
        "An exception for handling user input errors",
        "An exception thrown when attempting to access or call methods on an object that is null, indicating a null reference."
      ],
      explanation: "The 'NullPointerException' in Java is an exception thrown when attempting to access or call methods on an object that is null, indicating a null reference."
    },
    {
      index: 32,
      question: "What is the 'FileNotFoundException' in Java?",
      answer: "An exception thrown when a file being accessed does not exist, typically encountered during file I/O operations.",
      options: [
        "An exception for handling arithmetic errors",
        "An exception for handling network errors",
        "An exception for handling user input errors",
        "An exception thrown when a file being accessed does not exist, typically encountered during file I/O operations."
      ],
      explanation: "The 'FileNotFoundException' in Java is an exception thrown when a file being accessed does not exist, typically encountered during file I/O operations."
    },
    {
      index: 33,
      question: "What is the 'IOException' in Java?",
      answer: "A common exception class used for handling input and output errors, making it essential for reliable file handling and network communication.",
      options: [
        "An exception for handling arithmetic errors",
        "An exception for handling network errors",
        "An exception for handling user input errors",
        "A common exception class used for handling input and output errors, making it essential for reliable file handling and network communication."
      ],
      explanation: "The 'IOException' in Java is a common exception class used for handling input and output errors, making it essential for reliable file handling and network communication."
    },
    {
      index: 34,
      question: "What is the 'try-with-resources' statement in Java used for?",
      answer: "To automatically close resources like files, ensuring proper resource management and reducing the risk of resource leaks.",
      options: [
        "To handle exceptions during file I/O operations",
        "To create new resources",
        "To automatically close resources like files, ensuring proper resource management",
        "To declare variables within a 'try' block"
      ],
      explanation: "The 'try-with-resources' statement in Java is used to automatically close resources like files, ensuring proper resource management and reducing the risk of resource leaks."
    },
    {
      index: 35,
      question: "What is the purpose of the 'finally' block in 'try-with-resources' in Java?",
      answer: "To close resources regardless of whether an exception occurs or not, ensuring proper cleanup.",
      options: [
        "To catch and handle exceptions",
        "To specify the type of exception to be thrown",
        "To close resources only if no exception occurs",
        "To close resources regardless of whether an exception occurs or not, ensuring proper cleanup."
      ],
      explanation: "The 'finally' block in 'try-with-resources' in Java is used to close resources regardless of whether an exception occurs or not, ensuring proper cleanup."
    },
    {
      index: 36,
      question: "What is the 'File' class used for in Java?",
      answer: "To represent files and directories and provide file-related operations, such as creating, deleting, and manipulating files.",
      options: [
        "To perform mathematical calculations",
        "To create network connections",
        "To represent numbers and perform numeric operations",
        "To represent files and directories and provide file-related operations, such as creating, deleting, and manipulating files."
      ],
      explanation: "The 'File' class in Java is used to represent files and directories and provides various file-related operations, making it essential for file handling tasks."
    },
    {
      index: 37,
      question: "What is a 'checked exception' in Java?",
      answer: "An exception that must be declared in a method's 'throws' clause or caught using 'try-catch,' ensuring that they are handled explicitly.",
      options: [
        "An exception that occurs during testing",
        "An exception that must be caught by the 'catch' block",
        "An exception that must be declared in a method's 'throws' clause or caught using 'try-catch,' ensuring that they are handled explicitly.",
        "An exception that is automatically caught by the 'finally' block"
      ],
      explanation: "A 'checked exception' in Java is an exception that must be declared in a method's 'throws' clause or caught using 'try-catch,' ensuring that they are handled explicitly by the developer."
    },
    {
      index: 38,
      question: "What is the purpose of the 'throws' keyword in a method declaration?",
      answer: "To indicate that the method may throw one or more checked exceptions, which need to be handled or declared by the caller of the method.",
      options: [
        "To specify the type of exception to be thrown",
        "To indicate that the method may throw unchecked exceptions",
        "To indicate that the method may throw one or more checked exceptions, which need to be handled or declared by the caller of the method.",
        "To specify the method's return type"
      ],
      explanation: "The 'throws' keyword in a method declaration is used to indicate that the method may throw one or more checked exceptions, which need to be handled or declared by the caller of the method."
    },
    {
      index: 39,
      question: "What is the 'FileNotFoundException' in Java used for?",
      answer: "To indicate that a file being accessed does not exist or cannot be found, typically encountered during file I/O operations.",
      options: [
        "To indicate that a file operation was successful",
        "To indicate that a network connection was established",
        "To indicate that a file being accessed does not exist or cannot be found, typically encountered during file I/O operations.",
        "To indicate that a file is currently in use"
      ],
      explanation: "The 'FileNotFoundException' in Java is used to indicate that a file being accessed does not exist or cannot be found, typically encountered during file I/O operations."
    },
    {
      index: 40,
      question: "What is the 'IOException' in Java used for?",
      answer: "To handle input and output errors, such as file read/write errors, making it essential for reliable file handling.",
      options: [
        "To handle arithmetic errors",
        "To handle network errors",
        "To handle user input errors",
        "To handle input and output errors, such as file read/write errors, making it essential for reliable file handling."
      ],
      explanation: "The 'IOException' in Java is used to handle input and output errors, such as file read/write errors, making it essential for reliable file handling."
    },
    {
      index: 41,
      question: "What is the 'FileNotFoundException' in Java?",
      answer: "An exception thrown when a file being accessed does not exist, typically encountered during file I/O operations.",
      options: [
        "An exception for handling arithmetic errors",
        "An exception for handling network errors",
        "An exception for handling user input errors",
        "An exception thrown when a file being accessed does not exist, typically encountered during file I/O operations."
      ],
      explanation: "The 'FileNotFoundException' in Java is an exception thrown when a file being accessed does not exist, typically encountered during file I/O operations."
    },
    {
      index: 42,
      question: "What is the 'try-with-resources' statement in Java used for?",
      answer: "To automatically close resources like files, ensuring proper resource management and reducing the risk of resource leaks.",
      options: [
        "To handle exceptions during file I/O operations",
        "To create new resources",
        "To automatically close resources like files, ensuring proper resource management",
        "To declare variables within a 'try' block"
      ],
      explanation: "The 'try-with-resources' statement in Java is used to automatically close resources like files, ensuring proper resource management and reducing the risk of resource leaks."
    },
    {
      index: 43,
      question: "What is the purpose of the 'finally' block in 'try-with-resources' in Java?",
      answer: "To close resources regardless of whether an exception occurs or not, ensuring proper cleanup.",
      options: [
        "To catch and handle exceptions",
        "To specify the type of exception to be thrown",
        "To close resources only if no exception occurs",
        "To close resources regardless of whether an exception occurs or not, ensuring proper cleanup."
      ],
      explanation: "The 'finally' block in 'try-with-resources' in Java is used to close resources regardless of whether an exception occurs or not, ensuring proper cleanup."
    },
    {
      index: 44,
      question: "What is the 'File' class used for in Java?",
      answer: "To represent files and directories and provide file-related operations, such as creating, deleting, and manipulating files.",
      options: [
        "To perform mathematical calculations",
        "To create network connections",
        "To represent numbers and perform numeric operations",
        "To represent files and directories and provide file-related operations, such as creating, deleting, and manipulating files."
      ],
      explanation: "The 'File' class in Java is used to represent files and directories and provides various file-related operations, making it essential for file handling tasks."
    }
  ];
  
  // You now have an array of 45 distinct questions related to "Java Exception and File Handling" in the DataSet array.
  



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
  