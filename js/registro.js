function obtenerCumples() {
  let cumpleanos = localStorage.getItem("fechas");
  let registro = JSON.parse(cumpleanos) || [];
  return registro;
}

function guardaCumple(datos) {
  localStorage.setItem("fechas", JSON.stringify(datos));
}

let fechas = obtenerCumples();

const AGREGARFECHA = document.querySelector("#formulario");

function agregarFechaCumple(event) {
  event.preventDefault();
  let nombre = document.querySelector("#nombre").value;
  let fecha = document.querySelector("#fecha").value;
  fechas.push({ nombre: nombre, fechacumple: fecha });

  guardaCumple(fechas);
  AGREGARFECHA.reset();
}

AGREGARFECHA.addEventListener("submit", function (event) {
  agregarFechaCumple(event);
  Swal.fire({
    title: "Bien",
    text: "La Fecha Fue Agregada Con Exito!",
    icon: "success"
  });

});


