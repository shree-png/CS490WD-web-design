/* Shree Khambekar
10/27/2025 */

/* NIGHT MODE BUTTON: when this button is clicked, "night mode" is toggled 
(turned on if it's not in night mode, and turned off if it is in night mode).

I defined the "dark" class in CSS, and am just toggling it here when the nightBtn
is clicked (using an event listener). I defined all dark elements under body in the
CSS file (e.g., body.dark header) so I only have to toggle body's dark class.

I am using "night" quite literally and am making it nighttime themed, including a
starry background.:) */
const nightBtn = document.getElementById("nightBtn");

nightBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});


/* SCROLL TO TOP BUTTON: When this button is clicked, the screen goes back to the top.
This button only appears after scrolling a certain amount (100px). More in-depth
logic is explained throughout the code below. */
const scrollTopBtn = document.getElementById("scrollTopBtn");

// When the user scrolls 100px vertically, show the button
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        /* I googled this, the "inline" in "inline-block"
        allows the text align: center on the button's container (container2) 
        to still work */
        scrollTopBtn.style.display = "inline-block";
    } else {
        scrollTopBtn.style.display = "none"; //else, don't show the button
    }
});

/* When the Scroll to Top button is clicked, the window scrolls to 
"top: 0", meaning the vertical scroll position is reset to the very top of the page.
Behavior: "smooth" makes the scrolling animate smoothly instead of instantly
jumping. */
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* DYNAMIC GREETING: greets the user based on the current time. Between 5am and 12pm
displays Good Morning, between 12pm and 6pm (18) displays Good Afternoon, and 
otherwise it displays Good Evening. */

// Get current hour
const now = new Date();
/*I looked this function up, it gets the specific/current hour based on the date
object ("now") */
const hour = now.getHours();

// Select the element using .getElementByID (per usual)
const greeting = document.getElementById("greeting");

//Determine the greeting based on the hour
//I looked up the emoji unicodes, because copy & pasting them directly wasn't working
if (hour >= 5 && hour < 12) {
    greeting.textContent = "Good morning\u2600\uFE0f";
} else if (hour >= 12 && hour < 18) {
    greeting.textContent = "Good afternoon\u{1F307}";
} else {
    greeting.textContent = "Good evening\u{1F319}";
}
