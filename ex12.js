let filmes = []; 

let numEntradas = 5;

for (let i = 0; i < numEntradas; i ++){
   let NomeDoFilme = (prompt (`Digite um filme ${i + 1}:`));
    filmes.push (NomeDoFilme);
};

let criticas = ["bom", "ótimo", "regular", "ruim", "pessimo"]

let index = 0;
for (const filme of filmes) {
    console.log (`${filme}: ${criticas [index]}`);
    index ++;
};