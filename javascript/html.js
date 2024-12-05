 // Fungsi untuk menampilkan section berdasarkan ID yang dipilih
 function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(function (section) {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}
// JavaScript for the click-to-zoom and show caption functionality
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        // Toggle the 'active' class to zoom the image and show the caption when clicked
        this.classList.toggle('active');
        
        // Optionally, close the active state if another image is clicked
        galleryItems.forEach(otherItem => {
            if (otherItem !== this) {
                otherItem.classList.remove('active');
            }
        });
    });
});

// Fungsi untuk menutup tampilan sambutan
function closeWelcomeScreen() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('main-welcome').style.display = 'block';
}

// Toggle the visibility of the menu on smaller screens
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

// Optionally, you can add this function for handling the form search submission
function searchData(event) {
    event.preventDefault();
    // Your search logic here
}

// Typing Effect for Welcome Screen
const welcomeMessage = "SELAMAT DATANG DI KELAS KAMI";
let index = 0;
const typingElement = document.getElementById("typing-effect");

function typeWriter() {
    if (index < welcomeMessage.length) {
        typingElement.innerHTML += welcomeMessage.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Adjust typing speed here
    }
}

function removeWelcomeScreen() {
    const welcomeScreen = document.getElementById('welcomeScreen');
    welcomeScreen.classList.add('hidden');
}