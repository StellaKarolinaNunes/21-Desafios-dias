// let output = document.getElementById("output");

// function appendSymbol(symbol) {
//   output.value += symbol;
// }

// function appendDecimal() {
//   if (!output.value.includes('.')) {
//     output.value += '.';
//   }
// }

// function clearOutput() {
//   output.value = "";
// }
// document.querySelector('#delete')
//     .addEventListener('click', function(){
//         screen.value = screen.value.substring(0, (screen.value.length -1));
// })
// function calculateResult() {
//   try {
//     output.value = eval(output.value);
//   } catch (error) {
//     output.value = "Erro";
//   }
// }
// Variável para armazenar a entrada
let input = "";

// Função para adicionar símbolos à entrada
function appendSymbol(symbol) {
  input += symbol;
  updateOutput();
}

// Função para adicionar um decimal à entrada
function appendDecimal() {
  // Verifica se já existe um ponto na entrada
  if (!input.includes('.')) {
    input += '.';
    updateOutput();
  }
}

// Função para calcular o resultado
function calculateResult() {
  try {
    // Avalia a expressão matemática
    const result = eval(input);

    // Atualiza a entrada com o resultado
    input = result.toString();

    // Atualiza a saída
    updateOutput();
  } catch (error) {
    // Se houver um erro na expressão, exibe "Erro" na saída
    input = "Erro";
    updateOutput();
  }
}

// Função para apagar a entrada
function clearOutput() {
  input = input.slice(0, -1);
  updateOutput();
}

// Função para atualizar a saída
function updateOutput() {
  document.getElementById("output").value = input;
}
