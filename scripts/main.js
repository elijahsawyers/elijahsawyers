window.onload = (e) => {
    setStyles();
}

function setStyles() {
    // Change the landing image src and size if it's a mobile phone.
    let landingContent = document.getElementById("landing-content");
    if (window.innerWidth <= 768) {
        landingContent.style.height = (landingContent.clientHeight - document.getElementById("navbar").clientHeight) + "px"
    }

    // When the landing image loads, fade in the content.
    let img = new Image();
    img.src = "../images/Me\ Desktop.jpg";
    img.onload = (e) => {
        document.getElementsByTagName("html")[0].classList.add("show-html");
    };
    delete img;
}