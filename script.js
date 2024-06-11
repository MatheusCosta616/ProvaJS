//QUESTÃO 1

//undefined
let variavelUndefined;
console.log(variavelUndefined);

//vazio
let variavelVazia = '';
console.log(variavelVazia); 

//variável com um valor
let variavelComValor = 'Hello World';
console.log(variavelComValor);

//QUESTÃO 2
console.log(3 != 4) //neste exemplo vai retornar true pois 3 é diferente de 4
console.log(3 == 3) //neste exemplo vai retornar true pois 3 é igual a 3
console.log(4 >= 3) //neste exemplo vai retornar true pois 4 é maior que 3
console.log(4 >= 4) //neste exemplo vai retornar true pois 4 é igual a 4

//QUESTÃO 3
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    let mensagem;
    
    if (imc < 18.5) {
        mensagem = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        mensagem = "Peso ideal";
    } else {
        mensagem = "Acima do peso";
    }
    
    console.log(mensagem);
}

// Exemplo de uso:
calcularIMC(60, 1.70); //Ele deverá retornar "PESO IDEAL"
calcularIMC(40, 1.60); //Ele deverá retornar "ABAIXO DO PESO"
calcularIMC(100, 1.80); //Ele deverá retornar "ACIMA DO PESO"

//QUESTÃO 4
function faixaEtaria(idade) {
    let mensagem;

    if (idade <= 12) {
        mensagem = "Criança";
    } else if (idade >= 13 && idade <= 18) {
        mensagem = "Adolescente";
    } else if (idade >= 19 && idade <= 60) {
        mensagem = "Adulto";
    } else {
        mensagem = "Idoso";
    }

    return console.log(mensagem);
}

// Exemplo de uso:
faixaEtaria(10) //Ele deverá retornar "criança"
faixaEtaria(14) //Ele deverá retornar "Adolescente"
faixaEtaria(34) //Ele deverá retornar "adulto"



