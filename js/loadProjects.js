function cargarTarjetas() {
  const urls = ['360', 'decision', 'handbook', 'https://youtu.be/X41ZfQ4Pt1A'];
  let count = 0;
  fetch('../DB/projects.json')
    .then((response) => response.json())
    .then((data) => {
      const contenedorTarjetas = document.getElementById('contenedor-tarjetas');

      data.forEach((producto) => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta';

        const imagen = document.createElement('img');
        imagen.src = producto.imagen;
        imagen.alt = producto.titulo;

        const titulo = document.createElement('h2');
        titulo.textContent = producto.titulo;

        const stack = document.createElement('span');
        stack.textContent = producto.stack;
        stack.className = 'stack';

        const descripcion = document.createElement('p');
        descripcion.textContent = producto.descripcion;

        const button = document.createElement('a');
        if (count === 3) {
          button.href = `${urls[count]}`;
        } else {
          button.href = `../projects/${urls[count]}/index.html`;
        }
        button.text = 'Try it';
        button.className = 'btn-contact';
        button.target = '_blank';

        tarjeta.appendChild(titulo);
        tarjeta.appendChild(imagen);
        tarjeta.appendChild(stack);
        tarjeta.appendChild(descripcion);
        tarjeta.appendChild(button);

        contenedorTarjetas.appendChild(tarjeta);
        count++;
      });
    })
    .catch((error) => console.error('Error al cargar el archivo JSON:', error));
}

// Cargar las tarjetas al cargar la página
document.addEventListener('DOMContentLoaded', cargarTarjetas);
