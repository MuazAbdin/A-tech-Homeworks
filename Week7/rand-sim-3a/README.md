# Running/Environment

- Make sure you **fork** this repository to your own Github, then clone it to your computer
- You will have to download + install Python on your machine
    - If you have a Mac, use `brew`, otherwise good luck =]
    - After your install is complete, close then open your VSCode/terminal again
    - You can check that the installation worked by typing `python` in the command line/terminal - this should start an interactive Python runtime (like typing `node` in the command line)
- From the project root directory, run `python main.py` to execute the script

# Features

The `main.py` file has a Python script that executes a simple task:
- Read a CSV file (like Excel, but just data; no formatting)
    - The file is `articles.csv`; it has four columns: `title`, `date`, `category`, `author`, and `pages`
    - Each row has data about one article; `t1` stands for "title1", `a1` for "author1" etc
- Store the data in a list (array) of dicts (in Python, _objects_ are called _dicts_, short for _dictionary_)
- Filter the data based on some input

# To Do
- Add a new function called `count_articles` to `main.py` that counts and `return` the number of articles by some arguments.
    - For example, `print(count_articles('title', 't4'))` should `print` **1**
    - Another example, `print(count_articles('author', 'a1'))` should `print` **2**
- Add a new function called `is_article` to `main.py` that `return` **True** `if` an article was found by some arguments, or **False** `else`where.
    - For example, `print(is_article('title', 't4'))` should `print` **True**
    - Another example, `print(is_article('author', 'a0'))` should `print` **False**
- Add a new function called `longest_article` to `main.py` that `return` the article that has the highest number of `pages` between other articles with the same arguments.
    - For example, `print(longest_article('author', 'a1'))` should `print`:
    ```
    {'title': 't4', 'date': '4-8-19', 'category': 'c1', 'author': 'a1', 'pages': '28'}
    ```
    ***a1*** has two articles: ***t1*** with 20 `pages`, and ***t4*** with 28 `pages`. Therefore this function should return the ***t4*** article.

*Hint: Use the existing script to help you with building your own functions*

# Extra
- Add a new method to `CSV_Manager` that reads the CSV and stores it as a single object that maps each author to his/her articles, and each category to all the articles with that category. You can print the resulting data to make sure it's correct. Ultimately, your data should look like this:
   ```
   {
        author1_name: [{data on article1 by author1}, {data on article2 by author1}, {etc}],
        author2_name: [{data on article1 by author2}, {data on article2 by author2}, {etc}],
        etc,
        category1_name: [{data on article1 in category1}, {data on article2 in category1}, {etc}],
        category2_name: [{data on article1 in category2}, {data on article2 in category2}, {etc}],
        etc
    }
    ```

# Python Tips & Tricks
- The `print` function is equivalent to `console.log`
    - That said, debugging works the same on VSCode
- In Python, **indentation matters** - you will run into syntax errors if you have incorrect indentation
    - Let VSCode take care of this for you with auto-formatting
- In Python, **True** is true and **False** is false :]
- Python conventions: functions, methods and variables names should be all lower case with '_' between each word

# Goal
In this simulation the aim is to expose you to a new programming language, set of conventions, concept (reading files), and to underscore the fact that syntax doesn't matter - you know how to code! So code Python now =]