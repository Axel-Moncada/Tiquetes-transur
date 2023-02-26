




localStorage.clear();


function leercc(){
    const ceduladespachador = localStorage.getItem('cc')
    document.getElementById("ccdes").innerHTML = ceduladespachador
}
window.onload= function(){
    
    localStorage.clear();

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
    document.getElementById("paradasfinal").innerHTML = ""
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
      document.getElementById("paradasfinal").innerHTML = " ";
}

else if  (corigen.value == "cali" & cdestino.value == "anchicaya" ){
       document.getElementById("p-anchicaya").style.display = "inline";
     
    function anchicaya() {
        
    
       if(panchicaya.value == "bellavista"){
        document.getElementById("total").innerHTML = "  "+t26;
        document.getElementById("paradasfinal").innerHTML = panchicaya.value;
       }
       else if(panchicaya.value == "Cascada"){
        document.getElementById("total").innerHTML = "  "+t23;
        document.getElementById("paradasfinal").innerHTML = panchicaya.value;
       }
       else if(panchicaya.value == "Cauchal"){
        document.getElementById("total").innerHTML = "  "+t24;
        document.getElementById("paradasfinal").innerHTML = panchicaya.value;
       }
       else if(panchicaya.value == "Danubio"){
        document.getElementById("total").innerHTML = "  "+t25;
        document.getElementById("paradasfinal").innerHTML = panchicaya.value;
       }
       else if(panchicaya.value == "Elsa"){
        document.getElementById("total").innerHTML = "  "+t16;
        document.getElementById("paradasfinal").innerHTML = panchicaya.value;
       }
       else if(panchicaya.value == "Engaño"){
        document.getElementById("total").innerHTML = "  "+t17;
        document.getElementById("paradasfinal").innerHTML = panchicaya.value;
       }
       else if(panchicaya.value == "KM18" ||panchicaya.value == "KM20" || panchicaya.value == "KM22"){
        document.getElementById("total").innerHTML = "  "+t5;
        document.getElementById("paradasfinal").innerHTML = panchicaya.value;
       }
       else if(panchicaya.value == "KM26"){
        document.getElementById("total").innerHTML = "  "+t6;
        document.getElementById("paradasfinal").innerHTML = panchicaya.value;
       }
       else if(panchicaya.value == "KM30"){
        document.getElementById("total").innerHTML = "  "+t8;
        document.getElementById("paradasfinal").innerHTML = panchicaya.value;
       }
       else if(panchicaya.value == "KM34"){
        document.getElementById("total").innerHTML = "  "+t10;
        document.getElementById("paradasfinal").innerHTML = panchicaya.value;
       }
       else if(panchicaya.value == "KM55"){
        document.getElementById("total").innerHTML = "  "+t12;
        document.getElementById("paradasfinal").innerHTML = panchicaya.value;
       }
       else if(panchicaya.value == "KM57"){
        document.getElementById("total").innerHTML = "  "+t13;
        document.getElementById("paradasfinal").innerHTML = panchicaya.value;
       }
       else if(panchicaya.value == "placer"){
        document.getElementById("total").innerHTML = "  "+t20;
        document.getElementById("paradasfinal").innerHTML = panchicaya.value;
       }
       else if(panchicaya.value == "queremal"){
        document.getElementById("total").innerHTML = "  "+t11;
        document.getElementById("paradasfinal").innerHTML = panchicaya.value;
       }
       else if(panchicaya.value == "rio"){
        document.getElementById("total").innerHTML = "  "+t19;
        document.getElementById("paradasfinal").innerHTML = panchicaya.value;
       }
       else if(panchicaya.value == "saladito"){
        document.getElementById("total").innerHTML = "  "+t1;
        document.getElementById("paradasfinal").innerHTML = panchicaya.value;
       }
       else if(panchicaya.value == "salado"){
        document.getElementById("total").innerHTML = "  "+t11;
        document.getElementById("paradasfinal").innerHTML = panchicaya.value;
       }
       else if(panchicaya.value == "torre"){
        document.getElementById("total").innerHTML = "  "+t18;
        document.getElementById("paradasfinal").innerHTML = panchicaya.value;
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
         document.getElementById("paradasfinal").innerHTML = buenaventura.value;
          
        }
        else if(buenaventura.value == "saladito"){
         document.getElementById("total").innerHTML = "  "+t2;
         document.getElementById("paradasfinal").innerHTML = buenaventura.value;
        }
        else if(buenaventura.value == "KM26"){
         document.getElementById("total").innerHTML = "  "+t6;
         document.getElementById("paradasfinal").innerHTML = buenaventura.value;
        }
        else if(buenaventura.value == "KM30"){
            document.getElementById("total").innerHTML = "  "+t9;
            document.getElementById("paradasfinal").innerHTML = buenaventura.value;
           }
        else if(buenaventura.value == "queremal"){
            document.getElementById("total").innerHTML = "  "+t14;
            document.getElementById("paradasfinal").innerHTML = buenaventura.value;
           }
        else{
         console.log("asdad")
        }
        
        cdestino.onchange= precio
     }
     buenaventura.onchange = buenaventuraf
     return(despar)
}
else if  ((corigen.value == "cali"|| corigen.value == "baires") &&( cdestino.value == "baires" || cdestino.value =="cali" )){
    
    document.getElementById("p-baires").style.display = "inline";

    function bairesf() {
        
    
        if(baires.value == "bairesp"){
         document.getElementById("total").innerHTML = "  "+t22;
         document.getElementById("paradasfinal").innerHTML = baires.value;
        }
        else if(baires.value == "robles"){
         document.getElementById("total").innerHTML = "  "+t7;
         document.getElementById("paradasfinal").innerHTML = baires.value;
        }
        else if(baires.value == "timba"){
         document.getElementById("total").innerHTML = "  "+t10;
         document.getElementById("paradasfinal").innerHTML = baires.value;
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
         document.getElementById("paradasfinal").innerHTML = dagua.value;
        }
        else if(dagua.value == "KM26" || dagua.value== "KM18"){
         document.getElementById("total").innerHTML = "  "+t6;
         document.getElementById("paradasfinal").innerHTML = dagua.value;

        }
        else if(dagua.value == "palmar"){
         document.getElementById("total").innerHTML = "  "+t7;
         document.getElementById("paradasfinal").innerHTML = dagua.value;

        }
        else if(dagua.value == "saladito"){
            document.getElementById("total").innerHTML = "  "+t2;
            document.getElementById("paradasfinal").innerHTML = dagua.value;

           }
           else if(dagua.value == "cali"){
            document.getElementById("total").innerHTML = "  "+t10;
            document.getElementById("paradasfinal").innerHTML = dagua.value;

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
         document.getElementById("paradasfinal").innerHTML = queremal.value;

        }
        else if(queremal.value == "KM26"){
         document.getElementById("total").innerHTML = "  "+t6;
         document.getElementById("paradasfinal").innerHTML = queremal.value;
        }
        else if(queremal.value == "KM30"){
         document.getElementById("total").innerHTML = "  "+t9;
         document.getElementById("paradasfinal").innerHTML = queremal.value;
        }
        else if(queremal.value == "queremal"){
            document.getElementById("total").innerHTML = "  "+t14;
            document.getElementById("paradasfinal").innerHTML = queremal.value;
           }
        else if(queremal.value == "saladito"){
            document.getElementById("total").innerHTML = "  "+t2;
            document.getElementById("paradasfinal").innerHTML = queremal.value;
           }
           else if(queremal.value == "cali"){
            document.getElementById("total").innerHTML = "  "+t14;
            document.getElementById("paradasfinal").innerHTML = queremal.value;
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
         document.getElementById("paradasfinal").innerHTML = sbernardo.value;
        }
        if(sbernardo.value == "jordan"){
            document.getElementById("total").innerHTML = "  "+t14;
            document.getElementById("paradasfinal").innerHTML = sbernardo.value;
           }
        else if(sbernardo.value == "sbernardo"){
            document.getElementById("total").innerHTML = "  "+t14;
            document.getElementById("paradasfinal").innerHTML = sbernardo.value;
           }
        else if(sbernardo.value == "sbernardo"){
            document.getElementById("paradasfinal").innerHTML = sbernardo.value;
        }
        else if(sbernardo.value == "tocota"){
         document.getElementById("total").innerHTML = "  "+t14;
         document.getElementById("paradasfinal").innerHTML = sbernardo.value;
        }
        else if(sbernardo.value == "cali"){
            document.getElementById("total").innerHTML = "  "+t14;
            document.getElementById("paradasfinal").innerHTML = sbernardo.value;
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
    var despar =""
    function suarezf() {
       
    
        if(suarez.value == "robles"){
         document.getElementById("total").innerHTML = "  "+t7;
         document.getElementById("paradasfinal").innerHTML = suarez.value;
        }
        else if(suarez.value == "suarez"){
         document.getElementById("total").innerHTML = "  "+t22;
         document.getElementById("paradasfinal").innerHTML = suarez.value;

        }
        else if(suarez.value == "timba"){
         document.getElementById("total").innerHTML = "  "+t10;
         document.getElementById("paradasfinal").innerHTML = suarez.value;

        }
        else if(suarez.value == "cali"){
            document.getElementById("total").innerHTML = "  "+t22;
            document.getElementById("paradasfinal").innerHTML = suarez.value;

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
var variableorigen = opcionSeleccionada.textContent;

var miSelect2 = document.getElementById("cdestino");
var indice2Seleccionado = miSelect2.selectedIndex;
var opcion2Seleccionada = miSelect2.options[indice2Seleccionado];
var variabledestino= opcion2Seleccionada.textContent;




const cvalorfinal= document.getElementById("total").textContent
console.log(cvalorfinal ,typeof(cvalorfinal))

var paradasf= document.getElementById("paradasfinal").textContent

// Default export is a4 paper, portrait, using millimeters for units
const doc = new jsPDF({
    orientation: "p",
    unit: "cm",
    format: [15,5.8]
  });



function centrar (texto){
var text = texto;

// Obtener el ancho del texto
var textWidth = doc.getStringUnitWidth(text) * doc.internal.getFontSize("7") / doc.internal.scaleFactor;

// Calcular la posición x para centrar el texto horizontalmente
var xPos = (doc.internal.pageSize.width - textWidth) / 2;
return (xPos)


}
var imgdata= "data:image/png;base64,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"
var transurimp ="Transur .S.A."
var xpostransur =centrar(transurimp)

var corigenimp ="Origen:"
var xposorigen =centrar(corigenimp)

var cdestinoimp ="Destino:"
var xposdestino=centrar(cdestinoimp)

var paradasimp="Paradas:"
var xposparadas=centrar(paradasimp)

var totalimp="Total"
var xpostotal=centrar(totalimp)

var ccdesimp="Cc Despachador"
var xposccdes=centrar(ccdesimp)


var dataTime2 = dateTime
var dataTimex=centrar(dataTime2)


var paradasfimp = paradasf.charAt(0).toUpperCase() + paradasf.slice(1)



var nombre = document.getElementById("namecampos").value
var tdoc= document.getElementById("tdoc").value
var ccnumer = document.getElementById("ccnumer").value

var ccdesloca = localStorage.getItem("cc")

var destinofianal = destinofianl()
function destinofianl(){
if (paradasfimp != ""){
     return variabledestinfinalimp = paradasfimp
}else{
    return variabledestinofinalimp= variabledestino
}
}
doc.addImage(imgdata,1.2,0.4,3.8,1.6)
// Dibujar el texto centrado horizontalmente y verticalmente
doc.setFontSize(12);
doc.setFontType("bold")
doc.text(transurimp, 1.6, 13, { align: "center" });

doc.setFontSize(8);
doc.setFontType("normal")
doc.text(dateTime , 1.3,2.3, { align: "center" });
doc.setFontSize(5);
doc.text("NIT 890.300.503-1" , 2,2.6, { align: "center" });
doc.text("Art. 8 del Decreto No.1165 de 1996" , 1.3,2.8, { align: "center" });

doc.setFontSize(8);
doc.setFontType("bold")
doc.text("Tiquete de viaje No." , 1.5,3.3, { align: "center" });
doc.text("MIC-000362829" , 1.7,3.6, { align: "center" });

doc.setFontType("normal")
doc.setFontSize(9);
doc.text(nombre,0.5,4.5)
doc.text(tdoc,0.5,5.3)
doc.text(ccnumer,0.5,6.1)

doc.setFontSize(10);

doc.text(variableorigen , 1.8,7.3, { align: "center" });
doc.text(destinofianal, 2,8, { align: "center" });




doc.setFontSize(8);
doc.setFontType("bold")
doc.text("Pasajero:",0.5,4.2)
doc.text("T. documento:",0.5,5)
doc.text("Documento No:",0.5,5.8)

doc.setFontSize(10);
doc.setFontType("bold")
doc.text(corigenimp,0.5, 7.3, { align: "center" } );
doc.text(cdestinoimp,0.5, 8, { align: "center" });



doc.setFontSize(12);
doc.setFontType("bold")
doc.text(totalimp,0.5, 9.5, { align: "center" });
doc.text(cvalorfinal, 0.4,10, { align: "center" });

doc.setFontSize(8);
doc.setFontType("bold")
doc.text(ccdesimp,0.5, 11.2, { align: "center" });

doc.setFontSize(9);
doc.setFontType("normal")
doc.text(ccdesloca, 0.5,11.7, { align: "center" });
doc.text("Planilla de viaje # "+ccdesloca, 0.5,12.1, { align: "center" });

codigotiq = 2354689
doc.save("tiquete-"+codigotiq+".pdf");
}






function generartiquete(){

    convertirANumero()

    var now = new Date();
    var options = { timeZone: "America/Bogota", hour12: true };
    var dateTime = now.toLocaleString("es-CO", options);
    
    var miSelect = document.getElementById("corigen");
    var indiceSeleccionado = miSelect.selectedIndex;
    var opcionSeleccionada = miSelect.options[indiceSeleccionado];
    var corigendata = opcionSeleccionada.textContent;
    
    var miSelect2 = document.getElementById("cdestino");
    var indice2Seleccionado = miSelect2.selectedIndex;
    var opcion2Seleccionada = miSelect2.options[indice2Seleccionado];
    var cdestinodata = opcion2Seleccionada.textContent;
    
    
    const cvalorfinal= document.getElementById("total").textContent
    console.log(cvalorfinal ,typeof(cvalorfinal))
    
    var paradasf= document.getElementById("paradasfinal").textContent
    var nombrepost = document.getElementById("namecampos").value
    var tdpost = document.getElementById("tdoc").value
    var ccpost = document.getElementById("ccnumer").value
    var ccdespachador = localStorage.getItem("cc")
 const data2=`<person>
 <name>`+corigendata+`</name>
 <age>30</age>
 <email>john.doe@example.com</email>
</person>`
    const data= {
            dateTime,
            nombrepost,
            tdpost,
            ccpost,
            corigendata,
            cdestinodata,
            paradasf,
            cvalorfinal,
            ccdespachador
    }
    const datafinal= JSON.stringify(data)
    


    var myHeaders = new Headers();
myHeaders.append("Content-Type", "text/plain");

var raw = datafinal ;

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://181.62.50.117:7777", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


    imprimir()
}



function isesion() {
    var campo = document.getElementById("cc").value
    localStorage.setItem('cc', campo)

    var vlocal = localStorage.getItem('cc');

    if ( vlocal.length === 0){

    }else{
        document.getElementById("contenido").style.display = "inline"
        document.getElementById("sesion").style.display = "none"
        leercc()
    }
    
}


function csesion(){
    localStorage.clear();
    location.reload()
}