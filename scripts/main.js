window.onload = (e) => {
    setStyles();
}

function setStyles() {
    let img = new Image();
    img.src = "../images/Me\ Desktop.jpg";
    img.onload = (e) => {
        document.getElementsByTagName("html")[0].classList.add("show-html");
    }
}