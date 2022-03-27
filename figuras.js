
//Codigo del cuadrado
console.group("Cuadrados")
//const ladoCuadro=5;
//console.log("Los lados del cuadro miden"+ladoCuadro+" cm ");


function perimetroCuadrado(lado){
    return lado*4;
}


//console.log("El perimetro del cuadrado es :"+perimetroCuadrado+" cm ");

//const areaCuadrado=ladoCuadro*ladoCuadro;

function areaCuadrado(lado){
   return lado*lado;
}
//console.log("El Area  del cuadrado es :"+areaCuadrado+" cm 2");
console.groupEnd();
//Codigo del triangulo

console.group("Triangulos")

//const ladoTriangulo1=6;
//const ladoTriangulo2=6;
//const baseTriangulo=4;
//const alturaTriangulo=5.5;

//console.log("los lados del triangulo miden: "+ 
//ladoTriangulo1+"cm ,"
//+ladoTriangulo2+"cm, "+baseTriangulo+"cm");
//console.log("la altura del triangulo es de :"+ alturaTriangulo);

//const perimetroTriangulo=ladoTriangulo1+ladoTriangulo2+baseTriangulo;
function perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,baseTriangulo){
 const suma= ladoTriangulo1+ladoTriangulo2+baseTriangulo;
 return suma;
}
//console.log("la perimetro del triangulo es de :"+ perimetroTriangulo);
//const areaTriangulo =(baseTriangulo*alturaTriangulo)/2;
//console.log("El Area  del Trianguolo es :"+areaTriangulo+" cm 2");

function areaTriangulo(base,altura){
   return(base*altura)/2;
}

function alturaTriangulo(lado1,lado2,lado3){
    if(lado1==lado2 && lado1==lado3){
       const altura=Math.sqrt(lado1**2-lado3**2/4);
       return altura;
    }else{
        alert("Ingreso un triangulo distinto");
    }
}
console.groupEnd();

//Codigo del circulo
console.group("Circulos");
//Diametro

function diametroCirculo(radio){
    return radio*2
}
//const diametroCirculo=radioCirculo*2;

//PI
const PI=Math.PI;

console.log("PI Es : "+ PI)
//Cicunferencia
//const perimetroCirculo=diametroCirculo*PI;
function perimetroCirculo(radio){
     const diametro=diametroCirculo(radio);
     return diametro*PI;
}

//Area
//const areaCirculo=(radioCirculo*radioCirculo)*PI;

function areaCirculo(radio){
    return (radio*radio)*PI;
}
console.groupEnd();

function calcularPerimetroCuadrado(){
 const input=document.getElementById("inputCuadrado");
 const value=input.value;
 const perimetro=perimetroCuadrado(value);
 alert(perimetro);
}

function calcularAreaCuadrado(){
    const input=document.getElementById("inputCuadrado");
    const value=input.value;
    const area=areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    
    const input=document.getElementById("inputlado1");
    const input1=document.getElementById("inputlado2");
    const input3=document.getElementById("inputBase");
    const value1=Number(input.value);
    const value2=Number(input1.value);
    const value3=Number(input3.value);
    
    const perimetro=perimetroTriangulo(value1,value2,value3);
    alert(perimetro);
    
}

function calcularAreaTriangulo(){
    const input1=document.getElementById("inputBase");
    const input2=document.getElementById("inputAltura");
    const value1=Number(input1.value);
    const value2=Number(input2.value);
    const area=areaTriangulo(value1,value2);
    alert(area);

}

function calcularAltura(){
    const input=document.getElementById("inputlado1");
    const input1=document.getElementById("inputlado2");
    const input3=document.getElementById("inputBase");
    const value1=Number(input.value);
    const value2=Number(input1.value);
    const value3=Number(input3.value);
    
    const altura=alturaTriangulo(value1,value2,value3);
    alert(altura.toFixed(1)); 
}

function calcularPerimetroCirculo(){
    const input1=document.getElementById("inputradio");
    const value1=Number(input1.value);
    const perimetro=perimetroCirculo(value1);
    alert(perimetro);
    
}

function calcularAreaCirculo(){
    const input1=document.getElementById("inputradio");
    const value1=Number(input1.value);
    const area=areaCirculo(value1);
    alert(area);
    
}