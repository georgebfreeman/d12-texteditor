function clearScreen () {
    document.getElementById('writingArea').value = ''
}

function bold() {
    document.getElementById('writingArea').classList.toggle ("font-bold");
}

function italic() {
    document.getElementById('writingArea').classList.toggle ("italic")
}

function Underline() {
    document.getElementById('writingArea').classList.toggle ("underline")
}

function left() {
    document.getElementById('writingArea').style.textAlign = 'left'
}

function center() {
    document.getElementById('writingArea').style.textAlign = 'center'
}

function right() {
    document.getElementById('writingArea').style.textAlign = 'right'
}

function Uppercase() {
    document.getElementById('writingArea').classList.toggle ("uppercase")
}

function Lowercase() {
    document.getElementById('writingArea').classList.toggle ("lowercase")
}

function Capitalize() {
    document.getElementById('writingArea').classList.toggle ("capitalize")
}
