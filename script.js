const container = document.querySelector('div.container');

const videoEL = document.createElement('video');
videoEL.classList.add('video');
videoEL.src = 'img/video.mp4';
videoEL.style.width = '660px';
container.appendChild(videoEL);

const uiDiv = document.createElement('div');
uiDiv.classList.add('ui');
container.appendChild(uiDiv);

const progresEl = document.createElement('input');
progresEl.classList.add('progres');
progresEl.type = 'range';
progresEl.min = 0;
progresEl.max = 100;
progresEl.style.width = '640px';
progresEl.value = 0;


const playEl = document.createElement('i');
playEl.classList.add('fas');
playEl.classList.add('fa-play');

const pauseEl = document.createElement('i');
pauseEl.classList.add('fas');
pauseEl.classList.add('fa-pause');

uiDiv.appendChild(playEl);
uiDiv.appendChild(pauseEl);
uiDiv.appendChild(progresEl);

const brEl = document.createElement('br');
uiDiv.appendChild(brEl);

const timeEl = document.createElement('p');
timeEl.innerHTML = '0';
uiDiv.appendChild(timeEl);


const volumEl = document.createElement('input');
volumEl.classList.add('volume');
volumEl.type = 'range';
volumEl.min = 0;
volumEl.max = 10;
volumEl.value = 10;
uiDiv.appendChild(volumEl);

volumEl.addEventListener('change', (e) => {
    videoEL.volume = e.target.value / 10;
});

playEl.addEventListener('click', (e) => {
    videoEL.play();
});

pauseEl.addEventListener('click', (e) => {
    videoEL.pause();
});

progresEl.addEventListener('change', (e) => {
    videoEL.currentTime = videoEL.duration * (e.target.value / 100);
});

videoEL.addEventListener('timeupdate', function (e) {
    timeEl.innerText = videoEL.currentTime;
    progresEl.value = Math.round(videoEL.currentTime / videoEL.duration * 100);
});