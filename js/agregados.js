function mostrarDatos() {
  let fechas = JSON.parse(localStorage.getItem("fechas"));
  let listaFechas = document.getElementById("listaCumples");
  listaFechas.innerHTML = "";
  
  if (fechas && fechas.length > 0) {
    fechas.forEach(function (fecha) {
        let li = document.createElement("li");
        li.textContent = fecha.nombre + " - Fecha: " + fecha.fechacumple;
        listaFechas.appendChild(li);
      });
  }
  
}

mostrarDatos();
