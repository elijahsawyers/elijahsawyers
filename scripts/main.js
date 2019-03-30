window.onload = (e) => {
    setStyles();
}

window.onresize = (e) => {
    setStyles();
}

function setStyles() {
    //====================================================================================================
    // Landing Content Styles
    //====================================================================================================

    // Grab all landing content.
    let landingContainer = document.getElementById("landing-container");
    let caption = document.getElementById("landing-caption");

    // Center the caption vertically.
    caption.style.top = ((landingContainer.clientHeight/2) - (caption.clientHeight/2)) + "px";
}