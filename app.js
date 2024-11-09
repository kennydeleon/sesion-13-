// parte 1
function suma(a , b) {
    return a + b;
}

function resta(a , b) {
    return a - b;
}

function multiplicacion(a , b) {
    return a * b;
}

function division(a , b){
    if(b == 0) {
        return 'error: Division por cero'
    }
    return a / b;
}
//parte 2
function calculadora(operacion) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result = "por favor, ingresa numero validos.";

    if (isNaN(num1) || isNaN(num2)) {
        result = " por favor, ingresa numeros validos.";
    } else {
        if (operacion === 'Suma'){
            result = suma(num1,num2);
        } else {
            if (operacion === 'Resta') {
                result = resta(num1,num2);
            } else {
                if ( operacion === 'Multiplicacion') {
                    result = multiplicacion(num1,num2);
                } else {
                    if (operacion === 'Division') {
                        result = division(num1,num2);
                    } else {
                        result = "operacion no valida";
                    }
                }
            }
        }
    }

    document.getElementById("result").innerHTML = `<strong>RESULTADO</strong>
    <br> ${operacion}:${result}`;
}
