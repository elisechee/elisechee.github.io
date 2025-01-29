// script.js
document.addEventListener("DOMContentLoaded", function () {
    const reveals = document.querySelectorAll(".reveal");

    function checkReveal() {
        const windowHeight = window.innerHeight;
        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            const isVisible = elementTop < windowHeight - 50;  // Adjust trigger point if needed
            if (isVisible) {
                reveal.classList.add("reveal-visible");
            }
        });
    }

    // Event listeners for scroll and initial check
    window.addEventListener("scroll", checkReveal);
    checkReveal(); // Trigger initial reveal on page load
});

function getElementByAlt(altText) {
    const elements = document.querySelectorAll('[alt]');
  
    for (const element of elements) {
      if (element.alt === altText) {
        return element;
      }
    }
  
    return null; // Element not found
  }
  
  // Example usage:
  const image = getElementByAlt('About Image');
  if (image) {
    console.log('Found image:', image);
  } else {
    console.log('Image not found');
  }

// Store the original and hover image paths
const originalImage = "images/about/about.jpg";
const hoverImage = "images/about/about2.jpg";

// Get the image element by its ID
//const imageElement = document.getElementById("dynamic-img");

// Function to change to the hover image
function changeToHoverImage() {
    image.src = hoverImage;
}

// Function to revert to the original image
function revertToOriginalImage() {
    image.src = originalImage;
}
