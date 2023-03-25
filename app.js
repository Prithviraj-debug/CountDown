const countDate = new Date("March 28, 2023 00:00:00").getTime();
var now;
const btn = document.querySelector('.surprise')

const countdown = () => {
    now = new Date().getTime();
    const gap = countDate - now;

    //Time works
    const sec = 1000;
    const min = sec * 60;
    const hour = min * 60;
    const day = hour * 24;

    //Calculate
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMin = Math.floor((gap % hour) / min);
    const textSec = Math.floor((gap % min) / sec);

    //Update HTML
    document.querySelector(".day").innerHTML = textDay;
    document.querySelector(".hour").innerHTML = textHour;
    document.querySelector(".min").innerHTML = textMin;
    document.querySelector(".sec").innerHTML = textSec;

    // console.log(gap);
};

btn.addEventListener("click", () => {
    if (now >= countDate) {
        alert("yayy!!")
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Thamb ki laudya...',
            text: 'Ajun Birthday ny ala!',
          })
    }
})

setInterval(countdown, 1000);
