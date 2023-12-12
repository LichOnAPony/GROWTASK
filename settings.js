//menu
let classMenuLink = document.getElementsByClassName("menuLink").style;

function menu(){
    document.getElementById("menuList").classList.toggle("menuview");
    document.getElementById("nav").classList.toggle("menuBlock");
    document.getElementById("nav__scroll").classList.toggle("displayNone");
    document.getElementById("menuTitle").classList.toggle("menuTitleVisible");
    document.getElementById("mobileMenu").classList.toggle("monileMenuView");
    for(let i=0; i<4; i++){
        document.getElementsByClassName('link')[i].classList.toggle("paddingMenuMobile");
        if (i == 3){
            document.getElementsByClassName('link')[i].classList.toggle("margin-LastChild");
        }
    }
    document.getElementById("toForm").classList.toggle("menuToForm");
    document.getElementById("menuMessengers").classList.toggle("menu__messengers-visible");
    document.getElementById("menuImg").classList.toggle("imageMenu");
}

// slider

let slider = document.getElementById("slider");
let item = slider.getElementsByClassName("slider__container_item");

function next(){
    slider.append(item[0]);
}
function back(){
    slider.prepend(item[item.length-1]);
}

// questions

let score1 = 0;
let score2 = 0;
let score3 = 0;
let score4 = 0;
const styleTextVisible = document.getElementsByClassName("questions__text").style;
function viewText1(){
    score1 = score1 + 1;
    if (score1 % 2 == 0){
        document.getElementById("hidden1").style.display ="none";
        document.getElementById('questions__img1').src = 'images/plus.png'
        document.getElementById("text-visible1").style = styleTextVisible;
    }else{
        document.getElementById("hidden1").style.display ="block";
        document.getElementById('questions__img1').src = 'images/krest.png'
        document.getElementById("text-visible1").style.color = 'var(--clr-text-dark)';
    }
}

function viewText2(){
    score2 = score2 + 1;
    if (score2 % 2 == 0){
        document.getElementById("hidden2").style.display ="none";
        document.getElementById('questions__img2').src = 'images/plus.png'
        document.getElementById("text-visible2").style = styleTextVisible;
    }else{
        document.getElementById("hidden2").style.display ="block";
        document.getElementById('questions__img2').src = 'images/krest.png'
        document.getElementById("text-visible2").style.color = 'var(--clr-text-dark)';
    }
}
function viewText3(){
    score3 = score3 + 1;
    if (score3 % 2 == 0){
        document.getElementById("hidden3").style.display ="none";
        document.getElementById('questions__img3').src = 'images/plus.png'
        document.getElementById("text-visible3").style = styleTextVisible;
    }else{
        document.getElementById("hidden3").style.display ="block";
        document.getElementById('questions__img3').src = 'images/krest.png'
        document.getElementById("text-visible3").style.color = 'var(--clr-text-dark)';
    }
}
function viewText4(){
    score4 = score4 + 1;
    if (score4 % 2 == 0){
        document.getElementById("hidden4").style.display ="none";
        document.getElementById('questions__img4').src = 'images/plus.png'
        document.getElementById("text-visible4").style = styleTextVisible;
    }else{
        document.getElementById("hidden4").style.display ="block";
        document.getElementById('questions__img4').src = 'images/krest.png'
        document.getElementById("text-visible4").style.color = 'var(--clr-text-dark)';
    }
}


