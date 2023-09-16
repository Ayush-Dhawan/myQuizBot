



const DataSet1 = [
    {
      index: 0,
      question: "What library is commonly used for data manipulation and analysis in Python?",
      answer: "Pandas",
      options: ["NumPy", "Matplotlib", "Seaborn", "Pandas"],
      explanation: "Pandas is a popular Python library used for data manipulation and analysis, providing data structures like DataFrames and Series."
    },
    {
      index: 1,
      question: "Which library is suitable for performing numerical operations and working with arrays in Python?",
      answer: "NumPy",
      options: ["Pandas", "Matplotlib", "Seaborn", "NumPy"],
      explanation: "NumPy is a fundamental library for numerical operations and working with arrays in Python, offering a wide range of mathematical functions."
    },
    {
      index: 2,
      question: "What is the primary data structure in Pandas for storing and manipulating tabular data?",
      answer: "DataFrame",
      options: ["Array", "List", "Tuple", "DataFrame"],
      explanation: "The DataFrame is the primary data structure in Pandas for storing and manipulating tabular data with rows and columns."
    },
    {
      index: 3,
      question: "Which library is commonly used for creating visualizations and plots in Python?",
      answer: "Matplotlib",
      options: ["NumPy", "Seaborn", "Pandas", "Matplotlib"],
      explanation: "Matplotlib is a widely used Python library for creating visualizations, including various types of charts and plots."
    },
    {
      index: 4,
      question: "What is the purpose of Seaborn in Python data visualization?",
      answer: "Enhancing the aesthetics and style of Matplotlib plots",
      options: [
        "Creating interactive-tab visualizations",
        "Generating statistical models",
        "Enhancing the aesthetics and style of Matplotlib plots",
        "Handling data preprocessing"
      ],
      explanation: "Seaborn is used in Python data visualization to enhance the aesthetics and style of Matplotlib plots, making them more visually appealing."
    },
    {
      index: 5,
      question: "In Pandas, what is the function to load data from a CSV file into a DataFrame?",
      answer: "read_csv",
      options: ["load_data", "import_data", "read_data", "read_csv"],
      explanation: "The 'read_csv' function in Pandas is used to load data from a CSV file into a DataFrame for further analysis."
    },
    {
      index: 6,
      question: "Which library is suitable for creating statistical plots and data visualizations with an emphasis on informative graphics?",
      answer: "Seaborn",
      options: ["Matplotlib", "NumPy", "Pandas", "Seaborn"],
      explanation: "Seaborn is a Python library known for creating statistical plots and data visualizations with an emphasis on informative graphics."
    },
    {
      index: 7,
      question: "What is the purpose of NumPy's 'ndarray' data structure?",
      answer: "Storing and manipulating arrays of data efficiently",
      options: [
        "Creating bar charts",
        "Storing and manipulating arrays of data efficiently",
        "Performing SQL queries",
        "Generating random numbers"
      ],
      explanation: "NumPy's 'ndarray' data structure is designed for efficiently storing and manipulating arrays of data, especially for numerical computations."
    },
    {
      index: 8,
      question: "Which Pandas function is used to obtain a quick overview of the statistics of a DataFrame?",
      answer: "describe",
      options: ["overview", "summary", "statistics", "describe"],
      explanation: "The 'describe' function in Pandas provides a quick overview of the statistics of a DataFrame, including count, mean, std, min, and more."
    },
    {
      index: 9,
      question: "What is the primary role of Pandas' 'GroupBy' operation?",
      answer: "Grouping and aggregating data based on specified criteria",
      options: [
        "Sorting data in ascending order",
        "Renaming column names",
        "Grouping and aggregating data based on specified criteria",
        "Merging multiple DataFrames"
      ],
      explanation: "The 'GroupBy' operation in Pandas is used for grouping and aggregating data based on specified criteria, allowing for data analysis by groups."
    },
    {
      index: 10,
      question: "Which library is used for creating interactive-tab and web-ready visualizations in Python?",
      answer: "Bokeh",
      options: ["Plotly", "Seaborn", "Matplotlib", "Bokeh"],
      explanation: "Bokeh is a Python library used for creating interactive-tab and web-ready visualizations, suitable for building data dashboards and applications."
    },
    {
      index: 11,
      question: "What is the purpose of Pandas' 'pivot_table' function?",
      answer: "Reshaping and summarizing data by creating a pivot-like table",
      options: [
        "Sorting data by column",
        "Joining two DataFrames",
        "Calculating correlation coefficients",
        "Reshaping and summarizing data by creating a pivot-like table"
      ],
      explanation: "Pandas' 'pivot_table' function is used for reshaping and summarizing data by creating a pivot-like table, making it easier to analyze and visualize."
    },
    {
      index: 12,
      question: "Which library provides a high-level interface for drawing attractive-tab and informative statistical graphics?",
      answer: "Seaborn",
      options: ["Matplotlib", "Plotly", "Pandas", "Seaborn"],
      explanation: "Seaborn provides a high-level interface for drawing attractive-tab and informative statistical graphics, simplifying the process of creating complex plots."
    },
    {
      index: 13,
      question: "In Pandas, what is the purpose of the 'apply' function?",
      answer: "Applying a function along an axis of a DataFrame or Series",
      options: [
        "Sorting data by multiple columns",
        "Creating subplots",
        "Calculating the mean",
        "Applying a function along an axis of a DataFrame or Series"
      ],
      explanation: "The 'apply' function in Pandas is used for applying a function along an axis of a DataFrame or Series, enabling custom data transformations."
    },
    {
      index: 14,
      question: "What is the primary data structure in NumPy for representing n-dimensional arrays?",
      answer: "ndarray",
      options: ["DataFrame", "Array", "List", "ndarray"],
      explanation: "The 'ndarray' is the primary data structure in NumPy for representing n-dimensional arrays, which are efficient for mathematical operations."
    },
    {
      index: 15,
      question: "Which library is commonly used for creating 2D and 3D plots in Python?",
      answer: "Matplotlib",
      options: ["Seaborn", "Plotly", "Pandas", "Matplotlib"],
      explanation: "Matplotlib is a widely used Python library for creating both 2D and 3D plots, making it versatile for various visualization tasks."
    },
    {
      index: 16,
      question: "What is the purpose of Pandas' 'concat' function?",
      answer: "Concatenating DataFrames along a particular axis",
      options: [
        "Grouping data by a specified column",
        "Merging DataFrames with different column names",
        "Calculating summary statistics",
        "Concatenating DataFrames along a particular axis"
      ],
      explanation: "The 'concat' function in Pandas is used for concatenating DataFrames along a particular axis, combining data vertically or horizontally."
    },
    {
      index: 17,
      question: "Which library is suitable for creating interactive-tab and shareable data visualizations in Python?",
      answer: "Plotly",
      options: ["Matplotlib", "Seaborn", "Pandas", "Plotly"],
      explanation: "Plotly is a Python library used for creating interactive-tab and shareable data visualizations, suitable for web-based applications and dashboards."
    },
    {
      index: 18,
      question: "What is the purpose of the 'matplotlib.pyplot' module in Matplotlib?",
      answer: "Creating plots and visualizations with Matplotlib",
      options: [
        "Performing numerical operations",
        "Handling data manipulation",
        "Creating machine learning models",
        "Creating plots and visualizations with Matplotlib"
      ],
      explanation: "The 'matplotlib.pyplot' module in Matplotlib is used for creating various types of plots and visualizations in Python."
    },
    {
      index: 19,
      question: "In NumPy, what is the primary advantage of using 'broadcasting'?",
      answer: "Efficient element-wise operations on arrays with different shapes",
      options: [
        "Combining arrays into a single array",
        "Creating subarrays",
        "Sorting arrays",
        "Efficient element-wise operations on arrays with different shapes"
      ],
      explanation: "Broadcasting in NumPy allows for efficient element-wise operations on arrays with different shapes, simplifying numerical computations."
    },
    {
      index: 20,
      question: "What is the purpose of the 'crosstab' function in Pandas?",
      answer: "Computing a cross-tabulation of two or more factors",
      options: [
        "Sorting data by column names",
        "Creating line plots",
        "Calculating summary statistics",
        "Computing a cross-tabulation of two or more factors"
      ],
      explanation: "The 'crosstab' function in Pandas is used for computing a cross-tabulation of two or more factors, providing insights into relationships within data."
    },
    {
      index: 21,
      question: "Which library is commonly used for creating geographic and geospatial visualizations in Python?",
      answer: "Folium",
      options: ["Plotly", "Matplotlib", "Seaborn", "Folium"],
      explanation: "Folium is a Python library commonly used for creating geographic and geospatial visualizations, such as interactive-tab maps."
    },
    {
      index: 22,
      question: "What is the primary advantage of using Pandas for data analysis?",
      answer: "Efficient data manipulation and cleaning with DataFrames",
      options: [
        "Creating complex visualizations",
        "Handling machine learning tasks",
        "Generating random data",
        "Efficient data manipulation and cleaning with DataFrames"
      ],
      explanation: "Pandas offers efficient data manipulation and cleaning capabilities, particularly through the use of DataFrames, simplifying data analysis tasks."
    },
    {
      index: 23,
      question: "Which NumPy function is used to calculate the mean of array elements?",
      answer: "mean",
      options: ["average", "median", "sum", "mean"],
      explanation: "The 'mean' function in NumPy is used to calculate the mean (average) of array elements along a specified axis."
    },
    {
      index: 24,
      question: "What is the primary advantage of using Seaborn alongside Matplotlib for data visualization?",
      answer: "Creating visually appealing statistical plots with ease",
      options: [
        "Enhancing performance in numerical operations",
        "Creating 3D visualizations",
        "Handling large datasets",
        "Creating visually appealing statistical plots with ease"
      ],
      explanation: "Seaborn complements Matplotlib by simplifying the creation of visually appealing statistical plots, making data visualization more accessible."
    },
    {
      index: 25,
      question: "In Pandas, what does the 'drop' function do when applied to a DataFrame?",
      answer: "Removes specified labels or rows",
      options: [
        "Sorts the DataFrame by column",
        "Renames column names",
        "Calculates the mean",
        "Removes specified labels or rows"
      ],
      explanation: "The 'drop' function in Pandas is used to remove specified labels (columns or rows) from a DataFrame, allowing for data manipulation."
    },
    {
      index: 26,
      question: "Which Pandas function is used to rename columns in a DataFrame?",
      answer: "rename",
      options: ["replace", "modify", "alter", "rename"],
      explanation: "The 'rename' function in Pandas is used to rename columns in a DataFrame, providing flexibility in column name changes."
    },
    {
      index: 27,
      question: "What is the purpose of the 'corr' function in Pandas?",
      answer: "Calculating the correlation between columns in a DataFrame",
      options: [
        "Creating line plots",
        "Sorting data by column",
        "Merging DataFrames",
        "Calculating the correlation between columns in a DataFrame"
      ],
      explanation: "The 'corr' function in Pandas is used to calculate the correlation between columns in a DataFrame, indicating the degree of linear relationship."
    },
    {
      index: 28,
      question: "Which Pandas function is used to merge two or more DataFrames based on common columns or indices?",
      answer: "merge",
      options: ["concatenate", "join", "combine", "merge"],
      explanation: "The 'merge' function in Pandas is used to merge two or more DataFrames based on common columns or indices, enabling data integration."
    },
    {
      index: 29,
      question: "What is the primary purpose of NumPy's 'random' module?",
      answer: "Generating random numbers and data",
      options: [
        "Sorting arrays",
        "Performing mathematical operations",
        "Creating visualizations",
        "Generating random numbers and data"
      ],
      explanation: "NumPy's 'random' module is primarily used for generating random numbers and data, supporting various probability distributions."
    },
    {
      index: 30,
      question: "In Pandas, how is missing data represented?",
      answer: "NaN (Not a Number)",
      options: ["None", "Null", "NaN (Not a Number)", "Missing"],
      explanation: "In Pandas, missing data is represented as 'NaN' (Not a Number), indicating that a value is not available or undefined."
    },
    {
      index: 31,
      question: "What is the primary advantage of using Matplotlib's 'subplots' function?",
      answer: "Creating multiple plots within a single figure",
      options: [
        "Customizing plot aesthetics",
        "Generating 3D plots",
        "Handling large datasets",
        "Creating multiple plots within a single figure"
      ],
      explanation: "Matplotlib's 'subplots' function allows for creating multiple plots within a single figure, facilitating the comparison of data visualizations."
    },
    {
      index: 32,
      question: "In NumPy, what function is used to calculate the median of array elements?",
      answer: "median",
      options: ["mean", "average", "sum", "median"],
      explanation: "The 'median' function in NumPy is used to calculate the median value of array elements along a specified axis."
    },
    {
      index: 33,
      question: "What is the primary role of the 'iloc' function in Pandas?",
      answer: "Selection and indexing of data by integer positions",
      options: [
        "Sorting data by column",
        "Calculating summary statistics",
        "Renaming columns",
        "Selection and indexing of data by integer positions"
      ],
      explanation: "The 'iloc' function in Pandas is used for selecting and indexing data within a DataFrame by integer positions."
    },
    {
      index: 34,
      question: "Which Pandas function is used to calculate the sum of values in a DataFrame?",
      answer: "sum",
      options: ["mean", "average", "total", "sum"],
      explanation: "The 'sum' function in Pandas is used to calculate the sum of values in a DataFrame, either along columns or rows."
    },
    {
      index: 35,
      question: "What is the primary advantage of using Plotly for data visualization?",
      answer: "Creating interactive-tab and web-based visualizations",
      options: [
        "Generating static plots",
        "Enhancing data analysis",
        "Creating 3D visualizations",
        "Creating interactive-tab and web-based visualizations"
      ],
      explanation: "Plotly is known for its capability to create interactive-tab and web-based visualizations, making data exploration engaging and shareable."
    },
    {
      index: 36,
      question: "In Pandas, what is the primary advantage of using the 'pivot' function?",
      answer: "Reshaping and transforming data by pivoting",
      options: [
        "Sorting data by multiple columns",
        "Grouping data by a specified column",
        "Calculating summary statistics",
        "Reshaping and transforming data by pivoting"
      ],
      explanation: "The 'pivot' function in Pandas is used for reshaping and transforming data by pivoting, facilitating data analysis and visualization."
    },
    {
      index: 37,
      question: "Which library is commonly used for creating animated and interactive-tab data visualizations in Python?",
      answer: "Plotly",
      options: ["Matplotlib", "Seaborn", "Pandas", "Plotly"],
      explanation: "Plotly is a popular Python library for creating animated and interactive-tab data visualizations, suitable for web-based applications."
    },
    {
      index: 38,
      question: "What is the purpose of the 'head' function in Pandas?",
      answer: "Displaying the first few rows of a DataFrame",
      options: [
        "Calculating the mean",
        "Sorting data by column",
        "Filtering data by conditions",
        "Displaying the first few rows of a DataFrame"
      ],
      explanation: "The 'head' function in Pandas is used to display the first few rows of a DataFrame, providing an initial overview of the data."
    },
    {
      index: 39,
      question: "Which NumPy function is used to calculate the standard deviation of array elements?",
      answer: "std",
      options: ["mean", "average", "sum", "std"],
      explanation: "The 'std' function in NumPy is used to calculate the standard deviation of array elements, indicating the spread of data."
    },
    {
      index: 40,
      question: "What is the primary advantage of using Matplotlib's 'scatter' plot?",
      answer: "Visualizing relationships between two variables",
      options: [
        "Creating bar charts",
        "Generating pie charts",
        "Handling categorical data",
        "Visualizing relationships between two variables"
      ],
      explanation: "Matplotlib's 'scatter' plot is used to visualize relationships between two variables, making it useful for exploring correlations."
    },
    {
      index: 41,
      question: "In Pandas, what is the purpose of the 'groupby' function?",
      answer: "Grouping data based on specified criteria for aggregation",
      options: [
        "Sorting data by multiple columns",
        "Merging DataFrames",
        "Calculating summary statistics",
        "Grouping data based on specified criteria for aggregation"
      ],
      explanation: "The 'groupby' function in Pandas is used for grouping data based on specified criteria, enabling aggregation and analysis by groups."
    },
    {
      index: 42,
      question: "Which library is commonly used for creating 3D visualizations and animations in Python?",
      answer: "Mayavi",
      options: ["Matplotlib", "Seaborn", "Pandas", "Mayavi"],
      explanation: "Mayavi is a Python library commonly used for creating 3D visualizations and animations, particularly in scientific and engineering fields."
    },
    {
      index: 43,
      question: "What is the purpose of the 'seaborn.heatmap' function?",
      answer: "Creating a heatmap to visualize data",
      options: [
        "Creating bar plots",
        "Generating scatter plots",
        "Performing data cleaning",
        "Creating a heatmap to visualize data"
      ],
      explanation: "The 'seaborn.heatmap' function is used to create a heatmap, which is a graphical representation of data with colors indicating values."
    },
    {
      index: 44,
      question: "In Pandas, what does the 'fillna' function do?",
      answer: "Filling missing values in a DataFrame with specified data",
      options: [
        "Dropping rows with missing values",
        "Sorting data by column",
        "Calculating the mean",
        "Filling missing values in a DataFrame with specified data"
      ],
      explanation: "The 'fillna' function in Pandas is used to fill missing values in a DataFrame with specified data, addressing missing data issues."
    }
  ];

  const DataSet2 = [
    {
      index: 45,
      question: "What is the primary advantage of using NumPy arrays over Python lists for numerical computations?",
      answer: "Efficient element-wise operations",
      options: [
        "Better memory management",
        "Built-in sorting functions",
        "Support for heterogeneous data types",
        "Efficient element-wise operations"
      ],
      explanation: "NumPy arrays offer efficient element-wise operations, making them ideal for numerical computations."
    },
    {
      index: 46,
      question: "In Pandas, what is the purpose of the 'pivot_table' function?",
      answer: "Creating spreadsheet-style pivot tables for data analysis",
      options: [
        "Reshaping data by pivoting",
        "Grouping data based on criteria",
        "Calculating summary statistics",
        "Creating spreadsheet-style pivot tables for data analysis"
      ],
      explanation: "The 'pivot_table' function in Pandas is used for creating spreadsheet-style pivot tables, aiding in data analysis and summarization."
    },
    {
      index: 47,
      question: "What does the 'numpy.arange' function do?",
      answer: "Generate evenly spaced values within a specified range",
      options: [
        "Perform mathematical operations",
        "Sort array elements",
        "Create random numbers",
        "Generate evenly spaced values within a specified range"
      ],
      explanation: "The 'numpy.arange' function is used to generate evenly spaced values within a specified range, similar to Python's 'range' function."
    },
    {
      index: 48,
      question: "In Pandas, what is the primary purpose of the 'apply' function?",
      answer: "Applying a function along an axis of a DataFrame or Series",
      options: [
        "Sorting data by column",
        "Filtering data by conditions",
        "Calculating summary statistics",
        "Applying a function along an axis of a DataFrame or Series"
      ],
      explanation: "The 'apply' function in Pandas is used for applying a function to each element or row/column along a specified axis."
    },
    {
      index: 49,
      question: "What is the primary advantage of using Seaborn's 'pairplot' function?",
      answer: "Visualizing pairwise relationships between variables in a dataset",
      options: [
        "Creating bar charts",
        "Generating 3D plots",
        "Handling large datasets",
        "Visualizing pairwise relationships between variables in a dataset"
      ],
      explanation: "Seaborn's 'pairplot' function is used to create a grid of pairwise scatterplots, helping visualize relationships in a dataset."
    },
    {
      index: 50,
      question: "Which Pandas function is used for sorting data in a DataFrame based on column values?",
      answer: "sort_values",
      options: ["sort", "order", "arrange", "sort_values"],
      explanation: "The 'sort_values' function in Pandas is used for sorting data in a DataFrame based on the values in one or more columns."
    },
    {
      index: 51,
      question: "What is the primary purpose of the 'numpy.reshape' function?",
      answer: "Changing the shape or dimensions of a NumPy array",
      options: [
        "Calculating the mean",
        "Sorting array elements",
        "Generating random data",
        "Changing the shape or dimensions of a NumPy array"
      ],
      explanation: "The 'numpy.reshape' function is used to change the shape or dimensions of a NumPy array, enabling data manipulation."
    },
    {
      index: 52,
      question: "In Pandas, how do you select a single column from a DataFrame?",
      answer: "Using DataFrame['Column_Name'] notation",
      options: [
        "Using the 'select' function",
        "Using numeric indexing",
        "Using the 'column' method",
        "Using DataFrame['Column_Name'] notation"
      ],
      explanation: "To select a single column from a Pandas DataFrame, you can use the DataFrame['Column_Name'] notation."
    },
    {
      index: 53,
      question: "What is the primary advantage of using Seaborn's 'countplot' function?",
      answer: "Visualizing the distribution of a categorical variable",
      options: [
        "Creating line charts",
        "Generating pie charts",
        "Handling missing data",
        "Visualizing the distribution of a categorical variable"
      ],
      explanation: "Seaborn's 'countplot' function is used to visualize the distribution of a categorical variable, showing the count of each category."
    },
    {
      index: 54,
      question: "Which Pandas function is used to filter rows of a DataFrame based on specified conditions?",
      answer: "boolean indexing",
      options: ["filter", "select", "subset", "boolean indexing"],
      explanation: "Boolean indexing is used in Pandas to filter rows of a DataFrame based on specified conditions, creating subsets of data."
    },
    {
      index: 55,
      question: "What is the primary purpose of the 'numpy.linspace' function?",
      answer: "Generate evenly spaced values over a specified interval",
      options: [
        "Sorting array elements",
        "Performing matrix multiplication",
        "Creating random data",
        "Generate evenly spaced values over a specified interval"
      ],
      explanation: "The 'numpy.linspace' function generates evenly spaced values over a specified interval, useful for creating numerical ranges."
    },
    {
      index: 56,
      question: "In Pandas, what does the 'groupby' function return?",
      answer: "A grouped DataFrame or Series",
      options: [
        "A sorted DataFrame",
        "A concatenated DataFrame",
        "A summary statistic",
        "A grouped DataFrame or Series"
      ],
      explanation: "The 'groupby' function in Pandas returns a grouped DataFrame or Series, which can then be used for various aggregation operations."
    },
    {
      index: 57,
      question: "What is the primary purpose of the 'numpy.concatenate' function?",
      answer: "Combining multiple arrays into a single array",
      options: [
        "Sorting array elements",
        "Calculating statistical measures",
        "Creating random data",
        "Combining multiple arrays into a single array"
      ],
      explanation: "The 'numpy.concatenate' function is used to combine multiple arrays along specified axes, creating a single, larger array."
    },
    {
      index: 58,
      question: "In Pandas, what is the role of the 'to_csv' function?",
      answer: "Saving a DataFrame to a CSV file",
      options: [
        "Sorting data by column",
        "Filtering data by conditions",
        "Calculating summary statistics",
        "Saving a DataFrame to a CSV file"
      ],
      explanation: "The 'to_csv' function in Pandas is used to save the contents of a DataFrame to a CSV (Comma-Separated Values) file."
    },
    {
      index: 59,
      question: "What is the primary advantage of using Seaborn's 'boxplot' function?",
      answer: "Visualizing the distribution of a numerical variable and detecting outliers",
      options: [
        "Creating bar charts",
        "Generating scatter plots",
        "Handling missing data",
        "Visualizing the distribution of a numerical variable and detecting outliers"
      ],
      explanation: "Seaborn's 'boxplot' function is used to visualize the distribution of a numerical variable, including the detection of outliers."
    },
    {
      index: 60,
      question: "In Pandas, how can you rename columns in a DataFrame?",
      answer: "Using the 'rename' method with a dictionary of new column names",
      options: [
        "Using the 'rename' function with a list of new column names",
        "Using the 'columns' method with new column names",
        "By directly assigning new names to the columns",
        "Using the 'rename' method with a dictionary of new column names"
      ],
      explanation: "To rename columns in a Pandas DataFrame, you can use the 'rename' method with a dictionary of new column names."
    },
    {
      index: 61,
      question: "What is the primary purpose of the 'numpy.random' module?",
      answer: "Generating random numbers and random data",
      options: [
        "Performing matrix multiplication",
        "Sorting array elements",
        "Calculating statistical measures",
        "Generating random numbers and random data"
      ],
      explanation: "The 'numpy.random' module in NumPy is used for generating random numbers and random data for various statistical and simulation purposes."
    },
    {
      index: 62,
      question: "In Seaborn, what is the primary purpose of the 'violinplot' function?",
      answer: "Visualizing the distribution of a numerical variable and its probability density",
      options: [
        "Creating bar charts",
        "Generating 3D plots",
        "Handling missing data",
        "Visualizing the distribution of a numerical variable and its probability density"
      ],
      explanation: "Seaborn's 'violinplot' function is used to visualize the distribution of a numerical variable and its probability density, providing insight into data distribution."
    },
    {
      index: 63,
      question: "What is the primary purpose of the 'numpy.mean' function?",
      answer: "Calculating the arithmetic mean of array elements",
      options: [
        "Sorting array elements",
        "Generating random numbers",
        "Calculating the standard deviation",
        "Calculating the arithmetic mean of array elements"
      ],
      explanation: "The 'numpy.mean' function is used to calculate the arithmetic mean (average) of elements in a NumPy array."
    },
    {
      index: 64,
      question: "In Pandas, how do you drop columns from a DataFrame?",
      answer: "Using the 'drop' method with the 'columns' parameter",
      options: [
        "Using the 'delete' function",
        "By assigning 'None' to column names",
        "By using the 'remove' function",
        "Using the 'drop' method with the 'columns' parameter"
      ],
      explanation: "To drop columns from a Pandas DataFrame, you can use the 'drop' method with the 'columns' parameter."
    },
    {
      index: 65,
      question: "What is the primary purpose of the 'seaborn.distplot' function?",
      answer: "Visualizing the distribution of a single numerical variable",
      options: [
        "Creating bar charts",
        "Generating scatter plots",
        "Handling missing data",
        "Visualizing the distribution of a single numerical variable"
      ],
      explanation: "The 'seaborn.distplot' function is used to visualize the distribution of a single numerical variable, showing its histogram and density."
    },
    {
      index: 66,
      question: "In Pandas, how do you filter rows based on multiple conditions (AND operation)?",
      answer: "Using logical operators (&) between conditions",
      options: [
        "Using the 'filter' function",
        "Using the 'select' method",
        "By nesting 'if' statements",
        "Using logical operators (&) between conditions"
      ],
      explanation: "To filter rows based on multiple conditions in Pandas using the AND operation, you can use logical operators like '&' between conditions."
    },
    {
      index: 67,
      question: "What is the primary purpose of the 'seaborn.barplot' function?",
      answer: "Visualizing the relationship between a categorical variable and a numerical variable",
      options: [
        "Creating line charts",
        "Generating pie charts",
        "Handling missing data",
        "Visualizing the relationship between a categorical variable and a numerical variable"
      ],
      explanation: "The 'seaborn.barplot' function is used to visualize the relationship between a categorical variable and a numerical variable by displaying bar heights."
    },
    {
      index: 68,
      question: "In Pandas, what does the 'nunique' function do?",
      answer: "Counting the number of unique values in a Series",
      options: [
        "Sorting data by column",
        "Calculating the mean",
        "Finding the maximum value",
        "Counting the number of unique values in a Series"
      ],
      explanation: "The 'nunique' function in Pandas is used to count the number of unique values in a Series, helpful for data exploration."
    },
    {
      index: 69,
      question: "What is the primary purpose of the 'seaborn.heatmap' function?",
      answer: "Creating a heatmap to visualize the relationships in a dataset",
      options: [
        "Creating bar plots",
        "Generating scatter plots",
        "Performing data cleaning",
        "Creating a heatmap to visualize the relationships in a dataset"
      ],
      explanation: "The 'seaborn.heatmap' function is used to create a heatmap, which helps visualize the relationships in a dataset through color-coding."
    }
  ];

  const DataSet = [...DataSet1, ...DataSet2];
  
  
  // You can access the questions using DataSet[index], where 'index' is the question number from 0 to 69.
  
  
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
  