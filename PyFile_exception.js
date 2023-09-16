



const DataSet = [
    {
      index: 0,
      question: "What is an exception in Python?",
      answer: "An event that disrupts the normal flow of a program's instructions",
      options: [
        "A condition that indicates a program's successful execution",
        "A statement that handles errors gracefully",
        "An event that disrupts the normal flow of a program's instructions",
        "A type of variable used to store errors"
      ],
      explanation: "An exception in Python is an event that disrupts the normal flow of a program's instructions, typically caused by errors or exceptional situations."
    },
    {
      index: 1,
      question: "What is the purpose of exception handling in Python?",
      answer: "To gracefully handle errors and prevent program crashes",
      options: [
        "To generate errors during program execution",
        "To ignore errors and continue program execution",
        "To gracefully handle errors and prevent program crashes",
        "To report errors to the Python interpreter"
      ],
      explanation: "Exception handling in Python is used to gracefully handle errors and exceptional situations, preventing program crashes and improving robustness."
    },
    {
      index: 2,
      question: "Which keyword is used to indicate the beginning of an exception handling block in Python?",
      answer: "try",
      options: ["catch", "finally", "throw", "try"],
      explanation: "The 'try' keyword is used to indicate the beginning of an exception handling block in Python, where code that may raise exceptions is placed."
    },
    {
      index: 3,
      question: "What is the purpose of the 'except' block in Python exception handling?",
      answer: "To handle and process exceptions that occur in the 'try' block",
      options: [
        "To terminate the program",
        "To indicate the location of the error",
        "To handle and process exceptions that occur in the 'try' block",
        "To specify the type of exception to be raised"
      ],
      explanation: "The 'except' block in Python is used to handle and process exceptions that occur in the associated 'try' block, allowing for error-specific handling."
    },
    {
      index: 4,
      question: "What is the purpose of the 'finally' block in Python exception handling?",
      answer: "To specify code that should always be executed, regardless of whether an exception occurs or not",
      options: [
        "To catch and handle exceptions",
        "To specify the type of exception to be raised",
        "To specify code that should always be executed, regardless of whether an exception occurs or not",
        "To indicate the location of the error"
      ],
      explanation: "The 'finally' block in Python is used to specify code that should always be executed, regardless of whether an exception occurs or not, making it suitable for cleanup tasks."
    },
    {
      index: 5,
      question: "What is an 'unchecked exception' in Python?",
      answer: "An exception that occurs at runtime and does not need to be explicitly caught or declared",
      options: [
        "An exception that occurs at compile time",
        "An exception that occurs during testing",
        "An exception that occurs at runtime and does not need to be explicitly caught or declared",
        "An exception that is automatically caught by the 'except' block"
      ],
      explanation: "An 'unchecked exception' in Python is an exception that occurs at runtime and does not need to be explicitly caught or declared, making it unnecessary to handle them explicitly."
    },
    {
      index: 6,
      question: "What is the 'raise' keyword used for in Python?",
      answer: "To explicitly raise an exception, allowing you to raise custom exceptions or handle exceptional situations",
      options: [
        "To indicate the location of the error",
        "To specify code that should always be executed",
        "To catch and handle exceptions",
        "To explicitly raise an exception, allowing you to raise custom exceptions or handle exceptional situations"
      ],
      explanation: "The 'raise' keyword in Python is used to explicitly raise an exception, enabling you to raise custom exceptions or handle exceptional situations in your code."
    },
    {
      index: 7,
      question: "What is a 'FileNotFoundError' in Python?",
      answer: "An exception raised when a file being accessed does not exist",
      options: [
        "An exception for handling arithmetic errors",
        "An exception for handling network errors",
        "An exception for handling user input errors",
        "An exception raised when a file being accessed does not exist"
      ],
      explanation: "A 'FileNotFoundError' in Python is an exception raised when a file being accessed does not exist, typically encountered during file I/O operations."
    },
    {
      index: 8,
      question: "What is the 'try-except-else' block in Python?",
      answer: "A combination of blocks used for exception handling: 'try' contains code that may raise exceptions, 'except' for handling exceptions, and 'else' for specifying code to execute if no exception occurs.",
      options: [
        "A combination of blocks used for network communication",
        "A combination of blocks used for mathematical calculations",
        "A combination of blocks used for handling user input",
        "A combination of blocks used for exception handling: 'try' contains code that may raise exceptions, 'except' for handling exceptions, and 'else' for specifying code to execute if no exception occurs."
      ],
      explanation: "The 'try-except-else' block in Python is a combination of blocks used for exception handling. 'try' contains code that may raise exceptions, 'except' is used for handling exceptions, and 'else' specifies code to execute if no exception occurs."
    },
    {
      index: 9,
      question: "What is the purpose of the 'with' statement in Python?",
      answer: "To simplify the management of resources like files by ensuring they are properly opened and closed, reducing the risk of resource leaks.",
      options: [
        "To handle exceptions during file I/O operations",
        "To create new resources",
        "To simplify the management of resources like files by ensuring they are properly opened and closed, reducing the risk of resource leaks.",
        "To declare variables within a 'try' block"
      ],
      explanation: "The 'with' statement in Python is used to simplify the management of resources like files by ensuring they are properly opened and closed, reducing the risk of resource leaks."
    },
    {
      index: 10,
      question: "What is a 'custom exception' in Python?",
      answer: "An exception class defined by the programmer to handle specific exceptional situations in their code",
      options: [
        "An exception that occurs at compile time",
        "An exception provided by Python for common errors",
        "An exception that is automatically caught by the 'except' block",
        "An exception class defined by the programmer to handle specific exceptional situations in their code"
      ],
      explanation: "A 'custom exception' in Python is an exception class defined by the programmer to handle specific exceptional situations in their code, allowing for custom error handling."
    },
    {
      index: 11,
      question: "What is the purpose of the 'try-finally' block in Python?",
      answer: "To ensure that certain code is executed regardless of whether an exception occurs or not, suitable for cleanup tasks.",
      options: [
        "To catch and handle exceptions",
        "To specify the type of exception to be raised",
        "To close resources only if no exception occurs",
        "To ensure that certain code is executed regardless of whether an exception occurs or not, suitable for cleanup tasks."
      ],
      explanation: "The 'try-finally' block in Python is used to ensure that certain code is executed regardless of whether an exception occurs or not, making it suitable for cleanup tasks."
    },
    {
      index: 12,
      question: "What is the 'os' module used for in Python?",
      answer: "To provide a way of using operating system-dependent functionality, including file and directory operations.",
      options: [
        "To perform mathematical calculations",
        "To create network connections",
        "To represent numbers and perform numeric operations",
        "To provide a way of using operating system-dependent functionality, including file and directory operations."
      ],
      explanation: "The 'os' module in Python is used to provide a way of using operating system-dependent functionality, including file and directory operations, making it essential for file handling tasks."
    },
    {
      index: 13,
      question: "What is a 'checked exception' in Python?",
      answer: "An exception that must be explicitly caught or declared, ensuring that they are handled explicitly by the programmer.",
      options: [
        "An exception that occurs during testing",
        "An exception that must be caught by the 'except' block",
        "An exception that must be explicitly caught or declared, ensuring that they are handled explicitly by the programmer.",
        "An exception that is automatically caught by the 'finally' block"
      ],
      explanation: "A 'checked exception' in Python is an exception that must be explicitly caught or declared, ensuring that they are handled explicitly by the programmer."
    },
    {
      index: 14,
      question: "What is the purpose of the 'except' clause in Python's 'try-except' block?",
      answer: "To specify code that handles specific exceptions, allowing for custom exception handling.",
      options: [
        "To indicate the location of the error",
        "To specify code that should always be executed",
        "To catch and handle exceptions",
        "To specify code that handles specific exceptions, allowing for custom exception handling."
      ],
      explanation: "The 'except' clause in Python's 'try-except' block is used to specify code that handles specific exceptions, allowing for custom exception handling and graceful recovery."
    },
    {
      index: 15,
      question: "What is the 'open' function used for in Python?",
      answer: "To open files and return a file object, enabling file read, write, and manipulation operations.",
      options: [
        "To create new exceptions",
        "To open network connections",
        "To perform mathematical calculations",
        "To open files and return a file object, enabling file read, write, and manipulation operations."
      ],
      explanation: "The 'open' function in Python is used to open files and return a file object, enabling file read, write, and manipulation operations, making it essential for file handling."
    },
    {
      index: 16,
      question: "What is a 'File' object in Python?",
      answer: "An object that represents a file and provides methods and attributes for file-related operations.",
      options: [
        "An object used for mathematical calculations",
        "An object used for network communication",
        "An object that represents a file and provides methods and attributes for file-related operations.",
        "An object for handling user input"
      ],
      explanation: "A 'File' object in Python is an object that represents a file and provides methods and attributes for file-related operations, making it essential for file handling."
    },
    {
      index: 17,
      question: "What is the purpose of the 'finally' block in 'try-finally' in Python?",
      answer: "To ensure that certain code is executed regardless of whether an exception occurs or not, suitable for cleanup tasks.",
      options: [
        "To catch and handle exceptions",
        "To specify the type of exception to be raised",
        "To close resources only if no exception occurs",
        "To ensure that certain code is executed regardless of whether an exception occurs or not, suitable for cleanup tasks."
      ],
      explanation: "The 'finally' block in 'try-finally' in Python is used to ensure that certain code is executed regardless of whether an exception occurs or not, making it suitable for cleanup tasks."
    },
    {
      index: 18,
      question: "What is a 'generator' in Python?",
      answer: "A function that yields values one at a time, allowing for efficient memory usage and lazy evaluation.",
      options: [
        "A function for performing file I/O operations",
        "A function for mathematical calculations",
        "A function for network communication",
        "A function that yields values one at a time, allowing for efficient memory usage and lazy evaluation."
      ],
      explanation: "A 'generator' in Python is a function that yields values one at a time, allowing for efficient memory usage and lazy evaluation, often used for working with large datasets."
    },
    {
      index: 19,
      question: "What is the purpose of the 'try-except-else-finally' block in Python?",
      answer: "A combination of blocks used for comprehensive exception handling: 'try' contains code that may raise exceptions, 'except' for handling exceptions, 'else' for specifying code to execute if no exception occurs, and 'finally' for cleanup tasks.",
      options: [
        "A combination of blocks used for network communication",
        "A combination of blocks used for mathematical calculations",
        "A combination of blocks used for handling user input",
        "A combination of blocks used for comprehensive exception handling: 'try' contains code that may raise exceptions, 'except' for handling exceptions, 'else' for specifying code to execute if no exception occurs, and 'finally' for cleanup tasks."
      ],
      explanation: "The 'try-except-else-finally' block in Python is a combination of blocks used for comprehensive exception handling. 'try' contains code that may raise exceptions, 'except' is used for handling exceptions, 'else' specifies code to execute if no exception occurs, and 'finally' is for cleanup tasks."
    },
    {
      index: 20,
      question: "What is the 'os.path' module in Python used for?",
      answer: "To provide functions for working with file and directory paths, making it easier to manipulate paths in a platform-independent way.",
      options: [
        "To create network connections",
        "To perform mathematical calculations",
        "To represent numbers and perform numeric operations",
        "To provide functions for working with file and directory paths, making it easier to manipulate paths in a platform-independent way."
      ],
      explanation: "The 'os.path' module in Python is used to provide functions for working with file and directory paths, making it easier to manipulate paths in a platform-independent way, crucial for file handling."
    },
    {
      index: 21,
      question: "What is the purpose of the 'try-except-else-finally' block in Python?",
      answer: "A combination of blocks used for comprehensive exception handling: 'try' contains code that may raise exceptions, 'except' for handling exceptions, 'else' for specifying code to execute if no exception occurs, and 'finally' for cleanup tasks.",
      options: [
        "A combination of blocks used for network communication",
        "A combination of blocks used for mathematical calculations",
        "A combination of blocks used for handling user input",
        "A combination of blocks used for comprehensive exception handling: 'try' contains code that may raise exceptions, 'except' for handling exceptions, 'else' for specifying code to execute if no exception occurs, and 'finally' for cleanup tasks."
      ],
      explanation: "The 'try-except-else-finally' block in Python is a combination of blocks used for comprehensive exception handling. 'try' contains code that may raise exceptions, 'except' is used for handling exceptions, 'else' specifies code to execute if no exception occurs, and 'finally' is for cleanup tasks."
    },
    {
      index: 22,
      question: "What is the 'contextlib' module used for in Python?",
      answer: "To provide utilities for working with context management, including creating custom context managers.",
      options: [
        "To create network connections",
        "To perform mathematical calculations",
        "To represent numbers and perform numeric operations",
        "To provide utilities for working with context management, including creating custom context managers."
      ],
      explanation: "The 'contextlib' module in Python is used to provide utilities for working with context management, including creating custom context managers, which can be useful for resource management in file handling."
    },
    {
      index: 23,
      question: "What is the purpose of the 'else' clause in Python's 'try-except-else' block?",
      answer: "To specify code that is executed if no exception occurs in the 'try' block, allowing for alternative paths in code execution.",
      options: [
        "To indicate the location of the error",
        "To specify code that should always be executed",
        "To catch and handle exceptions",
        "To specify code that is executed if no exception occurs in the 'try' block, allowing for alternative paths in code execution."
      ],
      explanation: "The 'else' clause in Python's 'try-except-else' block is used to specify code that is executed if no exception occurs in the 'try' block, allowing for alternative paths in code execution."
    },
    {
      index: 24,
      question: "What is a 'file descriptor' in Python?",
      answer: "An integer used to uniquely identify an open file in a computer's operating system.",
      options: [
        "A string that represents a file's path",
        "An object for file read and write operations",
        "An integer used to uniquely identify an open file in a computer's operating system.",
        "A data structure for storing file metadata"
      ],
      explanation: "A 'file descriptor' in Python is an integer used to uniquely identify an open file in a computer's operating system, important for low-level file operations."
    },
    {
      index: 25,
      question: "What is a 'bytecode' in Python?",
      answer: "Intermediate code compiled from Python source code and executed by the Python interpreter.",
      options: [
        "A format for storing binary data",
        "An encoding scheme for text files",
        "Intermediate code compiled from Python source code and executed by the Python interpreter.",
        "A data type for representing bytes in memory"
      ],
      explanation: "A 'bytecode' in Python is intermediate code compiled from Python source code and executed by the Python interpreter, enabling cross-platform compatibility and execution speed."
    },
    {
      index: 26,
      question: "What is the 'pickle' module used for in Python?",
      answer: "To serialize and deserialize Python objects, allowing for object persistence and data interchange.",
      options: [
        "To perform mathematical calculations",
        "To create network connections",
        "To represent numbers and perform numeric operations",
        "To serialize and deserialize Python objects, allowing for object persistence and data interchange."
      ],
      explanation: "The 'pickle' module in Python is used to serialize and deserialize Python objects, enabling object persistence and data interchange, often used for file storage."
    },
    {
      index: 27,
      question: "What is the purpose of the 'shutil' module in Python?",
      answer: "To provide a higher-level interface for file and directory operations, including file copying and removal.",
      options: [
        "To create network connections",
        "To perform mathematical calculations",
        "To represent numbers and perform numeric operations",
        "To provide a higher-level interface for file and directory operations, including file copying and removal."
      ],
      explanation: "The 'shutil' module in Python is used to provide a higher-level interface for file and directory operations, making it easier to perform tasks like file copying and removal."
    },
    {
      index: 28,
      question: "What is the purpose of the 'os.listdir()' function in Python?",
      answer: "To return a list of filenames in a specified directory, allowing for directory traversal and file manipulation.",
      options: [
        "To create network connections",
        "To perform mathematical calculations",
        "To represent numbers and perform numeric operations",
        "To return a list of filenames in a specified directory, allowing for directory traversal and file manipulation."
      ],
      explanation: "The 'os.listdir()' function in Python is used to return a list of filenames in a specified directory, enabling directory traversal and file manipulation."
    },
    {
      index: 29,
      question: "What is a 'filesystem' in Python?",
      answer: "A hierarchical organization of files and directories on a storage device, managed by the operating system.",
      options: [
        "A data structure for storing file data",
        "A protocol for network file sharing",
        "A programming language for file manipulation",
        "A hierarchical organization of files and directories on a storage device, managed by the operating system."
      ],
      explanation: "A 'filesystem' in Python is a hierarchical organization of files and directories on a storage device, managed by the operating system, crucial for file handling operations."
    },
    {
      index: 30,
      question: "What is a 'context manager' in Python?",
      answer: "An object that defines methods to enter and exit a context, often used for resource management, including file handling.",
      options: [
        "A function for performing file I/O operations",
        "An object for network communication",
        "An object for mathematical calculations",
        "An object that defines methods to enter and exit a context, often used for resource management, including file handling."
      ],
      explanation: "A 'context manager' in Python is an object that defines methods to enter and exit a context, often used for resource management, including file handling."
    },
    {
      index: 31,
      question: "What is a 'file mode' in Python?",
      answer: "A string that specifies the intended file access mode, such as 'read', 'write', or 'append'.",
      options: [
        "A number used to identify files",
        "An object used for file operations",
        "A string that specifies the intended file access mode, such as 'read', 'write', or 'append'.",
        "A flag for enabling file compression"
      ],
      explanation: "A 'file mode' in Python is a string that specifies the intended file access mode, such as 'read', 'write', or 'append', indicating how the file should be opened and used."
    },
    {
      index: 32,
      question: "What is the 'file pointer' in Python?",
      answer: "A marker or cursor that points to a specific position within a file, indicating where the next read or write operation will occur.",
      options: [
        "A data structure for storing file data",
        "An integer representing the file's size",
        "A marker or cursor that points to a specific position within a file, indicating where the next read or write operation will occur.",
        "A flag for enabling file compression"
      ],
      explanation: "The 'file pointer' in Python is a marker or cursor that points to a specific position within a file, indicating where the next read or write operation will occur."
    },
    {
      index: 33,
      question: "What is the purpose of the 'os.makedirs()' function in Python?",
      answer: "To create multiple directories recursively, including any necessary parent directories, allowing for the creation of directory structures.",
      options: [
        "To create network connections",
        "To perform mathematical calculations",
        "To represent numbers and perform numeric operations",
        "To create multiple directories recursively, including any necessary parent directories, allowing for the creation of directory structures."
      ],
      explanation: "The 'os.makedirs()' function in Python is used to create multiple directories recursively, including any necessary parent directories, allowing for the creation of directory structures."
    },
    {
      index: 34,
      question: "What is the purpose of the 'os.remove()' function in Python?",
      answer: "To delete a file specified by its path, removing it from the filesystem.",
      options: [
        "To create network connections",
        "To perform mathematical calculations",
        "To represent numbers and perform numeric operations",
        "To delete a file specified by its path, removing it from the filesystem."
      ],
      explanation: "The 'os.remove()' function in Python is used to delete a file specified by its path, removing it from the filesystem, a common operation in file handling."
    },
    {
      index: 35,
      question: "What is the 'os.rmdir()' function in Python used for?",
      answer: "To remove an empty directory specified by its path.",
      options: [
        "To create network connections",
        "To perform mathematical calculations",
        "To represent numbers and perform numeric operations",
        "To remove an empty directory specified by its path."
      ],
      explanation: "The 'os.rmdir()' function in Python is used to remove an empty directory specified by its path, allowing for directory cleanup in file handling."
    },
    {
      index: 36,
      question: "What is the purpose of the 'os.rename()' function in Python?",
      answer: "To rename a file or directory specified by its old and new paths.",
      options: [
        "To create network connections",
        "To perform mathematical calculations",
        "To represent numbers and perform numeric operations",
        "To rename a file or directory specified by its old and new paths."
      ],
      explanation: "The 'os.rename()' function in Python is used to rename a file or directory specified by its old and new paths, enabling file and directory renaming in file handling."
    },
    {
      index: 37,
      question: "What is the 'os.chmod()' function in Python used for?",
      answer: "To change the permissions (mode) of a file or directory specified by its path.",
      options: [
        "To create network connections",
        "To perform mathematical calculations",
        "To represent numbers and perform numeric operations",
        "To change the permissions (mode) of a file or directory specified by its path."
      ],
      explanation: "The 'os.chmod()' function in Python is used to change the permissions (mode) of a file or directory specified by its path, allowing for access control in file handling."
    },
    {
      index: 38,
      question: "What is the 'os.path.exists()' function used for in Python?",
      answer: "To check if a file or directory specified by its path exists in the filesystem.",
      options: [
        "To create network connections",
        "To perform mathematical calculations",
        "To represent numbers and perform numeric operations",
        "To check if a file or directory specified by its path exists in the filesystem."
      ],
      explanation: "The 'os.path.exists()' function in Python is used to check if a file or directory specified by its path exists in the filesystem, helping to avoid errors when working with files and directories."
    },
    {
      index: 39,
      question: "What is the 'os.path.isfile()' function used for in Python?",
      answer: "To check if a path points to a regular file (not a directory).",
      options: [
        "To create network connections",
        "To perform mathematical calculations",
        "To represent numbers and perform numeric operations",
        "To check if a path points to a regular file (not a directory)."
      ],
      explanation: "The 'os.path.isfile()' function in Python is used to check if a path points to a regular file (not a directory), which can be useful for file type validation in file handling."
    },
    {
      index: 40,
      question: "What is the 'os.path.isdir()' function used for in Python?",
      answer: "To check if a path points to a directory.",
      options: [
        "To create network connections",
        "To perform mathematical calculations",
        "To represent numbers and perform numeric operations",
        "To check if a path points to a directory."
      ],
      explanation: "The 'os.path.isdir()' function in Python is used to check if a path points to a directory, helping distinguish between files and directories in file handling."
    },
    {
      index: 41,
      question: "What is the 'os.path.join()' function used for in Python?",
      answer: "To concatenate multiple path components into a single path, taking care of platform-specific path separators.",
      options: [
        "To create network connections",
        "To perform mathematical calculations",
        "To represent numbers and perform numeric operations",
        "To concatenate multiple path components into a single path, taking care of platform-specific path separators."
      ],
      explanation: "The 'os.path.join()' function in Python is used to concatenate multiple path components into a single path, taking care of platform-specific path separators, ensuring correct path construction in file handling."
    },
    {
      index: 42,
      question: "What is the 'os.path.abspath()' function used for in Python?",
      answer: "To return the absolute version of a path, resolving any relative path components.",
      options: [
        "To create network connections",
        "To perform mathematical calculations",
        "To represent numbers and perform numeric operations",
        "To return the absolute version of a path, resolving any relative path components."
      ],
      explanation: "The 'os.path.abspath()' function in Python is used to return the absolute version of a path, resolving any relative path components, ensuring a full and correct path representation in file handling."
    },
    {
      index: 43,
      question: "What is the 'os.path.splitext()' function used for in Python?",
      answer: "To split a file path into its base name and file extension, providing easy access to these components.",
      options: [
        "To create network connections",
        "To perform mathematical calculations",
        "To represent numbers and perform numeric operations",
        "To split a file path into its base name and file extension, providing easy access to these components."
      ],
      explanation: "The 'os.path.splitext()' function in Python is used to split a file path into its base name and file extension, making it convenient to work with file names and extensions in file handling."
    },
    {
      index: 44,
      question: "What is the 'os.path.getsize()' function used for in Python?",
      answer: "To return the size of a file specified by its path in bytes.",
      options: [
        "To create network connections",
        "To perform mathematical calculations",
        "To represent numbers and perform numeric operations",
        "To return the size of a file specified by its path in bytes."
      ],
      explanation: "The 'os.path.getsize()' function in Python is used to return the size of a file specified by its path in bytes, allowing you to retrieve file sizes in file handling operations."
    }
  ];
  
  // You can access each question using PythonExceptionAndFileHandling[index], where 'index' is the question number from 0 to 44.
  
  
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
  