let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

function calcularMedias(listaAtletas) {

  for (let i = 0; i < listaAtletas.length; i++) {
    let atleta = listaAtletas[i];

    // Ordena as notas
    let notasOrdenadas = atleta.notas.slice().sort((a, b) => a - b);

    // Remove menor e maior
    let notasValidas = notasOrdenadas.slice(1, 4);

    // Soma das notas válidas
    let soma = 0;
    notasValidas.forEach(n => soma += n);

    // Média
    let media = soma / notasValidas.length;

    // Saída formatada
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${notasOrdenadas.join(",")}`);
    console.log(`Média Válida: ${media}`);
    console.log(""); // Linha extra
  }
}

calcularMedias(atletas);