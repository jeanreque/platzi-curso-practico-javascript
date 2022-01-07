
function perimetroCuadrado(lado){
    return lado * 4
}

function areaCuadrado (lado){
    return lado* lado
}

function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base

}

function areaTriangulo(baseTriangulo,altura){
    return (baseTriangulo* altura) / 2
}

function diametroCirculo (radio){
    return radio * 2
}

function perimetroCirculo(radio){
    let diametro = diametroCirculo(radio)
    return diametro*Math.PI
}

function areaCirculo(radio){
    return (radio*radio) * Math.PI
}

// Interactuamos con el HTML

function calcularPerimetroCuadrado() {
    let  input = document.getElementById("idCuadrado")
    let value = input.value
    let perimetro = perimetroCuadrado(value)
    alert(perimetro)
         

}
function calcularAreaCuadrado(){

}