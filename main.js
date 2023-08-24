const saibaMaisButtons = document.querySelectorAll('.saiba-mais');
console.log(saibaMaisButtons)

saibaMaisButtons.forEach(button => {
    button.addEventListener('click', (event)=> {
        //evita que o link redirecione imediatamente

        //obtém o valor do atributo-target
        const targetTabContentld = button.getAttribute('data-bs-target');
        localStorage.setltem('targetTabContentld', targetTabContentld);
        console.log(targetTabContentld)
    });
});
