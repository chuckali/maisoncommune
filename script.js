
//script.js
// Function to copy text to clipboard using Clipboard API
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      // Provide visual feedback to the user by adding the "clicked" class
      const element = document.activeElement;
      element.classList.add('clicked');
      setTimeout(() => {
        element.classList.remove('clicked'); // Remove the "clicked" class after a short delay
      }, 1000);
    }).catch((error) => {
      console.error('Failed to copy text:', error);
    });
  }
  
  // Get all elements with the class "copy-text"
  const copyTextElements = document.querySelectorAll('.copy-text');
  
  // Add event listeners to each element
  copyTextElements.forEach((element) => {
    element.addEventListener('click', () => {
      // Get the text to copy from the data-copy attribute
      const textToCopy = element.getAttribute('data-copy');
      copyToClipboard(textToCopy);
    });
  });

  //click highlight stay
// Using pure JavaScript
document.addEventListener("DOMContentLoaded", function() {
    var currentURL = window.location.href;
  
    var links = document.getElementsByClassName("nav-link");
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      if (link.href === currentURL) {
        link.classList.add("active");
        break; // Add the 'active' class to the first matched link and stop the loop
      }
    }
  });