window.onload = (e) => {
    setStyles();
}

function setStyles() {
    // Change the landing content size to accomodate for the nav bar, if it's a mobile phone.
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

    // Change navbar style on scroll.
    window.onscroll = (e) => {
        if (window.scrollY >= 25) {
            let navbar = document.getElementById("navbar");
            navbar.style.backgroundColor = "white";
            navbar.style.boxShadow = "0 0 8px rgba(0, 0, 0, 0.07)";

            let brand = document.getElementById("navbar-brand");
            brand.style.color = "black";

            let navItems = navbar.getElementsByClassName("nav-item");
            for (let i = 0; i < navItems.length; i++) {
                navItems[i].classList.remove("hiding-nav-li");
                navItems[i].classList.add("showing-nav-li");
            }
        } else {
            let navbar = document.getElementById("navbar");
            navbar.style.backgroundColor = "";
            navbar.style.boxShadow = "";

            let brand = document.getElementById("navbar-brand");
            brand.style.color = "white";

            let navItems = navbar.getElementsByClassName("nav-item");
            for (let i = 0; i < navItems.length; i++) {
                navItems[i].classList.add("hiding-nav-li");
                navItems[i].classList.remove("showing-nav-li");
            }
        }
    }
}