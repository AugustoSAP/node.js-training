
const express = require ("express")
const app = express()
const port = 3000

app.use(express.json())

app.get("/testando", (req, res) => {
    res.json("ok")
})
/*1. Faça uma api para calcular o estoque médio de uma peça, sendo que ESTOQUE MÉDIO =
 (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2.*/
app.post('/exercicio1', (req, res) => {
    const corpo = req.body
    console.log(corpo)

    const estoqueMedio = (corpo.quantidadeMinima + corpo.quantidadeMaxima) / 2

    const resposta = {
        peça: corpo.peça,
        estoqueMedio: estoqueMedio
    }

    res.json(resposta)
})


/*2. Uma empresa decide dar um aumento de 30% aos funcionários cujo salário é inferior a 1.000 reais.
Escreva uma api que receba o salário de um funcionário e imprima o valor do salário reajustado ou uma 
mensagem caso o funcionário não tenha direito ao aumento.
*/
app.post('/aumento-salario', (req, res) => {
    const salario = req.body.salario;

    if (salario < 1000) {
        const salarioReajustado = salario * 1.3;
        res.json({ novoSalario: salarioReajustado });
    } else {
        res.json({ mensagem: 'Funcionário não tem direito ao aumento.' });
    }
});


/*3. Escrever uma api que lê o nome de um vendedor, o seu salário fixo, o total de vendas por ele efetuadas 
e o percentual que ganha sobre o total de vendas. Calcular o salário total do vendedor. Escrever o nome do 
vendedor e seu salário total.
*/
app.post('/calcular-salario', (req, res) => {
    const { nome, salarioFixo, totalVendas, percentualComissao } = req.body;

    const comissao = totalVendas * (percentualComissao / 100);

    const salarioTotal = salarioFixo + comissao;

    res.json({ nome: nome, salarioTotal: salarioTotal });
});

//4. Faça uma api que leia o nome de um piloto, uma distância percorrida em km e o tempo que o piloto levou 
//para percorrê-la (em horas). O programa deve calcular a velocidade média - Velocidade = Distância / Tempo - em km/h,
// e exibir a seguinte frase: A velocidade média do <nome do piloto> foi <velocidade media calculada> km/h.

app.post('/calcular-velocidade-media', (req, res) => {
    const { nomePiloto, distanciaKm, tempoHoras } = req.body;

    const velocidadeMedia = distanciaKm / tempoHoras;

    res.json({ mensagem: `A velocidade média do ${nomePiloto} foi ${velocidadeMedia.toFixed(2)} km/h.` });
});

/*5. Faça uma api que calcule e imprima o salário reajustado de um funcionário de acordo com a seguinte regra:
• Salários até 2.000, reajuste de 50%
• Salários maiores que 2.000, reajuste de 30%
*/
// Rota para calcular e imprimir o salário reajustado
app.post('/calcular-salario-reajustado', (req, res) => {
    const { salarioAtual } = req.body;

    let salarioReajustado;

    if (salarioAtual <= 2000) {
        salarioReajustado = salarioAtual * 1.5; 
    } else {
        salarioReajustado = salarioAtual * 1.3; // 
    }
    res.json({ salarioReajustado: salarioReajustado });
});

/*6. Construa uma api que calcule o peso ideal de uma pessoa. Dados de entrada: altura e sexo. Fórmulas para cálculo do peso:
• peso ideal de homem = (72,7 x altura) – 58
• peso ideal da mulher = (62,1 x altura) – 44,7
*/
app.post('/calcular-peso-ideal', (req, res) => {
    const { altura, sexo } = req.body;

    let pesoIdeal;

    if (sexo.toLowerCase() === 'masculino') {
        pesoIdeal = (72.7 * altura) - 58;
    } else if (sexo.toLowerCase() === 'feminino') {
        pesoIdeal = (62.1 * altura) - 44.7;
    } else {
        return res.status(400).json({ mensagem: 'Sexo inválido. Use masculino ou feminino.' });
    }

    res.json({ pesoIdeal: pesoIdeal });
});

/* 7. Faça uma api para ler o código e o preço de 15 produtos, calcular e escrever:
    • O maior preço lido; e
    • A média aritmética dos preços dos produtos.
 */

    app.post('/exercicio7', (req, res) => {
        let listaProdutos = []
    
        req.body.forEach(produto => {
            listaProdutos.push(produto)
        });
    
        let maiorPrecoLido = 0
        listaProdutos.forEach(produto => {
            if (produto.preco > maiorPrecoLido){
                maiorPrecoLido = produto.preco
            }
        })
    
        let soma = 0
        console.log("soma ", soma)
        listaProdutos.forEach(produto => {
            console.log("produto preco ", produto.preco)
            soma = soma + produto.preco
            console.log("soma ", soma)
        })
    
        let media = soma / listaProdutos.length
    
        res.json({
            maiorPrecoLido: maiorPrecoLido,
            media: media.toFixed(2)
        })
    })



 /*    8. Uma empresa concederá um aumento de salário aos seus funcionários, variável de acordo com o cargo, conforme a tabela abaixo. Faça uma api que leia o salário e o código do cargo de um funcionário e calcule o seu novo salário. Se o cargo do funcionário não estiver na tabela, ele deverá receber 15% de aumento. Mostre o salário antigo, o novo salário e a diferença entre ambos.
Código do Cargo -> Percentual:
    • 101 -> 5%
    • 102 -> 7,5%
    • 103 -> 10%
    */

    function calcularNovoSalario(salarioAtual, codigoCargo) {
        let novoSalario;
        let percentualAumento;
    
        switch (codigoCargo) {
            case 101:
                percentualAumento = 0.05; 
                break;
            case 102:
                percentualAumento = 0.075; 
                break;
            case 103:
                percentualAumento = 0.10; 
                break;
            default:
                percentualAumento = 0.15; 
                break;
        }
    
        novoSalario = salarioAtual * (1 + percentualAumento);
    
        return {
            salarioAntigo: salarioAtual,
            novoSalario: novoSalario,
            diferenca: novoSalario - salarioAtual
        };
    }
    
    
    app.post('/calcular-novo-salario', (req, res) => {
        const { salario, codigoCargo } = req.body;
    
        const resultado = calcularNovoSalario(salario, codigoCargo);
    
        res.json(resultado);
    });



 /*   9. Faça uma api que receba o valor do salário mínimo, o número de horas trabalhadas, o número de dependentes do funcionário e a quantidade de horas extras trabalhadas. Calcule e imprima o salário a receber do funcionário seguindo as regras abaixo:

    •  Valor da hora trabalhada é igual a 1/5 do salário mínimo;
    •  Salário do mês é igual ao número de horas trabalhadas vezes o valor da hora trabalhada;
    •  Para cada dependente acréscimo de 32 reais;
    •  Para cada hora extra trabalhada o cálculo do valor da hora trabalhada acrescida de 50 %;
    •  Salário bruto é igual ao salário do mês mais os valores dos dependentes mais os valores das horas extras;
    •  Cálculo do valor do imposto de renda retido na fonte segue a tabela abaixo:
        IRRF | Salário Bruto
        Isento Inferior a 2.000
        10% De 2.000 a 5.000
        20% Superior a 5.000
    • Salário líquido é igual ao salário bruto menos IRRF;
    • A gratificação segue a próxima tabela:
          Salário Líquido | Gratificações
          Até 3.500 | 1.000 reais
          Superior a 3.500 | 500 reais
    • Salário a receber do funcionário é igual ao salário líquido mais a gratificação.
*/

function calcularSalarioReceber(salarioMinimo, horasTrabalhadas, dependentes, horasExtrasTrabalhadas) {

    const valorHoraTrabalhada = salarioMinimo / 5;

    const salarioMes = horasTrabalhadas * valorHoraTrabalhada;

    const valorDependentes = dependentes * 32;

  
    const valorHoraExtra = valorHoraTrabalhada * 1.5;
    const valorHorasExtras = horasExtrasTrabalhadas * valorHoraExtra;


    const salarioBruto = salarioMes + valorDependentes + valorHorasExtras;

    let irrf;
    if (salarioBruto < 2000) {
        irrf = 0; // Isento
    } else if (salarioBruto >= 2000 && salarioBruto <= 5000) {
        irrf = salarioBruto * 0.1; 
    } else {
        irrf = salarioBruto * 0.2; 
    }

   
    const salarioLiquido = salarioBruto - irrf;

    let gratificacao;
    if (salarioLiquido <= 3500) {
        gratificacao = 1000; 
    } else {
        gratificacao = 500; 
    }

    const salarioReceber = salarioLiquido + gratificacao;

    return {
        salarioLiquido: salarioLiquido,
        gratificacao: gratificacao,
        salarioReceber: salarioReceber
    };
}


app.post('/calcular-salario-receber', (req, res) => {
    const { salarioMinimo, horasTrabalhadas, dependentes, horasExtrasTrabalhadas } = req.body;

    const resultado = calcularSalarioReceber(salarioMinimo, horasTrabalhadas, dependentes, horasExtrasTrabalhadas);

    res.json(resultado);
});

app.listen(port, ()=>{
    console.log("Aplicação está rodadando")
})