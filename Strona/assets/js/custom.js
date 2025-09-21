$(function () {
  // Header Scroll
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 60) {
      $("header").addClass("fixed-header");
    } else {
      $("header").removeClass("fixed-header");
    }
  });

  document.querySelectorAll('.header-link[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (!target) return;

      const offset = 100; // ilość px przesunięcia, dopasuj do wysokości headera
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    });
  });

  // Featured Owl Carousel
  $(".featured-projects-slider .owl-carousel").owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  // Count
  $(".count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 1000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });

  // ScrollToTop
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const btn = document.getElementById("scrollToTopBtn");
  btn.addEventListener("click", scrollToTop);

  window.onscroll = function () {
    const btn = document.getElementById("scrollToTopBtn");
    if (
      document.documentElement.scrollTop > 100 ||
      document.body.scrollTop > 100
    ) {
      btn.style.display = "flex";
    } else {
      btn.style.display = "none";
    }
  };

  // Aos
  AOS.init({
    once: true,
  });
});
