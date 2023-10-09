const taskInput = document.querySelector('#taskInput')
const taskList = document.querySelector('#taskList')
const addTaskForm = document.querySelector('#addTaskForm')

taskList.style = `
    list-style: none;
    margin-top: 1rem;
    font-size: 1.5em;
`
// onChange event listener to the checkbox input element calls the toggleTaskCompletion() function whenever the checkbox is checked or unchecked.
const createTaskItem = (task) => `
<li>
    <input type="checkbox" name="task" value="${task}" onchange="toggleTaskCompletion(event)">
    <label for="task">${task}</label>
    <button type="button" onclick="removeTask(event)">X</button>
</li>
`

// Variable storedTasks holds the tasks we'll get from the local storage
//Since the tasks are stored as strings, we use the JSON.parse() method to convert it to a javascript object.
const storedTasks = JSON.parse(localStorage.getItem('tasks')) || []

// FUnction renders tasks that we have in local storage.
// We use the forEach() method to loop through the storedTasks array and call
// the createTaskItem() function for each task.
// We're using the beforeend position, which will add the HTML code at the end of the unordered list.
const renderTasks = () => {
    storedTasks.forEach((task) => {
        taskList.insertAdjacentHTML(
            'beforeend',
            createTaskItem(task)
        )
    })
}

window.onload = renderTasks

const addTask = (event) => {
    event.preventDefault()  //Prevents default behavior of the form to reload the page

    const task = taskInput.value
    const taskItem = createTaskItem(task)
    taskList.insertAdjacentHTML('beforeend', taskItem)

    // Adds the task to the storedTasks array and stores it in LocalStorage
    storedTasks.push(task)
    localStorage.setItem(
        'tasks',
        JSON.stringify(storedTasks)
    )

    addTaskForm.reset() //Clears the input field by resetting the form using reset() method.
}

addTaskForm.addEventListener('submit', addTask) //Calls the addTask() function when the form is submitted.


// Function takes the event object as an argument, and uses the target property of the event to get
// the checkbox that was clicked. Then uses the parentElement property to get the list item that contains the checkbox.
const toggleTaskCompletion = (event) => {
    const taskItem = event.target.parentElement
    const task = taskItem.querySelector('label')

    if (event.target.checked) {
        task.style.textDecoration = 'line-through'
    } else {
        task.style.textDecoration = 'none'
    }
}

const removeTask = (event) => {
    const taskItem = event.target.parentElement
    const task = taskItem.querySelector('label').innerText
    const indexOfTask = storedTasks.indexOf(task)

    storedTasks.splice(indexOfTask, 1)
    localStorage.setItem(
        'tasks',
        JSON.stringify(storedTasks)
    )
    taskItem.remove()
}