var flag_food = true;
var flag_drink = true;

let open_food_menu = () =>{
    if( window.innerWidth > 1024){
        if(document.getElementById('menu_drink_show').style.width !='52%' && flag_drink){
        document.getElementById('menu_drink_show').style.width = "52%";
        flag_food = false;
        }
        else if(document.getElementById('menu_drink_show').style.width !='0%' && flag_drink){
            document.getElementById('menu_drink_show').style.width = "0%";
            flag_food = true;
            }
    }
    else{if(document.getElementById('menu_drink_show').style.width !='105%' && flag_drink){
        document.getElementById('menu_drink_show').style.width = "105%";
        flag_food = false;
        }
        else if(document.getElementById('menu_drink_show').style.width !='0%' && flag_drink){
            document.getElementById('menu_drink_show').style.width = "0%";
            flag_food = true;
            }}
         //  else{document.getElementById('menu_drink_show').style.width = "0%";flag = true}
};

let open_drinking_menu = () =>{
    if( window.innerWidth > 1024){
    if(document.getElementById('menu_food_show').style.width !='50%' && flag_food){
    document.getElementById('menu_food_show').style.width = "50%";
    flag_drink = false;
    }
    else if(document.getElementById('menu_food_show').style.width !='0%' && flag_food){
        document.getElementById('menu_food_show').style.width = "0%";
        flag_drink = true;
        }
    }
    else{if(document.getElementById('menu_food_show').style.width !='100%' && flag_food){
        document.getElementById('menu_food_show').style.width = "100%";
        flag_drink = false;
        }
        else if(document.getElementById('menu_food_show').style.width !='0%' && flag_food){
            document.getElementById('menu_food_show').style.width = "0%";
            flag_drink = true;
            }}
   // else{document.getElementById('menu_food_show').style.width = "0%";flag = true}
};


let cascade_menu = (id) =>{
    let change_color_of_name_id = "menu_position_" + id;
    var h = document.getElementById(id).offsetHeight;
    
    if(document.getElementById(id).style.height !='300px' ){
        document.getElementById(id).style.height = '300px';
        document.getElementById(change_color_of_name_id).style.color = '#CD853F';
        }
        else {
            document.getElementById(id).style.height = "0px";
            document.getElementById(change_color_of_name_id).style.color = '#000000';
            }
}



