let gridSize = 16;
const body = document.querySelector('body');
const button = document.querySelector('button');



function createBoxes(gridSize) {
    body.style.cssText = 'height: (40 * gridSize)px; width: (40 * gridSize)px;';
    for(let i = 0; i < gridSize; i++) {
        const div = document.createElement('div');
        body.appendChild(div);
        div.className = 'downdiv';
        div.style.cssText = 'flex: 1 1 auto;';
    }
    const box = document.querySelectorAll('div.downdiv');

    for(let j = 0; j < gridSize; j++) {
        for(let k = 0; k < gridSize; k++) {
            const innerdiv = document.createElement('div');
            box[j].appendChild(innerdiv);
            innerdiv.className = 'innerdiv';
            innerdiv.style.cssText = 'flex: 1 0 auto;';
        }
    }
    for(let x = 0; x < gridSize**2; x++) {
        document.querySelectorAll('.innerdiv')[x].setAttribute("style", "padding-top: " + 100/gridSize + "%;");
    }
}

function removeCreateBoxes(gridSize) {
    for( let p = gridSize; p > 0; p--) {
        body.removeChild(body.children[p]);
    }
    gridSize = parseInt(prompt("Enter desired grid width: "));
    createBoxes(gridSize);
    return gridSize;
}


createBoxes(gridSize);






gridSize = button.addEventListener('click', function() {
    gridSize = removeCreateBoxes(gridSize);
    return gridSize;
})
if (gridSize == undefined) {
    gridSize = 17;
} 