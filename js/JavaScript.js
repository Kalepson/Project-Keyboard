const keyboard = document.querySelectorAll('.key');

RandomElement = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) ;
}

GetRandomElement = () => {
    return keyboard[RandomElement(0, keyboard.length-1)]
}

GetBtnRandom = () => {
    return document.getElementById(GetRandomElement().getAttribute('id')).classList.add("selectat");
}

document.addEventListener("keydown", event => {
    const getElement = document.getElementById(event.code);
    getElement.classList.add("press");

    const getHighlighted = document.querySelector(".selectat");
    getElement.addEventListener('animationend', () => {
        getElement.classList.remove("press")
    })

    if (getElement === getHighlighted) {
        getHighlighted.classList.remove("selectat");
        GetBtnRandom();
    }
})
GetBtnRandom();


