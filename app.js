import './style.css'

var colors = document.getElementById("colors");
var setter = document.getElementById("setColorVisible");

setter.addEventListener("click", function(){
    if (colors.style.display === "none"){
        colors.style.display = "block"
    }else{
        colors.style.display = "none"
    }
})


