
let number = 0;
let limit = parseInt(prompt('Digite a quantidade de números para a média:' ,10 ));
let contador = 0;

while( contador < limit) {

number += parseInt(prompt('Digite um valor para a média'));
contador++;

}

alert(`A soma dos valores é: ${number}`);