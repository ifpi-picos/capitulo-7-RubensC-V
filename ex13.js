let filmes = []; 

let numEntradas = 5;

for (let i = 0; i < numEntradas; i ++){
   let NomeDoFilme = (prompt (`Digite um filme ${i + 1}:`));
    filmes.push (NomeDoFilme);
};

let criticas = ["bom", "ótimo", "regular", "ruim", "pessimo"];

const filmesComCriticas = [];

let index = 0;
for (const filme of filmes) {
    const associacao = {nome: filme, critica: criticas [index]}
    console.log (`${filme}: ${criticas [index]}`);
    index ++;
    filmesComCriticas.push (associacao);
};

const recomendacoes = filmesComCriticas.filter ((item) => item.critica === "bom" ||
item.critica === "ótimo");
console.log ("Recomendações:", recomendacoes);