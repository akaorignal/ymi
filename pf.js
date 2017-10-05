$(document).ready(function(){
      $('.carousel').carousel();
    });

	 $('.carousel.carousel-slider').carousel({fullWidth: true});
        
$('.carousel').carousel('next');
$('.carousel').carousel('next', 3); // Move next n times.

// Previous slide
$('.carousel').carousel('prev');
$('.carousel').carousel('prev', 4); // Move prev n times.

// Set to nth slide
$('.carousel').carousel('set', 4);

// Destroy carousel
$('.carousel').carousel('destroy');
        



        // carousel
        function animationClick(element, animation){
    element = $(element);
    element.click(
        function() {
            element.addClass('animated ' + animation);        
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);         
  
        });
}


$(document).ready(function(){
    $('.carousel').each(function() {
        animationHover(this, 'bounce');
    });
});