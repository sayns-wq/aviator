

    
   const menubar = document.querySelector('.menubar');
   
   const navBar = document.querySelector('.container-fluid')
   const cascadMenu = document.querySelector('.cascad-menu')
    function hideCascadeShowNav(Cascadeselector, navBarSelector, cascadMenuSelector){
        Cascadeselector.style.display = 'none';
        navBarSelector.style.display = '';
        cascadMenuSelector.style.display = 'none';
        
    }
    function showCascadeHideNav(Cascadeselector, navBarSelector, cascadMenuSelector){
        Cascadeselector.style.display = '';
        navBarSelector.style.display = 'none';
        cascadMenuSelector.style.display = '';
        menubar.style.position = 'absolute';
        menubar.style.top = '0'
       
    }
    hideCascadeShowNav(menubar, navBar, cascadMenu);
   function adaptiveScreen() {
    const screenWidth = window.screen.width

    if(screenWidth < 500){
        
        showCascadeHideNav(menubar, navBar, cascadMenu);
    } else{
        hideCascadeShowNav(menubar, navBar, cascadMenu);
        
    }
   }
  
   adaptiveScreen();
   window.addEventListener('resize',adaptiveScreen);
   
