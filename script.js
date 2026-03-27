// script.js

// Function to handle tab navigation
function openTab(event, tabName) {
    // Hide all tab content
    const tabContent = document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }

    // Remove active class from all tabs
    const tabLinks = document.getElementsByClassName('tablinks');
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(' active', '');
    }

    // Show the current tab and add an active class to the button that opened the tab
    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.className += ' active';
}

// Function to initialize tabs on page load
function initTabs() {
    document.getElementById('defaultOpen').click(); // Simulate click to open the default tab
}

// Adding event listener to initialize tabs
document.addEventListener('DOMContentLoaded', initTabs);