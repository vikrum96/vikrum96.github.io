function toggleStyleSheet() {
    // Get style element by ID
    var styleElement = document.getElementById("mainStyleSheet");

    // Check the current stylesheet file name
    var currentStyleSheet = styleElement.getAttribute("href");

    // Determine new stylesheet file name
    var newStyleSheet = (currentStyleSheet.includes("styles_1.css")) ? "styles/styles_2.css" : "styles/styles_1.css";

    // Replace stylesheet with new stylesheet
    styleElement.setAttribute("href", newStyleSheet);

    // For persistence when page is refreshed, save new stylesheet name to localStorage.
    localStorage.setItem("currentStyleSheet", newStyleSheet);
}


window.onload = function() {
    // Get stylesheet name from local storage
    var savedStyleSheet = localStorage.getItem("currentStyleSheet");

    // Get HTML style element by ID
    var styleElement = document.getElementById("mainStyleSheet");

    // Replace href attribute of HTML element if a saved stylesheet exists
    if (savedStyleSheet) {
        styleElement.setAttribute("href", savedStyleSheet);
    }
};