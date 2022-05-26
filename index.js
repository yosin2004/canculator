const input = document.getElementById("input")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const multiple = document.getElementById("multiple")
const divide = document.getElementById("divide")
const result = document.getElementById("result")
const p = document.getElementById("p")
plus.onclick = () => {
    p.innerHTML = Number(input.value) + Number(result.value) //2юм вариантш  ай авал + мемено яьне инаихели +input.vakue + +result.value

}
minus.onclick = () => {
    p.innerHTML = input.value - result.value
    
}
multiple.onclick = () => {
    p.innerHTML = input.value * result.value
    
}
divide.onclick = () => {
    p.innerHTML = input.value / result.value
    
}