
// making SINUS-logo my resetBTN 
let reset = document.querySelector('img'); 
console.log(reset); 
reset.addEventListener('click', resetAll); 


// getting all buttons on side
let btns = document.querySelectorAll('button');  


// Changes made when pressing the button on the first product 
// New picture & name of hoodie
btns[0].addEventListener('click', function(event) {
    let img = document.querySelectorAll('img'); 
        img[2].src = "img/hoodie-forrest.png"; 

        let nameOfhoodies = document.querySelectorAll('h3');
        nameOfhoodies[0].innerText = 'Forrest'; 
    })



    // My reset function
    function resetAll() {

        // reset picture
        let img = document.querySelectorAll('img'); 
        img[2].src = "img/hoodie-ash.png"; 

        let nameOfhoodies = document.querySelectorAll('h3');
        nameOfhoodies[0].innerText = 'Ash'; 
    }