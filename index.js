/* DESAFIO COMPLEMENTARIO CLASE 9 - MATIAS BRIGNONI */

/* 
Este script hace que se renderize en el HTML el catálogo definido en JavaScript y se impongan el estilo css definido para las clases y ids.
Además, existen en el HTML botones para ordenar el catalogo de la siguiente manera:
    - Mayor a menor precio
    - Menor a mayor Precio
    - A-Z nombre producto
    - Resetear orden
*/

const catalogoHombres = [
    {id: 1, nombre: "Remera Verde", precio: 790, img: "men-product1.jpg"},
    {id: 2, nombre: "Remera Rosada", precio: 690, img: "men-product2.jpg"},
    {id: 3, nombre: "Short Azul", precio: 1190, img: "men-product3.jpg"},
    {id: 4, nombre: "Short Negro", precio: 1090, img: "men-product4.jpg"},
    {id: 5, nombre: "Medias", precio: 450, img: "men-product5.jpg"},
    {id: 6, nombre: "Buzo Fluor", precio: 1590, img: "men-product6.jpg"},
    {id: 7, nombre: "Remera Verde", precio: 790, img: "men-product1.jpg"}, //se repiten los productos para que se renderize mayor cantidad.
    {id: 8, nombre: "Remera Rosada", precio: 690, img: "men-product2.jpg"},
    {id: 9, nombre: "Short Azul", precio: 1190, img: "men-product3.jpg"},
    {id: 10, nombre: "Short Negro", precio: 1090, img: "men-product4.jpg"},
    {id: 11, nombre: "Medias", precio: 450, img: "men-product5.jpg"},
    {id: 12, nombre: "Buzo Fluor", precio: 1590, img: "men-product6.jpg"},
];

let productoBlock = document.getElementById("productBlock");

for (const producto of catalogoHombres) {
    let div = document.createElement("div");
    div.innerHTML = `<img src="./img/${producto.img}" alt="producto${producto.id}">
                    <p class="productoNombre"> ${producto.nombre} </p>
                    <p class="productoPrecio"> $ ${producto.precio} </p>
                    <button id="agregar${producto.id}">Agregar</button>`;
    div.className = "product-block";
    productBlock.append(div);
};

//ORDENA EL CATALOGO DE MAYOR A MENOR PRECIO
function ordenarMayorMenor() {
    catalogoHombres.sort((a, b) => {
        if(a.precio > b.precio){
           return -1;
        }

        if(a.precio < b.precio){
            return 1;
        }

        return 0;
    }); //ordena de Mayor a Menor

    productBlock.innerHTML = "";

    for (const producto of catalogoHombres) {
        let div = document.createElement("div");
        div.innerHTML = `<img src="./img/${producto.img}" alt="producto${producto.id}">
                        <p class="productoNombre"> ${producto.nombre} </p>
                        <p class="productoPrecio"> $ ${producto.precio} </p>
                        <button id="agregar${producto.id}">Agregar</button>`;
        div.className = "product-block";
        productBlock.append(div);
    }
}

let botonMayorMenor = document.getElementById("btnMayorMenor");
botonMayorMenor.addEventListener("click", ordenarMayorMenor);

//ORDENA EL CATALOGO DE MENOR A MAYOR PRECIO

function ordenarMenorMayor() {
    catalogoHombres.sort((a, b) => {
        if(a.precio < b.precio){
            return -1;
        }
        
        if(a.precio > b.precio){
            return 1;
        }
                return 0;
    }); //ordena de Menor a Mayor
        
    productBlock.innerHTML = "";
        
    for (const producto of catalogoHombres) {
        let div = document.createElement("div");
        div.innerHTML = `<img src="./img/${producto.img}" alt="producto${producto.id}">
                        <p class="productoNombre"> ${producto.nombre} </p>
                        <p class="productoPrecio"> $ ${producto.precio} </p>
                        <button id="agregar${producto.id}">Agregar</button>`;
        div.className = "product-block";
        productBlock.append(div);
    }
}
        
let botonMenorMayor = document.getElementById("btnMenorMayor");
botonMenorMayor.addEventListener("click", ordenarMenorMayor);    

//ORDENA EL CATALOGO DE A-Z SEGUN NOMBRE DEL PRODUCTO

function ordenarAZ() {
    catalogoHombres.sort((a, b) => {
        if(a.nombre < b.nombre){
            return -1;
        }
        
        if(a.nombre > b.nombre){
            return 1;
        }
                return 0;
    }); //ordena de Menor a Mayor
        
    productBlock.innerHTML = "";
        
    for (const producto of catalogoHombres) {
        let div = document.createElement("div");
        div.innerHTML = `<img src="./img/${producto.img}" alt="producto${producto.id}">
                        <p class="productoNombre"> ${producto.nombre} </p>
                        <p class="productoPrecio"> $ ${producto.precio} </p>
                        <button id="agregar${producto.id}">Agregar</button>`;
        div.className = "product-block";
        productBlock.append(div);
    }
}
        
let botonAZ = document.getElementById("btnAZ");
botonAZ.addEventListener("click", ordenarAZ);    

//RESETEA FILTRO DE ORDEN

function resetearOrden() {
    catalogoHombres.sort((a, b) => {
        if(a.id < b.id){
            return -1;
        }
        
        if(a.id > b.id){
            return 1;
        }
                return 0;
    }); //ordena de Menor a Mayor
        
    productBlock.innerHTML = "";
        
    for (const producto of catalogoHombres) {
        let div = document.createElement("div");
        div.innerHTML = `<img src="./img/${producto.img}" alt="producto${producto.id}">
                        <p class="productoNombre"> ${producto.nombre} </p>
                        <p class="productoPrecio"> $ ${producto.precio} </p>
                        <button id="agregar${producto.id}">Agregar</button>`;
        div.className = "product-block";
        productBlock.append(div);
    }
}
        
let botonResetear = document.getElementById("btnResetear");
botonResetear.addEventListener("click", resetearOrden);    