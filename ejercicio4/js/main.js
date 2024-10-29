let isTextVisible = false;

function toggleText() {  
    const additionalText = document.querySelector('.additional');
    const toggleLink = document.querySelector('.abtn');
  
    isTextVisible = !isTextVisible;
    
   
    if (isTextVisible) {
        additionalText.classList.remove('hidden');
        additionalText.classList.add('visible');
        toggleLink.textContent = 'Ocultar exceso de texto';
    } else {
        additionalText.classList.remove('visible');
        additionalText.classList.add('hidden');
        toggleLink.textContent = 'Seguir leyendo';
    }
    
    return false;
}