function saludar() {
    const nombre = document.getElementById('nombreInput').value.trim();
    const mensajeDiv = document.getElementById('mensaje');
    if (nombre) {
        mensajeDiv.textContent = `¡Hola, ${nombre}! Bienvenido.`;
    } else {
        mensajeDiv.textContent = 'Por favor, introduce tu nombre.';
    }
}