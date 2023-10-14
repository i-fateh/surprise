let blurry = document.getElementById('blurry')
let myScore = document.getElementById('myScore')
let illustration = document.getElementById('illustration')

myScore.addEventListener('change', () => {
    console.log(myScore.value);
        blurry.style.backdropFilter = `blur(${parseInt(myScore.value)}px)`
        if(myScore.value < 10){
            illustration.src = "./img/clown.png"
            blurry.style.backdropFilter = "blur(0px)" 
        }
})