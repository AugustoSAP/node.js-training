//Lista de exercícios

/*1. Faça um Programa que receba quatro notas de um aluno,calcule e imprima a média aritmética das notas e a mensagem
de aprovado para média superior ou igual a 7.0 ou a mensagem de reprovado para média inferior a 7.0.
*/
const prompt = require('prompt-sync')();
let nota1 = Number(prompt("Digite a primeira nota:"))
let nota2 = Number(prompt("Digite a primeira nota:"))
let nota3 = Number(prompt("Digite a primeira nota:"))
let nota4 = Number(prompt("Digite a primeira nota:"))

let media = (nota1 + nota2 + nota3 + nota4) / 4

if(media >= 7){
    console.log(`Média: ${media} - Aprovado`);
}else{
    console.log(`Média: ${media} - Reprovado`);
}


//2. Escreva um script para ler o número total de eleitores de um município,
// o número de votos brancos, nulos e válidos. Calcular e escrever o percentual
// que cada um representa em relação ao total de eleitores



let totalEleitores = Number(prompt("Digite o número total de eleitores: "));
let votosBrancos = Number(prompt("Digite o número de votos brancos: "));
let votosNulos = Number(prompt("Digite o número de votos nulos: "));
let votosValidos = Number(prompt("Digite o número de votos válidos: "));


let brancos = (votosBrancos / totalEleitores) * 100;
let nulos = (votosNulos / totalEleitores) * 100;
let validos = (votosValidos / totalEleitores) * 100;


console.log(`Percentual de votos brancos: ${brancos}%`);
console.log(`Percentual de votos nulos: ${nulos}%`);
console.log(`Percentual de votos válidos: ${validos}%`);



//3. Escreva um script para ler o salário mensal atual de um funcionário e o percentual 
//de reajuste. Calcular e escrever o valor do novo salário.



// Recebendo os dados do usuário
let salarioAtual = Number(prompt("Digite o salário mensal atual do funcionário: "));
let percentualReajuste = Number(prompt("Digite o percentual de reajuste do seu salário (%): "));

let valorReajuste = salarioAtual * (percentualReajuste / 100);
let novoSalario = salarioAtual + valorReajuste;

// Exibindo o resultado
console.log(`Salário atualizado: R$ ${novoSalario.toFixed(2)}`);



//4. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem
//do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual
//do distribuidor seja de 28% e os impostos de 45%, escrever um script para ler o custo de 
//fábrica de um carro, calcular e escrever o custo final ao consumidor.



let custoFabricaa = Number(prompt("Digite o custo de fábrica do carro: "));


const percentualDistribuidor = 0.28; 
const percentualImpostos = 0.45; 


let custoDistribuidorr = custoFabrica * percentualDistribuidor;
let custoImpostoss = custoFabrica * percentualImpostos;
let custoFinall = custoFabricaa + custoDistribuidorr + custoImpostoss;

// Exibindo o resultado
console.log(`O custo final do carro  é: R$ ${custoFinall.toFixed(2)}`);


//5. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e
//dos impostos (aplicados ao custo de fábrica). Escreva um script para ler o custo de fábrica de um carro,
//a porcentagem do distribuidor e o imposto, e calcular e escrever o custo final ao consumidor


// Recebendo os dados do usuário
let custoFabrica = Number(prompt("Digite o custo de fábrica : "));
let porcentagemDistribuidor = Number(prompt("Digite a porcentagem do distribuidor: "));
let imposto = Number(prompt("Digite a porcentagem do imposto: "));

// Calculando o custo final ao consumidor
let custoDistribuidor = custoFabrica * (porcentagemDistribuidor / 100);
let custoImpostos = custoFabrica * (imposto / 100);
let custoFinal = custoFabrica + custoDistribuidor + custoImpostos;

// Exibindo o resultado
console.log(`O custo ao consumidor é: R$ ${custoFinal.toFixed(2)}`);


//6. Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma 
//comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um script
//que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe
//por carro vendido. Calcule e escreva o salário final do vendedor.


let numCarrosVendidos = Number(prompt("Digite o número de carros vendidos pelo vendedor: "));
let valorTotalVendas = Number(prompt("Digite o valor total das vendas efetuadas pelo vendedor: "));
let salarioFixo = Number(prompt("Digite o salário fixo do vendedor: "));
let valorPorCarroVendido = Number(prompt("Digite o valor que o vendedor recebe por carro vendido: "));


let comissaoVendas = valorTotalVendas * 0.05;


let salarioFinal = salarioFixo + (numCarrosVendidos * valorPorCarroVendido) + comissaoVendas;


console.log(`O salário final do vendedor é: R$ ${salarioFinal.toFixed(2)}`);



//7. Faça um script que leia duas notas de um aluno, calcule e escreva a média final 
//deste aluno. Considerar que a média é ponderada e que o peso das notas é 4 e 6.


// Recebendo as notas do usuário
let nota10 = Number(prompt("Digite a primeira nota: "));
let nota11 = Number(prompt("Digite a segunda nota: "));

// Calculando a média ponderada
let mediaFinal = (nota10 * 4 + nota11 * 6) / (4 + 6);

// Exibindo o resultado
console.log(`A média final do aluno é: ${mediaFinal.toFixed(2)}`);



//8. Faça um script que determine o volume de uma caixa d’água cilíndrica, sendo que o raio
//e a altura devem ser fornecidos. OBS: V = PI * Raio^2 * Altura


let raio = parseFloat(prompt("Digite o raio da caixa d'água (em metros): "));
let altura = parseFloat(prompt("Digite a altura da caixa d'água (em metros): "));


let volume = Math.PI * Math.pow(raio, 2) * altura;

// Exibindo o resultado
console.log(`O volume da caixa d'água cilíndrica é: ${volume.toFixed(2)} metros cúbicos`);



//9. Faça um script para somar dois números e multiplicar o resultado pelo primeiro número.


let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo número: "));

let soma = numero1 + numero2;

let resultado = soma * numero1;


console.log(`O resultado da operação ((${numero1} + ${numero2}) * ${numero1}) é: ${resultado}`);
