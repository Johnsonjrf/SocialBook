
var darkBtn = document.querySelector("#dark-btn")
var settingsMenu = document.querySelector(".settings-menu")
// var innerSettings = document.querySelector("settings-menu-inner")
document.querySelector(".nav-user-icon.online").addEventListener("click", (e) => {
    
    
    settingsMenu.classList.toggle("settings-menu-height")
    // console.log(settingsMenu)
    // if (settingsMenu.style.maxHeight === " ") {
    //     // settingsMenu.style.display = "none"
    //     alert("working")
    // } else {
    //     settingsMenu.style.display = "initial"
    // }
})

document.querySelector("#dark-btn span").addEventListener("click", () => {
    
    // var body =  document.querySelector(".body")
    darkBtn.classList.toggle("dark-btn-on")
    document.body.classList.toggle("dark-theme")
    // innerSettings.classList.toggle("dark")


    if(localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark")
    } else {
        localStorage.setItem("theme", "light")
    }


    
})



if (localStorage.getItem("theme") == "light") {
    darkBtn.classList.remove("dark-btn-on")
    document.body.classList.remove("dark-theme")
} else if (localStorage.getItem("theme") == "dark") {
    darkBtn.classList.add("dark-btn-on")
    document.body.classList.add("dark-theme")
} else {
    localStorage.setItem("theme", "light")
}


// document.querySelector(".nav-user-icon.online").addEventListener("click", (e) => {
//     document.querySelector(".settings-menu").style.display = "initial"
// })