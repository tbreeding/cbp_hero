let hero_x = 150;
let hero_y = 150;
let ghost_x = 300;
let ghost_y = 300;

function placeHero(x, y) {
    const hero = document.getElementById('hero');
    
    hero_x = hero_x + x >= 0 && hero_x + x <= 350 ? hero_x + x : hero_x;
    hero_y = hero_y + y >= 0 && hero_y + y <= 350 ? hero_y + y : hero_y;

    hero.style.left = hero_x + 'px';
    hero.style.top = hero_y + 'px';
}
 


function placeGhost(x, y) {
    const ghost = document.getElementById('ghost');
    
    ghost_x = ghost_x + x >= 0 && ghost_x + x <= 350 ? ghost_x + x : ghost_x;
    ghost_y = ghost_y + y >= 0 && ghost_y + y <= 350 ? ghost_y + y : ghost_y;

    ghost.style.left = ghost_x + 'px';
    ghost.style.top = ghost_y + 'px';
}

placeHero(0, 0);
placeGhost(0, 0);

const arrowKeyEvenHandler = (e) => {
    switch(e.keyCode) {
        case 37: 
            placeHero(-50, 0); //left
            break;
        case 38:
            placeHero(0, -50); //up
            break;
        case 39:
            placeHero(50, 0); //right
            break;
        case 40:
            placeHero(0, 50); //down
            break;
    }
}

window.addEventListener("keyup", arrowKeyEvenHandler, false);