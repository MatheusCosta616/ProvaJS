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

//QUESTÃO 5

function verificarLogin(usuario, senha) {
    const usuarioCadastrado = "admin";
    const senhaCadastrada = "1234";

    if (usuario === usuarioCadastrado && senha === senhaCadastrada) {
        return "Login realizado com sucesso";
    } else {
        return "Falha na autenticação";
    }
}

// Exemplo de uso:
console.log(verificarLogin("admin", "1234")); //Ele deverá retornar "Login realizado com sucesso"
console.log(verificarLogin("Ronadinho", "12354")); //Ele deverá retornar "Falha na autenticação"


//QUESTÃO 6
function calcularMedia(notas) {
    let soma = 0;
    let nota = 0;

    for (nota of notas) {
        soma += nota;
    }

    let media = soma / notas.length;
    let status = media >= 6 ? "Aprovado" : "Reprovado";

    return console.log("Sua média foi de ", media.toFixed(2), "Você está ", status);
}

// Exemplo de uso:
calcularMedia([7, 6, 8, 5, 9, 7, 6]); //Ele deverá retornar "Sua média foi de  6.86 Você está  Aprovado"
calcularMedia([4, 5, 6, 3, 4, 5, 6]); //Ele deverá retornar "Sua média foi de  4.71 Você está  Reprovado"

//QUESTÃO 7

document.addEventListener('DOMContentLoaded', (event) => {
    //Background da pagina
    document.body.style.backgroundColor = "white";

    // Cria uma div para exibir as informações
    let informacoesDiv = document.createElement('div');
    informacoesDiv.id = 'informacoes';

    // Cria o conteúdo da div
    informacoesDiv.innerHTML = `
        Nome: João Silva <br>
        Idade: 25 <br>
        Curso: Engenharia <br>
        Ano: 2024 <br>
    `;

    // Adiciona a div a página
    document.body.appendChild(informacoesDiv);

    // Estiliza o título
    document.querySelector('h1').style.color = "#333";
    document.querySelector('h1').style.fontFamily = "Arial, sans-serif";
    document.querySelector('h1').style.textAlign = "center";

    //Estiliza a div
    informacoesDiv.style.fontFamily = "Arial, sans-serif";
    informacoesDiv.style.margin = "20px";
    informacoesDiv.style.padding = "10px";
    informacoesDiv.style.border = "1px solid";
    informacoesDiv.style.backgroundColor = "grey";
});

//QUESTÃO 8

let texto = "Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas.";

console.log(texto.indexOf("em")); //Ele deverá retornar "141"

console.log(texto.lastIndexOf("ia")); //Ele deverá retornar "48"

console.log(texto.includes("ciência")); //Ele deverá retornar "true"

console.log(texto.includes("métodos")); //Ele deverá retornar "true"


//QUESTÃO 9

let variavelString = "123.45";
let variavelFloat = parseFloat(variavelString);

console.log(typeof variavelFloat);

