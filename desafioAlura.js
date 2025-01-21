/* 1 -Crear una función que muestre "¡Hola, mundo!" en la consola.*/
function saludar(){
    console.log('¡Hola, mundo!')
}
saludar();

/* 2 - Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.*/

function saludo(nombre){
    console.log(`¡Hola, ${nombre}!`)
}
saludo('pancho');

// 3 - Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function doble(numero){
    return numero * 2;
}
let resultadoDoble = doble(5);
console.log(resultadoDoble);

// 4 - Crear una función que reciba tres números como parámetros y devuelva su promedio.
function calcularPromedio(a, b, c){
    return (a + b + c) / 3;
}
let promedio = calcularPromedio(10, 5, 20);
console.log(promedio)


// 5 - Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function encontrarMayor(a, b){
    return a > b ? a : b;
}
let numeroMayor = encontrarMayor(15, 10);
console.log(numeroMayor);

// 6 -Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function multiplicarPorSiMismo(number){
    return number * number
}
let multiplicar = multiplicarPorSiMismo(7);
console.log(multiplicar)


// Desafio 9
// 1 - Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function calcularIMC(peso, altura){
    var imc = peso / (altura * altura);
    return imc;
}

// 2 - Crea una función que calcule el valor del factorial de un número pasado como parámetro.
// function calcularFactorial(numero){
//     let factorial = 1;
//     for (let i = 1; i <= numero; i++){
//         factorial *= i;
//     }
// }

function calcularFactorial(numero){
    if (numero === 0 || numero === 1){
        return 1;
    } else{
        return numero * calcularFactorial(numero - 1);
    }
}
// ejemplo de uso
let numero = 5;
let resultado = calcularFactorial(numero)
console.log(`El factorial de ${numero} es ${resultado}`);


// 3 - Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function convertirDolaresAReales(dolares) {
    var cotizacionDolar = 4.80;
    var reales = dolares * cotizacionDolar;
    return reales;
  }
  // Ejemplo de uso
let valorEnDolar = 50;
let valorEnReales = convertirDolaresAReales(valorEnDolar);
console.log(`${valorEnDolar} dólares  es Real: ${valorEnReales}`);
  

// Ahora convertir Dolar a peso Argentino
function convertirDolarAPesoArgentino(dolar){
    var cotizacionDolar = 70.00;
    var pesoArgentino = dolar * cotizacionDolar;
    return pesoArgentino;
}
// ejemplo de uso
let valorEnDolares = 50;
let valorEnPesoArgentino = convertirDolarAPesoArgentino(valorEnDolares);
console.log(`${valorEnDolares} dólares es Peso: ${valorEnPesoArgentino}`)
// 4 - Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function calcularAreaYPerimetroSala(anchura, altura){
    let area = anchura * altura;
    let perimetro = 2 * (anchura + altura);
    console.log('Area: ' + area);
    console.log('Perímetro: ' + perimetro);
}
// ejemplo de uso
let anchura = 5;
let altura = 3;
calcularAreaYPerimetroSala(altura, anchura);


// 5 - Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function calcularAreaPerimetroCircular(radio){
    let pi = 3.14;
    let area = pi * radio * radio;
    let perimetro = 2 * pi * radio;
    console.log('Area: ' + area);
    console.log('Perimetro: ' + perimetro);
}
// ejemplo de uso
let radio = 4; // en metros
calcularAreaPerimetroCircular(radio);

// 6 - Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function tablaMultiplicar(numero){
    for (let i = 0; i <= 10; i++) {
    var resultado = numer * i;
    console.log(numero + ' x ' + i + ' = ' + resultado);
}}
// Ejemplo de uso
let numer = 7;
tablaMultiplicar(numer);

// Desafio 3
// 1- Crea una lista vacía llamada "listaGenerica".
let listaGenertica = [];

// 2 - Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['Javascript', 'C', 'C++', 'Kotlin', 'Python'];

// 3 - Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'. 
lenguagesDeProgramacion.push('Java', 'Ruby', 'Golang');

// 4 - Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarLenguajesDeProgramacion(){
    for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
        console.log(lenguagesDeProgramacion[i]);
    }
}
mostrarLenguajesDeProgramacion();

// 5 - Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarLenguajesDeProgramacionInverso(){
    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(lenguagesDeProgramacion[i]);
    }
}
mostrarLenguajesDeProgramacionInverso();

// 6 - Crea una función que calcule el promedio de los elementos en una lista de números.
function calcularPromedio(listaNumeros){
    let suma = 0;
    for (let i = 0; i < listaNumeros.length; i++){
        suma += listaNumeros[i];
    }
    return suma / listaNumeros.length
}
let numerosLista = [10, 20, 30, 40, 50]
let media = calcularPromedio(numerosLista);
console.log('Media: ', media);


// 7 - Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function mostrarNumerosMaximoYMinimo(listaNumeros){
    let maximo = listaNumeros[0];
    let minimo = listaNumeros[0];
    for (let i = 1; i < listaNumeros.length; i++){
        if (listaNumeros[i] > maximo){
            maximo = listaNumeros[i];
        }
        if (listaNumeros[i] < minimo){
            minimo = listaNumeros[i];
        }
    }
    console.log('Número más grande: ', maximo);
    console.log('Número menor: ', minimo);
}
let numeros = [15, 20, 5, 30, 12];
mostrarNumerosMaximoYMinimo(numeros);

// 8 - Crea una función que devuelva la suma de todos los elementos en una lista.
function calcularSuma(listaNumeros){
    let suma = 0;
    for (let i = 0; i < listaNumeros.length; i++){
        suma += listaNumeros[i];
    }
    return suma;
}
let numeroSuma = [15, 20, 5, 30, 12];
let suma = calcularSuma(numeroSuma);
console.log('Suma: ', suma)

// 9 - Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function encontrarIndiceElemento(lista, elemento){
    for (let i = 0; i < lista.length; i++){
        if (lista[i] == elemento){
            return i; // Retorna el indice del elemento encontrado
        }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
}


// 10 - Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumarListas(lista1, lista2){
    return lista1.map((num, index) => num + lista2[index]);
}
const lista1 = [1,2,3]
const lista2 = [4,5,6]
const result = sumarListas(lista1,lista2);
console.log(result); 
// 11 - Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function cuadradoLista(lista){
    return lista.map(num => num ** 2);
}
const lista = [9,3,4];
const resultadoLista = cuadradoLista(lista);
console.log(resultadoLista);
