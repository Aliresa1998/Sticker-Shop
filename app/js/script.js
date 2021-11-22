$(document).ready(function () {
  //new-products slider and best-selling-products slider
  $(".owl-carousel").owlCarousel({
    items: 5,
    margin: 5,
    stagePadding: 10,
    loop: true,
    rtl: true,
    autoWidth: true,
    lazyLoad: true,
    freeDrag: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 2000
  });

  $(".modal-app-info").click(function () {
    Swal.fire({
      icon: 'info',
      text: 'به زودی اپلیکیشن ما در استور های معتبر منتشر خواهد شد',
    })
  });


  const details = document.querySelectorAll("details");
  details.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
      details.forEach((detail) => {
        if (detail !== targetDetail) {
          detail.removeAttribute("open");
        }
      });
    });
  });


});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.dropdown-menu').forEach(function (element) {
    element.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  });

});
