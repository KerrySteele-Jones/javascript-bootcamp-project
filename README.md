## Javascript ToDo list - ¡Mi Lista de Tareas en Español! 🇪🇸
- I have made this spanished theme, thinking about how I could use this later on to help me practice and learn spanish words. This will encourage me to write words in spanish everyday.

# 👉 Live Demo - https://kerrysteele-jones.github.io/javascript-bootcamp-project/ 

# 👀 File Set up

├── index.html # The main webpage layout
├── styles.css # All styling 
└── script.js # JavaScript (add/delete/edit tasks)

# 👀 How it works
- You type a word and click Añadir
- JavaScript checks it and adds it to the array
- renderTasks() draws it on the page
- The delete button removes it from the array + redraws the list
- The edit button replaces the task with an input, Save, and Cancel
- Save updates the array and redraws it

# 👀 Process (to help me remember later)
- I used two websites as reference to help me with the list: 
        https://www.w3schools.com/howto/howto_js_todolist.asp
        https://www.codedex.io/projects/create-a-to-do-list-app-with-html-css-js

- I created the basic HTML structure and styled the layout using Flexbox. I tried to keep it consistent with my Spanish learning site, using the same fonts, colours, and card-style sections.

- I used const to create variables that don’t need to change, such as the input box, the button, the list, and the error message area. I found these using document.querySelector() so I could control parts of my HTML with JavaScript.

- I used let for variables that do change, for example, the array of tasks that gets updated when I add, edit, or delete items.

- I added event listeners to the Add button, Delete buttons, and Edit buttons so the app responds to clicks.

- I used built-in JavaScript methods:
    .trim() to clean up spaces from user input
    .some() to check for duplicates
    .push() to add new tasks to the array
    .splice() to remove them
    .forEach() to loop through and show the tasks on the page

- I used document.createElement() to build new HTML elements with JavaScript (list items, buttons, and inputs), and .appendChild() to add them to the page.

- I made sure to validate the input so the user can’t add empty tasks or repeat the same one.

- I added a bonus edit feature with Save and Cancel buttons, using startEditMode() to swap the list item for an input box when the user clicks the ✏️ icon.

# 👀 Spanish Translations

👉 "No Puedos dejar esto en blanco" = You can't leave this blank

👉 "Ya has anadidio esa palabra" = You've already added this word

👉 "No puedes guardar un campo vacío" = You cannot save an empty field 

👉 "Ya existe esta palabra" = This word already exists

👉 "Mis Tareas Espanol" = My Spanish homework

👉 "Que palabra quieres practicar?" = What word do you want to practice

👉 "Aqui esta tu lista" = Here is your list


# 👀 What I would like to doo to continue the project
Add a translation api to check the words that I enter are correct.  

# 🙋‍♀️ Built By

Kerry Steele-Jones – Gracias por visitarnos 💕
