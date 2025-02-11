let compras = [];

function listaDeCompras (){

    while (true){
        let interacao = Number (prompt (`O que deseja fazer?
            0 - Adicionar um item
            1 - Remover um item
            2 - Pesquisar um item
            3 - Ordenar a lista
            4 - Exibir lista 
            5 - Limpar lista
            6 - Sair`));
            

        switch (interacao){
            case 0:
                let adcionarItem = () => {
                    let item = (prompt ("Digite o item que será adicionado:"))
                    compras.push (item);
                    return console.log (compras);
                };

                adcionarItem ();
                break;

                case 1:
                    let removerItem = () => {
                        let itemRemoveido = prompt ("Qual item deseja remover?");
                        compras = compras.filter (item => item !== itemRemoveido);
                        return console.log (compras);
                    };
                    
                    removerItem ();
                    break;

                    case 2:
                        let pesquisarItem = () => {
                            let pesquisa = prompt ("digitem o nome do item:");
                            let itemPesquisado = compras.includes (pesquisa);
                            
                            if (itemPesquisado === true){
                                console.log ("O item está na lista!");
                            } else {
                                console.log ("O item não está na lista!")
                            };

                        };
                        
                        pesquisarItem ();
                        break;

                        case 3:
                            let ordenarItens = () => {
                                compras.sort ((a,b) => a.localeCompare(b));
                                console.log (compras);
                            }

                            ordenarItens ();
                            break;

                            case 4:
                                let exeibirLista = () => {
                                    return console.log (compras);
                                };

                                exeibirLista ();
                                break;

                                case 5:
                                    let limparLista = () => {
                                        compras.length = 0;
                                        return console.log (compras);
                                    };

                                    limparLista ();
                                    break;

                                    case 6:
                                        console.log ("Encerrando...")
                                        return;
                                        

                                    
        };
    };
};    

listaDeCompras ();