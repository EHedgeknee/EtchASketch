const body = document.querySelector('body');
body.style.cssText = 'height: 640px; width: 640px;';
for(let i = 0; i < 16; i++) {
    const div = document.createElement('div');
    body.appendChild(div);
    div.className = 'downdiv';
    div.style.cssText = 'flex: 1 1 auto;';
}

const box = document.querySelectorAll('div.downdiv');

for(let j = 0; j < 16; j++) {
    for(let k = 0; k <16; k++) {
        const innerdiv = document.createElement('div');
        box[j].appendChild(innerdiv);
        innerdiv.className = 'innerdiv';
        innerdiv.style.cssText = 'flex: 1 0 auto;';
    }
}
