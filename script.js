const imagemprincipal= document.getElementByld('imagem-principal');
const miniaturas = document.querySelectorAll('.miniatura')
miniaturas.forEach(miniatura => {miniatura.addEventListener('click', function(){const novaImagem = this.getAttribute('data-imagem'); imagemprincipal.src = novaImagem})})

