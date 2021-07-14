function Enumerar(minimo, maximo){
    var number = []
    for (var i = minimo; i <= maximo; i++){
        number.push(i) // La función push añade uno o mas elementos a un arreglo
    }
    return number
}
console.log(Enumerar(1, 255))

//

    // Enlistar n cantidad de números

//

function Enumerar(minimo, maximo){
    var number = []
    for (var i = minimo; i <= maximo; i++){
        if (i % 2 === 0){
            number.push(i) // La función push añade uno o mas elementos a un arreglo
        }
    }
    return number
}
console.log(Enumerar(1, 1000))

//

    // Imprimir todos los números pares hasta n números 

//

function Enumerar(minimo, maximo){
    var number = []
    for (var i = minimo; i <= maximo; i++){
        if (i % 2 === 1){
            number.push(i) // La función push añade uno o mas elementos a un arreglo
        }
    }
    return number
}
console.log(Enumerar(1, 1000)) // El uno es impar, pero no es ni un número primo o compuesto

//

    // Imprimir los números impares hasta n números

//

function Sumador(minimo, maximo){
    var sum = 0;    
    for (var i = minimo; i <= maximo; i++){
        if (i % 2 === 1){           
            sum += i
        }
    }
    return sum
}
console.log(Sumador(1, 5000)) // El uno es impar, pero no es ni un número primo o compuesto

//

    // Sumar todos los impares de una lista

//

function Sumador(numeros){
    var sum = 0
    for (i in numeros){
        i = int(i)
        sum += i        
    }
    return sum
}
console.log(Sumador([3,6,-8,7]))

//

    // Suma de un arreglo

//

function Encontrar_Maximo(array){
    var maximo = Math.max.apply(null, array)
    return maximo
}
console.log(Encontrar_Maximo([2,-4,6,5,4,7,-5,0,9]))

//

    // Encontrar un maximo

//

function Encontrar_Minimo(array){
    var minimo = Math.min.apply(null, array)
    return minimo
}
console.log(Encontrar_Minimo([2,-4,6,5,4,7,-5,0,9]))

//

    // Encontrar un minimo

//

function Promedio(array){
    let reducer = (accumulator, curr) => accumulator + curr;
    let valor = array.reduce(reducer);
    valor = valor / array.length;
    return valor
}
console.log(Promedio([6.5,6.3,7.0,1.0,5.2]))

//

    // PROMEDIO

//

function Mayores(array, valor){
    let array2 = [];
    for (i in array){
        if (valor < i){
            array2.push(i)
        }        
    }
    return array2
}
console.log(Mayores([5,3,-6,2,0,3,-5,10,5], 5))

//

    // ENTREGA LOS NÚMEROS MAYORES DE UN ARREGLO QUE UN NÚMERO ESPECÍFICO

//

function Cuadrados(array){
    let valores = [];
    for (i in array){
        valores.push(array[i]**2) 
    }
    return valores
}
console.log(Cuadrados([3,-5,7]))

//

    // Cuadrados de los números de un arreglo.

//

function SinNegativos(array){
    for (i in array){
        if(array[i] < 0){
            array[i] = 0;
        }
    }
    return array
}
console.log(SinNegativos([5,-3,0,6,-3,7,9]))

//

    // Función que reemplaza los negativos por cero.

// 

function MetodosRevueltos(array){
    let array2 = [];
    let minimo = `El mínimo es: ${Math.min.apply(null, array)}`
    let maximo = `El máximo es: ${Math.max.apply(null, array)}`
    let reducer = (accumulator, curr) => accumulator + curr;
    let valor = array.reduce(reducer)
    valor = `El promedio es: ${valor / array.length}`
    array2 = [minimo, maximo, valor]
    return array2
}
console.log(MetodosRevueltos([3,7,0,-4,6,-8,3]))

//

    // Mínimo, Máximo y promedio de un arreglo cualquiera.

// 

function Intercambio(array){
    temp = array[0];
    array[0] = array[array.length-1];
    array[array.length-1] = temp;
    return array
}
console.log(Intercambio([3,-6,4,-3,6,0,3,-5]))

//

    // Intercambiar el primer valor con el último de un arreglo.

//

function SinNegativos2(array){
    for (i in array){
        if(array[i] < 0){
            array[i] = "Dojo";
        }
    }
    return array
}
console.log(SinNegativos2([5,-3,0,6,-3,7,9]))
