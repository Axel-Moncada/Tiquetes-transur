



window.onload= function(){
    var panchicaya=document.getElementById("p-anchicaya")
    var buenaventura=document.getElementById("p-buenav")
    var baires=document.getElementById("p-baires")
    var dagua=document.getElementById("p-dagua")

  var fechaActual = new Date();
  document.getElementById("fecha").innerHTML = fechaActual.toLocaleDateString();


  function muestraHora() {
    var fechaActual = new Date();
    document.getElementById("hora").innerHTML = fechaActual.toLocaleTimeString();
  }

  setInterval(muestraHora, 1000);

  var corigen = document.getElementById("corigen")
  var cdestino = document.getElementById("cdestino")




function precio() {
    var corigen = document.getElementById("corigen")
    var cdestino = document.getElementById("cdestino")
    document.getElementById("p-anchicaya").style.display = "none"
    document.getElementById("p-buenav").style.display = "none"

    const t1 = (4000).toLocaleString('en-US');
    const t2 = (4500).toLocaleString('en-US');
    const t3 = (4600).toLocaleString('en-US');
    const t4 = (5000).toLocaleString('en-US');
    const t5 =(6000).toLocaleString('en-US');
    const t6 = (7000).toLocaleString('en-US');
    const t7 = (8000).toLocaleString('en-US');
    const t8 = (8100).toLocaleString('en-US');
    const t9 = (9000).toLocaleString('en-US');
    const t10 = (10000).toLocaleString();
    const t11 = (11500).toLocaleString();
    const t12 = (12000).toLocaleString();
    const t13 = (12500).toLocaleString();
    const t14 = (13000).toLocaleString();
    const t15 = (14000).toLocaleString();
    const t16 = (14500).toLocaleString();
    const t17 = (15000).toLocaleString();
    const t18 = (15500).toLocaleString();
    const t19 = (16500).toLocaleString();
    const t20 = (17000).toLocaleString();
    const t21 = (17300).toLocaleString();
    const t22 = (18000).toLocaleString();
    const t23 = (18500).toLocaleString();
    const t24 = (19500).toLocaleString();
    const t25 = (20000).toLocaleString();
    const t26 = (21500).toLocaleString();
    const t27 = (23000).toLocaleString();


if ((corigen.value =="cali" || corigen.value =="bitaco") &&( cdestino.value == "cali"|| cdestino.value == "bitaco")){
      document.getElementById("total").innerHTML = "$"+t12
}

else if  (corigen.value == "cali" & cdestino.value == "anchicaya" ){
       document.getElementById("p-anchicaya").style.display = "inline";

       
      
      
    function anchicaya() {
        
    
       if(panchicaya.value == "bellavista"){
        document.getElementById("total").innerHTML = "$"+t26;
       }
       else if(panchicaya.value == "Cascada"){
        document.getElementById("total").innerHTML = "$"+t23;
       }
       else if(panchicaya.value == "Cauchal"){
        document.getElementById("total").innerHTML = "$"+t24;
       }
       else if(panchicaya.value == "Danubio"){
        document.getElementById("total").innerHTML = "$"+t25;
       }
       else if(panchicaya.value == "Elsa"){
        document.getElementById("total").innerHTML = "$"+t16;
       }
       else if(panchicaya.value == "Engaño"){
        document.getElementById("total").innerHTML = "$"+t17;
       }
       else if(panchicaya.value == "KM18" ||panchicaya.value == "KM20" || panchicaya.value == "KM22"){
        document.getElementById("total").innerHTML = "$"+t5;
       }
       else if(panchicaya.value == "KM26"){
        document.getElementById("total").innerHTML = "$"+t6;
       }
       else if(panchicaya.value == "KM30"){
        document.getElementById("total").innerHTML = "$"+t8;
       }
       else if(panchicaya.value == "KM34"){
        document.getElementById("total").innerHTML = "$"+t10;
       }
       else if(panchicaya.value == "KM55"){
        document.getElementById("total").innerHTML = "$"+t12;
       }
       else if(panchicaya.value == "KM57"){
        document.getElementById("total").innerHTML = "$"+t13;
       }
       else if(panchicaya.value == "placer"){
        document.getElementById("total").innerHTML = "$"+t20;
       }
       else if(panchicaya.value == "queremal"){
        document.getElementById("total").innerHTML = "$"+t11;
       }
       else if(panchicaya.value == "rio"){
        document.getElementById("total").innerHTML = "$"+t19;
       }
       else if(panchicaya.value == "saladito"){
        document.getElementById("total").innerHTML = "$"+t1;
       }
       else if(panchicaya.value == "salado"){
        document.getElementById("total").innerHTML = "$"+t11;
       }
       else if(panchicaya.value == "torre"){
        document.getElementById("total").innerHTML = "$"+t18;
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
         document.getElementById("total").innerHTML = "$"+t27;
        }
        else if(buenaventura.value == "saladito"){
         document.getElementById("total").innerHTML = "$"+t2;
        }
        else if(buenaventura.value == "KM26"){
         document.getElementById("total").innerHTML = "$"+t6;
        }
        else if(buenaventura.value == "KM30"){
            document.getElementById("total").innerHTML = "$"+t9;
           }
        else if(buenaventura.value == "queremal"){
            document.getElementById("total").innerHTML = "$"+t14;
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
         document.getElementById("total").innerHTML = "$"+t22;
        }
        else if(baires.value == "robles"){
         document.getElementById("total").innerHTML = "$"+t7;
        }
        else if(baires.value == "timba"){
         document.getElementById("total").innerHTML = "$"+t10;
        }
       
        else{
         console.log("asdad")
        }
        
        cdestino.onchange= precio
     }
     baires.onchange = bairesf
}
else if  ((corigen.value == "cali"|| corigen.value == "cisneros") &&( cdestino.value == "cisneros" || cdestino.value =="cali" ) ){
    document.getElementById("total").innerHTML = "$"+t21;
}
else if  ((corigen.value == "cali"|| corigen.value == "dagua") &&( cdestino.value == "dagua" || cdestino.value =="cali" )){
    
    document.getElementById("p-dagua").style.display = "inline";

    function daguaf() {
        
    
        if(dagua.value == "dagua"){
         document.getElementById("total").innerHTML = "$"+t10;
        }
        else if(dagua.value == "KM26"){
         document.getElementById("total").innerHTML = "$"+t6;
        }
        else if(dagua.value == "palmar"){
         document.getElementById("total").innerHTML = "$"+t7;
        }
        else if(dagua.value == "saladito"){
            document.getElementById("total").innerHTML = "$"+t2;
           }
       
        else{
         console.log("asdad")
        }
        
        cdestino.onchange= precio
     }
     dagua.onchange = daguaf
}

else{
    document.getElementById("total").innerHTML = "$0"
}


}

corigen.onchange= precio
cdestino.onchange= precio
panchicaya.onchange = precio
buenaventura.onchange = precio
baires.onchange = precio
dagua.onchange = precio

}

function generar(){
   const totalvalor=document.getElementById("total")
    console.log(totalvalor.textContent)
}