
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
function cleardelete() {
  input = input.slice(0, -1);
  updateOutput();
}

function clearOutput() {
  input = "";
  updateOutput();
}

// Função para atualizar a saída
function updateOutput() {
  document.getElementById("output").value = input;
}
