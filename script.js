// CALCULADORA DE SONHOS

//SONHOS R$ 8,00
// MOSTRAR A QUANTIDADE E O VALOR AO COMPRAR

// SONHOS R$ 5,50 SE COMPRADOS A PARTIR DE 100 UNIDADES


let inputSonhos = document.getElementById("sonhos");

let resultado = document.getElementById("resultado");

function comprar() {
    
    let sonhos = inputSonhos.value;

    let valorTotal = sonhos * valor(sonhos);

    let unidade = valorUnidade(sonhos)

    resultado.innerHTML = `<p> Você comprou ${sonhos} sonhos a R$${unidade} cada.</p>`
    resultado.innerHTML += `<p> Sua compra custa R$${valorTotal}! </p>`
}


function valor(sonhos) {
    if(sonhos >= 100){
        return 5.50;
    } else {
        return 8;
    }
}

function valorUnidade(sonhos) {
    if (sonhos >= 100) {
        return "5,50";
    } else {
        return 8
    }
}