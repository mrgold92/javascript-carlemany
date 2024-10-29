function addElement() {

    const lista = document.getElementById('lista');

    const nuevoElemento = document.createElement('li');
    nuevoElemento.className = 'list-group-item';

    const posicion = lista.children.length + 1;
    nuevoElemento.textContent = `Elemento ${posicion}`;
    lista.appendChild(nuevoElemento);


    nuevoElemento.style.opacity = '0';
    setTimeout(() => {
        nuevoElemento.style.transition = 'opacity 0.5s';
        nuevoElemento.style.opacity = '1';
    }, 10);
}