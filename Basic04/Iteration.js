// const arr = [1,2,3,4,5,6]
//     arr2 = ""
// for(i of arr){
//     arr2 += i + " "
//     console.log(i);
// }
// console.log(arr2)

// arr.forEach( (item) =>{
//     console.log(item);
// }  )

// const arr3 = [
//     {
//         name: "Araf",
//         age: 17
//     },
//     {
//         name: "Maham",
//         age: 99
//     },
//     {
//         name: "Fasih",
//         age: 20
//     }
// ]

// arr3.forEach((item)=>{
//     console.log(`Name: ${item.name} \t\t Age: ${item.age}`);
// })

// const arr4 = [1,2,3,4,5,6,7,8,9,10]
// const filterArray = arr4.filter((item) => (item<6));
// console.log(filterArray);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
// const FilterBook = books.filter( (bk) => (bk.edition>2000 || bk.genre === 'History'))
// console.log(FilterBook);










const FilterBook = books.filter( (bk) => (bk.title==="Book One"))
console.log(FilterBook);