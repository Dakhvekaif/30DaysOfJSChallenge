let book = {
    title: "The best Js book",
    author: "Kaif",
    year: 2022,
    greet: function(){
        console.log(`The title of book is ${book.title}`);
        console.log(`The author of book is ${book.author}`);
        },
    update: function(){},
    returnString: function(){
        console.log(this.title);
        console.log(this.year);
    }

}


console.log(book);         // task 1

console.log(book.title);
console.log(book.author);  // task 2

console.log(book.greet());  // task 3

book.update = function(num){
    this.year = num
}
console.log(book.update(2055));
console.log(book); // task 4 

let library = {
    name: "The Best Library",
    books:[
        {
            name: "The Infinite Sea",
            author: "Rick Yancey"
        },
        {
            name: "Divergent Paths",
            author: "Veronica Roth"
        },
        {
            name: "The Silent Patient",
            author: "Alex Michaelides"
        },
        {
            name: "Circe",
            author: "Madeline Miller"
        }
    ]
}
console.log(library); // task 5
console.log(library.name);
for(i=0; i<library.books.length;i++){
    console.log(library.books[i].name);
}   // task 6 

book.returnString(); // task 7

for(keys in book){
    // console.log(keys + " : " + book[keys]);
}  // task 8

console.log(Object.keys(book));
console.log(Object.values(book)); // task 9
