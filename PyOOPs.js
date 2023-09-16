



const DataSet = [
    {
      index: 0,
      question: "What is Object-Oriented Programming (OOP) in Python?",
      answer: "A programming paradigm that uses objects and classes for organizing code",
      options: [
        "A programming paradigm that uses objects and classes for organizing code",
        "A built-in Python function",
        "A Python module for handling exceptions",
        "A method for defining loops in Python"
      ],
      explanation: "Object-Oriented Programming (OOP) in Python is a programming paradigm that uses objects and classes for organizing code, promoting modularity and reusability."
    },
    {
      index: 1,
      question: "What is a class in Python?",
      answer: "A blueprint for creating objects with shared attributes and methods",
      options: [
        "A built-in Python function",
        "A method for defining loops in Python",
        "A data type for storing integers",
        "A blueprint for creating objects with shared attributes and methods"
      ],
      explanation: "A class in Python serves as a blueprint for creating objects with shared attributes and methods, defining the structure and behavior of those objects."
    },
    {
      index: 2,
      question: "What is an object in Python?",
      answer: "An instance of a class that encapsulates data and behavior",
      options: [
        "A loop in Python",
        "A built-in Python module",
        "A reserved keyword in Python",
        "An instance of a class that encapsulates data and behavior"
      ],
      explanation: "An object in Python is an instance of a class that encapsulates both data (attributes) and behavior (methods), allowing you to work with specific instances of a class."
    },
    {
      index: 3,
      question: "What is encapsulation in Python OOP?",
      answer: "The concept of bundling data (attributes) and methods (functions) that operate on that data within a single unit (class)",
      options: [
        "The process of converting code to machine language",
        "A built-in Python function",
        "A form of data compression",
        "The concept of bundling data (attributes) and methods (functions) that operate on that data within a single unit (class)"
      ],
      explanation: "Encapsulation in Python OOP refers to the concept of bundling data (attributes) and methods (functions) that operate on that data within a single unit (class), ensuring data integrity and access control."
    },
    {
      index: 4,
      question: "What is inheritance in Python OOP?",
      answer: "The mechanism that allows a class to inherit properties and behavior from another class",
      options: [
        "A built-in Python module",
        "A method for creating new objects",
        "A way to create random data",
        "The mechanism that allows a class to inherit properties and behavior from another class"
      ],
      explanation: "Inheritance in Python OOP is the mechanism that allows a class (subclass) to inherit properties and behavior from another class (superclass), facilitating code reuse and specialization."
    },
    {
      index: 5,
      question: "What is a constructor in Python?",
      answer: "A special method used for initializing object attributes when an object is created",
      options: [
        "A built-in Python function",
        "A method for defining loops in Python",
        "A function for performing arithmetic operations",
        "A special method used for initializing object attributes when an object is created"
      ],
      explanation: "A constructor in Python is a special method (usually named `__init__`) used for initializing object attributes when an object is created from a class."
    },
    {
      index: 6,
      question: "What is method overriding in Python OOP?",
      answer: "The ability of a subclass to provide a specific implementation for a method that is already defined in its superclass",
      options: [
        "A way to create random data",
        "A built-in Python module",
        "A method for creating new objects",
        "The ability of a subclass to provide a specific implementation for a method that is already defined in its superclass"
      ],
      explanation: "Method overriding in Python OOP allows a subclass to provide a specific implementation for a method that is already defined in its superclass, allowing for customization of behavior."
    },
    {
      index: 7,
      question: "What is a superclass in Python OOP?",
      answer: "A class that is inherited from by another class (subclass)",
      options: [
        "A built-in Python function",
        "A reserved keyword in Python",
        "A way to create random data",
        "A class that is inherited from by another class (subclass)"
      ],
      explanation: "A superclass in Python OOP is a class that is inherited from by another class (subclass), providing attributes and methods that can be reused and extended."
    },
    {
      index: 8,
      question: "What is the 'self' keyword in Python OOP?",
      answer: "A reference to the current instance of a class, used to access its attributes and methods",
      options: [
        "A built-in Python module",
        "A reserved keyword in Python",
        "A method for defining loops in Python",
        "A reference to the current instance of a class, used to access its attributes and methods"
      ],
      explanation: "The 'self' keyword in Python OOP is a reference to the current instance of a class, allowing you to access its attributes and methods within the class."
    },
    {
      index: 9,
      question: "What is a 'class variable' in Python?",
      answer: "A variable that is shared among all instances of a class",
      options: [
        "A variable with a limited scope",
        "A variable defined within a function",
        "A variable that is unique to each instance of a class",
        "A variable that is shared among all instances of a class"
      ],
      explanation: "A class variable in Python is a variable that is shared among all instances of a class, allowing them to access and modify its value."
    },
    {
      index: 10,
      question: "What is a 'class method' in Python?",
      answer: "A method that is bound to the class and not the instance, typically used for class-level operations",
      options: [
        "A method that is private and cannot be accessed from outside the class",
        "A method that is specific to a particular instance of a class",
        "A method for defining loops in Python",
        "A method that is bound to the class and not the instance, typically used for class-level operations"
      ],
      explanation: "A class method in Python is a method that is bound to the class and not the instance, typically used for class-level operations and actions that involve the class as a whole."
    },
    {
      index: 11,
      question: "What is a 'magic method' in Python OOP?",
      answer: "A method with a special double-underscore (dunder) prefix and suffix used for built-in operations",
      options: [
        "A method that performs random operations",
        "A method for defining loops in Python",
        "A method that is not recommended for use",
        "A method with a special double-underscore (dunder) prefix and suffix used for built-in operations"
      ],
      explanation: "A 'magic method' in Python OOP is a method with a special double-underscore (dunder) prefix and suffix that is used for built-in operations and customizing behavior."
    },
    {
      index: 12,
      question: "What is the purpose of 'polymorphism' in Python OOP?",
      answer: "The ability of different objects to respond to the same method or function in a way that is specific to their class",
      options: [
        "A method for creating random data",
        "A way to define global variables",
        "A built-in Python module",
        "The ability of different objects to respond to the same method or function in a way that is specific to their class"
      ],
      explanation: "Polymorphism in Python OOP refers to the ability of different objects to respond to the same method or function in a way that is specific to their class, enabling flexibility and code reuse."
    },
    {
      index: 13,
      question: "What is 'abstraction' in Python OOP?",
      answer: "The process of simplifying complex systems by modeling classes based on their essential properties and behaviors",
      options: [
        "A way to create random data",
        "A method for defining loops in Python",
        "A method for hiding class attributes",
        "The process of simplifying complex systems by modeling classes based on their essential properties and behaviors"
      ],
      explanation: "Abstraction in Python OOP is the process of simplifying complex systems by modeling classes based on their essential properties and behaviors, hiding unnecessary details."
    },
    {
      index: 14,
      question: "What is 'composition' in Python OOP?",
      answer: "The technique of creating complex objects by combining simpler objects as their parts",
      options: [
        "A way to create random data",
        "A built-in Python module",
        "A method for defining loops in Python",
        "The technique of creating complex objects by combining simpler objects as their parts"
      ],
      explanation: "Composition in Python OOP is the technique of creating complex objects by combining simpler objects as their parts, promoting code reuse and modularity."
    },
    {
      index: 15,
      question: "What is 'encapsulation' in Python OOP?",
      answer: "The concept of bundling data (attributes) and methods (functions) that operate on that data within a single unit (class)",
      options: [
        "The process of converting code to machine language",
        "A built-in Python function",
        "A form of data compression",
        "The concept of bundling data (attributes) and methods (functions) that operate on that data within a single unit (class)"
      ],
      explanation: "Encapsulation in Python OOP refers to the concept of bundling data (attributes) and methods (functions) that operate on that data within a single unit (class), ensuring data integrity and access control."
    },
    {
      index: 16,
      question: "What is 'inheritance' in Python OOP?",
      answer: "The mechanism that allows a class to inherit properties and behavior from another class",
      options: [
        "A built-in Python module",
        "A method for creating new objects",
        "A way to create random data",
        "The mechanism that allows a class to inherit properties and behavior from another class"
      ],
      explanation: "Inheritance in Python OOP is the mechanism that allows a class (subclass) to inherit properties and behavior from another class (superclass), facilitating code reuse and specialization."
    },
    {
      index: 17,
      question: "What is 'polymorphism' in Python OOP?",
      answer: "The ability of different objects to respond to the same method or function in a way that is specific to their class",
      options: [
        "A method for creating random data",
        "A way to define global variables",
        "A built-in Python module",
        "The ability of different objects to respond to the same method or function in a way that is specific to their class"
      ],
      explanation: "Polymorphism in Python OOP refers to the ability of different objects to respond to the same method or function in a way that is specific to their class, enabling flexibility and code reuse."
    },
    {
      index: 18,
      question: "What is 'abstraction' in Python OOP?",
      answer: "The process of simplifying complex systems by modeling classes based on their essential properties and behaviors",
      options: [
        "A way to create random data",
        "A method for defining loops in Python",
        "A method for hiding class attributes",
        "The process of simplifying complex systems by modeling classes based on their essential properties and behaviors"
      ],
      explanation: "Abstraction in Python OOP is the process of simplifying complex systems by modeling classes based on their essential properties and behaviors, hiding unnecessary details."
    },
    {
      index: 19,
      question: "What is 'composition' in Python OOP?",
      answer: "The technique of creating complex objects by combining simpler objects as their parts",
      options: [
        "A way to create random data",
        "A built-in Python module",
        "A method for defining loops in Python",
        "The technique of creating complex objects by combining simpler objects as their parts"
      ],
      explanation: "Composition in Python OOP is the technique of creating complex objects by combining simpler objects as their parts, promoting code reuse and modularity."
    },
    {
      index: 20,
      question: "What is 'duck typing' in Python?",
      answer: "A programming concept where the type or class of an object is determined by its behavior rather than its explicit type",
      options: [
        "A way to define global variables",
        "A method for creating random data",
        "A built-in Python module",
        "A programming concept where the type or class of an object is determined by its behavior rather than its explicit type"
      ],
      explanation: "Duck typing in Python is a programming concept where the type or class of an object is determined by its behavior rather than its explicit type, emphasizing the object's capabilities."
    },
    {
      index: 21,
      question: "What is 'multiple inheritance' in Python OOP?",
      answer: "The ability of a class to inherit properties and behavior from multiple parent classes",
      options: [
        "A way to define global variables",
        "A method for creating random data",
        "A built-in Python module",
        "The ability of a class to inherit properties and behavior from multiple parent classes"
      ],
      explanation: "Multiple inheritance in Python OOP is the ability of a class to inherit properties and behavior from multiple parent classes, allowing for complex class hierarchies."
    },
    {
      index: 22,
      question: "What is a 'namespace' in Python?",
      answer: "A container for mapping names to objects, preventing naming conflicts",
      options: [
        "A way to define global variables",
        "A method for creating random data",
        "A built-in Python module",
        "A container for mapping names to objects, preventing naming conflicts"
      ],
      explanation: "A namespace in Python is a container for mapping names to objects, preventing naming conflicts and providing a way to organize code."
    },
    {
      index: 23,
      question: "What is 'encapsulation' in Python OOP?",
      answer: "The concept of bundling data (attributes) and methods (functions) that operate on that data within a single unit (class)",
      options: [
        "The process of converting code to machine language",
        "A built-in Python function",
        "A form of data compression",
        "The concept of bundling data (attributes) and methods (functions) that operate on that data within a single unit (class)"
      ],
      explanation: "Encapsulation in Python OOP refers to the concept of bundling data (attributes) and methods (functions) that operate on that data within a single unit (class), ensuring data integrity and access control."
    },
    {
      index: 24,
      question: "What is a 'superclass' in Python OOP?",
      answer: "A class that is inherited from by another class (subclass)",
      options: [
        "A built-in Python function",
        "A reserved keyword in Python",
        "A way to create random data",
        "A class that is inherited from by another class (subclass)"
      ],
      explanation: "A superclass in Python OOP is a class that is inherited from by another class (subclass), providing attributes and methods that can be reused and extended."
    },
    {
      index: 25,
      question: "What is a 'class variable' in Python?",
      answer: "A variable that is shared among all instances of a class",
      options: [
        "A variable with a limited scope",
        "A variable defined within a function",
        "A variable that is unique to each instance of a class",
        "A variable that is shared among all instances of a class"
      ],
      explanation: "A class variable in Python is a variable that is shared among all instances of a class, allowing them to access and modify its value."
    },
    {
      index: 26,
      question: "What is a 'class method' in Python?",
      answer: "A method that is bound to the class and not the instance, typically used for class-level operations",
      options: [
        "A method that is private and cannot be accessed from outside the class",
        "A method that is specific to a particular instance of a class",
        "A method for defining loops in Python",
        "A method that is bound to the class and not the instance, typically used for class-level operations"
      ],
      explanation: "A class method in Python is a method that is bound to the class and not the instance, typically used for class-level operations and actions that involve the class as a whole."
    },
    {
      index: 27,
      question: "What is a 'magic method' in Python OOP?",
      answer: "A method with a special double-underscore (dunder) prefix and suffix used for built-in operations",
      options: [
        "A method that performs random operations",
        "A method for defining loops in Python",
        "A method that is not recommended for use",
        "A method with a special double-underscore (dunder) prefix and suffix used for built-in operations"
      ],
      explanation: "A 'magic method' in Python OOP is a method with a special double-underscore (dunder) prefix and suffix that is used for built-in operations and customizing behavior."
    },
    {
      index: 28,
      question: "What is the purpose of 'polymorphism' in Python OOP?",
      answer: "The ability of different objects to respond to the same method or function in a way that is specific to their class",
      options: [
        "A method for creating random data",
        "A way to define global variables",
        "A built-in Python module",
        "The ability of different objects to respond to the same method or function in a way that is specific to their class"
      ],
      explanation: "Polymorphism in Python OOP refers to the ability of different objects to respond to the same method or function in a way that is specific to their class, enabling flexibility and code reuse."
    },
    {
      index: 29,
      question: "What is 'abstraction' in Python OOP?",
      answer: "The process of simplifying complex systems by modeling classes based on their essential properties and behaviors",
      options: [
        "A way to create random data",
        "A method for defining loops in Python",
        "A method for hiding class attributes",
        "The process of simplifying complex systems by modeling classes based on their essential properties and behaviors"
      ],
      explanation: "Abstraction in Python OOP is the process of simplifying complex systems by modeling classes based on their essential properties and behaviors, hiding unnecessary details."
    },
    {
      index: 30,
      question: "What is 'composition' in Python OOP?",
      answer: "The technique of creating complex objects by combining simpler objects as their parts",
      options: [
        "A way to create random data",
        "A built-in Python module",
        "A method for defining loops in Python",
        "The technique of creating complex objects by combining simpler objects as their parts"
      ],
      explanation: "Composition in Python OOP is the technique of creating complex objects by combining simpler objects as their parts, promoting code reuse and modularity."
    },
    {
      index: 31,
      question: "What is 'encapsulation' in Python OOP?",
      answer: "The concept of bundling data (attributes) and methods (functions) that operate on that data within a single unit (class)",
      options: [
        "The process of converting code to machine language",
        "A built-in Python function",
        "A form of data compression",
        "The concept of bundling data (attributes) and methods (functions) that operate on that data within a single unit (class)"
      ],
      explanation: "Encapsulation in Python OOP refers to the concept of bundling data (attributes) and methods (functions) that operate on that data within a single unit (class), ensuring data integrity and access control."
    },
    {
      index: 32,
      question: "What is a 'superclass' in Python OOP?",
      answer: "A class that is inherited from by another class (subclass)",
      options: [
        "A built-in Python function",
        "A reserved keyword in Python",
        "A way to create random data",
        "A class that is inherited from by another class (subclass)"
      ],
      explanation: "A superclass in Python OOP is a class that is inherited from by another class (subclass), providing attributes and methods that can be reused and extended."
    },
    {
      index: 33,
      question: "What is a 'class variable' in Python?",
      answer: "A variable that is shared among all instances of a class",
      options: [
        "A variable with a limited scope",
        "A variable defined within a function",
        "A variable that is unique to each instance of a class",
        "A variable that is shared among all instances of a class"
      ],
      explanation: "A class variable in Python is a variable that is shared among all instances of a class, allowing them to access and modify its value."
    },
    {
      index: 34,
      question: "What is a 'class method' in Python?",
      answer: "A method that is bound to the class and not the instance, typically used for class-level operations",
      options: [
        "A method that is private and cannot be accessed from outside the class",
        "A method that is specific to a particular instance of a class",
        "A method for defining loops in Python",
        "A method that is bound to the class and not the instance, typically used for class-level operations"
      ],
      explanation: "A class method in Python is a method that is bound to the class and not the instance, typically used for class-level operations and actions that involve the class as a whole."
    },
    {
      index: 35,
      question: "What is a 'magic method' in Python OOP?",
      answer: "A method with a special double-underscore (dunder) prefix and suffix used for built-in operations",
      options: [
        "A method that performs random operations",
        "A method for defining loops in Python",
        "A method that is not recommended for use",
        "A method with a special double-underscore (dunder) prefix and suffix used for built-in operations"
      ],
      explanation: "A 'magic method' in Python OOP is a method with a special double-underscore (dunder) prefix and suffix that is used for built-in operations and customizing behavior."
    },
    {
      index: 36,
      question: "What is the purpose of 'polymorphism' in Python OOP?",
      answer: "The ability of different objects to respond to the same method or function in a way that is specific to their class",
      options: [
        "A method for creating random data",
        "A way to define global variables",
        "A built-in Python module",
        "The ability of different objects to respond to the same method or function in a way that is specific to their class"
      ],
      explanation: "Polymorphism in Python OOP refers to the ability of different objects to respond to the same method or function in a way that is specific to their class, enabling flexibility and code reuse."
    },
    {
      index: 37,
      question: "What is 'abstraction' in Python OOP?",
      answer: "The process of simplifying complex systems by modeling classes based on their essential properties and behaviors",
      options: [
        "A way to create random data",
        "A method for defining loops in Python",
        "A method for hiding class attributes",
        "The process of simplifying complex systems by modeling classes based on their essential properties and behaviors"
      ],
      explanation: "Abstraction in Python OOP is the process of simplifying complex systems by modeling classes based on their essential properties and behaviors, hiding unnecessary details."
    },
    {
      index: 38,
      question: "What is 'composition' in Python OOP?",
      answer: "The technique of creating complex objects by combining simpler objects as their parts",
      options: [
        "A way to create random data",
        "A built-in Python module",
        "A method for defining loops in Python",
        "The technique of creating complex objects by combining simpler objects as their parts"
      ],
      explanation: "Composition in Python OOP is the technique of creating complex objects by combining simpler objects as their parts, promoting code reuse and modularity."
    },
    {
      index: 39,
      question: "What is 'duck typing' in Python?",
      answer: "A programming concept where the type or class of an object is determined by its behavior rather than its explicit type",
      options: [
        "A way to define global variables",
        "A method for creating random data",
        "A built-in Python module",
        "A programming concept where the type or class of an object is determined by its behavior rather than its explicit type"
      ],
      explanation: "Duck typing in Python is a programming concept where the type or class of an object is determined by its behavior rather than its explicit type, emphasizing the object's capabilities."
    },
    {
      index: 40,
      question: "What is 'multiple inheritance' in Python OOP?",
      answer: "The ability of a class to inherit properties and behavior from multiple parent classes",
      options: [
        "A way to define global variables",
        "A method for creating random data",
        "A built-in Python module",
        "The ability of a class to inherit properties and behavior from multiple parent classes"
      ],
      explanation: "Multiple inheritance in Python OOP is the ability of a class to inherit properties and behavior from multiple parent classes, allowing for complex class hierarchies."
    },
    {
      index: 41,
      question: "What is a 'namespace' in Python?",
      answer: "A container for mapping names to objects, preventing naming conflicts",
      options: [
        "A way to define global variables",
        "A method for creating random data",
        "A built-in Python module",
        "A container for mapping names to objects, preventing naming conflicts"
      ],
      explanation: "A namespace in Python is a container for mapping names to objects, preventing naming conflicts and providing a way to organize code."
    },
    {
      index: 42,
      question: "What is 'exception handling' in Python?",
      answer: "A mechanism for handling errors and unexpected events in a program",
      options: [
        "A way to define global variables",
        "A method for creating random data",
        "A built-in Python module",
        "A mechanism for handling errors and unexpected events in a program"
      ],
      explanation: "Exception handling in Python is a mechanism for handling errors and unexpected events that may occur during program execution, ensuring graceful recovery and error reporting."
    },
    {
      index: 43,
      question: "What is 'file handling' in Python?",
      answer: "The process of working with files, including reading from and writing to them",
      options: [
        "A way to define global variables",
        "A method for creating random data",
        "A built-in Python module",
        "The process of working with files, including reading from and writing to them"
      ],
      explanation: "File handling in Python refers to the process of working with files, which includes tasks like reading data from files, writing data to files, and managing file-related operations."
    },
    {
      index: 44,
      question: "What is 'serialization' in Python?",
      answer: "The process of converting complex data structures, such as objects, into a format suitable for storage or transmission",
      options: [
        "A way to define global variables",
        "A method for creating random data",
        "A built-in Python module",
        "The process of converting complex data structures, such as objects, into a format suitable for storage or transmission"
      ],
      explanation: "Serialization in Python is the process of converting complex data structures, such as objects, into a format suitable for storage or transmission, often used for data persistence and inter-process communication."
    }
  ];
  
  // You now have an array of 45 distinct questions on the topic of "Python OOPs" with the specified format and options.
  
  

  
  
 
  
  
  

  


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
  