function guardaCumple(datos) {
  localStorage.setItem("fechas", JSON.stringify(datos))
}

function obtenerCumple() {
  let cumpleanos = localStorage.getItem("fechas");
  if (cumpleanos == null) {
    registro = [];
  } else {
    registro = JSON.parse(cumpleanos);
  }
  return registro;
}

let datos = null;
const fechas = obtenerCumple();
// si existen datos ingresados asignarlo a fechas
if (fechas.length > 0) {
  datos = fechas;
// sino crear desde cero
} else {
  datos = []
}
// mostrar datos al cargar la pagina
mostrarDatos()

const AGREGARFECHA = document.querySelector("#formulario");

AGREGARFECHA.addEventListener("submit", (event) => {
  event.preventDefault();
  let nombre = document.querySelector("#nombre").value;
  let fecha = document.querySelector("#fecha").value;
  let info = {
    nombre: nombre,
    fecha: fecha,
  };

    datos.push(info);
    guardaCumple(datos);

    AGREGARFECHA.reset();

    //mostrar datos al agregar fecha
    
    mostrarDatos()
});

function mostrarDatos() {
  
  
  let listaFechas = document.getElementById("listaCumples");
  listaFechas.innerHTML = '';

  
  fechas.forEach(function(fecha) {
      
      let li = document.createElement("li");

      
      li.textContent = fecha.nombre + " - Fecha: " + fecha.fecha;

      
      listaFechas.appendChild(li);
  });
}




