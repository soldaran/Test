
var $status = $('.pagingInfo');
var $slickElement = $('.slideshow');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slick.slideCount);
});

$slickElement.slick({
    prevArrow: '<button class="slide-arrow prev-arrow"><svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="13.5" cy="13.5" r="13" stroke="#5E239D" stroke-opacity="0.5" /><path d="M17.7911 13.8536C17.9863 13.6583 17.9863 13.3417 17.7911 13.1464L14.6091 9.96447C14.4138 9.7692 14.0972 9.7692 13.902 9.96447C13.7067 10.1597 13.7067 10.4763 13.902 10.6716L16.7304 13.5L13.902 16.3284C13.7067 16.5237 13.7067 16.8403 13.902 17.0355C14.0972 17.2308 14.4138 17.2308 14.6091 17.0355L17.7911 13.8536ZM9.5625 14H17.4375V13H9.5625V14Z" fill="#5E239D" /></svg></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="13" transform="matrix(-1 0 0 1 13.5 13.5)" stroke="#5E239D" stroke-opacity="0.5" /><path d="M9.20895 13.8536C9.01368 13.6583 9.01368 13.3417 9.20895 13.1464L12.3909 9.96447C12.5862 9.7692 12.9028 9.7692 13.098 9.96447C13.2933 10.1597 13.2933 10.4763 13.098 10.6716L10.2696 13.5L13.098 16.3284C13.2933 16.5237 13.2933 16.8403 13.098 17.0355C12.9028 17.2308 12.5862 17.2308 12.3909 17.0355L9.20895 13.8536ZM17.4375 14H9.5625V13H17.4375V14Z" fill="#5E239D" /></svg></button>'
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

