function toggleStyleSheet(){

    const styleElement = document.getElementById("mainStyleSheet");
    var filename = styleElement.getAttribute("href");

    var newFilename = "style2.css";
    if (filename == "style.css") {
        newFilename = "style2.css";
    } else {
        newFilename = "style.css";
    }

    styleElement.setAttribute("href", newFilename);
    localStorage.setItem("stylesheet", newFilename);
}


window.onload = function(){

    var filename = localStorage.getItem("stylesheet");
    var styleElement = document.getElementById("mainStyleSheet");
    styleElement.setAttribute("href", filename);
    
}


