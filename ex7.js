const dividirNome = () => {
    const nome = prompt ("Digite seu nome completo:");

    const  primeiroNome = nome.split (" ");

    console.log (primeiroNome [0]);
};

dividirNome ();