let jogadores = [];

function adivinhacao (){
    let jogador = {
        nome: prompt ("Nome de jogador:"),
        pontuacao: 100,
        tentativas: 0,
    }

    let aleatorio = Math.floor(Math.random() * 101);

    let palpite = Number (prompt ("Tente adivinhar o número:"));

    while (palpite !== aleatorio){
        
        if (aleatorio > palpite){ 

            console.log ("O número é maior!");

        } else {
            console.log ("O número é menor!");
        };
        
        palpite = Number (prompt ("você errou! tente outra vez:"));

        jogador.pontuacao --;
        jogador.tentativas ++;
    };

    console.log ("Parabéns, você acertou!!!");

    jogadores.push (jogador);
    console.log ("Ranking:")
    console.table (jogadores)
};

adivinhacao ();