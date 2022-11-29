const formElement = document.querySelector('.meme-form');
const imgSelect = document.querySelector('#img-url');
const btmText = document.querySelector('#btm');
const topText = document.querySelector('#top');
const newMeme = document.querySelector('#memes');

formElement.addEventListener('submit', function(e) {
    e.preventDefault();
    const meme = document.createElement('div');
    const img = document.createElement('img');
    const top = document.createElement('div');
    const btm = document.createElement('div');
    const remove = document.createElement('button');

    img.src = imgSelect.value;
    top.innerText = topText.value;
    btm.innerText = btmText.value;
    top.classList.add('toptext');
    btm.classList.add('bottomtext');
    meme.append(img);
    meme.append(top);
    meme.append(btm);
    meme.append(remove);
    meme.classList.add('meme')
    

    remove.addEventListener('click', function(e){
        e.target.parentElement.remove();
    });

    newMeme.append(meme);


})

