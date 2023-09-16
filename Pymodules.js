



const DataSet = [
    {
      index: 0,
      question: "What is a Python module?",
      answer: "A Python script containing Python code",
      options: [
        "A built-in Python data type",
        "A Python script containing Python code",
        "A Python class for inheritance",
        "A Python package for distribution"
      ],
      explanation: "A Python module is a Python script containing Python code that can be reused in other Python programs."
    },
    {
      index: 1,
      question: "How can you import a Python module named 'example'?",
      answer: "import example",
      options: [
        "import example.py",
        "import 'example'",
        "from example import *",
        "include 'example.py'"
      ],
      explanation: "You can import a Python module named 'example' using the 'import example' statement."
    },
    {
      index: 2,
      question: "What is a Python package?",
      answer: "A directory containing Python modules",
      options: [
        "A compressed file containing Python code",
        "A single Python script",
        "A directory containing text files",
        "A directory containing Python modules"
      ],
      explanation: "A Python package is a directory that contains Python modules and an '__init__.py' file."
    },
    {
      index: 3,
      question: "How do you create an empty Python package?",
      answer: "Create a directory with an '__init__.py' file",
      options: [
        "Create a directory with a '.py' file",
        "Create a directory with a 'main.py' file",
        "Create a ZIP file with Python modules",
        "Create a text file with Python code"
      ],
      explanation: "You create an empty Python package by creating a directory with an '__init__.py' file inside."
    },
    {
      index: 4,
      question: "What is the purpose of the '__init__.py' file in a Python package?",
      answer: "It indicates that the directory should be treated as a package and can contain Python modules.",
      options: [
        "It contains the main program of the package",
        "It provides documentation for the package",
        "It is a backup of the package files",
        "It indicates that the directory should be treated as a package and can contain Python modules."
      ],
      explanation: "The '__init__.py' file in a Python package indicates that the directory should be treated as a package and can contain Python modules."
    },
    {
      index: 5,
      question: "What is a namespace in Python?",
      answer: "A container that holds a set of identifiers (names) and their corresponding objects",
      options: [
        "A Python module",
        "A Python package",
        "A directory on the filesystem",
        "A container that holds a set of identifiers (names) and their corresponding objects"
      ],
      explanation: "A namespace in Python is a container that holds a set of identifiers (names) and their corresponding objects, allowing you to organize and access variables and functions."
    },
    {
      index: 6,
      question: "What is a Python module's global namespace?",
      answer: "The namespace that contains names defined at the top level of the module",
      options: [
        "The namespace of built-in Python functions",
        "The namespace of the '__init__.py' file",
        "The namespace of the '__main__' module",
        "The namespace that contains names defined at the top level of the module"
      ],
      explanation: "A Python module's global namespace is the namespace that contains names defined at the top level of the module, making them accessible to other parts of the module."
    },
    {
      index: 7,
      question: "What is a Python module's local namespace?",
      answer: "The namespace that contains names defined within a specific function or scope in the module",
      options: [
        "The namespace that contains all imported modules",
        "The namespace that contains only variables",
        "The namespace that contains names of built-in functions",
        "The namespace that contains names defined within a specific function or scope in the module"
      ],
      explanation: "A Python module's local namespace is the namespace that contains names defined within a specific function or scope in the module, and it is separate from the global namespace."
    },
    {
      index: 8,
      question: "How can you access a variable defined in a Python module?",
      answer: "By using the 'import' statement to import the module and then using 'module_name.variable_name'",
      options: [
        "By using the 'from' statement to import the variable",
        "By declaring the variable as global within the module",
        "By using 'variable_name' directly",
        "By using the 'import' statement to import the module and then using 'module_name.variable_name'"
      ],
      explanation: "You can access a variable defined in a Python module by using the 'import' statement to import the module and then using 'module_name.variable_name' to reference the variable."
    },
    {
      index: 9,
      question: "What is a Python module's '__name__' attribute used for?",
      answer: "To determine whether the module is being run as the main program or imported as a module",
      options: [
        "To store the module's documentation",
        "To specify the module's version number",
        "To define the module's dependencies",
        "To determine whether the module is being run as the main program or imported as a module"
      ],
      explanation: "The '__name__' attribute of a Python module is used to determine whether the module is being run as the main program or imported as a module in another program."
    },
    {
      index: 10,
      question: "What is a Python package's '__init__.py' file used for?",
      answer: "To specify initialization code for the package",
      options: [
        "To list all the package's modules",
        "To store package documentation",
        "To define package-level variables",
        "To specify initialization code for the package"
      ],
      explanation: "The '__init__.py' file in a Python package is used to specify initialization code for the package, allowing you to customize package behavior during import."
    },
    {
      index: 11,
      question: "What is the purpose of the 'import' statement in Python?",
      answer: "To bring external modules or packages into the current program's namespace",
      options: [
        "To export variables from the current module",
        "To create new namespaces",
        "To define global variables",
        "To bring external modules or packages into the current program's namespace"
      ],
      explanation: "The 'import' statement in Python is used to bring external modules or packages into the current program's namespace, allowing you to use their functions and variables."
    },
    {
      index: 12,
      question: "Which of the following is a valid way to import a module named 'my_module' in Python?",
      answer: "import my_module",
      options: [
        "my_module.import",
        "import 'my_module'",
        "from my_module import *",
        "include my_module"
      ],
      explanation: "A valid way to import a module named 'my_module' in Python is 'import my_module'."
    },
    {
      index: 13,
      question: "What is the purpose of the 'as' keyword when importing modules in Python?",
      answer: "To create an alias for the imported module, allowing you to use a shorter name",
      options: [
        "To hide the imported module from the namespace",
        "To indicate that the module is not used",
        "To specify the module's version",
        "To create an alias for the imported module, allowing you to use a shorter name"
      ],
      explanation: "The 'as' keyword when importing modules in Python is used to create an alias for the imported module, providing a shorter name for convenience."
    },
    {
      index: 14,
      question: "What is a Python 'namespace collision'?",
      answer: "When two or more imported modules or variables have the same name, causing ambiguity",
      options: [
        "A collision between Python data types",
        "A collision between Python modules",
        "A collision between Python and C++ code",
        "When two or more imported modules or variables have the same name, causing ambiguity"
      ],
      explanation: "A Python 'namespace collision' occurs when two or more imported modules or variables have the same name, leading to ambiguity in the namespace."
    },
    {
      index: 15,
      question: "What is the purpose of the 'from' statement when importing modules in Python?",
      answer: "To import specific functions or variables from a module directly into the current namespace",
      options: [
        "To rename a module",
        "To hide the module's functions",
        "To create a new namespace",
        "To import specific functions or variables from a module directly into the current namespace"
      ],
      explanation: "The 'from' statement when importing modules in Python is used to import specific functions or variables from a module directly into the current namespace, allowing you to use them without specifying the module name."
    },
    {
      index: 16,
      question: "What is a 'relative import' in Python?",
      answer: "An import statement that specifies the location of the target module relative to the current module",
      options: [
        "An import statement that specifies an absolute path to the module",
        "An import statement that imports all modules in a package",
        "An import statement that imports modules from a different package",
        "An import statement that specifies the location of the target module relative to the current module"
      ],
      explanation: "A 'relative import' in Python is an import statement that specifies the location of the target module relative to the current module, allowing you to import modules within the same package or subpackage."
    },
    {
      index: 17,
      question: "What is a 'star import' in Python?",
      answer: "An import statement that imports all functions and variables from a module",
      options: [
        "An import statement that imports a single function",
        "An import statement that imports a specific variable",
        "An import statement that imports modules from a different package",
        "An import statement that imports all functions and variables from a module"
      ],
      explanation: "A 'star import' in Python is an import statement that imports all functions and variables from a module, making them available in the current namespace."
    },
    {
      index: 18,
      question: "What is the purpose of the 'sys.path' list in Python?",
      answer: "To specify the directories where Python looks for modules and packages",
      options: [
        "To store the Python interpreter's version number",
        "To list all available modules",
        "To define package-level variables",
        "To specify the directories where Python looks for modules and packages"
      ],
      explanation: "The 'sys.path' list in Python is used to specify the directories where Python looks for modules and packages when performing imports."
    },
    {
      index: 19,
      question: "What is a 'built-in module' in Python?",
      answer: "A module that is automatically available without the need for additional installation or importing",
      options: [
        "A module that is included with Python but requires explicit importing",
        "A module that is created by the user",
        "A module that is installed from third-party sources",
        "A module that is automatically available without the need for additional installation or importing"
      ],
      explanation: "A 'built-in module' in Python is a module that is automatically available without the need for additional installation or importing, as it is included with the Python standard library."
    },
    {
      index: 20,
      question: "What is the purpose of the 'dir()' function in Python?",
      answer: "To list the names in the current module's namespace or the attributes of an object",
      options: [
        "To create a new directory",
        "To import a module",
        "To define global variables",
        "To list the names in the current module's namespace or the attributes of an object"
      ],
      explanation: "The 'dir()' function in Python is used to list the names in the current module's namespace or the attributes of an object, providing information about available names and attributes."
    },
    {
      index: 21,
      question: "What is a 'relative import' in Python?",
      answer: "An import statement that specifies the location of the target module relative to the current module",
      options: [
        "An import statement that specifies an absolute path to the module",
        "An import statement that imports all modules in a package",
        "An import statement that imports modules from a different package",
        "An import statement that specifies the location of the target module relative to the current module"
      ],
      explanation: "A 'relative import' in Python is an import statement that specifies the location of the target module relative to the current module, allowing you to import modules within the same package or subpackage."
    },
    {
      index: 22,
      question: "What is a 'star import' in Python?",
      answer: "An import statement that imports all functions and variables from a module",
      options: [
        "An import statement that imports a single function",
        "An import statement that imports a specific variable",
        "An import statement that imports modules from a different package",
        "An import statement that imports all functions and variables from a module"
      ],
      explanation: "A 'star import' in Python is an import statement that imports all functions and variables from a module, making them available in the current namespace."
    },
    {
      index: 23,
      question: "What is the purpose of the 'sys.path' list in Python?",
      answer: "To specify the directories where Python looks for modules and packages",
      options: [
        "To store the Python interpreter's version number",
        "To list all available modules",
        "To define package-level variables",
        "To specify the directories where Python looks for modules and packages"
      ],
      explanation: "The 'sys.path' list in Python is used to specify the directories where Python looks for modules and packages when performing imports."
    },
    {
      index: 24,
      question: "What is a 'built-in module' in Python?",
      answer: "A module that is automatically available without the need for additional installation or importing",
      options: [
        "A module that is included with Python but requires explicit importing",
        "A module that is created by the user",
        "A module that is installed from third-party sources",
        "A module that is automatically available without the need for additional installation or importing"
      ],
      explanation: "A 'built-in module' in Python is a module that is automatically available without the need for additional installation or importing, as it is included with the Python standard library."
    },
    {
      index: 25,
      question: "What is the purpose of the 'dir()' function in Python?",
      answer: "To list the names in the current module's namespace or the attributes of an object",
      options: [
        "To create a new directory",
        "To import a module",
        "To define global variables",
        "To list the names in the current module's namespace or the attributes of an object"
      ],
      explanation: "The 'dir()' function in Python is used to list the names in the current module's namespace or the attributes of an object, providing information about available names and attributes."
    },
    {
      index: 26,
      question: "What is the purpose of the 'globals()' function in Python?",
      answer: "To return a dictionary representing the current global symbol table",
      options: [
        "To list all imported modules",
        "To list all local variables in a function",
        "To import global variables",
        "To return a dictionary representing the current global symbol table"
      ],
      explanation: "The 'globals()' function in Python is used to return a dictionary representing the current global symbol table, allowing you to access and manipulate global variables."
    },
    {
      index: 27,
      question: "What is the purpose of the 'locals()' function in Python?",
      answer: "To return a dictionary representing the current local symbol table",
      options: [
        "To list all imported modules",
        "To list all global variables",
        "To import local variables",
        "To return a dictionary representing the current local symbol table"
      ],
      explanation: "The 'locals()' function in Python is used to return a dictionary representing the current local symbol table, providing information about local variables."
    },
    {
      index: 28,
      question: "What is a 'docstring' in Python?",
      answer: "A string that provides documentation for a module, function, class, or method",
      options: [
        "A string used for debugging",
        "A string used for user input",
        "A string used for naming variables",
        "A string that provides documentation for a module, function, class, or method"
      ],
      explanation: "A 'docstring' in Python is a string that provides documentation for a module, function, class, or method, helping developers understand its purpose and usage."
    },
    {
      index: 29,
      question: "What is the purpose of the 'help()' function in Python?",
      answer: "To display documentation and information about Python objects",
      options: [
        "To list all available functions",
        "To create a new function",
        "To display error messages",
        "To display documentation and information about Python objects"
      ],
      explanation: "The 'help()' function in Python is used to display documentation and information about Python objects, providing assistance in understanding their usage."
    },
    {
      index: 30,
      question: "What is the purpose of the 'dir()' function in Python?",
      answer: "To list the names in the current module's namespace or the attributes of an object",
      options: [
        "To create a new directory",
        "To import a module",
        "To define global variables",
        "To list the names in the current module's namespace or the attributes of an object"
      ],
      explanation: "The 'dir()' function in Python is used to list the names in the current module's namespace or the attributes of an object, providing information about available names and attributes."
    },
    {
      index: 31,
      question: "What is the purpose of the 'globals()' function in Python?",
      answer: "To return a dictionary representing the current global symbol table",
      options: [
        "To list all imported modules",
        "To list all local variables in a function",
        "To import global variables",
        "To return a dictionary representing the current global symbol table"
      ],
      explanation: "The 'globals()' function in Python is used to return a dictionary representing the current global symbol table, allowing you to access and manipulate global variables."
    },
    {
      index: 32,
      question: "What is the purpose of the 'locals()' function in Python?",
      answer: "To return a dictionary representing the current local symbol table",
      options: [
        "To list all imported modules",
        "To list all global variables",
        "To import local variables",
        "To return a dictionary representing the current local symbol table"
      ],
      explanation: "The 'locals()' function in Python is used to return a dictionary representing the current local symbol table, providing information about local variables."
    },
    {
      index: 33,
      question: "What is a 'docstring' in Python?",
      answer: "A string that provides documentation for a module, function, class, or method",
      options: [
        "A string used for debugging",
        "A string used for user input",
        "A string used for naming variables",
        "A string that provides documentation for a module, function, class, or method"
      ],
      explanation: "A 'docstring' in Python is a string that provides documentation for a module, function, class, or method, helping developers understand its purpose and usage."
    },
    {
      index: 34,
      question: "What is the purpose of the 'help()' function in Python?",
      answer: "To display documentation and information about Python objects",
      options: [
        "To list all available functions",
        "To create a new function",
        "To display error messages",
        "To display documentation and information about Python objects"
      ],
      explanation: "The 'help()' function in Python is used to display documentation and information about Python objects, providing assistance in understanding their usage."
    },
    {
      index: 35,
      question: "What is a 'module search path' in Python?",
      answer: "A list of directories where Python looks for modules when importing",
      options: [
        "A list of Python modules",
        "A list of built-in functions",
        "A list of global variables",
        "A list of directories where Python looks for modules when importing"
      ],
      explanation: "A 'module search path' in Python is a list of directories where Python looks for modules when performing imports, allowing you to specify additional locations for module files."
    },
    {
      index: 36,
      question: "What is a 'site-packages' directory in Python?",
      answer: "A directory where third-party Python packages are installed",
      options: [
        "A directory containing Python modules",
        "A directory containing built-in modules",
        "A directory for system configuration files",
        "A directory where third-party Python packages are installed"
      ],
      explanation: "A 'site-packages' directory in Python is a directory where third-party Python packages are installed, making them accessible to all Python programs."
    },
    {
      index: 37,
      question: "What is a 'virtual environment' in Python?",
      answer: "An isolated Python environment that allows you to manage dependencies for a specific project",
      options: [
        "A Python module",
        "A Python package",
        "A directory on the filesystem",
        "An isolated Python environment that allows you to manage dependencies for a specific project"
      ],
      explanation: "A 'virtual environment' in Python is an isolated Python environment that allows you to manage dependencies for a specific project separately from the system-wide Python installation."
    },
    {
      index: 38,
      question: "What is the purpose of the 'pip' tool in Python?",
      answer: "To install, upgrade, and manage Python packages from the Python Package Index (PyPI)",
      options: [
        "To create virtual environments",
        "To list all installed packages",
        "To write Python code",
        "To install, upgrade, and manage Python packages from the Python Package Index (PyPI)"
      ],
      explanation: "The 'pip' tool in Python is used to install, upgrade, and manage Python packages from the Python Package Index (PyPI), simplifying the process of adding external libraries to your Python projects."
    },
    {
      index: 39,
      question: "What is a 'dependency' in the context of Python packages?",
      answer: "A package or module that is required by another package to function correctly",
      options: [
        "A package or module that is included with Python",
        "A package or module that is optional",
        "A package or module that is not recommended",
        "A package or module that is required by another package to function correctly"
      ],
      explanation: "A 'dependency' in the context of Python packages is a package or module that is required by another package to function correctly, ensuring that all necessary components are available."
    },
    {
      index: 40,
      question: "What is the purpose of the 'requirements.txt' file in a Python project?",
      answer: "To list the project's dependencies and their versions for easy installation",
      options: [
        "To store Python code",
        "To define global variables",
        "To list all available modules",
        "To list the project's dependencies and their versions for easy installation"
      ],
      explanation: "The 'requirements.txt' file in a Python project is used to list the project's dependencies and their versions, allowing for easy installation and ensuring that the correct packages are used."
    },
    {
      index: 41,
      question: "What is a 'wheel' file in Python packaging?",
      answer: "A binary distribution format that contains a Python package and its dependencies",
      options: [
        "A text file containing Python code",
        "A file format for storing images",
        "A compressed archive of Python code",
        "A binary distribution format that contains a Python package and its dependencies"
      ],
      explanation: "A 'wheel' file in Python packaging is a binary distribution format that contains a Python package and its dependencies, making it easy to distribute and install Python packages."
    },
    {
      index: 42,
      question: "What is the purpose of the 'setup.py' file in a Python package?",
      answer: "To specify package metadata and installation instructions",
      options: [
        "To define package-level variables",
        "To list all package dependencies",
        "To store Python code",
        "To specify package metadata and installation instructions"
      ],
      explanation: "The 'setup.py' file in a Python package is used to specify package metadata and installation instructions, providing information for packaging and distribution."
    },
    {
      index: 43,
      question: "What is the Python 'importlib' module used for?",
      answer: "To programmatically import and interact with Python modules and packages",
      options: [
        "To display module documentation",
        "To create new modules",
        "To list all available modules",
        "To programmatically import and interact with Python modules and packages"
      ],
      explanation: "The Python 'importlib' module is used to programmatically import and interact with Python modules and packages, allowing dynamic module loading and manipulation."
    },
    {
      index: 44,
      question: "What is 'namespace pollution' in Python?",
      answer: "When too many names are defined in a namespace, causing potential naming conflicts",
      options: [
        "When a namespace is empty",
        "When modules are imported",
        "When module names are too long",
        "When too many names are defined in a namespace, causing potential naming conflicts"
      ],
      explanation: " 'namespace pollution' in Python refers to the situation when too many names are defined in a namespace, potentially causing naming conflicts and making code harder to understand and maintain."
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
  