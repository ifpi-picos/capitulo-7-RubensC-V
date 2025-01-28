let filmes = []; 

let numEntradas = 5;

for (let i = 0; i < numEntradas; i ++){
   let NomeDoFilme = (prompt (`Digite um filme ${i + 1}:`));
    filmes.push (NomeDoFilme);
};

console.log ("Lista de filmes:", filmes);

function buscador (busca){
    busca = prompt ("Digite o filme que deseja encontrar:");
    let filmeEncontrado = filmes.find ((filmes) => filmes === busca); 
    
    if (filmeEncontrado !== undefined){

        console.log ("Filme encontrado:", filmeEncontrado);

    } else {

        console.log ("Filme não encontrado!");

    }
};

buscador ();
