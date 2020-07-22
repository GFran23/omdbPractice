let container = document.querySelector('.container');
let nextButton = document.querySelector('.nextButton');
let previousButton = document.querySelector('.previousButton');
let searchButton = document.querySelector('.searchButton');
let searchInput = document.querySelector('.searchInput')
let error = document.querySelector('.error');

searchInput.value = 'Marvel';
let page = 1;

let getData = (e) => {
    container.textContent = " ";
    let search = searchInput.value;
    fetch(`https://www.omdbapi.com/?s=${search}&page=${page}&apikey=c0b965ad`)
        .then(response => {
            return response.json();
        })
        .then(response => {

            let movies = response.Search

            createCards(movies);
            console.log(movies);
        })
        .catch(err => {
            console.log(err);
            // error.textContent = "No Results";

        })
}

function createCards(movies) {
    for (let i = 0; i < movies.length; i++) {
        

        let poster = document.createElement('img');
        let title = document.createElement('div');
        let year = document.createElement('div');
        let type = document.createElement('div');
        let card = document.createElement('div');

        poster.src = movies[i].Poster;
        poster.width = 320;
        poster.height = 420;
        title.textContent = movies[i].Title;
        year.textContent = movies[i].Year;
        type.textContent = movies[i].Type;

        card.className = 'card'

        container.appendChild(card);
        card.appendChild(poster);
        card.appendChild(title);
        card.appendChild(year);
        card.appendChild(type);

        if (movies[i].Poster == "N/A") {
            poster.setAttribute('src', './assets/gloMovie.jpg')
        } else {
            poster.setAttribute('img', movies[i].Title)
        }


    }

}
getData();
searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    getData(e);
})

nextButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(page);
    page += 1;
    getData(e);
})

previousButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(page);
    page -= 1;
    getData(e);
})



// get access to body pre-fetch
// let body = document.querySelector('body');

// // Inside fetch:
//   // create elements
// let header = document.createElement('h1');
// // give elements class names
// header.setAttribute('class', 'title');
// // set innerHTML(s) if necissary
// header.innerHTML = 'This is working!'
// // add new elements to body
// body.appendChild(header);