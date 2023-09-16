



const DataSet = [
    {
      index: 0,
      question: "What is a list in Python?",
      answer: "An ordered collection of elements, mutable, and allows duplicate values",
      options: [
        "An ordered collection of elements, immutable, and does not allow duplicate values",
        "An unordered collection of elements, mutable, and allows duplicate values",
        "An ordered collection of elements, mutable, and allows duplicate values",
        "An ordered collection of elements, mutable, and does not allow duplicate values"
      ],
      explanation: "A list in Python is an ordered collection of elements, mutable, and allows duplicate values."
    },
    {
      index: 1,
      question: "What is a tuple in Python?",
      answer: "An ordered collection of elements, immutable, and allows duplicate values",
      options: [
        "An ordered collection of elements, mutable, and allows duplicate values",
        "An unordered collection of elements, mutable, and allows duplicate values",
        "An ordered collection of elements, immutable, and allows duplicate values",
        "An ordered collection of elements, mutable, and does not allow duplicate values"
      ],
      explanation: "A tuple in Python is an ordered collection of elements, immutable, and allows duplicate values."
    },
    {
      index: 2,
      question: "What is a set in Python?",
      answer: "An unordered collection of unique elements",
      options: [
        "An ordered collection of elements, mutable, and allows duplicate values",
        "An unordered collection of elements, mutable, and allows duplicate values",
        "An unordered collection of unique elements",
        "An ordered collection of elements, immutable, and does not allow duplicate values"
      ],
      explanation: "A set in Python is an unordered collection of unique elements, and it does not allow duplicate values."
    },
    {
      index: 3,
      question: "What is a dictionary in Python?",
      answer: "An unordered collection of key-value pairs",
      options: [
        "An ordered collection of elements, mutable, and allows duplicate values",
        "An ordered collection of key-value pairs",
        "An unordered collection of elements, mutable, and allows duplicate values",
        "An ordered collection of elements, immutable, and allows duplicate values"
      ],
      explanation: "A dictionary in Python is an unordered collection of key-value pairs."
    },
    {
      index: 4,
      question: "What is the time complexity of accessing an element by index in a list?",
      answer: "O(1)",
      options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
      explanation: "Accessing an element by index in a list has a time complexity of O(1) in Python, as it directly accesses the element's memory location."
    },
    {
      index: 5,
      question: "What is the time complexity of checking for membership in a set?",
      answer: "O(1)",
      options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
      explanation: "Checking for membership in a set has a time complexity of O(1) in Python, as it uses hashing to quickly determine existence."
    },
    {
      index: 6,
      question: "What is the time complexity of adding an element to a dictionary?",
      answer: "O(1)",
      options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
      explanation: "Adding an element to a dictionary has a time complexity of O(1) in Python, assuming a good hash function and negligible collisions."
    },
    {
      index: 7,
      question: "What is the time complexity of searching for a key in a dictionary?",
      answer: "O(1) on average",
      options: ["O(n)", "O(log n)", "O(1) on average", "O(n^2)"],
      explanation: "Searching for a key in a dictionary has an average time complexity of O(1) in Python, thanks to efficient hashing."
    },
    {
      index: 8,
      question: "What is a string in Python?",
      answer: "A sequence of characters, immutable",
      options: [
        "A sequence of characters, mutable",
        "A sequence of numbers",
        "A data structure for storing binary data",
        "A sequence of characters, immutable"
      ],
      explanation: "A string in Python is a sequence of characters and is immutable, meaning it cannot be changed after creation."
    },
    {
      index: 9,
      question: "What is a stack data structure?",
      answer: "A linear data structure with Last-In-First-Out (LIFO) behavior",
      options: [
        "A linear data structure with First-In-First-Out (FIFO) behavior",
        "A tree-based data structure",
        "A hash-based data structure",
        "A linear data structure with Last-In-First-Out (LIFO) behavior"
      ],
      explanation: "A stack data structure follows Last-In-First-Out (LIFO) behavior, where the last element added is the first one to be removed."
    },
    {
      index: 10,
      question: "What is a queue data structure?",
      answer: "A linear data structure with First-In-First-Out (FIFO) behavior",
      options: [
        "A linear data structure with Last-In-First-Out (LIFO) behavior",
        "A tree-based data structure",
        "A hash-based data structure",
        "A linear data structure with First-In-First-Out (FIFO) behavior"
      ],
      explanation: "A queue data structure follows First-In-First-Out (FIFO) behavior, where the first element added is the first one to be removed."
    },
    {
      index: 11,
      question: "What is the purpose of a 'for' loop in Python?",
      answer: "To iterate over a sequence (such as a list or string) or other iterable objects",
      options: [
        "To declare variables",
        "To perform arithmetic operations",
        "To define functions",
        "To iterate over a sequence (such as a list or string) or other iterable objects"
      ],
      explanation: "A 'for' loop in Python is used to iterate over a sequence (such as a list or string) or other iterable objects, executing a block of code for each item."
    },
    {
      index: 12,
      question: "What is the purpose of a 'while' loop in Python?",
      answer: "To repeatedly execute a block of code as long as a specified condition is true",
      options: [
        "To declare variables",
        "To perform arithmetic operations",
        "To define functions",
        "To repeatedly execute a block of code as long as a specified condition is true"
      ],
      explanation: "A 'while' loop in Python is used to repeatedly execute a block of code as long as a specified condition is true."
    },
    {
      index: 13,
      question: "What is a dictionary in Python?",
      answer: "An unordered collection of key-value pairs",
      options: [
        "An ordered collection of elements, mutable, and allows duplicate values",
        "An ordered collection of key-value pairs",
        "An unordered collection of elements, mutable, and allows duplicate values",
        "An ordered collection of elements, immutable, and allows duplicate values"
      ],
      explanation: "A dictionary in Python is an unordered collection of key-value pairs."
    },
    {
      index: 14,
      question: "What is the time complexity of accessing an element by key in a dictionary?",
      answer: "O(1) on average",
      options: ["O(n)", "O(log n)", "O(1) on average", "O(n^2)"],
      explanation: "Accessing an element by key in a dictionary has an average time complexity of O(1) in Python, thanks to efficient hashing."
    },
    {
      index: 15,
      question: "What is a module in Python?",
      answer: "A Python file containing definitions and statements",
      options: [
        "A type of data structure",
        "A built-in Python function",
        "A Python file containing definitions and statements",
        "A graphical user interface (GUI) component"
      ],
      explanation: "A module in Python is a Python file containing definitions and statements, which can be imported and used in other Python programs."
    },
    {
      index: 16,
      question: "What is the purpose of the 'import' statement in Python?",
      answer: "To include a module and its definitions in the current Python script",
      options: [
        "To define a new module",
        "To create a Python package",
        "To include a module and its definitions in the current Python script",
        "To remove a module from memory"
      ],
      explanation: "The 'import' statement in Python is used to include a module and its definitions in the current Python script, allowing you to use the module's functions and variables."
    },
    {
      index: 17,
      question: "What is a Python 'list comprehension'?",
      answer: "A concise way to create lists by applying an expression to each item in an iterable",
      options: [
        "A method for sorting lists",
        "A way to remove items from a list",
        "A concise way to create lists by applying an expression to each item in an iterable",
        "A method for extending lists"
      ],
      explanation: "A Python 'list comprehension' is a concise way to create lists by applying an expression to each item in an iterable, allowing for efficient and readable list generation."
    },
    {
      index: 18,
      question: "What is a Python 'generator'?",
      answer: "A type of iterable that generates values on-the-fly, conserving memory",
      options: [
        "A built-in Python function",
        "A Python module",
        "A type of iterable that generates values on-the-fly, conserving memory",
        "A data structure for storing binary data"
      ],
      explanation: "A Python 'generator' is a type of iterable that generates values on-the-fly as they are needed, conserving memory and typically implemented using functions with 'yield' statements."
    },
    {
      index: 19,
      question: "What is the 'len()' function used for in Python?",
      answer: "To get the length (number of items) of a sequence or collection",
      options: [
        "To create a new list",
        "To calculate the sum of numbers",
        "To remove items from a list",
        "To get the length (number of items) of a sequence or collection"
      ],
      explanation: "The 'len()' function in Python is used to get the length (number of items) of a sequence or collection, such as a list or string."
    },
    {
      index: 20,
      question: "What is a Python 'dictionary comprehension'?",
      answer: "A concise way to create dictionaries by specifying key-value pairs with an expression",
      options: [
        "A method for sorting dictionaries",
        "A way to remove items from a dictionary",
        "A concise way to create dictionaries by specifying key-value pairs with an expression",
        "A method for extending dictionaries"
      ],
      explanation: "A Python 'dictionary comprehension' is a concise way to create dictionaries by specifying key-value pairs with an expression, providing an efficient means of dictionary creation."
    },
    {
      index: 21,
      question: "What is a Python 'lambda' function?",
      answer: "An anonymous, small, and inline function defined using the 'lambda' keyword",
      options: [
        "A built-in Python function",
        "A Python module",
        "An anonymous, small, and inline function defined using the 'lambda' keyword",
        "A type of data structure"
      ],
      explanation: "A Python 'lambda' function is an anonymous, small, and inline function defined using the 'lambda' keyword, commonly used for simple operations and transformations."
    },
    {
      index: 22,
      question: "What is the 'map()' function used for in Python?",
      answer: "To apply a function to all items in an iterable and return the results as a map object",
      options: [
        "To create a new dictionary",
        "To calculate the sum of numbers",
        "To remove items from a list",
        "To apply a function to all items in an iterable and return the results as a map object"
      ],
      explanation: "The 'map()' function in Python is used to apply a function to all items in an iterable and return the results as a map object, which can be converted to other iterable types like lists."
    },
    {
      index: 23,
      question: "What is the 'filter()' function used for in Python?",
      answer: "To filter elements from an iterable based on a specified condition and return the results as a filter object",
      options: [
        "To create a new list",
        "To calculate the sum of numbers",
        "To apply a function to all items in an iterable",
        "To filter elements from an iterable based on a specified condition and return the results as a filter object"
      ],
      explanation: "The 'filter()' function in Python is used to filter elements from an iterable based on a specified condition and return the results as a filter object, which can be converted to other iterable types like lists."
    },
    {
      index: 24,
      question: "What is a Python 'deque'?",
      answer: "A double-ended queue, a data structure that allows efficient insertion and deletion at both ends",
      options: [
        "A data structure for storing binary data",
        "A Python module",
        "A type of dictionary",
        "A double-ended queue, a data structure that allows efficient insertion and deletion at both ends"
      ],
      explanation: "A Python 'deque' is a double-ended queue, a data structure that allows efficient insertion and deletion at both ends, useful for implementing queues and stacks."
    },
    {
      index: 25,
      question: "What is the 'collections' module used for in Python?",
      answer: "To provide specialized data structures and additional functionality beyond built-in types",
      options: [
        "To create GUI applications",
        "To perform mathematical calculations",
        "To connect to databases",
        "To provide specialized data structures and additional functionality beyond built-in types"
      ],
      explanation: "The 'collections' module in Python is used to provide specialized data structures and additional functionality beyond built-in types, including named tuples, deques, and more."
    },
    {
      index: 26,
      question: "What is the purpose of the 'OrderedDict' class in Python's 'collections' module?",
      answer: "To create dictionaries that remember the order of key-value pairs based on insertion order",
      options: [
        "To create dictionaries with sorted keys",
        "To create dictionaries with reversed key-value pairs",
        "To create dictionaries that remember the order of key-value pairs based on insertion order",
        "To create dictionaries with unique keys"
      ],
      explanation: "The 'OrderedDict' class in Python's 'collections' module is used to create dictionaries that remember the order of key-value pairs based on insertion order, ensuring that keys are ordered as they were added."
    },
    {
      index: 27,
      question: "What is the 'defaultdict' class in Python's 'collections' module used for?",
      answer: "To create dictionaries with default values for missing keys",
      options: [
        "To create dictionaries with sorted keys",
        "To create dictionaries with reversed key-value pairs",
        "To create dictionaries with default values for missing keys",
        "To create dictionaries with unique keys"
      ],
      explanation: "The 'defaultdict' class in Python's 'collections' module is used to create dictionaries with default values for missing keys, making it easier to handle missing keys without raising exceptions."
    },
    {
      index: 28,
      question: "What is the purpose of the 'namedtuple' class in Python's 'collections' module?",
      answer: "To create simple classes for storing data with named fields",
      options: [
        "To create dictionaries with sorted keys",
        "To create classes with complex inheritance",
        "To create simple classes for storing data with named fields",
        "To create classes for database connections"
      ],
      explanation: "The 'namedtuple' class in Python's 'collections' module is used to create simple classes for storing data with named fields, providing an easy way to create structured data types."
    },
    {
      index: 29,
      question: "What is the time complexity of adding an element to the end of a list using 'append()'?",
      answer: "O(1)",
      options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
      explanation: "Adding an element to the end of a list using the 'append()' method has a time complexity of O(1) in Python, as it directly adds the element to the end."
    },
    {
      index: 30,
      question: "What is the time complexity of removing an element from the end of a list using 'pop()'?",
      answer: "O(1)",
      options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
      explanation: "Removing an element from the end of a list using the 'pop()' method has a time complexity of O(1) in Python, as it directly removes the last element."
    },
    {
      index: 31,
      question: "What is the time complexity of adding an element to the beginning of a list using 'insert(0, element)'?",
      answer: "O(n)",
      options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
      explanation: "Adding an element to the beginning of a list using 'insert(0, element)' has a time complexity of O(n) in Python, as it requires shifting all existing elements."
    },
    {
      index: 32,
      question: "What is the time complexity of removing an element from the beginning of a list using 'pop(0)'?",
      answer: "O(n)",
      options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
      explanation: "Removing an element from the beginning of a list using 'pop(0)' has a time complexity of O(n) in Python, as it requires shifting all remaining elements."
    },
    {
      index: 33,
      question: "What is the 'collections.Counter' class used for in Python?",
      answer: "To count the occurrences of elements in an iterable or dictionary",
      options: [
        "To perform mathematical calculations",
        "To create graphical user interfaces (GUIs)",
        "To establish network connections",
        "To count the occurrences of elements in an iterable or dictionary"
      ],
      explanation: "The 'collections.Counter' class in Python is used to count the occurrences of elements in an iterable or dictionary, making it useful for frequency analysis and statistics."
    },
    {
      index: 34,
      question: "What is the 'collections.ChainMap' class used for in Python?",
      answer: "To combine multiple dictionaries into a single, viewable mapping",
      options: [
        "To create dictionaries with sorted keys",
        "To create classes with complex inheritance",
        "To combine multiple dictionaries into a single, viewable mapping",
        "To create dictionaries with default values for missing keys"
      ],
      explanation: "The 'collections.ChainMap' class in Python is used to combine multiple dictionaries into a single, viewable mapping, allowing you to access and manipulate multiple dictionaries as a single entity."
    },
    {
      index: 35,
      question: "What is the time complexity of adding an element to a set using 'add()'?",
      answer: "O(1)",
      options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
      explanation: "Adding an element to a set using the 'add()' method has a time complexity of O(1) in Python, as it relies on hashing for efficient insertion."
    },
    {
      index: 36,
      question: "What is the time complexity of removing an element from a set using 'remove()'?",
      answer: "O(1)",
      options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
      explanation: "Removing an element from a set using the 'remove()' method has a time complexity of O(1) in Python, as it relies on hashing for efficient removal."
    },
    {
      index: 37,
      question: "What is the 'collections.defaultdict' class used for in Python?",
      answer: "To create dictionaries with default values for missing keys",
      options: [
        "To create dictionaries with sorted keys",
        "To create dictionaries with reversed key-value pairs",
        "To create dictionaries with default values for missing keys",
        "To create dictionaries with unique keys"
      ],
      explanation: "The 'collections.defaultdict' class in Python is used to create dictionaries with default values for missing keys, providing a convenient way to handle missing keys without raising exceptions."
    },
    {
      index: 38,
      question: "What is the time complexity of adding an element to the end of a deque using 'append()'?",
      answer: "O(1)",
      options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
      explanation: "Adding an element to the end of a deque using 'append()' has a time complexity of O(1) in Python, as it directly adds the element to the end."
    },
    {
      index: 39,
      question: "What is the time complexity of removing an element from the beginning of a deque using 'popleft()'?",
      answer: "O(1)",
      options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
      explanation: "Removing an element from the beginning of a deque using 'popleft()' has a time complexity of O(1) in Python, as it directly removes the first element."
    },
    {
      index: 40,
      question: "What is the time complexity of adding an element to the beginning of a deque using 'appendleft()'?",
      answer: "O(1)",
      options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
      explanation: "Adding an element to the beginning of a deque using 'appendleft()' has a time complexity of O(1) in Python, as it directly adds the element to the beginning."
    },
    {
      index: 41,
      question: "What is the time complexity of removing an element from the end of a deque using 'pop()'?",
      answer: "O(1)",
      options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
      explanation: "Removing an element from the end of a deque using 'pop()' has a time complexity of O(1) in Python, as it directly removes the last element."
    },
    {
      index: 42,
      question: "What is the 'collections.OrderedDict' class used for in Python?",
      answer: "To create dictionaries that remember the order of key-value pairs based on insertion order",
      options: [
        "To create dictionaries with sorted keys",
        "To create dictionaries with reversed key-value pairs",
        "To create dictionaries that remember the order of key-value pairs based on insertion order",
        "To create dictionaries with unique keys"
      ],
      explanation: "The 'collections.OrderedDict' class in Python is used to create dictionaries that remember the order of key-value pairs based on insertion order, ensuring that keys are ordered as they were added."
    },
    {
      index: 43,
      question: "What is the time complexity of checking for membership in a deque?",
      answer: "O(n)",
      options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
      explanation: "Checking for membership in a deque has a time complexity of O(n) in Python, as it requires scanning the elements to find a match."
    },
    {
      index: 44,
      question: "What is the 'collections.ChainMap' class used for in Python?",
      answer: "To combine multiple dictionaries into a single, viewable mapping",
      options: [
        "To create dictionaries with sorted keys",
        "To create classes with complex inheritance",
        "To combine multiple dictionaries into a single, viewable mapping",
        "To create dictionaries with default values for missing keys"
      ],
      explanation: "The 'collections.ChainMap' class in Python is used to combine multiple dictionaries into a single, viewable mapping, allowing you to access and manipulate multiple dictionaries as a single entity."
    }
  ];
  
  // Total of 45 distinct questions
  
  
 
  
  
  

  


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
  