    /*================================ Mostrar menu e esconder ===================================*/
    const navMenu = document.getElementById('nav-menu'),
          navToggle = document.getElementById('nav-toggle'),
          navClose = document.getElementById('na-close'),
    
    /*================================ Mostrar menu ===================================*/
    /*  Validar o if se existir uma constante  */
    if (navToggle) {
        navToggle,addEventListener('click',()=>{
            navMenu.classList.add('show-menu')
        } )
        
    }
    
    /*================================ Esconder o menu ===================================*/
    /*  Validar o if se existir uma constante  */
    
    






position: fixed;
bottom: 0;
left: 0;
width: 100%;
background-color: var(--body-color);
padding: 2rem 1.5 4rem;
box-shadow: 0 -1px 4px rgba(0,0,0,.15);
border-radius: 1.5rem 1.5rem 0 0;
transition: .3s;