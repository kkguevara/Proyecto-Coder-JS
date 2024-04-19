const APIKEY = 'X7L133d3LKB45Lwh7xwsblQPqxKhSWxarJpO2KeUazVokj8CCaW8HfEE';
let apiUrl = 'https://api.pexels.com/v1/search?query=birthday cakes';
let headers = {
    'Authorization': APIKEY
};

fetch(apiUrl, {
    method: 'GET',
    headers: headers
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    renderImage(data);
})
.catch(error => {
    return;
});

function renderImage(data) {
    let photos = data.photos;

    let imgSrc = photos[14].src.landscape;
    
    let imagen = document.getElementById("imagen_api");
    imagen.src = imgSrc; 
    
}