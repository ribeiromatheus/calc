function calcularPesoLiquido() {
  // Obtendo os valores dos campos
  let pesoBruto = parseFloat(document.getElementById('pesoBruto').value);
  let quantidadeCaixas = parseInt(document.getElementById('quantidadeCaixas').value);
  let taraTotal = parseFloat(document.getElementById('taraTotal').value);
  let pesoPalletInput = document.getElementById('pesoPallet').value.trim();
  let pesoPallet = pesoPalletInput === '' ? 0 : parseFloat(pesoPalletInput);

  // Calculando o peso líquido
  let pesoLiquido = pesoBruto - (quantidadeCaixas * taraTotal) - pesoPallet;
  
  // Exibindo o resultado
  document.getElementById('resultado').innerHTML = `Peso Líquido: ${pesoLiquido.toFixed(2)} kg`;
}
