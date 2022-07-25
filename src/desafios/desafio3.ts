// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLElement;

campoSaldo.innerHTML = "0"
let somaTotal = 0

limparSaldo()

function somarAoSaldo(soma: number) {
    if (Number.isNaN(soma)){
        console.log('Utilize um número')
        alert('Somente são aceitos números')
        return
    }
    somaTotal += soma;
    campoSaldo.innerHTML = somaTotal.toString();
    console.log(somaTotal)
    limparCampoSoma();

}

function limparSaldo() {
    if (campoSaldo){
        somaTotal = 0;
        campoSaldo.innerHTML = somaTotal.toString();
    }    
}

function limparCampoSoma() {
    soma.value = ""
}

botaoAtualizar.addEventListener('click', function () {
    
    
    somarAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */