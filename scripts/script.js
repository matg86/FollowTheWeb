$(function(){
	$(".blog-logos").hover(function(){
		$(".info", this).slideToggle(1000);
	});
});


$(function() {
    
    //Each time the wind0w scrolls
    $(window).scroll( function(){
    
        //Checks the location of targetted elements
        $(".hideThis").each( function(){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            //If targeted element is in view - Fades the element in
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({"opacity":"1"},800);
                    
            }
            
        }); 
    
    });
    
});

