const book_titles = [
    "Dune",
    "House of Leaves",
    "The Three kingdoms"
]


for(let i = 0; i < book_titles.length; i++){
    console.log(book_titles[i])
}

console.log(book_titles)
console.table(book_titles)




const title = 'Dune'
const author = 'Frank Herbert'
const page_count = 704

console.log({title, author, page_count})

const book2 = {
    title,
    author,
    count : page_count,
    sequals: [
        "Dune Messiah",
        "Mentats of Dune"
    ]
}

console.log(book2)

const m = 'title'

const book = [{
    title: 'Dune',
    author: 'Frank Herbert',
    page_count: 704
},{
    title: "Harry Potter",
    author: 'J.K. Rowling',
    page_count: 496
}]

console.log(book)
console.log(JSON.stringify(book))
console.log(book[m])

const p = document.querySelector('p')
p.textContent = `${book[0].title} was writen by ${book[0].author}`