let blurry = document.getElementById('blurry')
let myChoice = document.getElementById('myChoice')
let illustration = document.getElementById('illustration')
let surprise = document.getElementById('surprise')

let body = document.getElementById('body')
let head = document.getElementById('head')
let par = document.getElementById('par')
let container = document.getElementById('container')




surprise.style.display = 'none'

myChoice.addEventListener('change', () => {
    console.log(myChoice.value);
        blurry.style.backdropFilter = `blur(${parseInt(myChoice.value)}px)`
        if(myChoice.value < 10){
            illustration.style.display = "none"
            surprise.style.display = "flex"
            blurry.style.backdropFilter = "blur(0px)" 

            body.style.backgroundColor = "white"
            container.style.backgroundColor = "white"
        }
})