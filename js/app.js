
// VARIABLES
const cursos = document.querySelector('.Calculadora');
//console.log(cursos);

let pantalla = document.getElementById("resultado");
let primerNumero = 0.00;
let armaSegundoNumero = '';
let segundoNumero = 0.00;
let operacion = '';
let resultado = 0.00;

// LISTENERS
initApp();

document.addEventListener('load', initApp)

function initApp(){
    cursos.addEventListener('click', obtenerCurso)
}


// FUNCIONES
function obtenerCurso(e){
    //console.log(e.target.textContent)
    valor = e.target.textContent;

    if(valor === 'C'){
        limpiarPantalla();
        return;
    }

    if(valor === '/' || valor === 'x' || valor === '-' || valor === '+' || valor === '=' || valor === 'X^y' || valor === '%'){
        
        if (pantalla.value.trim() === ''){
            return;
        }

        if(primerNumero==0.00){
            primerNumero = pantalla.value;
        }        

        //console.log(primerNumero);

        if(primerNumero!=0.00){
            segundoNumero = armaSegundoNumero;
            if (segundoNumero != 0.00){
                realizarOperacion();
                //return;
            }            
        }   
        
        if (segundoNumero == 0.00 && valor != '='){            
            operacion ='';
            operacion = valor;
            console.log('Operacion: ' + operacion);
        }
    }
    if (valor != '='){
        imprimirEnPantalla(valor); 
    }
    
}

function imprimirEnPantalla(valor){
    pantalla.value+=valor;
    if(primerNumero!=0.00){
        //console.log(valor);
        if (valor != '/' && valor != 'x' && valor != '-' && valor != '+' && valor != 'X^y' && valor != '%'){
            armaSegundoNumero += valor;
        }        
    }
    
}

function realizarOperacion(){
    if (operacion === '/'){
        resultado = primerNumero / segundoNumero;
    } else if (operacion === 'x'){
        resultado = primerNumero * segundoNumero;
    } else if (operacion === '-'){
        resultado = primerNumero - segundoNumero;
    } else if (operacion === '+'){
        resultado = parseFloat(primerNumero) + parseFloat(segundoNumero);
    } else if (operacion === 'X^y'){
        resultado = Math.pow(parseFloat(primerNumero), parseFloat(segundoNumero));
    } else if (operacion === '%'){
        resultado = parseFloat(primerNumero) % parseFloat(segundoNumero);
    }

    console.log('Primer numero: ' + primerNumero + ' Segundo numero: ' + segundoNumero + ' Operacion: ' + operacion + ' Resultado: ' + resultado);

    pantalla.value = resultado;

    if (operacion != '='){        
        primerNumero = resultado;
        //pantalla.value+=operacion;
        armaSegundoNumero='';
        segundoNumero = 0;
        
        operacion = '';
    } else {
        operacion = '';
        armaSegundoNumero='';
        primerNumero = resultado;
        segundoNumero = 0;
    }   
}

function limpiarPantalla(){
    pantalla.value = '';
    operacion = '';
    armaSegundoNumero='';
    primerNumero = 0;
    segundoNumero = 0;
}
