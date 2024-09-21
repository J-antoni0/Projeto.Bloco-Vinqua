    
    let user = document.querySelector('input#usuario');
    let pass = document.querySelector('input#senha');
    
    window.onload = function() {

        setTimeout(function(){
            document.querySelector('main#container-inicial').classList.add('mostrar');
            /* Após 500 milissegundos, a classe "mostrar" é adicionada ao elemento,
           ativando a transição de opacidade e fazendo o elemento aparecer lentamente. */
           
        }, 500);
        
        
    }

    function acessar() {

        const acess = document.querySelector('input#botaoacessar');
        acess.classList.add('animate'); /* adiciona uma classe 'animate' */
        
        if (user.value == 0 || pass.value == 0) {
            window.alert  ('Usuário ou Senha Incorreto!');
            user.value = ('');
            pass.value = ('');
        }
        
        setTimeout(() => {
            acess.classList.remove('animate');
        }, 500);


    }
    