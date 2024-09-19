let listaNombresGastos = [];
let listaValoresGastos = [];
let listaDescripcionesGastos = [];

// Esta funcion se invoca al momento del usuario hace clicl en el boton
function clickBoton() {
    let nombreGasto = document.getElementById("nombreGasto").value;
    let valorGasto = document.getElementById("valorGasto").value;
    let descripcionGasto = document.getElementById("descripcionGasto").value;

    if (Number(valorGasto) > 150) {
        alert("¡Advertencia! El gasto registrado es mayor a $150.");
    }

    console.log(nombreGasto);
    console.log(valorGasto);
    console.log(descripcionGasto);
    
    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    listaDescripcionesGastos.push(descripcionGasto);

    actualizarListasGastos();
}

function actualizarListasGastos() {
    const listaElementos = document.getElementById("listaDeGastos");
    const totalElementos = document.getElementById("totalGastos");
    let htmlLista = "";
    let totalGastos = 0;

    listaNombresGastos.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]);
        const descripcionGasto = listaDescripcionesGastos[posicion];
        htmlLista += `<li>${elemento} - USD$${valorGasto.toFixed(2)} | Descripción: ${descripcionGasto}
        <button onclick="eliminarGasto(${posicion});">Eliminar</button>
        <button onclick="modificarGasto(${posicion});">Modificar</button>
        </li>`;
        totalGastos += valorGasto;
    });

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}

function limpiar() {
    document.getElementById("nombreGasto").value = "";
    document.getElementById("valorGasto").value = "";
    document.getElementById("descripcionGasto").value = "";
}

function eliminarGasto(posicion) {
    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    listaDescripcionesGastos.splice(posicion, 1);
    actualizarListasGastos();
}

function modificarGasto(posicion) {
    document.getElementById("nombreGasto").value = listaNombresGastos[posicion];
    document.getElementById("valorGasto").value = listaValoresGastos[posicion];
    document.getElementById("descripcionGasto").value = listaDescripcionesGastos[posicion];

    eliminarGasto(posicion); // Eliminar el gasto original
}
