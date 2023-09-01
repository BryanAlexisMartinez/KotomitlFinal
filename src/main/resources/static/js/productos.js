let filt_mas = document.getElementById("filt_mas");
let filt_fem = document.getElementById("filt_fem");
let filt_inf = document.getElementById("filt_inf");
let filt_cat = document.getElementById("filt_cat");

let btnazul = document.getElementById("btnazul");
let btnblanco = document.getElementById("btnblanco");
let btnnegro = document.getElementById("btnnegro");

let filt_mas2 = document.getElementById("filt_mas2");
let filt_fem2 = document.getElementById("filt_fem2");
let filt_inf2 = document.getElementById("filt_inf2");
let filt_Scat2 = document.getElementById("filt_cat2");

let min = document.getElementById("min");
let max = document.getElementById("max");
let filt_precio= document.getElementById("filt_precio");


function getData() {
  let prod1 = fetch("https://kotomitl.onrender.com/api/productos/", {
    method: "GET"
  });

  prod1
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
      }
      response.json()
        .then((data) => {
          showProducts(data);
        })
        .catch((error) => {
          console.error("Problema en el json:", error);
        });
    })
    .catch((error) => {
      console.error("Ocurrió un error en la solicitud:", error);
    });
}

getData();

function showProducts(prods) {
  const mainProds = document.getElementById("main__prods");
  mainProds.innerHTML = prods.map(prod => `
    
  <!-- productos-->
  <div class="col" style="margin-bottom: 1rem;">
      <div class="card card_producto card__team h-100">
          <div style="text-align: center;" class="img_producto">
              <img src="${prod.imagen1}"
                  style="width: auto; height: 150px; margin-top: 1rem;"
                  class="img-fluid rounded" alt="${prod.nombre}">
          </div>
          <div class="card-body">
              <div class="title__card">
                  <span>${prod.nombre}</span>
              </div>
              <div class="subtitle__card">
                  <span>${prod.origen}</span>
              </div>
              <div class="subtitle__card">
                  <span>$ ${prod.precio}</span>
              </div>
              <p class="card-text" style="text-align: justify;">${prod.descripcion.slice(0, 75)}...</p>
          </div>
          
          <div style="text-align:center; margin: 0 auto 1.5rem auto;">
          <button type="button" id="btn-producto" class="btn btn-warning btn-producto" data-bs-toggle="modal" data-bs-target="#exampleModal${prod.id}">
          Ver más 
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
          </svg>
          </button>

          </div>

          
          <div class="modal fade" id="exampleModal${prod.id}" tabindex="-1" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          
          <div class="modal-dialog modal-xl modal-dialog-centered mx-auto">
          <div class="modal-content" id="modal-contenido">
              <div class="modal-header">
                  <h6 class="modal-title" style="margin-left:1rem;"><strong>${prod.nombre}</strong></h6>
                  <button type="button" class="btn-close" data-bs-dismiss="modal"
                  aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <div class="container-fluid text-center" id="singleprod">
              <div class="row" style="width: 100%;">
                <div class="col my-auto" style="width: 30%;" id="col1">
                  <ul class="list-group" id=miniaturas>
                      <li class="list-group-item" style="width: 70%;"><img src="${prod.imagen1}" onclick="cambiarimagen(this)" class="rounded mx-auto d-block img-pequena" alt="..."></li>
                      <li class="list-group-item" style="width: 70%"><img src="${prod.imagen2}"  onclick="cambiarimagen(this)" class="rounded mx-auto d-block img-pequena" alt="..."></li>
                      <li class="list-group-item" style="width: 70%"><img src="${prod.imagen3}" onclick="cambiarimagen(this)" class="rounded mx-auto d-block img-pequena" alt="..." ></li>
          
                    </ul>
                </div>
                <div class="col" style="width: 50%;align-items: center;" id="main-image">
                  <img src="${prod.imagen1}"  id="img-grande" class="rounded mx-auto d-block" alt="..." " style=" max-width: 95%; max-height: 95%;">
                </div>
                <div class="col" style="width: 40%;">
                  <!--title del producto-->
                  <h5 id="title_producto">Precio: $ ${prod.precio}</h5>
                  <div class="container text-center">
                      
                    </div>
                  


                    <!--Talla-->
<div class="container text-center">
<h4 id="titulo-tallas">Tallas</h4>
<div class="d-flex justify-content-center">
<div class="form-check form-check-inline formtallas talla-conjunto">    
<span class="form-check-label label-tallas" for="inlineRadio1">C</span>
<input id="tCh" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
value="option1">
</div>
<div class="form-check form-check-inline formtallas talla-conjunto">
<span class="form-check-label label-tallas" for="inlineRadio2">M</span>
<input id="tM" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
value="option2">
</div>
<div class="form-check form-check-inline formtallas talla-conjunto">
<span class="form-check-label label-tallas" for="inlineRadio3">G</span>
<input id="tG" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"
value="option3">
</div>
<div class="form-check form-check-inline formtallas talla-conjunto">
<span class="form-check-label label-tallas" for="inlineRadio4">EG</span>
<input id="tXg" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4"
value="option4">
</div>
</div>
</div>
          
                    <!--description-->
                    <div class="descriptiones-modal mt-5">
                      <p class="codigo">Descripción</p>
                      <p id="desc-prod">${prod.descripcion}</p>
                      
                      <p class="codigo">Detalles</p>
                      <br>
                      <br>
                      <ul id="lista-desc" style="text-align:left;">
                          <li>${prod.materiales}</li>
                          <li>${prod.sugerencia}</li>
                          <li>${prod.adicional}</li>
                          
                      </ul>
                    </div>
                    <!--Botones-->
                  
                    
                  
          
                </div>
              </div>
            </div>
              <div class="modal-footer">

              
              <button type="button" class="btn btnmodal btn-success" id="comprar">Comprar</button>
              <button type="button" class="btn btnmodal btn-warning" id="carrito">Carrito</button>
              

                  <button type="button" class="btn btnmodal btn-outline-danger" data-bs-dismiss="modal" id="cerrar">Cerrar</button>
              </div>
          </div>
      </div>
  </div>
</div>
</div>
</div>
          </div>
    `
  ).join('');

}


filt_cat.addEventListener("click", function (event) {
  showProducts(prod1);

});

filt_mas.addEventListener("click", function (event) {
  showProducts(prod1.filter(prod => prod.publico == "mas"));

});

filt_fem.addEventListener("click", function (event) {
  showProducts(prod1.filter(prod => prod.publico == "fem"));
});

filt_inf.addEventListener("click", function (event) {
  showProducts(prod1.filter(prod => prod.publico == "inf"));
});


btnazul.addEventListener("click", function (event) {
  showProducts(prod1.filter(prod => prod.color == "azul"));

});

btnblanco.addEventListener("click", function (event) {
  showProducts(prod1.filter(prod => prod.color == "blanco"));
});

btnnegro.addEventListener("click", function (event) {
  showProducts(prod1.filter(prod => prod.color == "negro"));
});



filt_precio.addEventListener("click", function (event) {
  let maxval=max.value
  let minval=min.value

  if (minval.length == 0 && max.value.length == 0){
    return showProducts(prod1);
  }
  else if (minval.length == 0 && max.length > 0){
    showProducts(prod1.filter(prod => (prod.precio <= maxval)));
    min.value="";
    max.value="";
  }
  else if (min.value.length > 0 && max.value.length == 0){
    showProducts(prod1.filter(prod => (prod.precio >= minval)));
    min.value="";
    max.value="";
  }
  else{
  showProducts(prod1.filter(prod => (prod.precio >= minval && prod.precio <= maxval)));
    min.value="";
    max.value="";
  }
});


// const elementos = document.querySelectorAll('.tu-clase-o-selector');
// function cambiarimagen(smallimg)
// {
//   var fullimg=document.getElementById("img-grande");
//   fullimg.src = smallimg.src;
// }

let prenda_buscada = document.getElementById('filtro_nombre');
let palabra_busqueda = prenda_buscada.value.trim().toLowerCase();
const mainProds = document.getElementById('main__prods');
let mensaje_productos = document.getElementById('mensaje_productos');

const palabras = ["vestido", "rebozo", "bufanda", "camisa"];
prenda_buscada.addEventListener("keyup", function (event) {
  if (prenda_buscada.value.length > 0){
    if (palabras.includes(prenda_buscada.value.trim().toLowerCase())) {
      showProducts(prod1.filter(prod => prod.tipo === prenda_buscada.value.trim().toLowerCase()));
      mensaje_productos.style.visibility = "hidden";
      mainProds.style.visibility = "visible";
    }
    else{
      mainProds.style.visibility = "hidden";
      mensaje_productos.style.visibility="visible";
    }
  } 
  else if (prenda_buscada.value.length == 0){
    showProducts(prod1);
    mainProds.style.visibility = "visible";
    mensaje_productos.style.visibility = "hidden";
  } 
});

filt_cat2.addEventListener("click", function (event) {
  showProducts(prod1);

});

filt_mas2.addEventListener("click", function (event) {
  showProducts(prod1.filter(prod => prod.publico == "mas"));

});

filt_fem2.addEventListener("click", function (event) {
  showProducts(prod1.filter(prod => prod.publico == "fem"));
});

filt_inf2.addEventListener("click", function (event) {
  showProducts(prod1.filter(prod => prod.publico == "inf"));
});