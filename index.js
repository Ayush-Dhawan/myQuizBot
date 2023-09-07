


const Searching = [
    {
        index: 0,
        question: "What is the time complexity of binary search in C++?",
        answer: "O(logn)",
        options: ["O(nlogn)", "O(n)", "O(logn)", "O(n^2)"],
        explanation: "Binary search in C++ has a time complexity of O(log n) as it efficiently halves the search space in each iteration."
    },
    {
        index: 1,
        question: "Which search algorithm is suitable for a sorted Searching Array in Java?",
        answer: "Binary Search",
        options: ["Linear Search", "Binary Search", "Hashing", "Quick Sort"],
        explanation: "Binary search is ideal for Searching in a sorted Searching Array in Java as it utilizes the sorted order to quickly locate elements."
    },
    {
        index: 2,
        question: "In Python, what is the key data structure used in binary search?",
        answer: "List",
        options: ["Searching Array", "List", "Set", "Dictionary"],
        explanation: "Binary search in Python is typically performed on a sorted list for efficient Searching."
    },
    {
        index: 3,
        question: "What is the worst-case time complexity of linear search in C++?",
        answer: "O(n)",
        options: ["O(logn)", "O(n)", "O(n^2)", "O(1)"],
        explanation: "Linear search in C++ has a worst-case time complexity of O(n) as it may need to examine every element in the worst scenario."
    },
    {
        index: 4,
        question: "Which search algorithm is commonly used for text search in Python?",
        answer: "Substring Search",
        options: ["Binary Search", "Linear Search", "Substring Search", "Hashing"],
        explanation: "Substring search is frequently employed in Python for finding occurrences of one string within another."
    },
    {
        index: 5,
        question: "What is the primary advantage of binary search over linear search in Java?",
        answer: "Faster for large datasets",
        options: ["Less memory usage", "Faster for large datasets", "Simplicity of implementation", "Suitable for unsorted Searching Arrays"],
        explanation: "Binary search is advantageous in Java for large datasets because it reduces search space exponentially with each comparison."
    },
    {
        index: 6,
        question: "In Python, what is the time complexity of Searching for an element in a set?",
        answer: "O(1)",
        options: ["O(n)", "O(logn)", "O(1)", "O(n^2)"],
        explanation: "Searching for an element in a set in Python is highly efficient with a constant time complexity of O(1)."
    },
    {
        index: 7,
        question: "Which search algorithm is most suitable for a binary search tree (BST) in C++?",
        answer: "In-order traversal",
        options: ["Linear Search", "In-order traversal", "Depth-First Search", "Breadth-First Search"],
        explanation: "In-order traversal is commonly used for Searching in a binary search tree (BST) in C++."
    },
    {
        index: 8,
        question: "What is the space complexity of linear search in Java?",
        answer: "O(1)",
        options: ["O(logn)", "O(n)", "O(1)", "O(n^2)"],
        explanation: "Linear search in Java has a space complexity of O(1) as it uses a fixed amount of memory regardless of the input size."
    },
    {
        index: 9,
        question: "In Python, which search technique is applied in a binary heap data structure?",
        answer: "Heapify",
        options: ["Quick Search", "Heapify", "Binary Search", "Breadth-First Search"],
        explanation: "Heapify is used in Python to build and maintain a binary heap, which is often used in priority queue implementations."
    },
    {
        index: 10,
        question: "What is the time complexity of linear search in C++ when Searching for the first occurrence?",
        answer: "O(n)",
        options: ["O(logn)", "O(n)", "O(n^2)", "O(1)"],
        explanation: "When Searching for the first occurrence in C++, linear search has a time complexity of O(n) as it may require scanning the entire Searching Array."
    },
    {
        index: 11,
        question: "Which Searching algorithm is commonly employed in Java for Searching through sorted databases?",
        answer: "Binary Search",
        options: ["Linear Search", "Binary Search", "Hashing", "Exponential Search"],
        explanation: "Binary search is widely used in Java for efficiently Searching sorted databases."
    },
    {
        index: 12,
        question: "In Python, what is the time complexity of Searching for a key in a dictionary?",
        answer: "O(1)",
        options: ["O(n)", "O(logn)", "O(1)", "O(n^2)"],
        explanation: "Searching for a key in a dictionary in Python has a constant time complexity of O(1) on average due to hash table indexing."
    },
    {
        index: 13,
        question: "What is the time complexity of binary search in C++ for an unsorted Searching Array?",
        answer: "O(nlogn)",
        options: ["O(logn)", "O(n)", "O(nlogn)", "O(n^2)"],
        explanation: "Binary search in C++ is not efficient for unsorted Searching Arrays, and its time complexity becomes O(nlogn) when sorting is required."
    },
    {
        index: 14,
        question: "In C++, which algorithm can be used for Searching in an adjacency list representation of a graph?",
        answer: "Depth-First Search (DFS)",
        options: ["Breadth-First Search (BFS)", "Linear Search", "Depth-First Search (DFS)", "Binary Search"],
        explanation: "DFS is often applied in C++ for Searching in an adjacency list representation of a graph."
    },
    {
        index: 15,
        question: "What is the time complexity of linear search in Java when the target element is at the beginning of the Searching Array?",
        answer: "O(1)",
        options: ["O(logn)", "O(n)", "O(1)", "O(n^2)"],
        explanation: "When the target element is at the beginning of the Searching Array, linear search in Java has a best-case time complexity of O(1)."
    },
    {
        index: 16,
        question: "In Python, which search technique is used to implement the 'in' operator for lists?",
        answer: "Linear Search",
        options: ["Binary Search", "Linear Search", "Hashing", "Exponential Search"],
        explanation: "The 'in' operator for lists in Python is implemented using linear search."
    },
    {
        index: 17,
        question: "What is the primary limitation of binary search in C++?",
        answer: "Requires a sorted Searching Array",
        options: ["Inefficient for large datasets", "Requires a sorted Searching Array", "Complex implementation", "Not suitable for strings"],
        explanation: "Binary search in C++ requires a sorted Searching Array as a prerequisite, limiting its applicability."
    },
    {
        index: 18,
        question: "In Java, which search algorithm is used for Searching in a binary search tree (BST)?",
        answer: "Depth-First Search (DFS)",
        options: ["Breadth-First Search (BFS)", "Linear Search", "Depth-First Search (DFS)", "Binary Search"],
        explanation: "DFS is commonly used in Java for Searching in a binary search tree (BST)."
    },
    {
        index: 19,
        question: "What is the time complexity of binary search in Python when using the 'bisect' module to search in a sorted list?",
        answer: "O(logn)",
        options: ["O(nlogn)", "O(n)", "O(logn)", "O(n^2)"],
        explanation: "Using the 'bisect' module in Python for binary search in a sorted list results in a time complexity of O(log n)."
    },
    {
        index: 20,
        question: "In C++, which search algorithm is suitable for finding the shortest path in a weighted graph?",
        answer: "Dijkstra's Algorithm",
        options: ["Breadth-First Search (BFS)", "Linear Search", "Depth-First Search (DFS)", "Dijkstra's Algorithm"],
        explanation: "Dijkstra's Algorithm is commonly used in C++ to find the shortest path in a weighted graph."
    },
    {
        index: 21,
        question: "What is the time complexity of linear search in Python for an unsorted list?",
        answer: "O(n)",
        options: ["O(logn)", "O(n)", "O(n^2)", "O(1)"],
        explanation: "In Python, linear search has a time complexity of O(n) for unsorted lists as it may require checking all elements."
    },
    {
        index: 22,
        question: "In Java, which search technique is often used for Searching through a hash table?",
        answer: "Hashing",
        options: ["Linear Search", "Binary Search", "Hashing", "Exponential Search"],
        explanation: "Hashing is commonly employed in Java for Searching through a hash table."
    },
    {
        index: 23,
        question: "What is the space complexity of binary search in C++?",
        answer: "O(1)",
        options: ["O(logn)", "O(n)", "O(1)", "O(n^2)"],
        explanation: "Binary search in C++ has a space complexity of O(1) as it uses a constant amount of memory."
    },
    {
        index: 24,
        question: "In Python, which search algorithm is used for finding the shortest path in an unweighted graph?",
        answer: "Breadth-First Search (BFS)",
        options: ["Breadth-First Search (BFS)", "Depth-First Search (DFS)", "Binary Search", "Dijkstra's Algorithm"],
        explanation: "BFS is commonly used in Python for finding the shortest path in an unweighted graph."
    },
    {
        index: 25,
        question: "What is the time complexity of binary search in Java when Searching for an element in a linked list?",
        answer: "O(n)",
        options: ["O(logn)", "O(n)", "O(n^2)", "O(1)"],
        explanation: "Binary search in Java has a time complexity of O(n) when Searching for an element in a linked list due to the lack of direct indexing."
    },
    {
        index: 26,
        question: "In C++, which search algorithm is suitable for finding the maximum element in an Searching Array?",
        answer: "Linear Search",
        options: ["Binary Search", "Linear Search", "Quick Search", "Merge Search"],
        explanation: "Linear search in C++ is suitable for finding the maximum element in an Searching Array, as it checks each element in sequence."
    },
    {
        index: 27,
        question: "What is the primary advantage of linear search in Python?",
        answer: "No sorting required",
        options: ["Faster for large datasets", "No sorting required", "Low memory usage", "Suitable for binary heaps"],
        explanation: "Linear search in Python is advantageous because it does not require the Searching Array to be sorted."
    },
    {
        index: 28,
        question: "In Java, what is the time complexity of Searching for a key in a HashMap?",
        answer: "O(1)",
        options: ["O(n)", "O(logn)", "O(1)", "O(n^2)"],
        explanation: "Searching for a key in a HashMap in Java has a constant time complexity of O(1) on average due to hash table indexing."
    },
    {
        index: 29,
        question: "What is the time complexity of binary search in C++ for a sorted Searching Array?",
        answer: "O(logn)",
        options: ["O(logn)", "O(n)", "O(nlogn)", "O(n^2)"],
        explanation: "Binary search in C++ has a time complexity of O(log n) when applied to a sorted Searching Array."
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
const n = Searching.length;
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
    const randomQuestion = Searching[randomWholeNumber].question;
    question.textContent = randomQuestion;
  
    option0.textContent = Searching[randomWholeNumber].options[0];
    option1.textContent = Searching[randomWholeNumber].options[1];
    option2.textContent = Searching[randomWholeNumber].options[2];
    option3.textContent = Searching[randomWholeNumber].options[3];
  
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
    const correctAnswerIndex = Searching[randomWholeNumber].options.indexOf(Searching[randomWholeNumber].answer);
  
    if (index === correctAnswerIndex) {
        selectedCheckbox.nextSibling.textContent = 'Correct';
      score += 1;
    } else {
        selectedCheckbox.nextSibling.textContent = 'Wrong';
    }
  
    answerDescription.innerHTML = Searching[randomWholeNumber].explanation;
  
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
  