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
    let landingCaption = document.getElementById("landing-caption");
    let img = document.getElementById("landing-img");

    // Set caption vertical offset.
    landingCaption.style.top = (((landingContainer.clientHeight/2) - (landingCaption.clientHeight/2)) * 0.75) + "px";

    // If the window is less than Bootstrap lg, change the image.
    if (window.innerWidth < 997) {
        console.log("Here");
        img.src = "../images/Me Mobile.jpg";
    } else {
        img.src = "../images/Me Desktop.jpg"
    }
}