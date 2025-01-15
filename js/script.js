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

//Banner Auto Slide
var slideIndex = 1;  
showDivs(slideIndex);  
  
function plusDivs(n) {  
    showDivs(slideIndex += n);  
}  
  
function showDivs(n) {  
    var i;  
    var x = document.getElementsByClassName("img-slideshow");  
    if (n > x.length) {slideIndex = 1}  
    if (n < 1) {slideIndex = x.length}  
    for (i = 0; i < x.length; i++) {  
        x[i].style.display = "none";  
    }  
    x[slideIndex - 1].style.display = "block";  
}  

setInterval(function() {  
    showDivs(slideIndex += 1);  
}, 5000); 

//Jika data belum lengkap muncul validasi
document.getElementById("userForm").addEventListener("submit", function(event) {  
    event.preventDefault(); // Prevent form submission  
  
    // Clear previous error messages  
    var errorMessages = document.querySelectorAll(".error-message");  
    errorMessages.forEach(function(element) {  
        element.textContent = "";  
    });  
  
    var isValid = true;  
  
    // Validate name  
    var name = document.getElementById("sender-name").value.trim(); // Ensure the ID matches  
    if (!name) {  
        document.getElementById("name-error").textContent = "Name is required.";  
        isValid = false;  
    }  
  
    // Validate birthdate  
    var birthdate = document.getElementById("birthdate").value;  
    if (!birthdate) {  
        document.getElementById("birthdate-error").textContent = "Birthdate is required.";  
        isValid = false;  
    }  
  
    // Validate gender  
    var genderMale = document.getElementById("male").checked;  
    var genderFemale = document.getElementById("female").checked;  
    if (!genderMale && !genderFemale) {  
        document.getElementById("gender-error").textContent = "Gender is required.";  
        isValid = false;  
    }  
  
    // Validate message  
    var message = document.getElementById("message-content").value.trim();  
    if (!message) {  
        document.getElementById("message-error").textContent = "Message is required.";  
        isValid = false;  
    }  
  
    // If all inputs are valid, submit the form  
    if (isValid) {  
        // Optionally, you can display the values in the preview section  
        document.getElementById("sender-full-name").textContent = name;  
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        var formattedBirthdate = new Date(birthdate).toLocaleDateString('id-ID', options);
        document.getElementById("sender-birth-date").textContent = formattedBirthdate;
        document.getElementById("sender-gender").textContent = genderMale ? "Laki-Laki" : "Perempuan";  
        document.getElementById("sender-messages").textContent = message;  
  
        // Uncomment the line below to actually submit the form if needed  
        // this.submit();  
    }  
});  
