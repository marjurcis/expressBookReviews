const axios = require('axios').default
const url = 'http://localhost:5000'

function getAllBooks() {
    const req = axios.get(url);

    req.then(response => {
        const books = response.data;

        console.log("Get all books")
        console.log(JSON.stringify(books))
    })
        .catch(err => {
            console.log(err.toString())
        })
}

function getBookByIsbn(isbn) {
    const req = axios.get(`${url}/isbn/${isbn}`);

    req.then(response => {
        const book = response.data;

        console.log("Get books by ISBN")
        console.log(JSON.stringify(book))
    })
        .catch(err => {
            console.log(err.toString())
        })
}

function getBookByAuthor(author) {
    const req = axios.get(`${url}/author/${author}`);

    req.then(response => {
        const book = response.data;

        console.log("Get books by Author")
        console.log(JSON.stringify(book))
    })
        .catch(err => {
            console.log(err.toString())
        })
}

async function getBookByTitle(title) {
    const req = axios.get(`${url}/title/${title}`);

    req.then(response => {
        const book = response.data;

        console.log("Get books by Title")
        console.log(JSON.stringify(book))
    })
        .catch(err => {
            console.log(err.toString())
        })
}

getAllBooks()
getBookByIsbn(2)
getBookByAuthor("Unknown");
getBookByTitle("Fairy tales");