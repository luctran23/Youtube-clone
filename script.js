var activeBtn = document.getElementById('hamburgerBtn');
var activeBtn2 = document.getElementById('hamburgerBtn2');
var navLeft = document.getElementsByClassName('nav-left');
var navRight = document.getElementsByClassName('nav-right');
var blurDiv = document.getElementsByClassName('blur-div');
var rightSlider = document.getElementsByClassName('right-slider');
var sidebarSlider = document.getElementById('sidebar-slider');
var sidebarChild = document.getElementsByClassName('sidebar-child');
var bg = document.getElementById('dark-effect');
var darkEff = document.getElementById('dark-effect');
if (window.innerWidth > 1125) {
    if (bg.classList.contains('dark-background')) {
        bg.classList.remove('dark-background');
    }
}
activeBtn.addEventListener('click', function() {
    if(window.innerWidth > 1125){
        if(bg.classList.contains('dark-background')) {
            bg.classList.remove('dark-background');
        }
        darkEff.style.background = "transparent";
        if(navLeft[1].style.display === "block") {
            navLeft[1].style.display = "none";
            navRight[0].style.marginLeft = "240px";
            navLeft[0].style.display = "block";
            blurDiv[0].style.left = "988px";
            rightSlider[0].style.left = "1011px";
        }
        else {
            navLeft[1].style.display = "block";
            navLeft[0].style.display = "none";
            navRight[0].style.marginLeft = "83px";
            blurDiv[0].style.left = "1102px";
            rightSlider[0].style.left = "1145px";
        }    
    }
    else {
        openNav();
    }
});
activeBtn2.addEventListener('click', closeNav);


function openNav() {
        sidebarSlider.style.display = "block";
        sidebarSlider.style.width = "240px";
        sidebarChild[0].style.display = "block";
        bg.classList.add('dark-background');
        console.log(2);
    
}
function closeNav() {
    if(window.innerWidth < 1125) {
        sidebarSlider.style.display = "none";
        sidebarSlider.style.width = "0px";
        sidebarChild[0].style.display = "none !important";
        bg.classList.remove('dark-background');
        console.log(1);
    }
    
}
