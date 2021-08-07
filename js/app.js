// file sync check
console.log('TAMAGOTCHI!!!')
// variable declarations
let nameInput = document.getElementById('name-input')
let nameOutput = document.getElementById('name-output')
let hungerText = document.getElementById('hunger')
let sleepText = document.getElementById('sleepiness')
let boredomText = document.getElementById('boredom')
let ageText = document.getElementById('age')
let hungerNum = document.getElementById('hunger-num').innerText
let sleepNum = document.getElementById('sleep-num').innerText
let boredomNum = document.getElementById('boredom-num').innerText
let ageNum = document.getElementById('age-num').innerText
let windowImage = document.getElementById('window')
const click2 = document.getElementById('click2')
const bells = document.getElementById('game-over-bells')
const ageUp = document.getElementById('age-up')
const themeMusic = document.getElementById('theme-music')
const beep = document.getElementById('beep')
const intro = document.getElementById('intro')
const beepDown = document.getElementById('beep-down')
const sweepUp = document.getElementById('sweep-up')


// class created
class Tamagotchi {
    constructor(){
        this.name = ''
        this.hunger = hungerNum
        this.sleepiness = sleepNum
        this.boredom = boredomNum
        this.age = ageNum
    }
    clickEat(){
        beep.play()
        hungerText.innerText = `hunger: ${Math.max(0,tama.hunger--)}`;
    }
    
    clickSleep(){
        beepDown.play()
        sleepText.innerText = `sleepiness: ${Math.max(0,tama.sleepiness--)}`
    }
    
    clickPlay(){
        sweepUp.play()
        boredomText.innerText = `boredom: ${Math.max(0,tama.boredom--)}`
    }
}

// new Tamagotchi instantiated
const tama = new Tamagotchi()

// name character
function nameTamagotchi(){
    tama.name = nameInput.value
}

// starts game on button click
function startGame(){
    let type = prompt('CHOOSE TYPE:', 'luchador/salaryman/mango')
    if (type.toLowerCase() == 'salaryman'){
        document.getElementById('luchador').src = "css/img/salaryman-large.png"
    } if (type.toLowerCase() == 'mango'){
        document.getElementById('luchador').src = "css/img/mango.png"
    }
    // tama named passed into html element
    nameOutput.innerHTML = `name: ${nameInput.value}`
    nameTamagotchi()
    // music played and looping
    themeMusic.loop = true
    themeMusic.play()

    // timer with conditinals
    let timer = 0
    const intervalID = setInterval(() => {
        timer++
        // // increment hunger each 1000ms (1s)
        hungerText.innerText = `hunger: ${Math.max(0,tama.hunger++)}`
        if (timer % 2 === 0){
            // // increment boredom every 2s
            boredomText.innerText = `boredom: ${Math.max(0,tama.boredom++)}`
        } if (timer % 3 === 0){
            // // increment sleepiness every 3s
            sleepText.innerText = `sleepiness: ${Math.max(0,tama.sleepiness++)}`
        } if (timer % 12 === 0){
            // // increment age every 10s
            ageText.innerText = `age: ${Math.max(0,tama.age++)}`
            ageUp.play()
            document.querySelector('.tamagotchi-sprite').style.height = '150px'
            // daylight if tama is not sleepy
        } if(tama.sleepiness < 5){
            windowImage.style.backgroundImage= "url('../css/img/mikhail-selnihin-full-day-out-light-x4.jpeg')"
            // night if tama is sleepy
        } if(tama.sleepiness > 5){
            windowImage.style.backgroundImage= "url('../css/img/mikhail-selnihin-full-night-out-x4.jpeg')"
            // tama is thinking of food
        } if(tama.hunger > 5){
            windowImage.style.backgroundImage= "url('../css/img/food-background.jpg')"
            // tama is having fun
        } if(tama.boredom < 5){
            document.querySelector('.tamagotchi-sprite').style.animation = "float 1s ease-in forwards infinite alternate"
            // tama is bored and anxious
        } if(tama.boredom > 5){
            document.querySelector('.tamagotchi-sprite').style.animation = "defaultGo 1s ease-in forwards infinite"
            // tama is dead
        } if (tama.hunger > 10 || tama.sleepiness > 10 || tama.boredom > 10){
            document.querySelector('.tamagotchi-sprite').style.animation = "idle"
            themeMusic.loop = false
            bells.play()
            clearInterval(intervalID)
            alert(`Game Over! ${tama.name} is dead!`)
            location.reload()
        }
    }, 1000);
}

    // event listeners
    document.getElementById('eat').addEventListener('click', tama.clickEat)
    document.getElementById('sleep').addEventListener('click', tama.clickSleep)
    document.getElementById('play').addEventListener('click', tama.clickPlay)
    document.getElementById('start').addEventListener('click', startGame)
