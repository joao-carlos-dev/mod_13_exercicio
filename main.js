const saibaMaisButtons = document.querySelectorAll('.saiba-mais');

saibaMaisButtons.forEach(button => {
    button.addEventListener('click', (event)=> {
        event.preventDefault(); //evita que o link redirecione imediatamente

        //obtém o valor do atributodata-target
        const targetTabContentld = button.getAttribute('data-target');

        //encontra a tab correspondente
        const targetTabContent = document.querySelector(targetTabContentld);

        if (targetTabContent) {
            //remove a classe 'ctive' de todas as tabs
            tabContents.forEach(tab => tab.classList.remove('active'));

            //adiciona a classe 'active' a tab correspondente
            targetTabContent.classList.add('active');

            //encontra o botão de tab correspondete
            const targetTabButton = document.querySelector(`[data-bs-target="${targetTabContentld}"]`);

            if(targetTabButton) {
            //remove a classe 'active' de todos os botões    
                tabButtons.forEach(btn => btn.classList.remove('active'));
            
            //adiciona a classe 'active' ao botão de tab correspondete
                targetTabButton.classList.add('active');    
            }
        }
    });
});