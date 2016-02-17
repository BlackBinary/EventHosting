$(document).ready(function(){
    
	$(".-sign-in").hide();
	
	$("button").mouseenter(function(){
        
		$(this).addClass('animated infinite pulse');
    
	});
	
	$("button").mouseleave(function(){
        
		$(this).removeClass('animated infinite pulse');
    
	});
	
	//------------------------------------------------------------------------------//
	
	$("#sign-in").mouseenter(function(){
        
		$(this).addClass('animated tada');
		$(this).removeClass('infinite');
    
	});
	
	$("#sign-in").mouseleave(function(){
        
		$(this).removeClass('animated tada');
		$(this).removeClass('infinite');
    
	});
	
	$("#sign-in").click(function(){
		
		$(".-sign-up").removeClass('animated flipInY');
		$('.-sign-up').addClass("animated flipOutY");
		
		setTimeout(function(){
			$(".-sign-up").hide();
			$(".-sign-in").removeClass('animated flipOutY');
			$(".-sign-in").show();
			$('.-sign-in').addClass("animated flipInY");
		}, 1000);
		
	});
	
	//-------------------------------------------------------------------------------\\
	
	//------------------------------------------------------------------------------//
	
	$("#sign-up").mouseenter(function(){
        
		$(this).addClass('animated tada');
		$(this).removeClass('infinite');
    
	});
	
	$("#sign-up").mouseleave(function(){
        
		$(this).removeClass('animated tada');
		$(this).removeClass('infinite');
    
	});
	
	$("#sign-up").click(function(){
		 
		$(".-sign-in").removeClass('animated flipInY');
		$('.-sign-in').addClass("animated flipOutY");
		
		setTimeout(function(){
			$(".-sign-in").hide();
			$(".-sign-up").removeClass('animated flipOutY');
			$(".-sign-up").show();
			$('.-sign-up').addClass("animated flipInY");
		}, 1000);
		
	});
	
	//-------------------------------------------------------------------------------\\
	
	//------------------------------------------------------------------------------//
	
	$("#Register").mouseenter(function(){
        
		$(this).addClass('animated infinite pulse');
    
	});
	
	$("#Register").mouseleave(function(){
        
		$(this).removeClass('animated infinite pulse');
    
	});
	
	
	//-------------------------------------------------------------------------------\\
	
	
	//------------------------------------------------------------------------------//
	
	$("#sign-up-Google").mouseenter(function(){
        
		$(this).addClass('animated infinite pulse');
    
	});
	
	$("#sign-up-Google").mouseleave(function(){
        
		$(this).removeClass('animated infinite pulse');
    
	});
	
	
	//-------------------------------------------------------------------------------\\
	
	//------------------------------------------------------------------------------//
	
	$("#sign-up-Facebook").mouseenter(function(){
        
		$(this).addClass('animated infinite pulse');
    
	});
	
	$("#sign-up-Facebook").mouseleave(function(){
        
		$(this).removeClass('animated infinite pulse');
    
	});
	
	
	//-------------------------------------------------------------------------------\\
	
	
	//------------------------------------------------------------------------------//
	
	$("#sign-up-Spotify").mouseenter(function(){
        
		$(this).addClass('animated infinite pulse');
    
	});
	
	$("#sign-up-Spotify").mouseleave(function(){
        
		$(this).removeClass('animated infinite pulse');
    
	});
	
	
	//-------------------------------------------------------------------------------\\
	
	//------------------------------------------------------------------------------//
	
	$("#sign-up-Twitter").mouseenter(function(){
        
		$(this).addClass('animated infinite pulse');
    
	});
	
	$("#sign-up-Twitter").mouseleave(function(){
        
		$(this).removeClass('animated infinite pulse');
    
	});
	
	
	//-------------------------------------------------------------------------------\\
	
	
	//------------------------------------------------------------------------------//
	
	$("#Login").mouseenter(function(){
        
		$(this).addClass('animated infinite pulse');
    
	});
	
	$("#Login").mouseleave(function(){
        
		$(this).removeClass('animated infinite pulse');
    
	});
	
	
	//-------------------------------------------------------------------------------\\
	
	
	//------------------------------------------------------------------------------//
	
	$("#sign-in-Google").mouseenter(function(){
        
		$(this).addClass('animated infinite pulse');
    
	});
	
	$("#sign-in-Google").mouseleave(function(){
        
		$(this).removeClass('animated infinite pulse');
    
	});
	
	
	//-------------------------------------------------------------------------------\\
	
	//------------------------------------------------------------------------------//
	
	$("#sign-in-Facebook").mouseenter(function(){
        
		$(this).addClass('animated infinite pulse');
    
	});
	
	$("#sign-in-Facebook").mouseleave(function(){
        
		$(this).removeClass('animated infinite pulse');
    
	});
	
	
	//-------------------------------------------------------------------------------\\
	
	
	//------------------------------------------------------------------------------//
	
	$("#sign-in-Spotify").mouseenter(function(){
        
		$(this).addClass('animated infinite pulse');
    
	});
	
	$("#sign-in-Spotify").mouseleave(function(){
        
		$(this).removeClass('animated infinite pulse');
    
	});
	
	
	//-------------------------------------------------------------------------------\\
	
	//------------------------------------------------------------------------------//
	
	$("#sign-in-Twitter").mouseenter(function(){
        
		$(this).addClass('animated infinite pulse');
    
	});
	
	$("#sign-in-Twitter").mouseleave(function(){
        
		$(this).removeClass('animated infinite pulse');
    
	});
	
	
	//-------------------------------------------------------------------------------\\
	
});