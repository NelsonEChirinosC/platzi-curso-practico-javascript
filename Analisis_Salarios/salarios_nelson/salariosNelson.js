const Venezuela =[ 
    {
        Nombre:"Nelson",
        Salario:750
    },
    {
        Nombre:"Monica",
        Salario:200
    },
    {
        Nombre:"Willie",
        Salario:300
    },
    {
        Nombre:"Fabiola",
        Salario:250
    },
    {
        Nombre:"Nelsaren",
        Salario:1000
    },
    {
        Nombre:"Nelson Alcantara",
        Salario:2500
    },
    {
        Nombre:"Juan",
        Salario:180
    },
    {
        Nombre:"Maria",
        Salario:300
    },
    {
        Nombre:"Francisco",
        Salario:600
    },
    {
        Nombre:"Uriel",
        Salario:50
    },
    {
        Nombre:"Anibal",
        Salario:200
    },
    {
        Nombre:"Emma",
        Salario:220
    },
    {
        Nombre:"Edgar",
        Salario:300
    },
    {
        Nombre:"Jose",
        Salario:600
    },
    {
        Nombre:"Ninibeth",
        Salario:600
    },
    {
        Nombre:"Dairen",
        Salario:550
    },
    {
        Nombre:"Juan",
        Salario:1500
    },
    {
        Nombre:"Carlos",
        Salario:1800
    },
    {
        Nombre:"Ernesto",
        Salario:5000
    },
    {
        Nombre:"Fonseca",
        Salario:8000
    },
    {
        Nombre:"Presidente",
        Salario:500000
    },
    {
        Nombre:"Eliaz",
        Salario:4000
    },
    {
        Nombre:"Juana",
        Salario:560
    },
    {
        Nombre:"Perez",
        Salario:3000
    },
]

analisisSalarial(Venezuela)

function analisisSalarial(pais){
    const listaSalario = pais.map((elemento)=> elemento.Salario).sort((a,b)=> a-b);

    let totalSalario = listaSalario.reduce((total,elemento) => total + elemento);

    let promedioSalario = calcularMediaAritmetica(listaSalario);

    let medianaSalario = calcularMediana(listaSalario);

    console.log(` Para el pais de Venezuela tenemos el siguiente analisis:`)
    console.log(" ")
    console.log(` Total de todos los salarios mensuales: ${totalSalario}$`)
    
    console.log(` Promedio de los salarios mensuales: ${promedioSalario}$`)
    
    console.log(` Mediana de los salarios mensuales: ${medianaSalario}$`)

    // Separacion de la poblacion general del 10% top

    let porcent = parseInt(listaSalario.length * 0.2)
    // console.log(listaSalario.length)
    // console.log(porcent)
    let pueblo = [];
    let millonarios = [];

    for(let i = 0; i < listaSalario.length;i++){
        if(i < listaSalario.length - porcent ){
            pueblo.push(listaSalario[i])
        } else {
            millonarios.push(listaSalario[i])
        }
    }

    let promedioPueblo = calcularMediaAritmetica(pueblo);
    let promedioMillonarios = calcularMediaAritmetica(millonarios);

    let medianaPueblo = calcularMediana(pueblo);
    let medianaMillonarios = calcularMediana(millonarios)
    
    let diferenciaSalarial = promedioMillonarios - promedioPueblo;
    let diferenciaSalarialMediana = medianaMillonarios - medianaPueblo;

    console.log("  ")
    console.log(`El promedio del pueblo es: ${promedioPueblo}$`)
    console.log(`La mediana del pueblo es: ${medianaPueblo}$`)
    
    console.log("  ")
    console.log(`El promedio de los millonarios es: ${promedioMillonarios}$`)
    console.log(`La mediana de los millonarios es: ${medianaMillonarios}$`)
    console.log("  ")
    console.log(`La diferencial Salarial es: ${diferenciaSalarial}$`)
    console.log(`La diferencial Salarial en mediana es: ${diferenciaSalarialMediana}$`)

    let porcentDiferencial = (promedioMillonarios * 100) / promedioPueblo
    let porcentDiferencialMediana = (medianaMillonarios * 100) / medianaPueblo

    console.log(`Los millonarios ganan un ${porcentDiferencial} % mas que el pueblo`)
    console.log(`Los millonarios ganan un ${porcentDiferencialMediana} % mas que el pueblo calculado desde la mediana`)



}


// Funcion para el promedio
function calcularMediaAritmetica(lista){

    // let sumaLista = 0;


    // Iterar con un ciclo for clasico
    // for(let i = 0; i < lista.length;i++){
    //     sumaLista += lista[i];
    // }

    // Metodo reduce
    // Con este elemento podemos reducir el array a un elemento (podemos sumar sus elementos, multiplicarlos, restarlos, etc), reduce es el metodo de array mas complejo
    const sumaLista = lista.reduce(function(valorAcumulado = 0, nuevoElemento){

        return valorAcumulado + nuevoElemento;
    });
    
    const promedioLista = sumaLista / lista.length;

    return promedioLista

}

// Funciones para la mediana
function esPar(numero){
    if(numero%2 === 0){
        return true
    } else {
        return false
    }
}

function calcularMediana(lista){

    lista.sort(function(a,b){
        return a -b    
    });
    // console.log(lista)
    
    const mitadLista = parseInt(lista.length/2);
    let mediana;
    
    if(esPar(lista.length)){
    
        const elemento1 = lista[mitadLista]
        const elemento2 = lista[mitadLista -1]
    
        mediana = (elemento1 + elemento2)/2
    
    
    } else {
    
        mediana = lista[mitadLista] 
    
    }

    return mediana
}