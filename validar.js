function validar(){
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const correo = document.getElementById("correo").value;

    if (nombre === "" || apellidos === "") {
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


    alert(saludo);
}




