document.getElementById("salaryForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const idade = parseInt(document.getElementById("idade").value);
  const salarioBruto = parseFloat(document.getElementById("salario").value);
  const dependentes = parseInt(document.getElementById("dependentes").value);

  const inss = salarioBruto * 0.08;
  const valeTransporte = salarioBruto * 0.05;
  const bonusIdade = idade > 50 ? 300 : 200;
  const valorDependente = dependentes * 50;

  const salarioLiquido = salarioBruto - inss - valeTransporte + bonusIdade + valorDependente;

  alert(`
    Nome: ${nome}
    Idade: ${idade}
    Número de Dependentes: ${dependentes}
    Salário Bruto: R$ ${salarioBruto.toFixed(2)}
    INSS: R$ ${inss.toFixed(2)}
    Vale Transporte: R$ ${valeTransporte.toFixed(2)}
    Bônus Idade: R$ ${bonusIdade.toFixed(2)}
    Salário Líquido: R$ ${salarioLiquido.toFixed(2)}
  `);
});
