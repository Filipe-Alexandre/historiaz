
function link(url) {
    window.location.href = url;
}

$('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500000000,
    dots: true,
  });