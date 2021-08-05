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
            this.timer = 0
        }
        newTamagotchi(name){
            const tamagotchi = new Tamagotchi(name)
            console.log(name)   
        }   
        // newTamagotchi('dick')
    }
    
    // Instatiate your Tomagotchi

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
        newTamagotchi(nameInput.value)
        nameOutput.innerHTML = `name: ${nameInput.value}`
        // timer code with conditinals
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
                // // increment age every 5s
                ageText.innerText = `age: ${Math.max(0,ageNum++)}`
            } if (hungerNum > 10 || sleepNum > 10 || boredomNum > 10){
                clearInterval(intervalID)
                alert(`Game Over! ${nameInput.value} is dead!`)
            }
        }, 1000);

    }

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
    
    
    
    // event listeners
    document.getElementById('eat').addEventListener('click', clickEat)
    document.getElementById('sleep').addEventListener('click', clickSleep)
    document.getElementById('play').addEventListener('click', clickPlay)
    document.getElementById('start').addEventListener('click', startGame)
    // document.getElementById('submit').addEventListener('click', getName)

    // Display a character of your choice on the screen to represent your pet --done
// Display the following metrics for your pet: --done
    // Hunger (1-10 scale)
    // Sleepiness (1-10 scale)
    // Boredom (1-10 scale)
    // Age
    
    // Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.