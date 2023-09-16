


const DataSet = [
    {
      index: 0,
      question: "What is the result of 'len(\"Python\")'?",
      answer: "6",
      options: ["4", "5", "6", "7"],
      explanation: "The 'len(\"Python\")' function returns the length of the string, which is 6."
    },
    {
      index: 1,
      question: "How do you concatenate two strings 'str1' and 'str2' in Python?",
      answer: "str1 + str2",
      options: ["str1 .concat(str2)", "str1 + str2", "str1.join(str2)", "str1.append(str2)"],
      explanation: "To concatenate two strings in Python, you can use the '+' operator."
    },
    {
      index: 2,
      question: "What is the Python escape character for a newline?",
      answer: "\\n",
      options: ["\\r", "\\t", "\\n", "\\a"],
      explanation: "The escape character for a newline in Python is '\\n'."
    },
    {
      index: 3,
      question: "Which method is used to convert a string to lowercase in Python?",
      answer: "lower()",
      options: ["toLower()", "lowercase()", "convertToLower()", "lower()"],
      explanation: "The 'lower()' method in Python is used to convert a string to lowercase."
    },
    {
      index: 4,
      question: "How do you check if a string 'str' starts with the substring 'prefix' in Python?",
      answer: "str.startswith(prefix)",
      options: ["str.beginsWith(prefix)", "str.starts(prefix)", "str.startsWith(prefix)", "str.startswithWith(prefix)"],
      explanation: "To check if a string starts with a substring in Python, you can use the 'startswith' method."
    },
    {
      index: 5,
      question: "What is the result of 'str.strip()' when 'str' is '   Python   '?",
      answer: "Python",
      options: ["Python", "   Python   ", "   Python", "Python   "],
      explanation: "The 'strip()' method removes leading and trailing whitespace from a string, resulting in 'Python'."
    },
    {
      index: 6,
      question: "How do you find the index of the first occurrence of a substring 'sub' in a string 'str' in Python?",
      answer: "str.find(sub)",
      options: ["str.index(sub)", "str.search(sub)", "str.indexOf(sub)", "str.find(sub)"],
      explanation: "The 'find()' method returns the index of the first occurrence of 'sub' in 'str' or -1 if not found."
    },
    {
      index: 7,
      question: "Which method is used to split a string 'str' into a list of substrings based on a delimiter in Python?",
      answer: "str.split(delimiter)",
      options: ["str.divide(delimiter)", "str.splitInto(delimiter)", "str.separate(delimiter)", "str.split(delimiter)"],
      explanation: "The 'split()' method splits a string into a list of substrings based on the specified delimiter."
    },
    {
      index: 8,
      question: "What does the 'str.replace(old, new)' method do in Python?",
      answer: "Replaces all occurrences of 'old' with 'new' in 'str'",
      options: ["Removes 'old' from 'str'", "Inserts 'new' before 'old' in 'str'", "Replaces the first occurrence of 'old'", "Replaces all occurrences of 'old' with 'new' in 'str'"],
      explanation: "The 'replace()' method in Python replaces all occurrences of 'old' with 'new' in the string."
    },
    {
      index: 9,
      question: "What is the result of 'str[2:5]' when 'str' is 'Python'?",
      answer: "tho",
      options: ["tho", "Pyt", "thon", "Pyth"],
      explanation: "Slicing 'str' using 'str[2:5]' returns the substring 'tho'."
    },
    {
      index: 10,
      question: "How do you convert an integer 'num' to a string in Python?",
      answer: "str(num)",
      options: ["convertToString(num)", "stringify(num)", "str(num)", "intToStr(num)"],
      explanation: "To convert an integer to a string in Python, you can use the 'str()' function."
    },
    {
      index: 11,
      question: "What is the purpose of the 'str.isnumeric()' method in Python?",
      answer: "Checks if all characters in 'str' are numeric",
      options: ["Converts 'str' to a numeric value", "Checks if 'str' contains any numeric characters", "Counts the number of numeric characters in 'str'", "Checks if all characters in 'str' are numeric"],
      explanation: "The 'isnumeric()' method checks if all characters in a string are numeric."
    },
    {
      index: 12,
      question: "How do you reverse a string 'str' in Python?",
      answer: "str[::-1]",
      options: ["str.reverse()", "str.revert()", "str.flip()", "str[::-1]"],
      explanation: "To reverse a string in Python, you can use slicing with 'str[::-1]'."
    },
    {
      index: 13,
      question: "What is the result of 'str.capitalize()' when 'str' is 'python'?",
      answer: "Python",
      options: ["python", "Python", "PYTHON", "PyThOn"],
      explanation: "The 'capitalize()' method capitalizes the first character of a string, resulting in 'Python'."
    },
    {
      index: 14,
      question: "How do you check if a string 'str' contains another substring 'sub' in Python?",
      answer: "sub in str",
      options: ["str.has(sub)", "str.contains(sub)", "str.includes(sub)", "sub in str"],
      explanation: "To check if a string contains a substring in Python, you can use 'sub in str'."
    },
    {
      index: 15,
      question: "Which method is used to repeat a string 'str' 'n' times in Python?",
      answer: "str * n",
      options: ["str.repeat(n)", "str.multiply(n)", "str.duplicate(n)", "str * n"],
      explanation: "To repeat a string 'n' times in Python, you can use the '*' operator."
    },
    {
      index: 16,
      question: "What is the purpose of the 'str.strip()' method in Python?",
      answer: "Removes leading and trailing whitespace from 'str'",
      options: ["Adds whitespace to 'str'", "Extracts whitespace from 'str'", "Changes whitespace to tabs in 'str'", "Removes leading and trailing whitespace from 'str'"],
      explanation: "The 'strip()' method in Python removes leading and trailing whitespace from a string."
    },
    {
      index: 17,
      question: "How do you convert a string 'str' to a list of characters in Python?",
      answer: "list(str)",
      options: ["str.toList()", "split(str)", "str.toCharArray()", "list(str)"],
      explanation: "To convert a string to a list of characters in Python, you can use the 'list()' function."
    },
    {
      index: 18,
      question: "What is the result of 'str.count('o')' when 'str' is 'Python'?",
      answer: "1",
      options: ["0", "2", "1", "3"],
      explanation: "The 'count()' method counts the number of occurrences of 'o' in 'str', which is 1 in this case."
    },
    {
      index: 19,
      question: "How do you check if a string 'str' ends with the substring 'suffix' in Python?",
      answer: "str.endswith(suffix)",
      options: ["str.ends(suffix)", "str.endWith(suffix)", "str.ends_with(suffix)", "str.endswith(suffix)"],
      explanation: "To check if a string ends with a substring in Python, you can use the 'endswith' method."
    },
    {
      index: 20,
      question: "What is the purpose of the 'str.isalpha()' method in Python?",
      answer: "Checks if all characters in 'str' are alphabetic",
      options: ["Converts 'str' to alphabetic characters", "Checks if 'str' contains any alphabetic characters", "Counts the number of alphabetic characters in 'str'", "Checks if all characters in 'str' are alphabetic"],
      explanation: "The 'isalpha()' method checks if all characters in a string are alphabetic."
    },
    {
      index: 21,
      question: "How do you remove leading whitespace from a string 'str' in Python?",
      answer: "str.lstrip()",
      options: ["str.trimStart()", "str.stripLeft()", "str.lstrip()", "str.removeLeftSpaces()"],
      explanation: "The 'lstrip()' method removes leading whitespace from a string in Python."
    },
    {
      index: 22,
      question: "What is the result of 'str.upper()' when 'str' is 'Python'?",
      answer: "PYTHON",
      options: ["python", "Python", "PYTHON", "PyThOn"],
      explanation: "The 'upper()' method converts all characters in a string to uppercase, resulting in 'PYTHON'."
    },
    {
      index: 23,
      question: "How do you check if all characters in a string 'str' are in lowercase in Python?",
      answer: "str.islower()",
      options: ["str.hasLower()", "str.containsLower()", "str.islowercase()", "str.islower()"],
      explanation: "The 'islower()' method in Python checks if all characters in a string are in lowercase."
    },
    {
      index: 24,
      question: "What is the purpose of the 'str.isdigit()' method in Python?",
      answer: "Checks if all characters in 'str' are digits",
      options: ["Converts 'str' to a numeric value", "Checks if 'str' contains any numeric characters", "Counts the number of numeric characters in 'str'", "Checks if all characters in 'str' are digits"],
      explanation: "The 'isdigit()' method checks if all characters in a string are digits."
    },
    {
      index: 25,
      question: "How do you remove trailing whitespace from a string 'str' in Python?",
      answer: "str.rstrip()",
      options: ["str.trimEnd()", "str.stripRight()", "str.rstrip()", "str.removeRightSpaces()"],
      explanation: "The 'rstrip()' method removes trailing whitespace from a string in Python."
    },
    {
      index: 26,
      question: "What is the result of 'str.swapcase()' when 'str' is 'PyThOn'?",
      answer: "pYtHoN",
      options: ["python", "Python", "PYTHON", "pYtHoN"],
      explanation: "The 'swapcase()' method swaps the case of characters in a string, resulting in 'pYtHoN'."
    },
    {
      index: 27,
      question: "How do you check if a string 'str' is empty in Python?",
      answer: "len(str) == 0",
      options: ["str.isEmpty()", "str.isBlank()", "str.isempty()", "len(str) == 0"],
      explanation: "To check if a string is empty in Python, you can compare its length to 0."
    },
    {
      index: 28,
      question: "What does the 'str.join(iterable)' method do in Python?",
      answer: "Concatenates elements of 'iterable' with 'str' as a separator",
      options: ["Splits 'iterable' using 'str' as a separator", "Combines 'iterable' elements into a single string", "Joins 'str' with 'iterable'", "Concatenates elements of 'iterable' with 'str' as a separator"],
      explanation: "The 'join()' method concatenates elements of an iterable with 'str' as a separator."
    },
    {
      index: 29,
      question: "How do you find the last index of a substring 'sub' in a string 'str' in Python?",
      answer: "str.rfind(sub)",
      options: ["str.lastIndexOf(sub)", "str.findLast(sub)", "str.searchLast(sub)", "str.rfind(sub)"],
      explanation: "The 'rfind()' method returns the last index of the last occurrence of 'sub' in 'str' or -1 if not found."
    },
    {
      index: 30,
      question: "What is the result of 'str[1:4]' when 'str' is 'Python'?",
      answer: "yth",
      options: ["yth", "Pyt", "thon", "Pyth"],
      explanation: "Slicing 'str' using 'str[1:4]' returns the substring 'yth'."
    },
    {
      index: 31,
      question: "How do you check if a string 'str' consists of only whitespace characters in Python?",
      answer: "str.isspace()",
      options: ["str.hasSpaces()", "str.containsSpaces()", "str.iswhitespace()", "str.isspace()"],
      explanation: "The 'isspace()' method checks if a string consists of only whitespace characters."
    },
    {
      index: 32,
      question: "What does the 'str.startswith(prefix, start, end)' method do in Python?",
      answer: "Checks if 'str' starts with 'prefix' within the specified 'start' and 'end' indices",
      options: ["Checks if 'str' contains 'prefix'", "Counts the number of occurrences of 'prefix' in 'str'", "Checks if 'str' starts with 'prefix'", "Checks if 'str' starts with 'prefix' within the specified 'start' and 'end' indices"],
      explanation: "The 'startswith()' method in Python checks if 'str' starts with 'prefix' within the specified 'start' and 'end' indices."
    },
    {
      index: 33,
      question: "How do you check if a string 'str' is a valid identifier in Python?",
      answer: "str.isidentifier()",
      options: ["str.isValidIdentifier()", "str.isIdentifiable()", "str.isIdentifier()", "str.isidentifier()"],
      explanation: "The 'isidentifier()' method checks if a string is a valid Python identifier."
    },
    {
      index: 34,
      question: "What is the purpose of the 'str.isalnum()' method in Python?",
      answer: "Checks if all characters in 'str' are alphanumeric",
      options: ["Converts 'str' to alphanumeric characters", "Checks if 'str' contains any alphanumeric characters", "Counts the number of alphanumeric characters in 'str'", "Checks if all characters in 'str' are alphanumeric"],
      explanation: "The 'isalnum()' method checks if all characters in a string are alphanumeric."
    },
    {
      index: 35,
      question: "How do you check if a string 'str' contains only digits in Python?",
      answer: "str.isdigit()",
      options: ["str.hasDigits()", "str.containsDigits()", "str.isnumeric()", "str.isdigit()"],
      explanation: "The 'isdigit()' method checks if all characters in a string are digits."
    },
    {
      index: 36,
      question: "What is the result of 'str[::2]' when 'str' is 'Python'?",
      answer: "Pto",
      options: ["Pto", "Pyn", "Pho", "Pthon"],
      explanation: "Slicing 'str' using 'str[::2]' returns every second character, resulting in 'Pto'."
    },
    {
      index: 37,
      question: "How do you convert a string 'str' to title case in Python?",
      answer: "str.title()",
      options: ["str.capitalize()", "str.uppercase()", "str.title()", "str.toTitleCase()"],
      explanation: "The 'title()' method in Python converts a string to title case."
    },
    {
      index: 38,
      question: "What is the result of 'str.count('an')' when 'str' is 'banana'?",
      answer: "2",
      options: ["0", "1", "2", "3"],
      explanation: "The 'count()' method counts the number of occurrences of 'an' in 'banana', which is 2."
    },
    {
      index: 39,
      question: "How do you check if a string 'str' contains only lowercase characters in Python?",
      answer: "str.islower()",
      options: ["str.hasLower()", "str.containsLower()", "str.islowercase()", "str.islower()"],
      explanation: "The 'islower()' method checks if all characters in a string are in lowercase."
    },
    {
      index: 40,
      question: "What does the 'str.partition(separator)' method do in Python?",
      answer: "Splits 'str' into a tuple containing three parts: the part before 'separator', the separator itself, and the part after 'separator'",
      options: ["Combines 'str' with 'separator'", "Splits 'str' into a list using 'separator'", "Splits 'str' into a tuple containing three parts: the part before 'separator', the separator itself, and the part after 'separator'", "Joins 'str' with 'separator'"],
      explanation: "The 'partition()' method in Python splits a string into a tuple containing three parts based on the specified separator."
    },
    {
      index: 41,
      question: "How do you check if a string 'str' is in title case in Python?",
      answer: "str.istitle()",
      options: ["str.hasTitleCase()", "str.isTitle()", "str.isTitleCase()", "str.istitle()"],
      explanation: "The 'istitle()' method checks if a string is in title case."
    },
    {
      index: 42,
      question: "What is the purpose of the 'str.isprintable()' method in Python?",
      answer: "Checks if all characters in 'str' are printable",
      options: ["Converts 'str' to printable characters", "Checks if 'str' contains any printable characters", "Counts the number of printable characters in 'str'", "Checks if all characters in 'str' are printable"],
      explanation: "The 'isprintable()' method checks if all characters in a string are printable."
    },
    {
      index: 43,
      question: "How do you convert a string 'str' to lowercase and remove leading and trailing whitespace in Python?",
      answer: "str.strip().lower()",
      options: ["str.lower().strip()", "str.trim().lowercase()", "str.lower().removeSpaces()", "str.strip().lower()"],
      explanation: "To convert a string to lowercase and remove leading and trailing whitespace in Python, you can use 'str.strip().lower()'."
    },
    {
      index: 44,
      question: "What is the result of 'str.replace('o', 'a')' when 'str' is 'Python'?",
      answer: "Pythan",
      options: ["Pyan", "Pithan", "Pythan", "Python"],
      explanation: "The 'replace()' method replaces all occurrences of 'o' with 'a' in 'Python', resulting in 'Pythan'."
    },
    {
      index: 45,
      question: "How do you check if a string 'str' consists of only uppercase characters in Python?",
      answer: "str.isupper()",
      options: ["str.hasUpper()", "str.containsUpper()", "str.isuppercase()", "str.isupper()"],
      explanation: "The 'isupper()' method checks if all characters in a string are in uppercase."
    },
    {
      index: 46,
      question: "What is the purpose of the 'str.isdecimal()' method in Python?",
      answer: "Checks if all characters in 'str' are decimal (0-9) characters",
      options: ["Converts 'str' to decimal characters", "Checks if 'str' contains any decimal characters", "Counts the number of decimal characters in 'str'", "Checks if all characters in 'str' are decimal (0-9) characters"],
      explanation: "The 'isdecimal()' method checks if all characters in a string are decimal (0-9) characters."
    },
    {
      index: 47,
      question: "How do you check if a string 'str' contains only alphanumeric characters in Python?",
      answer: "str.isalnum()",
      options: ["str.hasAlphanumeric()", "str.containsAlphanumeric()", "str.isalphanumeric()", "str.isalnum()"],
      explanation: "The 'isalnum()' method checks if all characters in a string are alphanumeric."
    },
    {
      index: 48,
      question: "What does the 'str.encode(encoding)' method do in Python?",
      answer: "Encodes 'str' using the specified encoding",
      options: ["Decodes 'str' using the specified encoding", "Encrypts 'str' using the specified encoding", "Compresses 'str' using the specified encoding", "Encodes 'str' using the specified encoding"],
      explanation: "The 'encode()' method in Python encodes a string using the specified encoding."
    },
    {
      index: 49,
      question: "How do you check if a string 'str' contains only title case words in Python?",
      answer: "all(word.istitle() for word in str.split())",
      options: ["str.hasTitleCaseWords()", "str.containsTitleCaseWords()", "str.istitlecase()", "all(word.istitle() for word in str.split())"],
      explanation: "To check if a string contains only title case words in Python, you can use 'all(word.istitle() for word in str.split())'."
    },
    // Add 20 more questions here
    {
      index: 50,
      question: "How do you check if a string 'str' contains only ASCII characters in Python?",
      answer: "all(ord(char) < 128 for char in str)",
      options: ["str.hasAsciiChars()", "str.containsAsciiChars()", "str.isascii()", "all(ord(char) < 128 for char in str)"],
      explanation: "To check if a string contains only ASCII characters in Python, you can use 'all(ord(char) < 128 for char in str)'."
    },
    {
      index: 51,
      question: "What does the 'str.expandtabs(tabsize)' method do in Python?",
      answer: "Expands tab characters in 'str' to spaces based on 'tabsize'",
      options: ["Collapses tab characters in 'str' to spaces based on 'tabsize'", "Counts the number of tab characters in 'str'", "Expands spaces in 'str' to tab characters based on 'tabsize'", "Expands tab characters in 'str' to spaces based on 'tabsize'"],
      explanation: "The 'expandtabs()' method in Python expands tab characters in a string to spaces based on the specified 'tabsize'."
    },
    {
      index: 52,
      question: "How do you check if a string 'str' contains only whitespace characters and newlines in Python?",
      answer: "str.isspace() or '\\n' in str",
      options: ["str.hasWhitespace()", "str.containsWhitespace()", "str.iswhitespace() or '\\n' in str", "str.isspace() or '\\t' in str"],
      explanation: "To check if a string contains only whitespace characters and newlines in Python, you can use 'str.isspace() or '\\n' in str'."
    },
    {
      index: 53,
      question: "What is the result of 'str.rstrip('o')' when 'str' is 'Python'?",
      answer: "Pyth",
      options: ["Pyth", "Python", "Pytho", "Py"],
      explanation: "The 'rstrip('o')' method removes trailing 'o' characters from 'Python', resulting in 'Pyth'."
    },
    {
      index: 54,
      question: "How do you check if a string 'str' contains only hexadecimal characters in Python?",
      answer: "all(char in '0123456789ABCDEFabcdef' for char in str)",
      options: ["str.hasHexChars()", "str.containsHexChars()", "str.ishexadecimal()", "all(char in '0123456789ABCDEFabcdef' for char in str)"],
      explanation: "To check if a string contains only hexadecimal characters in Python, you can use 'all(char in '0123456789ABCDEFabcdef' for char in str)'."
    },
    {
      index: 55,
      question: "What does the 'str.zfill(width)' method do in Python?",
      answer: "Pads 'str' with zeros on the left to make it 'width' characters wide",
      options: ["Pads 'str' with zeros on the right to make it 'width' characters wide", "Removes leading zeros from 'str'", "Pads 'str' with spaces on the left to make it 'width' characters wide", "Pads 'str' with zeros on the left to make it 'width' characters wide"],
      explanation: "The 'zfill()' method in Python pads a string with zeros on the left to make it 'width' characters wide."
    },
    {
      index: 56,
      question: "How do you check if a string 'str' contains only printable characters in Python?",
      answer: "str.isprintable()",
      options: ["str.hasPrintableChars()", "str.containsPrintableChars()", "str.isprint()", "str.isprintable()"],
      explanation: "The 'isprintable()' method checks if all characters in a string are printable."
    },
    {
      index: 57,
      question: "What is the result of 'str.rsplit('o', 1)' when 'str' is 'Python'?",
      answer: "['Pyth', 'n']",
      options: ["['Pyth', 'n']", "['Py', 'thon']", "['Python']", "['P', 'yth', 'n']"],
      explanation: "The 'rsplit('o', 1)' method splits 'Python' into ['Pyth', 'n'] at the rightmost 'o' occurrence."
    },
    {
      index: 58,
      question: "How do you check if a string 'str' contains only printable ASCII characters in Python?",
      answer: "all(32 <= ord(char) <= 126 for char in str)",
      options: ["str.hasPrintableAsciiChars()", "str.containsPrintableAsciiChars()", "str.isprintableAscii()", "all(32 <= ord(char) <= 126 for char in str)"],
      explanation: "To check if a string contains only printable ASCII characters in Python, you can use 'all(32 <= ord(char) <= 126 for char in str)'."
    },
    {
      index: 59,
      question: "What is the purpose of the 'str.isnumeric()' method in Python?",
      answer: "Checks if all characters in 'str' are numeric",
      options: ["Converts 'str' to a numeric value", "Checks if 'str' contains any numeric characters", "Counts the number of numeric characters in 'str'", "Checks if all characters in 'str' are numeric"],
      explanation: "The 'isnumeric()' method checks if all characters in a string are numeric."
    },
    {
      index: 60,
      question: "How do you check if a string 'str' contains only printable ASCII characters, including spaces, in Python?",
      answer: "all(32 <= ord(char) <= 126 or char == ' ' for char in str)",
      options: ["str.hasPrintableAsciiCharsWithSpaces()", "str.containsPrintableAsciiCharsWithSpaces()", "str.isprintableAsciiWithSpaces()", "all(32 <= ord(char) <= 126 or char == ' ' for char in str)"],
      explanation: "To check if a string contains only printable ASCII characters, including spaces, in Python, you can use 'all(32 <= ord(char) <= 126 or char == ' ' for char in str)'."
    },
    {
      index: 61,
      question: "What is the result of 'str.strip('P')' when 'str' is 'Python'?",
      answer: "ython",
      options: ["Python", "Pytho", "ython", "Py"],
      explanation: "The 'strip('P')' method removes leading and trailing 'P' characters from 'Python', resulting in 'ython'."
    },
    {
      index: 62,
      question: "How do you check if a string 'str' contains only printable ASCII characters and newlines in Python?",
      answer: "all((32 <= ord(char) <= 126 or char == '\\n') for char in str)",
      options: ["str.hasPrintableAsciiCharsWithNewlines()", "str.containsPrintableAsciiCharsWithNewlines()", "str.isprintableAsciiWithNewlines()", "all((32 <= ord(char) <= 126 or char == '\\n') for char in str)"],
      explanation: "To check if a string contains only printable ASCII characters and newlines in Python, you can use 'all((32 <= ord(char) <= 126 or char == '\\n') for char in str)'."
    },
    {
      index: 63,
      question: "What is the result of 'str.rstrip('Py')' when 'str' is 'Python'?",
      answer: "tho",
      options: ["Python", "Pytho", "tho", "Py"],
      explanation: "The 'rstrip('Py')' method removes trailing 'P' and 'y' characters from 'Python', resulting in 'tho'."
    },
    {
      index: 64,
      question: "How do you check if a string 'str' contains only printable ASCII characters and spaces in Python?",
      answer: "all((32 <= ord(char) <= 126 or char == ' ') for char in str)",
      options: ["str.hasPrintableAsciiCharsWithSpaces()", "str.containsPrintableAsciiCharsWithSpaces()", "str.isprintableAsciiWithSpaces()", "all((32 <= ord(char) <= 126 or char == ' ') for char in str)"],
      explanation: "To check if a string contains only printable ASCII characters and spaces in Python, you can use 'all((32 <= ord(char) <= 126 or char == ' ') for char in str)'."
    },
    {
      index: 65,
      question: "What is the result of 'str.rstrip('on')' when 'str' is 'Python'?",
      answer: "Pyth",
      options: ["Python", "Pyth", "Py", "Pytho"],
      explanation: "The 'rstrip('on')' method removes trailing 'o' and 'n' characters from 'Python', resulting in 'Pyth'."
    },
    {
      index: 66,
      question: "How do you check if a string 'str' contains only printable ASCII characters and newlines, excluding spaces, in Python?",
      answer: "all((32 <= ord(char) <= 126 or char == '\\n') and char != ' ' for char in str)",
      options: ["str.hasPrintableAsciiCharsWithNewlinesExcludingSpaces()", "str.containsPrintableAsciiCharsWithNewlinesExcludingSpaces()", "str.isprintableAsciiWithNewlinesExcludingSpaces()", "all((32 <= ord(char) <= 126 or char == '\\n') and char != ' ' for char in str)"],
      explanation: "To check if a string contains only printable ASCII characters and newlines, excluding spaces, in Python, you can use 'all((32 <= ord(char) <= 126 or char == '\\n') and char != ' ' for char in str)'."
    },
    {
      index: 67,
      question: "What is the result of 'str.replace('o', 'i', 2)' when 'str' is 'Python'?",
      answer: "Pythin",
      options: ["Pythi", "Python", "Pythin", "Pythin"],
      explanation: "The 'replace('o', 'i', 2)' method replaces the first two occurrences of 'o' with 'i' in 'Python', resulting in 'Pythin'."
    },
    {
      index: 68,
      question: "How do you check if a string 'str' contains only printable ASCII characters, including spaces, and newlines in Python?",
      answer: "all((32 <= ord(char) <= 126 or char == ' ' or char == '\\n') for char in str)",
      options: ["str.hasPrintableAsciiCharsWithSpacesAndNewlines()", "str.containsPrintableAsciiCharsWithSpacesAndNewlines()", "str.isprintableAsciiWithSpacesAndNewlines()", "all((32 <= ord(char) <= 126 or char == ' ' or char == '\\n') for char in str)"],
      explanation: "To check if a string contains only printable ASCII characters, including spaces, and newlines in Python, you can use 'all((32 <= ord(char) <= 126 or char == ' ' or char == '\\n') for char in str)'."
    },
    {
        "index": 69,
        "question": "What is the result of 'str.partition('o')' when 'str' is 'Python'?",
        "answer": "['Pyth', 'o', 'n']",
        "options": ["['Pyth', 'o', 'n']", "['P', 'yth', 'n']", "['Python']", "['P', 'ytho', 'n']"],
        "explanation": "The 'partition('o')' method splits 'Python' into ['Pyth', 'o', 'n'] at the first 'o' occurrence."
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
  