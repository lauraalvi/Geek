document.getElementById('enviar').addEventListener('click', function() {
    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const imagen = document.getElementById('imagen').files[0];
    
    if (nombre && precio && imagen) {
        // Crear un nuevo elemento de producto
        const nuevoProducto = document.createElement('div');
        nuevoProducto.classList.add('ramo');
        
        // Crear imagen
        const imgElement = document.createElement('img');
        imgElement.src = URL.createObjectURL(imagen);
        
        // Crear nombre y precio
        const nombreElement = document.createElement('h3');
        nombreElement.textContent = nombre;
        const precioElement = document.createElement('h4');
        precioElement.textContent = `$ ${precio}`;
        
        // Añadir ícono de carrito
        const iconElement = document.createElement('box-icon');
        iconElement.setAttribute('name', 'basket');
        
        // Añadir elementos al nuevo producto
        nuevoProducto.appendChild(imgElement);
        nuevoProducto.appendChild(nombreElement);
        nuevoProducto.appendChild(precioElement);
        nuevoProducto.appendChild(iconElement);
        
        // Añadir el nuevo producto a la lista
        document.querySelector('.misProductos').appendChild(nuevoProducto);
        
        // Limpiar los campos de texto e imagen
        document.getElementById('nombre').value = '';
        document.getElementById('precio').value = '';
        document.getElementById('imagen').value = null;
    } else {
        alert('Por favor completa todos los campos');
    }
});

document.getElementById('limpiar').addEventListener('click', function() {
    // Limpiar los campos de texto e imagen
    document.getElementById('nombre').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('imagen').value = null;
});
