


window.onload= function(){
    
    var panchicaya=document.getElementById("p-anchicaya")
    var buenaventura=document.getElementById("p-buenav")
    var baires=document.getElementById("p-baires")
    var dagua=document.getElementById("p-dagua")
    var queremal=document.getElementById("p-queremal")
    var sbernardo=document.getElementById("p-sbernardo")
    var suarez=document.getElementById("p-suarez")

  var fechaActual = new Date();
  document.getElementById("fecha").innerHTML = fechaActual.toLocaleDateString();


  function muestraHora() {
    var horaActual = new Date();
    document.getElementById("hora").innerHTML = horaActual.toLocaleTimeString();
  }

  setInterval(muestraHora, 1000);

  var corigen = document.getElementById("corigen")
  var cdestino = document.getElementById("cdestino")




function precio() {
    var corigen = document.getElementById("corigen")
    var cdestino = document.getElementById("cdestino")
    document.getElementById("p-anchicaya").style.display = "none"
    document.getElementById("p-buenav").style.display = "none"
    document.getElementById("p-baires").style.display = "none"
    document.getElementById("p-dagua").style.display = "none"
    document.getElementById("p-queremal").style.display = "none"
    document.getElementById("p-sbernardo").style.display = "none"
    document.getElementById("p-suarez").style.display = "none"

    const t1 =( 4000).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })
    const t2 =( 4500).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })
    const t3 =( 4600).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })
    const t4 =( 5000).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })
    const t5 =(6000).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })
    const t6 =( 7000).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })
    const t7 =( 8000).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })
    const t8 =( 8100).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })
    const t9 =( 9000).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })
    const t10 = (10000).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })
    const t11 = (11500).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })
    const t12 = (12000).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })
    const t13 = (12500).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })
    const t14 = (13000).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })
    const t15 = (14000).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })
    const t16 = (14500).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })
    const t17 = (15000).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })
    const t18 = (15500).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })
    const t19 = (16500).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })
    const t20 = (17000).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })
    const t21 = (17300).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })
    const t22 = (18000).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })
    const t23 = (18500).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })
    const t24 = (19500).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })
    const t25 = (20000).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })
    const t26 = (21500).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })
    const t27 = (23000).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })


if ((corigen.value =="cali" || corigen.value =="bitaco") &&( cdestino.value == "cali"|| cdestino.value == "bitaco")){
      document.getElementById("total").innerHTML = "  "+t12
}

else if  (corigen.value == "cali" & cdestino.value == "anchicaya" ){
       document.getElementById("p-anchicaya").style.display = "inline";

       
      
      
    function anchicaya() {
        
    
       if(panchicaya.value == "bellavista"){
        document.getElementById("total").innerHTML = "  "+t26;
       }
       else if(panchicaya.value == "Cascada"){
        document.getElementById("total").innerHTML = "  "+t23;
       }
       else if(panchicaya.value == "Cauchal"){
        document.getElementById("total").innerHTML = "  "+t24;
       }
       else if(panchicaya.value == "Danubio"){
        document.getElementById("total").innerHTML = "  "+t25;
       }
       else if(panchicaya.value == "Elsa"){
        document.getElementById("total").innerHTML = "  "+t16;
       }
       else if(panchicaya.value == "Engaño"){
        document.getElementById("total").innerHTML = "  "+t17;
       }
       else if(panchicaya.value == "KM18" ||panchicaya.value == "KM20" || panchicaya.value == "KM22"){
        document.getElementById("total").innerHTML = "  "+t5;
       }
       else if(panchicaya.value == "KM26"){
        document.getElementById("total").innerHTML = "  "+t6;
       }
       else if(panchicaya.value == "KM30"){
        document.getElementById("total").innerHTML = "  "+t8;
       }
       else if(panchicaya.value == "KM34"){
        document.getElementById("total").innerHTML = "  "+t10;
       }
       else if(panchicaya.value == "KM55"){
        document.getElementById("total").innerHTML = "  "+t12;
       }
       else if(panchicaya.value == "KM57"){
        document.getElementById("total").innerHTML = "  "+t13;
       }
       else if(panchicaya.value == "placer"){
        document.getElementById("total").innerHTML = "  "+t20;
       }
       else if(panchicaya.value == "queremal"){
        document.getElementById("total").innerHTML = "  "+t11;
       }
       else if(panchicaya.value == "rio"){
        document.getElementById("total").innerHTML = "  "+t19;
       }
       else if(panchicaya.value == "saladito"){
        document.getElementById("total").innerHTML = "  "+t1;
       }
       else if(panchicaya.value == "salado"){
        document.getElementById("total").innerHTML = "  "+t11;
       }
       else if(panchicaya.value == "torre"){
        document.getElementById("total").innerHTML = "  "+t18;
       }
       else{
        console.log("asdad")
       }
       
       cdestino.onchange= precio
    }
    panchicaya.onchange = anchicaya
}
else if  ((corigen.value == "cali"|| corigen.value == "buenaventura") &&( cdestino.value == "buenaventura" || cdestino.value =="cali" )){
    
    document.getElementById("p-buenav").style.display = "inline";

    function buenaventuraf() {
        
    
        if(buenaventura.value == "Achicaya"){
         document.getElementById("total").innerHTML = "  "+t27;
         cdestino.onchange= precio
        }
        else if(buenaventura.value == "saladito"){
         document.getElementById("total").innerHTML = "  "+t2;
        }
        else if(buenaventura.value == "KM26"){
         document.getElementById("total").innerHTML = "  "+t6;
        }
        else if(buenaventura.value == "KM30"){
            document.getElementById("total").innerHTML = "  "+t9;
           }
        else if(buenaventura.value == "queremal"){
            document.getElementById("total").innerHTML = "  "+t14;
           }
        else{
         console.log("asdad")
        }
        
        cdestino.onchange= precio
     }
     buenaventura.onchange = buenaventuraf
}
else if  ((corigen.value == "cali"|| corigen.value == "baires") &&( cdestino.value == "baires" || cdestino.value =="cali" )){
    
    document.getElementById("p-baires").style.display = "inline";

    function bairesf() {
        
    
        if(baires.value == "bairesp"){
         document.getElementById("total").innerHTML = "  "+t22;
        }
        else if(baires.value == "robles"){
         document.getElementById("total").innerHTML = "  "+t7;
        }
        else if(baires.value == "timba"){
         document.getElementById("total").innerHTML = "  "+t10;
        }
       
        else{
         console.log("asdad")
        }
        
        cdestino.onchange= precio
     }
     baires.onchange = bairesf
}
else if  ((corigen.value == "cali"|| corigen.value == "cisneros") &&( cdestino.value == "cisneros" || cdestino.value =="cali" ) ){
    document.getElementById("total").innerHTML = "  "+t21;
}
else if  ((corigen.value == "cali"|| corigen.value == "dagua") &&( cdestino.value == "dagua" || cdestino.value =="cali" )){
    
    document.getElementById("p-dagua").style.display = "inline";

    function daguaf() {
        
    
        if(dagua.value == "dagua"){
         document.getElementById("total").innerHTML = "  "+t10;
        }
        else if(dagua.value == "KM26" || dagua.value== "KM18"){
         document.getElementById("total").innerHTML = "  "+t6;
        }
        else if(dagua.value == "palmar"){
         document.getElementById("total").innerHTML = "  "+t7;
        }
        else if(dagua.value == "saladito"){
            document.getElementById("total").innerHTML = "  "+t2;
           }
           else if(dagua.value == "cali"){
            document.getElementById("total").innerHTML = "  "+t10;
           }
       
        else{
         console.log("asdad")
        }
        
        cdestino.onchange= precio
     }
     dagua.onchange = daguaf
}

else if  ((corigen.value == "cali"|| corigen.value == "carmen") &&( cdestino.value == "carmen" || cdestino.value =="cali" ) ){
    document.getElementById("total").innerHTML = "  "+t7;
}
else if  ((corigen.value == "cali"|| corigen.value == "jamundi") &&( cdestino.value == "jamundi" || cdestino.value =="cali" ) ){
    document.getElementById("total").innerHTML = "  "+t4;
}
else if  ((corigen.value == "cali"|| corigen.value == "lomitas") &&( cdestino.value == "lomitas" || cdestino.value =="cali" ) ){
    document.getElementById("total").innerHTML = "  "+t15;
}
else if  ((corigen.value == "cali"|| corigen.value == "ptejada") &&( cdestino.value == "ptejada" || cdestino.value =="cali" ) ){
    document.getElementById("total").innerHTML = "  "+t5;
}

else if  ((corigen.value == "cali"|| corigen.value == "queremal") &&( cdestino.value == "queremal" || cdestino.value =="cali" )){
    
    document.getElementById("p-queremal").style.display = "inline";

    function queremalf() {
        
    
        if(queremal.value == "carmen"){
         document.getElementById("total").innerHTML = "  "+t10;
        }
        else if(queremal.value == "KM26"){
         document.getElementById("total").innerHTML = "  "+t6;
        }
        else if(queremal.value == "KM30"){
         document.getElementById("total").innerHTML = "  "+t9;
        }
        else if(queremal.value == "queremal"){
            document.getElementById("total").innerHTML = "  "+t14;
           }
        else if(queremal.value == "saladito"){
            document.getElementById("total").innerHTML = "  "+t2;
           }
           else if(queremal.value == "cali"){
            document.getElementById("total").innerHTML = "  "+t14;
           }
        else{
         console.log("asdad")
        }
        
        cdestino.onchange= precio
     }
     queremal.onchange = queremalf
     cdestino.onchange= precio
}

else if  ((corigen.value == "cali"|| corigen.value == "robles") &&( cdestino.value == "robles" || cdestino.value =="cali" ) ){
    document.getElementById("total").innerHTML = "  "+t7;
}

else if  ((corigen.value == "cali"|| corigen.value == "sbernardo") &&( cdestino.value == "sbernardo" || cdestino.value =="cali" )){
    
    document.getElementById("p-sbernardo").style.display = "inline";

    function sbernardof() {
        
    
        if(sbernardo.value == "jordan" && corigen.value=="sbernardo"){
         document.getElementById("total").innerHTML = "  "+t14;
        }
        if(sbernardo.value == "jordan"){
            document.getElementById("total").innerHTML = "  "+t14;
           }
        else if(sbernardo.value == "sbernardo"){
            document.getElementById("total").innerHTML = "  "+t14;
           }
        else if(sbernardo.value == "sbernardo"){
         document.getElementById("total").innerHTML = "  "+t14;
        }
        else if(sbernardo.value == "tocota"){
         document.getElementById("total").innerHTML = "  "+t14;
        }
        else if(sbernardo.value == "cali"){
            document.getElementById("total").innerHTML = "  "+t14;
           }
       
        else{
         console.log("asdad")
        }
        
        cdestino.onchange= precio
     }
     sbernardo.onchange = sbernardof
     cdestino.onchange= precio
}

else if  ((corigen.value == "cali"|| corigen.value == "santander") &&( cdestino.value == "santander" || cdestino.value =="cali" ) ){
    document.getElementById("total").innerHTML = "  "+t19;
}
else if  ((corigen.value == "cali"|| corigen.value == "suarez") &&( cdestino.value == "suarez" || cdestino.value =="cali" )){
    
    document.getElementById("p-suarez").style.display = "inline";

    function suarezf() {
        
    
        if(suarez.value == "robles"){
         document.getElementById("total").innerHTML = "  "+t7;
        }
        else if(suarez.value == "suarez"){
         document.getElementById("total").innerHTML = "  "+t22;
        }
        else if(suarez.value == "timba"){
         document.getElementById("total").innerHTML = "  "+t10;
        }
        else if(suarez.value == "cali"){
            document.getElementById("total").innerHTML = "  "+t22;
           }
       
        else{
         console.log("asdad")
        }
        
        cdestino.onchange= precio
     }
     suarez.onchange = suarezf
     cdestino.onchange= precio
}

else if  ((corigen.value == "cali"|| corigen.value == "timba") &&( cdestino.value == "timba" || cdestino.value =="cali" ) ){
    document.getElementById("total").innerHTML = "  "+t10;
}
else if  ((corigen.value == "cali"|| corigen.value == "jordan") &&( cdestino.value == "jordan" || cdestino.value =="cali" ) ){
    document.getElementById("total").innerHTML = "  "+t14;
}

else if  ((corigen.value == "cali"|| corigen.value == "tocota") &&( cdestino.value == "tocota" || cdestino.value =="cali" ) ){
    document.getElementById("total").innerHTML = "  "+t14;
}
else{
    document.getElementById("total").innerHTML = "  0"
}


}

corigen.onchange= precio
cdestino.onchange= precio
panchicaya.onchange = precio
buenaventura.onchange = precio
baires.onchange = precio
dagua.onchange = precio
queremal.onchange = precio
sbernardo.onchange = precio
suarez.onchange = precio

}
cdestino.onchange= precio


    
    function convertirANumero() {
        const elementoh3 = document.querySelector("h3");
        const valorTexto = elementoh3.textContent;
        const valorNumero = parseFloat(valorTexto);
        const valorFormateado = valorNumero.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
       
    }

   


function cvalorf(){
    const cvalor= document.getElementById("cvalor").value
    console.log(typeof(cvalor))
    const cvaler2 = parseInt(cvalor)
    const cvalor3 = (cvaler2).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })
    document.getElementById("total").innerHTML = cvalor3
    

}
function imprimir(){

    
var now = new Date();


var options = { timeZone: "America/Bogota", hour12: true };
var dateTime = now.toLocaleString("es-CO", options);

var miSelect = document.getElementById("corigen");
var indiceSeleccionado = miSelect.selectedIndex;
var opcionSeleccionada = miSelect.options[indiceSeleccionado];
var textoSeleccionado = opcionSeleccionada.textContent;

var miSelect2 = document.getElementById("cdestino");
var indice2Seleccionado = miSelect2.selectedIndex;
var opcion2Seleccionada = miSelect2.options[indice2Seleccionado];
var texto2Seleccionado = opcion2Seleccionada.textContent;

// Default export is a4 paper, portrait, using millimeters for units
var doc = new jsPDF();


function centrar (texto){
var text = texto;

// Obtener el ancho del texto
var textWidth = doc.getStringUnitWidth(text) * doc.internal.getFontSize() / doc.internal.scaleFactor;

// Calcular la posición x para centrar el texto horizontalmente
var xPos = (doc.internal.pageSize.width - textWidth) / 2;
return (xPos)


}

var transurimp ="Tiquete Transur .S.A."
var xpostransur =centrar(transurimp)

var corigenimp ="Origen"
var xposorigen =centrar(corigenimp)

var cdestinoimp ="Destino"
var xposdestino=centrar(cdestinoimp)
// Dibujar el texto centrado horizontalmente y verticalmente
doc.text(transurimp,xpostransur, 20, { align: "center" });
doc.text(dateTime , 80,30, { align: "center" });
doc.text(corigenimp,xposorigen, 50, { align: "center" });
doc.text(textoSeleccionado , 90,60, { align: "center" });
doc.text(cdestinoimp,xposdestino, 80, { align: "center" });
doc.text(texto2Seleccionado , 90,90, { align: "center" });



doc.save("a4.pdf");
}