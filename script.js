let isMenuOpen = false;

function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    const bars = document.querySelectorAll('.bar');

    if (!isMenuOpen) {
        navbarLinks.style.display = 'flex';
        bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        bars[1].style.transform = 'rotate(45deg) translate(-5px, -6px)';
       
        isMenuOpen = true;
    } else {
        navbarLinks.style.display = 'none';
        bars[0].style.transform = 'none';
        bars[1].style.transform = 'none';
       
        isMenuOpen = false;
    }
}



// var roles = [
//     "I am a Front End Developer",
//     "I am a UI/UX Designer",
//     "I am a Full Stack Developer",
//     // Add more roles as needed
// ];

// var currentRoleIndex = 0;
// var currentCharacterIndex = 0;
// var typingSpeed = 100; // Adjust typing speed (lower value means faster)

// function typeNextCharacter() {
//     var textElement = document.getElementById('typing');
//     var currentRole = roles[currentRoleIndex];
//     textElement.innerHTML = currentRole.substring(0, currentCharacterIndex);

//     if (currentCharacterIndex < currentRole.length) {
//         currentCharacterIndex++;
//         setTimeout(typeNextCharacter, typingSpeed);
//     } else {
//         setTimeout(eraseText, 1500); // Wait for 1.5 seconds before erasing
//     }
// }

// function eraseText() {
//     var textElement = document.getElementById('typing');
//     if (currentCharacterIndex > 0) {
//         var currentRole = roles[currentRoleIndex];
//         textElement.innerHTML = currentRole.substring(0, currentCharacterIndex - 1);
//         currentCharacterIndex--;
//         setTimeout(eraseText, typingSpeed / 2);
//     } else {
//         currentRoleIndex = (currentRoleIndex + 1) % roles.length;
//         setTimeout(typeNextCharacter, typingSpeed); // Start typing the next role
//     }
// }

// // Start the typing animation
// setTimeout(typeNextCharacter, typingSpeed);