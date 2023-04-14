function theme(){
    let bodyEl = document.body

    bodyEl.classList.toggle("darkMode")

    let theme;
    
    if(bodyEl.classList.contains("darkMode")){
        theme = "DARK"
    }
    else{
        theme = "Light"
    }

    localStorage.setItem("theme",JSON.stringify(theme))
}
let getTheme = JSON.parse(localStorage.getItem("theme"))

if(getTheme === "DARK"){
    document.body.classList.add("darkMode")
}
