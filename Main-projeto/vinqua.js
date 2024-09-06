    window.onload = function() {

        setTimeout(function(){
            document.querySelector('main#container-inicial').classList.add('mostrar');
            /* Após 500 milissegundos (500 milissegundos), a classe "mostrar" é adicionada ao elemento,
           ativando a transição de opacidade e fazendo o elemento aparecer lentamente. */
           setTimeout(digitarprimario(), 500);
        }, 500);
        
        
        let textoprimario = 'Bem-vindo()';
        let textosegundario = 'ao vinqua...';
        const pprimario = document.querySelector('p#p-primario');
        const psegundario = document.querySelector('p#p-segundario');
        
        let indexprimario = 0;
        let indexsegundario = 0;
        
        function digitarprimario() {
            if (indexprimario < textoprimario.length) {
                pprimario.innerHTML += textoprimario[indexprimario];
                indexprimario++;
                setTimeout(digitarprimario , 150); /* velocidade da digitação */
            } else {
                digitarsegundario(); /* chama a seg function para a ação */
            }
            
        }
        
        function digitarsegundario() {
            if (indexsegundario < textosegundario.length) {
                psegundario.innerHTML += textosegundario[indexsegundario];
                indexsegundario++;
                setTimeout(digitarsegundario , 150) /*  */
            }
        }
    }