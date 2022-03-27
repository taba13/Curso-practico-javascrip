//const precioOriginal=100;
//const descuento =15;


function calcularPrecioConDescuento(precio,descuento){
 const porcentajePrecioConDescuento=100-descuento;
 const precioconDescuento=(precio*porcentajePrecioConDescuento)/100;

 return precioconDescuento;
}

function onClickButton(){
    const inputPrice=document.getElementById("InputPrice");
    const priceValue=inputPrice.value;
    const InputDiscount=document.getElementById("InputDiscount");
    const DiscountValue=InputDiscount.value;

    const precioconDescuento=calcularPrecioConDescuento(priceValue,DiscountValue);
     
    const resultP=document.getElementById("Resultp");
    resultP.innerText="El precio con descuento son $ "+precioconDescuento;

}

//console.log({
    //precioOriginal,
    //descuento,
    //precioconDescuento,
   // precioconDescuento,
//});