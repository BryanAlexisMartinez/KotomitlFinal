let tablainfo = document.getElementById("tablainfo");

$(document).ready(function () {
    if (sessionStorage.getItem('estadoLogin') === 'true') {
        $.ajax({
            url: 'https://kotomitl.onrender.com/api/usuarios/',
            method: 'GET',
            success: function (data) {
                // Supongamos que el controlador devuelve un objeto JSON con los datos del usuario
                let usuario = data;

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
                        <!-- Resto de las filas con la misma estructura -->
                    </tbody>
                `);
            },
            error: function (error) {
                console.error('Error al obtener los datos del usuario: ', error);
            }
        });
    }
});