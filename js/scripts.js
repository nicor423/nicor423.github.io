$(document).ready(function() {

		var element = document.getElementById("hi");
	    element.classList.add("animated");
	    element.classList.add("bounceIn");

    var elemento = document.getElementById("chat");
    elemento.classList.add("animated");
    elemento.classList.add("bounce");
    elemento.classList.add("infinite");

    $("#formulario").validate();

    $("#email").click(function() {
      $(this).addClass('required');
    });

    $("#subject").click(function() {
      $(this).addClass('required');
    });

    $("#message").click(function() {
      $(this).addClass('required');
    });

    $("#btn_send").click(function() {
      $("#email").addClass('required');
      $("#subject").addClass('required');
      $("#message").addClass('required');
    });

	  //smooth scroll
		// Select all links with hashes
		$('a[href*="#"]')
  		// Remove links that don't actually link to anything
  		.not('[href="#"]')
  		.not('[href="#0"]')
  		.click(function(event) {
    	// On-page links
    	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      // Figure out element to scroll to
  		var target = $(this.hash);
  		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      	// Does a scroll target exist?
      	if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
        	scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
          	return false;
          } else {
            // $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
        }
    });
    }
  }

});

  // flip image when hover
  $("#img_1").hover(function() {
    /* Stuff to do when the mouse enters the element */
    $(this).css('z-index', '15');
    $("#img_2").css('z-index', '5');
  }, function() {
    /* Stuff to do when the mouse leaves the element */
    $(this).css('z-index', '5');
  });


    $("#img_2").hover(function() {
    /* Stuff to do when the mouse enters the element */
    $(this).css('z-index', '15');
    $("#img_1").css('z-index', '5');
  }, function() {
    /* Stuff to do when the mouse leaves the element */
    $(this).css('z-index', '5');
  });
  // ---------------------------------

});

// esconder logos en celulares
function myFunction(x) {
    if (x.matches) { // If media query matches
        $("#logos").hide();
    } else {
        $("#logos").show();
    }
}

var x = window.matchMedia("(max-width: 700px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes


