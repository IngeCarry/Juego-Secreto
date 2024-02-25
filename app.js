
let intentos = 0;
let numeroSecreto = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto)
{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento()
{
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);   
    if(numeroUsuario == numeroSecreto)
    {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }   
    else
    {
        if(numeroUsuario > numeroSecreto)
        {
            asignarTextoElemento('p','El número secreto es menor');
        }
        else if(numeroUsuario < numeroSecreto)
        {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}


function limpiarCaja()
{
    document.querySelector('#valorUsuario').value = '';
}


function reiniciarJuego()
{
    limpiarCaja();    
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}


function generarNumeroSecreto() 
{
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
    if(listaNumerosSorteados.length == numeroMaximo)
    {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');   

    }
    else
    {
        if(listaNumerosSorteados.includes(numeroGenerado))
        {
            return generarNumeroSecreto();
        }
        else
        {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}


function condicionesIniciales()
{
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica  un número del 1 al ${numeroMaximo}`);    
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

condicionesIniciales();