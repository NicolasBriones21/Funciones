// Area del circulo
function circulo (radio, pi, resultado) {
    var radio = 10;
    var pi = 3.1416;
    var resultado = (radio * radio) * pi;
    alert ("El area del circulo es: " + resultado);
}
circulo();

// Circulo
function rectangulo(base, altura, resultado) {
    var base = 15;
    var altura = 25;
    var resultado = base * altura;
    console.log(resultado);
}
rectangulo();

// triangulo
function triangulo(base, altura, resultado) {
    var resultado = (base * altura) / 2;
    alert ("el area del triangulo es: " + resultado)
}
triangulo(5,10);