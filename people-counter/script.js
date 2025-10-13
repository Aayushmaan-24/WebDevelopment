function increment () {
    let countElement = document.getElementById('count-element')
    let count = parseInt(countElement.innerHTML)
    countElement.innerHTML = count + 1
}

function decrement () {
    let countElement = document.getElementById('count-element')
    let count = parseInt(countElement.innerHTML)
    countElement.innerHTML = count - 1
}

function reset () {
    document.getElementById('count-element').innerHTML = 0
}

function save () {
    let savedContent = document.getElementById('count-element').innerHTML
    content = savedContent + ' - '
    document.getElementById('content').innerHTML += content
    reset()
}