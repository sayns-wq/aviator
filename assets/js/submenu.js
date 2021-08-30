let subCall = document.getElementById("submenu"),
    submenu = document.getElementById("submenu_1"),
    submenu2 = document.getElementById("submenu2"),
    submenuBlock = document.getElementById("submenu_2");
 
    
subCall.onmousemove = function(){
    submenu.style.height="7vh";
    submenu.style.zIndex=1;
};
submenu.onmouseout = function(e){
    submenu.style.height="0";
};
subOpen = () =>{
    submenu.style.height="7vh";
    submenu.style.zIndex=1;
};
subCall.onmouseout = function(e){   
    submenu.style.height="0";
};

submenu2.onmousemove = function(){
    submenuBlock.style.height="7vh";
    submenuBlock.style.zIndex=1;
};
submenuBlock.onmouseout = function(e){
        submenuBlock.style.height="0";
};
subOpen2 = () =>{
    submenuBlock.style.height="7vh";
    submenuBlock.style.zIndex=1;
};
submenu2.onmouseout = function(e){
    submenuBlock.style.height="0";
};




// const events = document.querySelector('.short-events'),
//       wrapper = document.querySelector('.wrapper'),
//       bt = wrapper.querySelector('#footer_click');


// wrapper.addEventListener('click',(e)=>{
//     let target = e.target;
//     let div = document.createElement('div');
//     div.classList.add('short-events');
//     div.style.height="9vh";
//     if (target.tagName == 'BUTTON'){

//         div.innerHTML = `
//             <p>Авиатор запусти новый сайт! <br> Есссссссссссс</p>
//         `;
//         document.querySelector('.desktop').append(div);
//     }
// })


// const modalTimer = setTimeout(openModal,6000);





