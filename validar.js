function validar(){
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const correo = document.getElementById("correo").value;
    const usuario = document.getElementById("usuario").value;
    const telefono = document.getElementById("telefono").value;
    const contraseña = document.getElementById("pass").value;

    if (nombre === "" || apellidos === "" || correo === "" || usuario === "" || telefono === "" || contraseña === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }
    if (nombre.length>30) {
        alert("El nombre es muy largo");
        return false;
    } 
    if (apellidos.length>80) {
        alert("El apellido es muy largo");
        return false;
    }
    if (!correo.includes("@") || !correo.includes(".")) {
        alert("el correo debe poseer un ‘@’ y un punto ‘.’");
        return false;
    }
    if (correo.length>100) {
        alert("El correo es muy largo");
        return false;
    }
    if (usuario.length>20) {
        alert("El nombre de usuario es muy largo");
        return false;
    }
    if (telefono.length>15) {
        alert("El telefono es muy largo");
        return false;
    }
    if (!telefono.match(/^\d+$/g)) {
        alert("el telefono solo debe llevar numeros");
        return false;
    }


    alert(`nombre: ${nombre}, usuario: ${usuario}, password: ${contraseña}`)

}




