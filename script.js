
function toggleBody(){
    const body = document.body
    body.classList.toggle("light")
    body.style.transition = "all 0.5s"

    const img = document.querySelector("img")

    if (body.classList.contains("light")){
        img.setAttribute("src", "./assets/logo-light.png")
    }else{
        img.setAttribute("src", "./assets/logo.png")
    }
}