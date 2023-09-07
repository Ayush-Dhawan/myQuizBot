



const DataSet = [
    {
      index: 1,
      question: "What is the time complexity of the bubble sort algorithm?",
      answer: "O(n^2)",
      options: ["O(n)", "O(logn)", "O(n^2)", "O(1)"],
      explanation: "Bubble sort has a time complexity of O(n^2) in the worst case."
    },
    {
      index: 2,
      question: "Which sorting algorithm is known for its stable sorting property?",
      answer: "Merge Sort",
      options: ["Quick Sort", "Merge Sort", "Heap Sort", "Bubble Sort"],
      explanation: "Merge Sort is known for being a stable sorting algorithm."
    },
    {
      index: 3,
      question: "What is the key idea behind the Quick Sort algorithm?",
      answer: "Divide and Conquer",
      options: ["Bubble Sort", "Merge Sort", "Divide and Conquer", "Insertion Sort"],
      explanation: "Quick Sort follows the divide and conquer strategy."
    },
    {
      index: 4,
      question: "Which sorting algorithm is considered an in-place sorting algorithm?",
      answer: "Insertion Sort",
      options: ["Merge Sort", "Heap Sort", "Bubble Sort", "Insertion Sort"],
      explanation: "Insertion Sort is an in-place sorting algorithm."
    },
    {
      index: 5,
      question: "What is the worst-case time complexity of the selection sort algorithm?",
      answer: "O(n^2)",
      options: ["O(n)", "O(logn)", "O(n^2)", "O(1)"],
      explanation: "Selection sort has a worst-case time complexity of O(n^2)."
    },
    {
      index: 6,
      question: "Which sorting algorithm is known for its efficiency in sorting small data sets or nearly sorted data?",
      answer: "Insertion Sort",
      options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Insertion Sort"],
      explanation: "Insertion Sort is efficient for small or nearly sorted data."
    },
    {
      index: 7,
      question: "What is the time complexity of the merge sort algorithm in the worst case?",
      answer: "O(n log n)",
      options: ["O(n)", "O(logn)", "O(n^2)", "O(n log n)"],
      explanation: "Merge Sort has a time complexity of O(n log n) in the worst case."
    },
    {
      index: 8,
      question: "Which sorting algorithm works by repeatedly dividing the unsorted list into smaller sublists?",
      answer: "Merge Sort",
      options: ["Quick Sort", "Bubble Sort", "Heap Sort", "Merge Sort"],
      explanation: "Merge Sort divides the list into smaller sublists."
    },
    {
      index: 9,
      question: "What is the pivot element in the Quick Sort algorithm?",
      answer: "An element used for partitioning",
      options: ["The first element", "The last element", "A randomly selected element", "An element used for partitioning"],
      explanation: "The pivot element is used for partitioning in Quick Sort."
    },
    {
      index: 10,
      question: "Which sorting algorithm is efficient for sorting large datasets and is often used as a default sorting algorithm in many programming languages?",
      answer: "Quick Sort",
      options: ["Merge Sort", "Heap Sort", "Bubble Sort", "Quick Sort"],
      explanation: "Quick Sort is efficient for large datasets and is widely used."
    },
    {
      index: 11,
      question: "What is the primary advantage of radix sort over comparison-based sorting algorithms?",
      answer: "Efficiency for integer sorting",
      options: ["Stability", "Efficiency for integer sorting", "In-place sorting", "Ease of implementation"],
      explanation: "Radix Sort is efficient for sorting integers."
    },
    {
      index: 12,
      question: "Which sorting algorithm is known for its worst-case time complexity of O(n^2) but can be improved with certain optimizations?",
      answer: "Bubble Sort",
      options: ["Insertion Sort", "Selection Sort", "Merge Sort", "Bubble Sort"],
      explanation: "Bubble Sort has a worst-case time complexity of O(n^2) but can be improved with optimizations."
    },
    {
      index: 13,
      question: "In the worst case, how many comparisons are needed to sort n elements using the bubble sort algorithm?",
      answer: "n(n-1)/2",
      options: ["n", "n-1", "n^2", "n(n-1)/2"],
      explanation: "In the worst case, bubble sort requires n(n-1)/2 comparisons."
    },
    {
      index: 14,
      question: "Which sorting algorithm is known for its space efficiency and is often used for external sorting?",
      answer: "Merge Sort",
      options: ["Quick Sort", "Heap Sort", "Bubble Sort", "Merge Sort"],
      explanation: "Merge Sort is space-efficient and suitable for external sorting."
    },
    {
      index: 15,
      question: "What is the time complexity of the heap sort algorithm in the worst case?",
      answer: "O(n log n)",
      options: ["O(n)", "O(logn)", "O(n^2)", "O(n log n)"],
      explanation: "Heap Sort has a time complexity of O(n log n) in the worst case."
    },
    {
      index: 16,
      question: "Which sorting algorithm is based on the idea of repeatedly selecting the minimum element from the unsorted portion of the array and moving it to the sorted portion?",
      answer: "Selection Sort",
      options: ["Quick Sort", "Merge Sort", "Bubble Sort", "Selection Sort"],
      explanation: "Selection Sort selects the minimum element in each iteration."
    },
    {
      index: 17,
      question: "What is the time complexity of the insertion sort algorithm in the best case?",
      answer: "O(n)",
      options: ["O(logn)", "O(n)", "O(n^2)", "O(1)"],
      explanation: "Insertion Sort has a best-case time complexity of O(n)."
    },
    {
      index: 18,
      question: "Which sorting algorithm is known for its adaptability and efficiency when dealing with small or partially sorted datasets?",
      answer: "Insertion Sort",
      options: ["Quick Sort", "Merge Sort", "Bubble Sort", "Insertion Sort"],
      explanation: "Insertion Sort is adaptable and efficient for small or partially sorted data."
    },
    {
      index: 19,
      question: "What is the time complexity of the quick sort algorithm in the average case?",
      answer: "O(n log n)",
      options: ["O(n)", "O(logn)", "O(n^2)", "O(n log n)"],
      explanation: "Quick Sort has an average-case time complexity of O(n log n)."
    },
    {
      index: 20,
      question: "Which sorting algorithm is often used for sorting elements in a binary heap data structure?",
      answer: "Heap Sort",
      options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Heap Sort"],
      explanation: "Heap Sort is used for sorting elements in a binary heap."
    },
    {
      index: 21,
      question: "What is the primary disadvantage of the bubble sort algorithm?",
      answer: "Inefficiency for large datasets",
      options: ["Lack of stability", "Inefficiency for large datasets", "Complexity of implementation", "High space usage"],
      explanation: "Bubble Sort is inefficient for large datasets."
    },
    {
      index: 22,
      question: "Which sorting algorithm is known for its worst-case time complexity of O(n^2) but is still preferred for its simplicity and adaptability?",
      answer: "Insertion Sort",
      options: ["Selection Sort", "Bubble Sort", "Quick Sort", "Insertion Sort"],
      explanation: "Insertion Sort has a worst-case time complexity of O(n^2) but is simple and adaptable."
    },
    {
      index: 23,
      question: "What is the time complexity of the counting sort algorithm in the best case?",
      answer: "O(n + k)",
      options: ["O(n)", "O(k)", "O(n^2)", "O(n + k)"],
      explanation: "Counting Sort has a best-case time complexity of O(n + k), where k is the range of input values."
    },
    {
      index: 24,
      question: "Which sorting algorithm is known for its worst-case time complexity of O(n log n) and is often used for external sorting?",
      answer: "Merge Sort",
      options: ["Quick Sort", "Heap Sort", "Bubble Sort", "Merge Sort"],
      explanation: "Merge Sort has a worst-case time complexity of O(n log n) and is suitable for external sorting."
    },
    {
      index: 25,
      question: "What is the time complexity of the shell sort algorithm?",
      answer: "Depends on the gap sequence",
      options: ["O(n)", "O(logn)", "O(n^2)", "Depends on the gap sequence"],
      explanation: "The time complexity of Shell Sort depends on the gap sequence chosen."
    },
    {
      index: 26,
      question: "Which sorting algorithm is based on the idea of dividing the list into smaller sublists and sorting each sublist before merging them?",
      answer: "Merge Sort",
      options: ["Quick Sort", "Selection Sort", "Bubble Sort", "Merge Sort"],
      explanation: "Merge Sort divides the list into sublists and sorts each before merging."
    },
    {
      index: 27,
      question: "What is the primary advantage of radix sort over comparison-based sorting algorithms?",
      answer: "Efficiency for integer sorting",
      options: ["Stability", "Efficiency for integer sorting", "In-place sorting", "Ease of implementation"],
      explanation: "Radix Sort is efficient for sorting integers."
    },
    {
      index: 28,
      question: "Which sorting algorithm is often used for sorting elements in a binary search tree (BST)?",
      answer: "In-order traversal",
      options: ["Pre-order traversal", "Post-order traversal", "Breadth-First Search", "In-order traversal"],
      explanation: "In-order traversal is used for sorting elements in a BST."
    },
    {
      index: 29,
      question: "What is the primary advantage of the quick sort algorithm?",
      answer: "Efficiency and low space usage",
      options: ["Stability", "Efficiency and low space usage", "Ease of implementation", "Deterministic behavior"],
      explanation: "Quick Sort is efficient and has low space usage."
    },
    {
      index: 30,
      question: "What is the time complexity of the bubble sort algorithm in the best case?",
      answer: "O(n)",
      options: ["O(n)", "O(logn)", "O(n^2)", "O(1)"],
      explanation: "Bubble Sort has a best-case time complexity of O(n)."
    },
    {
      index: 31,
      question: "Which sorting algorithm is based on the idea of repeatedly swapping adjacent elements if they are in the wrong order?",
      answer: "Bubble Sort",
      options: ["Insertion Sort", "Selection Sort", "Quick Sort", "Bubble Sort"],
      explanation: "Bubble Sort swaps adjacent elements to sort the list."
    },
    {
      index: 32,
      question: "What is the time complexity of the selection sort algorithm in the worst case?",
      answer: "O(n^2)",
      options: ["O(n)", "O(logn)", "O(n^2)", "O(1)"],
      explanation: "Selection sort has a worst-case time complexity of O(n^2)."
    },
    {
      index: 33,
      question: "Which sorting algorithm is based on the idea of repeatedly dividing the list into two halves and merging them back together?",
      answer: "Merge Sort",
      options: ["Quick Sort", "Heap Sort", "Bubble Sort", "Merge Sort"],
      explanation: "Merge Sort divides and merges the list."
    },
    {
      index: 34,
      question: "What is the time complexity of the heap sort algorithm in the best case?",
      answer: "O(n log n)",
      options: ["O(n)", "O(logn)", "O(n^2)", "O(n log n)"],
      explanation: "Heap Sort has a best-case time complexity of O(n log n)."
    },
    {
      index: 35,
      question: "Which sorting algorithm is known for its simplicity and ease of implementation but has poor performance compared to other sorting algorithms?",
      answer: "Bubble Sort",
      options: ["Insertion Sort", "Selection Sort", "Merge Sort", "Bubble Sort"],
      explanation: "Bubble Sort is simple but has poor performance."
    },
    {
      index: 36,
      question: "What is the time complexity of the counting sort algorithm in the worst case?",
      answer: "O(n + k)",
      options: ["O(n)", "O(k)", "O(n^2)", "O(n + k)"],
      explanation: "Counting Sort has a worst-case time complexity of O(n + k), where k is the range of input values."
    },
    {
      index: 37,
      question: "Which sorting algorithm is often used as a subroutine in other sorting algorithms like Timsort?",
      answer: "Insertion Sort",
      options: ["Selection Sort", "Bubble Sort", "Quick Sort", "Insertion Sort"],
      explanation: "Insertion Sort is used as a subroutine in algorithms like Timsort."
    },
    {
      index: 38,
      question: "What is the time complexity of the shell sort algorithm in the worst case?",
      answer: "Depends on the gap sequence",
      options: ["O(n)", "O(logn)", "O(n^2)", "Depends on the gap sequence"],
      explanation: "The time complexity of Shell Sort depends on the chosen gap sequence."
    },
    {
      index: 39,
      question: "Which sorting algorithm is known for its space efficiency and is often used for external sorting?",
      answer: "Merge Sort",
      options: ["Quick Sort", "Heap Sort", "Bubble Sort", "Merge Sort"],
      explanation: "Merge Sort is space-efficient and suitable for external sorting."
    },
    {
      index: 40,
      question: "What is the primary disadvantage of the insertion sort algorithm?",
      answer: "Inefficiency for large datasets",
      options: ["Lack of stability", "Inefficiency for large datasets", "Complexity of implementation", "High space usage"],
      explanation: "Insertion Sort is inefficient for large datasets."
    },
    {
      index: 41,
      question: "Which sorting algorithm is known for its worst-case time complexity of O(n^2) but can be improved with certain optimizations?",
      answer: "Bubble Sort",
      options: ["Selection Sort", "Insertion Sort", "Merge Sort", "Bubble Sort"],
      explanation: "Bubble Sort has a worst-case time complexity of O(n^2) but can be improved with optimizations."
    },
    {
      index: 42,
      question: "In the worst case, how many comparisons are needed to sort n elements using the selection sort algorithm?",
      answer: "n(n-1)/2",
      options: ["n", "n-1", "n^2", "n(n-1)/2"],
      explanation: "In the worst case, selection sort requires n(n-1)/2 comparisons."
    },
    {
      index: 43,
      question: "Which sorting algorithm is known for its efficiency in sorting small data sets or nearly sorted data?",
      answer: "Insertion Sort",
      options: ["Quick Sort", "Merge Sort", "Bubble Sort", "Insertion Sort"],
      explanation: "Insertion Sort is efficient for small or nearly sorted data."
    },
    {
      index: 44,
      question: "What is the time complexity of the merge sort algorithm in the worst case?",
      answer: "O(n log n)",
      options: ["O(n)", "O(logn)", "O(n^2)", "O(n log n)"],
      explanation: "Merge Sort has a time complexity of O(n log n) in the worst case."
    },
    {
      index: 45,
      question: "Which sorting algorithm is based on the idea of repeatedly selecting the minimum element from the unsorted portion of the array and moving it to the sorted portion?",
      answer: "Selection Sort",
      options: ["Quick Sort", "Merge Sort", "Bubble Sort", "Selection Sort"],
      explanation: "Selection Sort selects the minimum element in each iteration."
    },
    {
      index: 46,
      question: "What is the time complexity of the insertion sort algorithm in the best case?",
      answer: "O(n)",
      options: ["O(logn)", "O(n)", "O(n^2)", "O(1)"],
      explanation: "Insertion Sort has a best-case time complexity of O(n)."
    },
    {
      index: 47,
      question: "Which sorting algorithm is known for its adaptability and efficiency when dealing with small or partially sorted datasets?",
      answer: "Insertion Sort",
      options: ["Quick Sort", "Merge Sort", "Bubble Sort", "Insertion Sort"],
      explanation: "Insertion Sort is adaptable and efficient for small or partially sorted data."
    },
    {
      index: 48,
      question: "What is the time complexity of the quick sort algorithm in the average case?",
      answer: "O(n log n)",
      options: ["O(n)", "O(logn)", "O(n^2)", "O(n log n)"],
      explanation: "Quick Sort has an average-case time complexity of O(n log n)."
    },
    {
      index: 49,
      question: "Which sorting algorithm is often used for sorting elements in a binary heap data structure?",
      answer: "Heap Sort",
      options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Heap Sort"],
      explanation: "Heap Sort is used for sorting elements in a binary heap."
    },
    {
      index: 50,
      question: "What is the primary advantage of radix sort over comparison-based sorting algorithms?",
      answer: "Efficiency for integer sorting",
      options: ["Stability", "Efficiency for integer sorting", "In-place sorting", "Ease of implementation"],
      explanation: "Radix Sort is efficient for sorting integers."
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
  