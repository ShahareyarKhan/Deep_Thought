document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("toggleButton");
    var close= document.getElementById("close");
    var sidebar = document.getElementById("sidebar");

    toggleButton.addEventListener("click", function() {
        if (sidebar.classList.contains("visible")) {
            sidebar.classList.remove("visible");
        } else {
            sidebar.classList.add("visible");
        }
    });
    
    close.addEventListener("click", function() {
        if (sidebar.classList.contains("visible")) {
            sidebar.classList.remove("visible");
        } else {
            sidebar.classList.add("visible");
        }
    });
});
