



const DataSet = [
    {
    index: 0,
    question: "What is the time complexity of linear search in Java?",
    answer: "O(n)",
    options: ["O(logn)", "O(nlogn)", "O(1)", "O(n)"],
    explanation: "Linear search in Java has a time complexity of O(n) as it checks each element in the array one by one."
    },
    {
    index: 1,
    question: "Which method is used to concatenate two strings in Java?",
    answer: "concat()",
    options: ["add()", "combine()", "concatenate()", "concat()"],
    explanation: "In Java, the 'concat()' method is used to concatenate two strings."
    },
    {
    index: 2,
    question: "What is the result of 'str.length()' when 'str' is 'Java'?",
    answer: "4",
    options: ["3", "4", "5", "6"],
    explanation: "The 'length()' method returns the number of characters in a string, so 'str.length()' is 4 for 'Java'."
    },
    {
    index: 3,
    question: "Which operator is used to compare two strings in Java for equality?",
    answer: "==",
    options: ["=", "==", "!=", "<>"],
    explanation: "In Java, the '==' operator is used to compare two strings for equality."
    },
    {
    index: 4,
    question: "What is the purpose of the 'charAt()' method in Java?",
    answer: "To retrieve the character at a specified index in a string",
    options: [
    "To check if a string contains a specific character",
    "To convert a string to lowercase",
    "To retrieve the character at a specified index in a string",
    "To remove whitespace from a string"
    ],
    explanation: "The 'charAt()' method in Java is used to retrieve the character at a specified index in a string."
    },
    {
    index: 5,
    question: "What is the result of 'str.substring(1, 3)' when 'str' is 'Java'?",
    answer: "av",
    options: ["Jav", "ava", "av", "v"],
    explanation: "The 'substring(1, 3)' method extracts characters from index 1 (inclusive) to 3 (exclusive), so the result is 'av' for 'Java'."
    },
    {
    index: 6,
    question: "Which method is used to convert a string to lowercase in Java?",
    answer: "toLowerCase()",
    options: ["convertToLower()", "toLower()", "toLowerCase()", "makeLowerCase()"],
    explanation: "In Java, the 'toLowerCase()' method is used to convert a string to lowercase."
    },
    {
    index: 7,
    question: "What is the purpose of the 'toUpperCase()' method in Java?",
    answer: "To convert a string to uppercase",
    options: [
    "To check if a string contains uppercase letters",
    "To retrieve the first uppercase letter in a string",
    "To convert a string to uppercase",
    "To count the number of uppercase letters in a string"
    ],
    explanation: "The 'toUpperCase()' method in Java is used to convert a string to uppercase."
    },
    {
    index: 8,
    question: "What is the result of 'str.indexOf('a')' when 'str' is 'Java'?",
    answer: "1",
    options: ["0", "1", "2", "-1"],
    explanation: "The 'indexOf('a')' method returns the index of the first occurrence of 'a' in 'Java', which is 1-based."
    },
    {
    index: 9,
    question: "Which method is used to replace a substring in a string in Java?",
    answer: "replace()",
    options: ["replaceSubstring()", "replaceString()", "replace()", "substitute()"],
    explanation: "In Java, the 'replace()' method is used to replace a substring in a string."
    },
    {
    index: 10,
    question: "What is the purpose of the 'startsWith()' method in Java?",
    answer: "To check if a string starts with a specified prefix",
    options: [
    "To check if a string ends with a specified suffix",
    "To check if a string contains a specific character",
    "To check if a string starts with a specified prefix",
    "To check if a string is empty"
    ],
    explanation: "The 'startsWith()' method in Java is used to check if a string starts with a specified prefix."
    },
    {
    index: 11,
    question: "What is the result of 'str.endsWith('va')' when 'str' is 'Java'?",
    answer: "true",
    options: ["true", "false", "1", "0"],
    explanation: "The 'endsWith('va')' method checks if 'Java' ends with 'va', which is true."
    },
    {
    index: 12,
    question: "Which method is used to trim whitespace from the beginning and end of a string in Java?",
    answer: "trim()",
    options: ["clean()", "strip()", "trimWhitespace()", "trim()"],
    explanation: "In Java, the 'trim()' method is used to remove leading and trailing whitespace from a string."
    },
    {
    index: 13,
    question: "What is the purpose of the 'isEmpty()' method in Java?",
    answer: "To check if a string is empty (has a length of 0)",
    options: [
    "To check if a string contains only spaces",
    "To check if a string is null",
    "To check if a string is empty (has a length of 0)",
    "To check if a string contains uppercase letters"
    ],
    explanation: "The 'isEmpty()' method in Java is used to check if a string is empty, meaning it has a length of 0."
    },
    {
    index: 14,
    question: "What is the result of 'str.contains('Java')' when 'str' is 'Java Programming'?",
    answer: "true",
    options: ["true", "false", "1", "0"],
    explanation: "The 'contains('Java')' method checks if 'Java Programming' contains the substring 'Java', which is true."
    },
    {
    index: 15,
    question: "Which method is used to split a string into an array of substrings based on a delimiter in Java?",
    answer: "split()",
    options: ["divide()", "parse()", "splitString()", "split()"],
    explanation: "In Java, the 'split()' method is used to split a string into an array of substrings based on a delimiter."
    },
    {
    index: 16,
    question: "What is the purpose of the 'join()' method in Java?",
    answer: "To concatenate elements of an array or iterable into a single string with a delimiter",
    options: [
    "To join two strings together",
    "To merge two arrays",
    "To concatenate elements of an array or iterable into a single string with a delimiter",
    "To split a string into multiple substrings"
    ],
    explanation: "The 'join()' method in Java is used to concatenate elements of an array or iterable into a single string with a specified delimiter."
    },
    {
    index: 17,
    question: "What is the result of 'str.compareTo('Java')' when 'str' is 'Java'?",
    answer: "0",
    options: ["0", "1", "-1", "true"],
    explanation: "The 'compareTo('Java')' method compares 'Java' with 'Java' and returns 0 since they are equal."
    },
    {
    index: 18,
    question: "Which method is used to format a string using placeholders in Java?",
    answer: "format()",
    options: ["replace()", "insert()", "format()", "compose()"],
    explanation: "In Java, the 'format()' method is used to create a formatted string using placeholders and arguments."
    },
    {
    index: 19,
    question: "What is the purpose of the 'valueOf()' method in Java?",
    answer: "To convert other data types to strings",
    options: [
    "To check if a string contains a numeric value",
    "To parse a string into an integer",
    "To convert other data types to strings",
    "To convert a string to a numeric value"
    ],
    explanation: "The 'valueOf()' method in Java is used to convert other data types, such as integers or booleans, to their string representation."
    },
    {
    index: 20,
    question: "What is the result of 'str.replaceFirst('a', 'A')' when 'str' is 'java programming'?",
    answer: "javA programming",
    options: ["javA programming", "jAva programming", "java progrAmming", "java programming"],
    explanation: "The 'replaceFirst('a', 'A')' method replaces the first 'a' with 'A' in 'java programming'."
    },
    {
    index: 21,
    question: "Which method is used to repeat a string multiple times in Java?",
    answer: "repeat()",
    options: ["duplicate()", "copy()", "repeat()", "multiply()"],
    explanation: "In Java, the 'repeat()' method is used to repeat a string multiple times."
    },
    {
    index: 22,
    question: "What is the result of 'String.valueOf(42)' in Java?",
    answer: "42",
    options: ["String", "valueOf", "42", "null"],
    explanation: "The 'String.valueOf(42)' method converts the integer 42 to its string representation."
    },
    {
    index: 23,
    question: "Which method is used to compare two strings in Java while ignoring their case?",
    answer: "equalsIgnoreCase()",
    options: ["compareIgnoreCase()", "equalsIgnore()", "ignoreCaseEquals()", "equalsIgnoreCase()"],
    explanation: "The 'equalsIgnoreCase()' method in Java compares two strings while ignoring their case."
    },
    {
    index: 24,
    question: "What is the purpose of the 'replaceAll()' method in Java?",
    answer: "To replace all occurrences of a substring with another substring in a string",
    options: [
    "To replace only the first occurrence of a substring in a string",
    "To append a substring to the end of a string",
    "To remove all whitespace from a string",
    "To replace all occurrences of a substring with another substring in a string"
    ],
    explanation: "The 'replaceAll()' method in Java is used to replace all occurrences of a substring with another substring in a string."
    },
    {
    index: 25,
    question: "Which method is used to check if a string starts with a specified prefix in Java?",
    answer: "startsWith()",
    options: ["startsWith()", "endsWith()", "contains()", "matches()"],
    explanation: "In Java, the 'startsWith()' method is used to check if a string starts with a specified prefix."
    },
    {
    index: 26,
    question: "What is the result of 'str.lastIndexOf('a')' when 'str' is 'java programming'?",
    answer: "10",
    options: ["8", "10", "11", "-1"],
    explanation: "The 'lastIndexOf('a')' method returns the index of the last occurrence of 'a' in 'java programming'."
    },
    {
    index: 27,
    question: "Which method is used to remove leading and trailing whitespace from a string in Java?",
    answer: "trim()",
    options: ["strip()", "clean()", "trimWhitespace()", "trim()"],
    explanation: "In Java, the 'trim()' method is used to remove leading and trailing whitespace from a string."
    },
    {
    index: 28,
    question: "What is the purpose of the 'contentEquals()' method in Java?",
    answer: "To compare the content of a string with a specified CharSequence",
    options: [
    "To check if a string contains a specific character",
    "To compare two strings for equality",
    "To compare the content of a string with a specified CharSequence",
    "To concatenate two strings"
    ],
    explanation: "The 'contentEquals()' method in Java is used to compare the content of a string with a specified CharSequence."
    },
    {
    index: 29,
    question: "Which method is used to check if a string ends with a specified suffix in Java?",
    answer: "endsWith()",
    options: ["startsWith()", "endsWith()", "contains()", "matches()"],
    explanation: "In Java, the 'endsWith()' method is used to check if a string ends with a specified suffix."
    },
    {
    index: 30,
    question: "What is the result of 'str.codePointAt(1)' when 'str' is 'Java'?",
    answer: "97",
    options: ["J", "97", "65", "a"],
    explanation: "The 'codePointAt(1)' method returns the Unicode code point of the character at index 1, which is 97 for 'a' in 'Java'."
    },
    {
    index: 31,
    question: "Which method is used to convert a string to a character array in Java?",
    answer: "toCharArray()",
    options: ["toArray()", "toChar()", "stringArray()", "toCharArray()"],
    explanation: "In Java, the 'toCharArray()' method is used to convert a string to a character array."
    },
    {
    index: 32,
    question: "What is the purpose of the 'compareToIgnoreCase()' method in Java?",
    answer: "To compare two strings while ignoring their case",
    options: [
    "To compare two strings for equality",
    "To check if a string contains a specific character",
    "To convert a string to uppercase",
    "To compare two strings while ignoring their case"
    ],
    explanation: "The 'compareToIgnoreCase()' method in Java is used to compare two strings while ignoring their case."
    },
    {
    index: 33,
    question: "Which method is used to convert a string to lowercase in Java while ignoring its current case?",
    answer: "toLowerCase(Locale.ENGLISH)",
    options: [
    "convertToLower()",
    "toLower()",
    "toLowerCase()",
    "toLowerCase(Locale.ENGLISH)"
    ],
    explanation: "In Java, 'toLowerCase(Locale.ENGLISH)' is used to convert a string to lowercase while ignoring its current case."
    },
    {
    index: 34,
    question: "What is the result of 'str.substring(1)' when 'str' is 'Java'?",
    answer: "ava",
    options: ["Jav", "ava", "av", "v"],
    explanation: "The 'substring(1)' method extracts characters from index 1 (inclusive) to the end, so the result is 'ava' for 'Java'."
    },
    {
    index: 35,
    question: "Which method is used to pad a string with a specified character to a specified length in Java?",
    answer: "String.format()",
    options: ["pad()", "fill()", "format()", "padString()"],
    explanation: "In Java, 'String.format()' can be used to pad a string with a specified character to a specified length."
    },
    {
    index: 36,
    question: "What is the purpose of the 'codePoints()' method in Java?",
    answer: "To return an IntStream of Unicode code points from a string",
    options: [
    "To count the number of code points in a string",
    "To return an IntStream of Unicode code points from a string",
    "To check if a string contains numeric characters",
    "To return an array of code points"
    ],
    explanation: "The 'codePoints()' method in Java returns an IntStream of Unicode code points from a string."
    },
    {
    index: 37,
    question: "Which method is used to compare two strings lexicographically in Java?",
    answer: "compareTo()",
    options: ["compare()", "equals()", "compareTo()", "lexicoCompare()"],
    explanation: "The 'compareTo()' method in Java is used to compare two strings lexicographically."
    },
    {
    index: 38,
    question: "What is the result of 'str.replaceAll('a', 'A')' when 'str' is 'java programming'?",
    answer: "jAvA progrAmming",
    options: ["jAva progrAmming", "java progrAmming", "javA progrAmming", "jAvA programming"],
    explanation: "The 'replaceAll('a', 'A')' method replaces all occurrences of 'a' with 'A' in 'java programming'."
    },
    {
    index: 39,
    question: "Which method is used to check if a string contains a specific sequence of characters in Java?",
    answer: "contains()",
    options: ["check()", "match()", "contains()", "sequence()"],
    explanation: "In Java, the 'contains()' method is used to check if a string contains a specific sequence of characters."
    },
    {
    index: 40,
    question: "What is the purpose of the 'substringBetween()' method in Java?",
    answer: "To extract a substring between two specified strings",
    options: [
    "To remove leading and trailing whitespace from a string",
    "To extract a substring between two specified strings",
    "To split a string into multiple substrings",
    "To check if a string contains a specific character"
    ],
    explanation: "The 'substringBetween()' method in Java is used to extract a substring between two specified strings."
    },
    {
    index: 41,
    question: "Which method is used to check if a string contains only numeric characters in Java?",
    answer: "matches()",
    options: ["checkNumeric()", "isNumeric()", "containsNumeric()", "matches()"],
    explanation: "In Java, the 'matches()' method can be used with a regular expression to check if a string contains only numeric characters."
    },
    {
    index: 42,
    question: "What is the result of 'str.lastIndexOf('a', 5)' when 'str' is 'java programming'?",
    answer: "1",
    options: ["-1", "1", "8", "5"],
    explanation: "The 'lastIndexOf('a', 5)' method searches for 'a' in the substring before index 5 (exclusive) of 'java programming' and finds it at index 1."
    },
    {
    index: 43,
    question: "Which method is used to check if a string is empty or consists only of whitespace characters in Java?",
    answer: "isBlank()",
    options: ["isEmpty()", "isWhitespace()", "isBlank()", "isSpace()"],
    explanation: "In Java, the 'isBlank()' method is used to check if a string is empty or consists only of whitespace characters."
    },
    {
    index: 44,
    question: "What is the purpose of the 'stripLeading()' method in Java?",
    answer: "To remove leading whitespace characters from a string",
    options: [
    "To append a string to the end of another string",
    "To extract a substring between two specified strings",
    "To remove leading whitespace characters from a string",
    "To split a string into multiple substrings"
    ],
    explanation: "The 'stripLeading()' method in Java is used to remove leading whitespace characters from a string."
    },
    {
    index: 45,
    question: "Which method is used to check if a string contains a specific character in Java?",
    answer: "contains()",
    options: ["check()", "match()", "contains()", "has()"],
    explanation: "In Java, the 'contains()' method is used to check if a string contains a specific character."
    },
    {
    index: 46,
    question: "What is the result of 'str.substring(0, str.length())' when 'str' is 'Java'?",
    answer: "Java",
    options: ["J", "ava", "Java", "null"],
    explanation: "The 'substring(0, str.length())' method extracts the entire string 'Java' from 'Java'."
    },
    {
    index: 47,
    question: "Which method is used to check if a string contains a specified regular expression pattern in Java?",
    answer: "matches()",
    options: ["checkPattern()", "match()", "containsPattern()", "matches()"],
    explanation: "In Java, the 'matches()' method is used to check if a string matches a specified regular expression pattern."
    },
    {
    index: 48,
    question: "What is the purpose of the 'lines()' method in Java?",
    answer: "To return a stream of lines from a string",
    options: [
    "To count the number of lines in a string",
    "To split a string into multiple substrings",
    "To return a stream of lines from a string",
    "To remove all whitespace from a string"
    ],
    explanation: "The 'lines()' method in Java is used to return a stream of lines from a string, splitting it by line terminators."
    },
    {
    index: 49,
    question: "Which method is used to remove trailing whitespace characters from a string in Java?",
    answer: "stripTrailing()",
    options: ["removeTrailing()", "stripEnd()", "trimTrailing()", "stripTrailing()"],
    explanation: "In Java, the 'stripTrailing()' method is used to remove trailing whitespace characters from a string."
    },
    ];
    
    // Here are 20 additional questions on the topic of Python string manipulation:
    
    const StringManipulationQuestions = [
    {
    index: 50,
    question: "What is the result of 'len('Python')'?",
    answer: "6",
    options: ["4", "5", "6", "7"],
    explanation: "The 'len()' function in Python returns the length of a string, including spaces, so 'len('Python')' is 6."
    },
    {
    index: 51,
    question: "Which operator is used to concatenate two strings in Python?",
    answer: "+",
    options: ["&", "+", "*", "-"],
    explanation: "In Python, the '+' operator is used to concatenate two strings."
    },
    {
    index: 52,
    question: "What is the result of 'str.upper()' when 'str' is 'Python'?",
    answer: "PYTHON",
    options: ["Python", "PYTHon", "python", "PYTHON"],
    explanation: "The 'upper()' method in Python is used to convert a string to uppercase."
    },
    {
    index: 53,
    question: "Which method is used to convert a string to lowercase in Python?",
    answer: "str.lower()",
    options: ["str.toLower()", "str.lower()", "str.toLowercase()", "str.convertToLower()"],
    explanation: "In Python, the 'lower()' method is used to convert a string to lowercase."
    },
    {
    index: 54,
    question: "What is the result of 'str.capitalize()' when 'str' is 'python programming'?",
    answer: "Python programming",
    options: ["Python", "python programming", "python Programming", "Python Programming"],
    explanation: "The 'capitalize()' method in Python capitalizes the first character of a string."
    },
    {
    index: 55,
    question: "Which method is used to check if a string ends with a specified suffix in Python?",
    answer: "str.endswith()",
    options: ["str.endWith()", "str.endsWith()", "str.ends()", "str.checkEnd()"],
    explanation: "In Python, the 'endswith()' method is used to check if a string ends with a specified suffix."
    },
    {
    index: 56,
    question: "What is the purpose of the 'str.strip()' method in Python?",
    answer: "To remove leading and trailing whitespace characters from a string",
    options: ["To split a string into multiple substrings", "To convert a string to lowercase", "To remove all whitespace from a string", "To remove leading and trailing whitespace characters from a string"],
    explanation: "The 'strip()' method in Python is used to remove leading and trailing whitespace characters from a string."
    },
    {
    index: 57,
    question: "Which method is used to replace a substring in a string in Python?",
    answer: "str.replace()",
    options: ["str.substitute()", "str.replace()", "str.replaceAll()", "str.swap()"],
    explanation: "In Python, the 'replace()' method is used to replace a substring in a string."
    },
    {
    index: 58,
    question: "What is the result of 'str.split(' ')' when 'str' is 'Python programming'?",
    answer: "['Python', 'programming']",
    options: ["['Python programming']", "['Python', 'programming']", "['Python']", "['programming']"],
    explanation: "The 'split(' ')' method splits the string 'Python programming' into a list of words based on the space delimiter."
    },
    {
    index: 59,
    question: "Which method is used to count the number of occurrences of a substring in a string in Python?",
    answer: "str.count()",
    options: ["str.find()", "str.indexOf()", "str.count()", "str.contains()"],
    explanation: "In Python, the 'count()' method is used to count the number of occurrences of a substring in a string."
    },
    {
    index: 60,
    question: "What is the result of 'str.startswith('Py')' when 'str' is 'Python'?",
    answer: "True",
    options: ["true", "True", "false", "False"],
    explanation: "The 'startswith('Py')' method checks if 'Python' starts with 'Py', which is true."
    },
    {
    index: 61,
    question: "Which method is used to check if a string contains only numeric characters in Python?",
    answer: "str.isnumeric()",
    options: ["str.containsNumeric()", "str.isnumeric()", "str.isNumber()", "str.isDigit()"],
    explanation: "In Python, the 'isnumeric()' method checks if a string contains only numeric characters."
    },
    {
    index: 62,
    question: "What is the purpose of the 'str.isalnum()' method in Python?",
    answer: "To check if a string consists of alphanumeric characters",
    options: ["To check if a string is empty", "To check if a string is null", "To check if a string consists of whitespace characters", "To check if a string consists of alphanumeric characters"],
    explanation: "The 'isalnum()' method in Python is used to check if a string consists of alphanumeric characters."
    },
    {
    index: 63,
    question: "Which method is used to find the index of the first occurrence of a substring in a string in Python?",
    answer: "str.find()",
    options: ["str.indexOf()", "str.search()", "str.find()", "str.locate()"],
    explanation: "In Python, the 'find()' method is used to find the index of the first occurrence of a substring in a string."
    },
    {
    index: 64,
    question: "What is the result of 'str.isalpha()' when 'str' is 'Python'?",
    answer: "True",
    options: ["true", "True", "false", "False"],
    explanation: "The 'isalpha()' method checks if 'Python' consists of alphabetic characters only, which is true."
    },
    {
    index: 65,
    question: "Which method is used to check if a string contains only whitespace characters in Python?",
    answer: "str.isspace()",
    options: ["str.iswhitespace()", "str.isSpace()", "str.isWhitespace()", "str.isspace()"],
    explanation: "In Python, the 'isspace()' method checks if a string contains only whitespace characters."
    },
    {
    index: 66,
    question: "What is the result of 'str.join(['Hello', 'World'])' in Python?",
    answer: "HelloWorld",
    options: ["Hello World", "Hello,World", "Hello-World", "HelloWorld"],
    explanation: "The 'join()' method in Python concatenates elements of an iterable using the string as a separator, so 'str.join(['Hello', 'World'])' results in 'HelloWorld'."
    },
    {
    index: 67,
    question: "Which method is used to find the index of the last occurrence of a substring in a string in Python?",
    answer: "str.rfind()",
    options: ["str.indexOfLast()", "str.lastIndexOf()", "str.rfind()", "str.findLast()"],
    explanation: "In Python, the 'rfind()' method is used to find the index of the last occurrence of a substring in a string."
    },
    {
    index: 68,
    question: "What is the result of 'str.swapcase()' when 'str' is 'PyThOn'?",
    answer: "pYtHoN",
    options: ["PYTHON", "pYtHoN", "PyThOn", "pytHon"],
    explanation: "The 'swapcase()' method in Python swaps the case of characters in a string, so 'str.swapcase()' results in 'pYtHoN' for 'PyThOn'."
    },
    {
    index: 69,
    question: "Which method is used to check if a string contains a specified character in Python?",
    answer: "str.contains()",
    options: ["str.contains()", "str.has()", "str.includes()", "str.contains()"],
    explanation: "In Python, the 'contains()' method is used to check if a string contains a specified character."
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
  