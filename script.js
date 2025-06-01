console.log('Hello')

const formEl = document.querySelector('.js-form-books')
const input = document.querySelector('.js-input')
const btn = document.querySelector('.js-btn')




const handleSubmit = event => {
    event.preventDefault()
    const form = event.target;
    const query = form.elements.user_query.value;
    console.log(query);
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`
    fetch(url)
        .then(response => {
        
        })
        .then(data => {
        
        })
        .catch(error => {
        
    })
}

formEl.addEventListener('submit', handleSubmit )