
function esPar(numero){
    return(numero%2===0);
 }
const salariosCol=colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salariosCol_Ord=salariosCol.sort(
    function(salaryA,salaryB){
        return salaryA-salaryB;
    }
);



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


function medianaSalariosCol(lista){
    const mitad=parseInt(lista.length/2);
    console.log('esta es la mitad',mitad)

    if(esPar(lista.lengt)){
        const personamitad=lista[mitad-1];
        const personamitad2=lista[mitad];
        const mediana=calcularMediaAritmetica(personamitad,personamitad2);
        console.log("medianaa",mediana)
        return mediana;
    }else{
        const personamitad=lista[mitad];
        console.log("personamitad",personamitad)
        return personamitad;
    }
}

const medianaGeneralCol=medianaSalariosCol(salariosCol_Ord);

//MedianaTop
const spliceStart=(salariosCol.length*90)/100;
const spliceCount=salariosCol.length-spliceStart;

const salariosColTop10=salariosCol.splice(spliceStart,spliceCount);

const medianaTop10Col=medianaSalariosCol(salariosColTop10);

console.log({

medianaGeneralCol,
medianaTop10Col,

}

);