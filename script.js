function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
}

function scrollToSection(section) {
    const element = document.querySelector(section);
    window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth',
    });
}

function animateWelcome() {
    document.querySelector('.hero h1').style.animation = 'fadeIn 2s ease-in-out';
}

function showEmoji() {
    const emoji = document.getElementById('emoji');
    emoji.style.display = 'block';
    setTimeout(() => {
        emoji.style.display = 'none';
    }, 2000);
}

function animateLogin() {
    alert('Login animation triggered!');
}
// Function to show the smoke effect when an element is clicked
function showSmokeEffect(event) {
    const smoke = document.createElement('div');
    smoke.classList.add('smoke');
    
    // Set the position of the smoke effect at the clicked point
    smoke.style.left = `${event.clientX - 50}px`;
    smoke.style.top = `${event.clientY - 50}px`;
    
    document.body.appendChild(smoke);

    // Remove the smoke effect after 1 second (duration of the animation)
    setTimeout(() => {
        smoke.remove();
    }, 1000);
}

// Attach event listeners to all elements that should have the smoke effect on click
document.querySelectorAll('a, .hero-image, .project, .post').forEach(item => {
    item.addEventListener('click', showSmokeEffect);
});

