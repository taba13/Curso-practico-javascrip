
function calcularMediaAritmetica(lista){
    //let sumaLista=0;
     //for(let i=0; i<lista.length; i++){
       // sumaLista=sumaLista+lista[i];
    //}
    
    const sumaLista=lista.reduce(
       function(valorAcumulado=0,nuevoElemento){
         return valorAcumulado+nuevoElemento;
       }
    );
    
    const promedioLista=sumaLista/lista.length;
    
    return (promedioLista);
    }

const lista=[
    100,
    200,
    500,
    400000,
    900,
    600,
];

function ordenarnumeros(){
lista.sort(function(a, b) {
  return a - b;
});
console.log(lista);
}


const mitadLista1=parseInt(lista.length/2);

function esPar(numero){
if(numero %2===0){
  return true;
}else{
    return false;
}
}

let mediana;

if(esPar(lista.length)){
    const elemento1=lista[mitadLista1-1];
    const elemento2=lista[mitadLista1];

    const promedioElemento1y2=calcularMediaAritmetica([
        elemento1,
        elemento2,
    ]);

    mediana=promedioElemento1y2;

}else{
   mediana=lista[mitadLista1];

}