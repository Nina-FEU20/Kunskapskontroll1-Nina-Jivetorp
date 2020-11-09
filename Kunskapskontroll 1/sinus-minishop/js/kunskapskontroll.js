
// making SINUS-logo my resetBTN 
let reset = document.querySelector('img');
reset.addEventListener('click', resetAll);


/********* EVENTLISTENERS ON NAVBAR **********/

// getting all links
let navlinks = document.querySelectorAll('nav a');

// Eventlistener for my list
// creating a variable to use to make sure we only make one list
let onlyOnce = true;

// setting Eventlistener for Home-link, to create list! 
navlinks[0].addEventListener('click', function () {

    if (onlyOnce) {
        onlyOnce = false;
        createList();
    }
})

// For border around products
navlinks[1].addEventListener('click', function () {
    let main = document.querySelector('main');
    main.style.border = '10px dashed black';
    main.style.transition = '1s ease-in'
})

// To create a box that shows emal & number when Contact is clicked

let oneContact = true;
let contact = document.createElement('p');

navlinks[2].addEventListener('click', function () {

    contact.innerText = 'Call us at: \n  0703-03 03 03 \n  Mail us at:\n  Sinus@skateboard.com';
    let header = document.querySelector('header');

    // styling
    contact.style.margin = '0 auto';
    contact.style.backgroundColor = '#e8eced';
    contact.style.maxWidth = '1000px';
    contact.style.marginTop = '-1rem';
    contact.style.textAlign = 'center';

    // condition
    if (oneContact) {
        oneContact = false;
        header.insertAdjacentElement('afterend', contact);
    }
})


/********  EVENTLISTENERS ON PRODUCT BUTTONS ********/

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
btns[2].addEventListener('click', function () {
    let footerArticles = document.querySelectorAll('section article h3');
    footerArticles[1].style.display = 'none';

})

// Make all buttons in main change to a random color when clicked 
for (let button of btns) {
    button.addEventListener('click', function () {
        button.style.backgroundColor = makeRandomColor();
    })
}


/********* MY RESET FUNCTION  ************/

function resetAll() {

    // reset picture
     let img = document.querySelectorAll('img');
     img[2].src = "img/hoodie-ash.png";

     let nameOfhoodies = document.querySelectorAll('h3');
     nameOfhoodies[0].innerText = 'Ash';

    // reset random colors on background
    let articles = document.querySelectorAll('main article');
    for (let article of articles) {
        article.style.backgroundColor = 'white'; 
    }

    // reset colors on buttons
    for (let button of btns) {
        button.style.backgroundColor = '#222';
    }

    // reset "Where we are"
    let footerArticles = document.querySelectorAll('section article h3');
    footerArticles[1].style.display = 'block';

    //make list disappar 
    let ul = document.querySelector('ul');
    if (ul) {
        ul.remove();
    }
    onlyOnce = true;

    // reset border around products
     let main = document.querySelector('main');
     main.style.border = 'none';

    // reset contact
    contact.remove();
    oneContact = true;
}

/*********** other functions ************/

// function to make random colors! 
const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}




// function to create a list, that I call on the eventlistener

// Note to self: Make several smaller functions next time. This function is to big! Not really useful if you wanted to make several lists at different places on site. Too much inline styling & repeating, in future add classes and the styling to that instead, but understood this assigment that we should do everything in JS. 


function createList() {

    const listItems = ['- Skateboard', '- Longboard', '- Shirt', '- Pants', '- Shoes'];

    // creating ul
    const ul = document.createElement('ul');
    
    // loop to create the list
    for (let i = 0; i < listItems.length; i++) {
        let li = document.createElement('li');
        li.innerText = listItems[i];
        ul.appendChild(li)

        // creating remove-btn 
        const removeMe = document.createElement('a'); 
        removeMe.innerText = 'x'; 
        li.appendChild(removeMe)

        // add styling to every li
        li.style.border = '1px solid black';
        li.style.margin = '0 auto';
        li.style.fontSize = '1rem';
        li.style.padding = '0.4rem';
        li.style.display = 'flex'; 
        li.style.justifyContent = 'space-between';  

        removeMe.style.cursor = 'pointer'; 
       
    }

    // Adding my list after main-section
    const listTitle = document.createElement('h3'); 
    listTitle.innerText = 'Wishlist: '; 
    const main = document.querySelector('main');
    main.insertAdjacentElement('afterend', ul);
    main.insertAdjacentElement('afterend', listTitle);

    // styling title
    listTitle.style.width = '860px'; 
    listTitle.style.margin = '0 auto';
    listTitle.style.fontSize = '2rem'; 

    // styling ul
    ul.style.width = '900px'
    ul.style.margin = '0 auto';
    ul.style.listStyle = 'none';
    ul.style.marginBottom = '2rem';


    // making an input so that the user can add things to list 
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Type here to add more things to wishlist');

    // styling input 
    input.style.width = '400px';
    input.style.padding = '0.4rem';
    input.style.marginLeft = '10rem'; 
    input.style.marginBottom = '0.5rem'; 
    
    // adding input after list Title
    listTitle.insertAdjacentElement('beforeend', input)

    // Eventlistener to input. 
    // If user has written something and you press enter
    input.addEventListener('keypress', function (e) {
        if (e.key == 'Enter' && e.target.value != '') {

            // creating new li and setting the innerText to be
            // whatever the user puts in
            let li = document.createElement('li');
            let text = `- ${e.target.value}`;
            li.innerText = text;
            
            const removeMe = document.createElement('a'); 
            removeMe.innerText = 'x'; 
            li.appendChild(removeMe)

            removeMe.style.cursor = 'pointer'; 

            // appending it to the existing ul 
            ul.appendChild(li);

            // adding style
            li.style.border = '1px solid black';
            li.style.margin = '0 auto';
            li.style.fontSize = '1rem';
            li.style.padding = '0.4rem';
            li.style.display = 'flex'; 
            li.style.justifyContent = 'space-between'; 

            // to empty the input 
            e.target.value = '';
        }
    })

    // creating remove-option! 
    ul.addEventListener('click', function(e) {
        if (e.target.nodeName === 'A') {
            e.target.parentElement.remove(); 
        }
    })
}


