// 1. Mapeamento e captura dos elementos do DOM utilizando o id
const inputPeso = document.getElementById("peso");
const inputAltura = document.getElementById("altura");
const btnCalcular = document.getElementById("btn-calcular");

const painelResultado = document.getElementById("painel-resultado");
const txtValorImc = document.getElementById("valor-imc");
const txtClassificacao = document.getElementById("classificacao-imc");

// 2. Criação da função executora do cálculo
function calcularIMC() {
    // Captura e conversão dos valores string para números de ponto flutuante
    const peso = parseFloat(inputPeso.value);
    const altura = parseFloat(inputAltura.value);

    // Validação inicial simples para evitar divisões por zero ou campos em branco
    if (!peso || !altura || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    // Aplicação da fórmula: IMC = peso / (altura * altura)
    const imc = peso / (altura * altura);

    // Renderização do resultado limitando o número de casas decimais em duas
    txtValorImc.innerText = imc.toFixed(2);

    // Estrutura condicional para mapear a classificação da OMS
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        classificacao = "Obesidade Grau I";
    } else if (imc >= 35 && imc < 40) {
        classificacao = "Obesidade Grau II";
    } else {
        classificacao = "Obesidade Grau III";
    }

    // Exibe o texto da classificação encontrada
    txtClassificacao.innerText = classificacao;

    // Torna o painel de resultados visível removendo a classe do CSS
    painelResultado.classList.remove("oculto");
}

// 3. Adiciona o ouvinte de evento (Event Listener) de clique ao botão
btnCalcular.addEventListener("click", calcularIMC);