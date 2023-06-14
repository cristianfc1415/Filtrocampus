const clientes={};
const juegos={};

document.getElementById('clientenuevo').addEventListener('submit',savecliente);
function savecliente(e){
    e.preventDefault();
    Guardarcliente();
}
document.querySelector('#otro').addEventListener('submit',guardarruta);
function guardarruta(e){
    e.preventDefault();
    guardarJuego();
}
document.querySelector('#busqueda').addEventListener('submit',busc);
function busc(e){
    e.preventDefault();
    buscar();
}
function pantallavacia(objeto,eliminar,id){
    visualizarClientes();
    visualizarJuegos();
    if (Object.keys(objeto).length===0){
        let pantalla=document.getElementById(id);

        pantalla.innerHTML+=`<div class="text-center" id="${eliminar}">
        <i class="bi bi-emoji-dizzy" style="font-size: 10vw;color: #f68640;"></i>
        <h2 class="display-5 fw-bold">Sin registro</h2>
        <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">
          En este momento, no hay registros activos. Realiza el registro para poder hacer
          la compra
        </p>
        </div>
        </div>`;
    }   else if(Object.keys(objeto).length===1){
        let eliminardiv=document.getElementById(eliminar);
        eliminardiv.remove();
    }
}
var total=0;
var totalpuntos=0;
function Guardarcliente(){
    let nom=document.querySelector('#nombreCliente').value;
    let ape=document.querySelector('#apellidoCliente').value;
    let ident=document.querySelector('#Ident').value;
    let mail=document.querySelector('#correo').value;
    let fec=document.querySelector('#nacimiento').value;
    let nacio=document.querySelector('#nacionalidad').value;
    let num=document.querySelector('#telefono').value;
    if(nom.length>0){
        let nuevo={
           nombres:nom,
           apellidos:ape,
           identificacion:ident,
           correo:mail,
           nacimiento:fec,
           nacionalidad:nacio,
           numero:num,
           puntosganados:"sin-puntos"
        }
        if(Object.keys(clientes).length===0){
            clientes[0]=nuevo;
        }else{
            let claves= Object.keys(clientes);
            let muestra = parseInt(claves[claves.length-1])+1;
            clientes[muestra]=nuevo;
        } 
    }
    console.log(clientes);
    pantallavacia(clientes,"eliminarcliente","noclientes");
    visualizarClientes();
    tablaclientes();
    document.querySelector('#nombreCliente').value='';
    document.querySelector('#apellidoCliente').value='';
    document.querySelector('#Ident').value='';
    document.querySelector('#correo').value='';
    document.querySelector('#nacimiento').value='';
    document.querySelector('#nacionalidad').value='';
    document.querySelector('#telefono').value='';
}
function visualizarClientes(){
    let vercol1=document.querySelector('#col1');
    let vercol2=document.querySelector('#col2');
    let vercol3=document.querySelector('#col3');
    vercol1.innerHTML=``;
    vercol2.innerHTML=``;
    vercol3.innerHTML=``;
    let contador=0;
    for (let clave in clientes) {
        if (clientes.hasOwnProperty(clave)) {
        contador++;
        if(contador==1){
            vercol1.innerHTML+=`<div class="card" style="width: 14rem;">
            <div class="card-body">
              <h5 class="card-title">${clientes[clave].nombres} ${clientes[clave].apellidos}</h5>
              <p class="card-text">cc:${clientes[clave].identificacion}</p>
              <p class="card-text">correo:${clientes[clave].correo}</p>
              <p class="card-text">fecha:${clientes[clave].nacimiento}</p>
              <p class="card-text">nacionalidad:${clientes[clave].nacionalidad}</p>
              <p class="card-text">numero:${clientes[clave].numero}</p>
              <p class="card-text">puntos:${clientes[clave].puntosganados}</p>
              <a class="btn btn-danger" onclick="deletecliente(${clave})">Borrar</a>
              <a class="btn btn-secondary" href="#registro" onclick="modificar(${clave})">editar</a>
            </div>
        </div>`;
        }else if(contador==2){
            vercol2.innerHTML+=`<div class="card" style="width: 14rem;">
            <div class="card-body">
              <h5 class="card-title">${clientes[clave].nombres} ${clientes[clave].apellidos}</h5>
              <p class="card-text">cc:${clientes[clave].identificacion}</p>
              <p class="card-text">correo:${clientes[clave].correo}</p>
              <p class="card-text">fecha:${clientes[clave].nacimiento}</p>
              <p class="card-text">nacionalidad:${clientes[clave].nacionalidad}</p>
              <p class="card-text">numero:${clientes[clave].numero}</p>
              <p class="card-text">puntos:${clientes[clave].puntosganados}</p>
              <a class="btn btn-danger" onclick="deletecliente(${clave})">Borrar</a>
              <a class="btn btn-secondary" href="#registro" onclick="modificar(${clave})">editar</a>
            </div>
            </div>`;    
        }else{
            contador=0;
            vercol3.innerHTML+=`<div class="card" style="width: 14rem;">
            <div class="card-body">
              <h5 class="card-title">${clientes[clave].nombres} ${clientes[clave].apellidos}</h5>
              <p class="card-text">cc:${clientes[clave].identificacion}</p>
              <p class="card-text">correo:${clientes[clave].correo}</p>
              <p class="card-text">fecha:${clientes[clave].nacimiento}</p>
              <p class="card-text">nacionalidad:${clientes[clave].nacionalidad}</p>
              <p class="card-text">numero:${clientes[clave].numero}</p>
              <p class="card-text">puntos:${clientes[clave].puntosganados}</p>
              <a class="btn btn-danger" onclick="deletecliente(${clave})">Borrar</a>
              <a class="btn btn-secondary" href="#registro" onclick="modificar(${clave})">editar</a>
            </div>
            </div>`;
        }
        }
    }
}
function deletecliente(id){
    if (confirm("Esta seguro que desea eliminar?") == true) {
        delete clientes[id];
        visualizarClientes();
        tablaclientes();
        alert("se elimino correctamente");
    } else {
        alert("No se elimino el producto");
    }   
    pantallavacia(clientes,"eliminarcliente","noclientes");
}
function deletejuego(id){
    if (confirm("Esta seguro que desea eliminar?") == true) {
        delete juegos[id];
        visualizarJuegos();
        alert("se elimino correctamente");
    } else {
        alert("No se elimino el producto");
    }
    pantallavacia(juegos,"eliminarjuegos","juegosdisponibles");   
    //pantallavacia(clientes,"eliminarcliente","noclientes");
}
function modificar(id){
    let nom=document.querySelector('#nombreCliente');
    let ape=document.querySelector('#apellidoCliente');
    let ident=document.querySelector('#Ident');
    let mail=document.querySelector('#correo');
    let fec=document.querySelector('#nacimiento');
    let nacio=document.querySelector('#nacionalidad');
    let num=document.querySelector('#telefono');
    nom.value=clientes[id].nombres;
    ape.value=clientes[id].apellidos;
    ident.value=clientes[id].identificacion;
    mail.value=clientes[id].correo;
    fec.value=clientes[id].nacimiento;
    nacio.value=clientes[id].nacionalidad;
    num.value=clientes[id].numero;
    let pun=clientes[id].puntosganados;
    //let ocultarboton=document.querySelector('#primerboton');
    let corregir=document.querySelector('#editarboton');
    let boton2=document.querySelector('#edicionboton2');
    corregir.innerHTML=``;
    //let mostrarboton=document.querySelector('#segundoboton');
    //mostrarboton.classList.remove('hidden');
    //ocultarboton.classList.add('hidden');
    if(pun>0){
        boton2.innerHTML=`
    <button class="btn text-light" onclick="Edicion(${id},${pun})" style="background: #0189fe;">
    Editar
    </button>
    `;
    }else{boton2.innerHTML=`
    <button class="btn text-light" onclick="Edicion(${id},'${pun}')" style="background: #0189fe;">
    Editar
    </button>
    `;}
    
}
function Edicion(id,puntossave){
    let nom=document.querySelector('#nombreCliente').value;
    let ape=document.querySelector('#apellidoCliente').value;
    let ident=document.querySelector('#Ident').value;
    let mail=document.querySelector('#correo').value;
    let fec=document.querySelector('#nacimiento').value;
    let nacio=document.querySelector('#nacionalidad').value;
    let num=document.querySelector('#telefono').value;
    if(nom.length>0){
        let nuevo={
           nombres:nom,
           apellidos:ape,
           identificacion:ident,
           correo:mail,
           nacimiento:fec,
           nacionalidad:nacio,
           numero:num,
           puntosganados:puntossave
        }    
        clientes[id]=nuevo;
        }
    let corregir=document.querySelector('#editarboton');
    let boton2=document.querySelector('#edicionboton2');
    boton2.innerHTML=``;
    corregir.innerHTML='<button class="btn text-light" type="submit" style="background: #0189fe;" id="primerboton">Enviar formulario</button>';
    visualizarClientes();
    tablaclientes();
}
function guardarJuego(){
    let nombrejuego=document.querySelector('#game').value;
    let tipo=document.querySelector('#tematica').value;
    let valorlicencia=document.querySelector('#preciolicencia').value;
    let puntos=document.querySelector('#puntos');
    let randpuntos=Math.floor(Math.random() * 10) + 1;
    let idnum=document.querySelector('#idlicencia');
    let randId=Math.floor(Math.random() * 900000) + 100000;
    puntos.value=randpuntos;
    idnum.value=randId;
    if(nombrejuego.length>0){
        let nuevojuego={
            IdR:randId,
            juegonom:nombrejuego,
            tematica:tipo,
            costo:valorlicencia,
            puntoscompra:randpuntos
        }
        if(Object.keys(juegos).length===0){
            juegos[1]=nuevojuego;    
        }else{
            let claves= Object.keys(juegos);
        let id = parseInt(claves[claves.length-1])+1;
        juegos[id]=nuevojuego;
        }
        //pantallavacia(vuelos,"eliminarvuelos","vuelosdisponibles");
    }
    console.log(juegos);
    pantallavacia(juegos,"eliminarjuegos","juegosdisponibles");
    visualizarJuegos();
} 
function visualizarJuegos(){
    let col1=document.querySelector('#coljuegos1');
    let col2=document.querySelector('#coljuegos2');
    let col3=document.querySelector('#coljuegos3');
    col1.innerHTML=``;
    col2.innerHTML=``;
    col3.innerHTML=``;
    let conteo=0;
    for (let clave in juegos) {
        if (juegos.hasOwnProperty(clave)) {
        conteo++;
        if(conteo==1){
            col1.innerHTML+=`<div class="card" style="width: 14rem;">
            <div class="card-body">
              <h5 class="card-title">${juegos[clave].juegonom}</h5>
              <p class="card-text">Id:${juegos[clave].IdR}</p>
              <p class="card-text">tematica:${juegos[clave].tematica}</p>
              <p class="card-text">precio:${juegos[clave].costo}</p>
              <p class="card-text">puntos:${juegos[clave].puntoscompra}</p>
              <a class="btn btn-danger" onclick="deletejuego(${clave})">Borrar</a>
            </div>
            </div>`;            
        } else if(conteo==2){
            col2.innerHTML+=`<div class="card" style="width: 14rem;">
            <div class="card-body">
              <h5 class="card-title">${juegos[clave].juegonom}</h5>
              <p class="card-text">Id:${juegos[clave].IdR}</p>
              <p class="card-text">tematica:${juegos[clave].tematica}</p>
              <p class="card-text">precio:${juegos[clave].costo}</p>
              <p class="card-text">puntos:${juegos[clave].puntoscompra}</p>
              <a class="btn btn-danger" onclick="deletejuego(${clave})">Borrar</a>
            </div>
            </div>`;
        } else{
            conteo=0;
            col3.innerHTML+=`<div class="card" style="width: 14rem;">
            <div class="card-body">
              <h5 class="card-title">${juegos[clave].juegonom}</h5>
              <p class="card-text">Id:${juegos[clave].IdR}</p>
              <p class="card-text">tematica:${juegos[clave].tematica}</p>
              <p class="card-text">precio:${juegos[clave].costo}</p>
              <p class="card-text">puntos:${juegos[clave].puntoscompra}</p>
              <a class="btn btn-danger" onclick="deletejuego(${clave})">Borrar</a>
            </div>
            </div>`;  
        }
    }
    }
}
function tablaclientes(){
    tabla=document.querySelector('#general');
    tabla.innerHTML=``;
    for (let clave in clientes) {
        if (clientes.hasOwnProperty(clave)) {
            //let tr=document.createElement("tr");
            //div.classList.add("parent");
            tabla.innerHTML += `
            <tr>
            <th scope="row">${clave}</th>
            <td>${clientes[clave].nombres}</td>
            <td>${clientes[clave].apellidos}</td>
            <td>${clientes[clave].identificacion}</td>
            <td>${clientes[clave].numero}</td>
            <td>${clientes[clave].puntosganados}</td>
            <td><button onclick="seleccion(${clave})">
            seleccionar</button></td>
            </tr>
            `;
            //tbody.appendChild(tr);
        }}
}
function seleccion(cliente){
    let factura=document.querySelector('#facturacompra');
    let tbody=document.querySelector('#tablajuegos');
    total=0;
    totalpuntos=0
    factura.innerHTML=`<tr id='ultimotr'>
    <td colspan="2" class="text-center">total a pagar</td>
    <td id="botonpagar"></td>
    <td id="totalplata"></td>
  </tr>`,
    tbody.innerHTML=``;
    for (let clave in juegos) {
        if (juegos.hasOwnProperty(clave)) {
            tbody.innerHTML += `
            <tr>
            <th scope="row">${juegos[clave].IdR}</th>
            <td>${juegos[clave].juegonom}</td>
            <td>${juegos[clave].tematica}</td>
            <td>${juegos[clave].costo}</td>
            <td>${juegos[clave].puntoscompra}</td>
            <td><button onclick="comprajuegos(${cliente},${clave})">
            registrar</button></td>
            </tr>`;            
        }
        }
}

function comprajuegos(cliente,juego){
    //clientes[idcliente].vueloregistrado=vuelos[idvuelo].nombreRuta;
    let factura=document.querySelector('#facturacompra');
    let boton=document.querySelector('#botonpagar');
    let preciofactura=parseInt(juegos[juego].costo)*1.20;
    let punto=parseInt(juegos[juego].puntoscompra)
    total += preciofactura;
    totalpuntos += punto;
    let tablafactura=document.createElement('tr');
    tablafactura.innerHTML = `
    <th scope="row">${juegos[juego].juegonom}</th>
    <td>${juegos[juego].IdR}</td>
    <td>${juegos[juego].costo}</td>
    <td>${preciofactura}</td>
    `;
    let ultimo=document.querySelector('#ultimotr');
    let plata=document.querySelector('#totalplata');
    factura.insertBefore(tablafactura,ultimo);
    plata.textContent=total;
    boton.innerHTML=`<button onclick="pagarfactura(${cliente})">
    pagar</button>`;
    console.log(total,totalpuntos);
    //console.log("hola",preciofactura)    
    //seleccion(idvuelo);
}
function pagarfactura(cliente){
    let factura=document.querySelector('#facturacompra');
    if(clientes[cliente].puntosganados==="sin-puntos"){
        clientes[cliente].puntosganados=totalpuntos;
    }else{
        clientes[cliente].puntosganados+=totalpuntos;
    }
    
    console.log(clientes);
    factura.innerHTML=`<tr>
    <td colspan="4">gracias por tu compra ganaste:${totalpuntos}</td>
  </tr> `;
  totalpuntos=0;
  total=0;
  let tbody=document.querySelector('#tablajuegos');
  tbody.innerHTML=``;
  tablaclientes();
  visualizarClientes();
  console.log(total,totalpuntos)
}
function buscar(){
    let busqueda=document.querySelector('#mostrar').value;
    let colu1=document.querySelector('#col1');
    let colu2=document.querySelector('#col2');
    let colu3=document.querySelector('#col3');
    colu1.innerHTML='';
    colu2.innerHTML='';
    colu3.innerHTML='';
    console.log(busqueda)
    for (let clave in clientes) {
        if (clientes[clave].nombres==busqueda||clientes[clave].apellidos==busqueda||clientes[clave].identificacion==busqueda){
            colu1.innerHTML+=`<div class="card" style="width: 14rem;">
            <div class="card-body">
              <h5 class="card-title">${clientes[clave].nombres} ${clientes[clave].apellidos}</h5>
              <p class="card-text">cc:${clientes[clave].identificacion}</p>
              <p class="card-text">correo:${clientes[clave].correo}</p>
              <p class="card-text">fecha:${clientes[clave].nacimiento}</p>
              <p class="card-text">nacionalidad:${clientes[clave].nacionalidad}</p>
              <p class="card-text">numero:${clientes[clave].numero}</p>
              <p class="card-text">puntos:${clientes[clave].puntosganados}</p>
              <a class="btn btn-danger" onclick="deletecliente(${clave})">Borrar</a>
              <a class="btn btn-secondary" onclick="modificar(${clave})">editar</a>
              <a class="btn btn-secondary" onclick="visualizarClientes()">reset</a>
            </div>
            </div>`;
        }
    }   
}
pantallavacia(juegos,"eliminarjuegos","juegosdisponibles");
pantallavacia(clientes,"eliminarcliente","noclientes");
