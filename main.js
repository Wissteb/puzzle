var array = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, " ");

function tablas(evento) {
    var body = document.getElementsByTagName("body")[0];
    var tabla = document.createElement("table");
    var tbody = document.createElement("tbody");

    var set = new Set;
    var num = 1;
   // shuffle(array);
    for (var i = 0; i < 4; i++) {
        var fila = document.createElement("tr");
        for (var j = 0; j < 4; j++) {
            var celda = document.createElement("td");
            if (num == 16) {
                var a = celda.innerHTML = " ";
            } else {
                var a = celda.innerHTML = num++;
            }
            // array.push(a);          
            fila.appendChild(celda);

        }
        tbody.appendChild(fila);
    } console.log(array)
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tbody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");

}
function shuffle(arr) {
    var i,
        j,
        temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};
function mover() {


}
// window.onload =function(){
num = 0;
tablas();
//meter id td
var a = document.getElementsByTagName("td");
for (var i = 0; i < 16; i++) {
    a[i].id = num++;

}

for (var i = 0; i < a.length; i++) {
    var variable = a[i].getAttribute("id");
    switch (variable) {
        case '0': case '4': case '8': case '12':
            a[i].setAttribute("class", "1");
            break;

        case '1': case '5': case '9': case '13':
            a[i].setAttribute("class", "2");
            break;

        case '2': case '6': case '10': case '14':
            a[i].setAttribute("class", "3");
            break;

        case '3': case '7': case '11': case '15':
            a[i].setAttribute("class", "4");
            break;
    }
}

//  console.log(a);
//  if (this.id){
//    console.log(b);
//  }
num2 = 0;
var tr = document.getElementsByTagName("tr");
for (var i = 0; i < 4; i++) {
    tr[i].id="0"+num2++;
}

//   console.log(a);
//   if (this.id){
//     console.log(b);
//   }

//     for(var i=0;i<16;i++){
//     var test = document.getElementById((i+1));
//     console.log(test);
//     test.addEventListener("click",test);


//       }
//   function test(){
//     var  a=document.getElementsByTagName("td");
//   }
// Function to change the content of t2


//  function cambia(evento) {
//     var esteid=this.id;
//         console.log(esteid);
//         var idsiguiente=parseInt(this.id)+1;
//           var tda = document.getElementById(esteid);
//          var tda2 = document.getElementById(idsiguiente);
//         // if(idsiguiente==)
//          var primerelemento=tda.firstChild.nodeValue;
//           tda.firstChild.nodeValue = tda2.firstChild.nodeValue;
//           tda2.firstChild.nodeValue = primerelemento;
//       }



// function cambia() {
//     var tda = document.getElementById(esteid);
//     var tda2 = document.getElementById(idsiguiente);
//     var esteid = this.id;
//     var idsiguiente = parseInt(this.id) + 1;
//     if (esteid == 15) {
//         var idsi = parseInt(this.id) - 1;
//         console.log("ha entrado")
//         var tda = document.getElementById(esteid);
//         var tda2 = document.getElementById(idsi);
//         var primerelemento = tda.firstChild.nodeValue;
//         tda.firstChild.nodeValue = tda2.firstChild.nodeValue;
//         tda2.firstChild.nodeValue = primerelemento;
//     } else {
//         var tda = document.getElementById(esteid);
//         var tda2 = document.getElementById(idsiguiente);
//         var primerelemento = tda.firstChild.nodeValue;
//         tda.firstChild.nodeValue = tda2.firstChild.nodeValue;
//         tda2.firstChild.nodeValue = primerelemento;
//         console.log("no");
//     }
// }


// function elegir() {
//         console.log("hola bb");
//         var idsiguiente = parseInt(this.id) + 15;
//         var idblanco=document.getElementById(idsiguiente).firstChild.nodeValue;
        
//         console.log(idsiguiente);
//         console.log(idblanco);
//          if(this.id==0 && idblanco ==" " ){
//          var tda = document.getElementById(this.id);
//          var tda2 = document.getElementById(idsiguiente);
//          var primerelemento = tda.firstChild.nodeValue;
//          tda.firstChild.nodeValue = tda2.firstChild.nodeValue;
//         tda2.firstChild.nodeValue = primerelemento;   
//          }
    
//     }

function mueve(){
    var elementoID=this.getAttribute("id");
    elemento=document.getElementById(elementoID);
    //alert(elemento);
    var indices=[1,4,-1,-4];
    for(i=0;i<array.length-1;i++){
     var indiceprueba=elementoID+indices[i];
     if(indiceprueba>0 && indiceprueba<16){
     var elementoprueba=document.getElementById(indiceprueba);
    console.log(elemento.textContent);
        console.log( elementoprueba.textContent);
     if(elementoprueba.textContent==" "){
            cambia(elemento,elementoprueba);
     }   else{
         alert("no");
     }}
    }
    }
function cambia(elemento,elementoprueba){
    var contenido=elemento.textContent;
    elementoprueba.textContent=contenido;
    elemento.textContent=" ";
    }
   
// // Add event listener to table
// for (var i = 0; i < 16; i++) {
//     var el = document.getElementById((i));
//     el.addEventListener("click", cambia);
//     //console.log(el);
// }
var el = document.getElementsByTagName("td")
for (var i = 0; i < 16; i++) {
    //var el = document.getElementById((i));
    el[i].addEventListener("click", mueve);
    //console.log(el);
} 

