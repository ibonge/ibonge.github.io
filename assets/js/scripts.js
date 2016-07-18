/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
	$('#mySidenav').css("right", "0px");
	$('#container-main').css("margin-left", "-300px");
	$(".icon-menu").hide();
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    $('#mySidenav').css("right", "-300px");
	$('#container-main').css("margin-left", "0");
	$(".icon-menu").show();
}

function closeOverlay() {
	$('#overlay').hide();
	hideAllApps();
}
function hideAllApps() {
	$('#messaging-apps').hide();
	$('#mailing-apps').hide();
	$('#productivity-apps').hide();
	$('#crm-apps').hide();
}
function openApp(name) {
	$('#'+name).show();
	$('#overlay').show();
}
$(function(){
	$('.form-inline').ajaxChimp({
		url: 'https://twitter.us13.list-manage.com/subscribe/post?u=8d67073d7a74f5450494ecf47&id=b5499c2f95'
	});
	$('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	 });
});