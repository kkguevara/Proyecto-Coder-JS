const KEY = "X7L133d3LKB45Lwh7xwsblQPqxKhSWxarJpO2KeUazVokj8CCaW8HfEE";
const URL = "https://api.pexels.com/v1/search?query=birthday cakes";
let headers = {
  Authorization: KEY,
};

fetch(URL, {
  method: "GET",
  headers: headers,
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    mostrarProximosCumpleanos(data);
  })
  .catch((error) => {
   return;
  });

let fechas = JSON.parse(localStorage.getItem("fechas"));

function proximosCumples() {
  let hoy = new Date();
  hoy.setHours(0, 0, 0, 0); 

  let fechas_filtradas = fechas.filter((fecha) => {
    let fechaCumple = new Date(`${fecha.fechacumple}T00:00:00Z`); 
    let mesActual = hoy.getMonth(); 
    let mesCumple = fechaCumple.getUTCMonth();

    return mesCumple === mesActual && fechaCumple >= hoy;
  });

  // Ordena las fechas filtradas de menor a mayor
  fechas_filtradas.sort((a, b) => {
    let fechaA = new Date(`${a.fechacumple}T00:00:00Z`);
    let fechaB = new Date(`${b.fechacumple}T00:00:00Z`);
    return fechaA - fechaB;
  });

  return fechas_filtradas;
}

function mostrarProximosCumpleanos(data) {
  let photos = data.photos;
  let imgSrc = photos[11].src.small;

  let proximosCumpleanosDiv = document.getElementById("proximosCumpleanos");
  proximosCumpleanosDiv.innerHTML = "";

  let fechas = proximosCumples();

  fechas.forEach((cumple) => {
    let card = document.createElement("div");
    card.className = "card border-info mb-3";
    card.style.width = "18rem";
    card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">Próximo Cumpleaños</h5>
                <h6 class="card-subtitle mb-2 text-muted">Nombre: ${cumple.nombre}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Fecha: ${cumple.fechacumple}</h6>
                <img src="${imgSrc}" />
            </div>
        `;
    proximosCumpleanosDiv.appendChild(card);
  });
}
// Mostrar los próximos cumpleaños al cargar la página
mostrarProximosCumpleanos();
