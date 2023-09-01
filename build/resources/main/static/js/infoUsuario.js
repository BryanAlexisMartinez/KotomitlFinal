// Función para insertar elementos en la tabla
function insertarElementosEnTabla(usuario) {
    // Limpia la tabla antes de agregar datos
    tablainfo.innerHTML = '';

    // Obtén los valores del usuario del objeto 'usuario'
    let nombre = usuario.nombre;
    let apellido = usuario.apellido;
    let telefono = usuario.telefono;
    let email = usuario.email;
    let domicilio = usuario.domicilio;
    let estado = usuario.estado;

    // Inserta los valores en la tabla
    tablainfo.insertAdjacentHTML("beforeend", `
                <tbody>
                <!-- ================= Nombre usuario ============== -->
                <tr>
                <td>
                    <div>
                        <label for="nombre" class="form-label" style="color:black;">
                            <h3>Nombre:</h3>
                        </label>
                    </div>
                </td>
                <th style="text-align: right;">
                    <div>
                        <h3>${nombre}<a href="#"></a></h3>
                    </div>
                </th>
            </tr>
            <!-- ================= Apellido usuario ============== -->
            <tr>
                <td>
                    <div>
                        <label for="apellido" class="form-label" style="color:black;">
                            <h3>Apellido:</h3>
                        </label>
                    </div>
                </td>
                <th style="text-align: right;">
                    <div>
                        <h3>${apellido}<a href="#"></a></h3>
                    </div>
                </th>
            </tr>
            <!-- ================= Telefono usuario ============== -->
            <tr>
                <td>
                    <div>
                        <label for="telefono" class="form-label" style="color:black;">
                            <h3>Teléfono:</h3>
                        </label>
                    </div>
                </td>
                <th style="text-align: right;">
                    <div>
                        <h3>${telefono}<a href="#"></a></h3>
                    </div>
                </th>
            </tr>
            <!-- ================= Email usuario ============== -->
            <tr>
                <td>
                    <div>
                        <label for="email" class="form-label" style="color:black;">
                            <h3>Correo electrónico:</h3>
                        </label>
                    </div>
                </td>
                <th style="text-align: right;">
                    <div>
                        <h3>${email}<a href="#"></a></h3>
                    </div>
                </th>
            </tr>
            <!-- ================= Password usuario ============== -->
            <tr>
                <td>
                    <div>
                        <label for="password" class="form-label" style="color:black;">
                            <h3>Contraseña:</h3>
                        </label>
                    </div>
                </td>
                <th style="text-align: right;">
                    <div>
                        <h3>Actualizar contraseña <a href="#"></a></h3>
                    </div>
                </th>
            </tr>
            <!-- ================= Domicilio usuario ============== -->
            <tr>
                <td>
                    <div>
                        <label for="password" class="form-label" style="color:black;">
                            <h3>Domicilio:</h3>
                        </label>
                    </div>
                </td>
                <th style="text-align: right;">
                    <div>
                        <h3>${domicilio}<a href="#"></a></h3>
                    </div>
                </th>
            </tr>
            <!-- ================= Estado usuario ============== -->
            <tr>
                <td>
                    <div>
                        <label for="password" class="form-label" style="color:black;">
                            <h3>Estado:</h3>
                        </label>
                    </div>
                </td>
                <th style="text-align: right;">
                    <div>
                        <h3>${estado}<a href="#"></a></h3>
                    </div>
                </th>
            </tr>
                <!-- Resto de las filas con la misma estructura -->
            </tbody> 
                `);
}

function obtenerDatosUsuario() {
    if (sessionStorage.getItem('estadoLogin') === 'true') {
        $.ajax({
            url: '/api/usuarios/perfil', // Ruta para obtener el perfil del usuario
            method: 'GET',
            success: function (data) {
                // Supongamos que el controlador devuelve un objeto JSON con los datos del usuario
                let usuario = data;
                insertarElementosEnTabla(usuario);
            },
            error: function (error) {
                console.error('Error al obtener los datos del usuario: ', error);
            }
        });
    }
}