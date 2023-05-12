// $('a[href^="#"]').on('click', function (event) {
//     var target = $(this.getAttribute('href'));
//     if (target.length) {
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: target.offset().top
//         }, 1000);
//     }
// });



const scroll = document.querySelectorAll('.scroll');


scroll.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const href = link.getAttribute('href');
        const targetDiv = document.querySelector(href);
        const targetOffsetTop = targetDiv.offsetTop;
        window.scrollTo({
            top: targetOffsetTop,
            behavior: "smooth"
        });
    });
});

