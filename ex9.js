let filmes = []; 

let numEntradas = 5;

for (let i = 0; i < numEntradas; i ++){
   let NomeDoFime = (prompt (`Digite um filme ${i + 1}:`));
    filmes.push (NomeDoFime);
};

console.log ("Lista de filmes:", filmes)