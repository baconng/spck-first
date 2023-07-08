let nav = document.getElementById("nav");

window.addEventListener('scroll', function() {
    if(window.scrollY > 100){
        nav.style.backgroundColor = "WHITE";
        nav.style.color = 'white'
        console.log("scroll")
    }
    else{
        nav.style.backgroundColor = "transparent";

    }
    // console.log(window.scrollY);
})