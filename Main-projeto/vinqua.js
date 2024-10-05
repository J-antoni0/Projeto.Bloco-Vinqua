    
    let user = document.querySelector('input#usuario');
    let pass = document.querySelector('input#senha');
    let contseg = document.querySelector('span#cont-seg');
    
    window.onload = function() {

        setTimeout(function(){
            document.querySelector('main#container-inicial').classList.add('mostrar');
            /* Após 500 milissegundos, a classe "mostrar" é adicionada ao elemento,
           ativando a transição de opacidade e fazendo o elemento aparecer lentamente. */
           
        }, 500);
        
        
    }

    function acessar() {
        
        if (user.value.length < 5 || pass.value.length < 5) {  /* se o input tiver menos que 5 caracteres*/
            alert  ('Usuário ou Senha Incorreto!');  /*vai alertar na saída*/
            user.value = ('');  /* vai fazer o reset nos input's */
            pass.value = ('');
        } else {
            
            document.querySelector('div#container-do-carregador').style.display = 'flex';  /*vai fazer aparecer o pai do elemento que tem efeito de carregamento */
            document.querySelector('main#container-inicial').style.display = 'none'; /* vai desabilitar o elemento main da tela de saida */
            
            setTimeout(() => {
                document.querySelector('div#container-do-carregador').style.display = 'none'; /* desativa o pai do elemento de carregamento */
            }, 1500);
            
            user.value = ('');
            pass.value = ('');
            
            setTimeout(() =>{
            contseg.style.display = 'flex'
            }, 1500);
        }
        
        const acess = document.querySelector('input#botaoacessar');
        acess.classList.add('animate'); /* adiciona uma classe 'animate' */
        setTimeout(() => {
            acess.classList.remove('animate');  /*  */
        }, 500);
        
    }
    