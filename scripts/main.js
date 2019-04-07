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
    let grey = document.getElementById("landing-grey-bg");

    // If the window is less than Bootstrap lg, change the image.
    if (window.innerWidth < 997) {
        console.log("Here");
        img.src = "../images/Me Mobile.jpg";
    } else {
        img.src = "../images/Me Desktop.jpg"
    }

    // Wait for the image to load before styling, due to container size change.
    img.onload = (e) => {
        // Set caption vertical offset based on the container size.
        landingCaption.style.top = (((landingContainer.clientHeight/2) - (landingCaption.clientHeight/2)) * 0.75) + "px";
        grey.style.display = "block";
    }
}