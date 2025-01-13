// Fungsi Input nama
function nameInput() {
    var userName = prompt("Please enter your name:");
    var nameSpan = document.getElementById("name");
    if (userName) {
        if (nameSpan) {
            nameSpan.innerHTML = userName;
        }
    } else {
        if (nameSpan) {
            nameSpan.innerHTML = "Visitor";
        }
    }
}

// Fungsi Input nama terbuka saat website dimuat
window.onload = nameInput;

// Tombol ganti nama
document.getElementById("Change Name").addEventListener("click", function () {
    nameInput();
});