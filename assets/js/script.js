(function ($) {
  "use strict";

  //Hide Loading Box (Preloader)
  function handlePreloader() {
    if ($(".loader-wrap").length) {
      $(".loader-wrap").delay(1000).fadeOut(500);
    }
  }

  if ($(".preloader-close").length) {
    $(".preloader-close").on("click", function () {
      $(".loader-wrap").delay(200).fadeOut(500);
    });
  }

  //Update Header Style and Scroll to Top
  function headerStyle() {
    if ($(".main-header").length) {
      var windowpos = $(window).scrollTop();
      var siteHeader = $(".main-header");
      var scrollLink = $(".scroll-top");
      if (windowpos >= 110) {
        siteHeader.addClass("fixed-header");
        scrollLink.addClass("open");
      } else {
        siteHeader.removeClass("fixed-header");
        scrollLink.removeClass("open");
      }
    }
  }

  headerStyle();

  //Submenu Dropdown Toggle
  if ($(".main-header li.dropdown ul").length) {
    $(".main-header .navigation li.dropdown").append(
      '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'
    );
  }

  //Mobile Nav Hide Show
  if ($(".mobile-menu").length) {
    $(".mobile-menu .menu-box").mCustomScrollbar();

    var mobileMenuContent = $(".main-header .menu-area .main-menu").html();
    $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);
    $(".sticky-header .main-menu").append(mobileMenuContent);

    //Dropdown Button
    $(".mobile-menu li.dropdown .dropdown-btn").on("click", function () {
      $(this).toggleClass("open");
      $(this).prev("ul").slideToggle(500);
    });
    //Dropdown Button
    $(".mobile-menu li.dropdown .dropdown-btn").on("click", function () {
      $(this).prev(".megamenu").slideToggle(900);
    });
    //Menu Toggle Btn
    $(".mobile-nav-toggler").on("click", function () {
      $("body").addClass("mobile-menu-visible");
    });

    //Menu Toggle Btn
    $(".mobile-menu .menu-backdrop,.mobile-menu .close-btn").on(
      "click",
      function () {
        $("body").removeClass("mobile-menu-visible");
      }
    );

    // Add click handler for menu items
    $(".mobile-menu .menu-box .menu-outer li a").on("click", function () {
      $("body").removeClass("mobile-menu-visible");
    });
  }

  // Scroll to a Specific Div
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000
      );
    });
  }

  // Elements Animation
  if ($(".wow").length) {
    var wow = new WOW({
      mobile: false,
    });
    wow.init();
  }

  //Contact Form Validation
  if ($("#contact-form").length) {
    $("#contact-form").validate({
      rules: {
        username: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        phone: {
          required: true,
        },
        subject: {
          required: true,
        },
        message: {
          required: true,
        },
      },
    });
  }

  //Fact Counter + Text Count
  if ($(".count-box").length) {
    $(".count-box").appear(
      function () {
        var $t = $(this),
          n = $t.find(".count-text").attr("data-stop"),
          r = parseInt($t.find(".count-text").attr("data-speed"), 10);

        if (!$t.hasClass("counted")) {
          $t.addClass("counted");
          $({
            countNum: $t.find(".count-text").text(),
          }).animate(
            {
              countNum: n,
            },
            {
              duration: r,
              easing: "linear",
              step: function () {
                $t.find(".count-text").text(Math.floor(this.countNum));
              },
              complete: function () {
                $t.find(".count-text").text(this.countNum);
              },
            }
          );
        }
      },
      { accY: 0 }
    );
  }

  //LightBox / Fancybox
  if ($(".lightbox-image").length) {
    $(".lightbox-image").fancybox({
      openEffect: "fade",
      closeEffect: "fade",
      helpers: {
        media: {},
      },
    });
  }

  //Tabs Box
  if ($(".tabs-box").length) {
    $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
      e.preventDefault();
      var target = $($(this).attr("data-tab"));

      if ($(target).is(":visible")) {
        return false;
      } else {
        target
          .parents(".tabs-box")
          .find(".tab-buttons")
          .find(".tab-btn")
          .removeClass("active-btn");
        $(this).addClass("active-btn");
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .fadeOut(0);
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .removeClass("active-tab");
        $(target).fadeIn(300);
        $(target).addClass("active-tab");
      }
    });
  }

  //Accordion Box
  if ($(".accordion-box").length) {
    $(".accordion-box").on("click", ".acc-btn", function () {
      var outerBox = $(this).parents(".accordion-box");
      var target = $(this).parents(".accordion");

      if ($(this).hasClass("active") !== true) {
        $(outerBox).find(".accordion .acc-btn").removeClass("active");
      }

      if ($(this).next(".acc-content").is(":visible")) {
        return false;
      } else {
        $(this).addClass("active");
        $(outerBox).children(".accordion").removeClass("active-block");
        $(outerBox).find(".accordion").children(".acc-content").slideUp(300);
        target.addClass("active-block");
        $(this).next(".acc-content").slideDown(300);
      }
    });
  }

  //Accordion Box
  if ($(".accordion-box-two").length) {
    $(".accordion-box-two").on("click", ".acc-btn", function () {
      var outerBox = $(this).parents(".accordion-box-two");
      var target = $(this).parents(".accordion");

      if ($(this).hasClass("active") !== true) {
        $(outerBox).find(".accordion .acc-btn").removeClass("active");
      }

      if ($(this).next(".acc-content").is(":visible")) {
        return false;
      } else {
        $(this).addClass("active");
        $(outerBox).children(".accordion").removeClass("active-block");
        $(outerBox).find(".accordion").children(".acc-content").slideUp(300);
        target.addClass("active-block");
        $(this).next(".acc-content").slideDown(300);
      }
    });
  }

  // single-item-carousel
  // if ($('.single-item-carousel').length) {
  // 	$('.single-item-carousel').owlCarousel({
  // 		loop:true,
  // 		margin:30,
  // 		nav:true,
  // 		smartSpeed: 500,
  // 		autoplay: 1000,
  // 		navText: [ '<span class="fal fa-long-arrow-left"></span>', '<span class="fal fa-long-arrow-right"></span>' ],
  // 		responsive:{
  // 			0:{
  // 				items:1
  // 			},
  // 			480:{
  // 				items:1
  // 			},
  // 			600:{
  // 				items:1
  // 			},
  // 			800:{
  // 				items:1
  // 			},
  // 			1200:{
  // 				items:1
  // 			}

  // 		}
  // 	});
  // }

  if ($(".single-item-carousel").length) {
    var owl = $(".single-item-carousel");

    // Initialize Owl Carousel
    owl.owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      autoplay: true,
      autoplayTimeout: 3800,
      autoplayHoverPause: true,
      navText: [
        '<span class="fal fa-long-arrow-left"></span>',
        '<span class="fal fa-long-arrow-right"></span>',
      ],
      responsive: {
        0: { items: 1 },
        480: { items: 1 },
        600: { items: 1 },
        800: { items: 1 },
        1200: { items: 1 },
      },
    });

    // Select all Vimeo iframes
    var vimeoIframes = document.querySelectorAll('iframe[src*="vimeo.com"]');

    vimeoIframes.forEach(function (iframe) {
      var player = new Vimeo.Player(iframe);

      function stopAutoplay() {
        owl.trigger("stop.owl.autoplay"); // Stop carousel autoplay
      }

      function resumeAutoplay() {
        owl.trigger("play.owl.autoplay", [3800]); // Resume autoplay
      }

      function pauseVideoOnScroll() {
        document.querySelectorAll(".inner-box iframe").forEach((iframe) => {
          let player = new Vimeo.Player(iframe); // Assuming Vimeo Player

          player.getCurrentTime().then(function (seconds) {
            player.getPaused().then(function (paused) {
              if (!paused && !isElementInViewport(iframe)) {
                player.pause(); // Pause video if out of view
              }
            });
          });
        });
      }

      // Helper function to check if an element is in the viewport
      function isElementInViewport(el) {
        let rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
      }

      // Add event listener to check on scroll
      window.addEventListener("scroll", pauseVideoOnScroll);

      function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight)
        );
      }

      // Event Listeners
      iframe.addEventListener("click", stopAutoplay); // Desktop
      iframe.addEventListener("touchstart", stopAutoplay); // Mobile

      player.on("play", stopAutoplay);
      player.on("pause", resumeAutoplay);
      player.on("ended", resumeAutoplay);

      window.addEventListener("scroll", pauseVideoOnScroll); // Pause when out of viewport
    });
  }

  //two-column-carousel
  if ($(".two-column-carousel").length) {
    $(".two-column-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 500,
      autoplay: 1000,
      navText: [
        '<span class="icon-19"></span>',
        '<span class="icon-18"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 2,
        },
        1024: {
          items: 2,
        },
      },
    });
  }

  //three-item-carousel
  if ($(".three-item-carousel").length) {
    $(".three-item-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 500,
      autoplay: 1000,
      autoplayHoverPause: true, // Built-in option to pause autoplay on hover
      navText: [
        '<span class="fas fa-angle-left"></span>',
        '<span class="fas fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        600: {
          items: 2,
        },
        800: {
          items: 2,
        },
        1024: {
          items: 3,
        },
      },
    });
  }

  // Four Item Carousel
  if ($(".four-item-carousel").length) {
    $(".four-item-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 500,
      autoplay: 1000,
      navText: [
        '<span class="fal fa-long-arrow-left"></span>',
        '<span class="fal fa-long-arrow-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        800: {
          items: 3,
        },
        1024: {
          items: 4,
        },
        1200: {
          items: 4,
        },
      },
    });
  }

  // Five Item Carousel
  if ($(".five-item-carousel").length) {
    $(".five-item-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 500,
      autoplay: 1000,
      navText: [
        '<span class="fas fa-angle-left"></span>',
        '<span class="fas fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        800: {
          items: 3,
        },
        1024: {
          items: 4,
        },
        1200: {
          items: 5,
        },
      },
    });
  }

  // clients-carousel
  if ($(".clients-carousel").length) {
    $(".clients-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      smartSpeed: 500,
      autoplay: 1000,
      navText: [
        '<span class="fas fa-angle-left"></span>',
        '<span class="fas fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        800: {
          items: 3,
        },
        1024: {
          items: 4,
        },
        1200: {
          items: 5,
        },
      },
    });
  }

  //Client Testimonial Carousel
  if (
    $(".client-testimonial-carousel").length &&
    $(".client-thumbs-carousel").length
  ) {
    var $sync3 = $(".client-testimonial-carousel"),
      $sync4 = $(".client-thumbs-carousel"),
      flag = false,
      duration = 500;

    $sync3
      .owlCarousel({
        loop: true,
        items: 1,
        margin: 0,
        nav: true,
        navText: [
          '<span class="fas fa-angle-left"></span>',
          '<span class="fas fa-angle-right"></span>',
        ],
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
      })
      .on("changed.owl.carousel", function (e) {
        if (!flag) {
          flag = false;
          $sync4.trigger("to.owl.carousel", [e.item.index, duration, true]);
          flag = false;
        }
      });

    $sync4
      .owlCarousel({
        loop: true,
        margin: 80,
        items: 1,
        nav: false,
        navText: [
          '<span class="icon fa fa-long-arrow-left"></span>',
          '<span class="icon fa fa-long-arrow-right"></span>',
        ],
        dots: true,
        center: false,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
          0: {
            items: 1,
            autoWidth: false,
          },
          400: {
            items: 1,
            autoWidth: false,
          },
          600: {
            items: 1,
            autoWidth: false,
          },
          1000: {
            items: 1,
            autoWidth: false,
          },
          1200: {
            items: 1,
            autoWidth: false,
          },
        },
      })

      .on("click", ".owl-item", function () {
        $sync3.trigger("to.owl.carousel", [$(this).index(), duration, true]);
      })
      .on("changed.owl.carousel", function (e) {
        if (!flag) {
          flag = true;
          $sync3.trigger("to.owl.carousel", [e.item.index, duration, true]);
          flag = false;
        }
      });
  }

  //Screenshot carousel
  if ($(".appscreenshot-carousel").length) {
    $(".appscreenshot-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 700,
      autoplay: 5000,
      navText: [
        '<span class="flaticon-left-arrow"></span>',
        '<span class="flaticon-right-arrow"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        800: {
          items: 3,
        },
        992: {
          items: 4,
          center: true,
        },
        1200: {
          items: 5,
          center: true,
        },
      },
    });
  }

  if ($(".testimonial-section .bxslider").length) {
    $(".testimonial-section .bxslider").bxSlider({
      nextText: '<i class="fal fa-long-arrow-right"></i>',
      prevText: '<i class="fal fa-long-arrow-left"></i>',
      mode: "fade",
      auto: "true",
      speed: "700",
      pagerCustom: ".testimonial-section .slider-pager .thumb-box",
    });
  }

  //Add One Page nav
  if ($(".scroll-nav").length) {
    $(".scroll-nav").onePageNav();
  }

  //Sortable Masonary with Filters
  function enableMasonry() {
    if ($(".sortable-masonry").length) {
      var winDow = $(window);
      // Needed variables
      var $container = $(".sortable-masonry .items-container");
      var $filter = $(".filter-btns");

      $container.isotope({
        filter: "*",
        masonry: {
          columnWidth: ".masonry-item.small-column",
        },
        animationOptions: {
          duration: 500,
          easing: "linear",
        },
      });

      // Isotope Filter
      $filter.find("li").on("click", function () {
        var selector = $(this).attr("data-filter");

        try {
          $container.isotope({
            filter: selector,
            animationOptions: {
              duration: 500,
              easing: "linear",
              queue: false,
            },
          });
        } catch (err) {}
        return false;
      });

      winDow.on("resize", function () {
        var selector = $filter.find("li.active").attr("data-filter");

        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 500,
            easing: "linear",
            queue: false,
          },
        });
      });

      var filterItemA = $(".filter-btns li");

      filterItemA.on("click", function () {
        var $this = $(this);
        if (!$this.hasClass("active")) {
          filterItemA.removeClass("active");
          $this.addClass("active");
        }
      });
    }
  }

  enableMasonry();

  //Price Range Slider
  if ($(".price-range-slider").length) {
    $(".price-range-slider").slider({
      range: true,
      min: 0,
      max: 150,
      values: [30, 100],
      slide: function (event, ui) {
        $("input.property-amount").val(ui.values[0] + " - " + ui.values[1]);
      },
    });

    $("input.property-amount").val(
      $(".price-range-slider").slider("values", 0) +
        " - $" +
        $(".price-range-slider").slider("values", 1)
    );
  }

  // Progress Bar
  if ($(".count-bar").length) {
    $(".count-bar").appear(
      function () {
        var el = $(this);
        var percent = el.data("percent");
        $(el).css("width", percent).addClass("counted");
      },
      { accY: -50 }
    );
  }

  function onHoverthreeDmovement() {
    var tiltBlock = $(".js-tilt");
    if (tiltBlock.length) {
      $(".js-tilt").tilt({
        maxTilt: 20,
        perspective: 700,
        glare: true,
        maxGlare: 0,
      });
    }
  }

  // page direction
  function directionswitch() {
    if ($(".page_direction").length) {
      $(".direction_switch button").on("click", function () {
        $("body").toggleClass(function () {
          return $(this).is(".rtl, .ltr") ? "rtl ltr" : "rtl";
        });
      });
    }
  }

  /*	=========================================================================
	When document is Scrollig, do
	========================================================================== */

  jQuery(document).on("ready", function () {
    (function ($) {
      // add your functions
      directionswitch();
      onHoverthreeDmovement();
    })(jQuery);
  });

  /* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

  $(window).on("scroll", function () {
    headerStyle();
  });

  /* ==========================================================================
   When document is loaded, do
   ========================================================================== */

  $(window).on("load", function () {
    handlePreloader();
    enableMasonry();
  });
})(window.jQuery);





















document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navigation li a");

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  let activeSection = entry.target.getAttribute("id");

                  navLinks.forEach((link) => {
                      link.classList.remove("active");
                      if (link.getAttribute("href") === `#${activeSection}`) {
                          link.classList.add("active");
                      }
                  });
              }
          });
      },
      { root: null, rootMargin: "0px", threshold: 0.6 }
  );

  sections.forEach((section) => {
      observer.observe(section);
  });

  // Function to set active link on initial load
  function setActiveOnLoad() {
      let firstVisibleSection = Array.from(sections).find(section => {
          let rect = section.getBoundingClientRect();
          return rect.top >= 0 && rect.bottom <= window.innerHeight;
      });

      if (firstVisibleSection) {
          let activeSection = firstVisibleSection.getAttribute("id");
          navLinks.forEach((link) => {
              link.classList.remove("active");
              if (link.getAttribute("href") === `#${activeSection}`) {
                  link.classList.add("active");
              }
          });
      }
  }

  window.onload = setActiveOnLoad;

  // Add styles dynamically for animation
  const style = document.createElement('style');
  style.innerHTML = `
 @media (min-width: 769px) {
    .navigation li a {
        position: relative;
        text-decoration: none;
        color: #333;
        font-weight: 700; /* Increased boldness */
        font-size: 16px;
        transition: color 0.3s ease-in-out;
        padding: 5px 10px;
    }

    .navigation li a:hover {
        color: #3cb3c0;
    }

    .navigation li a.active {
        color: #3cb3c0;
        font-weight: 800; /* Even bolder for active state */
    }
}
  `;
  document.head.appendChild(style);
});

const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
      if (mutation.type === "attributes" && mutation.target.classList.contains("current")) {
          console.log("current class added by:", mutation.target);
          console.trace(); // Shows the function that triggered this change
      }
  });
});

document.querySelectorAll(".main-menu .navigation li").forEach(li => {
  observer.observe(li, { attributes: true });
});
