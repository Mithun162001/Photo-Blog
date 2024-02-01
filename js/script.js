document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  const navList = document.querySelector(".nav-list");

  // Toggle the mobile menu
  mobileMenuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
  });

  // Close the mobile menu when a link is clicked
  navList.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      mainNav.classList.remove("active");
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const scrollLinks = document.querySelectorAll(".btn-main");

    for (let link of scrollLinks) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({
          behavior: "smooth",
        });
      });
    }
  });
  document.addEventListener("DOMContentLoaded", () => {
    // Select all grid items
    const gridItems = document.querySelectorAll(".grid-item");

    // Add click event to each grid item
    gridItems.forEach((item) => {
      item.addEventListener("click", () => {
        // For now, we'll just log to the console
        console.log("Grid item clicked!");
        // You would typically open a modal or lightbox here
      });
    });
  });
  function openLightbox(elem) {
    var imgSrc = elem.children[0].src;
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");

    lightbox.style.display = "block";
    lightboxImg.src = imgSrc;
  }

  function closeLightbox(elem) {
    if (elem.id === "lightbox") {
      elem.style.display = "none";
    }
  }

  // Close lightbox when clicking on the '×' button
  document.querySelector(".close").onclick = function () {
    document.getElementById("lightbox").style.display = "none";
  };
});
