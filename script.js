document.addEventListener("contextmenu", function (e) {
        e.preventDefault(); // Disable right-click
      });

      window.addEventListener("scroll", function () {
        var profile = document.querySelector(".profile");
        var contentBottom = document
          .querySelector(".content")
          .getBoundingClientRect().bottom;
        var profileBottom = profile.getBoundingClientRect().bottom;

        // Check if the window width is greater than 1024px (for large screens)
        if (window.innerWidth > 1024) {
            // Check if sticky reaches the top
            if (window.scrollY > 20) {
                profile.classList.add("is-sticky");
            } else {
                profile.classList.remove("is-sticky");
            }

            // Check if sticky reaches the bottom
            if (profileBottom >= contentBottom) {
                profile.classList.add("is-sticky-bottom");
            } else {
                profile.classList.remove("is-sticky-bottom");
            }
        }

      });

// Get elements to modify
const tiles = document.querySelectorAll(".tile");

tiles.forEach(tile => {
    const titleElement = tile.querySelector(".tile-title");
    const descriptionElement = tile.querySelector(".tile-description");

    const originalTitle = tile.getAttribute("data-original-title");
    const hoverTitle = tile.getAttribute("data-hover-title");
    const originalDescription = tile.getAttribute("data-original-description");
    const hoverDescription = tile.getAttribute("data-hover-description");

    tile.addEventListener("mouseenter", () => {
        titleElement.style.opacity = 0;
        descriptionElement.style.opacity = 0;

        setTimeout(() => {
            titleElement.textContent = hoverTitle;
            descriptionElement.textContent = hoverDescription;
            titleElement.style.transition = "opacity 0.2s ease";
            descriptionElement.style.transition = "opacity 0.2s ease";
            titleElement.style.opacity = 1;
            descriptionElement.style.opacity = 1;
        }, 200);
    });

    tile.addEventListener("mouseleave", () => {
        titleElement.style.opacity = 0;
        descriptionElement.style.opacity = 0;

        setTimeout(() => {
            titleElement.textContent = originalTitle;
            descriptionElement.textContent = originalDescription;
            titleElement.style.transition = "opacity 0.2s ease";
            descriptionElement.style.transition = "opacity 0.2s ease";
            titleElement.style.opacity = 1;
            descriptionElement.style.opacity = 1;
        }, 200);
    });
});

function toggleSidebar() {
    const profileSidebar = document.getElementById("profile-sidebar");
    profileSidebar.classList.toggle("active");
}



