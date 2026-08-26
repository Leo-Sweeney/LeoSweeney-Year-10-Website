 function updateProgressBar(progressBar, value) {
            progressBar.querySelector(".progress__fill").style.width `${value}%`;
            progressBar.querySelector(".progress__text").textContent `${value}%`;
        }

const progressBar = document.querySelector(".progress");