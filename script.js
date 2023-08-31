// Simple JavaScript beautifier for the DevOps course
function beautifyText() {
    const textToBeautify = document.querySelector(".container p");
    textToBeautify.style.fontWeight = "bold";
    textToBeautify.style.color = "#e74c3c";
    textToBeautify.style.textDecoration = "underline";
}

// Scroll to the top of the page smoothly
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Button click animations
document.getElementById("returnToTop").addEventListener("click", () => {
    scrollToTop();
});

document.getElementById("subscribe").addEventListener("click", () => {
    alert("You are now subscribed to the DevOps course!");
});

// Call the beautifyText function when the page loads
window.addEventListener("load", beautifyText);
