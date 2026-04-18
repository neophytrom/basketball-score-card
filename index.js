let previousEntries = document.getElementById("previous-entries")
let countEl = document.getElementById("count-el")
let count = 0

function plusOne() {
    count += 1
    countEl.textContent = count
    let countStr = count + " - "
    previousEntries.textContent += countStr
}

function plusTwo() {
    count += 2
    countEl.textContent = count
    let countStr = count + " - "
    previousEntries.textContent += countStr
} 

function plusThree() {
    count += 3
    countEl.textContent = count
    let countStr = count + " - "
    previousEntries.textContent += countStr
} 

function save() {
    let countStr = count + " - "
    previousEntries.textContent += countStr
    countEl.textContent = 0
    count = 0
}

let preEntries = document.getElementById("pre-entries")
let incrementEl = document.getElementById("increment-el")
let increment = 0


function plusNowa() {
    increment += 1
    incrementEl.textContent = increment
    let incrementStr = increment + " - "
    preEntries.textContent += incrementStr
}

function plusNiwa() {
    increment += 2
    incrementEl.textContent = increment
    let incrementStr = increment + " - "
    preEntries.textContent += incrementStr
} 

function plusNigo() {
    increment += 3
    incrementEl.textContent = increment
    let incrementStr = increment + " - "
    preEntries.textContent += incrementStr
} 

function resurrsion() {
    let incrementStr = increment + " - "
    preEntries.textContent += incrementStr
    incrementEl.textContent = 0
    increment = 0
}