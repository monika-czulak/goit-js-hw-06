"use strict"

const categories = document.querySelectorAll(".item");
console.log('Number of categories: ', categories.length);

categories.forEach(el => {
    console.log('Category: ', el.firstElementChild.innerText);
    console.log('Elements: ', el.lastElementChild.childElementCount)
});

