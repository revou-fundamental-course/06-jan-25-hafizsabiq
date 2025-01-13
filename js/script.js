window.onload = function() {
    var userName = prompt("Please enter your name:");
    var nameSpan = document.getElementById("name");
    if (userName) {
        if (nameSpan) {
            nameSpan.textContent = userName;
        }
    } else {
        if (nameSpan) {
            nameSpan.textContent = "Visitor";
        }
    }
};