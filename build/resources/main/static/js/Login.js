// =========== VALIDACIÓN DE FORMULARIO DE LOGIN ===========
var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var btnEnviar = document.getElementById("btnEnviar");

var alert_email_login = document.getElementById("alert_email_login")
var alert_email_login_txt = document.getElementById("alert_email_login_txt")

var alert_password_login = document.getElementById("alert_password_login")
var alert_password_login_txt = document.getElementById("alert_password_login_txt")


// ***********  Alerta de error  ***********
function alertWrong() {
    swal("El correo y/o la contraseña no coinciden", "Por favor revisa nuevamente tus datos", "error");
}

// ***********  Alerta de éxito  ***********
function alertSuccess() {
    swal("Inicio de sesión exitoso", "", "success");
}

// ***********  Validación de email  ***********

function validarEmail() {
    let email = emailInput.value.trim().toLowerCase();

    let regexEmail = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    //elementos de validación limpios
    emailInput.style.border = "";
    alert_email_login.style.display = "none";
    alert_email_login_txt.innerHTML = "";

    if (regexEmail.test(email)) {
        emailInput.style.border = "solid 2px green";
        return true;
    } else {
        alert_email_login_txt.insertAdjacentHTML("afterbegin", `E-mail incorrecto`);
        alert_email_login.style.display = "flex";
        emailInput.style.border = "solid 2px rgb(186, 3, 3)";
        return false;
    }
}

emailInput.addEventListener("change", function (element) {
    element.preventDefault();
    validarEmail();
})
// ***********  Validación de Password  ***********

function validarPassword() {
    let regexpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&-_/]{8,15}/;
    let password = passwordInput.value;

    //elementos de validación limpios
    passwordInput.style.border = "";
    alert_password_login.style.display = "none";
    alert_password_login_txt.innerHTML = "";

    if (password.length > 7 && password.length < 16 && regexpassword.test(password)) {
        passwordInput.style.border = "solid 2px green";
        return true;
    } else {
        alert_password_login_txt.insertAdjacentHTML("afterbegin", `Contraseña incorrecta`);
        alert_password_login.style.display = "flex";
        passwordInput.style.border = "solid 2px rgb(186, 3, 3)";
        return false;
    }
}

passwordInput.addEventListener("change", function (element) {
    element.preventDefault();
    validarPassword();
})

// ***********  Integración de validaciones en botón de envío  ***********


btnEnviar.addEventListener("click", function () {
    // Se obtienen los valores de los campos del formulario
    let email = emailInput.value.trim().toLowerCase();
    let password = passwordInput.value.trim();

    let esEmail = validarEmail();
    let esPassword = validarPassword();

    if (esEmail && esPassword) {
        // Construir los datos a enviar en el cuerpo de la solicitud
        swal({ title: "Validando información", text: "Por favor espera...", icon: "info", closeOnClickOutside: false, buttons: false });
        let data = new URLSearchParams();
        data.append("email", email);
        data.append("password", password);

        fetch("/api/usuarios/login", {
            method: "POST",
            body: data,
        })
        .then(response => {
            if (response.ok) {
                swal.close();
                return response.text(); // "Inicio de sesión exitoso"
            } else if (response.status === 401) {
                swal.close();
                throw new Error("Credenciales incorrectas");
            } else {
                swal.close();
                throw new Error("Error en la solicitud");
            }
        })
        .then(message => {
            // Aquí puedes manejar la respuesta exitosa
            sessionStorage.setItem('estadoLogin', true);
            sessionStorage.setItem('welcome', true);
            sessionStorage.setItem('userLogin', email); // Cambiar a lo que corresponda

            emailInput.style.border = "";
            alert_email_login.style.display = "none";
            alert_email_login_txt.innerHTML = "";
            emailInput.value = "";

            passwordInput.style.border = "";
            alert_password_login.style.display = "none";
            alert_password_login_txt.innerHTML = "";
            passwordInput.value = "";

            setTimeout(function () {
                window.location.href = "https://kotomitl.onrender.com/index.html";
            }, 1000);
        })
        .catch(error => {
            // Aquí puedes manejar errores
            alertWrong();
            alert_password_login.style.display = "flex";
            alert_password_login.style.color = "rgb(217 162 7)";
            passwordInput.style.border = "solid 2px rgb(217 162 7)";

            alert_email_login.style.display = "flex";
            alert_email_login.style.color = "rgb(217 162 7)";
            emailInput.style.border = "solid 2px rgb(217 162 7)";
        });
    }
});
