let filmes = []; 

let numEntradas = 5;

for (let i = 0; i < numEntradas; i ++){
   let NomeDoFime = (prompt (`Digite um filme ${i + 1}:`));
    filmes.push (NomeDoFime);
};

let criticas = ["bom", "ótimo", "regular", "ruim", "pessimo"];

filmes.forEach ((filmes, index) => {
    console.log (`${filmes} - crítica: ${criticas [index % criticas.length]}`);
});