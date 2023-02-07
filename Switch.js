function toggleStyleSheet(){

    // Get the style element by ID and check its file name

    const styleElement = document.getElementById("mainStyleSheet");
    var filename = styleElement.getAttribute("href");

    // Determine  the new stylesheet file name

    var newFilename = "style2.css";
    if (filename == "style.css") {
        newFilename = "style2.css";
    } else {
        newFilename = "style.css";
    }

    // Replace the original stylesheet with a new stylesheet and save the new stylesheet name to localStorage

    styleElement.setAttribute("href", newFilename);
    localStorage.setItem("stylesheet", newFilename);
}

// Make the style persist even when someone refreshes the page

window.onload = function(){

    var filename = localStorage.getItem("stylesheet");
    var styleElement = document.getElementById("mainStyleSheet");
    styleElement.setAttribute("href", filename);
    
}


