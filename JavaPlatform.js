



const DataSet = [
    {
      index: 1,
      question: "What does JDK stand for?",
      answer: "Java Development Kit",
      options: ["Java Development Kit", "Java Runtime Environment", "Java Virtual Machine", "Just Do It"],
      explanation: "JDK stands for Java Development Kit, which is a software package used for developing Java applications."
    },
    {
      index: 2,
      question: "What is the purpose of the JRE in the Java platform?",
      answer: "To run Java applications",
      options: ["To develop Java applications", "To compile Java code", "To write Java documentation", "To test Java applications"],
      explanation: "The JRE (Java Runtime Environment) is used to run Java applications on a computer."
    },
    {
      index: 3,
      question: "What is the primary function of the JVM?",
      answer: "To execute Java bytecode",
      options: ["To write Java code", "To compile Java code", "To develop Java applications", "To run JavaScript code"],
      explanation: "The JVM (Java Virtual Machine) is responsible for executing Java bytecode, making it platform-independent."
    },
    {
      index: 4,
      question: "Which component of the Java platform is responsible for converting Java source code into bytecode?",
      answer: "Java Compiler (javac)",
      options: ["JRE", "JVM", "Java Compiler (javac)", "JIT Compiler"],
      explanation: "The Java Compiler (javac) is responsible for compiling Java source code into bytecode."
    },
    {
      index: 5,
      question: "What does JIT stand for in the context of Java?",
      answer: "Just-In-Time",
      options: ["Java Integration Tool", "Just-In-Time", "Java Inheritance Technology", "Java Instance Tracker"],
      explanation: "JIT stands for Just-In-Time, which refers to the Just-In-Time compiler used by the JVM to improve the execution of Java bytecode."
    },
    {
      index: 6,
      question: "Which component of the Java platform is responsible for optimizing Java bytecode at runtime?",
      answer: "JIT Compiler",
      options: ["JRE", "JVM", "Java Compiler (javac)", "JIT Compiler"],
      explanation: "The JIT Compiler (Just-In-Time Compiler) is responsible for optimizing Java bytecode at runtime to improve execution speed."
    },
    {
      index: 7,
      question: "What is the purpose of the JDK in Java development?",
      answer: "To provide tools for Java development",
      options: ["To run Java applications", "To optimize Java bytecode", "To write Java documentation", "To test Java applications"],
      explanation: "The JDK (Java Development Kit) provides tools and libraries for Java development, including the Java compiler (javac) and other development utilities."
    },
    {
      index: 8,
      question: "Which of the following represents the Java bytecode format?",
      answer: ".class files",
      options: [".java files", ".exe files", ".jar files", ".class files"],
      explanation: "Java bytecode is stored in .class files, which are produced by compiling .java source files."
    },
    {
      index: 9,
      question: "What is the purpose of the JRE in Java development?",
      answer: "To execute Java applications",
      options: ["To write Java code", "To compile Java code", "To develop Java applications", "To run JavaScript code"],
      explanation: "In Java development, the JRE is used to run Java applications during testing and deployment."
    },
    {
      index: 10,
      question: "Which component of the Java platform is responsible for managing memory and resources during Java application execution?",
      answer: "JVM (Java Virtual Machine)",
      options: ["JRE", "JVM (Java Virtual Machine)", "Java Compiler (javac)", "JIT Compiler"],
      explanation: "The JVM (Java Virtual Machine) manages memory and resources for Java applications, ensuring efficient execution."
    },
    {
      index: 11,
      question: "What is the purpose of the JIT compiler in the JVM?",
      answer: "To improve the performance of Java applications",
      options: ["To write Java code", "To compile Java code", "To develop Java applications", "To run JavaScript code"],
      explanation: "The JIT compiler in the JVM is responsible for dynamically optimizing Java bytecode to improve the performance of Java applications."
    },
    {
      index: 12,
      question: "Which of the following is responsible for translating Java source code into bytecode?",
      answer: "Java Compiler (javac)",
      options: ["JVM (Java Virtual Machine)", "JRE", "JIT Compiler", "Java Compiler (javac)"],
      explanation: "The Java Compiler (javac) translates Java source code into bytecode, which can be executed by the JVM."
    },
    {
      index: 13,
      question: "What is the purpose of the JVM's garbage collector?",
      answer: "To reclaim memory used by objects no longer in use",
      options: ["To write Java code", "To compile Java code", "To develop Java applications", "To run JavaScript code"],
      explanation: "The garbage collector in the JVM automatically reclaims memory used by objects that are no longer referenced, preventing memory leaks."
    },
    {
      index: 14,
      question: "Which component of the Java platform is responsible for executing Java applications?",
      answer: "JVM (Java Virtual Machine)",
      options: ["JRE", "Java Compiler (javac)", "JIT Compiler", "JVM (Java Virtual Machine)"],
      explanation: "The JVM (Java Virtual Machine) is responsible for executing Java applications by interpreting or compiling Java bytecode."
    },
    {
      index: 15,
      question: "What is the primary role of the JDK in Java development?",
      answer: "To provide a development environment",
      options: ["To execute Java applications", "To optimize Java bytecode", "To write Java documentation", "To test Java applications"],
      explanation: "The JDK provides a complete development environment for Java developers, including tools and libraries for writing and testing Java code."
    },
    {
      index: 16,
      question: "What does JRE stand for?",
      answer: "Java Runtime Environment",
      options: ["Java Development Kit", "Java Runtime Environment", "Java Virtual Machine", "Just Run Everything"],
      explanation: "JRE stands for Java Runtime Environment, which is used to run Java applications."
    },
    {
      index: 17,
      question: "Which component of the Java platform is responsible for executing Java bytecode?",
      answer: "JVM (Java Virtual Machine)",
      options: ["JRE", "Java Compiler (javac)", "JIT Compiler", "JVM (Java Virtual Machine)"],
      explanation: "The JVM (Java Virtual Machine) executes Java bytecode, making it platform-independent."
    },
    {
      index: 18,
      question: "What is the primary role of the JRE in the Java platform?",
      answer: "To run Java applications",
      options: ["To develop Java applications", "To compile Java code", "To write Java documentation", "To test Java applications"],
      explanation: "The primary role of the JRE is to run Java applications on a computer."
    },
    {
      index: 19,
      question: "Which component of the Java platform is responsible for translating Java source code into bytecode?",
      answer: "Java Compiler (javac)",
      options: ["JRE", "JVM (Java Virtual Machine)", "JIT Compiler", "Java Compiler (javac)"],
      explanation: "The Java Compiler (javac) translates Java source code into bytecode that can be executed by the JVM."
    },
    {
      index: 20,
      question: "What is the primary purpose of the JIT compiler in the JVM?",
      answer: "To improve runtime performance",
      options: ["To write Java code", "To compile Java code", "To develop Java applications", "To run JavaScript code"],
      explanation: "The JIT compiler in the JVM aims to improve the runtime performance of Java applications by optimizing bytecode."
    },
    {
      index: 21,
      question: "Which component of the Java platform is responsible for managing memory and resources during Java application execution?",
      answer: "JVM (Java Virtual Machine)",
      options: ["JRE", "Java Compiler (javac)", "JIT Compiler", "JVM (Java Virtual Machine)"],
      explanation: "The JVM (Java Virtual Machine) manages memory and resources for Java applications, ensuring efficient execution."
    },
    {
      index: 22,
      question: "What is the purpose of the JDK in Java development?",
      answer: "To provide tools and libraries for development",
      options: ["To run Java applications", "To optimize Java bytecode", "To write Java documentation", "To test Java applications"],
      explanation: "The JDK provides a comprehensive set of tools and libraries for Java development."
    },
    {
      index: 23,
      question: "What does the JIT compiler do in the JVM?",
      answer: "It compiles bytecode into native machine code at runtime",
      options: ["It compiles Java source code into bytecode", "It interprets bytecode directly", "It compiles bytecode into native machine code at runtime", "It performs code analysis"],
      explanation: "The JIT compiler in the JVM compiles bytecode into native machine code at runtime, improving performance."
    },
    {
      index: 24,
      question: "Which component of the Java platform is responsible for translating Java source code into bytecode?",
      answer: "Java Compiler (javac)",
      options: ["JRE", "JVM (Java Virtual Machine)", "JIT Compiler", "Java Compiler (javac)"],
      explanation: "The Java Compiler (javac) translates Java source code into bytecode, which can be executed by the JVM."
    },
    {
      index: 25,
      question: "What is the purpose of the JVM in Java development?",
      answer: "To execute Java applications",
      options: ["To develop Java applications", "To optimize Java bytecode", "To write Java documentation", "To test Java applications"],
      explanation: "The JVM (Java Virtual Machine) is responsible for executing Java applications by interpreting or compiling Java bytecode."
    },
    {
      index: 26,
      question: "Which component of the Java platform is responsible for managing memory and resources during Java application execution?",
      answer: "JVM (Java Virtual Machine)",
      options: ["JRE", "Java Compiler (javac)", "JIT Compiler", "JVM (Java Virtual Machine)"],
      explanation: "The JVM (Java Virtual Machine) manages memory and resources for Java applications, ensuring efficient execution."
    },
    {
      index: 27,
      question: "What is the primary role of the JRE in the Java platform?",
      answer: "To run Java applications",
      options: ["To develop Java applications", "To compile Java code", "To write Java documentation", "To test Java applications"],
      explanation: "The primary role of the JRE is to run Java applications on a computer."
    },
    {
      index: 28,
      question: "What is the purpose of the JDK in Java development?",
      answer: "To provide tools and libraries for development",
      options: ["To run Java applications", "To optimize Java bytecode", "To write Java documentation", "To test Java applications"],
      explanation: "The JDK provides a comprehensive set of tools and libraries for Java development."
    },
    {
      index: 29,
      question: "What is the primary purpose of the JIT compiler in the JVM?",
      answer: "To improve runtime performance",
      options: ["To write Java code", "To compile Java code", "To develop Java applications", "To run JavaScript code"],
      explanation: "The JIT compiler in the JVM aims to improve the runtime performance of Java applications by optimizing bytecode."
    },
    {
      index: 30,
      question: "What does the JIT compiler do in the JVM?",
      answer: "It compiles bytecode into native machine code at runtime",
      options: ["It compiles Java source code into bytecode", "It interprets bytecode directly", "It compiles bytecode into native machine code at runtime", "It performs code analysis"],
      explanation: "The JIT compiler in the JVM compiles bytecode into native machine code at runtime, improving performance."
    },
    {
        index: 31,
        question: "Which tool is used to create JAR (Java Archive) files in Java development?",
        answer: "jar",
        options: ["javac", "javap", "jar", "javadoc"],
        explanation: "The 'jar' tool is used to create and manage JAR files in Java development."
      },
      {
        index: 32,
        question: "What is the purpose of the 'javap' command in Java development?",
        answer: "To disassemble Java class files",
        options: ["To compile Java source code", "To create JAR files", "To run Java applications", "To write Java documentation"],
        explanation: "The 'javap' command is used to disassemble Java class files and view their contents."
      },
      {
        index: 33,
        question: "What does AWT stand for in the context of Java?",
        answer: "Abstract Window Toolkit",
        options: ["Advanced Window Technology", "Application Window Toolkit", "Abstract Window Toolkit", "Active Window Toolset"],
        explanation: "AWT stands for Abstract Window Toolkit, a graphical user interface (GUI) library in Java."
      },
      {
        index: 34,
        question: "Which Java library is commonly used for creating platform-independent GUI applications?",
        answer: "Swing",
        options: ["JavaFX", "AWT", "Swing", "JavaUI"],
        explanation: "Swing is a Java library for creating platform-independent GUI applications."
      },
      {
        index: 35,
        question: "What is the purpose of the 'java' command in Java development?",
        answer: "To run Java applications",
        options: ["To develop Java applications", "To compile Java code", "To create JAR files", "To write Java documentation"],
        explanation: "The 'java' command is used to execute Java applications."
      },
      {
        index: 36,
        question: "Which Java library is commonly used for building rich internet applications (RIAs)?",
        answer: "JavaFX",
        options: ["Swing", "JavaFX", "AWT", "JavaUI"],
        explanation: "JavaFX is a Java library commonly used for building rich internet applications (RIAs)."
      },
      {
        index: 37,
        question: "What is the purpose of the 'javadoc' tool in Java development?",
        answer: "To generate documentation from source code comments",
        options: ["To compile Java code", "To run Java applications", "To create JAR files", "To disassemble Java class files"],
        explanation: "The 'javadoc' tool is used to generate documentation from source code comments in Java."
      },
      {
        index: 38,
        question: "Which Java library provides support for 2D and 3D graphics?",
        answer: "Java3D",
        options: ["AWT", "JavaFX", "Swing", "Java3D"],
        explanation: "Java3D is a Java library that provides support for both 2D and 3D graphics."
      },
      {
        index: 39,
        question: "What is the purpose of the 'javah' tool in Java development?",
        answer: "To generate C header files from Java class files",
        options: ["To compile Java code", "To run Java applications", "To create JAR files", "To disassemble Java class files"],
        explanation: "The 'javah' tool is used to generate C header files from Java class files for native methods."
      },
      {
        index: 40,
        question: "Which component of the Java platform provides cryptographic functionality?",
        answer: "Java Cryptography Extension (JCE)",
        options: ["JavaFX", "AWT", "Swing", "Java Cryptography Extension (JCE)"],
        explanation: "The Java Cryptography Extension (JCE) provides cryptographic functionality in the Java platform."
      },
      {
        index: 41,
        question: "What is the primary purpose of the 'appletviewer' tool in Java development?",
        answer: "To run Java applets outside a web browser",
        options: ["To compile Java code", "To create JAR files", "To disassemble Java class files", "To generate documentation from source code comments"],
        explanation: "The 'appletviewer' tool is used to run Java applets outside a web browser for testing and development."
      },
      {
        index: 42,
        question: "Which Java library is commonly used for developing cross-platform mobile applications?",
        answer: "Java ME (Micro Edition)",
        options: ["JavaFX", "Java ME (Micro Edition)", "JavaSE (Standard Edition)", "Java EE (Enterprise Edition)"],
        explanation: "Java ME (Micro Edition) is used for developing cross-platform mobile applications."
      },
      {
        index: 43,
        question: "What is the purpose of the 'jdeps' tool in Java development?",
        answer: "To analyze class file dependencies",
        options: ["To run Java applications", "To create JAR files", "To generate documentation from source code comments", "To disassemble Java class files"],
        explanation: "The 'jdeps' tool is used to analyze class file dependencies in Java applications."
      },
      {
        index: 44,
        question: "Which component of the Java platform is responsible for managing database connections?",
        answer: "JDBC (Java Database Connectivity)",
        options: ["JRE", "JVM (Java Virtual Machine)", "JIT Compiler", "JDBC (Java Database Connectivity)"],
        explanation: "JDBC (Java Database Connectivity) is responsible for managing database connections in Java applications."
      },
      {
        index: 45,
        question: "What is the purpose of the 'javafxpackager' tool in Java development?",
        answer: "To package JavaFX applications for distribution",
        options: ["To run Java applications", "To compile Java code", "To generate documentation from source code comments", "To analyze class file dependencies"],
        explanation: "The 'javafxpackager' tool is used to package JavaFX applications for distribution."
      }
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
  