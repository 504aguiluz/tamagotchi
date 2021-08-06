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
let tamagotchi = document.getElementsByClassName('tamagotchi-sprite')
let spriteType = document.getElementsByClassName('sprite-type')

// Requirements
    // Create a repo for your tomagotchi pet -- done
    // make a commit after you finish each one of the following
    // Create a Class (JS Class, look at your notes if your forget) for your tomagotchi

    class Tamagotchi {
        constructor(){
            this.name = nameInput.value
            this.hunger = hungerNum
            this.sleepiness = sleepNum
            this.boredom = boredomNum
            this.age = ageNum
            this.timer = 0
        }
        newTamagotchi(name){
            // Instatiate your Tomagotchi
            const tamagotchi = new Tamagotchi(name)
            console.log(name)   
        }   
    }
    
    function clickEat(){
        hungerText.innerText = `hunger: ${Math.max(0,hungerNum--)}`
    }
    
    function clickSleep(){
        sleepText.innerText = `sleepiness: ${Math.max(0,sleepNum--)}`
    }
    
    function clickPlay(){
        boredomText.innerText = `boredom: ${Math.max(0,boredomNum--)}`
    }
    
    function startGame(){
        // name character
        nameOutput.innerHTML = `name: ${nameInput.value}`
        
        // timer with conditinals
        let timer = 0
        const intervalID = setInterval(() => {
            timer++
            // // increment hunger each 1000ms (1s)
            hungerText.innerText = `hunger: ${Math.max(0,hungerNum++)}`
            if (timer % 2 === 0){
                // // increment boredom every 2s
                boredomText.innerText = `boredom: ${Math.max(0,boredomNum++)}`
            } if (timer % 3 === 0){
                // // increment sleepiness every 3s
                sleepText.innerText = `sleepiness: ${Math.max(0,sleepNum++)}`
            } if (timer % 10 === 0){
                // // increment age every 10s
                ageText.innerText = `age: ${Math.max(0,ageNum++)}`
                document.querySelector('.tamagotchi-sprite').style.height = '150px'
            } if(sleepNum < 5){
                windowImage.style.backgroundImage= "url('../css/img/mikhail-selnihin-full-day-out-light-x4.jpeg')"
            } if(sleepNum > 5){
                windowImage.style.backgroundImage= "url('../css/img/mikhail-selnihin-full-night-out-x4.jpeg')"
            } if(hungerNum > 5){
                windowImage.style.backgroundImage= "url('../css/img/food-background.jpg')"
            } if(boredomNum < 5){
                document.querySelector('.tamagotchi-sprite').style.animation = "float 1s ease-in forwards infinite alternate"
            } if(boredomNum > 5){
                document.querySelector('.tamagotchi-sprite').style.animation = "defaultGo 1s ease-in forwards infinite"
            } if (hungerNum > 10 || sleepNum > 10 || boredomNum > 10){
                document.querySelector('.tamagotchi-sprite').style.animation = "idle"
                clearInterval(intervalID)
                alert(`Game Over! ${nameInput.value} is dead!`)
            }
        }, 1000);

    }


    // event listeners
    document.getElementById('eat').addEventListener('click', clickEat)
    document.getElementById('sleep').addEventListener('click', clickSleep)
    document.getElementById('play').addEventListener('click', clickPlay)
    document.getElementById('start').addEventListener('click', startGame)
    
    // Morph your pet at certain ages.
    
    // Animate your pet across the screen while it's alive.
    
    // Extras
    // Have your tomagotchi give birth to baby tomagotchi...
    // ...with special powers (extend the class)!
    // Add an excercise() method to your tomagotchi, that affects certain properties
    // Add anything you can think of... use your imagination!