function generarCSV() {
    var tabla = document.getElementById('miTabla');
    var csv = Papa.unparse({ fields: [], data: obtenerDatosTabla(tabla) });

    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'salida.csv';
    link.click();
}

function generarPDF() {
    var tabla = document.getElementById('Tabla');
    var opciones = { margin: 10, filename: 'salida.pdf' };

    html2pdf(tabla, opciones);
}

function obtenerDatosTabla(tabla) {
    var datos = [];
    var filas = tabla.querySelectorAll('tr');

    for (var i = 0; i < filas.length; i++) {
        var fila = filas[i];
        var celdas = fila.querySelectorAll('td, th');
        var filaDatos = [];

        for (var j = 0; j < celdas.length; j++) {
            filaDatos.push(celdas[j].innerText);
        }

        datos.push(filaDatos);
    }

    return datos;
}