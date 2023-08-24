const counterEI = document.querySelector(".counter")
const barEI = document.querySelector(".loading-bar-front")


let idx = 0;

updateNum()

function updateNum() {
    counterEI.innerText = idx + "%"
    barEI.style.width = idx + "%"
    idx++
    if(idx < 101) {
        setTimeout(updateNum,20)
    }
}