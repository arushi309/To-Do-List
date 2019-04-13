$("ul").on("click",".strike", function(){
	$(this).toggleClass("done");
})

$("ul").on("click",".del", function(){
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
	})
})

$("input").keypress(function(event){
	if(event.which===13)
	{
		var str= $(this).val();
		$("ul").append("<li><span class=\"del\"><i class=\"fas fa-trash-alt\"></i></span> <span class=\"strike\">" + str + "</span></li>");
		$(this).val("");



	}
})

$(".fa-plus").click(function(){
	$("input").fadeToggle();
})

