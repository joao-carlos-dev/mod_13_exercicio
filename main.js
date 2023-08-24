window.onload = function() {
    var hash = window.location.hash;
    var tabContent = document.querySelectorAll('.tabela');
    console.log(hash)

for (var i = 0; i < tabContent.length;i++) {
    tabContent[i].classList.remove('active');
}

if (hash) {
    document.querySelector(hash).classList.add('active');
    document.querySelector(hash+'1').classList.add('active');
    console.log(hash)
    console.log(hash+'1')

} else {
    tabContent[0].classList.add('active');
}
};


// const saibaMaisButtons = document.querySelectorAll('.saiba-mais');
// console.log(saibaMaisButtons)

// saibaMaisButtons.forEach(button => {
//     button.addEventListener('click', (event)=> {
//          //evita que o link redirecione imediatamente

//          //obtém o valor do atributo-target
//         const targetTabContentld = button.getAttribute('data-bs-target');
//         localStorage.setltem('targetTabContentld', targetTabContentld);
//         console.log(targetTabContentld)
//     });
// });
