


const DatabaseInteractionQuestions = [
    {
      index: 0,
      question: "What is the purpose of a database in software development?",
      answer: "To store, manage, and retrieve structured data efficiently",
      options: [
        "To create graphical user interfaces",
        "To generate random numbers",
        "To store, manage, and retrieve structured data efficiently",
        "To perform mathematical calculations"
      ],
      explanation: "Databases are used in software development to store, manage, and retrieve structured data efficiently."
    },
    {
      index: 1,
      question: "Which of the following is not a commonly used relational database management system (RDBMS) in Python?",
      answer: "MongoDB",
      options: ["SQLite", "MySQL", "PostgreSQL", "MongoDB"],
      explanation: "MongoDB is a NoSQL database, while SQLite, MySQL, and PostgreSQL are RDBMS commonly used in Python."
    },
    {
      index: 2,
      question: "What does SQL stand for?",
      answer: "Structured Query Language",
      options: [
        "Software Query Language",
        "Structured Query Language",
        "Sequential Query Language",
        "Syntax Query Language"
      ],
      explanation: "SQL stands for Structured Query Language and is used for managing relational databases."
    },
    {
      index: 3,
      question: "Which SQL command is used to retrieve data from a database?",
      answer: "SELECT",
      options: ["UPDATE", "DELETE", "INSERT", "SELECT"],
      explanation: "The SQL 'SELECT' command is used to retrieve data from a database."
    },
    {
      index: 4,
      question: "In SQL, what is the purpose of the 'WHERE' clause in a SELECT statement?",
      answer: "To filter rows based on a specified condition",
      options: [
        "To order the result set",
        "To join multiple tables",
        "To filter columns from the result set",
        "To filter rows based on a specified condition"
      ],
      explanation: "The 'WHERE' clause in SQL is used to filter rows from a table based on a specified condition."
    },
    {
      index: 5,
      question: "Which Python library is commonly used for interacting with SQLite databases?",
      answer: "sqlite3",
      options: ["sqlalchemy", "sqlite3", "psycopg2", "mysql-connector-python"],
      explanation: "The 'sqlite3' library in Python is commonly used for interacting with SQLite databases."
    },
    {
      index: 6,
      question: "What is the purpose of an SQL 'JOIN' clause?",
      answer: "To combine rows from two or more tables based on a related column",
      options: [
        "To filter rows based on a condition",
        "To sort the result set",
        "To rename columns in the result set",
        "To combine rows from two or more tables based on a related column"
      ],
      explanation: "An SQL 'JOIN' clause is used to combine rows from two or more tables based on a related column."
    },
    {
      index: 7,
      question: "Which SQL command is used to add new data to a database table?",
      answer: "INSERT INTO",
      options: ["UPDATE", "DELETE FROM", "CREATE TABLE", "INSERT INTO"],
      explanation: "The SQL 'INSERT INTO' command is used to add new data to a database table."
    },
    {
      index: 8,
      question: "What is the purpose of an SQL 'GROUP BY' clause?",
      answer: "To group rows that have the same values into summary rows",
      options: [
        "To filter rows based on a condition",
        "To sort the result set",
        "To join multiple tables",
        "To group rows that have the same values into summary rows"
      ],
      explanation: "An SQL 'GROUP BY' clause is used to group rows with the same values into summary rows."
    },
    {
      index: 9,
      question: "Which Python library is commonly used for interacting with MySQL databases?",
      answer: "mysql-connector-python",
      options: ["sqlalchemy", "sqlite3", "psycopg2", "mysql-connector-python"],
      explanation: "The 'mysql-connector-python' library in Python is commonly used for interacting with MySQL databases."
    }
  ];
  
  console.log(DatabaseInteractionQuestions.length); // Output the total number of questions in the dataset (should be 10).
  
  // Here are 10 additional questions to reach a total of 20:
  
  const AdditionalDatabaseInteractionQuestions = [
    {
      index: 10,
      question: "What is an ORM in the context of database interaction?",
      answer: "Object-Relational Mapping",
      options: [
        "Object-Relational Model",
        "Object-Relationship Mapping",
        "Object-Resource Management",
        "Object-Relational Mapping"
      ],
      explanation: "ORM stands for Object-Relational Mapping, which is a technique for mapping objects to database tables."
    },
    {
      index: 11,
      question: "Which SQL command is used to delete data from a database table?",
      answer: "DELETE FROM",
      options: ["UPDATE", "INSERT INTO", "DELETE", "DELETE FROM"],
      explanation: "The SQL 'DELETE FROM' command is used to delete data from a database table."
    },
    {
      index: 12,
      question: "What is ACID in the context of database transactions?",
      answer: "A set of properties that guarantee reliable processing of database transactions",
      options: [
        "A database storage format",
        "A database indexing method",
        "A set of properties that guarantee reliable processing of database transactions",
        "A database query language"
      ],
      explanation: "ACID stands for a set of properties that guarantee reliable processing of database transactions: Atomicity, Consistency, Isolation, and Durability."
    },
    {
      index: 13,
      question: "What is the purpose of an SQL 'ORDER BY' clause?",
      answer: "To sort the result set based on one or more columns",
      options: [
        "To group rows based on a condition",
        "To filter rows based on a condition",
        "To join multiple tables",
        "To sort the result set based on one or more columns"
      ],
      explanation: "An SQL 'ORDER BY' clause is used to sort the result set based on one or more columns in ascending or descending order."
    },
    {
      index: 14,
      question: "What is the primary key in a database table?",
      answer: "A unique identifier for each row in the table",
      options: [
        "A foreign key from another table",
        "A column with a default value",
        "A unique identifier for each row in the table",
        "The first column in the table"
      ],
      explanation: "The primary key in a database table is a column or set of columns that uniquely identifies each row in the table."
    },
    {
      index: 15,
      question: "Which SQL command is used to update data in a database table?",
      answer: "UPDATE",
      options: ["INSERT INTO", "DELETE FROM", "UPDATE", "MODIFY"],
      explanation: "The SQL 'UPDATE' command is used to modify existing data in a database table."
    },
    {
      index: 16,
      question: "What is a foreign key in a database?",
      answer: "A column or set of columns that establishes a link between data in two tables",
      options: [
        "A unique identifier for each row in a table",
        "A column with a default value",
        "A column or set of columns that establishes a link between data in two tables",
        "The first column in a table"
      ],
      explanation: "A foreign key in a database table is a column or set of columns that establishes a link between data in two tables."
    },
    {
      index: 17,
      question: "What does CRUD stand for in the context of database operations?",
      answer: "Create, Read, Update, Delete",
      options: [
        "Create, Replace, Update, Delete",
        "Copy, Remove, Update, Delete",
        "Create, Read, Update, Delete",
        "Connect, Retrieve, Update, Delete"
      ],
      explanation: "CRUD stands for Create, Read, Update, Delete, which are the basic operations for managing data in a database."
    },
    {
      index: 18,
      question: "What is a database transaction?",
      answer: "A sequence of one or more SQL statements treated as a single unit of work",
      options: [
        "A complete backup of a database",
        "A database query",
        "A sequence of one or more SQL statements treated as a single unit of work",
        "A database schema"
      ],
      explanation: "A database transaction is a sequence of one or more SQL statements treated as a single unit of work, ensuring data consistency and integrity."
    },
    {
      index: 19,
      question: "What is the purpose of database indexing?",
      answer: "To improve the speed of data retrieval operations on a database table",
      options: [
        "To encrypt data stored in a database",
        "To enforce referential integrity constraints",
        "To improve the speed of data retrieval operations on a database table",
        "To create a backup of the database"
      ],
      explanation: "Database indexing is used to improve the speed of data retrieval operations on a database table by creating efficient data structures."
    }
  ];
  
  // Combine the two sets of questions into a single dataset.
  
  const DataSet = [...DatabaseInteractionQuestions, ...AdditionalDatabaseInteractionQuestions];
  

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
  