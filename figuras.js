// //Código del Cuadrado
// console.group("Cuadrados")
// //Lado del cuadrado
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cms");
// //Perimetro del cuadrado
// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + " cms");
// //Area del cuadrado
// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El área del cuadrado mide: " + areaCuadrado + " cms^2");
// console.groupEnd();


// //Código del Triangulo
// console.group("Triangulo");
// //Lados de triangulo
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo =5;
// console.log("Los lados del triángulo miden: " + ladoTriangulo1 + " cms, " + ladoTriangulo2 + " cms, " + baseTriangulo + "cms.");
// console.log("La altura del triangulo mide: " + alturaTriangulo + " cms");
// //Perimetro del triangul
// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triangulo mide: " + perimetroTriangulo + " cms");
// //Area del triangulo
// const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
// console.log("El área del triangulo mide: " + areaTriangulo + " cms^2");
// console.groupEnd();


// //Código del Circulos
// console.group("Circulos");
// //Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es " + radioCirculo + " cms.");
// //Diametro
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo es " + diametroCirculo + " cms.");
// // PI
// const PI = Math.PI;
// console.log("PI es " + PI + ".");
// // Perimetro
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perimetro del circulo es " + perimetroCirculo + " cms.");
// //Area
// const areaCirculo = PI * (radioCirculo**2);
// console.log("El area del circulo es " + areaCirculo + " cms^2.");
// console.groupEnd();


// ********************************************************************************************************************************************************************************

// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

/// Aqui Interactuamos con HTML

// Funciones para el cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert(`Este es el perimetro del cuadrado: ${perimetro}`)

}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    alert(`Este es el area del cuadrado: ${area}`)
}


// Funciones para el triangulo
function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("inputTrianguloLado1").value;
    const inputLado2 = document.getElementById("inputTrianguloLado2").value;
    const inputBase = document.getElementById("inputTrianguloBase").value;

    const perimetro = perimetroTriangulo(inputLado1, inputLado2, inputBase);

    alert(`Este es el perimetro del triangulo: ${perimetro}`)

}

function calcularAreaTriangulo(){
    const inputLado1 = document.getElementById("inputTrianguloLado1").value;
    const inputLado2 = document.getElementById("inputTrianguloLado2").value;
    const inputBase = document.getElementById("inputTrianguloBase").value;

    // suponiendo que el triangulo sea isoceles
    const altura = calularAlturaTrianguloIso2(inputLado1,inputBase)

    const area = areaTriangulo(inputBase,altura);

    alert(`Este es el area del cuadrado: ${area}`)
}

function calularAlturaTrianguloIso(lado,base){
    const angulo = Math.acos((base/2)/lado)

    return Math.sin(angulo) * lado
}

function calularAlturaTrianguloIso2(lado,base){
    return Math.sqrt((lado**2) - ((base/2)**2))
}

// Funciones para el circulo
function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);

    alert(`Este es el perimetro del circulo: ${perimetro}`)

}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);

    alert(`Este es el area del circulo: ${area}`)
}

////// Reto para calcular la altura de un triangulo Isoceles

function calcularAlturaIso(){
    const inputLado1 = document.getElementById("inputTrianguloIso1").value;
    const inputLado2 = document.getElementById("inputTrianguloIso2").value;
    const inputBase = document.getElementById("inputTrianguloBaseIso").value;

    if(inputLado1 !== inputLado2){
        return alert("Este no es un triangulo Isoceles, por favor coloque los lados iguales")
    }

    const result = Math.sqrt((inputLado1**2) - ((inputBase/2)**2));

    alert(`Este es la altura del triangulo isoceles: ${result}`)

}
