const movies = [{
    title: "Star Wars",
    director: 'George Lucas',
    released: 1977
},{
    title: "The Truman Show",
    director: 'Peter Weir',
    released: 1988
},{
    title: "The last starfighter",
    director: 'Nick Castle',
    released: 1984
}]

const ul = document.querySelector('ul')


movies.forEach(movie => {
    const li = document.createElement('li');
    
    const { title, director, released } = movie;
    li.innerHTML = `
        <span class="title">${title}</span>,
        <span class="director">${director}</span>,
        <span class="released">${released ? released : 'no release info'}</span>
    `;
    
    ul.appendChild(li);
});
