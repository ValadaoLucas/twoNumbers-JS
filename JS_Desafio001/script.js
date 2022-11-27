alert("Vamos fazer alguns cálculos?")
numberOne = prompt("Digite o primeiro número")
numberTwo = prompt("Agora digite o segundo número")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let multi = numberOne * numberTwo
let div = numberOne / numberTwo
let divRest = numberOne % numberTwo

alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${multi}`)
alert(`A divisão dos dois números é: ${div}`)
alert(`O resto da divisão dos dois números é: ${divRest}`)

if(divRest != 0) {
  alert("A soma dois números é ímpar!")
} 

else {
  alert("A soma dos dois número é par!")
}

if(numberOne == numberTwo) {
  alert("Os números são iguais!")
} 

else {
  alert("Os números são diferentes!")
}