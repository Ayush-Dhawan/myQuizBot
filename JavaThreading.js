



const DataSet = [
    {
      index: 0,
      question: "What is a thread in Java?",
      answer: "A lightweight sub-process that shares the same memory space as the parent process",
      options: [
        "A separate process that runs independently of the parent process",
        "A heavy-weight process that runs independently",
        "A lightweight sub-process that shares the same memory space as the parent process",
        "A graphical user interface element"
      ],
      explanation: "A thread in Java is a lightweight sub-process that shares the same memory space as the parent process, allowing for concurrent execution."
    },
    {
      index: 1,
      question: "What is the main advantage of multithreading in Java?",
      answer: "Improved program responsiveness and performance through parallelism",
      options: [
        "Reduced memory usage",
        "Simplified code structure",
        "Improved program responsiveness and performance through parallelism",
        "Enhanced error handling"
      ],
      explanation: "Multithreading in Java can improve program responsiveness and performance by allowing multiple tasks to run concurrently, utilizing parallelism."
    },
    {
      index: 2,
      question: "How can you create a thread in Java?",
      answer: "By extending the Thread class or implementing the Runnable interface",
      options: [
        "By using the 'newThread()' method",
        "By calling the 'start()' method",
        "By extending the Thread class or implementing the Runnable interface",
        "By using the 'run()' method"
      ],
      explanation: "You can create a thread in Java by either extending the Thread class or implementing the Runnable interface and then calling the 'start()' method."
    },
    {
      index: 3,
      question: "What is the difference between a thread and a process in Java?",
      answer: "Threads share the same memory space, while processes have their own separate memory space",
      options: [
        "Threads are faster than processes",
        "Threads have their own separate memory space",
        "Processes share the same memory space",
        "Threads and processes are the same in Java"
      ],
      explanation: "Threads in Java share the same memory space, allowing them to communicate and interact with each other, while processes have their own separate memory space."
    },
    {
      index: 4,
      question: "What is synchronization in Java?",
      answer: "A mechanism to control access to shared resources by multiple threads",
      options: [
        "A method for terminating threads",
        "A way to create new threads",
        "A mechanism to control access to shared resources by multiple threads",
        "A way to pause thread execution"
      ],
      explanation: "Synchronization in Java is a mechanism that allows you to control access to shared resources by multiple threads, preventing concurrent access problems."
    },
    {
      index: 5,
      question: "What is a deadlock in Java threading?",
      answer: "A situation where two or more threads are unable to proceed because they are each waiting for the other to release a resource",
      options: [
        "A situation where a thread is terminated abruptly",
        "A situation where a thread runs forever without completing",
        "A situation where two or more threads are unable to proceed because they are each waiting for the other to release a resource",
        "A situation where a thread consumes excessive memory"
      ],
      explanation: "A deadlock in Java threading is a situation where two or more threads are unable to proceed because they are each waiting for the other to release a resource, causing a standstill."
    },
    {
      index: 6,
      question: "What is the 'volatile' keyword used for in Java?",
      answer: "To indicate that a variable's value may be changed by multiple threads simultaneously",
      options: [
        "To specify the default value of a variable",
        "To make a variable constant",
        "To indicate that a variable cannot be modified",
        "To indicate that a variable's value may be changed by multiple threads simultaneously"
      ],
      explanation: "The 'volatile' keyword in Java is used to indicate that a variable's value may be changed by multiple threads simultaneously, ensuring visibility of changes."
    },
    {
      index: 7,
      question: "What is a race condition in Java?",
      answer: "A situation where the behavior of a program depends on the relative timing of events in multiple threads",
      options: [
        "A situation where multiple threads are synchronized",
        "A situation where a thread is waiting indefinitely",
        "A situation where the behavior of a program depends on the relative timing of events in multiple threads",
        "A situation where threads are executing the same code"
      ],
      explanation: "A race condition in Java is a situation where the behavior of a program depends on the relative timing of events in multiple threads, leading to unexpected outcomes."
    },
    {
      index: 8,
      question: "What is the 'join' method in Java threading?",
      answer: "A method used to wait for a thread to complete its execution and rejoin the main thread",
      options: [
        "A method for starting a new thread",
        "A method for terminating a thread",
        "A method for pausing a thread",
        "A method used to wait for a thread to complete its execution and rejoin the main thread"
      ],
      explanation: "The 'join' method in Java threading is used to wait for a thread to complete its execution and rejoin the main thread, allowing for synchronization."
    },
    {
      index: 9,
      question: "What is a thread pool in Java?",
      answer: "A group of pre-created threads that can be reused for executing tasks",
      options: [
        "A pool of memory allocated to each thread",
        "A group of threads created dynamically as needed",
        "A group of pre-created threads that can be reused for executing tasks",
        "A collection of threads used for debugging"
      ],
      explanation: "A thread pool in Java is a group of pre-created threads that can be reused for executing tasks, improving performance and reducing thread creation overhead."
    },
    {
      index: 10,
      question: "What is the purpose of the 'wait' and 'notify' methods in Java threading?",
      answer: "To coordinate the execution of threads and allow them to communicate",
      options: [
        "To terminate threads",
        "To pause threads indefinitely",
        "To coordinate the execution of threads and allow them to communicate",
        "To synchronize thread execution"
      ],
      explanation: "The 'wait' and 'notify' methods in Java threading are used to coordinate the execution of threads and allow them to communicate and synchronize."
    },
    {
      index: 11,
      question: "What is a thread-safe class in Java?",
      answer: "A class designed to be safely used by multiple threads without causing data corruption",
      options: [
        "A class that cannot be used by multiple threads",
        "A class that uses threads extensively",
        "A class that is used for thread creation",
        "A class designed to be safely used by multiple threads without causing data corruption"
      ],
      explanation: "A thread-safe class in Java is designed to be safely used by multiple threads without causing data corruption or synchronization issues."
    },
    {
      index: 12,
      question: "What is the purpose of the 'yield' method in Java threading?",
      answer: "To voluntarily give up the CPU and allow other threads to run",
      options: [
        "To terminate a thread",
        "To forcibly stop other threads",
        "To pause a thread indefinitely",
        "To voluntarily give up the CPU and allow other threads to run"
      ],
      explanation: "The 'yield' method in Java threading is used to voluntarily give up the CPU and allow other threads to run, promoting fair thread scheduling."
    },
    {
      index: 13,
      question: "What is a daemon thread in Java?",
      answer: "A background thread that is automatically terminated when all non-daemon threads have exited",
      options: [
        "A thread with high priority",
        "A thread that cannot be terminated",
        "A thread that runs forever",
        "A background thread that is automatically terminated when all non-daemon threads have exited"
      ],
      explanation: "A daemon thread in Java is a background thread that is automatically terminated when all non-daemon threads have exited, ensuring they don't keep the program running."
    },
    {
      index: 14,
      question: "What is the purpose of the 'interrupt' method in Java?",
      answer: "To interrupt the execution of a thread and raise an InterruptedException",
      options: [
        "To pause a thread",
        "To terminate a thread",
        "To restart a thread",
        "To interrupt the execution of a thread and raise an InterruptedException"
      ],
      explanation: "The 'interrupt' method in Java is used to interrupt the execution of a thread and raise an InterruptedException, allowing for graceful thread termination."
    },
    {
      index: 15,
      question: "What is the Java Memory Model (JMM)?",
      answer: "A specification that defines how threads in Java interact with memory",
      options: [
        "A built-in memory management system",
        "A specification for allocating memory to threads",
        "A set of memory-related classes in Java",
        "A specification that defines how threads in Java interact with memory"
      ],
      explanation: "The Java Memory Model (JMM) is a specification that defines how threads in Java interact with memory, ensuring proper synchronization and visibility."
    },
    {
      index: 16,
      question: "What is thread-local storage in Java?",
      answer: "A mechanism to create thread-specific variables that are not shared between threads",
      options: [
        "A way to share variables among all threads",
        "A way to allocate memory for threads",
        "A mechanism to create thread-specific variables that are not shared between threads",
        "A mechanism for thread synchronization"
      ],
      explanation: "Thread-local storage in Java is a mechanism to create thread-specific variables that are not shared between threads, providing isolation."
    },
    {
      index: 17,
      question: "What is the purpose of the 'synchronized' keyword in Java?",
      answer: "To create synchronized blocks or methods to control access to shared resources",
      options: [
        "To define the main method of a class",
        "To declare a variable as constant",
        "To prevent the creation of threads",
        "To create synchronized blocks or methods to control access to shared resources"
      ],
      explanation: "The 'synchronized' keyword in Java is used to create synchronized blocks or methods to control access to shared resources and prevent concurrent access problems."
    },
    {
      index: 18,
      question: "What is the 'Thread.sleep()' method used for in Java?",
      answer: "To pause the execution of the current thread for a specified duration",
      options: [
        "To terminate the current thread",
        "To start a new thread",
        "To pause all threads in the program",
        "To pause the execution of the current thread for a specified duration"
      ],
      explanation: "The 'Thread.sleep()' method in Java is used to pause the execution of the current thread for a specified duration, allowing for time-based operations."
    },
    {
      index: 19,
      question: "What is a thread dump in Java?",
      answer: "A snapshot of the current state of all threads in a Java process",
      options: [
        "A log file for debugging",
        "A memory allocation report",
        "A snapshot of CPU usage",
        "A snapshot of the current state of all threads in a Java process"
      ],
      explanation: "A thread dump in Java is a snapshot of the current state of all threads in a Java process, useful for diagnosing threading issues."
    },
    {
      index: 20,
      question: "What is the purpose of the 'ThreadLocal' class in Java?",
      answer: "To create thread-local variables that are not shared between threads",
      options: [
        "To create global variables",
        "To define thread priorities",
        "To create shared variables among all threads",
        "To create thread-local variables that are not shared between threads"
      ],
      explanation: "The 'ThreadLocal' class in Java is used to create thread-local variables that are not shared between threads, providing isolation."
    },
    {
      index: 21,
      question: "What is the concept of thread starvation in Java?",
      answer: "A situation where a thread is unable to gain access to a shared resource and is repeatedly denied execution",
      options: [
        "A situation where a thread consumes excessive memory",
        "A situation where all threads execute in parallel",
        "A situation where a thread is always given the highest priority",
        "A situation where a thread is unable to gain access to a shared resource and is repeatedly denied execution"
      ],
      explanation: "Thread starvation in Java is a situation where a thread is unable to gain access to a shared resource and is repeatedly denied execution, potentially causing performance issues."
    },
    {
      index: 22,
      question: "What is the purpose of the 'ThreadGroup' class in Java?",
      answer: "To group threads together for easier management and control",
      options: [
        "To create new threads",
        "To define thread priorities",
        "To allocate memory for threads",
        "To group threads together for easier management and control"
      ],
      explanation: "The 'ThreadGroup' class in Java is used to group threads together for easier management and control, providing a hierarchical structure."
    },
    {
      index: 23,
      question: "What is the 'ConcurrentHashMap' class in Java?",
      answer: "A thread-safe implementation of the 'Map' interface that allows concurrent access by multiple threads",
      options: [
        "A class for managing thread pools",
        "A class for managing thread synchronization",
        "A class for creating new threads",
        "A thread-safe implementation of the 'Map' interface that allows concurrent access by multiple threads"
      ],
      explanation: "The 'ConcurrentHashMap' class in Java is a thread-safe implementation of the 'Map' interface that allows concurrent access by multiple threads without blocking."
    },
    {
      index: 24,
      question: "What is the 'ReentrantLock' class in Java?",
      answer: "A class that provides a more flexible alternative to synchronized blocks for controlling access to shared resources",
      options: [
        "A class for managing thread priorities",
        "A class for terminating threads",
        "A class for creating new threads",
        "A class that provides a more flexible alternative to synchronized blocks for controlling access to shared resources"
      ],
      explanation: "The 'ReentrantLock' class in Java provides a more flexible alternative to synchronized blocks for controlling access to shared resources, offering features like fairness and deadlock detection."
    },
    {
      index: 25,
      question: "What is the 'CountDownLatch' class in Java?",
      answer: "A synchronization aid that allows one or more threads to wait until a set of operations in other threads completes",
      options: [
        "A class for counting threads",
        "A class for pausing threads",
        "A class for creating threads",
        "A synchronization aid that allows one or more threads to wait until a set of operations in other threads completes"
      ],
      explanation: "The 'CountDownLatch' class in Java is a synchronization aid that allows one or more threads to wait until a set of operations in other threads completes, useful for coordination."
    },
    {
      index: 26,
      question: "What is thread affinity in Java?",
      answer: "The concept of binding a thread to a specific CPU core for improved performance",
      options: [
        "The concept of having threads with high affinity",
        "The concept of sharing CPU cores among threads",
        "The concept of thread priority",
        "The concept of binding a thread to a specific CPU core for improved performance"
      ],
      explanation: "Thread affinity in Java is the concept of binding a thread to a specific CPU core, which can lead to improved performance by reducing cache misses."
    },
    {
      index: 27,
      question: "What is the 'Phaser' class in Java?",
      answer: "A reusable synchronization barrier for controlling the execution of threads in phases",
      options: [
        "A class for terminating threads",
        "A class for pausing threads",
        "A class for counting threads",
        "A reusable synchronization barrier for controlling the execution of threads in phases"
      ],
      explanation: "The 'Phaser' class in Java is a reusable synchronization barrier for controlling the execution of threads in phases, allowing for coordinated progression."
    },
    {
      index: 28,
      question: "What is the purpose of the 'Executor' framework in Java?",
      answer: "To simplify the management of thread execution by decoupling task submission from task execution",
      options: [
        "To create new threads",
        "To terminate threads",
        "To pause threads",
        "To simplify the management of thread execution by decoupling task submission from task execution"
      ],
      explanation: "The 'Executor' framework in Java simplifies the management of thread execution by decoupling task submission from task execution, providing a higher-level abstraction for concurrency."
    },
    {
      index: 29,
      question: "What is the 'ForkJoinPool' class in Java?",
      answer: "A specialized thread pool for parallelizing recursive tasks, particularly useful for divide-and-conquer algorithms",
      options: [
        "A class for thread synchronization",
        "A class for creating threads",
        "A class for managing thread priorities",
        "A specialized thread pool for parallelizing recursive tasks, particularly useful for divide-and-conquer algorithms"
      ],
      explanation: "The 'ForkJoinPool' class in Java is a specialized thread pool designed for parallelizing recursive tasks, making it useful for divide-and-conquer algorithms."
    },
    {
      index: 30,
      question: "What is the purpose of the 'CyclicBarrier' class in Java?",
      answer: "A synchronization aid that allows a set of threads to wait for each other to reach a common barrier point",
      options: [
        "A class for counting threads",
        "A class for pausing threads",
        "A class for creating threads",
        "A synchronization aid that allows a set of threads to wait for each other to reach a common barrier point"
      ],
      explanation: "The 'CyclicBarrier' class in Java is a synchronization aid that allows a set of threads to wait for each other to reach a common barrier point, useful for tasks that need to synchronize at certain points."
    },
    {
      index: 31,
      question: "What is the purpose of the 'Semaphore' class in Java?",
      answer: "A synchronization primitive that restricts the number of threads that can access a resource concurrently",
      options: [
        "A class for counting threads",
        "A class for creating threads",
        "A class for managing thread priorities",
        "A synchronization primitive that restricts the number of threads that can access a resource concurrently"
      ],
      explanation: "The 'Semaphore' class in Java is a synchronization primitive that restricts the number of threads that can access a resource concurrently, controlling access to shared resources."
    },
    {
      index: 32,
      question: "What is the 'ThreadMXBean' interface in Java?",
      answer: "An interface for monitoring and managing threads in a Java virtual machine",
      options: [
        "An interface for creating threads",
        "An interface for terminating threads",
        "An interface for thread synchronization",
        "An interface for monitoring and managing threads in a Java virtual machine"
      ],
      explanation: "The 'ThreadMXBean' interface in Java provides methods for monitoring and managing threads within a Java virtual machine, offering insights into thread behavior."
    },
    {
      index: 33,
      question: "What is the purpose of the 'ThreadLocalRandom' class in Java?",
      answer: "A class for generating random numbers in a thread-safe manner without contention",
      options: [
        "A class for generating random numbers with high contention",
        "A class for creating threads",
        "A class for managing thread priorities",
        "A class for generating random numbers in a thread-safe manner without contention"
      ],
      explanation: "The 'ThreadLocalRandom' class in Java is used for generating random numbers in a thread-safe manner without contention, suitable for multithreaded applications."
    },
    {
      index: 34,
      question: "What is the purpose of the 'Exchanger' class in Java?",
      answer: "A synchronization point at which threads can exchange objects in pairs",
      options: [
        "A class for counting threads",
        "A class for creating threads",
        "A class for managing thread priorities",
        "A synchronization point at which threads can exchange objects in pairs"
      ],
      explanation: "The 'Exchanger' class in Java provides a synchronization point at which threads can exchange objects in pairs, facilitating communication between threads."
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
  