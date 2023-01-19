// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10
const ingredients = {
    pepperoni: { name: "pepperoni", price: 1 },
    mushrooms: { name: "Mushrooms", price: 1 },
    greenPeppers: { name: "Green Peppers", price: 1 },
    whiteSauce: { name: "White sauce", price: 3 },
    glutenFreeCrust: { name: "Gluten-free crust", price: 5 }
}

const buttonClasses = {
    pepperoni: "btn-pepperoni",
    mushrooms: "btn-mushrooms",
    greenPeppers: "btn-green-peppers",
    whiteSauce: "btn-sauce",
    glutenFreeCrust: "btn-crust"
}

// Initial value of the state (the state values can change over time)
const state = {
    pepperoni: true,
    mushrooms: true,
    greenPeppers: true,
    whiteSauce: false,
    glutenFreeCrust: false
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
    renderPepperoni()
    renderMushrooms()
    renderGreenPeppers()
    renderWhiteSauce()
    renderGlutenFreeCrust()

    renderButtons()
    renderPrice()
}

function renderPepperoni() {
    document.querySelectorAll(".pep").forEach((onePep) => {
        if (state.pepperoni) {
        onePep.style.visibility = "visible"
        } else {
        onePep.style.visibility = "hidden"
        }
    })
}

function renderMushrooms() {
    document.querySelectorAll(".mushroom").forEach((oneMushroom) => {
        if (state.mushrooms) {
          oneMushroom.style.visibility = "visible"
        } else {
          oneMushroom.style.visibility = "hidden"
        }
      })
}

function renderGreenPeppers() {
    document.querySelectorAll(".green-pepper").forEach((oneGreenPepper) => {
        if (state.greenPeppers) {
          oneGreenPepper.style.visibility = "visible"
        } else {
          oneGreenPepper.style.visibility = "hidden"
        }
      })
}

function renderWhiteSauce() {
    if (state.whiteSauce) {
        document.querySelector("section.sauce").classList.add("sauce-white")
      } else {
        document.querySelector("section.sauce").classList.remove("sauce-white")
      }
}

function renderGlutenFreeCrust() {
    if (state.glutenFreeCrust) {
        document.querySelector("section.crust").classList.add("crust-gluten-free")
      } else {
        document.querySelector("section.crust").classList.remove("crust-gluten-free")
      }
}

function renderButtons() {
    Object.keys(buttonClasses).forEach(ingredient => {
        renderButton(ingredient)
    })
}

function renderButton(ingredient) {
    if (state[ingredient]) {
        document.querySelector(`.btn.${buttonClasses[ingredient]}`).classList.add("active")
      } else {
        document.querySelector(`.btn.${buttonClasses[ingredient]}`).classList.remove("active")
      }
}

function renderPrice() {
    let price = 10
    let priceList = ""
  
    if (state.pepperoni) {
      price += ingredients.pepperoni.price
      priceList += `<li>$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}</li>`
    } 
  
    if (state.mushrooms) {
      price += ingredients.mushrooms.price
      priceList += `<li>$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}</li>`
    } 
  
    if (state.greenPeppers) {
      price += ingredients.greenPeppers.price
      priceList += `<li>$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}</li>`
    } 
  
    if (state.whiteSauce) {
      price += ingredients.whiteSauce.price
      priceList += `<li>$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}</li>`
    } 
  
    if (state.glutenFreeCrust) {
      price += ingredients.glutenFreeCrust.price
      priceList += `<li>$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}</li>`
    } 
  
    document.querySelector("aside.panel strong").innerHTML = `$${price}`
    document.querySelector("aside.panel ul").innerHTML = priceList
}

renderEverything()

Object.keys(buttonClasses).forEach(ingredient => {
    addEventListenerToButton(ingredient)
})

function addEventListenerToButton(ingredient) {
    document.querySelector(`.btn.${buttonClasses[ingredient]}`).addEventListener("click", function () {
        state[ingredient] = !state[ingredient]
        renderEverything()
      })
}

// document.querySelector(".btn.btn-pepperoni").addEventListener("click", function () {
//   state.pepperoni = !state.pepperoni
//   renderEverything()
// })

// document.querySelector(".btn.btn-mushrooms").addEventListener("click", function () {
//   state.mushrooms = !state.mushrooms
//   renderEverything()
// })

// document.querySelector(".btn.btn-green-peppers").addEventListener("click", function () {
//   state.greenPeppers = !state.greenPeppers
//   renderEverything()
// })

// // Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
// document.querySelector(".btn.btn-sauce").addEventListener("click", function () {
//   state.whiteSauce = !state.whiteSauce
//   renderEverything()
// })

// // Iteration 2: Add click event listener on `<button class="btn btn-crust">`
// document.querySelector(".btn.btn-crust").addEventListener("click", function () {
//   state.glutenFreeCrust = !state.glutenFreeCrust
//   renderEverything()
// })
