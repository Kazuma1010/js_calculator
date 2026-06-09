console.log("loaded js file")

const displayNumber = document.createElement("div")
displayNumber.textContent = "0"
console.log(displayNumber)

// const button = document.createElement("button")
// button.textContent = "0"
// button.addEventListener("click", (event) => getButtonText(event, displayNumber))

const numbersRows = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [0]
]

const numberButtonsDiv = createNumberButton(numbersRows, displayNumber)

document.body.appendChild(displayNumber)
document.body.appendChild(numberButtonsDiv)

function getButtonText(event, displayNumber) {
    event.preventDefault()
    console.log("getButtonText")
    // console.log(event.target.textContent)
    const buttonText = event.target.textContent
    displayNumber.textContent = buttonText
}

function createNumberButton(numbersRows, displayNumber) {
    const divs = document.createElement("div")

    numbersRows.forEach(numbers => {
        const div = document.createElement("div")

        numbers.forEach(number => {
            const button = document.createElement("button")
            button.textContent = String(number)
            button.addEventListener("click", (event) => getButtonText(event, displayNumber))

            div.appendChild(button)
        })

        divs.appendChild(div)
    })

    return divs
}