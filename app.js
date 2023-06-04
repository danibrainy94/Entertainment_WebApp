const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");


navToggle.addEventListener("click", linksVisible);

function linksVisible () {
    
    const newlinks = links.classList;
    if (newlinks.contains("show-links")){
        newlinks.remove("show-links");
    } else {
        newlinks.add("show-links");
    }

    
};

// links.classList.toggle("show-links");