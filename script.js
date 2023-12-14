function getInputX() {
    return Number(document.getElementById("inputX").value);
}
function getInputY() {
    return Number(document.getElementById("inputY").value);
}

function addition() {
    let answer = getInputX() + getInputY()
    alert(answer)
}function subtraction() {
    let answer = getInputX() - getInputY()
    alert(answer)
}function multiplication() {
    let answer = getInputX() * getInputY()
    alert(answer)
}function division() {
    let answer = getInputX() / getInputY()
    alert(answer)
}