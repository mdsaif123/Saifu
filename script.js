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



// ------------loader----------------   

document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed(".typing-text", {
        strings: ["Frontend developer", "UI/UX designer"],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 500,
        startDelay: 500,
        loop: true,
    });
});

// <!-- --------------Skill Page------------ -->

$(document).ready(function () {
    animateProgressBar('htmlProgressBar', 0, 70);
    animateProgressBar('cssProgressBar', 0, 65);
    animateProgressBar('jsProgressBar', 0, 60);
    animateProgressBar('pythonProgressBar', 0, 70);
    animateProgressBar('mysqlProgressBar', 0, 79);
});

function animateProgressBar(progressBarId, startWidth, endWidth) {
    var progressBar = $('#' + progressBarId + ' .progress-bar');
    progressBar.animate({
        width: endWidth + '%'
    }, 1500); // Adjust the duration as needed (in milliseconds)
}

// <!-- ============project================ -->
$(document).ready(function () {
    // Initial number of visible cards
    var initialVisibleCards = 3;

    // Select the card container and the "Show More" button
    var cardContainer = $('#cardContainer');
    var showMoreBtn = $('#showMoreBtn');

    // Hide cards that are initially not visible
    hideExtraCards(initialVisibleCards);

    // Event listener for the "Show More" button
    showMoreBtn.on('click', function () {
        // Increase the number of visible cards
        initialVisibleCards += 3;

        // Show additional cards
        hideExtraCards(initialVisibleCards);
    });

    // Function to hide extra cards based on the specified limit
    function hideExtraCards(limit) {
        var cards = cardContainer.children('.col-md-4');

        // Loop through all cards and toggle visibility
        cards.each(function (index) {
            if (index < limit) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });

        // Toggle the "Show More" button based on the remaining cards
        showMoreBtn.toggle(limit < cards.length);
    }
});

        // <!-- ================Contact Us=============== -->