/********************************************* FORMULARIO *******************************************************/

const nombreInput = document.getElementById('nombre')
const apellidoInput = document.getElementById('apellido')
const telefonoInput = document.getElementById('telefono')
const emailInput = document.getElementById('email')
const formulario = document.getElementById('formulario')
const producto = document.getElementById('producto')
const plazo = document.getElementById('plazo')
const extra = document.querySelectorAll('.extras')
const presupuestoFinal = document.getElementById('presupuestoFinal')


function validarNombre() {
    const nombre = nombreInput.value;
    const nombrePattern = /^[a-zA-Z]*$/;
    if (nombre.length > 0 && nombre.length <= 15 && nombrePattern.test(nombre)) {
        nombreInput.classList.add('valido');
        nombreInput.classList.remove('invalido');
        document.getElementById('nombreError').textContent = '';
        return true;
    } else {
        nombreInput.classList.add('invalido');
        nombreInput.classList.remove('valido');
        document.getElementById('nombreError').textContent = 'El nombre del usuario sólo podrá contener letras y tendrá una longitud máxima de 15 caracteres.';
        return false;
    }
}

function validarApellido() {
    const apellido = apellidoInput.value;
    const apellidoPattern = /^[a-zA-Z]*$/;
    if (apellido.length > 0 && apellido.length <= 40 && apellidoPattern.test(apellido)) {
        apellidoInput.classList.add('valido');
        apellidoInput.classList.remove('invalido');
        document.getElementById('apellidoError').textContent = '';
        return true;
    } else {
        apellidoInput.classList.add('invalido');
        apellidoInput.classList.remove('valido');
        document.getElementById('apellidoError').textContent = 'El apellido del usuario sólo podrá contener letras y tendrá una longitud máxima de 40 caracteres.';
        return false;
    }
}

function validarTelefono() {
    const telefono = telefonoInput.value;
    const telefonoPattern = /^\d{9}$/;
    if (telefonoPattern.test(telefono)) {
        telefonoInput.classList.add('valido');
        telefonoInput.classList.remove('invalido');
        document.getElementById('telefonoError').textContent = '';
        return true;
    } else {
        telefonoInput.classList.add('invalido');
        telefonoInput.classList.remove('valido');
        document.getElementById('telefonoError').textContent = 'El número de teléfono debe tener 9 dígitos y contener sólo números.';
        return false;
    }
}

function validarEmail() {
    const email = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
        emailInput.classList.add('valido');
        emailInput.classList.remove('invalido');
        document.getElementById('emailError').textContent = '';
        return true;
    } else {
        emailInput.classList.add('invalido');
        emailInput.classList.remove('valido');
        document.getElementById('emailError').textContent = 'Ingrese un correo electrónico válido.';
        return false;
    }
}

function validar_producto() {
    const productoValue = producto.value;
    if (productoValue != 'valor') {
        producto.classList.add('valido');
        producto.classList.remove('invalido');
        document.getElementById('productError').textContent = '';
        return true;
    } else {
        producto.classList.add('invalido');
        producto.classList.remove('valido');
        document.getElementById('productError').textContent = 'Selecione un producto válido.';
        return false;
    }
}




function actualizarValores() {
    validar_producto()
    let cuenta = 0;
    extra.forEach(element => {
        if (element.checked) {
            cuenta += parseInt(element.value);
        }
    });


    // Validar que el producto tenga un valor numérico válido
    const productoValue = parseInt(producto.value);
    if (isNaN(productoValue) || productoValue <= 0) {
        presupuestoFinal.textContent = 'Seleccione un producto válido';
        return;
    } else {
        presupuestoFinal.classList.remove('error-message'); // Remover clase de error si es válido
    }

    // Validar que el plazo tenga un valor numérico válido y no sea cero
    const plazoValue = parseInt(plazo.value);
    if (isNaN(plazoValue) || plazoValue <= 0) {
        presupuestoFinal.textContent = 'Ingrese un plazo válido';
        return;
    } else {
        presupuestoFinal.classList.remove('error-message'); // Remover clase de error si es válido
    }

    // Calcular el total
    const total = (productoValue + cuenta) / plazoValue;

    // Formatear el resultado a dos decimales
    const totalFormatted = total.toFixed(2);

    // Mostrar la operación en el <span>
    presupuestoFinal.textContent = `€ ${totalFormatted}`;
    presupuestoFinal.classList.remove('error-message'); // Asegurarse de que no tenga la clase de error
}



//Validación de Formulario
function resetFormulario() {
    formulario.reset()
    nombreInput.classList.remove('valido')
    apellidoInput.classList.remove('valido')
    telefonoInput.classList.remove('valido')
    emailInput.classList.remove('valido')

}

nombreInput.addEventListener('input', validarNombre)
apellidoInput.addEventListener('input', validarApellido)
telefonoInput.addEventListener('input', validarTelefono)
emailInput.addEventListener('input', validarEmail)
producto.addEventListener('change', actualizarValores)
plazo.addEventListener('change', actualizarValores)
extra.forEach(element => { element.addEventListener('change', actualizarValores) })



formulario.addEventListener('submit', function (event) {
    event.preventDefault()
    validarNombre()
    validarApellido()
    validarTelefono()
    validarEmail()
    validar_producto()




    if (nombreInput.classList.contains('valido') && apellidoInput.classList.contains('valido') && telefonoInput.classList.contains('valido') && emailInput.classList.contains('valido') && presupuestoFinal.textContent != '') {
        alert('Formulario enviado correctamente')
        resetFormulario()
        //Donde debe ir lo quieres enviar. La lógica de a que lugar lo quieres enviar o para que se ha creado el formulario
    } else {
        alert('Por favor, corrija los errores en el formulario')
    }
})





