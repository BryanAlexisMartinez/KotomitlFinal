// =========== VALIDACIÓN DE FORMULARIO DE CONTACTO ===========

//Elementos del formulario de html
let nombreInput = document.getElementById("nombreInput");
let alert_nombre = document.getElementById("alert_nombre");
let alert_nombre_txt = document.getElementById("alert_nombre_txt");
let nombreProductotxt = "";//valor para localStorage

let categoriaInput = document.getElementById("categoriaInput");
let alert_categoria = document.getElementById("alert_categoria");
let alert_categoria_txt = document.getElementById("alert_categoria_txt");
let categoriaProductotxt = "";//valor para localStorage

let descripcionInput = document.getElementById("descripcionInput");
let alert_descripcion = document.getElementById("alert_descripcion");
let alert_descripcion_txt = document.getElementById("alert_descripcion_txt");
let descripcionProductotxt = "";//valor para localStorage

let precioInput = document.getElementById("precioInput");
let alert_precio = document.getElementById("alert_precio");
let alert_precio_txt = document.getElementById("alert_precio_txt");
let precioProductotxt = "";//valor para localStorage

let origenInput = document.getElementById("origenInput");
let alert_origen = document.getElementById("alert_origen");
let alert_origen_txt = document.getElementById("alert_origen_txt");
let origenProductotxt = "";

let colorInput = document.getElementById("colorInput");
let alert_color = document.getElementById("alert_color");
let alert_color_txt = document.getElementById("alert_color_txt");
let colorProductotxt = "";//valor para localStorage

let cantidadInput = document.getElementById("cantidadInput");
let alert_cantidad = document.getElementById("alert_cantidad");
let alert_cantidad_txt = document.getElementById("alert_cantidad_txt");
let cantidadProductotxt = "";//valor para localStorage

let materialInput = document.getElementById("materialInput");
let alert_material = document.getElementById("alert_material");
let alert_material_txt = document.getElementById("alert_material_txt");
let materialProductotxt = "";//valor para localStorage

let sugerenciaInput = document.getElementById("sugerenciaInput");
let alert_sugerencia = document.getElementById("alert_sugerencia");
let alert_sugerencia_txt = document.getElementById("alert_sugerencia_txt");
let sugerenciaProductotxt = "";//valor para localStorage

let adicionalInput = document.getElementById("adicionalInput");
let alert_adicional = document.getElementById("alert_adicional");
let alert_adicional_txt = document.getElementById("alert_adicional_txt");
let adicionalProductotxt = "";//valor para localStorage

let tallaInput = document.getElementById("tallaInput");
let alert_talla = document.getElementById("alert_talla");
let alert_talla_txt = document.getElementById("alert_talla_txt");
let tallaProductotxt = "";//valor para localStorage

let skuInput = document.getElementById("skuInput");
let alert_sku = document.getElementById("alert_sku");
let alert_sku_txt = document.getElementById("alert_sku_txt");
let skuProductotxt = "";//valor para localStorage

let tipoInput = document.getElementById("tipoInput");
let alert_tipo = document.getElementById("alert_tipo");
let alert_tipo_txt = document.getElementById("alert_tipo_txt");
let tipoProductotxt = "";//valor para localStorage

//Carga de imágenes
let fileImage_1 = document.getElementById('fileImage_1');
let btnFake_1 = document.getElementById('btnFake_1');
let imageFile_1 = document.getElementById('imageFile_1');
let imagen_1 = "";//valor para localStorage

let fileImage_2 = document.getElementById('fileImage_2');
let btnFake_2 = document.getElementById('btnFake_2');
let imageFile_2 = document.getElementById('imageFile_2');
let imagen_2 = "";//valor para localStorage

let fileImage_3 = document.getElementById('fileImage_3');
let btnFake_3 = document.getElementById('btnFake_3');
let imageFile_3 = document.getElementById('imageFile_3');
let imagen_3 = "";//valor para localStorage


//contenedores de imágenes
const container_1 = document.getElementById("container_1");
const container_2 = document.getElementById("container_2");
const container_3 = document.getElementById("container_3");

//Botón de envío
const btnEnviar = document.getElementById("btnEnviar");

//===============LIMPIAR CAMPOS UNA VEZ SUBIDO EL PRODUCOT A LA BASE DE DATOS========================
function borrarValidaciones() {

    //elementos de validación limpios
    nombreInput.style.border = "";
    alert_nombre.style.display = "none";
    alert_nombre_txt.innerHTML = "";
    nombreInput.value = "";

    categoriaInput.style.border = "";
    alert_categoria.style.display = "none";
    alert_categoria_txt.innerHTML = "";
    categoriaInput.value = "";

    descripcionInput.style.border = "";
    alert_descripcion.style.display = "none";
    alert_descripcion_txt.innerHTML = "";
    descripcionInput.value = ""

    precioInput.style.border = "";
    alert_precio.style.display = "none";
    alert_precio_txt.innerHTML = "";
    precioInput.value = "";

    origenInput.style.border = "";
    alert_origen.style.display = "none";
    alert_origen_txt.innerHTML = "";
    origenInput.value = ""

    colorInput.style.border = "";
    alert_color.style.display = "none";
    alert_color_txt.innerHTML = "";
    colorInput.value = "";

    cantidadInput.style.border = "";
    alert_cantidad.style.display = "none";
    alert_cantidad_txt.innerHTML = "";
    cantidadInput.value = "";

    materialInput.style.border = "";
    alert_material.style.display = "none";
    alert_material_txt.innerHTML = "";
    materialInput.value = "";

    sugerenciaInput.style.border = "";
    alert_sugerencia.style.display = "none";
    alert_sugerencia_txt.innerHTML = "";
    sugerenciaInput.value = "";

    adicionalInput.style.border = "";
    alert_adicional.style.display = "none";
    alert_adicional_txt.innerHTML = "";
    adicionalInput.value = "";

    tallaInput.style.border = "";
    alert_talla.style.display = "none";
    alert_talla_txt.innerHTML = "";
    tallaInput.value = "";

    skuInput.style.border = "";
    alert_sku.style.display = "none";
    alert_sku_txt.innerHTML = "";
    skuInput.value = "";

    tipoInput.style.border = "";
    alert_tipo.style.display = "none";
    alert_tipo_txt.innerHTML = "";
    tipoInput.value = "";





}

//   ***********  1. Validación de nombre  ***********

function validarNombre() {
    let regexName = /^[a-zA-Z0-9," "áéíóúÁÉÍÓÚüÜñÑ._]{3,}$/;
    valor = nombreInput.value.trim().toUpperCase();

    nombreInput.style.border = "";
    alert_nombre.style.display = "none";
    alert_nombre_txt.innerHTML = "";

    if (regexName.test(valor)) {
        nombreInput.style.border = "solid 2px green";
        nombreProductotxt = valor;
        return true
    } else {
        alert_nombre_txt.insertAdjacentHTML("afterbegin", `Nombre incorrecto`);
        alert_nombre.style.display = "flex";
        nombreInput.style.border = "solid 2px rgb(186, 3, 3)";
        return false;
    }
}

nombreInput.addEventListener("change", function (element) {
    element.preventDefault();
    validarNombre();
})

//   ***********  2. Validación de origen  ***********

function validarOrigen() {
    let regexName = /^[a-zA-Z," ",áéíóúÁÉÍÓÚüÜñÑ._]{3,}$/;
    valor = origenInput.value.trim().toUpperCase();

    origenInput.style.border = "";
    alert_origen.style.display = "none";
    alert_origen_txt.innerHTML = "";

    if (regexName.test(valor)) {
        origenInput.style.border = "solid 2px green";
        origenProductotxt = valor;
        return true
    } else {
        alert_origen_txt.insertAdjacentHTML("afterbegin", `Texto incorrecto`);
        alert_origen.style.display = "flex";
        origenInput.style.border = "solid 2px rgb(186, 3, 3)";
        return false;
    }
}

origenInput.addEventListener("change", function (element) {
    element.preventDefault();
    validarOrigen();
})


//   ***********  3. Validación de descripcion  ***********
function validarDescripcion() {
    let regexName = /^[a-zA-Z0-9," ",áéíóúÁÉÍÓÚüÜñÑ.]{15,150}$/;
    valor = descripcionInput.value.trim();

    descripcionInput.style.border = "";
    alert_descripcion.style.display = "none";
    alert_descripcion_txt.innerHTML = "";

    if (regexName.test(valor)) {
        descripcionInput.style.border = "solid 2px green";
        descripcionProductotxt = valor;
        return true
    } else {
        alert_descripcion_txt.insertAdjacentHTML("afterbegin", `Descripción incorrecta`);
        alert_descripcion.style.display = "flex";
        descripcionInput.style.border = "solid 2px rgb(186, 3, 3)";
        return false;
    }
}

descripcionInput.addEventListener("change", function (element) {
    element.preventDefault();
    validarDescripcion();
})

//   ***********  4. Validación de precio  ***********

function validarPrecio() {
    // let regexName = /^[^0-9.]{2,7}$/;
    valor = precioInput.value.trim();

    precioInput.style.border = "";
    alert_precio.style.display = "none";
    alert_precio_txt.innerHTML = "";

    if (!isNaN(parseFloat(valor)) && valor.length > 0 && valor.length < 8) {
        precioInput.style.border = "solid 2px green";
        precioProductotxt = ((Math.floor(valor * 100) / 100).toFixed(2));
        return true
    } else {
        alert_precio_txt.insertAdjacentHTML("afterbegin", `Incorrecto`);
        alert_precio.style.display = "flex";
        precioInput.style.border = "solid 2px rgb(186, 3, 3)";
        return false;
    }
}

precioInput.addEventListener("change", function (element) {
    element.preventDefault();
    validarPrecio();
})

//   ***********  5. Validación de categoría  ***********

function validarCategoria() {

    valor = categoriaInput.value;

    categoriaInput.style.border = "";
    alert_categoria.style.display = "none";
    alert_categoria_txt.innerHTML = "";


    if (valor != "") {
        categoriaInput.style.border = "solid 2px green";
        categoriaProductotxt = valor;
        return true
    } else {
        alert_categoria_txt.insertAdjacentHTML("afterbegin", `Incorrecta`);
        alert_categoria.style.display = "flex";
        categoriaInput.style.border = "solid 2px rgb(186, 3, 3)";
        return false;
    }
}

categoriaInput.addEventListener("change", function (element) {
    element.preventDefault();
    validarCategoria();
})

//   ***********  6. Validación de material  ***********

function validarMaterial() {

    let regexName = /^[a-zA-Z0-9," ",áéíóúÁÉÍÓÚüÜñÑ./&%;*_]{4,50}$/;
    valor = materialInput.value.trim();

    materialInput.style.border = "";
    alert_material.style.display = "none";
    alert_material_txt.innerHTML = "";

    if (regexName.test(valor)) {
        materialInput.style.border = "solid 2px green";
        materialProductotxt = valor;
        return true
    } else {
        alert_material_txt.insertAdjacentHTML("afterbegin", `Texto incorrecto`);
        alert_material.style.display = "flex";
        materialInput.style.border = "solid 2px rgb(186, 3, 3)";
        return false;
    }
}

materialInput.addEventListener("change", function (element) {
    element.preventDefault();
    validarMaterial();
})

//   ***********  7. Validación de sugerencia  ***********

function validarSugerencia() {

    let regexName = /^[a-zA-Z0-9," ",áéíóúÁÉÍÓÚüÜñÑ._]{5,100}$/;
    valor = sugerenciaInput.value.trim();

    sugerenciaInput.style.border = "";
    alert_sugerencia.style.display = "none";
    alert_sugerencia_txt.innerHTML = "";

    if (regexName.test(valor)) {
        sugerenciaInput.style.border = "solid 2px green";
        sugerenciaProductotxt = valor;
        return true
    } else {
        alert_sugerencia_txt.insertAdjacentHTML("afterbegin", `Texto incorrecto`);
        alert_sugerencia.style.display = "flex";
        sugerenciaInput.style.border = "solid 2px rgb(186, 3, 3)";
        return false;
    }
}

sugerenciaInput.addEventListener("change", function (element) {
    element.preventDefault();
    validarSugerencia();
})

//   ***********  8. Validación de adicional  ***********

function validarAdicional() {

    let regexName = /^[a-zA-Z0-9," ",áéíóúÁÉÍÓÚüÜñÑ._]{5,100}$/;
    valor = adicionalInput.value.trim();

    adicionalInput.style.border = "";
    alert_adicional.style.display = "none";
    alert_adicional_txt.innerHTML = "";

    if (regexName.test(valor)) {
        adicionalInput.style.border = "solid 2px green";
        alert_adicional.style.display = "none";
        adicionalProductotxt = valor;
        return true
    } else {
        alert_adicional_txt.insertAdjacentHTML("afterbegin", `Texto incorrecto`);
        alert_adicional.style.display = "flex";
        adicionalInput.style.border = "solid 2px rgb(186, 3, 3)";
        return false;
    }
}

adicionalInput.addEventListener("change", function (element) {
    element.preventDefault();
    validarAdicional();
})



//   ***********  9. Validación de color  ***********

function validarColor() {

    valor = colorInput.value;

    colorInput.style.border = "";
    alert_color.style.display = "none";
    alert_color_txt.innerHTML = "";


    if (valor != "") {
        colorInput.style.border = "solid 2px green";
        colorProductotxt = valor;
        return true
    } else {
        alert_color_txt.insertAdjacentHTML("afterbegin", `Incorrecta`);
        alert_color.style.display = "flex";
        colorInput.style.border = "solid 2px rgb(186, 3, 3)";
        return false;
    }
}

colorInput.addEventListener("change", function (element) {
    element.preventDefault();
    validarColor();
})




//   ***********  10. Validación de talla  ***********

function validarTalla() {

    valor = tallaInput.value;

    tallaInput.style.border = "";
    alert_talla.style.display = "none";
    alert_talla_txt.innerHTML = "";


    if (valor != "") {
        tallaInput.style.border = "solid 2px green";
        tallaProductotxt = valor;
        return true
    } else {
        alert_talla_txt.insertAdjacentHTML("afterbegin", `Incorrecta`);
        alert_talla.style.display = "flex";
        tallaInput.style.border = "solid 2px rgb(186, 3, 3)";
        return false;
    }
}

tallaInput.addEventListener("change", function (element) {
    element.preventDefault();
    validarTalla();
})



//   ***********  11. Validación de cantidad  ***********

function validarCantidad() {
    valor = cantidadInput.value.trim();

    cantidadInput.style.border = "";
    alert_cantidad.style.display = "none";
    alert_cantidad_txt.innerHTML = "";

    if (!isNaN(valor) && valor.length > 0 && valor.length < 8 && Number.isInteger(parseFloat(valor))) {
        cantidadInput.style.border = "solid 2px green";
        cantidadProductotxt = parseInt(valor);
        return true;
    } else {
        alert_cantidad_txt.insertAdjacentHTML("afterbegin", `Incorrecto`);
        alert_cantidad.style.display = "flex";
        cantidadInput.style.border = "solid 2px rgb(186, 3, 3)";
        return false;
    }
}

cantidadInput.addEventListener("change", function (event) {
    event.preventDefault();
    validarCantidad();
});


//   ***********  12. Validación de sku  ***********

function validarSku() {
    let regexSku = /^[a-zA-Z0-9," "áéíóúÁÉÍÓÚüÜñÑ._]{3,}$/;
    valor = skuInput.value.trim().toUpperCase();

    skuInput.style.border = "";
    alert_sku.style.display = "none";
    alert_sku_txt.innerHTML = "";

    if (regexSku.test(valor)) {
        skuInput.style.border = "solid 2px green";
        skuProductotxt = valor;
        return true
    } else {
        alert_sku_txt.insertAdjacentHTML("afterbegin", `Sku incorrecto`);
        alert_sku.style.display = "flex";
        skuInput.style.border = "solid 2px rgb(186, 3, 3)";
        return false;
    }
}

skuInput.addEventListener("change", function (element) {
    element.preventDefault();
    validarSku();
})



//   ***********  13. Validación de tipo  ***********

function validarTipo() {
    let regexTipo = /^[a-zA-Z0-9," "áéíóúÁÉÍÓÚüÜñÑ._]{3,}$/;
    valor = tipoInput.value.trim().toUpperCase();

    tipoInput.style.border = "";
    alert_tipo.style.display = "none";
    alert_tipo_txt.innerHTML = "";

    if (regexTipo.test(valor)) {
        tipoInput.style.border = "solid 2px green";
        tipoProductotxt = valor;
        return true
    } else {
        alert_tipo_txt.insertAdjacentHTML("afterbegin", `Tipo incorrecto`);
        alert_tipo.style.display = "flex";
        tipoInput.style.border = "solid 2px rgb(186, 3, 3)";
        return false;
    }
}

tipoInput.addEventListener("change", function (element) {
    element.preventDefault();
    validarTipo();
})



// ================== Carga imágenes ========================

//   ***********  Carga de imagen 1   ***********

btnFake_1.addEventListener('click', function () {
    container_1.style.border = "";
    fileImage_1.click();
});

fileImage_1.addEventListener('change', function () {
    previewFile1('imageFile_1', 'fileImage_1', 'container_img_1')
    //previewFile(id imagen, input type file , textArea);
});

function previewFile1(img, inputFile, container) {

    var preview = document.getElementById(img);
    var file = document.getElementById(inputFile).files[0];
    var reader = new FileReader();

    reader.addEventListener("load", function () {
        document.getElementById(container).style.display = "none";
        document.getElementById(img).style.display = "flex";
        imagen_1 = reader.result; //texto con la imagen
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }// file
}


//   ***********  Carga de imagen 2   ***********


btnFake_2.addEventListener('click', function () {
    container_2.style.border = "";
    fileImage_2.click();
});

fileImage_2.addEventListener('change', function () {
    previewFile2('imageFile_2', 'fileImage_2', 'container_img_2')
});

function previewFile2(img, inputFile, container) {

    var preview = document.getElementById(img);
    var file = document.getElementById(inputFile).files[0];
    var reader = new FileReader();

    reader.addEventListener("load", function () {
        document.getElementById(container).style.display = "none";
        document.getElementById(img).style.display = "flex";
        imagen_2 = reader.result; //texto con la imagen
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }// file
}

//   ***********  Carga de imagen 3   ***********

btnFake_3.addEventListener('click', function () {
    container_3.style.border = "";
    fileImage_3.click();
});

fileImage_3.addEventListener('change', function () {
    previewFile3('imageFile_3', 'fileImage_3', 'container_img_3')
});

function previewFile3(img, inputFile, container) {

    var preview = document.getElementById(img);
    var file = document.getElementById(inputFile).files[0];
    var reader = new FileReader();

    reader.addEventListener("load", function () {
        document.getElementById(container).style.display = "none";
        document.getElementById(img).style.display = "flex";
        imagen_3 = reader.result; //texto con la imagen
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }// file
}// previewFile 


function validarImagen1() {
    if (imagen_1 == "") {
        container_1.style.border = "solid 3px rgb(186, 3, 3)";
        return false;
    } else {
        container_1.style.border = "solid 3px green";
        return true;
    }
}

function validarImagen2() {
    if (imagen_2 == "") {
        container_2.style.border = "solid 3px rgb(186, 3, 3)";
        return false;
    } else {
        container_2.style.border = "solid 3px green";
        return true;
    }
}

function validarImagen3() {
    if (imagen_3 == "") {
        container_3.style.border = "solid 3px rgb(186, 3, 3)";
        return false;
    } else {
        container_3.style.border = "solid 3px green";
        return true;
    }
}

// ***********  Alerta de error  ***********
function alertWrong() {
    swal("Información inválida", "Por favor revisa nuevamente el formulario", "error");
}

// ***********  Alerta de éxito  ***********
function alertSuccess() {
    swal("Producto agregado :)", "Visualiza tu producto en el catálogo", "success");
}


btnEnviar.addEventListener("click", async function (element) {
    element.preventDefault();

    let esNombre = validarNombre();
    let esOrigen = validarOrigen();
    let esDescripcion = validarDescripcion();
    let esPrecio = validarPrecio();
    let esCategoria = validarCategoria();
    let esMaterial = validarMaterial();
    let esSugerencia = validarSugerencia();
    let esAdicional = validarAdicional();

    let esColor = validarColor();
    let esTalla = validarTalla();
    let esCantidad = validarCantidad();
    let esSku = validarSku();
    let esTipo = validarTipo();


    let esImagen1 = validarImagen1();
    let esImagen2 = validarImagen2();
    let esImagen3 = validarImagen3();

    if (esNombre && esOrigen && esDescripcion && esPrecio && esCategoria && esMaterial && esSugerencia && esAdicional && esColor && esTalla
        && esCantidad && esSku && esTipo && esImagen1 && esImagen2 && esImagen3) {
        swal({ title: "Validando información", text: "Por favor espera...", icon: "info", closeOnClickOutside: false, buttons: false });

        const data = {
            "adicional": adicionalInput.value.trim(),
            "cantidad": parseInt(cantidadInput.value),
            "color": parseInt(colorInput.value),
            "descripcion": descripcionInput.value.trim(),
            "imagen1": fileImage_1.value,
            "imagen2": fileImage_2.value,
            "imagen3": fileImage_3.value,
            "materiales": materialInput.value.trim(),
            "nombre": nombreInput.value.trim().toUpperCase(),
            "origen": origenInput.value.trim().toUpperCase(),
            "precio": parseFloat(precioInput.value), // Modificado para ser tratado como un número decimal
            "publico": parseInt(categoriaInput.value),
            "sku": skuInput.value.trim().toUpperCase(),
            "sugerencia": sugerenciaInput.value.trim(),
            "talla": parseInt(tallaInput.value),
            "tipo": tipoInput.value.trim().toUpperCase()
        };
        

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(data);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            const response = await fetch("https://kotomitl.onrender.com/api/productos/", requestOptions);
            const result = await response.text();

            if (response.ok) {
                swal.close();
                alertSuccess();
                limpiarCampos();
            } else {
                swal.close();
                alertWrong();
                // Actualizar estados de imágenes y estilos si es necesario
            }
        } catch (error) {
            console.log('error', error);
            swal.close();
            swal({ title: "Error en el registro", text: "Hubo un problema al registrar el producto.", icon: "error" });
            // Actualizar estados de imágenes y estilos si es necesario
        }
    } else {
        swal.close();
    }
});











/*
// ***********  Almacenamiento en localstorage  ***********

let listaProductos = new Array(); // para almacenar elementos de la tabla

function guardarStorage() {
    let producto = `
        {
        "id": 33,
        "title": "${nombreProductotxt}",
        "price": ${precioProductotxt},
        "description" : "${descripcionProductotxt}",
        "Origen" : "${origenProductotxt}",
        "image" : "${imagen_1}",
        "image2" : "${imagen_2}",
        "image3" : "${imagen_3}",
        "Desc1" : "${materialProductotxt}",
        "Desc2" : "${sugerenciaProductotxt}",
        "Desc3" : "${adicionalProductotxt}",
        "gen" : "${categoriaProductotxt}"
        }`;

    //convierte en objeto para almacenarlo
    listaProductos.push(JSON.parse(producto));

    // convierte objeto en string para localStorage
    localStorage.setItem("listaProductos", JSON.stringify(listaProductos));
}
*/

// ***********  Ejecución integral de las funciones  ***********

//============Guardar en el localStorage
/*
btnEnviar.addEventListener("click", function (element) {
    element.preventDefault();

    let esNombre = validarNombre();
    let esOrigen = validarOrigen();
    let esDescripcion = validarDescripcion();
    let esPrecio = validarPrecio();
    let esCategoria = validarCategoria();
    let esMaterial = validarMaterial();
    let esSugerencia = validarSugerencia();
    let esAdicional = validarAdicional();

    let esImagen1 = validarImagen1();
    let esImagen2 = validarImagen2();
    let esImagen3 = validarImagen3();

    if (esNombre && esOrigen && esDescripcion && esPrecio && esCategoria && esMaterial && esSugerencia && esAdicional && esImagen1 && esImagen2 && esImagen3) {
        guardarStorage();
        alertSuccess();
        borrarValidaciones();
        
        imageFile_1.src="";
        imageFile_1.style.display="none";
        container_1.style.border = "";
        document.getElementById("container_img_1").style.display = "flex";

        imageFile_2.src="";
        imageFile_2.style.display="none";
        container_2.style.border = "";
        document.getElementById("container_img_2").style.display = "flex";

        imageFile_3.src="";
        imageFile_3.style.display="none";
        container_3.style.border = "";
        document.getElementById("container_img_3").style.display = "flex";

    } else {
        alertWrong();
    }
})

window.addEventListener("load", function (event) {
    event.preventDefault();
    if (this.localStorage.getItem("listaProductos") != null) {
        // Obtener el arreglo del localStorage
        var listaProductosJSON = localStorage.getItem('listaProductos');

        // Convertir la cadena JSON nuevamente a un arreglo
        listaProductos = JSON.parse(listaProductosJSON);
    }
})
*/