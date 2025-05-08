import { Game } from './game.js'


let menu = document.querySelector('.menu')
let navLink = document.querySelectorAll('.nav-link')

// events 

let gamesList = new Game()
menu.addEventListener('click' , function(e){
    if (e.target.tagName.toLowerCase() === 'a') {

        navLink.forEach(element => {
            element.classList.remove('active')
        });
        gamesList= new Game(e.target.innerHTML)
        e.target.classList.add('active')
    }
})
