document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const resyltDisplay = document.querySelector('#result')
    let width = 15;
    let currentShooterIndex = 202
    let currentInvaderIndex = 0
    let coronaInvadersTakenDown = []
    let result = 0
    let direction = 1
    let invaderId


//define the corona alien invaders how to appear in my squares array

const coronaInvaders = [
    0,1,2,3,4,5,6,7,8,9,10,
    17,18,19,20,21,22,23,24,25,26,27,
    34,35,36,37,38,39,40,41,42,43,44
]

// Draw the corona alien inavers

coronaInvaders.forEach( invader => squares[currentInvaderIndex + invader].classList.add('invader'))

})
