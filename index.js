let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let record = ""

function increment() {
    count = count + 1
    countEl.textContent = count
}

function save() {
    record += count + " - "
    saveEl.textContent = record
    console.log(count)
    count = 0
    countEl.textContent = count
}

function example() {
    let a = document.getElementById('')
}
