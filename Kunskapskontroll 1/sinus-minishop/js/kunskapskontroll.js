
// making SINUS-logo my resetBTN 
let reset = document.querySelector('img');
reset.addEventListener('click', resetAll);


/********  PRODUCT BUTTONS ********/
// getting all buttons
let btns = document.querySelectorAll('button');

// Changes made when pressing the button on the first product 
// New picture & name of hoodie
btns[0].addEventListener('click', function () {
    let img = document.querySelectorAll('img');
    img[2].src = "img/hoodie-forrest.png";

    let nameOfhoodies = document.querySelectorAll('h3');
    nameOfhoodies[0].innerText = 'Forrest';
})

// Make the background on each product random! 
btns[1].addEventListener('click', function () {
    let articles = document.querySelectorAll('article');
    articles[0].style.backgroundColor = makeRandomColor();
    articles[1].style.backgroundColor = makeRandomColor();
    articles[2].style.backgroundColor = makeRandomColor();
})

// Make the "where we are" disappear when you click the third button
btns[2].addEventListener('click', function() {
    let footerArticles = document.querySelectorAll('section article');  
    footerArticles[1].style.display = 'none'; 

})


function resetAll() {

    // reset picture
    let img = document.querySelectorAll('img');
    img[2].src = "img/hoodie-ash.png";

    let nameOfhoodies = document.querySelectorAll('h3');
    nameOfhoodies[0].innerText = 'Ash';

    // reset random colors
    let articles = document.querySelectorAll('article'); 
    articles[0].style.backgroundColor = 'white'; 
    articles[1].style.backgroundColor = 'white'; 
    articles[2].style.backgroundColor = 'white'; 

    // reset "Where we are"
    let footerArticles = document.querySelectorAll('section article'); 
    console.log(footerArticles[1]); 
    footerArticles[1].style.display = 'block'; 

}


// function to make random colors! 

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}