//navbar js
const body = document.querySelector("body"),
nav = document.querySelector("nav"),
modeToggle = document.querySelector(".dark-light"),
searchToggle = document.querySelector(".searchToggle"),
sidebarOpen = document.querySelector(".sidebarOpen"),
siderbarClose = document.querySelector(".siderbarClose");
let getMode = localStorage.getItem("mode");
    if(getMode && getMode === "dark-mode"){
      body.classList.add("dark");
    }
// js code to toggle search box
  searchToggle.addEventListener("click" , () =>{
  searchToggle.classList.toggle("active");
});


//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
nav.classList.add("active");
});
body.addEventListener("click" , e =>{
let clickedElm = e.target;
if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
  nav.classList.remove("active");
}
});


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
    animateProgressBar('htmlProgressBar', 0, 85);
    animateProgressBar('cssProgressBar', 0, 70);
    animateProgressBar('jsProgressBar', 0, 60);
    animateProgressBar('pythonProgressBar', 0, 70);
    animateProgressBar('mysqlProgressBar', 0, 80);
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
        $(document).ready(function () {
            $(window).scroll(function () {
                // Get the scroll position
                var scroll = $(window).scrollTop();
                
                // Update the top property of the navbar based on the scroll position
                $('#navbar').css('top', scroll + 'px');
        
                // Update the height of the thin scrollbar based on the scroll position
                $('.thin-scrollbar').css('height', (100 * scroll / ($(document).height() - $(window).height())) + '%');
            });
        });


        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) { // Adjust scroll position as needed
              navbar.classList.add('scrolled');
            } else {
              navbar.classList.remove('scrolled');
            }
          });


          document.addEventListener("DOMContentLoaded", function() {
            var loadingScreen = document.getElementById('loading');
            loadingScreen.style.opacity = '0';
            setTimeout(function() {
                loadingScreen.style.display = 'none';
            }, 1000); // Match this duration with the transition duration in CSS
        });
        












        
        