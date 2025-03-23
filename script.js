document.addEventListener("DOMContentLoaded", function() {
    const menuDisciplinas = document.querySelectorAll('.menu-disciplinas ul li a');
    menuDisciplinas.forEach(item => {
        item.addEventListener('click', function(event) {
            alert(`Você selecionou a disciplina: ${item.textContent}`);
        });
    });

    const menuConteudos = document.querySelectorAll('.menu-conteudos ul li a');
    menuConteudos.forEach(item => {
        item.addEventListener('click', function(event) {
            alert(`Você selecionou o conteúdo: ${item.textContent}`);
        });
    });
});