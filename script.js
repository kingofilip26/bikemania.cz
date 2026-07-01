const button = document.querySelector(".hamburger");
const list = document.querySelector(".menuHamburger");


button.addEventListener("click",()=>{
    list.classList.toggle("display");
    if(list.classList.contains("display")){
        button.value="☰";
    }
    else{
        button.value="X";
    }
})