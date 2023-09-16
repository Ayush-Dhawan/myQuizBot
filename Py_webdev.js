



const DataSet = [
    {
      index: 0,
      question: "What is Flask?",
      answer: "A micro web framework for Python",
      options: [
        "A programming language",
        "A front-end development library",
        "A micro web framework for Python",
        "A database management system"
      ],
      explanation: "Flask is a micro web framework for Python used for web development."
    },
    {
      index: 1,
      question: "Which programming language is commonly used with Django for web development?",
      answer: "Python",
      options: ["JavaScript", "Python", "Java", "Ruby"],
      explanation: "Python is commonly used with Django for web development."
    },
    {
      index: 2,
      question: "What is the purpose of a Django template?",
      answer: "To define the structure and layout of web pages",
      options: [
        "To store database records",
        "To define the structure and layout of web pages",
        "To manage server-side logic",
        "To create API endpoints"
      ],
      explanation: "A Django template is used to define the structure and layout of web pages in a Django web application."
    },
    {
      index: 3,
      question: "Which Django component is responsible for handling URL routing?",
      answer: "URL Dispatcher",
      options: ["View", "Model", "Template", "URL Dispatcher"],
      explanation: "The URL Dispatcher in Django is responsible for handling URL routing and mapping URLs to views."
    },
    {
      index: 4,
      question: "What is the purpose of a Django model?",
      answer: "To define the structure of a database table",
      options: [
        "To define the structure of a web page",
        "To define the structure of a database table",
        "To define the structure of a URL",
        "To define the structure of a view"
      ],
      explanation: "A Django model is used to define the structure of a database table and its fields."
    },
    {
      index: 5,
      question: "Which database management systems are supported by Django?",
      answer: "Multiple databases, including PostgreSQL, MySQL, SQLite, and Oracle",
      options: [
        "Only PostgreSQL",
        "Only MySQL",
        "Multiple databases, including PostgreSQL, MySQL, SQLite, and Oracle",
        "NoSQL databases only"
      ],
      explanation: "Django supports multiple database management systems, including PostgreSQL, MySQL, SQLite, and Oracle."
    },
    {
      index: 6,
      question: "What is the purpose of Django's 'views' in a web application?",
      answer: "To handle HTTP requests and return HTTP responses",
      options: [
        "To define the structure of web pages",
        "To manage server-side logic",
        "To handle HTTP requests and return HTTP responses",
        "To create database tables"
      ],
      explanation: "In Django, views are responsible for handling HTTP requests and returning HTTP responses."
    },
    {
      index: 7,
      question: "Which Django component is responsible for handling user authentication?",
      answer: "Authentication System",
      options: [
        "View",
        "Model",
        "Template",
        "Authentication System"
      ],
      explanation: "The Authentication System in Django is responsible for handling user authentication and authorization."
    },
    {
      index: 8,
      question: "What is a Django app?",
      answer: "A self-contained module within a Django project with its own models, views, and templates",
      options: [
        "A web page",
        "A front-end library",
        "A self-contained module within a Django project with its own models, views, and templates",
        "A database table"
      ],
      explanation: "A Django app is a self-contained module within a Django project that includes its own models, views, and templates."
    },
    {
      index: 9,
      question: "What is the purpose of Django migrations?",
      answer: "To manage changes to the database schema over time",
      options: [
        "To create web pages",
        "To handle HTTP requests",
        "To manage changes to the database schema over time",
        "To define URL patterns"
      ],
      explanation: "Django migrations are used to manage changes to the database schema over time, including creating, updating, and deleting database tables and fields."
    },
    {
        index: 10,
        question: "What is the purpose of Django's 'forms'?",
        answer: "To handle user input and validate data",
        options: [
          "To create web pages",
          "To manage server-side logic",
          "To handle user input and validate data",
          "To define the database schema"
        ],
        explanation: "In Django, forms are used to handle user input, validate data, and generate HTML forms."
      },
      {
        index: 11,
        question: "What is the role of Django's 'middleware'?",
        answer: "To process requests and responses globally before reaching views or after leaving views",
        options: [
          "To create web pages",
          "To manage database connections",
          "To process requests and responses globally before reaching views or after leaving views",
          "To define URL patterns"
        ],
        explanation: "Django middleware is used to process requests and responses globally, performing actions before reaching views or after leaving views."
      },
      {
        index: 12,
        question: "What is the Django Admin interface used for?",
        answer: "To manage application data and perform administrative tasks",
        options: [
          "To create web pages",
          "To manage user authentication",
          "To manage application data and perform administrative tasks",
          "To define URL patterns"
        ],
        explanation: "The Django Admin interface is used for managing application data and performing administrative tasks, such as creating, updating, and deleting records."
      },
      {
        index: 13,
        question: "What is the purpose of Django REST framework?",
        answer: "To build Web APIs for mobile and web applications",
        options: [
          "To create web pages",
          "To manage user authentication",
          "To build Web APIs for mobile and web applications",
          "To define URL patterns"
        ],
        explanation: "Django REST framework is used to build Web APIs that can be consumed by mobile and web applications."
      },
      {
        index: 14,
        question: "What is the Django ORM (Object-Relational Mapping) used for?",
        answer: "To interact with databases using Python classes",
        options: [
          "To create web pages",
          "To manage user authentication",
          "To interact with databases using Python classes",
          "To define URL patterns"
        ],
        explanation: "The Django ORM is used to interact with databases by defining Python classes that map to database tables."
      },
      {
        index: 15,
        question: "What is the purpose of Django's 'static files' handling?",
        answer: "To serve CSS, JavaScript, and image files to the web browser",
        options: [
          "To create web pages",
          "To manage user authentication",
          "To serve CSS, JavaScript, and image files to the web browser",
          "To define URL patterns"
        ],
        explanation: "Django's static files handling is used to serve static assets like CSS, JavaScript, and images to the web browser."
      },
      {
        index: 16,
        question: "What is a URL pattern in Django?",
        answer: "A regular expression that maps URLs to views",
        options: [
          "A regular expression that maps URLs to views",
          "A database table for storing URLs",
          "A template for generating URLs",
          "A URL shortening service"
        ],
        explanation: "A URL pattern in Django is a regular expression that maps URLs to views, determining how URLs are processed by the application."
      },
      {
        index: 17,
        question: "What is the purpose of Django's 'context' in templates?",
        answer: "To pass data from views to templates for rendering",
        options: [
          "To create web pages",
          "To manage user authentication",
          "To pass data from views to templates for rendering",
          "To define URL patterns"
        ],
        explanation: "Django's context is used to pass data from views to templates, allowing dynamic rendering of web pages."
      },
      {
        index: 18,
        question: "What is middleware in Django used for?",
        answer: "To process requests and responses globally in a Django application",
        options: [
          "To create web pages",
          "To manage user authentication",
          "To process requests and responses globally in a Django application",
          "To define URL patterns"
        ],
        explanation: "Middleware in Django is used to process requests and responses globally in a Django application, performing actions before or after reaching views."
      },
      {
        index: 19,
        question: "What is Django's role in the Model-View-Controller (MVC) architectural pattern?",
        answer: "Django follows the Model-View-Controller (MVC) architectural pattern",
        options: [
          "Django follows the Model-View-Controller (MVC) architectural pattern",
          "Django is not related to any architectural pattern",
          "Django only focuses on the View component",
          "Django only focuses on the Model component"
        ],
        explanation: "Django follows the Model-View-Controller (MVC) architectural pattern, where models represent data, views handle presentation and user interaction, and controllers handle the logic between models and views."
      },
      {
        index: 20,
        question: "What is the role of middleware in a Django application?",
        answer: "To process requests and responses globally before reaching views or after leaving views",
        options: [
          "To create web pages",
          "To manage server-side logic",
          "To process requests and responses globally before reaching views or after leaving views",
          "To define URL patterns"
        ],
        explanation: "Middleware in Django is used to process requests and responses globally, performing actions before reaching views or after leaving views."
      },
      {
        index: 21,
        question: "What is the Django Admin interface primarily used for?",
        answer: "To manage application data and perform administrative tasks",
        options: [
          "To create web pages",
          "To manage user authentication",
          "To manage application data and perform administrative tasks",
          "To define URL patterns"
        ],
        explanation: "The Django Admin interface is primarily used for managing application data and performing administrative tasks, such as creating, updating, and deleting records."
      },
      {
        index: 22,
        question: "What is the purpose of Django REST framework?",
        answer: "To build Web APIs for mobile and web applications",
        options: [
          "To create web pages",
          "To manage user authentication",
          "To build Web APIs for mobile and web applications",
          "To define URL patterns"
        ],
        explanation: "Django REST framework is used to build Web APIs that can be consumed by mobile and web applications."
      },
      {
        index: 23,
        question: "What does Django ORM stand for?",
        answer: "Object-Relational Mapping",
        options: [
          "Object-Relational Mapping",
          "Object-Rendering Model",
          "Object-Relational Model",
          "Object-Request Manager"
        ],
        explanation: "Django ORM stands for Object-Relational Mapping, which is used to interact with databases using Python classes."
      },
      {
        index: 24,
        question: "What is the purpose of Django's 'static files' handling?",
        answer: "To serve CSS, JavaScript, and image files to the web browser",
        options: [
          "To create web pages",
          "To manage user authentication",
          "To serve CSS, JavaScript, and image files to the web browser",
          "To define URL patterns"
        ],
        explanation: "Django's static files handling is used to serve static assets like CSS, JavaScript, and images to the web browser."
      },
      {
        index: 25,
        question: "What is a URL pattern in Django?",
        answer: "A regular expression that maps URLs to views",
        options: [
          "A regular expression that maps URLs to views",
          "A database table for storing URLs",
          "A template for generating URLs",
          "A URL shortening service"
        ],
        explanation: "A URL pattern in Django is a regular expression that maps URLs to views, determining how URLs are processed by the application."
      },
      {
        index: 26,
        question: "What is the purpose of Django's 'context' in templates?",
        answer: "To pass data from views to templates for rendering",
        options: [
          "To create web pages",
          "To manage user authentication",
          "To pass data from views to templates for rendering",
          "To define URL patterns"
        ],
        explanation: "Django's context is used to pass data from views to templates, allowing dynamic rendering of web pages."
      },
      {
        index: 27,
        question: "What is middleware in Django used for?",
        answer: "To process requests and responses globally in a Django application",
        options: [
          "To create web pages",
          "To manage user authentication",
          "To process requests and responses globally in a Django application",
          "To define URL patterns"
        ],
        explanation: "Middleware in Django is used to process requests and responses globally in a Django application, performing actions before or after reaching views."
      },
      {
        index: 28,
        question: "What is Django's role in the Model-View-Controller (MVC) architectural pattern?",
        answer: "Django follows the Model-View-Controller (MVC) architectural pattern",
        options: [
          "Django follows the Model-View-Controller (MVC) architectural pattern",
          "Django is not related to any architectural pattern",
          "Django only focuses on the View component",
          "Django only focuses on the Model component"
        ],
        explanation: "Django follows the Model-View-Controller (MVC) architectural pattern, where models represent data, views handle presentation and user interaction, and controllers handle the logic between models and views."
      },
      {
        index: 29,
        question: "In Django, what is the purpose of a 'migration'?",
        answer: "To manage changes to the database schema over time",
        options: [
          "To create web pages",
          "To handle HTTP requests",
          "To manage changes to the database schema over time",
          "To define URL patterns"
        ],
        explanation: "In Django, a migration is used to manage changes to the database schema over time, including creating, updating, and deleting database tables and fields."
      },
      {
        index: 30,
        question: "Which component of Django is responsible for handling user authentication and authorization?",
        answer: "Authentication System",
        options: [
          "View",
          "Model",
          "Template",
          "Authentication System"
        ],
        explanation: "The Authentication System in Django is responsible for handling user authentication and authorization in web applications."
      },
      {
        index: 31,
        question: "What is the purpose of Django's 'forms'?",
        answer: "To handle user input and validate data",
        options: [
          "To create web pages",
          "To manage server-side logic",
          "To handle user input and validate data",
          "To define the database schema"
        ],
        explanation: "In Django, forms are used to handle user input, validate data, and generate HTML forms for data submission."
      },
      {
        index: 32,
        question: "Which HTTP methods does Django use for creating new resources?",
        answer: "POST",
        options: ["GET", "POST", "PUT", "DELETE"],
        explanation: "Django uses the POST method to create new resources (e.g., submitting a form to create a new record)."
      },
      {
        index: 33,
        question: "What is the primary purpose of Django's 'models'?",
        answer: "To define the structure of database tables",
        options: [
          "To define the structure of web pages",
          "To manage server-side logic",
          "To define the structure of database tables",
          "To define the structure of a URL"
        ],
        explanation: "In Django, models are used to define the structure of database tables, including fields and relationships."
      },
      {
        index: 34,
        question: "Which template engine is commonly used in Django?",
        answer: "Django Template Language (DTL)",
        options: [
          "HTML5",
          "Django Template Language (DTL)",
          "JavaScript",
          "CSS3"
        ],
        explanation: "Django commonly uses the Django Template Language (DTL) as its template engine for rendering HTML templates."
      },
      {
        index: 35,
        question: "What is Django's primary database connection management tool?",
        answer: "Django ORM (Object-Relational Mapping)",
        options: [
          "HTML5",
          "Django ORM (Object-Relational Mapping)",
          "JavaScript",
          "CSS3"
        ],
        explanation: "Django's primary tool for managing database connections and interactions is the Django ORM (Object-Relational Mapping)."
      },
      {
        index: 36,
        question: "In Django, what is the purpose of the 'urls.py' file?",
        answer: "To define URL patterns and map them to views",
        options: [
          "To create web pages",
          "To manage server-side logic",
          "To define URL patterns and map them to views",
          "To define the database schema"
        ],
        explanation: "The 'urls.py' file in Django is used to define URL patterns and map them to views, determining how URLs are processed by the application."
      },
      {
        index: 37,
        question: "Which template engine is commonly used in Django?",
        answer: "Django Template Language (DTL)",
        options: [
          "HTML5",
          "Django Template Language (DTL)",
          "JavaScript",
          "CSS3"
        ],
        explanation: "Django commonly uses the Django Template Language (DTL) as its template engine for rendering HTML templates."
      },
      {
        index: 38,
        question: "What is the purpose of Django's 'forms'?",
        answer: "To handle user input and validate data",
        options: [
          "To create web pages",
          "To manage server-side logic",
          "To handle user input and validate data",
          "To define the database schema"
        ],
        explanation: "In Django, forms are used to handle user input, validate data, and generate HTML forms for data submission."
      },
      {
        index: 39,
        question: "Which HTTP methods does Django use for updating existing resources?",
        answer: "PUT and PATCH",
        options: ["GET", "POST", "PUT and PATCH", "DELETE"],
        explanation: "Django uses the PUT and PATCH methods to update existing resources, with PUT typically used for full updates and PATCH for partial updates."
      }
  ];
  

  // Here are 10 additional questions to reach a total of 20:
 
  // Combine the two sets of questions into a single dataset.
  

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
  