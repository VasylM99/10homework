
function music(event) {
    let audio = document.getElementById(`${event.key.toUpperCase()}`);
    let button = document.querySelector(`.${event.key.toUpperCase()}`);
    audio.currentTime = 0;
    button.classList.add('container-item-hover');
    audio.play();
    setTimeout(()=>{audio.pause()},1000)
    setTimeout(()=>{button.classList.remove('container-item-hover')},500)
}

document.addEventListener('keydown',music);
