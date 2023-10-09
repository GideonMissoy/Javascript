const button = document.querySelector('#click-me-btn')

button.addEventListener('click', () => {
    alert('You clicked me!')
})

button.addEventListener('click', (event) => {
    console.log(event.target)
})

button.addEventListener('click', (event) => {
    console.log(event.type)
})

document.body.addEventListener('click', (event) => {
    console.log(event.currentTarget)
})

button.addEventListener('click', (event) => {
    event.stopPropagation()
    alert('You clicked me!')
})

document.body.addEventListener('keydown', (event) => {
    console.log(event.key)
})

const form = document.querySelector('#name-form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event.target.name.value)
})