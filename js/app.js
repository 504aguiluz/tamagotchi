console.log('TAMAGOTCHI!!!')

// Requirements
    // Create a repo for your tomagotchi pet -- done
    // make a commit after you finish each one of the following
    // Create a Class (JS Class, look at your notes if your forget) for your tomagotchi

    class Tamagotchi {
        constructor(name){
            this.name = name
            this.hunger = 1
            this.sleepiness = 1
            this.boredom = 1
            this.age = 0
        }
    }
    // Instatiate your Tomagotchi
    const stevie = new Tamagotchi('stevie')
    console.log(stevie)
    // Display a character of your choice on the screen to represent your pet --done
    // Display the following metrics for your pet: --done
        // Hunger (1-10 scale)
        // Sleepiness (1-10 scale)
        // Boredom (1-10 scale)
        // Age
    
    // Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.
    // function clickButtons(){

    // }
let hungerNum = document.getElementById('hunger-num').innerText

function clickEat(){
    hungerText = document.getElementById('hunger')
    hungerText.innerText = `hunger: ${Math.max(0,hungerNum--)}`
}

let sleepNum = document.getElementById('sleep-num').innerText

function clickSleep(){
    sleepText = document.getElementById('sleepiness')
    sleepText.innerText = `sleepiness: ${Math.max(0,sleepNum--)}`
}

let boredomNum = document.getElementById('boredom-num').innerText

function clickPlay(){
    boredomText = document.getElementById('boredom')
    boredomText.innerText = `boredom: ${Math.max(0,boredomNum--)}`
}

    document.getElementById('eat').addEventListener('click', clickEat)
    document.getElementById('sleep').addEventListener('click', clickSleep)
    document.getElementById('play').addEventListener('click', clickPlay)
    

// console.log(eat)
    // Add the ability to name your pet.git
    
    // Style the page.
    
    // Increase your pet's age every x minutes
    
    // Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
    
    // You pet should die if Hunger, Boredom, or Sleepiness hits 10.
    
    // Morph your pet at certain ages.
    
    // Animate your pet across the screen while it's alive.

// Extras
    // Have your tomagotchi give birth to baby tomagotchi...
    // ...with special powers (extend the class)!
    // Add an excercise() method to your tomagotchi, that affects certain properties
    // Add anything you can think of... use your imagination!